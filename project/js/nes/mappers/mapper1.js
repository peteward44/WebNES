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


var mapper1 = function() {
	this.val = 0;
	this.count = 0;
	this.lastWriteMTC = -1;

	this.registers = new Int32Array( 4 ); // size 4
	this.registers[0] = 0x0C;
	this.registers[1] = this.registers[2] = this.registers[3] = 0;
	
	this.wRamEnabled = true;
	this.soromlatch = false;
};

mapper1.prototype = Object.create( Nes.basemapper.prototype );

mapper1.prototype.mapperSaveState = function( state ) {
	state.val = this.val;
	state.count = this.count;
	state.lastWriteMTC = this.lastWriteMTC;
	state.registers = Nes.uintArrayToString( this.registers );
	state.wRamEnabled = this.wRamEnabled;
	state.soromlatch = this.soromlatch;
};

mapper1.prototype.mapperLoadState = function( state ) {
	this.val = state.val;
	this.count = state.count;
	this.lastWriteMTC = state.lastWriteMTC;
	this.registers = Nes.stringToUintArray( state.registers );
	this.wRamEnabled = state.wRamEnabled;
	this.soromlatch = state.soromlatch;
};

mapper1.prototype.onEndFrame = function() {

	this.lastWriteMTC = -1;
};

mapper1.prototype.reset = function() {

	this.switch16kPrgBank( 0, true );
	this.switch16kPrgBank( this.get16kPrgBankCount() - 1, false );

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

mapper1.prototype.syncChrMirrors = function() {
	if ( ( this.registers[0] & 0x10 ) > 0 )
	{
		this.switch4kChrBank( this.registers[1] & 0x1F, true );
		this.switch4kChrBank( this.registers[2] & 0x1F, false );
	}
	else
	{
		this.switch8kChrBank( ( (this.registers[1] & 0x1F) >> 1 ) );
	}
};

mapper1.prototype.syncPrgMirrors = function() {
	var offset = this.soromlatch ? 16 : 0; //if more than 256k ROM AND SOROM latch is on
	var reg = this.registers[3];
	if ( ( this.registers[0] & 0x8 ) > 0 ) { // 16k / 32k prg switch
		if ( ( this.registers[0] & 0x4 ) > 0 ) { // high/low prg switch
			var last = Math.min( this.get16kPrgBankCount() - 1, 15 ); // this.get16kPrgBankCount() - 1;
			this.switch16kPrgBank( reg + offset, true );
			this.switch16kPrgBank( last + offset, false );
		} else {
			this.switch16kPrgBank( 0 + offset, true );
			this.switch16kPrgBank( reg + offset, false );
		}
	} else {
		this.switch32kPrgBank( ( reg >> 1 ) + ( this.soromlatch ? 8 : 0 ) );
	}
};

mapper1.prototype.write8PrgRom = function( offset, data ) {

	// To get Bill&Ted to work, we need to ignore calls that are less than 2 cpu calls from each other.
	// see http://wiki.nesdev.com/w/index.php/INES_Mapper_001
	var currTime = this.mainboard.synchroniser.getCpuMTC();
	var minTime = this.lastWriteMTC + ( COLOUR_ENCODING_MTC_PER_CPU * 2 );
	var valid = this.lastWriteMTC >= 0;
	this.lastWriteMTC = currTime;
	if ( valid && minTime >= currTime ) {
		return;
	}

	if ( ( data & 0x80 ) > 0 )
	{
		this.val = 0;
		this.count = 0;
		this.registers[0] |= 0x0C;
		//this.syncChrMirrors();
		//this.syncPrgMirrors();
		return;
	}

	this.val |= (data & 0x01) << this.count;
	this.count = this.count + 1;

	if ( this.count >= 5 )
	{
		this.mainboard.synchroniser.synchronise();
		var top3Bits = offset & 0xE000;
		switch ( top3Bits ) {
			case 0x8000: // IS_INT_BETWEEN( offset, 0x8000, 0xA000 )
				this.registers[0] = this.val & 0x1F;

				// bit 0 - Horizontal / vertical mirror switch
				var mirroringMethod;
				switch ( this.val & 0x3 )
				{
				case 0:
					mirroringMethod = PPU_MIRRORING_SINGLESCREEN_NT0;
					break;
				case 1:
					mirroringMethod = PPU_MIRRORING_SINGLESCREEN_NT1;
					break;
				case 2:
					mirroringMethod = PPU_MIRRORING_VERTICAL;
					break;
				case 3:
					mirroringMethod = PPU_MIRRORING_HORIZONTAL;
					break;
				}

				this.mainboard.ppu.changeMirroringMethod( mirroringMethod );				
			break;
			case 0xA000:
				this.registers[1] = this.val & 0x1F;
				//SOROM boards use the high bit of CHR to switch between 1st and last
				//256k of the PRG ROM
				if ( this.get16kPrgBankCount() > 16 ) {
					this.soromlatch = ( ( this.val & 0x10 ) > 0 );
					this.syncPrgMirrors();
				}
			break;
			case 0xC000:
				this.registers[2] = this.val & 0x1F;
				if ( this.get16kPrgBankCount() > 16 ) {
					this.registers[2] &= 0xF;
				}
			break;
			case 0xE000:
				this.registers[3] = this.val & 0xF;
				this.wRamEnabled = ( this.val & 0x10 ) === 0;
			break;
		}

		this.syncChrMirrors();
		this.syncPrgMirrors();

		this.count = 0;
		this.val = 0;
	}
};

mapper1.prototype.write8SRam = function( offset, data ) {
	if ( this.wRamEnabled )
	{
		Nes.basemapper.prototype.write8SRam.call( this, offset, data );
	}
};

mapper1.prototype.read8SRam = function( offset ) {
	if ( this.wRamEnabled )
		return Nes.basemapper.prototype.read8SRam.call( this, offset );
	else
		return 0; // TODO: supposed to be open bus
};

Nes.mappers[1] = mapper1;

