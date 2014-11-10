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

// Buffer of sound samples into which band-limited waveforms can be synthesized
// using Blip_Wave or Blip_Synth.

// Blip_Buffer 0.3.3. Copyright (C) 2003-2005 Shay Green. GNU LGPL license.

this.Nes = this.Nes || {};


(function(){
	"use strict";
	
	var widest_impulse_ = 24;
	var blip_res_bits_ = 5;
	var BLIP_BUFFER_ACCURACY = 16;
	var max_res = 1 << blip_res_bits_;
	
	
	var Blip_eq_t = function( treble, cutoff, samplerate ) {
		this.treble = treble || 0;
		this.cutoff = cutoff || 0;
		this.sample_rate = samplerate || 44100;
	};

	
	var uintArray_memset = function( buf, data, len, startIndex ) {
	
		startIndex = startIndex || 0;
		for ( var i=0; i<len; ++i ) {
			buf[ startIndex + i ] = data;
		}
	};
	
	
	
	
	
	var uintArray_memmove = function( buf, srcIndex, destIndex, len ) {
	
		var tmpArray = null;
		if ( !tmpArray || tmpArray.length < len ) {
			tmpArray = new Uint16Array( len );
		}
		tmpArray.set( buf.subarray( srcIndex, srcIndex + len ), 0 );
		buf.set( tmpArray.subarray( 0, len ), destIndex );
	};
	
	
	var uintArray_memcpy = function( buf, srcIndex, destIndex, len ) {
		buf.set( buf.subarray( srcIndex, srcIndex + len ), destIndex );
	};
	
	
	var blip_default_length = 0;
	var accum_fract = 15; // less than 16 to give extra sample range
	var sample_offset = 0x7F7F; // repeated byte allows memset to clear buffer
		
	
	var Blip_Buffer = function() {

		this.samples_per_sec = 44100;
		this.reader_accum = 0;
		this.bass_shift = 0;
		this.eq = new Blip_eq_t();

		// try to cause assertion failure if buffer is used before these are set
		this.clocks_per_sec = 0;
		this.buffer_ = null;
		this.factor_ = ~0;
		this.offset_ = 0;
		this.buffer_size_ = 0;
		this.length_ = 0;
		
		this.bass_freq_ = 16;
	};
	
	// Set output sample rate and buffer length in milliseconds (1/1000 sec),
	// If there is insufficient memory for the buffer, sets the buffer length
	// to 0 and returns error string (or propagates exception if compiler supports it).
	Blip_Buffer.prototype.sample_rate = function( new_rate, msec ) {
	
		if ( new_rate === undefined ) {
			return this.samples_per_sec;
		} else {
			msec = msec || blip_default_length;
			
			var new_size = 65448;//(0xFFFFFFFF >> BLIP_BUFFER_ACCURACY) + 1 - widest_impulse_ - 64;
			if ( msec !== blip_default_length ) {
				var s = Math.floor( (new_rate * (msec + 1) + 999) / 1000 );
				if ( s < new_size ) {
					new_size = s;
				} else {
			//		require( false ); // requested buffer length exceeds limit
				}
			}
			
			if ( this.buffer_size_ !== new_size ) {
				this.buffer_ = null; // allow for exception in allocation below
				this.buffer_size_ = 0;
				this.offset_ = 0;
				
				this.buffer_ = new Uint16Array( new_size + widest_impulse_ );
			}
			
			this.buffer_size_ = new_size;
			this.length_ = Math.floor( new_size * 1000 / new_rate ) - 1;
		//	if ( msec )
		//		assert( this.length_ == msec ); // ensure length is same as that passed in
			
			this.samples_per_sec = new_rate;
			if ( this.clocks_per_sec ) {
				this.clock_rate( this.clocks_per_sec ); // recalculate factor
			}
			
			this.bass_freq( this.bass_freq_ ); // recalculate shift
			
			this.clear();
		}
	};
	
	
	// Length of buffer, in milliseconds
	Blip_Buffer.prototype.length = function() {
		return this.length_;
	};

	
	// Number of source time units per second
	Blip_Buffer.prototype.clock_rate = function( cps ) {
		if ( cps === undefined ) {
			return this.clocks_per_sec;
		} else {
			this.clocks_per_sec = cps;
			this.factor_ = Math.floor( this.samples_per_sec / cps * (1 << BLIP_BUFFER_ACCURACY) + 0.5 );
		//	require( this.factor_ > 0 ); // clock_rate/sample_rate ratio is too large
		}
	};
	
	// Set frequency at which high-pass filter attenuation passes -3dB
	Blip_Buffer.prototype.bass_freq = function( freq ) {
		this.bass_freq_ = freq;
		if ( freq === 0 ) {
			this.bass_shift = 31; // 32 or greater invokes undefined behavior elsewhere
			return;
		}
		this.bass_shift = 1 + Math.floor( 1.442695041 * Math.log( 0.124 * this.samples_per_sec / freq ) );
		if ( this.bass_shift < 0 ) {
			this.bass_shift = 0;
		}
		if ( this.bass_shift > 24 ) {
			this.bass_shift = 24;
		}
	};
	
	// Remove all available samples and clear buffer to silence. If 'entire_buffer' is
	// false, just clear out any samples waiting rather than the entire buffer.
	Blip_Buffer.prototype.clear = function( entire_buffer ) {
		entire_buffer = entire_buffer === undefined ? true : entire_buffer;
			
		var count = (entire_buffer ? this.buffer_size_ : this.samples_avail());
		this.offset_ = 0;
		this.reader_accum = 0;
		uintArray_memset( this.buffer_, sample_offset, count + widest_impulse_ );
	};
	
	// to do:
	// Notify Blip_Buffer that synthesis has been performed until specified time
	//void run_until( blip_time_t );
	
	// End current time frame of specified duration and make its samples available
	// (along with any still-unread samples) for reading with read_samples(). Begin
	// a new time frame at the end of the current frame. All transitions must have
	// been added before 'time'.
	Blip_Buffer.prototype.end_frame = function( t ) {
		this.offset_ += t * this.factor_;
	//	assert(( "Blip_Buffer::end_frame(): Frame went past end of buffer",
	//			samples_avail() <= (long) this.buffer_size_ ));
	};
	
	// Number of samples available for reading with read_samples()
	Blip_Buffer.prototype.samples_avail = function() {
		return this.offset_ >> BLIP_BUFFER_ACCURACY;
	};
	
	// Read at most 'max_samples' out of buffer into 'dest', removing them from from
	// the buffer. Return number of samples actually read and removed. If stereo is
	// true, increment 'dest' one extra time after writing each sample, to allow
	// easy interleving of two channels into a stereo output buffer.
	Blip_Buffer.prototype.read_samples = function( out, max_samples, stereo ) {
		//require( this.buffer_ ); // sample rate must have been set
				
		var count = this.samples_avail();
		if ( count > max_samples ) {
			count = max_samples;
		}
		
		if ( !count ) {
			return 0; // optimization
		}
		
		var isFloatOutputArray = out instanceof Float32Array;
		
		var inIndex = 0;
		var outIndex = 0;
		var step = stereo ? 2 : 1;
	
		for ( var n = count; n--; ) {
		
			var s = this.reader_accum >> accum_fract;
			this.reader_accum -= this.reader_accum >> this.bass_shift;
			var inbyte = this.buffer_[inIndex];
			this.reader_accum += ( inbyte - sample_offset) << accum_fract;
			inIndex += 1;
			
			// clamp sample
		//	if ( s !== ( s & 0xFFFF ) ) {
			if ( s < -32767 || s > 32767 ) { // larger than a signed 16 bit value
				s = 0x7FFF - (s >> 24);
			}
			
			if ( isFloatOutputArray ) {
				out[ outIndex ] = s / 32768.0;
			} else {
				out[ outIndex ] = s;
			}
			
			outIndex += step;
		}
		
		this.remove_samples( count );
		
		return count;
	};
	
	// Remove 'count' samples from those waiting to be read
	Blip_Buffer.prototype.remove_samples = function( count ) {
		//require( this.buffer_ ); // sample rate must have been set
		
		if ( !count ) { // optimization
			return;
		}
		
		this.remove_silence( count );
		
		// Allows synthesis slightly past time passed to end_frame(), as long as it's
		// not more than an output sample.
		// to do: kind of hacky, could add run_until() which keeps track of extra synthesis
		var copy_extra = 1;
		
		// copy remaining samples to beginning and clear old samples
		var remain = this.samples_avail() + widest_impulse_ + copy_extra;
		if ( count >= remain ) {
			uintArray_memmove( this.buffer_, count, 0, remain );
		} else {
			uintArray_memcpy( this.buffer_, count, 0, remain );
		}
		uintArray_memset( this.buffer_, sample_offset, count, remain );
	};
	
	// Number of samples delay from synthesis to samples read out
	Blip_Buffer.prototype.output_latency = function() {
		return Math.floor( widest_impulse_ / 2 );
	};
	
	
	// not documented yet
	Blip_Buffer.prototype.remove_silence = function( count ) {
		//assert(( "Blip_Buffer::remove_silence(): Tried to remove more samples than available",
		//		count <= samples_avail() ));
		this.offset_ -= count << BLIP_BUFFER_ACCURACY;
	};
	
	
	Blip_Buffer.prototype.resampled_time = function( t ) {
		return t * this.factor_ + this.offset_;
	};
	
	Blip_Buffer.prototype.resampled_duration = function( t ) {
		return t * this.factor_;
	};
	
	
	Nes.Blip_Buffer = Blip_Buffer;
	
	
	
	
	
	
	var impulse_bits = 15;
	var impulse_amp = 1 << impulse_bits;
	var impulse_offset = Math.floor( impulse_amp / 2 );

	
	var Blip_Impulse_ = function() {
	
		this.impulses = null;
		this.impulse = null;
	};


	Blip_Impulse_.prototype.init = function( imps, w, r, fb ) {
	
		this.fine_bits = fb || 0;
		this.width = w;
		this.impulses = new Uint16Array( imps.buffer );
		this.generate = true;
		this.volume_unit_ = -1.0;
		this.res = r;
		this.buf = null;
		
		this.impulse = new Uint16Array( this.impulses.buffer, ( this.width * this.res * 2 * (this.fine_bits ? 2 : 1) ) * 2 );
		this.offset = 0;
	};


	// TODO: examine this if there are any problems
	Blip_Impulse_.prototype.scale_impulse = function( unit, imp_in ) {
	
		var offset = ( unit << impulse_bits) - impulse_offset * unit + (1 << (impulse_bits - 1));
		var impIndex = 0;
		var fimpIndex = 0;
		for ( var n = Math.floor( this.res / 2 ) + 1; n--; ) {
			var error = unit;
			for ( var nn = this.width; nn--; ) {
				var a = (this.impulse[ fimpIndex++ ] * unit + offset) >> impulse_bits;
				error -= a - unit;
				imp_in[ impIndex++ ] = a;
			}
			
			// add error to middle
			imp_in[ impIndex - Math.floor( this.width / 2 ) - 1] += error;
		}
		
		if ( this.res > 2 ) {
			// second half is mirror-image
			var revIndex = impIndex - this.width - 1;
			for ( var mm = ( Math.floor( this.res / 2 ) - 1) * this.width - 1; mm--; ) {
				imp_in[ impIndex++ ] = imp_in[ --revIndex ];
			}
			imp_in[ impIndex++ ] = unit;
		}
		
		// copy to odd offset
		imp_in[ impIndex++ ] = unit;
		//memcpy( imp, imp_in, (res * width - 1) * sizeof *imp );
		uintArray_memcpy( imp_in, 0, impIndex, (this.res * this.width - 1) );
	};
	
	
	Blip_Impulse_.prototype.fine_volume_unit = function() {
		// to do: find way of merging in-place without temporary buffer
		
		var temp = new Uint16Array( max_res * 2 * widest_impulse_ );
		this.scale_impulse( (this.offset & 0xffff) << this.fine_bits, temp );
		var imp2 = this.impulse.subarray( this.res * 2 * this.width );
		this.scale_impulse( this.offset & 0xffff, imp2 );
		
		// merge impulses
		var impIndex = 0;
		var imp2Index = 0;
		var src2Index = 0;
		for ( var n = Math.floor( this.res / 2 ) * 2 * this.width; n--; ) {
			this.impulses[ impIndex++ ] = imp2[ imp2Index++ ];
			this.impulses[ impIndex++ ] = imp2[ imp2Index++ ];
			this.impulses[ impIndex++ ] = temp[ src2Index++ ];
			this.impulses[ impIndex++ ] = temp[ src2Index++ ];
		}
	};
	
	
	Blip_Impulse_.prototype.volume_unit = function( new_unit ) {
		if ( new_unit === this.volume_unit_ ) {
			return;
		}
		
		if ( this.generate ) {
			this.treble_eq( new Blip_eq_t( -8.87, 8800, 44100 ) );
		}
		
		this.volume_unit_ = new_unit;
		
		this.offset = 0x10001 * Math.floor( this.volume_unit_ * 0x10000 + 0.5 );
		
		if ( this.fine_bits ) {
			this.fine_volume_unit();
		} else {
			this.scale_impulse( this.offset & 0xffff, this.impulses );
		}
	};
	
		

	Blip_Impulse_.prototype.treble_eq = function( new_eq ) {
	
		if ( !this.generate && new_eq.treble === this.eq.treble && new_eq.cutoff === this.eq.cutoff && new_eq.sample_rate === this.eq.sample_rate ) {
			return; // already calculated with same parameters
		}
		
		var pi = 3.1415926535897932384626433832795029;
		
		this.generate = false;
		this.eq = new_eq;
		
		var treble = Math.pow( 10.0, 1.0 / 20 * this.eq.treble ); // dB (-6dB = 0.50)
		if ( treble < 0.000005 ) {
			treble = 0.000005;
		}
		
		var treble_freq = 22050.0; // treble level at 22 kHz harmonic
		var sample_rate = this.eq.sample_rate;
		var pt = treble_freq * 2 / sample_rate;
		var cutoff = this.eq.cutoff * 2 / sample_rate;
		if ( cutoff >= pt * 0.95 || cutoff >= 0.95 ) {
			cutoff = 0.5;
			treble = 1.0;
		}
		
		// DSF Synthesis (See T. Stilson & J. Smith (1996),
		// Alias-free digital synthesis of classic analog waveforms)
		
		// reduce adjacent impulse interference by using small part of wide impulse
		var n_harm = 4096;
		var rolloff = Math.pow( treble, 1.0 / (n_harm * pt - n_harm * cutoff) );
		var rescale = 1.0 / Math.pow( rolloff, n_harm * cutoff );
		
		var pow_a_n = rescale * Math.pow( rolloff, n_harm );
		var pow_a_nc = rescale * Math.pow( rolloff, n_harm * cutoff );
		
		var total = 0.0;
		var to_angle = ( ( ( pi / 2 ) / n_harm ) / max_res );
		
		var buf = [];
		buf.length = Math.floor( max_res * (widest_impulse_ - 2) / 2 );
		var size = Math.floor( max_res * (this.width - 2) / 2 );
		for ( var i = size; i--; )
		{
			var angle = (i * 2 + 1) * to_angle;
			
			// equivalent
			//double y =     dsf( angle, n_harm * cutoff, 1.0 );
			//y -= rescale * dsf( angle, n_harm * cutoff, rolloff );
			//y += rescale * dsf( angle, n_harm,          rolloff );
			
			var cos_angle = Math.cos( angle );
			var cos_nc_angle = Math.cos( n_harm * cutoff * angle );
			var cos_nc1_angle = Math.cos( (n_harm * cutoff - 1.0) * angle );
			
			var b = 2.0 - 2.0 * cos_angle;
			var a = 1.0 - cos_angle - cos_nc_angle + cos_nc1_angle;
			
			var d = 1.0 + rolloff * (rolloff - 2.0 * cos_angle);
			var c = pow_a_n * rolloff * Math.cos( (n_harm - 1.0) * angle ) -
					pow_a_n * Math.cos( n_harm * angle ) -
					pow_a_nc * rolloff * cos_nc1_angle +
					pow_a_nc * cos_nc_angle;
			
			// optimization of a / b + c / d
			var y = (a * d + c * b) / (b * d);
			
			// fixed window which affects wider impulses more
			if ( this.width > 12 ) {
				var windowVar = Math.cos( n_harm / 1.25 / widest_impulse_ * angle );
				y *= windowVar * windowVar;
			}
			
			total += y;
			buf[i] = y;
		}
		
		// integrate runs of length 'max_res'
		var factor = impulse_amp * 0.5 / total; // 0.5 accounts for other mirrored half
		var impIndex = 0;
		var step = Math.floor( max_res / this.res );
		var offset = this.res > 1 ? max_res : Math.floor( max_res / 2 );
		for ( var n = Math.floor( this.res / 2 ) + 1; n--; offset -= step )
		{
			for ( var w = -Math.floor( this.width / 2 ); w < Math.floor( this.width / 2 ); w++ )
			{
				var sum = 0;
				for ( var k = max_res; k--; )
				{
					var index = w * max_res + offset + k;
					if ( index < 0 ) {
						index = -index - 1;
					}
					if ( index < size ) {
						sum += buf [index];
					}
				}
				this.impulse[ impIndex++ ] = Math.floor( sum * factor + (impulse_offset + 0.5) );
			}
		}
		
		// rescale
		var unit = this.volume_unit_;
		if ( unit >= 0 ) {
			this.volume_unit_ = -1;
			this.volume_unit( unit );
		}
	};
	
	
	Nes.Blip_Impulse_ = Blip_Impulse_;
	
}());


