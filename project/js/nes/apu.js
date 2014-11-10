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

///////////////////////////////////////////////////////////////////////////////////////////////


var Apu = function( mainboard ) {
	
	var that = this;
	
	this.mainboard = mainboard;
	this.mainboard.connect( 'reset', function( cold ) { that._onReset( cold ); } );

	this._enabled = true;
	this._soundRate = 44100;
	this._outBufferSize = 4096;

	try {
		this._renderer = new Gui.WebAudioRenderer( this._outBufferSize );
		this._soundRate = this._renderer.getSampleRate();
		//this._triangle = new ApuWaveOscillator( 'triangle' );
		// noise
		// dmc
	}
	catch ( err ) {
		this._renderer = null;
		this._enabled = false;
		console.log( "WebAudio unsupported in this browser. Sound will be disabled..." );
	}
	
	this._frameCounter = new Nes.ApuFrameCounter( this.mainboard );
	this._buffers = [];
	this._square1 = new ApuSquareWaveOscillator( this._addBuffer() );
	this._square2 = new ApuSquareWaveOscillator( this._addBuffer() );
	
	//this._squareTest = new Nes.SquareWaveTester();
};


Apu.prototype._addBuffer = function() {
	var buffer = new ApuOutputBuffer( this._renderer.createBuffer( this._outBufferSize ), this._outBufferSize, this._soundRate );
	this._buffers.push( buffer );
	return buffer;
};


Apu.prototype.enableSound = function( enable ) {
	this._enabled = enable;
};


Apu.prototype.soundEnabled = function() {
	return this._enabled && this.soundSupported();
};


Apu.prototype.soundSupported = function() {
	return !!this._renderer;
};


Apu.prototype.setVolume = function( val ) {
	if ( this._renderer ) {
		this._renderer.setVolume( val );
	}
};


Apu.prototype._onReset = function( cold ) {

	this._frameCounter.reset();
};


Apu.prototype.readFromRegister = function( offset ) {
	var ret = 0;

	return ret;
};


Apu.prototype.writeToRegister = function( offset, data ) {

	switch ( offset ) {
	case 0x4000: // square 1
		this._square1.writeEnvelope( data );
		break;
	case 0x4001:
		this._square1.writeSweep( data );
		break;
	case 0x4002:
		this._square1.writeTimer( data );
		break;
	case 0x4003:
		this._square1.writeLengthCounter( data );
		break;
	case 0x4004: // square 2
		this._square2.writeEnvelope( data );
		break;
	case 0x4005:
		this._square2.writeSweep( data );
		break;
	case 0x4006:
		this._square2.writeTimer( data );
		break;
	case 0x4007:
		this._square2.writeLengthCounter( data );
		break;
	
	// The status register is used to enable and disable individual channels,
	// control the DMC, and can read the status of length counters and APU interrupts.
	case 0x4015:
		this._square1.enable( ( data & 0x1 ) > 0 );
		this._square2.enable( ( data & 0x2 ) > 0 );
		//this._triangle.enable( ( data & 0x4 ) > 0 );
		//this._noise.enable( ( data & 0x8 ) > 0 );
		//this._dmc.enable( ( data & 0x10 ) > 0 );
		break;
	}
	
};


Apu.prototype.synchronise = function( startTicks, endTicks ) {

	if ( this._enabled ) {
	
		while ( startTicks < endTicks ) {
			var nextFrameTick = this._frameCounter.getNextFrameClock( startTicks );
		
			var syncEnd = Math.min( endTicks, nextFrameTick );
			
			this._square1.synchronise( startTicks, syncEnd );
			this._square2.synchronise( startTicks, syncEnd );
			
			if ( syncEnd === nextFrameTick ) {
				this._square1.decrementLengthCounter();
				this._square2.decrementLengthCounter();
				this._frameCounter.acknowledgeClock( nextFrameTick );
			}
			
			startTicks = syncEnd;
		}
	}
};


Apu.prototype.onEndFrame = function( cpuMtc ) {

//	this._squareTest.onEndFrame();
	this._frameCounter.onEndFrame();
	
	if ( this._renderer && this._enabled ) {
	
		for ( var index=0; index<this._buffers.length; ++index ) {
			var buf = this._buffers[index];
			buf.commit();
			buf.clear();
		}

		// //	if ( g_options->SoundEnabled && g_options->ApplicationSpeed == 0 ) // dont play sound if disabled or not running at normal speed
		// if ( samplesAvailable >= APUOutBufferSize ) {
			// //write samples directly to renderer's buffer
			// var buffer = this._renderer.lockBuffer();
			// if ( this._justRenabled > 0 ) {
				// for ( var i=0; i<APUOutBufferSize; ++i ) {
					// buffer[i] = 0;
				// }
				// this._justRenabled--;
			// } else {
				// this.buf.read_samples( buffer, APUOutBufferSize );
			// }
		// //	this._writer.write( buffer, count );
			// this._renderer.unlockBuffer();
		// }
	}
};



Apu.prototype.saveState = function() {
	var data = {};
	return data;
};


Apu.prototype.loadState = function( state ) {

};


Nes.Apu = Apu;

