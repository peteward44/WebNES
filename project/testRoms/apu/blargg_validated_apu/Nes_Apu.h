
// NES 2A03 APU sound chip emulator that only emulates things that affect CPU (no sound).
// Does not implement DMC at all.

// Copyright (C) 2005 Shay Green. MIT license.

#ifndef NES_APU_H
#define NES_APU_H

typedef long nes_time_t;     // CPU clock cycle count
typedef unsigned nes_addr_t; // 16-bit memory address

class Nes_Apu {
public:
	Nes_Apu();
	
	void reset();
	
	// Emulate write to address at given timestamp
	void write_register( nes_time_t, nes_addr_t, int data );
	
	// Emulate read from status registers ($4015) at given timestamp
	int read_status( nes_time_t );
	
	// Get time that next IRQ will occur as long as no more reads or writes occur
	// before then. Returns no_irq if no IRQ will occur. No_irq is a large positive
	// value that can usually be used without any special checking, since it
	// essentially specifies a value very far in the future.
	enum { no_irq = LONG_MAX / 2 + 1 };
	nes_time_t earliest_irq() const;
	
	// Run until timestamp
	void run_until( nes_time_t );
	
	// Run until timestamp and end time frame so that time 0 refers to what timestamp
	// referred to.
	void end_frame( nes_time_t );
	
	// End of public interface
	
	// The following is for compatibility with my full APU to allow easy swapping out
	enum { start_addr = 0x4000 };
	enum { end_addr   = 0x4017 };
	enum { status_addr = 0x4015 };
	void output( class Blip_Buffer* ) { }
	void dmc_reader( int (*)( void*, nes_addr_t ), void* = NULL ) { }
	void irq_notifier( void (*)( void* ), void* = NULL ) { }
	int count_dmc_reads( nes_time_t, nes_time_t* = NULL ) const { return 0; }
	enum { irq_waiting = 0 };
	
private:
	// Length counters
	enum { osc_count = 4 };
	struct osc_t {
		int length; // negative if channel is disabled
		bool halt;
	};
	osc_t oscs [osc_count];
	void clock_length();
	
	// Frame Counter
	int mode;
	int step;
	int jitter;
	nes_time_t next_step;
	void clock_mode0();
	void clock_mode1();
	
	// IRQ
	enum { frame_irq_mask = 0x40 };
	int frame_irq_flag;
	nes_time_t next_frame_irq; // time of next IRQ when frame flag is clear
	nes_time_t frame_irq_flag_time; // time of next IRQ when frame flag is set
	void set_frame_irq_flag();
	void irq_changed();
};

#endif

