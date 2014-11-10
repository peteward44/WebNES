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

var mapper71 = function() {
};

mapper71.prototype = Object.create( Nes.basemapper.prototype );

mapper71.prototype.reset = function() {

	this._isFireHawk = this.mainboard.cart.getHash() === "334781C830F135CF30A33E392D8AAA4AFDC223F9";
	this.useVRAM();
	this.switch32kPrgBank( this.get32kPrgBankCount() - 1 );
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};

mapper71.prototype.write8PrgRom = function( offset, data ) {
	
	if ( ( offset & 0xC000 ) === 0x8000 ) { // IS_INT_BETWEEN( offset, 0x8000, 0xC000 ) ) {
		// fire hawk only - Select 1 KiB CIRAM bank for PPU $2000-$2FFF
		if ( this._isFireHawk ) {
			//fire hawk is only game with mapper controlled mirroring
			//micro machines glitches hard if this is on
			var mirroringMethod = ( data & 0x10 ) > 0 ? PPU_MIRRORING_SINGLESCREEN_NT1 : PPU_MIRRORING_SINGLESCREEN_NT0;
			this.mainboard.synchroniser.synchronise();
			this.mainboard.ppu.changeMirroringMethod( mirroringMethod );
		}
	}
	else
	{
		// Select 16 KiB PRG ROM bank for CPU $8000-$BFFF
		this.mainboard.synchroniser.synchronise();
		this.switch16kPrgBank( data & 0xF, true );
	}
};


Nes.mappers[71] = mapper71;

