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

// TODO: save/load states
// TODO: proper exram support


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mapper5 = function() {

	this.mRenderingEnabled = false;
	
	this._chrMode = 0;
	this._prgMode = 0;
	this._exRamMode = 0;
	this._prgRegisters = new Int32Array( 4 );
	this._nameTableFill = new Int32Array( 1024 );
	this._internalExRam = new Int32Array( 1024 );
	this._prgRam = new Int32Array( 0x10000 ); // 64kb
	this._prgRamPage = 0;
	this._bigSpritesEnabled = false;
	
	this._writeProtectA = false;
	this._writeProtectB = false;
	this._currentScanline = 0;
	this._irqEnabled = false;
	this._irqActive = false;
	this._irqScanlineTrigger = 0;
	this._triggerMtc = -1;
	this._multiplier1 = 0;
	this._multiplier2 = 0;
	
	this._prgRamMap = new Int32Array( 4 ); // 8k ram banks that map to 0x8000 -> 0x10000 
	this._prgRamIsActive = new Int32Array( 4 );
	this._nameTableMap = new Int32Array( 4 );
	
	this._chrRegsA = new Int32Array( 8 );
	this._chrRegsB = new Int32Array( 4 );
	this._chrUseBMap = false;
	this._chrMapA = new Int32Array( 8 );
	this._chrMapB = new Int32Array( 4 );
	this._chrHighBits = 0;
};

mapper5.prototype = Object.create( Nes.basemapper.prototype );

mapper5.prototype.mapperSaveState = function( state ) {
	
	state.mRenderingEnabled = this.mRenderingEnabled;
	state._chrMode = this._chrMode;
	state._prgMode = this._prgMode;
	state._exRamMode = this._exRamMode;
	
	state._prgRegisters = Nes.uintArrayToString( this._prgRegisters );
	state._nameTableFill = Nes.uintArrayToString( this._nameTableFill );
	state._internalExRam = Nes.uintArrayToString( this._internalExRam );
	state._prgRam = Nes.uintArrayToString( this._prgRam );
	
	state._prgRamPage = this._prgRamPage;
	state._bigSpritesEnabled = this._bigSpritesEnabled;
	
	state._writeProtectA = this._writeProtectA;
	state._writeProtectB = this._writeProtectB;
	state._currentScanline = this._currentScanline;
	state._irqEnabled = this._irqEnabled;
	state._irqActive = this._irqActive;
	state._irqScanlineTrigger = this._irqScanlineTrigger;
	state._triggerMtc = this._triggerMtc;
	state._multiplier1 = this._multiplier1;
	state._multiplier2 = this._multiplier2;
	
	state._prgRamMap = Nes.uintArrayToString( this._prgRamMap );
	state._prgRamIsActive = Nes.uintArrayToString( this._prgRamIsActive );
	state._nameTableMap = Nes.uintArrayToString( this._nameTableMap );
	
	state._chrRegsA = Nes.uintArrayToString( this._chrRegsA );
	state._chrRegsB = Nes.uintArrayToString( this._chrRegsB );
	
	state._chrUseBMap = this._chrUseBMap;
	state._chrMapA = Nes.uintArrayToString( this._chrMapA );
	state._chrMapB = Nes.uintArrayToString( this._chrMapB );
	state._chrHighBits = this._chrHighBits;
};

mapper5.prototype.mapperLoadState = function( state ) {
	
	this.mRenderingEnabled = state.mRenderingEnabled;
	this._chrMode = state._chrMode;
	this._prgMode = state._prgMode;
	this._exRamMode = state._exRamMode;
	
	this._prgRegisters = Nes.stringToUintArray( state._prgRegisters );
	this._nameTableFill = Nes.stringToUintArray( state._nameTableFill );
	this._internalExRam = Nes.stringToUintArray( state._internalExRam );
	this._prgRam = Nes.stringToUintArray( state._prgRam );
	
	this._prgRamPage = state._prgRamPage;
	this._bigSpritesEnabled = state._bigSpritesEnabled;
	
	this._writeProtectA = state._writeProtectA;
	this._writeProtectB = state._writeProtectB;
	this._currentScanline = state._currentScanline;
	this._irqEnabled = state._irqEnabled;
	this._irqActive = state._irqActive;
	this._irqScanlineTrigger = state._irqScanlineTrigger;
	this._triggerMtc = state._triggerMtc;
	this._multiplier1 = state._multiplier1;
	this._multiplier2 = state._multiplier2;
	
	this._prgRamMap = Nes.stringToUintArray( state._prgRamMap );
	this._prgRamIsActive = Nes.stringToUintArray( state._prgRamIsActive );
	this._nameTableMap = Nes.stringToUintArray( state._nameTableMap );
	
	this._chrRegsA = Nes.stringToUintArray( state._chrRegsA );
	this._chrRegsB = Nes.stringToUintArray( state._chrRegsB );
	
	this._chrUseBMap = state._chrUseBMap;
	this._chrMapA = Nes.stringToUintArray( state._chrMapA );
	this._chrMapB = Nes.stringToUintArray( state._chrMapB );
	this._chrHighBits = state._chrHighBits;
};


