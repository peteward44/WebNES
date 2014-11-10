/*
This file is part of WebNES.

WebNES is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

WebNES is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with WebNES.  If not, see <http://www.gnu.org/licenses/>.
*/

this.Nes = this.Nes || {};

"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RAMBO-1 - MMC3 inspired mapper.

// TODO: Accurate IRQ timing ( currently the scanline-mode works exactly like MMC3, which is not correct http://forums.nesdev.com/viewtopic.php?p=117323#p117323 )


var mapper64 = function() {
	this.bankSwapByte = 0;
	this.prgRamDisableWrite = false;
	this.chipEnable = this.interruptsEnabled = true;
	this.irqCounter = this.irqLatch = 0;
	this.mReloadFlag = false;

	this.lastA12Raise = 0;

	this.mSpriteAddress = this.mScreenAddress = false;
	this.mRenderingEnabled = false;
	this._cpuCycleMode = false;

	this.banks = new Int32Array( 16 );
	this.banks[0] = 0;
	this.banks[1] = 2;
	this.banks[2] = 4;
	this.banks[3] = 5;
	this.banks[4] = 6;
	this.banks[5] = 7;

	this.banks[6] = 0;
	this.banks[7] = 1;
	
	this.banks[8] = 2;
	this.banks[9] = 3;
	// inbetween banks not used
	this.banks[15] = 0;
};

mapper64.prototype = Object.create( Nes.basemapper.prototype );

mapper64.prototype._eventIrq = function() { 
	// don't do anything - call to synchronise() will trigger the irq
	this.mainboard.synchroniser.changeEventTime( this._irqEventId, -1 );
};

mapper64.prototype.mapperSaveState = function( state ) {
	
	state.bankSwapByte = this.bankSwapByte;
	state.prgRamDisableWrite = this.prgRamDisableWrite;
	state.chipEnable = this.chipEnable;
	state._cpuCycleMode = this._cpuCycleMode;
	state.interruptsEnabled = this.interruptsEnabled;
	state.irqCounter = this.irqCounter;
	state.irqLatch = this.irqLatch;
	state.mReloadFlag = this.mReloadFlag;
	state.lastA12Raise = this.lastA12Raise;
	state.mSpriteAddress = this.mSpriteAddress;
	state.mScreenAddress = this.mScreenAddress;
	state.mRenderingEnabled = this.mRenderingEnabled;
	state.banks = Nes.uintArrayToString( this.banks );
	state._interruptInProgress = this._interruptInProgress;
};

mapper64.prototype.mapperLoadState = function( state ) {

	this.bankSwapByte = state.bankSwapByte;
	this.prgRamDisableWrite = state.prgRamDisableWrite;
	this._cpuCycleMode = state._cpuCycleMode;
	this.chipEnable = state.chipEnable;
	this.interruptsEnabled = state.interruptsEnabled;
	this.irqCounter = state.irqCounter;
	this.irqLatch = state.irqLatch;
	this.mReloadFlag = state.mReloadFlag;
	this.lastA12Raise = state.lastA12Raise;
	this.mSpriteAddress = state.mSpriteAddress;
	this.mScreenAddress = state.mScreenAddress;
	this.mRenderingEnabled = state.mRenderingEnabled;
	this.banks = Nes.stringToUintArray( state.banks );
	this._interruptInProgress = state._interruptInProgress;
};

