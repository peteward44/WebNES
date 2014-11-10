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

	
var mapper66 = function() {
};

mapper66.prototype = Object.create( Nes.basemapper.prototype );

mapper66.prototype.reset = function() {

	this.switch32kPrgBank( this.get32kPrgBankCount() - 1 );
	this.switch8kChrBank( this.get8kChrBankCount() - 1 );
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};

mapper66.prototype.write8PrgRom = function( offset, data ) {

	this.mainboard.synchroniser.synchronise();
	this.switch8kChrBank( data & 0x3 );
	this.switch32kPrgBank( ( data & 0x30 ) >> 4 );
};
	
Nes.mappers[66] = mapper66;

