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


var SquareWaveTester = function( mainboard ) {
	
	var that = this;
	
	this._enabled = true;
	this._soundRate = 44100;
	this._outBufferSize = 4096;

	try {
		this._renderer = new Gui.WebAudioRenderer( this._outBufferSize );
		this._soundRate = this._renderer.getSampleRate();
	}
	catch ( err ) {
		this._renderer = null;
		this._enabled = false;
		console.log( "WebAudio unsupported in this browser. Sound will be disabled..." );
	}
	
	this._buffers = [];
	this._square1 = new ApuSquareWaveOscillator( this._addBuffer() );
	this._square1.enable( true );
	
	this._square1.writeTimer( 128 );
	this._square1.writeLengthCounter( 0x20 );  // writes value of 4 to length counter
	this._square1.writeEnvelope( 0x1F ); // constant volume mode, maximum volume
};


SquareWaveTester.prototype._addBuffer = function() {
	var buffer = new ApuOutputBuffer( this._renderer.createBuffer( this._outBufferSize ), this._outBufferSize, this._soundRate );
	this._buffers.push( buffer );
	return buffer;
};


SquareWaveTester.prototype.synchronise = function( startTicks, endTicks ) {

	if ( this._enabled ) {
		this._square1.synchronise( startTicks, endTicks );
	}
};


SquareWaveTester.prototype.onEndFrame = function( cpuMtc ) {

	if ( this._renderer && this._enabled ) {
		// run a frames worth of sound processing
		this.synchronise( 0, COLOUR_ENCODING_FRAME_MTC );
	
		for ( var index=0; index<this._buffers.length; ++index ) {
			var buf = this._buffers[index];
			buf.commit();
			buf.clear();
		}
	}
};


Nes.SquareWaveTester = SquareWaveTester;