mapper64.prototype.syncBanks = function( doPrg, doChr ) {

	if ( doPrg ) {
		this.switch8kPrgBank( this.get8kPrgBankCount() - 1, 3 );

		// RAMBO-1 changes prg banks slightly different to mmc3
		if ( ( this.bankSwapByte & 0x40 ) > 0 ) {
			this.switch8kPrgBank( this.banks[15], 0 );
			this.switch8kPrgBank( this.banks[6], 1 );
			this.switch8kPrgBank( this.banks[7], 2 );
		} else {
			this.switch8kPrgBank( this.banks[6], 0 );
			this.switch8kPrgBank( this.banks[7], 1 );
			this.switch8kPrgBank( this.banks[15], 2 );
		}
	}
/*
		   0: Select 2 KB CHR bank at PPU $0000-$07FF (or $1000-$17FF);
		   1: Select 2 KB CHR bank at PPU $0800-$0FFF (or $1800-$1FFF);
		   2: Select 1 KB CHR bank at PPU $1000-$13FF (or $0000-$03FF);
		   3: Select 1 KB CHR bank at PPU $1400-$17FF (or $0400-$07FF);
		   4: Select 1 KB CHR bank at PPU $1800-$1BFF (or $0800-$0BFF);
		   5: Select 1 KB CHR bank at PPU $1C00-$1FFF (or $0C00-$0FFF);
*/
	if ( doChr ) {
		this.mainboard.synchroniser.synchronise();
		
		var bank0 = this.banks[0] & 0xFE;
		var bank1 = this.banks[1] & 0xFE;
		
		// RAMBO-1 supports a full 1k chr bank mode in addition to the 2kb/1kb bank swap
		switch ( this.bankSwapByte & 0xA0 ) {
			case 0x00: // 2 KiB switchable CHR banks at $0000, $0800; 1 KiB switchable CHR banks at $1000, $1400, $1800, $1C00
				this.switch1kChrBank( bank0, 0 );
				this.switch1kChrBank( bank0 + 1, 1 );
				this.switch1kChrBank( bank1, 2 );
				this.switch1kChrBank( bank1 + 1, 3 );
				this.switch1kChrBank( this.banks[2], 4 );
				this.switch1kChrBank( this.banks[3], 5 );
				this.switch1kChrBank( this.banks[4], 6 );
				this.switch1kChrBank( this.banks[5], 7 );
			break;
			case 0x20: // 1 KiB switchable CHR banks at $0000, $0400, $0800, $0C00, $1000, $1400, $1800, $1C00
				this.switch1kChrBank( this.banks[0], 0 );
				this.switch1kChrBank( this.banks[8], 1 );
				this.switch1kChrBank( this.banks[1], 2 );
				this.switch1kChrBank( this.banks[9], 3 );
				this.switch1kChrBank( this.banks[2], 4 );
				this.switch1kChrBank( this.banks[3], 5 );
				this.switch1kChrBank( this.banks[4], 6 );
				this.switch1kChrBank( this.banks[5], 7 );
			break;
			case 0x80: // 2 KiB switchable CHR banks at $1000, $1800; 1 KiB switchable CHR banks at $0000, $0400, $0800, $0C00
				this.switch1kChrBank( this.banks[2], 0 );
				this.switch1kChrBank( this.banks[3], 1 );
				this.switch1kChrBank( this.banks[4], 2 );
				this.switch1kChrBank( this.banks[5], 3 );
				this.switch1kChrBank( bank0, 4 );
				this.switch1kChrBank( bank0 + 1, 5 );
				this.switch1kChrBank( bank1, 6 );
				this.switch1kChrBank( bank1 + 1, 7 );
			break;
			case 0xA0: // 0x80 + 0x20 =  // 1 KiB switchable CHR banks at $0000, $0400, $0800, $0C00, $1000, $1400, $1800, $1C00
				this.switch1kChrBank( this.banks[2], 0 );
				this.switch1kChrBank( this.banks[3], 1 );
				this.switch1kChrBank( this.banks[4], 2 );
				this.switch1kChrBank( this.banks[5], 3 );
				this.switch1kChrBank( this.banks[0], 4 );
				this.switch1kChrBank( this.banks[8], 5 );
				this.switch1kChrBank( this.banks[1], 6 );
				this.switch1kChrBank( this.banks[9], 7 );	
			break;
		}
	}
};


