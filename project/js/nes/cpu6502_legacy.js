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

(function(){
	"use strict";
	
	var cpu6502 = function( mainboard ) {
		var that = this;
		this.mainboard = mainboard;
		this.mainboard.connect( 'reset', function( cold ) { that.reset( cold ); } );
		this.executeCallback = null;
		this.cmosVersion = false;
		this.isRunning = true;
		this.resetVariables();
	};
	
	
	cpu6502.prototype.breakPoint = function( resume ) {
	
		this.isRunning = resume;
	};

	
	cpu6502.prototype.resetVariables = function() {
		this.programCounter = 0;
		this.subcycle = 0;
		this.isLastSubCycle = false;

		this.pageBoundaryCrossed = false;
		this.branchTaken = false;
		
		this.waitOneInstructionAfterCli = false;
		this.resetPending = false;
		this.nmiPending = false;
		this.irqLineLow = false;
		this.triggerNmiAfterNextInstruction = false;
		
		this.regStatus = {
			Carry : false,
			Zero : false,
			Interrupt : false,
			Decimal : false,
			Break : true,
			Unused : true,
			Overflow : false,
			Sign : false
		};
		
		this.regS = 0;
		this.regX = this.regY = this.regA = 0;
		this.SAYHighByte = 0;
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

			this.regStatus.Break = false;
			this.regStatus.Interrupt = true;

			if ( this.cmosVersion )
				this.regStatus.Decimal = false;

			this.programCounter = this.mainboard.memory.read16( Nes.consts.RESET_ADDRESS, false );
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

			this.regStatus.Break = false;

			this.pushStack( this.statusRegToByte() );
			this.incrementStackReg();

			this.regStatus.Interrupt = true;
			if ( this.cmosVersion )
				this.regStatus.Decimal = false;
			this.programCounter = this.mainboard.memory.read16( Nes.consts.NMI_ADDRESS, false );
			this.nmiPending = false;
			return 7;
		}

		if ( this.irqLineLow && !this.waitOneInstructionAfterCli && !this.regStatus.Interrupt )
		{
			// IRQ interrupt
			this.pushStack( ( this.programCounter >> 8 ) & 0xFF );
			this.incrementStackReg();
			this.pushStack( this.programCounter & 0xFF );
			this.incrementStackReg();
			
			this.irqLineLow = false; // TODO: might be incorrect

			this.regStatus.Break = false;

			this.pushStack( this.statusRegToByte() );
			this.incrementStackReg();

			this.regStatus.Interrupt = true;
			if ( this.cmosVersion )
				this.regStatus.Decimal = false;
			this.programCounter = this.mainboard.memory.read16( Nes.consts.IRQ_ADDRESS, false );
			return 7;
		}
		return 0;
	};
	
	
	cpu6502.prototype.nonMaskableInterrupt = function( ppuMasterTickCount ) {
		this.nmiPending = true;
		var hasCpuCaughtUp = ( this.mainboard.synchroniser.getCpuMTC() - COLOUR_ENCODING_MTC_PER_CPU ) <= ppuMasterTickCount;// g_nesMainboard->GetSynchroniser()->GetCpuMTC() - g_nesMainboard->GetModeConstants()->MasterCyclesPerCPU() <= ;
		if ( /*this.isLastSubCycle ||*/ hasCpuCaughtUp ) {
			// isLastSubCycle needs some work. Instead of just checking the flag, we need a recent history of previous 'last cycle' MTCs which can
			// be compared against the ppuMasterTickCount
			this.triggerNmiAfterNextInstruction = true;
		}
		//console.log( 'NMI triggered at PPU clocks ' + ppuMasterTickCount + ' CPU ticks ' + this.mainboard.synchroniser.getCpuMTC() + ' last cycle=' + this.isLastSubCycle
		//	+ ' hasCpuCaughtUp=' + hasCpuCaughtUp );
	};


	cpu6502.prototype.reset = function() {
		this.resetVariables();
		this.resetPending = true;
	};
	
	
	cpu6502.prototype.holdIrqLineLow = function( low ) {
		this.irqLineLow = low === undefined ? true : low;
	};


	cpu6502.prototype.statusRegToByte = function() {
		var b = 0;
		b |= ( this.regStatus.Carry ? 0x1 : 0 );
		b |= ( this.regStatus.Zero ? 0x2 : 0 );
		b |= ( this.regStatus.Interrupt ? 0x4 : 0 );
		b |= ( this.regStatus.Decimal ? 0x8 : 0 );
		b |= ( this.regStatus.Break ? 0x10 : 0 );
		b |= ( this.regStatus.Unused ? 0x20 : 0 );
		b |= ( this.regStatus.Overflow ? 0x40 : 0 );
		b |= ( this.regStatus.Sign ? 0x80 : 0 );
		return b;
	};
	
	
	cpu6502.prototype.statusRegFromByte = function( b ) {
		this.regStatus.Carry = ( b & 0x1 ) > 0;
		this.regStatus.Zero = ( b & 0x2 ) > 0;
		this.regStatus.Interrupt = ( b & 0x4 ) > 0;
		this.regStatus.Decimal = ( b & 0x8 ) > 0;
		this.regStatus.Break = ( b & 0x10 ) > 0;
		this.regStatus.Unused = ( b & 0x20 ) > 0;
		this.regStatus.Overflow = ( b & 0x40 ) > 0;
		this.regStatus.Sign = ( b & 0x80 ) > 0;
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
		this.mainboard.memory.write8( Nes.wrap16( 0x100 + this.regS ), value & 0xFF );
	};
	
	
	cpu6502.prototype.popStack = function( value ) {
		return this.mainboard.memory.read8( Nes.wrap16( 0x100 + this.regS ) );
	};
	
	
	cpu6502.prototype.setCarry = function( value ) {
		this.regStatus.Carry = value > 0xff;
	};


	cpu6502.prototype.setCarrySubstract = function( value ) {
		this.regStatus.Carry = value >= 0 && value < 0x100;
	};

	
	cpu6502.prototype.setSign = function( value ) {
		this.regStatus.Sign = (value & 0x80) > 0;
	};


	cpu6502.prototype.setZero = function( value ) {
		this.regStatus.Zero = value === 0;
	};


	cpu6502.prototype.setSignAndZero = function( value ) {
		this.setSign( value );
		this.setZero( value );
	};
	
	
	cpu6502.prototype.setOverflow = function( regA, temp, value ) {
		this.regStatus.Overflow = ( (( regA ^ value ) & 0x80) && ((regA ^ temp ) & 0x80) );
	};

	
	cpu6502.prototype.incrementSubCycle = function( isLastCycle ) {
		// if ( this.isLastSubCycle && isLastCycle ) {
			// throw( 'invalid isLastSubCycle' );
		// }
		this.subcycle++;
		this.isLastSubCycle = isLastCycle;
	};
	
	
	cpu6502.prototype.read16FromMem = function( offsetAddress, lastCycle, iszeropage ) {

		iszeropage = iszeropage || false;
	
		this.incrementSubCycle( false );
		var ret = this.mainboard.memory.read8( offsetAddress );
		this.incrementSubCycle();
		var newoffset;
		if ( iszeropage && (offsetAddress % 0x100) === 0xff)
			newoffset = offsetAddress - ( offsetAddress % 0x100 );
		else
			newoffset = offsetAddress + 1;
		var secondByte = this.mainboard.memory.read8( Nes.wrap16( newoffset ) );
		ret |= ( secondByte << 8 );
		return ret;
	};
	
	
	cpu6502.prototype.calculateDummyReadAddress = function( address, index ) {
		return (address & 0xFF00) | ((address + index) & 0xFF);
	};

	
	cpu6502.prototype.performDummyRead = function( instruction, baseAddress, addition ) {
		this.pageBoundaryCrossed = false;

		var doDummyRead = true;
		if ( instruction.opmode === Nes.OPERATION_MODE.READ )
		{ // dummy read is automatic for write and read/modify/write instructions, only read ops need to test cross boundary
			this.pageBoundaryCrossed = ( ( baseAddress + addition ) & 0xff00 ) != ( baseAddress & 0xff00 );
			doDummyRead = this.pageBoundaryCrossed && instruction.pagecycles > 0;
		}

		if ( doDummyRead )
		{ // dummy read for read operation instructions
			this.incrementSubCycle( false );
			this.mainboard.memory.read8( this.calculateDummyReadAddress( baseAddress, addition ) );
		}
	};
	
	
	cpu6502.prototype.readInArgViaAddressingMode_DEBUG = function( instruction, instructionBytes, addressingModeArgs ) {
		var readInValue = 0;
		var arg, offset, address;
		
		switch ( instruction.addressingmode )
		{
		case Nes.ADDRESSING_MODE.RELATIVE:
			offset = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			readInValue = this.calculateRelativeDifference( offset );
			addressingModeArgs.push( ( this.programCounter + instruction.size + readInValue ) );
		break;
		case Nes.ADDRESSING_MODE.ACCUMULATOR:
			readInValue = this.regA;
		break;
		case Nes.ADDRESSING_MODE.IMMEDIATE:
			this.incrementSubCycle( instruction.basecycles === 2 );
			readInValue = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( readInValue );
			addressingModeArgs.push( readInValue );
		break;
		case Nes.ADDRESSING_MODE.IMMEDIATE16: // Used only by JSR and JMP
			readInValue = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ), instruction.functiontype === Nes.FUNCTION_TYPES.JMP, false );
			instructionBytes.push( readInValue & 0xFF );
			instructionBytes.push( ( readInValue >> 8 ) & 0xFF );
			addressingModeArgs.push( readInValue );
		break;
		case Nes.ADDRESSING_MODE.ZEROPAGE:
			this.incrementSubCycle( false );
			readInValue = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( readInValue );
			addressingModeArgs.push( readInValue );
		break;
		case Nes.ADDRESSING_MODE.ZEROPAGEX:
			this.incrementSubCycle( false );
			arg = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( arg );
			readInValue = Nes.wrap8( arg + this.regX );
			addressingModeArgs.push( readInValue );
			this.incrementSubCycle( false );
			this.mainboard.memory.read8( this.calculateDummyReadAddress( arg, this.regX ) );
		break;
		case Nes.ADDRESSING_MODE.ZEROPAGEY:
			this.incrementSubCycle( false );
			arg = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( arg );
			readInValue = Nes.wrap8( arg + this.regY );
			addressingModeArgs.push( readInValue );
			this.incrementSubCycle( false );
			this.mainboard.memory.read8( this.calculateDummyReadAddress( arg, this.regY ) );
		break;
		case Nes.ADDRESSING_MODE.ABSOLUTE:
			readInValue = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( readInValue & 0xFF );
			instructionBytes.push( ( readInValue >> 8 ) & 0xFF );
			addressingModeArgs.push( readInValue );
		break;
		case Nes.ADDRESSING_MODE.ABSOLUTEX:
			address = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( address & 0xFF );
			instructionBytes.push( ( address >> 8 ) & 0xFF );
			readInValue = Nes.wrap16( address + this.regX );
			this.performDummyRead( instruction, address, this.regX );
			addressingModeArgs.push( readInValue );
		break;
		case Nes.ADDRESSING_MODE.ABSOLUTEY:
			address = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( address & 0xFF );
			instructionBytes.push( ( address >> 8 ) & 0xFF );
			readInValue = Nes.wrap16( address + this.regY );
			this.performDummyRead( instruction, address, this.regY );
			addressingModeArgs.push( readInValue );
		break;
		case Nes.ADDRESSING_MODE.INDIRECT: // only used by indirect JMP
			address = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( address & 0xFF );
			instructionBytes.push( ( address >> 8 ) & 0xFF );
			addressingModeArgs.push( address );
			readInValue = this.read16FromMem( address, true, this.cmosVersion ? false : true ); // CMOS version doesn't wrap on zero page
			addressingModeArgs.push( readInValue );
		break;
		case Nes.ADDRESSING_MODE.INDIRECTX:
			this.incrementSubCycle( false );
			arg = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( arg );
			addressingModeArgs.push( arg );
			this.incrementSubCycle( false );
			address = Nes.wrap8( arg + this.regX );
			readInValue = this.read16FromMem( address, false, true );
			addressingModeArgs.push( readInValue );
		break;
		case Nes.ADDRESSING_MODE.INDIRECTY:
			this.incrementSubCycle( false );
			arg = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( arg );
			addressingModeArgs.push( arg );
			address = this.read16FromMem( arg, false, true );
			readInValue = Nes.wrap16( address + this.regY );
			addressingModeArgs.push( readInValue );
			this.performDummyRead( instruction, address, this.regY );
		break;
		case Nes.ADDRESSING_MODE.SAY:
			this.incrementSubCycle( false );
			address = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			instructionBytes.push( address );
			var byte2 = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 2 ) );
			instructionBytes.push( byte2 );
			address |= ( byte2 ) << 8;
			addressingModeArgs.push( address );
			readInValue = Nes.wrap16( address + this.regX ); // SAY writes to absolute X but needs the high byte of the address to operate on
			addressingModeArgs.push( readInValue );
		break;
		}
		
		return readInValue;
	};
	
	
	cpu6502.prototype.readInArgViaAddressingMode = function( instruction ) {
		var readInValue = 0;
		var arg, offset, address;
		
		switch ( instruction.addressingmode )
		{
		case Nes.ADDRESSING_MODE.RELATIVE:
			offset = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			readInValue = this.calculateRelativeDifference( offset );
		break;
		case Nes.ADDRESSING_MODE.ACCUMULATOR:
			readInValue = this.regA;
		break;
		case Nes.ADDRESSING_MODE.IMMEDIATE:
			this.incrementSubCycle( instruction.basecycles === 2 );
			readInValue = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
		break;
		case Nes.ADDRESSING_MODE.IMMEDIATE16: // Used only by JSR and JMP
			readInValue = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ), instruction.functiontype === Nes.FUNCTION_TYPES.JMP, false );
		break;
		case Nes.ADDRESSING_MODE.ZEROPAGE:
			this.incrementSubCycle( false );
			readInValue = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
		break;
		case Nes.ADDRESSING_MODE.ZEROPAGEX:
			this.incrementSubCycle( false );
			arg = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			readInValue = Nes.wrap8( arg + this.regX );
			this.incrementSubCycle( false );
			this.mainboard.memory.read8( this.calculateDummyReadAddress( arg, this.regX ) );
		break;
		case Nes.ADDRESSING_MODE.ZEROPAGEY:
			this.incrementSubCycle( false );
			arg = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			readInValue = Nes.wrap8( arg + this.regY );
			this.incrementSubCycle( false );
			this.mainboard.memory.read8( this.calculateDummyReadAddress( arg, this.regY ) );
		break;
		case Nes.ADDRESSING_MODE.ABSOLUTE:
			readInValue = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ) );
		break;
		case Nes.ADDRESSING_MODE.ABSOLUTEX:
			address = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ) );
			readInValue = Nes.wrap16( address + this.regX );
			this.performDummyRead( instruction, address, this.regX );
		break;
		case Nes.ADDRESSING_MODE.ABSOLUTEY:
			address = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ) );
			readInValue = Nes.wrap16( address + this.regY );
			this.performDummyRead( instruction, address, this.regY );
		break;
		case Nes.ADDRESSING_MODE.INDIRECT: // only used by indirect JMP
			address = this.read16FromMem( Nes.wrap16( this.programCounter + 1 ) );
			readInValue = this.read16FromMem( address, true, this.cmosVersion ? false : true ); // CMOS version doesn't wrap on zero page
		break;
		case Nes.ADDRESSING_MODE.INDIRECTX:
			this.incrementSubCycle( false );
			arg = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			this.incrementSubCycle( false );
			address = Nes.wrap8( arg + this.regX );
			readInValue = this.read16FromMem( address, false, true );
		break;
		case Nes.ADDRESSING_MODE.INDIRECTY:
			this.incrementSubCycle( false );
			arg = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			address = this.read16FromMem( arg, false, true );
			readInValue = Nes.wrap16( address + this.regY );
			this.performDummyRead( instruction, address, this.regY );
		break;
		case Nes.ADDRESSING_MODE.SAY:
			this.incrementSubCycle( false );
			address = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			this.SAYHighByte = this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 2 ) );
			address |= ( this.SAYHighByte ) << 8;
			readInValue = Nes.wrap16( address + this.regX ); // SAY writes to absolute X but needs the high byte of the address to operate on
		break;
		}
		
		return readInValue;
	};
	
	
	cpu6502.prototype.noneOperation = function( value, instruction ) {
		this.executeAction( value, instruction );
	};
	
	
	cpu6502.prototype.immediateOperation = function( value, instruction ) {
		this.executeAction( value, instruction );
	};
	
	
	cpu6502.prototype.accumulatorOperation = function( value, instruction ) {
		this.incrementSubCycle( true );
		this.regA = this.executeAction( value, instruction ) & 0xFF;
	};
	
	
	cpu6502.prototype.readOperation = function( value, instruction ) {
		this.incrementSubCycle( true );
		var b = this.mainboard.memory.read8( value );
		this.executeAction( b, instruction );
	};

	
	cpu6502.prototype.rmwOperation = function( value, instruction ) {
		this.incrementSubCycle( false );
		var data = this.mainboard.memory.read8( value );
		this.incrementSubCycle( false );
		this.mainboard.memory.write8( value, data );
		
		this.incrementSubCycle( true );
		var ret = this.executeAction( data, instruction );
		this.mainboard.memory.write8( value, ret & 0xFF );
	};


	cpu6502.prototype.writeOperation = function( value, instruction ) {
		this.incrementSubCycle( true );
		var b = this.executeAction( value, instruction );
		this.mainboard.memory.write8( value, b );
	};
	
	
	cpu6502.prototype.calculateRelativeDifference = function( b ) {
		var isSigned = (b & 0x80) > 0;
		if ( isSigned )
		{
			var inverse = Nes.wrap8( ( (~b) & 0xFF) + 1 );
			return -inverse;
		}
		else
			return b;
	};

	
	cpu6502.prototype.branchOperation = function( value, instruction ) {
	
		this.branchTaken = this.executeAction( null, instruction );
		if ( this.branchTaken ) {
			this.incrementSubCycle( false );
			if ( value !== 0 )
			{
				this.pageBoundaryCrossed = ( ((this.programCounter + 2) & 0xff00 ) !== ( ((value + this.programCounter + 2) ) & 0xff00 ) );
			}
			if ( this.pageBoundaryCrossed )
				this.incrementSubCycle( false );
			this.incrementSubCycle( true );
			this.programCounter = Nes.wrap16( this.programCounter + value + instruction.size );
		} else {
			this.incrementSubCycle( true );
			this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );
			this.programCounter = Nes.wrap16( this.programCounter + instruction.size );
		}
	};
	
	
	cpu6502.prototype.executeOperation = function( value, instruction ) {
		var that = this;
		switch ( instruction.opmode ) {
			case Nes.OPERATION_MODE.NONE:				return this.noneOperation( value, instruction );
			case Nes.OPERATION_MODE.ACCUMULATOR:		return this.accumulatorOperation( value, instruction );
			case Nes.OPERATION_MODE.READ:				return this.readOperation( value, instruction );
			case Nes.OPERATION_MODE.READ_MODIFY_WRITE:	return this.rmwOperation( value, instruction );
			case Nes.OPERATION_MODE.WRITE:				return this.writeOperation( value, instruction );
			case Nes.OPERATION_MODE.BRANCH:				return this.branchOperation( value, instruction );
			case Nes.OPERATION_MODE.IMMEDIATE:			return this.immediateOperation( value, instruction );
		}
		return null;
	};
	

	cpu6502.prototype.executeAction = function( value, instruction ) {
	
		switch ( instruction.functiontype ) {
			case Nes.FUNCTION_TYPES.ADC:			return this.actionADC( value, instruction );
			case Nes.FUNCTION_TYPES.AND:			return this.actionAND( value, instruction );
			case Nes.FUNCTION_TYPES.ASL:			return this.actionASL( value, instruction );
			case Nes.FUNCTION_TYPES.BCC:			return this.actionBCC( value, instruction );
			case Nes.FUNCTION_TYPES.BCS:			return this.actionBCS( value, instruction );
			case Nes.FUNCTION_TYPES.BEQ:			return this.actionBEQ( value, instruction );
			case Nes.FUNCTION_TYPES.BIT:			return this.actionBIT( value, instruction );
			case Nes.FUNCTION_TYPES.BMI:			return this.actionBMI( value, instruction );
			case Nes.FUNCTION_TYPES.BNE:			return this.actionBNE( value, instruction );
			case Nes.FUNCTION_TYPES.BPL:			return this.actionBPL( value, instruction );
			case Nes.FUNCTION_TYPES.BRK:			return this.actionBRK( value, instruction );
			case Nes.FUNCTION_TYPES.BVC:			return this.actionBVC( value, instruction );
			case Nes.FUNCTION_TYPES.BVS:			return this.actionBVS( value, instruction );
			case Nes.FUNCTION_TYPES.CLC:			return this.actionCLC( value, instruction );
			case Nes.FUNCTION_TYPES.CLD:			return this.actionCLD( value, instruction );
			case Nes.FUNCTION_TYPES.CLI:			return this.actionCLI( value, instruction );
			case Nes.FUNCTION_TYPES.CLV:			return this.actionCLV( value, instruction );
			case Nes.FUNCTION_TYPES.CMP:			return this.actionCMP( value, instruction );
			case Nes.FUNCTION_TYPES.CPX:			return this.actionCPX( value, instruction );
			case Nes.FUNCTION_TYPES.CPY:			return this.actionCPY( value, instruction );
			case Nes.FUNCTION_TYPES.DEC:			return this.actionDEC( value, instruction );
			case Nes.FUNCTION_TYPES.DEX:			return this.actionDEX( value, instruction );
			case Nes.FUNCTION_TYPES.DEY:			return this.actionDEY( value, instruction );
			case Nes.FUNCTION_TYPES.EOR:			return this.actionEOR( value, instruction );
			case Nes.FUNCTION_TYPES.INC:			return this.actionINC( value, instruction );
			case Nes.FUNCTION_TYPES.INX:			return this.actionINX( value, instruction );
			case Nes.FUNCTION_TYPES.INY:			return this.actionINY( value, instruction );
			case Nes.FUNCTION_TYPES.JMP:			return this.actionJMP( value, instruction );
			case Nes.FUNCTION_TYPES.JSR:			return this.actionJSR( value, instruction );
			case Nes.FUNCTION_TYPES.LDA:			return this.actionLDA( value, instruction );
			case Nes.FUNCTION_TYPES.LDX:			return this.actionLDX( value, instruction );
			case Nes.FUNCTION_TYPES.LDY:			return this.actionLDY( value, instruction );
			case Nes.FUNCTION_TYPES.LSR:			return this.actionLSR( value, instruction );
			case Nes.FUNCTION_TYPES.ORA:			return this.actionORA( value, instruction );
			case Nes.FUNCTION_TYPES.PHA:			return this.actionPHA( value, instruction );
			case Nes.FUNCTION_TYPES.PHP:			return this.actionPHP( value, instruction );
			case Nes.FUNCTION_TYPES.PLA:			return this.actionPLA( value, instruction );
			case Nes.FUNCTION_TYPES.PLP:			return this.actionPLP( value, instruction );
			case Nes.FUNCTION_TYPES.ROL:			return this.actionROL( value, instruction );
			case Nes.FUNCTION_TYPES.ROR:			return this.actionROR( value, instruction );
			case Nes.FUNCTION_TYPES.RTI:			return this.actionRTI( value, instruction );
			case Nes.FUNCTION_TYPES.RTS:			return this.actionRTS( value, instruction );
			case Nes.FUNCTION_TYPES.SBC:			return this.actionSBC( value, instruction );
			case Nes.FUNCTION_TYPES.SEC:			return this.actionSEC( value, instruction );
			case Nes.FUNCTION_TYPES.SED:			return this.actionSED( value, instruction );
			case Nes.FUNCTION_TYPES.SEI:			return this.actionSEI( value, instruction );
			case Nes.FUNCTION_TYPES.STA:			return this.actionSTA( value, instruction );
			case Nes.FUNCTION_TYPES.STX:			return this.actionSTX( value, instruction );
			case Nes.FUNCTION_TYPES.STY:			return this.actionSTY( value, instruction );
			case Nes.FUNCTION_TYPES.TAX:			return this.actionTAX( value, instruction );
			case Nes.FUNCTION_TYPES.TAY:			return this.actionTAY( value, instruction );
			case Nes.FUNCTION_TYPES.TSX:			return this.actionTSX( value, instruction );
			case Nes.FUNCTION_TYPES.TXA:			return this.actionTXA( value, instruction );
			case Nes.FUNCTION_TYPES.TXS:			return this.actionTXS( value, instruction );
			case Nes.FUNCTION_TYPES.TYA:			return this.actionTYA( value, instruction );

			// not legal
			case Nes.FUNCTION_TYPES.ASO:			return this.actionASO( value, instruction );
			case Nes.FUNCTION_TYPES.RLA:			return this.actionRLA( value, instruction );
			case Nes.FUNCTION_TYPES.LSE:			return this.actionLSE( value, instruction );
			case Nes.FUNCTION_TYPES.RRA:			return this.actionRRA( value, instruction );
			case Nes.FUNCTION_TYPES.AXS:			return this.actionAXS( value, instruction );
			case Nes.FUNCTION_TYPES.LAX:			return this.actionLAX( value, instruction );
			case Nes.FUNCTION_TYPES.DCM:			return this.actionDCM( value, instruction );
			case Nes.FUNCTION_TYPES.INS:			return this.actionINS( value, instruction );
			case Nes.FUNCTION_TYPES.ALR:			return this.actionALR( value, instruction );
			case Nes.FUNCTION_TYPES.ARR:			return this.actionARR( value, instruction );
			case Nes.FUNCTION_TYPES.XAA:			return this.actionXAA( value, instruction );
			case Nes.FUNCTION_TYPES.OAL:			return this.actionOAL( value, instruction );
			case Nes.FUNCTION_TYPES.SAX:			return this.actionSAX( value, instruction );
			case Nes.FUNCTION_TYPES.NOP:			return this.actionNOP( value, instruction );
			case Nes.FUNCTION_TYPES.SKB:			return this.actionSKB( value, instruction );
			case Nes.FUNCTION_TYPES.SKW:			return this.actionSKW( value, instruction );
			case Nes.FUNCTION_TYPES.HLT:			return this.actionHLT( value, instruction );
			case Nes.FUNCTION_TYPES.TAS:			return this.actionTAS( value, instruction );
			case Nes.FUNCTION_TYPES.SAY:			return this.actionSAY( value, instruction );
			case Nes.FUNCTION_TYPES.XAS:			return this.actionXAS( value, instruction );
			case Nes.FUNCTION_TYPES.AXA:			return this.actionAXA( value, instruction );
			case Nes.FUNCTION_TYPES.ANC:			return this.actionANC( value, instruction );
			case Nes.FUNCTION_TYPES.LAS:			return this.actionLAS( value, instruction );
		}
		
		return null;
	};
	
	
	cpu6502.prototype.execute = function() {
		this.subcycle = 0;
	//	this.isLastSubCycle = false;
		this.branchTaken = false;
		this.pageBoundaryCrossed = false;
		if ( this.waitOneInstructionAfterCli )
			this.waitOneInstructionAfterCli = false;
			
		var opcode = this.mainboard.memory.read8( this.programCounter );
		var instruction = Nes.getInstructionByOpcode( opcode );
		// if ( instruction === undefined ) {
			// debugger;
		// }
		var instructionBytes = [ opcode ];
		var addressingModeArgs = [];
		//var readInValue = this.readInArgViaAddressingMode_DEBUG( instruction, instructionBytes, addressingModeArgs );
		var readInValue = this.readInArgViaAddressingMode( instruction );

		//if ( this.executeCallback )
		//	this.executeCallback( this.programCounter, instruction, instructionBytes, addressingModeArgs );
	
		//Nes.log( 'cpu', this.formatInstructionStatusString( this.programCounter, instruction, instructionBytes, addressingModeArgs ) );
	//	console.log(
	//		this.formatInstructionStatusString( this.programCounter, instruction, instructionBytes, addressingModeArgs )
	//		+ " " + this.mainboard.ppu.formatStatusString()
	//	);
			
		if ( instruction.addressingmode !== Nes.ADDRESSING_MODE.RELATIVE )
			this.programCounter = Nes.wrap16( this.programCounter + instruction.size );
		
		this.executeOperation( readInValue, instruction );

		// var verifyTicks = instruction.basecycles;
		// if ( this.pageBoundaryCrossed )
			// verifyTicks += instruction.pagecycles;
		// if ( this.branchTaken )
			// verifyTicks++;
		
		// if ( subCyclesTaken !== verifyTicks ) {
			// throw( 'instruction ' + instruction.name + ' does not match subcycles' );
		// }
		// if ( !this.isLastSubCycle ) {
			// throw( 'instruction ' + instruction.name + ' does not correctly set isLastSubCycle' );
		// }
		//return verifyTicks;
		return this.subcycle + 1;
	};
	
	
	cpu6502.prototype.actionADC = function( value ) {
		var temp = ( value & 0xFF ) + this.regA + (this.regStatus.Carry ? 1 : 0);
		this.setCarry( temp );
		if ( this.cmosVersion || ( this.status & 0x8 ) === 0 /*!DecimalFlagEnabled()*/ )
		{ // Bug in non-cmos version: These flags aren't set if decimal mode is on
			this.setSignAndZero( temp & 0xFF );
			this.setOverflow( this.regA, temp, ( value ^ 0xFF ) );
		}
		this.regA = temp & 0xFF;
	};
	cpu6502.prototype.actionAND = function( value ) {
		this.regA &= ( value & 0xFF );
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionASL = function( value ) {
		this.regStatus.Carry = ( ( value & 0x80 ) > 0 );
		var ret = ( ( value & 0xFF ) << 1 ) & 0xFF;
		this.setSignAndZero( ret );
		return ret;
	};
	cpu6502.prototype.actionBCC = function( value ) {
		return !this.regStatus.Carry;
	};
	cpu6502.prototype.actionBCS = function( value ) {
		return this.regStatus.Carry;
	};
	cpu6502.prototype.actionBEQ = function( value ) {
		return this.regStatus.Zero;
	};
	cpu6502.prototype.actionBIT = function( value ) {
		this.setSign( value & 0xFF );
		this.setZero( this.regA & ( value & 0xFF ) );
		this.regStatus.Overflow = ( ( value & 0x40) > 0 );	// Copy bit 6 to OVERFLOW flag.
	};
	cpu6502.prototype.actionBMI = function( value ) {
		return this.regStatus.Sign;
	};
	cpu6502.prototype.actionBNE = function( value ) {
		return !this.regStatus.Zero;
	};
	cpu6502.prototype.actionBPL = function( value ) {
		return !this.regStatus.Sign;
	};
	cpu6502.prototype.actionBRK = function( value ) {
		// dummy read of opcode after brk
		this.incrementSubCycle( false );
		this.mainboard.memory.read8( this.programCounter );
		this.programCounter = Nes.wrap16( this.programCounter + 1 );

		this.incrementSubCycle( false );
		this.pushStack( ( this.programCounter >> 8 ) & 0xFF );
		this.incrementStackReg();

		this.incrementSubCycle( false );
		this.pushStack( this.programCounter & 0xFF );
		this.incrementStackReg();

		//mStatusRegister.Status.Break = true;
		//mStatusRegister.Status.Unused = true;

		this.incrementSubCycle( false );
		this.pushStack( ( this.statusRegToByte() | 0x30 ) );
		this.incrementStackReg();

		this.programCounter = this.read16FromMem( Nes.consts.IRQ_ADDRESS, true );
		
		this.regStatus.Interrupt = true;
		if ( this.cmosVersion ) // Decimal flag is cleared in the CMOS version
			this.regStatus.Decimal = false;
	};
	cpu6502.prototype.actionBVC = function( value ) {
		return !this.regStatus.Overflow;
	};
	cpu6502.prototype.actionBVS = function( value ) {
		return this.regStatus.Overflow;
	};
	cpu6502.prototype.actionCLC = function( value ) {
		this.incrementSubCycle( true );
		this.regStatus.Carry = false;
	};
	cpu6502.prototype.actionCLD = function( value ) {
		this.incrementSubCycle( true );
		this.regStatus.Decimal = false;
	};
	cpu6502.prototype.actionCLI = function( value ) {
		this.incrementSubCycle( true );
		this.waitOneInstructionAfterCli = this.regStatus.Interrupt === true;	
		this.regStatus.Interrupt = false;
	};
	cpu6502.prototype.actionCLV = function( value ) {
		this.incrementSubCycle( true );
		this.regStatus.Overflow = false;
	};
	cpu6502.prototype.actionCMP = function( value ) {
		var t = this.regA - value;
		this.setCarrySubstract( t );
		this.setSignAndZero( t & 0xFF );
	};
	cpu6502.prototype.actionCPX = function( value ) {
		var t = this.regX - value; // purposely not wrapped
		this.setCarrySubstract( t );
		this.setSignAndZero( t & 0xFF );
	};
	cpu6502.prototype.actionCPY = function( value ) {
		var t = this.regY - value; // purposely not wrapped
		this.setCarrySubstract( t );
		this.setSignAndZero( t & 0xFF );
	};
	cpu6502.prototype.actionDEC = function( value ) {
		var t = value - 1;
		if ( t < 0 )
			t = 0xFF;
		this.setSignAndZero( t );
		return t;
	};
	cpu6502.prototype.actionDEX = function( value ) {
		this.incrementSubCycle( true );
		this.regX--;
		if ( this.regX < 0 )
			this.regX = 0xFF;
		this.setSignAndZero( this.regX );
	};
	cpu6502.prototype.actionDEY = function( value ) {
		this.incrementSubCycle( true );
		this.regY--;
		if ( this.regY < 0 )
			this.regY = 0xFF;
		this.setSignAndZero( this.regY );
	};
	cpu6502.prototype.actionEOR = function( value ) {
		this.regA = ( this.regA ^ ( value & 0xFF ) ) & 0xFF;
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionINC = function( value ) {
		var ret = value + 1;
		if ( ret > 0xFF )
			ret = 0;
		this.setSignAndZero( ret );
		return ret;
	};
	cpu6502.prototype.actionINX = function( value ) {
		this.incrementSubCycle( true );
		this.regX++;
		if ( this.regX > 0xFF )
			this.regX = 0;
		this.setSignAndZero( this.regX );
	};
	cpu6502.prototype.actionINY = function( value ) {
		this.incrementSubCycle( true );
		this.regY++;
		if ( this.regY > 0xFF )
			this.regY = 0;
		this.setSignAndZero( this.regY );
	};
	cpu6502.prototype.actionJMP = function( value ) {
		this.programCounter = Nes.wrap16( value );
	};
	cpu6502.prototype.actionJSR = function( value ) {
		var pushPc = this.programCounter - 1;
		if ( pushPc < 0 )
			pushPc = 0xFFFF;
		this.incrementSubCycle( false );
		this.pushStack( ( pushPc >> 8 ) & 0xFF );
		this.incrementStackReg();

		this.incrementSubCycle( false );
		this.pushStack( pushPc & 0xFF );
		this.incrementStackReg();

		this.incrementSubCycle( true );
		this.programCounter = Nes.wrap16( value );
	};
	cpu6502.prototype.actionLDA = function( value ) {
		this.regA = value & 0xFF;
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionLDX = function( value ) {
		this.regX = value & 0xFF;
		this.setSignAndZero( this.regX );
	};
	cpu6502.prototype.actionLDY = function( value ) {
		this.regY = value & 0xFF;
		this.setSignAndZero( this.regY );
	};
	cpu6502.prototype.actionLSR = function( value ) {
		this.regStatus.Carry = ((value & 0x01) > 0);
		var temp = ( value & 0xFF ) >> 1;
		this.setSignAndZero( temp );
		return temp;
	};
	cpu6502.prototype.actionORA = function( value ) {
		this.regA |= value & 0xFF; 
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionPHA = function( value ) {
		this.incrementSubCycle( false );
		this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );

		this.incrementSubCycle( true );
		this.pushStack( this.regA );
		this.incrementStackReg();
	};
	cpu6502.prototype.actionPHP = function( value ) {
		this.incrementSubCycle( false );
		this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );

		this.incrementSubCycle( true );
		this.pushStack( ( this.statusRegToByte() | 0x10 ) );
		this.incrementStackReg();
	};
	cpu6502.prototype.actionPLA = function( value ) {
		this.incrementSubCycle( false );
		this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );

		this.incrementSubCycle( false );
		this.decrementStackReg();

		this.incrementSubCycle( true );
		this.regA = this.popStack();

		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionPLP = function( value ) {
		this.waitOneInstructionAfterCli = this.regStatus.Interrupt === true;

		this.incrementSubCycle( false );
		this.mainboard.memory.read8( Nes.wrap16( this.programCounter + 1 ) );

		this.incrementSubCycle( false );
		this.decrementStackReg();

		this.incrementSubCycle( true );
		this.statusRegFromByte( this.popStack() );

		this.regStatus.Break = true; // TODO: this was true before in original port, put it back for some reason?
		this.regStatus.Unused = true;

		if ( this.waitOneInstructionAfterCli )
			this.waitOneInstructionAfterCli = this.regStatus.Interrupt === false;
	};
	cpu6502.prototype.actionROL = function( value ) {
		var t = ( (value & 0xFF) << 1 ) | ( this.regStatus.Carry ? 1 : 0 );
		this.setCarry( t );
		t &= 0xff;
		this.setSignAndZero( t );
		return t;
	};
	cpu6502.prototype.actionROR = function( value ) {
		var t = ( (value & 0xFF) >> 1 ) | ( this.regStatus.Carry ? 0x80 : 0 );
		this.regStatus.Carry = ( value & 0x1 );
		this.setSignAndZero( t );
		return t;
	};
	cpu6502.prototype.actionRTI = function( value ) {
		// dummy read
		this.incrementSubCycle( false );
		this.mainboard.memory.read8( this.programCounter );

		this.incrementSubCycle( false );
		this.decrementStackReg();

		this.incrementSubCycle( false );
		this.statusRegFromByte( this.popStack() );
		this.decrementStackReg();
		
		this.incrementSubCycle( false );
		this.programCounter = this.popStack();
		this.decrementStackReg();

		this.incrementSubCycle( true );
		this.programCounter |= this.popStack() << 8;

		this.regStatus.Break = true;
		this.regStatus.Unused = true;
	};
	cpu6502.prototype.actionRTS = function( value ) {
		// dummy read
		this.incrementSubCycle( false );
		this.mainboard.memory.read8( this.programCounter );

		this.incrementSubCycle( false );
		this.decrementStackReg();

		this.incrementSubCycle( false );
		this.programCounter = this.popStack();
		this.decrementStackReg();

		this.incrementSubCycle( false );
		this.programCounter |= this.popStack() << 8;

		this.incrementSubCycle( true );
		this.programCounter = Nes.wrap16( this.programCounter + 1 );
	};
	cpu6502.prototype.actionSBC = function( value ) {
		var temp = this.regA - value - ( this.regStatus.Carry ? 0 : 1 );
		if ( this.cmosVersion || ( this.status & 0x8 ) === 0 )
		{ // Bug in non-cmos version: These flags aren't set if decimal mode is on
			this.setOverflow( this.regA, temp, value );
			this.setSignAndZero( temp & 0xFF );
		}
		this.setCarrySubstract( temp );
		this.regA = ( temp & 0xFF );
	};
	cpu6502.prototype.actionSEC = function( value ) {
		this.incrementSubCycle( true );
		this.regStatus.Carry = true;
	};
	cpu6502.prototype.actionSED = function( value ) {
		this.incrementSubCycle( true );
		this.regStatus.Decimal = true;
	};
	cpu6502.prototype.actionSEI = function( value ) {
		this.incrementSubCycle( true );
		this.regStatus.Interrupt = true;
	};
	cpu6502.prototype.actionSTA = function( value ) {
		return this.regA;
	};
	cpu6502.prototype.actionSTX = function( value ) {
		return this.regX;
	};
	cpu6502.prototype.actionSTY = function( value ) {
		return this.regY;
	};
	cpu6502.prototype.actionTAX = function( value ) {
		this.incrementSubCycle( true );
		this.regX = this.regA;
		this.setSignAndZero( this.regX );
	};
	cpu6502.prototype.actionTAY = function( value ) {
		this.incrementSubCycle( true );
		this.regY = this.regA;
		this.setSignAndZero( this.regY );
	};
	cpu6502.prototype.actionTSX = function( value ) {
		this.incrementSubCycle( true );
		this.regX = this.regS & 0xFF;
		this.setSignAndZero( this.regX );
	};
	cpu6502.prototype.actionTXA = function( value ) {
		this.incrementSubCycle( true );
		this.regA = this.regX;
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionTXS = function( value ) {
		this.incrementSubCycle( true );
		this.regS = this.regX;
	};
	cpu6502.prototype.actionTYA = function( value ) {
		this.incrementSubCycle( true );
		this.regA = this.regY;
		this.setSignAndZero( this.regA );
	};

	// not legal
	cpu6502.prototype.actionASO = function( value ) {
		this.regStatus.Carry = ( ( value & 0x80 ) > 0 );
		var val = ( value << 1 ) & 0xFF;
		this.regA |= val;
		this.setSignAndZero( this.regA );
		return val;
	};
	cpu6502.prototype.actionRLA = function( value ) {
		var t = ( value << 1 ) | ( this.regStatus.Carry ? 1 : 0 );
		this.setCarry( t );
		t &= 0xff;
		this.regA &= t;
		this.setSignAndZero( this.regA );
		return t;
	};
	cpu6502.prototype.actionLSE = function( value ) {
		this.regStatus.Carry = ((value & 0x01) > 0);
		var temp = value >> 1;
		this.regA ^= temp & 0xFF;
		this.setSignAndZero( this.regA );
		return temp & 0xFF;
	};
	cpu6502.prototype.actionRRA = function( value ) {
		var t = ( value >> 1 ) | ( this.regStatus.Carry ? 0x80 : 0 );
		this.regStatus.Carry = ( value & 0x1 ) > 0;
		var newAccumulator = ( t & 0xFF ) + this.regA + (this.regStatus.Carry ? 1 : 0);
		this.setCarry( newAccumulator );
		if ( this.cmosVersion || ( this.status & 0x8 ) === 0 )
		{ // Bug in non-cmos version: These flags aren't set if decimal mode is on
			this.setSignAndZero( newAccumulator & 0xFF );
			this.setOverflow( this.regA, ( t ^ 0xFF ), newAccumulator );
		}
		this.regA = newAccumulator & 0xFF;
		return t & 0xFF;
	};
	cpu6502.prototype.actionAXS = function( value ) {
		return this.regA & this.regX;
	};
	cpu6502.prototype.actionLAX = function( value ) {
		this.regA = value;
		this.regX = value;
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionDCM = function( value ) {
		var decremented = value - 1;
		if ( decremented < 0 )
			decremented = 0xFF;
		var t = this.regA - decremented;
		this.setCarrySubstract( t );
		this.setSignAndZero( t & 0xFF );
		return decremented;
	};
	cpu6502.prototype.actionINS = function( value ) {
		var ret = value + 1;
		if ( ret > 0xFF )
			ret = 0;
		this.setSignAndZero( ret );
		var temp = this.regA - ret - (this.regStatus.Carry ? 0 : 1);
		if ( this.cmosVersion || ( this.status & 0x8 ) === 0 )
		{ // Bug in non-cmos version: These flags aren't set if decimal mode is on
			this.setSignAndZero( temp );
			this.regStatus.Overflow = (((this.regA ^ temp) & 0x80) && ((this.regA ^ ret) & 0x80));
		}
		this.setCarrySubstract( temp );
		this.regA = (temp & 0xff);
		return ret;
	};
	cpu6502.prototype.actionALR = function( value ) {
		this.regA &= value;
		this.regStatus.Carry = ((this.regA & 0x01) > 0);
		this.regA = ( this.regA >> 1 ) & 0xFF;
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionARR = function( value ) {
		this.regA &= value & 0xFF;
		this.regA = ( ( this.regA >> 1 ) & 0xFF ) | ( this.regStatus.Carry ? 0x80 : 0 );
		this.regStatus.Carry = ( this.regA & 0x1 ) > 0;
		this.setSignAndZero( this.regA );

		this.regStatus.Overflow = this.regStatus.Carry = false;
		switch ( this.regA & 0x60 )
		{
		case 0x20: this.regStatus.Overflow = true; break;
		case 0x40: this.regStatus.Overflow = this.regStatus.Carry = true; break;
		case 0x60: this.regStatus.Carry = true; break;
		}
	};
	cpu6502.prototype.actionXAA = function( value ) {
		this.regA = this.regX & value;
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionOAL = function( value ) {
		this.regX = this.regA = value & 0xFF;
		this.setSignAndZero( this.regA );
	};
	cpu6502.prototype.actionSAX = function( value ) {
	/*
SAX ANDs the contents of the A and X registers (leaving the contents of A 
intact), subtracts an immediate value, and then stores the result in X.
... A few points might be made about the action of subtracting an immediate 
value.  It actually works just like the CMP instruction, except that CMP 
does not store the result of the subtraction it performs in any register.  
This subtract operation is not affected by the state of the Carry flag, 
though it does affect the Carry flag.  It does not affect the Overflow 
flag.
	*/
		var t = ( this.regA & this.regX ) - value;
		this.regX = t & 0xFF;
		this.setCarrySubstract( t );
		this.setSignAndZero( t & 0xFF );
	};
	cpu6502.prototype.actionNOP = function( value, instruction ) { this.incrementSubCycle( true ); };
	cpu6502.prototype.actionSKB = function( value, instruction ) {};
	cpu6502.prototype.actionSKW = function( value, instruction ) {};
	cpu6502.prototype.actionHLT = function( value ) {
		console.log('illegal instruction HLT not implemented');
	};
	cpu6502.prototype.actionTAS = function( value ) {
		this.regS = this.regX & this.regA;
	};
	cpu6502.prototype.actionSAY = function( value ) {
		var result = this.regY & Nes.wrap8( this.SAYHighByte + 1 );
		return result;
	};
	cpu6502.prototype.actionXAS = function( value ) { console.log('illegal instruction not implemented'); 
	};
	cpu6502.prototype.actionAXA = function( value ) { console.log('illegal instruction not implemented'); 
	};
	cpu6502.prototype.actionANC = function( value ) {
		this.regA &= value;
		this.setSignAndZero( this.regA );
		this.regStatus.Carry = this.regStatus.Sign;
	};
	cpu6502.prototype.actionLAS = function( value ) { console.log('illegal instruction not implemented'); };

	cpu6502.prototype.formatInstructionStatusString = function( programCounter, instruction, instructionBytesArray, addressingModeArgs ) {
	
		// program counter
		var str = Nes.ZERO_PAD_HEX( programCounter, 4 );
		str += "  ";
		// hex instruction data
		for ( var i=0; i< Math.max( instructionBytesArray.length, 3 ); ++i )
		{
			if ( instructionBytesArray.length > i )
				str += Nes.ZERO_PAD_HEX( instructionBytesArray[i], 2 );
			else
				str += "  ";
			str += " ";
		}
		
		// instruction
		str += instruction.name + " ";
		
		// addressing mode string
		if ( addressingModeArgs && addressingModeArgs.length > 0 ) {
			switch ( instruction.addressingmode )
			{
			case Nes.ADDRESSING_MODE.RELATIVE:
				str += "$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 4 );
			break;
			case Nes.ADDRESSING_MODE.ACCUMULATOR:
			break;
			case Nes.ADDRESSING_MODE.IMMEDIATE:
				str += "#$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 2 );
			break;
			case Nes.ADDRESSING_MODE.IMMEDIATE16: // Used only by JSR and JMP
				str += "$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 4 );
			break;
			case Nes.ADDRESSING_MODE.ZEROPAGE:
				str += "$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 2 ) + " = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.ZEROPAGEX:
				str += "$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 2 ) + ", X = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.ZEROPAGEY:
				str += "$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 2 ) + ", Y = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.ABSOLUTE:
				str += "$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 4 ) + " = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.ABSOLUTEX:
				str += "$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 4 ) + ", X = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.ABSOLUTEY:
				str += "$" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 4 ) + ", Y = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.INDIRECT: // only used by indirect JMP
				str += "($" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 4 ) + ") = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.INDIRECTX:
				str += "($" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 4 ) + ", X) = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.INDIRECTY:
				str += "($" + Nes.ZERO_PAD_HEX( addressingModeArgs[0], 4 ) + "), Y = " + Nes.ZERO_PAD_HEX( addressingModeArgs[1], 2 );
			break;
			case Nes.ADDRESSING_MODE.SAY:
			break;
			}
		}
		
		while ( str.length < 47 ) {
			str += ' ';
		}
		
		// cpu registers
		str += " A:" + Nes.ZERO_PAD_HEX( this.regA, 2 );
		str += " X:" + Nes.ZERO_PAD_HEX( this.regX, 2 );
		str += " Y:" + Nes.ZERO_PAD_HEX( this.regY, 2 );
		str += " P:" + Nes.ZERO_PAD_HEX( this.statusRegToByte(), 2 );
		str += " SP:" + Nes.ZERO_PAD_HEX( this.regS, 2 );
		
		return str;
	};


	cpu6502.prototype.saveState = function() {
	
		var data = {};
		data.programCounter = this.programCounter;
		data.subcycle = this.subcycle;
		data.isLastSubCycle = this.isLastSubCycle;
		data.pageBoundaryCrossed = this.pageBoundaryCrossed;
		data.branchTaken = this.branchTaken;
		data.waitOneInstructionAfterCli = this.waitOneInstructionAfterCli;
		data.resetPending = this.resetPending;
		data.nmiPending = this.nmiPending;
		data.irqLineLow = this.irqLineLow;
		data.triggerNmiAfterNextInstruction = this.triggerNmiAfterNextInstruction;
		data.regStatus = $.extend( {}, this.regStatus );
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
		this.isLastSubCycle = state.isLastSubCycle;
		this.pageBoundaryCrossed = state.pageBoundaryCrossed;
		this.branchTaken = state.branchTaken;
		this.waitOneInstructionAfterCli = state.waitOneInstructionAfterCli;
		this.resetPending = state.resetPending;
		this.nmiPending = state.nmiPending;
		this.irqLineLow = state.irqLineLow;
		this.triggerNmiAfterNextInstruction = state.triggerNmiAfterNextInstruction;
		this.regStatus = $.extend( {}, state.regStatus );
		this.regS = state.regS;
		this.regX = state.regX;
		this.regY = state.regY;
		this.regA = state.regA;
		this.SAYHighByte = state.SAYHighByte;
	};

	
	
	Nes.cpu6502 = cpu6502;

}());
