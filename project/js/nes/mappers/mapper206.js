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

var mapper206 = function() {
	this.bankSwapByte = 0;

	this.banks = new Int32Array( 8 );
	this.banks[0] = 0;
	this.banks[1] = 2;
	this.banks[2] = 4;
	this.banks[3] = 5;
	this.banks[4] = 6;
	this.banks[5] = 7;

	this.banks[6] = 0;
	this.banks[7] = 1;
};

mapper206.prototype = Object.create( Nes.basemapper.prototype );

mapper206.prototype.mapperSaveState = function( state ) {
	
	state.bankSwapByte = this.bankSwapByte;
	state.banks = Nes.uintArrayToString( this.banks );
};

mapper206.prototype.mapperLoadState = function( state ) {

	this.bankSwapByte = state.bankSwapByte;
	this.banks = Nes.stringToUintArray( state.banks );
};

mapper206.prototype.syncBanks = function( doPrg, doChr ) {

	if ( doPrg ) {
		this.switch8kPrgBank( this.banks[7] & 0xF, 1 );
		this.switch8kPrgBank( this.get8kPrgBankCount() - 2, 2 );
		this.switch8kPrgBank( this.get8kPrgBankCount() - 1, 3 );

		// if ( ( this.bankSwapByte & 0x40 ) > 0 )
		// {
			// this.switch8kPrgBank( this.get8kPrgBankCount() - 2, 0 );
		// }
		// else
		// {
			this.switch8kPrgBank( this.banks[6] & 0xF, 0 );
		//}
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
		
		var bank0 = this.banks[0] & 0x3E;
		var bank1 = this.banks[1] & 0x3E;

		this.switch1kChrBank( bank0, 0 );
		this.switch1kChrBank( bank0 + 1, 1 );
		this.switch1kChrBank( bank1, 2 );
		this.switch1kChrBank( bank1 + 1, 3 );

		this.switch1kChrBank( this.banks[2] & 0x3F, 4 );
		this.switch1kChrBank( this.banks[3] & 0x3F, 5 );
		this.switch1kChrBank( this.banks[4] & 0x3F, 6 );
		this.switch1kChrBank( this.banks[5] & 0x3F, 7 );
	}
};


mapper206.prototype.reset = function() {

	this.bankSwapByte = 0;
	this.banks[0] = 0;
	this.banks[1] = 2;
	this.banks[2] = 4;
	this.banks[3] = 5;
	this.banks[4] = 6;
	this.banks[5] = 7;

	this.banks[6] = 0;
	this.banks[7] = 1;
	
	if ( this.get1kChrBankCount() === 0 ) {
		this.useVRAM( 8 );
	}
	
	this.syncBanks( true, true );
	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};

mapper206.prototype.write8PrgRom = function( offset, data ) {
	
	if ( ( offset & 0x1 ) === 0 )
	{ // even
		if ( this.bankSwapByte !== data & 0xFF ) {
			this.bankSwapByte = data & 0xFF;
			this.syncBanks( true, true );
		}
	}
	else
	{ // odd
		var swapByte = this.bankSwapByte & 0x7;
		if ( this.banks[ swapByte ] !== data & 0xFF ) {
			this.banks[ swapByte ] = data & 0xFF;
			this.syncBanks( swapByte >= 6, swapByte <= 5 );
		}
	}
};


mapper206.prototype.synchronise = function( startTicks, endTicks ) {

};

mapper206.prototype.onEndFrame = function() {
};


Nes.mappers[206] = mapper206;