mapper64.prototype.reset = function() {
	this.prgRamDisableWrite = false;
	this.chipEnable = this.interruptsEnabled = true;
	this._interruptInProgress = false;

	this._A12LowerLimit = ( COLOUR_ENCODING_VBLANK_SCANLINES ) * MASTER_CYCLES_PER_SCANLINE;
	this._A12UpperLimit = ( COLOUR_ENCODING_FRAME_SCANLINES - 1 ) * MASTER_CYCLES_PER_SCANLINE;
		

	this.lastA12Raise = 0;

	this.mSpriteAddress = this.mScreenAddress = false;
	this.mRenderingEnabled = false;
	this.irqCounter = 0xFF;
	this.irqLatch = 0xFF;
	this.mReloadFlag = false;
	this.lastA12Raise = 0;
	this._cpuCycleMode = false;
	this.bankSwapByte = 0;
	this.banks[0] = 0;
	this.banks[1] = 2;
	this.banks[2] = 4;
	this.banks[3] = 5;
	this.banks[4] = 6;
	this.banks[5] = 7;

	this.banks[6] = 0;
	this.banks[7] = 1;
	
	this.banks[8] = 2;
	this.banks[9] = 3;
	// inbetween banks not used
	this.banks[15] = this.get8kPrgBankCount()-2;
	
	if ( this.get1kChrBankCount() === 0 ) {
		this.useVRAM( 8 );
	}
	
	var that = this;
	// TODO: Need to remove this event on mapper unload
	this._irqEventId = this.mainboard.synchroniser.addEvent( 'mapper64 irq', -1, function() { that._eventIrq(); } );
	
	this.syncBanks( true, true );
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};

mapper64.prototype.write8PrgRom = function( offset, data ) {
	
	var top3Bits = offset & 0xE000;
	switch ( top3Bits ) {
		case 0x8000:
			if ( ( offset & 0x1 ) === 0 )
			{ // even
				if ( this.bankSwapByte !== data & 0xFF ) {
					this.bankSwapByte = data & 0xFF;
					this.syncBanks( true, true );
				}
			}
			else
			{ // odd
				var swapByte = this.bankSwapByte & 0xF;
				if ( this.banks[ swapByte ] !== data & 0xFF ) {
					this.banks[ swapByte ] = data & 0xFF;
					var isPrgSwap = swapByte === 6 || swapByte === 7 || swapByte === 15;
					var isChrSwap = swapByte <= 5 || swapByte === 8 || swapByte === 9;
					this.syncBanks( isPrgSwap, isChrSwap );
				}
			}
		break;
		case 0xA000:
			if ( ( offset & 0x1 ) === 0 )
			{ // even
				var mirroringMethod = ( data & 0x1 ) > 0 ? PPU_MIRRORING_HORIZONTAL : PPU_MIRRORING_VERTICAL;
				if ( mirroringMethod !== this.mainboard.ppu.getMirroringMethod() ) {
					this.mainboard.synchroniser.synchronise();
					this.mainboard.ppu.changeMirroringMethod( mirroringMethod );
				}
			}
			else
			{ // odd
				this.prgRamDisableWrite = ( data & 0x40 ) > 0;
				this.chipEnable = ( data & 0x80 ) > 0;
			}
		break;
		case 0xC000:
			if ( ( offset & 0x1 ) === 0 )
			{ // even
				if ( this.irqLatch !== data ) {
					this.mainboard.synchroniser.synchronise();
				}
				this.irqLatch = data;
			}
			else
			{ // odd // RAMBO-1: Writing to this register also clears the IRQ counter so that it will be reloaded at next clock,
				// or the next scanline, depending on the selected mode. This also resets the prescaler in cycle mode, so the next clock will occur 4 cycles later.
				if ( !this.mReloadFlag ) {
					this.mainboard.synchroniser.synchronise();
				}
				this.mReloadFlag = true;
				this._cpuCycleMode = ( data & 0x1 ) > 0;
				// if ( this._cpuCycleMode ) {
					// console.log( "Mapper 64 cpu cycle mode is active" );
				// } else {
					// console.log( "Mapper 64 cpu cycle mode is inactive" );
				// }
			}
			this.updateIRQTime( this.mainboard.synchroniser.getCpuMTC(), true );
		break;
		case 0xE000:
			if ( ( offset & 0x1 ) === 0 )
			{ // even - "Writing any value to this register will disable MMC3 interrupts AND acknowledge any pending interrupts."
				this.interruptsEnabled = false;
				if ( this._interruptInProgress ) {
					this.mainboard.cpu.holdIrqLineLow( false );
					this._interruptInProgress = false;
				}
//				Log::Write( LOG_MAPPER, ( boost::format( "Interrupts disabled on mapper" ) ).str() );
			}
			else
			{ // odd
				if ( !this.interruptsEnabled ) {
					this.mainboard.synchroniser.synchronise();
				}
				this.interruptsEnabled = true;
//				Log::Write( LOG_MAPPER, ( boost::format( "Interrupts enabled on mapper" ) ).str() );
			}
			this.updateIRQTime( this.mainboard.synchroniser.getCpuMTC(), true );
		break;
	}
};

