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

var mainboard = function( renderSurface ) {
	var that = this;
	this.running = false;
	this.cart = null;
	this._eventBus = new Nes.EventBus();
	
	this.memory = new Nes.memory( this );
	window.ppu = new Nes.ppu( this );
	this.ppu = window.ppu;
	this.apu = new Nes.ApuLegacy( this ); // Replace with Nes.Apu to use new (unfinished) APU
	this.inputdevicebus = new Nes.inputdevicebus();

	this.cpu = new Nes.cpu6502( this );
	//this.cpu.enableTrace( true );
	this.renderBuffer = new Nes.renderbuffer( this, renderSurface );

	this.synchroniser = new Nes.synchroniser( this );
	this.synchroniser.connect( 'frameEnd', function() { that._onFrameEnd(); } );
	this.synchroniser.addObject( 'ppu', this.ppu );
	this.synchroniser.addObject( 'apu', this.apu );

	this.ppu.hookSyncEvents( this.synchroniser );
	
	this.enableSound( true );
};


mainboard.prototype.connect = function( name, cb ) {
	this._eventBus.connect( name, cb );
};


mainboard.prototype.enableSound = function( enable ) {
	this.apu.enableSound( enable );
	this._eventBus.invoke( 'soundEnabled', this.apu.soundEnabled(), this.apu.soundSupported() );
};


mainboard.prototype.setVolume = function( val ) {
	this.apu.setVolume( val );
};


mainboard.prototype.setTraceOption = function( traceType, checked ) {
	
	if ( traceType === Nes.trace_all || traceType === Nes.trace_cpuInstructions ) {
		this.cpu.enableTrace( checked ); // cpu instructions require different code path, needs to be invoked seperately
	}
	Nes.Trace.enableType( traceType, checked );
};

	
mainboard.prototype._onFrameEnd = function() {
	this.running = false;
	this._eventBus.invoke( 'frameEnd' );
};


mainboard.prototype.doFrame = function() {
	if ( this.cart )
	{
		this.running = true;
		while ( this.running )
		{ // keep going until a frame is rendered
			this.synchroniser.runCycle();
		}
	}
};


mainboard.prototype.loadCartridge = function( cart ) {

	this.cart = cart;
	this.synchroniser.addObject( 'mapper', this.cart.memoryMapper );
	
	this.reset( true );
	this._eventBus.invoke( 'romLoaded', this.cart );
};


mainboard.prototype.powerButton = function( on ) {
	
	var isOn = on && this.cart;
	if ( isOn ) {
		this.reset();
	} else {
		this.running = false;
		this.cart = null;
	}
	this._eventBus.invoke( 'power', isOn );
};


mainboard.prototype.reset = function( cold ) {

	cold = cold === undefined ? true : cold;
	if ( this.cart )
		this.cart.reset( cold );
	this._eventBus.invoke( 'reset', cold );
};


mainboard.prototype.saveState = function() {

	var data = {};
	data.memory = this.memory.saveState();
	data.ppu = this.ppu.saveState();
	data.apu = this.apu.saveState();
//	data.joypad1 = this.joypad1.saveState();
	data.cpu = this.cpu.saveState();
	data.synchroniser = this.synchroniser.saveState();
	data.renderBuffer = this.renderBuffer.saveState();
	if ( this.cart && this.cart.memoryMapper ) {
		data.memoryMapper = this.cart.memoryMapper.saveState();
	}
	return data;
};


mainboard.prototype.loadState = function( data ) {

	this.memory.loadState( data.memory );
	this.ppu.loadState( data.ppu );
	this.apu.loadState( data.apu );
//	this.joypad1.loadState( data.joypad1 );
	this.cpu.loadState( data.cpu );
	this.renderBuffer.loadState( data.renderBuffer );
	this.synchroniser.loadState( data.synchroniser );
	if ( this.cart && this.cart.memoryMapper ) {
		this.cart.memoryMapper.loadState( data.memoryMapper );
	}
};


Nes.mainboard = mainboard;

