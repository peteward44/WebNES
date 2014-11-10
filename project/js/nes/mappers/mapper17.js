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


var mapper17 = function() {
};

mapper17.prototype = Object.create( Nes.basemapper.prototype );

mapper17.prototype.reset = function() {

	this.switch32kPrgBank( 0 );
	this.switch8kChrBank( 0 );
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};
	
mapper17.prototype.write8EXRom = function( offset, data ) {
	
	this.mainboard.synchroniser.synchronise();
	switch ( offset )
	{
	case 0x4504:
		this.switch8kPrgBank( data, 0 );
		break;
	case 0x4505:
		this.switch8kPrgBank( data, 1 );
		break;
	case 0x4506:
		this.switch8kPrgBank( data, 2 );
		break;
	case 0x4507:
		this.switch8kPrgBank( data, 3 );
		break;
	case 0x4510:
		this.switch1kChrBank( data, 0 );
		break;
	case 0x4511:
		this.switch1kChrBank( data, 1 );
		break;
	case 0x4512:
		this.switch1kChrBank( data, 2 );
		break;
	case 0x4513:
		this.switch1kChrBank( data, 3 );
		break;
	case 0x4514:
		this.switch1kChrBank( data, 4 );
		break;
	case 0x4515:
		this.switch1kChrBank( data, 5 );
		break;
	case 0x4516:
		this.switch1kChrBank( data, 6 );
		break;
	case 0x4517:
		this.switch1kChrBank( data, 7 );
		break;
	}
};
	
Nes.mappers[17] = mapper17;

