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

////////////////////

var joypad = function() {
	this._currentState = 0;
	this._strobedState = 0;
	this._strobeByte = 0;
	this._readCount = 0;
};


joypad.prototype.writeToRegister = function( offset, data ) {

	var firstBit = data & 1;
	if ( this._strobeByte === 1 || firstBit === 1 ) {
		this._strobeByte = firstBit | 0;
		this._strobedState = this._currentState;
		this._readCount = 0;
	}
};


joypad.prototype.readFromRegister = function( offset ) {

	var ret = 0;
	if ( this._strobeByte === 1 ) {
		this._strobedState = this._currentState;
		this._readCount = 0;
		ret = ( this._strobedState & 1 ) | 0;
	} else {
		ret = ( ( this._strobedState >> this._readCount ) & 1 ) | 0;
		this._readCount++;
		ret |= 0x40;
	}
	return ret | 0;
};


joypad.prototype._getDuplicateMask = function( buttonIndex ) {

	// disallow pressing up+down and left+right at the same time - always keep the button that is already pressed
	switch ( buttonIndex ) {
		case 4: // UP
			return 0xDF; // ~( 0x20 );
		case 5: // DOWN
			return 0xEF; // ~( 0x10 );
		case 6: // LEFT
			return 0x7F; // ~( 0x80 );
		case 7: // RIGHT
			return 0xBF; // ~( 0x40 );
	}
	return 0xFF;
};


joypad.prototype.pressButton = function( buttonIndex, pressed ) {

	if ( pressed ) {
		this._currentState |= ( 1 << buttonIndex );
		this._currentState &= this._getDuplicateMask( buttonIndex ); // this prevents up+down and left+right being pressed
	} else {
		this._currentState &= 0xFF ^ ( 1 << buttonIndex );
	}
};


joypad.prototype.saveState = function() {
	var data = {};
	data._currentState = this._currentState;
	data._strobedState = this._strobedState;
	data._strobeByte = this._strobeByte;
	data._readCount = this._readCount;
	return data;
};


joypad.prototype.loadState = function( state ) {
	this._currentState = state._currentState;
	this._strobedState = state._strobedState;
	this._readCount = state._readCount;
	this._strobeByte = state._strobeByte;
};

Nes.joypad = joypad;






var inputdevicebus = function() {
	//this.devices = new Array( 2 );
	
	this.j1 = new Nes.joypad();
	this.j2 = new Nes.joypad();
};


inputdevicebus.prototype.getJoypad = function( index ) {
	
	switch ( index ) {
	case 0:
		return this.j1;
	case 1:
		return this.j2;
	default:
		return null;
	}
};


inputdevicebus.prototype.writeToRegister = function( offset, data ) {
	switch ( offset )
	{
	case 0x4016:
		this.j1.writeToRegister( offset, data );
		break;
	case 0x4017:
		this.j2.writeToRegister( offset, data );
		break;
	}
};


inputdevicebus.prototype.readFromRegister = function( offset ) {
	var ret = 0;
	switch ( offset )
	{
	case 0x4016:
		ret = this.j1.readFromRegister( offset ) | 0;
		break;
	case 0x4017:
		ret = this.j2.readFromRegister( offset ) | 0;
		break;
	}
	return ret;
};


Nes.inputdevicebus = inputdevicebus;