mapper64.prototype.decrementIrqCounter = function( tickCount ) {

	this.lastA12Raise = tickCount;
	var doIrq = false;
	
	if ( this.mReloadFlag )
	{
		//doIrq = this.irqLatch === 0;// MMC3 revA behaviour
		this.irqCounter = this.irqLatch + 1;
		this.mReloadFlag = false;
		
	}
	else if ( this.irqCounter === 0 ) {
		this.irqCounter = this.irqLatch;
		//if ( this.irqCounter === 0 )
		//	doIrq = true;
	}
	else
	{
		if ( this.irqCounter > 0 )
			this.irqCounter--;
		doIrq = this.irqCounter === 0;
	}
	
	if ( doIrq && this.interruptsEnabled && !this._interruptInProgress ) {
		//console.log( "[" + this.mainboard.ppu.frameCounter + "]" + pos.x + "x" + pos.y + " IRQ cpu: " + cpupos.x + "x" + cpupos.y );
		this._interruptInProgress = true;
		this.mainboard.cpu.holdIrqLineLow( true );
	}
};

mapper64.prototype.ppuA12Latch = function() {
	this.mainboard.synchroniser.synchronise();
	this.decrementIrqCounter( this.mainboard.synchroniser.getCpuMTC() );
	this.updateIRQTime( this.mainboard.synchroniser.getCpuMTC(), true );
};


mapper64.prototype.calculateNextA12Raise = function( cpuMTC ) {

	// TODO: refactor this - could be more efficient
	var pixelEvent = -1;
	var firstScanline = 0;
	if ( this.mRenderingEnabled )
	{
		if ( this.mSpriteAddress && !this.mScreenAddress )
		{
			pixelEvent = 265; // 260
			firstScanline = 0;
		}
		// else if ( this.mSpriteAddress && this.mScreenAddress )
		// {
			// pixelEvent = 340;//324;
			// firstScanline = -1;
		// }
		else //if ( this.mScreenAddress && !this.mSpriteAddress )
		{
			pixelEvent = 9;// 324; // 9;
			firstScanline = 0;// -1;
		}
	}

	if ( cpuMTC >= this._A12UpperLimit || pixelEvent < 0 ) {
		return -1;
	}

	var modmtc = cpuMTC % MASTER_CYCLES_PER_SCANLINE; // ticks from the start of the current scanline
	var scanlineEvent = MASTER_CYCLES_PER_PPU * pixelEvent; // ticks from the start of the scanline when IRQ is decremented

	var startMtc = cpuMTC - modmtc + scanlineEvent; // ticks till next irq decrement event

	if ( startMtc <= cpuMTC )
		startMtc += MASTER_CYCLES_PER_SCANLINE; // if we have already passed the irq event, move onto next scanline
	if ( this._A12UpperLimit <= startMtc )
		return -1;

	if ( startMtc < this._A12LowerLimit )
		startMtc = this._A12LowerLimit + scanlineEvent;

	return startMtc;
};


mapper64.prototype.updateIRQTime = function( cpuTime, doSync ) {

	if ( doSync ) {
		this.mainboard.synchroniser.synchronise();
	}
	
	var newEvent = -1;
	
	if ( !this._cpuCycleMode ) {
		// tickLimit is the start of the rendering frame - only started being clocked when rendering
		
		var nextRaise = 0;
		var scanlines = 0;
		if ( this.interruptsEnabled ) {
			nextRaise = this.calculateNextA12Raise( cpuTime );
			if ( nextRaise === -1 ) {
				newEvent = -1;
			} else {
				scanlines = this.mReloadFlag ? 0 : Math.max( this.irqCounter - 1, 0 );
				newEvent = nextRaise + ( scanlines * MASTER_CYCLES_PER_SCANLINE );
				if ( newEvent > this._A12UpperLimit ) {
					newEvent = -1;
				} else {
					// RAMBO-1: The actual interrupt triggers one M2 cycle later than one would naively expect.
					newEvent += COLOUR_ENCODING_MTC_PER_CPU;
				}
			}
		}
		this.mainboard.synchroniser.changeEventTime( this._irqEventId, newEvent );
	} else {
		var nextDecrement = 0;
		var count = 0;
		if ( this.interruptsEnabled ) {
			nextDecrement = this.calculateNextCpuCycleDecrement( cpuTime );
			if ( nextDecrement === -1 ) {
				newEvent = -1;
			} else {
				count = this.mReloadFlag ? 0 : Math.max( this.irqCounter - 1, 0 );
				newEvent = nextDecrement + ( count * ( COLOUR_ENCODING_MTC_PER_CPU * 4 ) ) + COLOUR_ENCODING_MTC_PER_CPU; // RAMBO-1: The actual interrupt triggers one M2 cycle later than one would naively expect.
			}
		}
		this.mainboard.synchroniser.changeEventTime( this._irqEventId, newEvent );
	}
};


