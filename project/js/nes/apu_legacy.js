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
this.Gui = this.Gui || {};
	
var APUOutBufferSize = 4096;
var APUBaseRate = 1789773;


var ApuLegacy = function( mainboard ) {
	
	var that = this;
	
	this._outBufferSize = 4096;
	this._soundRate = 44100;
	
	this.mainboard = mainboard;
	this.mainboard.connect( 'reset', function( cold ) { that._onReset( cold ); } );
	this.nextIrq = -1;
	this._irqActive = false;
	this.mLastCalculatedNextIrqTime = -1;
	
	this._enabled = true;
	this._justRenabled = 0;
	var soundRate = 44100;

	this.apu = new Nes.Nes_Apu();
	
	try {
		this._renderer = new Gui.WebAudioRenderer( APUOutBufferSize );
		this._outBuffer = this._renderer.createBuffer( this._outBufferSize );
		soundRate = this._renderer.getSampleRate();
		this.buf = new Nes.Blip_Buffer();
	//	this._writer = new Nes.Wave_Writer( soundRate );
	//	this._writer.activate();
			
		this.buf.clock_rate( APUBaseRate );
		this.apu.output( this.buf );
		this.buf.sample_rate( soundRate );
	}
	catch ( err ) {
		this._renderer = null;
		this._enabled = false;
		console.log( "WebAudio unsupported in this browser. Sound will be disabled..." );
	}
	
	this.apu.dmc_reader( function( addr ) { 
		return mainboard.memory.read8( addr );
	} );
	this.apu.irq_notifier( function() {
		// called when the next predicted nmi changes
		//that.mainboard.synchroniser.synchronise();
		that.CalculateWhenIrqDue();
	} );
};


ApuLegacy.prototype.enableSound = function( enable ) {
	enable = enable === undefined ? true : enable;
	if ( enable !== this._enabled ) {
		if ( enable ) { // after re-enabling sound, fill audio buffer with zeroes to prevent static
			this._justRenabled = 2;
		}
		this._enabled = enable;
	}
};


ApuLegacy.prototype.soundEnabled = function() {
	return this._enabled && this.soundSupported();
};


ApuLegacy.prototype.soundSupported = function() {
	return !!this._renderer;
};


ApuLegacy.prototype.setVolume = function( val ) {
	if ( this._renderer ) {
		this._renderer.setVolume( val );
	}
};


ApuLegacy.prototype._onReset = function( cold ) {

	this.nextIrq = -1;
	this.apu.reset( COLOUR_ENCODING_NAME !== "NTSC" );
};


ApuLegacy.prototype.readFromRegister = function( offset ) {
	var ret = 0;
	if ( offset === this.apu.status_addr ) {
		this.mainboard.synchroniser.synchronise();
		var realTime = Math.floor( this.mainboard.synchroniser.getCpuMTC() / COLOUR_ENCODING_MTC_PER_CPU );			
		if ( offset === 0x4015 && this._irqActive ) {
			// irq acknowledge
			this._irqActive = false;
			//this.mainboard.cpu.holdIrqLineLow( false );
		}
		ret = this.apu.read_status( realTime );
	}
	return ret;
};


ApuLegacy.prototype.writeToRegister = function( offset, data ) {
	if ( offset >= this.apu.start_addr && offset <= this.apu.end_addr ) {
		this.mainboard.synchroniser.synchronise();
		var realTime = Math.floor( this.mainboard.synchroniser.getCpuMTC() / COLOUR_ENCODING_MTC_PER_CPU );
		this.apu.write_register( realTime, offset, data );
	}
};


ApuLegacy.prototype.synchronise = function( startTicks, endTicks ) {
	var cpuClocks = Math.floor( startTicks / COLOUR_ENCODING_MTC_PER_CPU ) - 1;
	this.apu.run_until( cpuClocks >= 0 ? cpuClocks : 0 );
	
	if ( this.apu.earliest_irq() === Nes.Nes_Apu.irq_waiting ) {
		//console.log( "Triggering APU IRQ" );
		//this.mainboard.cpu.holdIrqLineLow();
		this._irqActive = true;
	}
};


ApuLegacy.prototype.onEndFrame = function( cpuMtc ) {
	var realTime = Math.floor( this.mainboard.synchroniser.getCpuMTC() / COLOUR_ENCODING_MTC_PER_CPU );
	this.apu.end_frame( realTime );

	if ( this._renderer && this._enabled ) {
		// Read some samples out of Blip_Buffer if there are enough to
		// fill our output buffer
		this.buf.end_frame( realTime );

		var samplesAvailable = this.buf.samples_avail();

		//	if ( g_options->SoundEnabled && g_options->ApplicationSpeed == 0 ) // dont play sound if disabled or not running at normal speed
		if ( samplesAvailable >= APUOutBufferSize ) {
			//write samples directly to renderer's buffer
			var floatArray = this._outBuffer.lockBuffer();
			this.buf.read_samples( floatArray, APUOutBufferSize );
			this._outBuffer.unlockBuffer();
		//	this._writer.write( buffer, count );
		}
	}
	
	this.CalculateWhenIrqDue();
};


ApuLegacy.prototype._eventIrqTrigger = function( eventTime ) {

	// done in the synchronise method
//	this.mainboard.cpu.holdIrqLineLow();
};


ApuLegacy.prototype.CalculateWhenIrqDue = function() {

	var that = this;
	var earliestIrq = this.apu.earliest_irq();
	if ( earliestIrq !== this.apu.no_irq ) {
		this.nextIrq = earliestIrq * COLOUR_ENCODING_MTC_PER_CPU;
		if ( this.nextIrq >= 0 ) {
			Nes.Trace.writeLine( Nes.trace_apu, 'IRQ scheduled for: ' + this.nextIrq );
			//this.mainboard.synchroniser.addEvent( 'apu irq', this.nextIrq, function( eventTime ) { that._eventIrqTrigger( eventTime ); } );
		}
	} else {
		this.nextIrq = -1;
		// TODO: change irq event if it changes
	}
};


ApuLegacy.prototype.saveState = function() {
	var data = {};
	data.apu = this.apu.save_snapshot();
	data.nextIrq = this.nextIrq;
	data.mLastCalculatedNextIrqTime = this.mLastCalculatedNextIrqTime;
	return data;
};


ApuLegacy.prototype.loadState = function( state ) {

	this.apu.load_snapshot( state.apu );
	this.nextIrq = state.nextIrq;
	this.mLastCalculatedNextIrqTime = state.mLastCalculatedNextIrqTime;
};


Nes.ApuLegacy = ApuLegacy;
