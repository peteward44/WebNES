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


//////////////////////////////////////////////////////////////

var lengthCounterTable = [
	0x0A, 0xFE, 0x14, 0x02, 0x28, 0x04, 0x50, 0x06,
	0xA0, 0x08, 0x3C, 0x0A, 0x0E, 0x0C, 0x1A, 0x0E, 
	0x0C, 0x10, 0x18, 0x12, 0x30, 0x14, 0x60, 0x16,
	0xC0, 0x18, 0x48, 0x1A, 0x10, 0x1C, 0x20, 0x1E
];


var ApuSquareWaveOscillator = function( buffer ) {
	
	this._buffer = buffer;
	this._enabled = false;
	this._timer = 0;
	this._lengthCounter = 0;
	this._lengthCounterEnabled = true;
	this._useConstantVolume = false;
	this._volumeValue = 0;
	this._envelope = new Nes.ApuEnvelope();
	
	this._delay = 0;
};

ApuSquareWaveOscillator.prototype.decrementLengthCounter = function() {
	if ( this._lengthCounter > 0 && this._lengthCounterEnabled ) {
		this._lengthCounter--;
		if ( this._lengthCounter === 0 ) {
			// silence
		}
	}
};

ApuSquareWaveOscillator.prototype._getVolume = function() {
	if ( this._lengthCounter > 0 && this._timer >= 8 ) {
		if ( this._useConstantVolume ) {
			return this._volumeValue;
		} else {
			return this._envelope.getEnvelopeVolume();
		}
	}
	return 0;
};

ApuSquareWaveOscillator.prototype.enable = function( enabled ) {
	this._enabled = enabled;
	this._lengthCounter = 0; // set length counter to zero on enabled/disabled
	// disable irq flag (?)
};

ApuSquareWaveOscillator.prototype.writeEnvelope = function( data ) {
	// DDLC VVVV 	Duty (D), envelope loop / length counter halt (L), constant volume (C), volume/envelope (V)
	this._lengthCounterEnabled = ( data & 0x20 ) === 0;
	this._useConstantVolume = ( data & 0x10 ) === 0x10;
	this._volumeValue = data & 0xF;
};

ApuSquareWaveOscillator.prototype.writeSweep = function( data ) {
	// EPPP NSSS 	Sweep unit: enabled (E), period (P), negate (N), shift (S)
};

ApuSquareWaveOscillator.prototype.writeTimer = function( data ) {
	// TTTT TTTT	Timer low (T) (bottom 8 bits)
	this._timer = ( this._timer & 0x700 ) | data;
};

ApuSquareWaveOscillator.prototype.writeLengthCounter = function( data ) {
	// LLLL LTTT 	Length counter load (L), timer high (T)
	this._timer = ( this._timer & 0xFF ) | ( ( data & 0x7 ) << 8 );
	this._lengthCounter = lengthCounterTable[ (data >> 3) & 0x1f ];
	//  (also resets duty and starts envelope)
	this._envelope.reloadOnNextClock();
};


ApuSquareWaveOscillator.prototype._4bitVolumeToBufferValue = function( vol ) {
	return ( vol / 16 );// * 128.0;
};


ApuSquareWaveOscillator.prototype.synchronise = function( startTicks, endTicks ) {

	if ( !this._enabled ) {
		return;
	}

	var volume = this._getVolume();
	var period = this._timer;
	
	// TODO: apply sweep shift
	var offset = 0;
	
	// OPTIMISE: When silent, dont do loop - just calculate next phase
	var timer_period = ( period + 1 ) * 16 * COLOUR_ENCODING_MTC_PER_CPU; // APU cycle is 2* cpu cycle - pulse timer period is 16* cpu cycle due to sequencer having 8 steps
	var timeUp = Math.floor( timer_period / 2 ); // TODO: implement correct duty cycle: this is 50/50 here
	var timeDown = timer_period - timeUp;
	var mtc = startTicks + this._delay;
	var delta = this._4bitVolumeToBufferValue( volume );
	for ( ; mtc<endTicks; mtc += timer_period ) {

		if ( this._lengthCounter === 0 || volume === 0 || ( period + offset ) >= 0x800 ) {
			// silent
		} else {
			this._buffer.write( mtc, timeUp, delta );
			this._buffer.write( mtc + timeUp, timeDown, -delta );
		}
		//this._decrementLengthCounter();
		//this._decrementLengthCounter();
	}
	this._delay = mtc - endTicks;
};


Nes.ApuSquareWaveOscillator = ApuSquareWaveOscillator;

