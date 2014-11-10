/* Copyright (C) 2003-2005 Shay Green. This module is free software; you
can redistribute it and/or modify it under the terms of the GNU Lesser
General Public License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version. This
module is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for
more details. You should have received a copy of the GNU Lesser General
Public License along with this module; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA */

// Blip_Synth and Blip_Wave are waveform transition synthesizers for adding
// waveforms to a Blip_Buffer.


this.Nes = this.Nes || {};


(function(){
	"use strict";
	
	var widest_impulse_ = 24;
	var blip_res_bits_ = 5;
	var BLIP_BUFFER_ACCURACY = 16;

	// Quality level. Higher levels are slower, and worse in a few cases.
	// Use blip_good_quality as a starting point.
	var blip_low_quality = 1;
	var blip_med_quality = 2;
	var blip_good_quality = 3;
	var blip_high_quality = 4;

	// Blip_Synth is a transition waveform synthesizer which adds band-limited
	// offsets (transitions) into a Blip_Buffer. For a simpler interface, use
	// Blip_Wave (below).
	//
	// Range specifies the greatest expected offset that will occur. For a
	// waveform that goes between +amp and -amp, range should be amp * 2 (half
	// that if it only goes between +amp and 0). When range is large, a higher
	// accuracy scheme is used; to force this even when range is small, pass
	// the negative of range (i.e. -range).
	
	var Blip_Synth = function( quality, range ) {

		var calc_fine_bits = function( abs_range ) {
			return (abs_range <= 64 ? 2 : abs_range <= 128 ? 3 :
				abs_range <= 256 ? 4 : abs_range <= 512 ? 5 : abs_range <= 1024 ? 6 :
				abs_range <= 2048 ? 7 : 8);
		};
	
		this.abs_range = (range < 0) ? -range : range;
		this.fine_mode = (range > 512 || range < 0);
		this.width = (quality < 5 ? quality * 4 : widest_impulse_);
		this.res = 1 << blip_res_bits_;
		this.impulse_size = Math.floor( this.width / 2 ) * (this.fine_mode + 1);
		this.base_impulses_size = Math.floor( this.width / 2 ) * ( Math.floor( this.res / 2 ) + 1);
		this.fine_bits = this.fine_mode ? calc_fine_bits( this.abs_range ) : 0;
		
		this.impulses = new Uint32Array( this.impulse_size * this.res * 2 + this.base_impulses_size );
		this.impulse = new Nes.Blip_Impulse_();
		
		this.impulse.init( this.impulses, this.width, this.res, this.fine_bits );
	};

	
	Blip_Synth.blip_low_quality = 1;
	Blip_Synth.blip_med_quality = 2;
	Blip_Synth.blip_good_quality = 3;
	Blip_Synth.blip_high_quality = 4;
	
	
	// Set volume of a transition at amplitude 'range' by setting volume_unit
	// to v / range
	Blip_Synth.prototype.volume = function( v ) {
		this.impulse.volume_unit( v * (1.0 / this.abs_range) );
	};

	

	// Set base volume unit of transitions, where 1.0 is a full swing between the
	// positive and negative extremes. Not optimized for real-time control.
	Blip_Synth.prototype.volume_unit = function( unit ) {
		this.impulse.volume_unit( unit );
	};
	
	// Default Blip_Buffer used for output when none is specified for a given call	
	Blip_Synth.prototype.output = function( buf ) {
		if ( buf === undefined ) {
			return this.impulse.buf;
		} else {
			this.impulse.buf = buf;
		}
	};
	

	// Add an amplitude offset (transition) with a magnitude of delta * volume_unit
	// into the specified buffer (default buffer if none specified) at the
	// specified source time. Delta can be positive or negative. To increase
	// performance by inlining code at the call site, use offset_inline().
	Blip_Synth.prototype.offset = function( time, delta, buf ) {
		buf = buf || this.impulse.buf;
		this.offset_resampled( time * buf.factor_ + buf.offset_, delta, buf );
	};
	
	
	Blip_Synth.prototype.offset_resampled = function( time, delta, blip_buf ) {
		blip_buf = blip_buf || this.impulse.buf;

		var sample_index = (time >> BLIP_BUFFER_ACCURACY) & ~1;
	//	assert(( "Blip_Synth/Blip_wave: Went past end of buffer",
	//			sample_index < blip_buf->buffer_size_ ));
		var const_offset = Math.floor( widest_impulse_ / 2 ) - Math.floor( this.width / 2 );
		
		// original code cast from 16 bit array to 32 bit for this function - we can't do that
		// as it requires to modify on 16 bit boundaries so can't just pass .buffer to Uint32Array
		var buf = new Uint32Array( blip_buf.buffer_.buffer, ( const_offset + sample_index ) * 2 );
		
		var shift = BLIP_BUFFER_ACCURACY - blip_res_bits_;
		var mask = this.res * 2 - 1;
		var impulsesIndex = ((time >> shift) & mask) * this.impulse_size;
		var imp = this.impulses.subarray( impulsesIndex );
		
		var offset = this.impulse.offset * delta;
		var bufIndex = 0;
		var impIndex = 0;
		
		if ( !this.fine_bits ) {
			// normal mode
			for ( var n = Math.floor( this.width / 4 ); n > 0; --n ) {
			
				var t0 = buf [ bufIndex + 0] - offset;
				var t1 = buf [ bufIndex + 1] - offset;
				
				t0 += imp [ impIndex + 0] * delta;
				t1 += imp [ impIndex + 1] * delta;
				impIndex += 2;
				
				buf [ bufIndex + 0] = t0;
				buf [ bufIndex + 1] = t1;
				bufIndex += 2;
			}
		}
		else
		{
			// fine mode
			var sub_range = 1 << this.fine_bits;
			delta += Math.floor( sub_range / 2 );
			var delta2 = (delta & (sub_range - 1)) - Math.floor( sub_range / 2 );
			delta >>= this.fine_bits;
			
			for ( var m = Math.floor( this.width / 4 ); m > 0; --m )
			{
				var s0 = buf [ bufIndex + 0] - offset;
				var s1 = buf [ bufIndex + 1] - offset;
				
				s0 += imp [impIndex + 0] * delta2;
				s0 += imp [impIndex + 1] * delta;
				
				s1 += imp [impIndex + 2] * delta2;
				s1 += imp [impIndex + 3] * delta;
				
				impIndex += 4;

				buf [ bufIndex + 0] = s0;
				buf [ bufIndex + 1] = s1;
				bufIndex += 2;
			}
		}
	};
	
	
	Blip_Synth.prototype.offset_inline = function( time, delta, buf ) {
		buf = buf || this.impulse.buf;
		this.offset_resampled( time * buf.factor_ + buf.offset_, delta, buf );
	};
	
	
	Nes.Blip_Synth = Blip_Synth;
	
}());
