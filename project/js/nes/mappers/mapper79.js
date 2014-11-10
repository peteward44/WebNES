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

(function(){
	"use strict";
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	var mapper79 = function() {


	};
	
	mapper79.prototype = Object.create( Nes.basemapper.prototype );

	mapper79.prototype.reset = function() {
	
		this.switch32kPrgBank( this.get32kPrgBankCount() - 1 );
		this.switch8kChrBank( this.get8kChrBankCount() - 1 );
		this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
	};

	mapper79.prototype.write8EXRam = function( offset, data ) {
	
		if ( ( offset & 0x4100 ) === 0x4100 ) {
			this.mainboard.synchroniser.synchronise();
			this.switch32kPrgBank( ( data & 0x8 ) >> 3 );
			this.switch8kChrBank( data & 0x7 );
		}
		//Nes.basemapper.prototype.write8EXRam.call( this, offset, data );
	};
	
	Nes.mappers[79] = mapper79;
	
	
}());
