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


var mapper34 = function() {
};

mapper34.prototype = Object.create( Nes.basemapper.prototype );

mapper34.prototype.reset = function() {
	
	var isImpossibleMission2 = this.mainboard.cart.getHash() === "68315AFB344108CB0D43E119BA0353D5A44BD489";
	this._isNinaBoard = isImpossibleMission2;
	this.switch32kPrgBank( 0 );
	if ( this.get8kChrBankCount() === 0 )
	{
		this.useVRAM();
	}
	else
	{
		this.switch8kChrBank( 0 );
	}
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};


mapper34.prototype.write8SRam = function( offset, data ) {
	if ( this._isNinaBoard ) {
		this.mainboard.synchroniser.synchronise();
		if ( offset === 0x7FFE ) {
			this.switch4kChrBank( data & 0xF, true );
		} else if ( offset === 0x7FFF ) {
			this.switch4kChrBank( data & 0xF, false );
		} else if ( offset === 0x7FFD ) {
			this.switch32kPrgBank( data & 0x1 );
		} else {
			Nes.basemapper.prototype.write8SRam.call( this, offset, data );
		}
	} else {
		Nes.basemapper.prototype.write8SRam.call( this, offset, data );
	}
};

mapper34.prototype.write8PrgRom = function( offset, data ) {
	if ( !this._isNinaBoard ) {
		this.mainboard.synchroniser.synchronise();
		this.switch32kPrgBank( data & 0xFF );
	} else {
		Nes.basemapper.prototype.write8PrgRom.call( this, offset, data );
	}
};
	
Nes.mappers[34] = mapper34;

