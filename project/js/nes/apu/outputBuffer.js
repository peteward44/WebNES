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


// You aren't handling odd clock jitter properly. It's really simple, if the APU is on an odd clock on the $4017 write, act as if the write was one clock later.

var ApuOutputBuffer = function( webAudioBuffer, size, sampleRate ) {

	this._buffer = webAudioBuffer;
	this._array = new Float32Array( size );
	this._sampleRate = sampleRate;
	this._framesWorthOfDataSize = Math.floor( this._sampleRate / COLOUR_ENCODING_REFRESHRATE ); // sample rate is number of samples consumed in a second.
	if ( this._array.length < this._framesWorthOfDataSize ) {
		throw new Error( "Could not contain a frames worth of audio data in the provided audio buffer!" );
	}
	this.clear();
};


ApuOutputBuffer.prototype._ticksToBufferPosition = function( ticks ) {

	var pos = Math.floor( ( ticks / COLOUR_ENCODING_FRAME_MTC ) * this._framesWorthOfDataSize );
	return pos;
};


ApuOutputBuffer.prototype.clear = function() {

	for ( var i=0; i<this._array.length; ++i ) {
		this._array[i] = 0;
	}
};


ApuOutputBuffer.prototype.write = function( startTicks, lengthTicks, val ) {
	
	var startBytes = this._ticksToBufferPosition( startTicks );
	var endBytes = Math.min( this._array.length, this._ticksToBufferPosition( startTicks + lengthTicks ) );
	for ( var i=startBytes; i<endBytes; ++i ) {
		this._array[ i ] = val;
	}
};


ApuOutputBuffer.prototype.commit = function() {

	// commit to web audio api
	var dest = this._buffer.lockBuffer();
	for ( var i=0; i<this._array.length; ++i ) {
		dest[i] = this._array[i];
	}
	this._buffer.unlockBuffer();
};

Nes.ApuOutputBuffer = ApuOutputBuffer;