mapper5.prototype.reset = function() {

	this.mRenderingEnabled = false;
	this._chrMode = 0;
	this._prgMode = 3;
	this._exRamMode = 0;
	this._chrHighBits = 0;
	this._prgRamPage = 0;
	this._writeProtectA = false;
	this._writeProtectB = false;
	this._irqEnabled = false;
	this._irqScanlineTrigger = 0;
	this._irqActive = false;
	this._multiplier1 = 0;
	this._multiplier2 = 0;
	this._currentScanline = 0;
	this._triggerMtc = -1;
	this._chrUseBMap = false;
	this._bigSpritesEnabled = false;
	
	for ( var i=0; i<this._prgRamMap.length; ++i ) {
		this._prgRamMap[i] = 0;
		this._prgRamIsActive[i] = 0;
	}
	for ( var i=0; i<this._nameTableMap.length; ++i ) {
		this._nameTableMap[i] = 0;
	}
	
	for ( var i=0; i<this._prgRegisters.length; ++i ) {
		this._prgRegisters[ i ] = this.get8kPrgBankCount() - 4 + i;
	}
	for ( var i=0; i<this._chrRegsA.length; ++i ) {
		this._chrRegsA[i] = 0;
	}
	for ( var i=0; i<this._chrRegsB.length; ++i ) {
		this._chrRegsB[i] = 0;
	}
	for ( var i=0; i<this._chrMapA.length; ++i ) {
		this._chrMapA[i] = 0;
	}
	for ( var i=0; i<this._chrMapB.length; ++i ) {
		this._chrMapB[i] = 0;
	}
	this._syncPrg();
	this._syncChr();
	this.switch8kChrBank( 0 );
	
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
	
	// TODO: Need to remove this event on mapper unload
	var that = this;
	this._irqEventId = this.mainboard.synchroniser.addEvent( 'mmc5 irq', -1, function( eventTime ) { that._irqEvent( eventTime ); } );
};

mapper5.prototype.renderingEnabledChanged = function( enabled ) {
	this.mRenderingEnabled = enabled;
	this._predictIrq( this.mainboard.synchroniser.getCpuMTC() );
};

mapper5.prototype._irqEvent = function( eventTime ) {

	if ( this.mRenderingEnabled && !this._irqActive && this._irqEnabled && this._irqScanlineTrigger > 0 ) {
		this._irqActive = true;
		this.mainboard.cpu.holdIrqLineLow( true );
	}
	this._predictIrq( eventTime );
};

