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

	
var mapper65 = function() {
};

mapper65.prototype = Object.create( Nes.basemapper.prototype );

mapper65.prototype.reset = function() {

	this._irqEnabled = false;
	this._irqCounter = 0;
	this._irqReload = 0;
	this._nextIrqRaise = -1;
	
	this.switch8kPrgBank( 0, 0 );
	this.switch8kPrgBank( 1, 1 );
	this.switch8kPrgBank( 0xFE, 2 );
	this.switch8kPrgBank( this.get8kPrgBankCount() - 1, 3 );
	this.switch8kChrBank( this.get8kChrBankCount() - 1 );
	
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
	
	// TODO: Need to remove this event on mapper unload
	var that = this;
	this._irqEventId = this.mainboard.synchroniser.addEvent( 'mapper65 irq', -1, function() {} );
};

mapper65.prototype.write8PrgRom = function( offset, data ) {

	this.mainboard.synchroniser.synchronise();
	
	switch ( offset & 0xF000 ) {
		case 0x8000: // prg select
			this.switch8kPrgBank( data, 0 );
		break;
		case 0x9000: // irq / mirroring registers
		{
			switch ( offset ) {
			case 0x9001: //Mirroring
				if ( ( data & 0x80 ) === 0 ) {
					this.mainboard.ppu.changeMirroringMethod( PPU_MIRRORING_VERTICAL );
				} else {
					this.mainboard.ppu.changeMirroringMethod( PPU_MIRRORING_HORIZONTAL );
				}
				break;
			case 0x9003: //IRQ Enable
				this._irqEnabled = ( data & 0x80 ) > 0;
				this.mainboard.cpu.holdIrqLineLow( false );
				break;
			case 0x9004: //IRQ Reload
				this._irqCounter = this._irqReload * COLOUR_ENCODING_MTC_PER_CPU;
				this.mainboard.cpu.holdIrqLineLow( false );
				var nextIrqRaise = -1;
				if ( this._irqEnabled ) {
					nextIrqRaise = this.mainboard.synchroniser.getCpuMTC() + this._irqCounter;
				}
				if ( nextIrqRaise !== this._nextIrqRaise ) {
					this.mainboard.synchroniser.changeEventTime( this._irqEventId, nextIrqRaise );
					this._nextIrqRaise = nextIrqRaise;
				}
				break;
			case 0x9005: //High 8 bits of IRQ Reload
				this._irqReload = ( this._irqReload & 0xFF ) | ( data << 8 );
				break;
			case 0x9006: //Low 8 bits of IRQ Reload
				this._irqReload = ( this._irqReload & 0xFF00 ) | data;
				break;
			}
		}
		break;
		case 0xA000: // prg select
			this.switch8kPrgBank( data, 1 );
		break;
		case 0xB000: // chr registers
		{
			var chrBank = offset & 0x7;
			this.switch1kChrBank( data, chrBank );
		}
		break;
		case 0xC000: // prg select
			this.switch8kPrgBank( data, 2 );
		break;
	}
};


mapper65.prototype.synchronise = function( startTicks, endTicks ) {

	if ( this._irqEnabled ) {
		this._irqCounter -= ( endTicks - startTicks );
		if ( this._irqCounter <= 0 ) {
			this.mainboard.synchroniser.changeEventTime( this._irqEventId, -1 );
			this.mainboard.cpu.holdIrqLineLow( true );
			this._irqCounter = 0;
			this._irqEnabled = false;
		}
	}
};


Nes.mappers[65] = mapper65;

