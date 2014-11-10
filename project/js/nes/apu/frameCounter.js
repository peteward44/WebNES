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
// 7456 cycles after init, triggers quarter frame
// 14912 cycles after init, triggers quarter+half frames 
// 22370 cycles after init, triggers quarter frame
// mode 0 - 29828 cycles after init, triggers quarter+half frames, checks IRQ
// 29829 and 30 - checks IRQ
// 37280 cycles after init, triggers quarter+half frames

var APU_BASE_UNIT = 15; // Number of ticks to use as the base unit MTC timer. This is the NTSC MTC per cpu
var APU_FRAME_COUNTER_INTERVAL = 7456 * APU_BASE_UNIT;
var APU_IRQ_FRAME_EVENT = 29828 * APU_BASE_UNIT;
var APU_FRAME_MODE0_TOTAL = 29830 * APU_BASE_UNIT;
var APU_FRAME_MODE1_TOTAL = 37282 * APU_BASE_UNIT;

// Note: Writing to $4017 with bit 7 set will immediately generate a clock for both the quarter frame and the half frame units, regardless of what the sequencer is doing.

// mode 0:    mode 1:       function
// ---------  -----------  -----------------------------
 // - - - f    - - - - -    IRQ (if bit 6 is clear)
 // - l - l    l - l - -    Length counter and sweep
 // e e e e    e e e e -    Envelope and linear counter


var ApuFrameCounter = function( mainboard ) {
	this._mainboard = mainboard;
	this._mode = 0;
	this._lastFrameStartMtc = 0;
	this._sequenceStage = 0; // either 0,1,2,3 or 4 (if mode 1 enabled) to indicate where in the sequence the frame counter is
	this._irqEventId = -1;
	this._interruptInProgress = false;
};


// This is used by the APU to determine when to decrement the length counters
// Doesn't use the main app's synchroniser as frame clocks don't effect cpu or ppu, but irq does
ApuFrameCounter.prototype.getNextFrameClock = function( ticks ) {

	// work out when next frame count is
	var nextFrameTicks = this._lastFrameStartMtc + ( ( this._sequenceStage + 1 ) * APU_FRAME_COUNTER_INTERVAL );
	if ( nextFrameTicks >= COLOUR_ENCODING_FRAME_MTC ) {
		nextFrameTicks -= COLOUR_ENCODING_FRAME_MTC;
	}
	return nextFrameTicks;
};


ApuFrameCounter.prototype._getNextIrqClock = function( ticks ) {
	
	var nextIrqTicks = this._lastFrameStartMtc + APU_IRQ_FRAME_EVENT;
	if ( nextIrqTicks >= COLOUR_ENCODING_FRAME_MTC ) {
		nextIrqTicks -= COLOUR_ENCODING_FRAME_MTC;
	}
	return nextIrqTicks;
};


ApuFrameCounter.prototype.acknowledgeClock = function( ticks ) {
	this._sequenceStage++;
	var endOfApuFrame = false;
	var frameSize = 0;
	switch ( this._mode ) {
		case 0:
			endOfApuFrame = this._sequenceStage >= 4;
			frameSize = APU_FRAME_MODE0_TOTAL;
			break;
		case 1:
			endOfApuFrame = this._sequenceStage >= 5;
			frameSize = APU_FRAME_MODE1_TOTAL;
			break;
	}
	if ( endOfApuFrame ) {
		// end of the apu frame - the apu frame is slightly longer than simply the clock interval * sequence count
		this._sequenceStage = 0;
		this._lastFrameStartMtc += frameSize;
		if ( this._lastFrameStartMtc >= COLOUR_ENCODING_FRAME_MTC ) {
			this._lastFrameStartMtc -= COLOUR_ENCODING_FRAME_MTC;
		}
		// Update IRQ time
		this._mainboard.synchroniser.changeEventTime( this._irqEventId, this._getNextIrqClock() );
	}
};


ApuFrameCounter.prototype.onEndFrame = function() {

};


ApuFrameCounter.prototype.reset = function() {
	var that = this;
	this._irqEventId = this._mainboard.synchroniser.addEvent( 'apu irq', -1, function( eventTime ) { that._eventApuIrq( eventTime ); } );
};


ApuFrameCounter.prototype._eventApuIrq = function( eventTime ) {
	if ( !this._interruptInProgress ) {
		this._interruptInProgress = true;
		this.mainboard.cpu.holdIrqLineLow( true );
	}
};


ApuFrameCounter.prototype.acknowledgeIrq = function() {
	if ( this._interruptInProgress ) {
		this._mainboard.cpu.holdIrqLineLow( false );
		this._interruptInProgress = false;
	}
};


Nes.ApuFrameCounter = ApuFrameCounter;