mapper5.prototype._syncPrg = function() {

	this.mainboard.synchroniser.synchronise();
			
	for ( var i=0; i<this._prgRamMap.length; ++i ) {
		this._prgRamMap[i] = 0;
		this._prgRamIsActive[i] = 0;
	}
	
	switch ( this._prgMode ) {
		default:
		case 0:
			// 32k bank at 0x8000
			this.switch32kPrgBank( ( this._prgRegisters[ 3 ] & 0x7f ) >> 2 );
		break;
		case 1:
			// 16k bank at 0x8000
			if ( ( this._prgRegisters[ 1 ] & 0x80 ) === 0 ) {
				this._prgRamIsActive[ 0 ] = 1;
				this._prgRamIsActive[ 1 ] = 1;
				this._prgRamMap[ 0 ] = ( ( this._prgRegisters[ 1 ] & 0xE ) >> 1 ) * 2;
				this._prgRamMap[ 1 ] = this._prgRamMap[ 0 ] + 1;
			} else {
				this.switch16kPrgBank( ( this._prgRegisters[ 1 ] & 0x7f ) >> 1, true );
			}
			// 16k bank at 0xC000
			this.switch16kPrgBank( ( this._prgRegisters[ 3 ] & 0x7f ) >> 1, false );
		break;
		case 2:
			// 8k bank at 0xE000
			this.switch8kPrgBank( ( this._prgRegisters[3] & 0x7f ), 3 );
			
			// 8k bank at 0xC000
			if ( ( this._prgRegisters[ 2 ] & 0x80 ) === 0 ) {
				this._prgRamIsActive[ 2 ] = 1;
				this._prgRamMap[ 2 ] = ( this._prgRegisters[2] & 0x7 );
			} else {
				this.switch8kPrgBank( ( this._prgRegisters[2] & 0x7f ), 2 );
			}
			
			// 16k bank at 0x8000
			if ( ( this._prgRegisters[ 1 ] & 0x80 ) === 0 ) {
				this._prgRamIsActive[ 0 ] = 1;
				this._prgRamIsActive[ 1 ] = 1;
				this._prgRamMap[ 0 ] = ( ( this._prgRegisters[1] & 0xE ) >> 1 ) * 2;
				this._prgRamMap[ 1 ] = this._prgRamMap[ 0 ] + 1;
			} else {
				this.switch16kPrgBank( ( this._prgRegisters[1] & 0x7f ) >> 1, true );
			}
		break;
		case 3:
			// 8k bank at 0xE000
			this.switch8kPrgBank( ( this._prgRegisters[3] & 0x7f ), 3 );
			// 8k bank at 0xC000
			if ( ( this._prgRegisters[ 2 ] & 0x80 ) === 0 ) {
				this._prgRamIsActive[ 2 ] = 1;
				this._prgRamMap[ 2 ] = this._prgRegisters[2] & 0x7;
			} else {
				this.switch8kPrgBank( ( this._prgRegisters[2] & 0x7f ), 2 );
			}
			// 8k bank at 0xA000
			if ( ( this._prgRegisters[ 1 ] & 0x80 ) === 0 ) {
				this._prgRamIsActive[ 1 ] = 1;
				this._prgRamMap[ 1 ] = this._prgRegisters[1] & 0x7;
			} else {
				this.switch8kPrgBank( ( this._prgRegisters[1] & 0x7f ), 1 );
			}
			// 8k bank at 0x8000
			if ( ( this._prgRegisters[ 0 ] & 0x80 ) === 0 ) {
				this._prgRamIsActive[ 0 ] = 1;
				this._prgRamMap[ 0 ] = this._prgRegisters[0] & 0x7;
			} else {
				this.switch8kPrgBank( ( this._prgRegisters[0] & 0x7f ), 0 );
			}
		break;
	}
};


mapper5.prototype._chrBank = function( chrMap, banksize, bankpos, banknum ) {
	
	for ( var i=0; i<banksize; ++i ) {
		chrMap[ i + bankpos ] = ( banknum + i ) % this.get1kChrBankCount();
	}
};


mapper5.prototype._syncChr = function() {

	this.mainboard.synchroniser.synchronise();

	switch (this._chrMode) {
		default:
		case 0:
			this._chrBank( this._chrMapA, 8, 0, this._chrRegsA[7] );
			this._chrBank( this._chrMapB, 4, 0, this._chrRegsB[3] );
			break;
		case 1:
			this._chrBank( this._chrMapA, 4, 0, this._chrRegsA[3] );
			this._chrBank( this._chrMapA, 4, 4, this._chrRegsA[7] );
			this._chrBank( this._chrMapB, 4, 0, this._chrRegsB[3] );
			break;
		case 2:
			this._chrBank( this._chrMapA, 2, 0, this._chrRegsA[1] );
			this._chrBank( this._chrMapA, 2, 2, this._chrRegsA[3] );
			this._chrBank( this._chrMapA, 2, 4, this._chrRegsA[5] );
			this._chrBank( this._chrMapA, 2, 6, this._chrRegsA[7] );
			this._chrBank( this._chrMapB, 2, 0, this._chrRegsB[1] );
			this._chrBank( this._chrMapB, 2, 2, this._chrRegsB[3] );
			break;
		case 3:
			for ( var i=0; i<8; ++i ) {
				this._chrBank( this._chrMapA, 1, i, this._chrRegsA[i] );
			}
			for ( var i=0; i<4; ++i ) {
				this._chrBank( this._chrMapB, 1, i, this._chrRegsB[i] );
			}
			break;
	}
};

