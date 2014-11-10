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

"use strict";

var maximumTracesToStoreForLoopDetection = 32;

var cpu6502 = function( mainboard ) {
	var that = this;
	this.mainboard = mainboard;
	this.mainboard.connect( 'reset', function( cold ) { that.reset( cold ); } );
	this.executeCallback = null;
	this.cmosVersion = false;
	this.isRunning = true;
	this._traceEnabled = false;
	this._previousTraceProgramCounters = new Uint16Array( maximumTracesToStoreForLoopDetection ); // used to detect loops in cpu traces
	this._previousTraceProgramCountersIndex = 0;
	this._inTraceLoop = false;
	this._traceLoopCount = 0;
	
	//var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	
	this._useSwitchStatement = false;// isFirefox;
	this._instructionSet = Nes.cpuInstructions; // Default to 'fast' versions
	this._instructionSwitch = Nes.cpuInstructionsSwitch;
	this.resetVariables();
};


cpu6502.prototype.breakPoint = function( resume ) {

	this.isRunning = resume;
};


cpu6502.prototype.enableTrace = function( enabled ) {

	this._traceEnabled = enabled === undefined ? true : enabled;
	if ( this._traceEnabled ) {
		this._instructionSet = Nes.cpuInstructionsTrace; // use slow instructions
	} else {
		this._instructionSet = Nes.cpuInstructions; // use fast instructions
	}
};


cpu6502.prototype.resetVariables = function() {
	this.programCounter = 0;
	this.subcycle = 0;

	this.waitOneInstructionAfterCli = false;
	this.resetPending = false;
	this.nmiPending = false;
	this.irqLineLow = 0;
	this.triggerNmiAfterNextInstruction = false;

	this._flagCarry = false;
	this._flagZero = false;
	this._flagInterrupt = false;
	this._flagDecimal = false;
	this._flagBreak = true;
	this._flagUnused = true;
	this._flagOverflow = false;
	this._flagSign = false;
	
	this.regS = 0;
	this.regX = 0;
	this.regY = 0;
	this.regA = 0;
	this.SAYHighByte = 0;
};


cpu6502.prototype.incrementSubcycle = function() {
	this.subcycle++;
};


cpu6502.prototype.getPC = function() {
	return this.programCounter;
};

cpu6502.prototype.setPC = function( pc ) {
	this.programCounter = pc;
};


cpu6502.prototype.getZero = function() {
	return this._flagZero;
};

cpu6502.prototype.setZero = function( zero ) {
	this._flagZero = zero;
};

cpu6502.prototype.getOverflow = function() {
	return this._flagOverflow;
};

cpu6502.prototype.setOverflow = function( f ) {
	this._flagOverflow = f;
};

cpu6502.prototype.getInterrupt = function() {
	return this._flagInterrupt;
};

cpu6502.prototype.setInterrupt = function( f ) {
	this._flagInterrupt = f;
};

cpu6502.prototype.getBreak = function() {
	return this._flagBreak;
};

cpu6502.prototype.setBreak = function( f ) {
	this._flagBreak = f;
};

cpu6502.prototype.getDecimal = function() {
	return this._flagDecimal;
};

cpu6502.prototype.setDecimal = function( f ) {
	this._flagDecimal = f;
};

cpu6502.prototype.getUnused = function() {
	return this._flagUnused;
};

cpu6502.prototype.setUnused = function( f ) {
	this._flagUnused = f;
};

cpu6502.prototype.getCarry = function() {
	return this._flagCarry;
};

cpu6502.prototype.setCarry = function( f ) {
	this._flagCarry = f;
};


cpu6502.prototype.getSign = function() {
	return this._flagSign;
};

cpu6502.prototype.setSign = function( f ) {
	this._flagSign = f;
};


cpu6502.prototype.getRegA = function() {
	return this.regA;
};

cpu6502.prototype.setRegA = function( f ) {
	this.regA = f;
};


cpu6502.prototype.getRegX = function() {
	return this.regX;
};

cpu6502.prototype.setRegX = function( f ) {
	this.regX = f;
};


cpu6502.prototype.getRegY = function() {
	return this.regY;
};

cpu6502.prototype.setRegY = function( f ) {
	this.regY = f;
};


cpu6502.prototype.setExecuteCallback = function( cb ) {
	this.executeCallback = cb;
};


cpu6502.prototype.getSubCycle = function() {
	return this.subcycle;
};


