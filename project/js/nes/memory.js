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

var gppu;
var gmapper;
var ginput;
var gapu;

var memory = function( mainboard ) {
	
	var that = this;
	this.mainboard = mainboard;
	this.mainboard.connect( 'reset', function( cold ) { that.reset( cold ); } );
	this.ramPage = new Int32Array( 0x800 );
};


memory.prototype.reset = function( cold ) {
	if ( cold ) {
		// these memory locations are set to various values on power-up
		for ( var i=0; i<this.ramPage.length; ++i )
			this.ramPage[ i ] = 0xFF;
		this.ramPage[0x0008] = 0xF7;
		this.ramPage[0x0009] = 0xEF;
		this.ramPage[0x000a] = 0xDF;
		this.ramPage[0x000f] = 0xBF;
	}
	gppu = window.ppu;
	gmapper = this.mainboard.cart.memoryMapper;
	ginput = this.mainboard.inputdevicebus;
	gapu = this.mainboard.apu;
};
	

memory.prototype.read8 = function( offset ) {
	//ASSERT_NUMBER( offset );
	return this._properRead8( offset & 0xFFFF ) & 0xFF;
};


memory.prototype._readRegister4000 = function( offset ) {
	var offset4000 = offset & 0x1FE0;
	if ( offset4000 === 0 ) { // testing top 11 bits - if it's zero it's between 4000 -> 4020
		if ( offset === 0x4016 || offset === 0x4017 ) {
//				return 0;
			return ginput.readFromRegister( offset );
		} else {
			return 0;
//			return gapu.readFromRegister( offset ) | 0;
		}
	} else {
		return gmapper.read8EXRam( offset );
//			return 0;
	}
	return 0;
};


memory.prototype._properRead8 = function( offset ) {
	// Faster: Top 3 bits are equal to 0x2000 for inbetween 2000 -> 4000, equal to 0 for < 2000 and so on
	var topbits = offset & 0xE000;
	var bot3 = offset & 0x7;
	var rampageOffset = offset & 0x7FF;
	switch ( topbits ) {
		case 0: // address is within RAM boundaries, account for 4x mirroring
			return TYPED_ARRAY_GET_INT32( this.ramPage, rampageOffset );
		case 0x2000: // IS_INT_BETWEEN( offset, 0x2000, 0x4000 )
			return gppu.readFromRegister( bot3 );
		case 0x4000:
			return this._readRegister4000( offset );
		case 0x6000: // IS_INT_BETWEEN( offset, 0x6000, 0x8000 )
			return gmapper.read8SRam( offset );
		default: // IS_INT_BETWEEN( offset, 0x8000, 0x10000 )
			return gmapper.read8PrgRom( offset );
	}
	return 0;
};


memory.prototype.read16NoZeroPageWrap = function( offset ) {

	return this.read8( offset ) | ( this.read8( offset + 1 ) << 8 );
};

	
memory.prototype.write8 = function( offset, data ) {

	switch ( offset & 0xE000 ) {
		case 0: // IS_INT_BETWEEN( offset, 0, 0x2000 ) address is within RAM boundaries, account for 4x mirroring
			TYPED_ARRAY_SET_INT32( this.ramPage, offset & 0x7FF, data );
			break;
		case 0x2000: // IS_INT_BETWEEN( offset, 0x2000, 0x4000 )
			this.mainboard.ppu.writeToRegister( ( offset & 0x07 ), data );
			break;
		case 0x4000:
			{
				if ( ( offset & 0x1FE0 ) === 0 ) { // testing top 11 bits - if it's zero it's between 4000 -> 4020
					switch ( offset )
					{
						case 0x4014: // sprite DMA access
							this.mainboard.ppu.writeToSpriteDMARegister( data );
							break;
						case 0x4016: // input
						case 0x4017:
							this.mainboard.inputdevicebus.writeToRegister( offset, data );
							break;
					}
					// APU (write input 4016 + 4017 to APU as well) <-- is that right??
					this.mainboard.apu.writeToRegister( offset, data );
				} else { // IS_INT_BETWEEN( offset, 0x4020, 0x6000 )
					this.mainboard.cart.memoryMapper.write8EXRam( offset, data );
				}
			}
			break;
		case 0x6000: // IS_INT_BETWEEN( offset, 0x6000, 0x8000 )
			this.mainboard.cart.memoryMapper.write8SRam( offset, data );
			break;
		default:
		case 0x8000: // IS_INT_BETWEEN( offset, 0x8000, 0x10000 )
			this.mainboard.cart.memoryMapper.write8PrgRom( offset, data );
			break;
	}
};


memory.prototype.saveState = function() {
	return { ramPage: Nes.uintArrayToString( this.ramPage ) };
};


memory.prototype.loadState = function( state ) {

	this.ramPage = Nes.stringToUintArray( state.ramPage );
};



Nes.memory = memory;