mapper5.prototype.write8PrgRom = function( offset, data ) {
	if ( this._writeProtectA && this._writeProtectB ) {
		var top3Bits = ( offset & 0xE000 ) >> 13;
		if ( this._prgRamIsActive[ top3Bits ] === 1 ) {
			this._prgRam[ ( this._prgRamMap[ top3Bits ] << 13 ) | ( offset & 0x1FFF ) ] = data;
		} else {
			Nes.basemapper.prototype.write8PrgRom.call( this, offset, data );
		}
	}
};

mapper5.prototype.read8PrgRom = function( offset ) {
	var top3Bits = ( offset & 0xE000 ) >> 13;
	if ( this._prgRamIsActive[ top3Bits ] === 1 ) {
		return this._prgRam[ ( this._prgRamMap[ top3Bits ] << 13 ) | ( offset & 0x1FFF ) ]; // this._prgRamMap[0] * 0x2000 + ( offset % 0x2000 ) ];
	}
	return Nes.basemapper.prototype.read8PrgRom.call( this, offset );
};

mapper5.prototype.onEndFrame = function() {
	this._predictIrq( 0 );
};

mapper5.prototype._predictIrq = function( cpuMTC ) {

	// TODO: Check if MMC5 counter includes pre-render scanline
	if ( this.mRenderingEnabled && !this._irqActive && this._irqEnabled && this._irqScanlineTrigger > 0 ) {
		var targetScanline = this._irqScanlineTrigger;
		var triggerMtc = this.mainboard.ppu.screenCoordinatesToTicks( 0, targetScanline );
		if ( triggerMtc > cpuMTC ) {
			if ( this._triggerMtc !== triggerMtc ) {
				//var pos = this.mainboard.ppu.ticksToScreenCoordinates( triggerMtc );
				this.mainboard.synchroniser.changeEventTime( this._irqEventId, triggerMtc );
				this._triggerMtc = triggerMtc;
			}
		}
		return;
	}
	
	if ( this._triggerMtc !== -1 ) {
		this._triggerMtc = -1;
		this.mainboard.synchroniser.changeEventTime( this._irqEventId, -1 );
	}
};