cpu6502.prototype.handlePendingInterrupts = function() {

	// TODO: if an NMI interrupt is interrupted by a BRK, dont execute the BRK (6502 bug - fixed in the CMOS version)
	if ( this.resetPending )
	{
		for ( var i=0; i<3; ++i )
			this.incrementStackReg(); // increment stack pointer but dont write to memory

		this.setBreak( false );
		this.setInterrupt( true );

		if ( this.cmosVersion )
			this._flagDecimal = false;

		this.programCounter = this.mainboard.memory.read16NoZeroPageWrap( CPU_RESET_ADDRESS );
		//this.programCounter = 0xC000;
		this.resetPending = false;
		return 0;
	}

	if ( this.nmiPending )
	{
		if ( this.triggerNmiAfterNextInstruction )
		{
			this.triggerNmiAfterNextInstruction = false;
			return 0;
		}
		
		// NMI interrupt
		this.pushStack( ( this.programCounter >> 8 ) & 0xFF );
		this.incrementStackReg();
		this.pushStack( this.programCounter & 0xFF );
		this.incrementStackReg();

		this._flagBreak = false;

		this.pushStack( this.statusRegToByte() );
		this.incrementStackReg();

		this._flagInterrupt = true;
		if ( this.cmosVersion )
			this._flagDecimal = false;
		this.programCounter = this.mainboard.memory.read16NoZeroPageWrap( CPU_NMI_ADDRESS );
		this.nmiPending = false;
		return 7;
	}

	if ( this.irqLineLow > 0 && !this.waitOneInstructionAfterCli && !this._flagInterrupt )
	{
		// IRQ interrupt
		this.pushStack( ( this.programCounter >> 8 ) & 0xFF );
		this.incrementStackReg();
		this.pushStack( this.programCounter & 0xFF );
		this.incrementStackReg();
		
		this._flagBreak = false;

		this.pushStack( this.statusRegToByte() );
		this.incrementStackReg();

		this._flagInterrupt = true;
		if ( this.cmosVersion )
			this._flagDecimal = false;
		this.programCounter = this.mainboard.memory.read16NoZeroPageWrap( CPU_IRQ_ADDRESS );
		return 7;
	}
	return 0;
};


cpu6502.prototype.nonMaskableInterrupt = function( ppuMasterTickCount ) {
	Nes.Trace.writeLine( Nes.trace_cpu, 'NMI triggered' );
	this.nmiPending = true;
	if ( this.mainboard.synchroniser.isPpuTickOnLastCycleOfCpuInstruction( ppuMasterTickCount ) ) {
		// CPU is *always* either ahead or equal to the PPU master tick count.
		// Perform 1-instruction delay if NMI is triggered in the last cycle of an instruction
		this.triggerNmiAfterNextInstruction = true;
	}
};


cpu6502.prototype.reset = function() {
	this.resetVariables();
	this.resetPending = true;
};


cpu6502.prototype.holdIrqLineLow = function( low ) {
	if ( low ) {
		this.irqLineLow++;
	} else {
		if ( this.irqLineLow > 0 ) {
			this.irqLineLow--;
		}
	}
};


cpu6502.prototype.statusRegToByte = function() {
	var b = 0;
	b |= ( this._flagCarry ? 0x1 : 0 );
	b |= ( this._flagZero ? 0x2 : 0 );
	b |= ( this._flagInterrupt ? 0x4 : 0 );
	b |= ( this._flagDecimal ? 0x8 : 0 );
	b |= ( this._flagBreak ? 0x10 : 0 );
	b |= ( this._flagUnused ? 0x20 : 0 );
	b |= ( this._flagOverflow ? 0x40 : 0 );
	b |= ( this._flagSign ? 0x80 : 0 );
	return b;
};


cpu6502.prototype.statusRegFromByte = function( b ) {
	this._flagCarry = ( b & 0x1 ) > 0;
	this._flagZero = ( b & 0x2 ) > 0;
	this._flagInterrupt = ( b & 0x4 ) > 0;
	this._flagDecimal = ( b & 0x8 ) > 0;
	this._flagBreak = ( b & 0x10 ) > 0;
	this._flagUnused = ( b & 0x20 ) > 0;
	this._flagOverflow = ( b & 0x40 ) > 0;
	this._flagSign = ( b & 0x80 ) > 0;
};


cpu6502.prototype.incrementStackReg = function() {
	this.regS--;
	if ( this.regS < 0 )
		this.regS = 0xFF;
};


cpu6502.prototype.decrementStackReg = function() {
	this.regS++;
	if ( this.regS > 0xFF )
		this.regS = 0;
};


cpu6502.prototype.pushStack = function( value ) {
	this.mainboard.memory.write8( 0x100 + this.regS, value & 0xFF );
};


cpu6502.prototype.popStack = function( value ) {
	return this.mainboard.memory.read8( 0x100 + this.regS );
};


cpu6502.prototype.read16FromMemNoWrap = function( offsetAddress ) {

	this.incrementSubcycle();
	var ret = this.mainboard.memory.read8( offsetAddress ) & 0xFF;
	this.incrementSubcycle();
	var secondByte = this.mainboard.memory.read8( ( offsetAddress + 1 ) & 0xFFFF );
	ret |= ( ( secondByte & 0xFF ) << 8 );
	return ret & 0xFFFF;
};


