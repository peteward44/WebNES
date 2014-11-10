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


var mapper2 = function() {
};

mapper2.prototype = Object.create( Nes.basemapper.prototype );

mapper2.prototype.reset = function() {
	this.switch16kPrgBank( 0, true );
	this.switch16kPrgBank( this.get16kPrgBankCount() - 1, false );
	this.useVRAM();
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};

mapper2.prototype.write8PrgRom = function( offset, data ) {
//	this.mainboard.synchroniser.synchronise();
	this.switch16kPrgBank( data, true );
};

Nes.mappers[2] = mapper2;