mapper5.prototype.write8EXRam = function( offset, data ) {
	// 0x4018 -> 0x6000
	switch ( offset ) {
	case 0x5100: // PRG mode
		this._prgMode = data & 0x3;
		this._syncPrg();
	break;
	case 0x5101: // CHR mode
		this._chrMode = data & 0x3;
		this._syncChr();
	break;
	case 0x5102: // PRG RAM write protect 1
		this._writeProtectA = ( data & 0x3 ) === 0x2;
	break;
	case 0x5103: // PRG RAM write protect 2
		this._writeProtectB = ( data & 0x3 ) === 0x1;
	break;
	case 0x5104: // extended RAM mode
		this.mainboard.synchroniser.synchronise();
		this._exRamMode = data & 0x3;
	break;
	case 0x5105: // nametable mode
		this.mainboard.synchroniser.synchronise();
		this._setNametableMirroring( data );
	break;
	case 0x5106: // fill mode tile number
		this.mainboard.synchroniser.synchronise();
		for ( var i=0; i< (32 * 30); ++i ) {
			this._nameTableFill[ i ] = data;
		}
	break;
	case 0x5107: // fill mode colour
		this.mainboard.synchroniser.synchronise();
		var attribute = data & 0x3 + (data & 3) << 2 + (data & 3) << 4 + (data & 3) << 6;
		for ( var i=(32 * 30); i<this._nameTableFill.length; ++i ) {
			this._nameTableFill[ i ] = attribute;
		}
	break;
	case 0x5113: // prg ram bank
		this._prgRamPage = data & 0x7;
	break;
	case 0x5114: // prg bank 0
		this._prgRegisters[ 0 ] = data;
		this._syncPrg();
	break;
	case 0x5115: // prg bank 1
		this._prgRegisters[ 1 ] = data;
		this._syncPrg();
	break;
	case 0x5116: // prg bank 2
		this._prgRegisters[ 2 ] = data;
		this._syncPrg();
	break;
	case 0x5117: // prg bank 3
		this._prgRegisters[ 3 ] = data;
		this._syncPrg();
	break;
	case 0x5120: // chr registers A
		this._chrRegsA[ 0 ] = data | this._chrHighBits;
		this._chrUseBMap = false;
		this._syncChr();
	break;
	case 0x5121:
		this._chrRegsA[ 1 ] = data | this._chrHighBits;
		this._chrUseBMap = false;
		this._syncChr();
	break;
	case 0x5122:
		this._chrRegsA[ 2 ] = data | this._chrHighBits;
		this._chrUseBMap = false;
		this._syncChr();
	break;
	case 0x5123:
		this._chrRegsA[ 3 ] = data | this._chrHighBits;
		this._chrUseBMap = false;
		this._syncChr();
	break;
	case 0x5124:
		this._chrRegsA[ 4 ] = data | this._chrHighBits;
		this._chrUseBMap = false;
		this._syncChr();
	break;
	case 0x5125:
		this._chrRegsA[ 5 ] = data | this._chrHighBits;
		this._chrUseBMap = false;
		this._syncChr();
	break;
	case 0x5126:
		this._chrRegsA[ 6 ] = data | this._chrHighBits;
		this._chrUseBMap = false;
		this._syncChr();
	break;
	case 0x5127:
		this._chrRegsA[ 7 ] = data | this._chrHighBits;
		this._chrUseBMap = false;
		this._syncChr();
	break;
	case 0x5128: // Chr registers B
		this._chrRegsB[ 0 ] = data | this._chrHighBits;
		this._chrUseBMap = true;
		this._syncChr();
	break;
	case 0x5129:
		this._chrRegsB[ 1 ] = data | this._chrHighBits;
		this._chrUseBMap = true;
		this._syncChr();
	break;
	case 0x512A:
		this._chrRegsB[ 2 ] = data | this._chrHighBits;
		this._chrUseBMap = true;
		this._syncChr();
	break;
	case 0x512B:
		this._chrRegsB[ 3 ] = data | this._chrHighBits;
		this._chrUseBMap = true;
		this._syncChr();
	break;
	case 0x5130: // CHR bank high bits
		this.mainboard.synchroniser.synchronise();
		this._chrHighBits = ( data & 0x3 ) << 8;
	break;
	case 0x5200: // vertical split mode
		// dont bother with vertical mode as it was only used once in commercial games, for the intro sequence
	break;
	case 0x5201: // vertical split scroll
	break;
	case 0x5202: // vertical split chr page
	break;
	case 0x5203: // irq scanline number trigger
		this.mainboard.synchroniser.synchronise();
		this._irqScanlineTrigger = data;
		this._predictIrq( this.mainboard.synchroniser.getCpuMTC() );
	break;
	case 0x5204: // irq enable (different behaviour on read)
		this.mainboard.synchroniser.synchronise();
		this._irqEnabled = ( data & 0x80 ) > 0;
		this._predictIrq( this.mainboard.synchroniser.getCpuMTC() );
	break;
	case 0x5205: //  Writes specify the eight-bit multiplicand; reads return the lower eight bits of the product
		this._multiplier1 = data;
	break;
	case 0x5206: // Writes specify the eight-bit multiplier; reads return the upper eight bits of the product
		this._multiplier2 = data;
	break;
	}
	
	if ( offset >= 0x5C00 ) {
		// TODO: Remove synchronise and work out isRendering by mtc
		this.mainboard.synchroniser.synchronise();
		if ( this._exRamMode === 0 || this._exRamMode === 1 ) {
			// only allow writing during rendering, otherwise write 0
			if ( this.mainboard.ppu.isRendering( this.mainboard.synchroniser.getCpuMTC(), false ) ) {
				this._internalExRam[ offset - 0x5C00 ] = data;
			} else {
				this._internalExRam[ offset - 0x5C00 ] = 0;
			}
		} else if ( this._exRamMode === 2 ) {
			// always write
			this._internalExRam[ offset - 0x5C00 ] = data;
		}
	}
	
	//Nes.basemapper.prototype.write8EXRam.call( this, offset, data );
};