cpu6502.prototype.read16FromMemWithWrap = function( offsetAddress ) {

	this.incrementSubcycle();
	var ret = this.mainboard.memory.read8( offsetAddress );
	var newoffset;
	if ( ( offsetAddress & 0xFF ) === 0xFF ) {
		newoffset = ( offsetAddress & 0xFF00 );
	} else {
		newoffset = offsetAddress + 1;
	}
	this.incrementSubcycle();
	var secondByte = this.mainboard.memory.read8( newoffset & 0xFFFF );
	ret |= ( ( secondByte & 0xFF ) << 8 );
	return ret & 0xFFFF;
};


cpu6502.prototype.calculateRelativeDifference = function( pc, b ) {
	var isSigned = (b & 0x80) > 0;
	if ( isSigned )
	{
		var inverse = ( ( b ^ 0xFF) + 1 ) & 0xFF;
		return pc - inverse;
	}
	else
		return pc + b;
};


cpu6502.prototype.execute = function() {
	this.subcycle = 0;
	if ( this.waitOneInstructionAfterCli )
		this.waitOneInstructionAfterCli = false;
	
	var opcode = this.mainboard.memory.read8( this.programCounter );
	var cyclesTaken = 0;
	if ( !this._useSwitchStatement ) {
		cyclesTaken = this._instructionSet[ opcode ]( this, this.mainboard.memory );
	} else {
		cyclesTaken = this._instructionSwitch( opcode, this, this.mainboard.memory );
	}
	if ( this._traceEnabled ) {
		this._doTrace();
	}
	this.subcycle = 0;
	return cyclesTaken;
};


cpu6502.prototype._hasProgramCounterBeenSeenBefore = function( pg ) {

	for ( var i=0; i<this._previousTraceProgramCounters.length; ++i ) {
		if ( this._previousTraceProgramCounters[ i ] === pg ) {
			return i;
		}
	}
	return -1;
};


cpu6502.prototype._doTrace = function() {
	
	var instructionData = Nes.cpuTrace;
	// check previous instructions for the same program counter
	var prevIndex = this._hasProgramCounterBeenSeenBefore( instructionData.programCounter );
	if ( prevIndex >= 0 ) {
		// if it's the same loop as the one that's already detected, don't report.
		if ( !this._inTraceLoop ) {
			this._inTraceLoop = true;
			this._traceLoopCount = 0;
		}
		this._traceLoopCount++;
	} else {
		if ( this._inTraceLoop ) {
			this._inTraceLoop = false;
			Nes.Trace.writeLine( Nes.trace_cpuInstructions, "LOOP " + this._traceLoopCount + " TIMES" );
			this._traceLoopCount = 0;
		}
	}
	
	if ( !this._inTraceLoop ) {
		this._previousTraceProgramCounters[ this._previousTraceProgramCountersIndex ] = instructionData.programCounter;
		this._previousTraceProgramCountersIndex = ( this._previousTraceProgramCountersIndex + 1 ) & 0x1F;
		Nes.Trace.writeLine( Nes.trace_cpuInstructions, Nes.formatCpuTraceString[ instructionData.opcode ]( instructionData ) );
		//$.extend( true, {}, instructionData );
	}
};


cpu6502.prototype.saveState = function() {

	var data = {};
	data.programCounter = this.programCounter;
	data.subcycle = this.subcycle;
	data.waitOneInstructionAfterCli = this.waitOneInstructionAfterCli;
	data.resetPending = this.resetPending;
	data.nmiPending = this.nmiPending;
	data.irqLineLow = this.irqLineLow;
	data.triggerNmiAfterNextInstruction = this.triggerNmiAfterNextInstruction;
	
	data._flagCarry = this._flagCarry;
	data._flagZero = this._flagZero;
	data._flagInterrupt = this._flagInterrupt;
	data._flagDecimal = this._flagDecimal;
	data._flagBreak = this._flagBreak;
	data._flagUnused = this._flagUnused;
	data._flagOverflow = this._flagOverflow;
	data._flagSign = this._flagSign;
	
	data.regS = this.regS;
	data.regX = this.regX;
	data.regY = this.regY;
	data.regA = this.regA;
	data.SAYHighByte = this.SAYHighByte;
	return data;
};


cpu6502.prototype.loadState = function( state ) {

	this.programCounter = state.programCounter;
	this.subcycle = state.subcycle;
	this.waitOneInstructionAfterCli = state.waitOneInstructionAfterCli;
	this.resetPending = state.resetPending;
	this.nmiPending = state.nmiPending;
	this.irqLineLow = state.irqLineLow;
	this.triggerNmiAfterNextInstruction = state.triggerNmiAfterNextInstruction;
	
	this._flagCarry = state._flagCarry;
	this._flagZero = state._flagZero;
	this._flagInterrupt = state._flagInterrupt;
	this._flagDecimal = state._flagDecimal;
	this._flagBreak = state._flagBreak;
	this._flagUnused = state._flagUnused;
	this._flagOverflow = state._flagOverflow;
	this._flagSign = state._flagSign;
	
	this.regS = state.regS;
	this.regX = state.regX;
	this.regY = state.regY;
	this.regA = state.regA;
	this.SAYHighByte = state.SAYHighByte;
};



Nes.cpu6502 = cpu6502;