mapper64.prototype.spriteScreenEnabledUpdate = function( spriteAddress, screenAddress ) {
	this.mSpriteAddress = spriteAddress;
	this.mScreenAddress = screenAddress;
	this.updateIRQTime( this.mainboard.synchroniser.getCpuMTC(), true );
};

mapper64.prototype.renderingEnabledChanged = function( enabled ) {
	this.mRenderingEnabled = enabled;
	this.updateIRQTime( this.mainboard.synchroniser.getCpuMTC(), true );
};


mapper64.prototype.calculateNextCpuCycleDecrement = function( startTicks ) {
	var interval = ( COLOUR_ENCODING_MTC_PER_CPU * 4 );
	var nextDecrementDiff = startTicks % interval;
	var nextDecrement = startTicks + ( interval - nextDecrementDiff );
	return nextDecrement;
};


mapper64.prototype.synchronise = function( startTicks, endTicks ) {

	if ( !this._cpuCycleMode ) {
		/*
	The heart of the MMC3. The PPU will cause A12 to rise when it fetches CHR from the right pattern table ($1xxx).
	In "normal" conditions (BG uses $0xxx, all sprites use $1xxx), this will occur 8 times per scanline (once for each sprite).
	However the BG could also be the culprit (if BG uses $1xxx and all sprites use $0xxx -- ?as seen in Armadillo?), in which case A12 will rise 34 times.
	These 42 times per scanline are key times which I call "rise points":

	BG rise points: 4, 12, 20, ... , 244, 252
	Sp rise points: 260, 268, ..., 308, 316
	BG rise points: 324, 332 
		
	If sprites are set to $1000-1FFF and the background is set to $0000-0FFF, then A12 will change from 0 to 1 at cycle 260 of each scanline, then change from 1 to 0 at cycle 320 of each scanline.

	If sprites are set to $0000-0FFF and the background is set to $1000-1FFF, then A12 will change from 1 to 0 at cycle 256 of each scanline, then change from 0 to 1 at cycle 324 of each scanline. 
	*/
		// tickLimit is the start of the rendering frame - only started being clocked when rendering
		var startMtc = this.calculateNextA12Raise( startTicks+1 );
		if ( startMtc >= 0 )
		{
			for ( var mtc = startMtc; mtc <= Math.min( this._A12UpperLimit, endTicks ); mtc += MASTER_CYCLES_PER_SCANLINE )
			{
				this.decrementIrqCounter( mtc );
			}
		}
	} else {
		// in cpu mode, decrement occurs every 4 cpu cycles
		var nextDecrement = this.calculateNextCpuCycleDecrement( startTicks );
		for ( var mtc = nextDecrement; mtc <= endTicks; mtc += ( COLOUR_ENCODING_MTC_PER_CPU * 4 ) )
		{
			this.decrementIrqCounter( mtc );
		}
	}
	this.updateIRQTime( endTicks, false );
};

mapper64.prototype.onEndFrame = function() {
	this.lastA12Raise = 0;
};

mapper64.prototype.write8SRam = function( offset, data ) {

	if ( this.chipEnable && !this.prgRamDisableWrite ) {
		Nes.basemapper.prototype.write8SRam.call( this, offset, data );
	}
};

mapper64.prototype.read8SRam = function( offset ) {

	if ( this.chipEnable ) {
		return Nes.basemapper.prototype.read8SRam.call( this, offset );
	}
	return 0;
};


Nes.mappers[64] = mapper64;