mapper5.prototype.read8EXRam = function( offset ) {
	// 0x4018 -> 0x6000
	switch ( offset ) {
	case 0x5015:
		//sound status
//			return soundchip.status();
		break;
	case 0x5204:
		//irq status
		this.mainboard.synchroniser.synchronise();
		var scan = this.mainboard.ppu.ticksToScreenCoordinates( this.mainboard.synchroniser.getCpuMTC() );
		var stat = ( this._irqActive ? 0x80 : 0 ) + ( scan.y >= 0 && scan.y < 240 ? 0x40 : 0 );
		if ( this._irqActive ) {
			this._irqActive = false;
			this.mainboard.cpu.holdIrqLineLow( false );
		}
		this._predictIrq( this.mainboard.synchroniser.getCpuMTC() );
		return stat;
	case 0x5205: //  Writes specify the eight-bit multiplicand; reads return the lower eight bits of the product
		return (this._multiplier1 * this._multiplier2) & 0xff;
	break;
	case 0x5206: // Writes specify the eight-bit multiplier; reads return the upper eight bits of the product
		return ((this._multiplier1 * this._multiplier2) >> 8) & 0xff;
	break;
	}
	
	if ( offset >= 0x5C00 ) {
		if ( this._exRamMode === 2 || this._exRamMode === 3 ) {
			return this._internalExRam[ offset - 0x5C00 ];
		}
	}
	
	return 0; // supposed to be open bus
};

mapper5.prototype.write8SRam = function( offset, data ) {
	// 0x6000 -> 0x8000
	this._prgRam[ ( this._prgRamPage << 13 ) | ( offset & 0x1FFF ) ] = data; // this._prgRamPage * 0x2000 + ( offset % 0x2000 ) ] = data;
};

mapper5.prototype.read8SRam = function( offset ) {
	// 0x6000 -> 0x8000
	return this._prgRam[ ( this._prgRamPage << 13 ) | ( offset & 0x1FFF ) ];
};

mapper5.prototype._setNametableMirroring = function( data ) {

	for ( var nt=0; nt<4; ++nt ) {
		this._nameTableMap[ nt ] = data & 0x3;
		data >>= 2;
	}
};

mapper5.prototype.read8ChrRom = function( offset, renderingSprites, readType ) {

	// Pattern table read < 0x2000
	if ( renderingSprites ) {
		var pageid = ( offset & 0x1C00 ) >> 10; // Math.floor( offset / 0x400 );
		var pagepos = this._chrMapA[ pageid & 0x7 ];
		var chrOffset = ( pagepos * 0x400 ) + ( offset & 0x3FF );
		return TYPED_ARRAY_GET_INT32( this._chrData, chrOffset );
	}/* else {
		if ( this._exRamMode === 1 ) {
			
		}
	}*/
	
	var useMapB = false;
	
	if ( this._bigSpritesEnabled ) {
		useMapB = !renderingSprites;
	} else {
		useMapB = this._chrUseBMap;
	}

	var pageid = ( offset & 0x1C00 ) >> 10; // Math.floor( offset / 0x400 );
	var pagepos = useMapB ? this._chrMapB[ pageid & 0x3 ] : this._chrMapA[ pageid & 0x7 ];
	var chrOffset = (pagepos*0x400) + ( offset & 0x3FF );
	return TYPED_ARRAY_GET_INT32( this._chrData, chrOffset );
};

mapper5.prototype.nameTableRead = function( nameTables, pageId, pageOffset ) {

	switch ( this._nameTableMap[ pageId ] ) {
		default:
		case 0:
			return nameTables[ 0 ][ pageOffset ];
		case 1:
			return nameTables[ 1 ][ pageOffset ];
		case 2:
			if ( this._exRamMode === 0 || this._exRamMode === 1 ) {
				return this._internalExRam[ pageOffset ];
			} else {
				return 0;
			}
		case 3:
			return this._nameTableFill[ pageOffset ];
	}
};

mapper5.prototype.nameTableWrite = function( nameTables, pageId, pageOffset, data ) {

	switch ( this._nameTableMap[ pageId ] ) {
		default:
		case 0:
			TYPED_ARRAY_SET_INT32( nameTables[ 0 ], pageOffset, data );
		break;
		case 1:
			TYPED_ARRAY_SET_INT32( nameTables[ 1 ], pageOffset, data );
		break;
		case 2:
			if ( this._exRamMode === 0 || this._exRamMode === 1 ) {
				this._internalExRam[ pageOffset ] = data;
			}
		break;
		case 3:
			this._nameTableFill[ pageOffset ] = data;
		break;
	}
};

mapper5.prototype.spriteSizeChanged = function( bigSprites ) {
	
	this._bigSpritesEnabled = bigSprites;
};

Nes.mappers[5] = mapper5;

