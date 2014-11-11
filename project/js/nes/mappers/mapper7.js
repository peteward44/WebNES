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


var mapper7 = function() {
};

mapper7.prototype = Object.create( Nes.basemapper.prototype );

mapper7.prototype.reset = function() {

	this.switch32kPrgBank( 0 );

	if ( this.get8kChrBankCount() === 0 )
		this.useVRAM();
	else
		this.switch8kChrBank( 0 );
	
	this.mirroringMethod = PPU_MIRRORING_SINGLESCREEN_NT0;
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};

mapper7.prototype.write8PrgRom = function( offset, data ) {

	this.mainboard.synchroniser.synchronise();
	this.switch32kPrgBank( data & 0xFF );
	
	var mirroringMethod;
	if ( ( data & 0x10 ) > 0 )
		mirroringMethod = PPU_MIRRORING_SINGLESCREEN_NT1;
	else
		mirroringMethod = PPU_MIRRORING_SINGLESCREEN_NT0;
	this.mainboard.ppu.changeMirroringMethod( mirroringMethod );
};
	
Nes.mappers[7] = mapper7;
