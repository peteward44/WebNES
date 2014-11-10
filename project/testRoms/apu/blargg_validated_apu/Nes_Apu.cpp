
// http://www.slack.net/~ant/

#include "Nes_Apu.h"

/* Copyright (C) 2005 by Shay Green. Permission is hereby granted, free of
charge, to any person obtaining a copy of this software module and associated
documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the
following conditions: The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software. THE
SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

const int frame_irq_delay = 29832;

Nes_Apu::Nes_Apu()
{
	reset();
}

void Nes_Apu::reset()
{
	mode = 0;
	step = 0;
	jitter = 0;
	frame_irq_flag = false;
	next_frame_irq = no_irq;
	
	write_register( 0, 0x4017, 0x00 );
	write_register( 0, 0x4015, 0x00 );
	
	for ( nes_addr_t addr = start_addr; addr <= 0x4010; addr++ )
		write_register( 0, addr, (addr & 3) ? 0x00 : 0x10 );
	
	end_frame( 10 );
}

void Nes_Apu::clock_length()
{
	for ( int i = 0; i < osc_count; i++ )
	{
		osc_t& osc = oscs [i];
		if ( !osc.halt && osc.length > 0 )
			osc.length--;
	}
}

void Nes_Apu::irq_changed()
{
	// Notify CPU that IRQ time might have changed, in case it needs to stop early
	// ...
}

void Nes_Apu::set_frame_irq_flag()
{
	if ( !frame_irq_flag && !(mode & frame_irq_mask) )
	{
		frame_irq_flag = frame_irq_mask;
		frame_irq_flag_time = next_frame_irq;
		irq_changed();
	}
}

// linear clock isn't implemented since it can't affect CPU operation

void Nes_Apu::clock_mode0()
{
	switch ( step++ )
	{
		case 0:
			// linear clock only
			next_step += 7456;
			break;
		
		case 1:
			clock_length();
			next_step += 7458;
			break;
		
		case 2:
			// linear clock only
			next_step += 7457;
			break;
		
		case 3:
			set_frame_irq_flag();
			assert( next_frame_irq == next_step + 3 );
			next_frame_irq++;
			next_step++;
			break;
		
		case 4:
			clock_length();
			set_frame_irq_flag();
			assert( next_frame_irq == next_step + 3 );
			next_frame_irq++;
			next_step++;
			break;
		
		case 5:
			set_frame_irq_flag();
			assert( next_frame_irq == next_step + 3 );
			next_frame_irq = next_step + frame_irq_delay - 1;
			next_step += 7457;
			step = 0;
			break;
	}
}

void Nes_Apu::clock_mode1()
{
	switch ( step++ )
	{
		case 0:
			clock_length();
			next_step += 7458;
			break;
		
		case 1:
			// linear clock only
			next_step += 7456;
			break;
		
		case 2:
			clock_length();
			next_step += 7458;
			break;
		
		case 3:
			// linear clock only
			next_step += 7456;
			break;
		
		case 4:
			// no operation
			next_step += 7454;
			step = 0;
			break;
	}
}

void Nes_Apu::run_until( nes_time_t end_time )
{
	while ( next_step < end_time )
	{
		if ( mode & 0x80 )
			clock_mode1();
		else
			clock_mode0();
	}
}

void Nes_Apu::end_frame( nes_time_t end_time )
{
	run_until( end_time );
	
	jitter ^= end_time & 1;
	
	next_step -= end_time;
	assert( next_step >= 0 );
	
	frame_irq_flag_time -= end_time;
	if ( frame_irq_flag_time < 0 )
		frame_irq_flag_time = 0;
	
	if ( next_frame_irq != no_irq )
	{
		next_frame_irq -= end_time;
		assert( next_frame_irq >= 0 );
	}
}

static const unsigned char length_table [0x20] = {
	0x0A, 0xFE, 0x14, 0x02, 0x28, 0x04, 0x50, 0x06,
	0xA0, 0x08, 0x3C, 0x0A, 0x0E, 0x0C, 0x1A, 0x0E, 
	0x0C, 0x10, 0x18, 0x12, 0x30, 0x14, 0x60, 0x16,
	0xC0, 0x18, 0x48, 0x1A, 0x10, 0x1C, 0x20, 0x1E
};

void Nes_Apu::write_register( nes_time_t time, nes_addr_t addr, int data )
{
	require( (unsigned) data <= 0xff );
	
	// Ignore addresses outside range
	if ( addr < start_addr || end_addr < addr )
		return;
	
	run_until( time );
	
	if ( addr < 0x4010 )
	{
		// Squares, triangle, noise
		int index = (addr >> 2) & 3;
		osc_t& osc = oscs [index];
		int reg = addr & 3;
		if ( reg == 0 )
		{
			run_until( time + 1 ); // halt takes effect one clock later
			osc.halt = data & (addr != 0x4008 ? 0x20 : 0x80);
		}
		else if ( reg == 3 && osc.length >= 0 )
		{
			int prev = osc.length;
			run_until( time + 1 );
			if ( prev == osc.length ) // reload is ignored if length was just changed
				osc.length = length_table [(data >> 3) & 0x1f];
		}
		// to do: running past present is kind of hacky
	}
	else if ( addr < 0x4014 )
	{
		// DMC
		// ... (not implemented)
	}
	else if ( addr == 0x4015 )
	{
		// Enables
		for ( int i = 0; i < osc_count; i++ )
		{
			if ( !((data >> i) & 1) )
				oscs [i].length = -1;
			else if ( oscs [i].length < 0 )
				oscs [i].length = 0; // enable
		}
	}
	else if ( addr == 0x4017 )
	{
		// Mode
		//dprintf( "%d Wrote to $4017\n", time + absolute_time );
		mode = data;
		step = 0;
		
		// defaults for 5-step mode
		next_step = time + (jitter ^ (time & 1)) + 1;
		next_frame_irq = no_irq;
		
		if ( !(mode & 0x80) )
		{
			// 4-step mode
			next_frame_irq = next_step + frame_irq_delay;
			next_step += 7458;
		}
		
		if ( mode & frame_irq_mask )
			frame_irq_flag = false;
		
		irq_changed();
	}
}

int Nes_Apu::read_status( nes_time_t time )
{
	run_until( time );
	
	int result = 0;
	if ( frame_irq_flag )
	{
		result = frame_irq_mask;
		frame_irq_flag = false;
		irq_changed();
	}
	
	for ( int i = 0; i < osc_count; i++ )
	{
		if ( oscs [i].length > 0 )
			result |= 1 << i;
	}
	
	return result;
}

nes_time_t Nes_Apu::earliest_irq() const
{
	if ( mode & 0x40 )
		return no_irq;
	
	if ( frame_irq_flag )
		return frame_irq_flag_time;
	
	return next_frame_irq;
}

