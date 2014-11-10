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

//////////////////////////////////////////////////////////////////////////


var ApuEnvelope = function() {
	this._envelopeCounter = 0; // number of ticks every time the envelope volume is decremented.
	this._envelopeVolume = 0;
	this._doEnvelopeReloadOnNextClock = false;
};


ApuEnvelope.prototype.reset = function() {
	this._envelopeCounter = 0;
	this._envelopeVolume = 0;
	this._doEnvelopeReloadOnNextClock = false;
};


ApuEnvelope.prototype.reloadOnNextClock = function() {
	this._doEnvelopeReloadOnNextClock = true;
};

// Called every time the envelope is clocked by the divider
ApuEnvelope.prototype.decrementCounter = function( envelopeNotLooped ) {
	
	if ( this._doEnvelopeReloadOnNextClock ) {
		this._doEnvelopeReloadOnNextClock = false;
		this._envelopeCounter = this._volumeValue;
		this._envelopeVolume = 15;
	} else {
		this._envelopeCounter--;
		if ( this._envelopeCounter < 0 ) {
			this._envelopeCounter = this._volumeValue;
			if ( this._envelopeVolume > 0 || !envelopeNotLooped ) {
				this._envelopeVolume--;
				if ( this._envelopeVolume < 0 ) {
					this._envelopeVolume = 15;
				}
			}
		}
	}
};


ApuEnvelope.prototype.getEnvelopeVolume = function() {
	return this._envelopeVolume;
};


Nes.ApuEnvelope = ApuEnvelope;

