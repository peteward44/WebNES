/*jslint node: true */

"use strict";

var fs = require( 'fs' );
var path = require( 'path' );

var opcodeJson = path.join( __dirname, 'opcodes6502.json' );

var endLine = '\n';
var debug = false; // adds undefined checks etc for logic errors
var isCmosVersion = false;


var OutputFile = function( filename ) {

	this._filename = path.join( __dirname, '../../project/js/nes', filename );
	this._tabLevel = 0;
	this._outText = '';
};


OutputFile.prototype.writeLine = function( line ) {
	
	if ( line === undefined ) {
		line = '';
	}
	for ( var i=0; i<this._tabLevel; ++i ) {
		this._outText += '\t';
	}
	this._outText += line + endLine;
};


OutputFile.prototype.pushTab = function() {

	this._tabLevel++;
};


OutputFile.prototype.popTab = function() {

	this._tabLevel--;
};


OutputFile.prototype.flush = function() {

	fs.writeFileSync( this._filename, this._outText );
};



var incrementSubCycle = function( outfile ) {
	outfile.writeLine( 'cpu.incrementSubcycle();' );
};

var setOverflow = function( outfile, arg1, arg2 ) {
	outfile.writeLine( 'cpu.setOverflow( (( cpu.regA ^ ' + arg1 + ' ) & 0x80) && (( cpu.regA ^ ' + arg2 + ' ) & 0x80) );' );
};

var setSign = function( outfile, arg1 ) {
	outfile.writeLine( 'cpu.setSign( ( ' + arg1 + ' & 0x80 ) > 0 );' );
};

var setZero = function( outfile, arg1 ) {
	outfile.writeLine( 'cpu.setZero( ( ' + arg1 + ' & 0xFF ) === 0 );' );
};

var setSignAndZero = function( outfile, arg1 ) {
	setSign( outfile, arg1 );
	setZero( outfile, arg1 );
};

var setCarry = function( outfile, arg1 ) {
	outfile.writeLine( 'cpu.setCarry( ' + arg1 + ' > 0xFF );' );
};

var setCarrySubtract = function( outfile, arg1 ) {
	outfile.writeLine( 'cpu.setCarry( ' + arg1 + ' >= 0 && ' + arg1 + ' < 0x100 );' );
};

var incrementStackReg = function( outfile ) {
	outfile.writeLine( 'if ( cpu.regS === 0 ) {' );
	outfile.writeLine( '	cpu.regS = 0xFF;' );
	outfile.writeLine( '} else {' );
	outfile.writeLine( '	cpu.regS--;' );
	outfile.writeLine( '}' );
};

var decrementStackReg = function( outfile ) {
	outfile.writeLine( 'if ( cpu.regS === 0xFF ) {' );
	outfile.writeLine( '	cpu.regS = 0;' );
	outfile.writeLine( '} else {' );
	outfile.writeLine( '	cpu.regS++;' );
	outfile.writeLine( '}' );
};

var pushStack = function( outfile, arg1 ) {
	outfile.writeLine( 'memory.write8( 0x100 + cpu.regS, (' + arg1 + ') & 0xFF );' );
};

var popStack = function( outfile, out ) {
	outfile.writeLine( out + ' = memory.read8( 0x100 + cpu.regS );' );
};

var getDummyAddressCalculation = function( addition ) {
	return '(address & 0xFF00) | ((address + ' + addition + ') & 0xFF)';
};

	
var performDummyRead = function( outfile, instruction, addition ) {

	var doDummyReadBoundaryCheck = instruction.opmode === "READ" && instruction.pagecycles > 0;
	var doDummyRead = true;
	
	if ( doDummyReadBoundaryCheck ) {
		outfile.writeLine( 'if ( ( ( address + ' + addition + ' ) & 0xFF00 ) !== ( address & 0xFF00 ) ) { // Only do dummy read if page boundary crossed' );
		outfile.pushTab();
		outfile.writeLine( 'cyclesTaken++' );
	}
	incrementSubCycle( outfile );
	outfile.writeLine( 'memory.read8( ' + getDummyAddressCalculation( addition ) + ' );' );
	if ( doDummyReadBoundaryCheck ) {
		outfile.popTab();
		outfile.writeLine( '}' );
	}
};
	
	
var writeOutAddressingModeCode = function( outfile, instruction, storeFormatData ) {

	switch ( instruction.addressingmode ) {
	case "NONE":
		break;
	case "RELATIVE": // branching
		outfile.writeLine( 'var address = memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		outfile.writeLine( 'var readInValue = cpu.calculateRelativeDifference( (cpu.getPC()|0), (address|0) );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' ); // not an address - more an offset, but we recycle the variable
			outfile.writeLine( 'formatData.operationParam = ( readInValue + ' + instruction.size + ' ) & 0xFFFF' );
		}
		break;
	case "ACCUMULATOR":
		outfile.writeLine( 'var readInValue = cpu.regA;' );
		break;
	case "IMMEDIATE":
		incrementSubCycle( outfile );
		outfile.writeLine( 'var readInValue = memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = readInValue;' );
		}
		break;
	case "IMMEDIATE16":
		outfile.writeLine( 'var readInValue = cpu.read16FromMemNoWrap( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = readInValue;' ); // 16 bit value
		}
		break;
	case "ZEROPAGE":
		incrementSubCycle( outfile );
		outfile.writeLine( 'var readInValue = memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = readInValue;' );
		}
		break;
	case "ZEROPAGEX":
		incrementSubCycle( outfile );
		outfile.writeLine( 'var address = memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' );
		}
		outfile.writeLine( 'var readInValue = ( address + cpu.regX ) & 0xFF;' );
		incrementSubCycle( outfile );
		outfile.writeLine( 'memory.read8( ' + getDummyAddressCalculation( 'cpu.regX' ) + ' );' );
		break;
	case "ZEROPAGEY":
		incrementSubCycle( outfile );
		outfile.writeLine( 'var address = memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' );
		}
		outfile.writeLine( 'var readInValue = ( address + cpu.regY ) & 0xFF;' );
		incrementSubCycle( outfile );
		outfile.writeLine( 'memory.read8( ' + getDummyAddressCalculation( 'cpu.regY' ) + ' );' );
		break;
	case "ABSOLUTE":
		outfile.writeLine( 'var readInValue = cpu.read16FromMemNoWrap( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = readInValue;' ); // 16 bit value
		}
		break;
	case "ABSOLUTEX":
		outfile.writeLine( 'var address = cpu.read16FromMemNoWrap( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' ); // 16 bit value
		}
		outfile.writeLine( 'var readInValue = ( address + cpu.regX ) & 0xFFFF;' );
		performDummyRead( outfile, instruction, 'cpu.regX' );
		break;
	case "ABSOLUTEY":
		outfile.writeLine( 'var address = cpu.read16FromMemNoWrap( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' ); // 16 bit value
		}
		outfile.writeLine( 'var readInValue = ( address + cpu.regY ) & 0xFFFF;' );
		performDummyRead( outfile, instruction, 'cpu.regY' );
		break;
	case "INDIRECT":
		outfile.writeLine( 'var address = cpu.read16FromMemNoWrap( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' ); // 16 bit value
		}
		if ( isCmosVersion ) { // CMOS version doesnt wrap on zero page
			outfile.writeLine( 'var readInValue = cpu.read16FromMemNoWrap( address );' );
		} else {
			outfile.writeLine( 'var readInValue = cpu.read16FromMemWithWrap( address );' );
		}
		break;
	case "INDIRECTX":
		incrementSubCycle( outfile );
		outfile.writeLine( 'var address = memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' );
		}
		incrementSubCycle( outfile );
		outfile.writeLine( 'address = ( address + cpu.regX ) & 0xFF;' );
		outfile.writeLine( 'var readInValue = cpu.read16FromMemWithWrap( address );' );
		break;
	case "INDIRECTY":
		incrementSubCycle( outfile );
		outfile.writeLine( 'var address = memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' );
		}
		outfile.writeLine( 'address = cpu.read16FromMemWithWrap( address );' );
		outfile.writeLine( 'var readInValue = ( address + cpu.regY ) & 0xFFFF;' );
		performDummyRead( outfile, instruction, 'cpu.regY' );
		break;
	case "SAY":
		incrementSubCycle( outfile );
		outfile.writeLine( 'var address = memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.opcodeParam = address;' );
		}
		outfile.writeLine( 'cpu.SAYHighByte = memory.read8( ( cpu.getPC() + 2 ) & 0xFFFF );' );
		outfile.writeLine( 'address |= ( cpu.SAYHighByte ) << 8;' );
		outfile.writeLine( 'var readInValue = ( address + cpu.regX ) & 0xFFFF; // SAY writes to absolute X but needs the high byte of the address to operate on' );
		break;
	default:
		throw new Error( "Invalid addressingmode for instruction " + instruction.name );
	}
	
	if ( instruction.addressingmode !== 'NONE' ) {	
		if ( debug ) {
			outfile.writeLine( "if ( typeof readInValue !== 'number' ) { debugger; }" );
		}
	}
};


var writeOutCmosDependentSignAndZeroAndOverflowFlags = function( outfile, testVariableName, inputVariableName ) {

	// if ( !isCmosVersion ) {
		// outfile.writeLine( '// Bug in non-cmos version: These flags arent set if decimal mode is on' );
		// outfile.writeLine( 'if ( !cpu.regStatus.Decimal /*!DecimalFlagEnabled()*/ ) {' );
		// outfile.pushTab();
	// }
	
	setSignAndZero( outfile, testVariableName );
	setOverflow( outfile, testVariableName, inputVariableName );
	
	// if ( !isCmosVersion ) {
		// outfile.popTab();
		// outfile.writeLine( '}' );
	// }
};


var writeOutActionCode = function( outfile, instruction, inputVariableName ) {
	inputVariableName = inputVariableName || 'readInValue';

	switch ( instruction.functiontype ) {
		case "ADC":
			outfile.writeLine( 'var temp = ( ' + inputVariableName + ' & 0xFF ) + cpu.regA + (cpu.getCarry() ? 1 : 0);' );
			setCarry( outfile, 'temp' );
			writeOutCmosDependentSignAndZeroAndOverflowFlags( outfile, 'temp', '( ' + inputVariableName + ' ^ 0xFF )' );
			outfile.writeLine( 'cpu.regA = temp & 0xFF;' );
		break;
		case "AND":
			outfile.writeLine( 'cpu.regA &= ( ' + inputVariableName + ' & 0xFF );' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "ASL":
			outfile.writeLine( 'cpu.setCarry( ( ' + inputVariableName + ' & 0x80 ) > 0 );' );
			outfile.writeLine( 'var result = ( ( ' + inputVariableName + ' & 0xFF ) << 1 ) & 0xFF;' );
			setSignAndZero( outfile, 'result' );
		break;
		case "BCC":
			outfile.writeLine( 'var branchTaken = !cpu.getCarry();' );
		break;
		case "BCS":
			outfile.writeLine( 'var branchTaken = cpu.getCarry();' );
		break;
		case "BEQ":
			outfile.writeLine( 'var branchTaken = cpu.getZero();' );
		break;
		case "BIT":
			setSign( outfile, '( ' + inputVariableName + '& 0xFF )' );
			setZero( outfile, 'cpu.regA & ( ' + inputVariableName + ' & 0xFF )' );
			outfile.writeLine( 'cpu.setOverflow( ( ' + inputVariableName + ' & 0x40) > 0 );	// Copy bit 6 to OVERFLOW flag.' );
		break;
		case "BMI":
			outfile.writeLine( 'var branchTaken = cpu.getSign();' );
		break;
		case "BNE":
			outfile.writeLine( 'var branchTaken = !cpu.getZero();' );
		break;
		case "BPL":
			outfile.writeLine( 'var branchTaken = !cpu.getSign();' );
		break;
		case "BRK":
			outfile.writeLine( 'cpu.setPC( ( cpu.getPC() + 1 ) & 0xFFFF );' );
			incrementSubCycle( outfile );
			outfile.writeLine( '// dummy read of opcode after brk' );
			outfile.writeLine( 'memory.read8( cpu.getPC() );' );
			outfile.writeLine( 'cpu.setPC( ( cpu.getPC() + 1 ) & 0xFFFF );' );

			incrementSubCycle( outfile );
			pushStack( outfile, '( cpu.getPC() >> 8 )' );
			incrementStackReg( outfile );

			incrementSubCycle( outfile );
			pushStack( outfile, 'cpu.programCounter' ); // pushStack does & 0xFF for us
			incrementStackReg( outfile );

			incrementSubCycle( outfile );
			pushStack( outfile, '( cpu.statusRegToByte() | 0x30 )' );
			incrementStackReg( outfile );

			outfile.writeLine( 'cpu.setPC( cpu.read16FromMemNoWrap( CPU_IRQ_ADDRESS ) );' );
			
			outfile.writeLine( 'cpu.setInterrupt( true );' );
			if ( isCmosVersion ) {
				outfile.writeLine( 'cpu.setDecimal( false ); // Decimal flag is cleared in the CMOS version' );
			}
		break;
		case "BVC":
			outfile.writeLine( 'var branchTaken = !cpu.getOverflow();' );
		break;
		case "BVS":
			outfile.writeLine( 'var branchTaken = cpu.getOverflow();' );
		break;
		case "CLC":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.setCarry( false );' );
		break;
		case "CLD":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.setDecimal( false );' );
		break;
		case "CLI":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.waitOneInstructionAfterCli = cpu.getInterrupt() === true;' );
			outfile.writeLine( 'cpu.setInterrupt( false );' );
		break;
		case "CLV":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.setOverflow( false );' );
		break;
		case "CMP":
			outfile.writeLine( 'var temp = cpu.regA - ' + inputVariableName + ';' );
			setCarrySubtract( outfile, 'temp' );
			setSignAndZero( outfile, 'temp' );
		break;
		case "CPX":
			outfile.writeLine( 'var temp = cpu.regX - ' + inputVariableName + '; // purposely not wrapped' );
			setCarrySubtract( outfile, 'temp' );
			setSignAndZero( outfile, 'temp' );
		break;
		case "CPY":
			outfile.writeLine( 'var temp = cpu.regY - ' + inputVariableName + '; // purposely not wrapped' );
			setCarrySubtract( outfile, 'temp' );
			setSignAndZero( outfile, 'temp' );
		break;
		case "DEC":
			outfile.writeLine( 'var result = ' + inputVariableName + ' - 1;' );
			outfile.writeLine( 'if ( result < 0 )' );
			outfile.writeLine( '	result = 0xFF;' );
			setSignAndZero( outfile, 'result' );
		break;
		case "DEX":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regX--;' );
			outfile.writeLine( 'if ( cpu.regX < 0 )' );
			outfile.writeLine( '	cpu.regX = 0xFF;' );
			setSignAndZero( outfile, 'cpu.regX' );
		break;
		case "DEY":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regY--;' );
			outfile.writeLine( 'if ( cpu.regY < 0 )' );
			outfile.writeLine( '	cpu.regY = 0xFF;' );
			setSignAndZero( outfile, 'cpu.regY' );
		break;
		case "EOR":
			outfile.writeLine( 'cpu.regA = ( cpu.regA ^ ( ' + inputVariableName + ' & 0xFF ) ) & 0xFF;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "INC":
			outfile.writeLine( 'var result = ' + inputVariableName + ' + 1;' );
			outfile.writeLine( 'if ( result > 0xFF )' );
			outfile.writeLine( '	result = 0;' );
			setSignAndZero( outfile, 'result' );
		break;
		case "INX":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regX++;' );
			outfile.writeLine( 'if ( cpu.regX > 0xFF )' );
			outfile.writeLine( '	cpu.regX = 0;' );
			setSignAndZero( outfile, 'cpu.regX' );
		break;
		case "INY":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regY++;' );
			outfile.writeLine( 'if ( cpu.regY > 0xFF )' );
			outfile.writeLine( '	cpu.regY = 0;' );
			setSignAndZero( outfile, 'cpu.regY' );
		break;
		case "JMP":
			outfile.writeLine( 'cpu.setPC( ( ' + inputVariableName + ' ) & 0xFFFF );' );
		break;
		case "JSR":
			outfile.writeLine( 'var result = cpu.getPC() - 1;' );
			outfile.writeLine( 'if ( result < 0 )' );
			outfile.writeLine( '	result = 0xFFFF;' );
			incrementSubCycle( outfile );
			pushStack( outfile, '( result >> 8 )' );
			incrementStackReg( outfile );

			incrementSubCycle( outfile );
			pushStack( outfile, 'result' );
			incrementStackReg( outfile );

			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.setPC( ( ' + inputVariableName + ' ) & 0xFFFF );' );
		break;
		case "LDA":
			outfile.writeLine( 'cpu.regA = ' + inputVariableName + ' & 0xFF;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "LDX":
			outfile.writeLine( 'cpu.regX = ' + inputVariableName + ' & 0xFF;' );
			setSignAndZero( outfile, 'cpu.regX' );
		break;
		case "LDY":
			outfile.writeLine( 'cpu.regY = ' + inputVariableName + ' & 0xFF;' );
			setSignAndZero( outfile, 'cpu.regY' );
		break;
		case "LSR":
			outfile.writeLine( 'cpu.setCarry((' + inputVariableName + ' & 0x01) > 0);' );
			outfile.writeLine( 'var result = ( ' + inputVariableName + ' & 0xFF ) >> 1;' );
			setSignAndZero( outfile, 'result' );
		break;
		case "ORA":
			outfile.writeLine( 'cpu.regA |= ' + inputVariableName + ' & 0xFF;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "PHA":
			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );

			incrementSubCycle( outfile );
			pushStack( outfile, 'cpu.regA' );
			incrementStackReg( outfile );
		break;
		case "PHP":
			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );

			incrementSubCycle( outfile );
			pushStack( outfile, '( cpu.statusRegToByte() | 0x10 )' );
			incrementStackReg( outfile );
		break;
		case "PLA":
			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );

			incrementSubCycle( outfile );
			decrementStackReg( outfile );

			incrementSubCycle( outfile );
			popStack( outfile, 'cpu.regA' );

			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "PLP":
			outfile.writeLine( 'cpu.waitOneInstructionAfterCli = cpu.getInterrupt() === true;' );

			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );

			incrementSubCycle( outfile );
			decrementStackReg( outfile );

			incrementSubCycle( outfile );
			popStack( outfile, 'var temp' );
			outfile.writeLine( 'cpu.statusRegFromByte( temp );' );

			outfile.writeLine( 'cpu.setBreak( true ); // TODO: this was true before in original port, put it back for some reason?' );
			outfile.writeLine( 'cpu.setUnused( true );' );

			outfile.writeLine( 'if ( cpu.waitOneInstructionAfterCli )' );
			outfile.writeLine( '	cpu.waitOneInstructionAfterCli = cpu.getInterrupt() === false;' );
		break;
		case "ROL":
			outfile.writeLine( 'var result = ( (' + inputVariableName + ' & 0xFF) << 1 ) | ( cpu.getCarry() ? 1 : 0 );' );
			setCarry( outfile, 'result' );
			outfile.writeLine( 'result &= 0xff;' );
			setSignAndZero( outfile, 'result' );
		break;
		case "ROR":
			outfile.writeLine( 'var result = ( (' + inputVariableName + ' & 0xFF) >> 1 ) | ( cpu.getCarry() ? 0x80 : 0 );' );
			outfile.writeLine( 'cpu.setCarry( ' + inputVariableName + ' & 0x1 );' );
			setSignAndZero( outfile, 'result' );
		break;
		case "RTI":
			outfile.writeLine( '// dummy read' );
			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.read8( cpu.getPC() );' );

			incrementSubCycle( outfile );
			decrementStackReg( outfile );

			incrementSubCycle( outfile );
			popStack( outfile, 'var temp' );
			outfile.writeLine( 'cpu.statusRegFromByte( temp );' );
			decrementStackReg( outfile );
			
			incrementSubCycle( outfile );
			popStack( outfile, 'cpu.programCounter' );
			decrementStackReg( outfile );

			incrementSubCycle( outfile );
			popStack( outfile, 'temp' );
			outfile.writeLine( 'cpu.programCounter |= ( temp & 0xFF ) << 8;' );
	
			if ( debug ) {
				outfile.writeLine( 'if ( cpu.programCounter < 0x6000 && cpu.programCounter > 0xFFFF ) { debugger; }' );
			}

			outfile.writeLine( 'cpu.setBreak( true );' );
			outfile.writeLine( 'cpu.setUnused( true );' );
		break;
		case "RTS":
			outfile.writeLine( '// dummy read' );
			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.read8( cpu.getPC() );' );

			incrementSubCycle( outfile );
			decrementStackReg( outfile );

			incrementSubCycle( outfile );
			popStack( outfile, 'cpu.programCounter' );
			decrementStackReg( outfile );

			incrementSubCycle( outfile );
			popStack( outfile, 'var temp' );
			outfile.writeLine( 'cpu.programCounter |= ( temp & 0xFF ) << 8;' );

			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.programCounter = ( cpu.getPC() + 1 ) & 0xFFFF;' );
			
			if ( debug ) {
				outfile.writeLine( 'if ( cpu.programCounter < 0x6000 && cpu.programCounter > 0xFFFF ) { debugger; }' );
			}
		break;
		case "SBC":
			outfile.writeLine( 'var temp = cpu.regA - ' + inputVariableName + ' - ( cpu.getCarry() ? 0 : 1 );' );
			writeOutCmosDependentSignAndZeroAndOverflowFlags( outfile, 'temp', inputVariableName );
			setCarrySubtract( outfile, 'temp' );
			outfile.writeLine( 'cpu.regA = ( temp & 0xFF );' );
		break;
		case "SEC":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.setCarry( true );' );
		break;
		case "SED":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.setDecimal( true );' );
		break;
		case "SEI":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.setInterrupt( true );' );
		break;
		case "STA":
			outfile.writeLine( 'var result = cpu.regA;' );
		break;
		case "STX":
			outfile.writeLine( 'var result = cpu.regX;' );
		break;
		case "STY":
			outfile.writeLine( 'var result = cpu.regY;' );
		break;
		case "TAX":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regX = cpu.regA;' );
			setSignAndZero( outfile, 'cpu.regX' );
		break;
		case "TAY":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regY = cpu.regA;' );
			setSignAndZero( outfile, 'cpu.regY' );
		break;
		case "TSX":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regX = cpu.regS & 0xFF;' );
			setSignAndZero( outfile, 'cpu.regX' );
		break;
		case "TXA":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regA = cpu.regX;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "TXS":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regS = cpu.regX;' );
		break;
		case "TYA":
			incrementSubCycle( outfile );
			outfile.writeLine( 'cpu.regA = cpu.regY;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;

		// not legal
		case "ASO":
			outfile.writeLine( 'cpu.setCarry( ( ' + inputVariableName + ' & 0x80 ) > 0 );' );
			outfile.writeLine( 'var result = ( ' + inputVariableName + ' << 1 ) & 0xFF;' );
			outfile.writeLine( 'cpu.regA |= result;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "RLA":
			outfile.writeLine( 'var result = ( ' + inputVariableName + ' << 1 ) | ( cpu.getCarry() ? 1 : 0 );' );
			setCarry( outfile, 'result' );
			outfile.writeLine( 'result &= 0xff;' );
			outfile.writeLine( 'cpu.regA &= result;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "LSE":
			outfile.writeLine( 'cpu.setCarry((' + inputVariableName + ' & 0x01) > 0);' );
			outfile.writeLine( 'var result = ( ' + inputVariableName + ' >> 1 ) & 0xFF;' );
			outfile.writeLine( 'cpu.regA ^= result;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "RRA":
			outfile.writeLine( 'var result = ( ' + inputVariableName + ' >> 1 ) | ( cpu.getCarry() ? 0x80 : 0 );' );
			outfile.writeLine( 'cpu.setCarry( ( ' + inputVariableName + ' & 0x1 ) > 0 );' );
			outfile.writeLine( 'var temp = ( result & 0xFF ) + cpu.regA + (cpu.getCarry() ? 1 : 0);' );
			setCarry( outfile, 'temp' );
			writeOutCmosDependentSignAndZeroAndOverflowFlags( outfile, 'temp', '( result ^ 0xFF )' );
			outfile.writeLine( 'cpu.regA = temp & 0xFF;' );
			outfile.writeLine( 'result &= 0xFF;' );
		break;
		case "AXS":
			outfile.writeLine( 'var result = cpu.regA & cpu.regX;' );
		break;
		case "LAX":
			outfile.writeLine( 'cpu.regA = ' + inputVariableName + ';' );
			outfile.writeLine( 'cpu.regX = ' + inputVariableName + ';' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "DCM":
			outfile.writeLine( 'var result = ' + inputVariableName + ' - 1;' );
			outfile.writeLine( 'if ( result < 0 )' );
			outfile.writeLine( '	result = 0xFF;' );
			outfile.writeLine( 'var temp = cpu.regA - result;' );
			setCarrySubtract( outfile, 'temp' );
			setSignAndZero( outfile, 'temp' );
		break;
		case "INS":
			outfile.writeLine( 'var result = ' + inputVariableName + ' + 1;' );
			outfile.writeLine( 'if ( result > 0xFF )' );
			outfile.writeLine( '	result = 0;' );
			setSignAndZero( outfile, 'result' );
			outfile.writeLine( 'var temp = cpu.regA - result - (cpu.getCarry() ? 0 : 1);' );
			writeOutCmosDependentSignAndZeroAndOverflowFlags( outfile, 'temp', 'result' );
			setCarrySubtract( outfile, 'temp' );
			outfile.writeLine( 'cpu.regA = temp & 0xFF;' );
		break;
		case "ALR":
			outfile.writeLine( 'cpu.regA &= ' + inputVariableName + ';' );
			outfile.writeLine( 'cpu.setCarry((cpu.regA & 0x01) > 0);' );
			outfile.writeLine( 'cpu.regA = ( cpu.regA >> 1 ) & 0xFF;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "ARR":
			outfile.writeLine( 'cpu.regA &= ' + inputVariableName + ' & 0xFF;' );
			outfile.writeLine( 'cpu.regA = ( ( cpu.regA >> 1 ) & 0xFF ) | ( cpu.getCarry() ? 0x80 : 0 );' );
			outfile.writeLine( 'cpu.setCarry( ( cpu.regA & 0x1 ) > 0 );' );
			setSignAndZero( outfile, 'cpu.regA' );

			outfile.writeLine( 'cpu.setOverflow( false );' );
			outfile.writeLine( 'cpu.setCarry( false )' );
			outfile.writeLine( 'switch ( cpu.regA & 0x60 )' );
			outfile.writeLine( '{' );
			outfile.writeLine( 'case 0x20: cpu.setOverflow( true ); break;' );
			outfile.writeLine( 'case 0x40: cpu.setOverflow( true );' );
			outfile.writeLine( 'cpu.setCarry( true ); break;' );
			outfile.writeLine( 'case 0x60: cpu.setCarry( true ); break;' );
			outfile.writeLine( '}' );
		break;
		case "XAA":
			outfile.writeLine( 'cpu.regA = cpu.regX & ' + inputVariableName + ';' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
		case "OAL":
			outfile.writeLine( 'cpu.regX = cpu.regA = ' + inputVariableName + ' & 0xFF;' );
			setSignAndZero( outfile, 'cpu.regA' );
		break;
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
		case "SAX":
			outfile.writeLine( 'var temp = ( cpu.regA & cpu.regX ) - ' + inputVariableName + ';' );
			outfile.writeLine( 'cpu.regX = temp & 0xFF;' );
			setCarrySubtract( outfile, 'temp' );
			setSignAndZero( outfile, 'temp' );
		break;
		case "NOP":
			incrementSubCycle( outfile );
		break;
		case "SKB":
		break;
		case "SKW":
		break;
		case "HLT":
			outfile.writeLine( 'var result = 0' );
			outfile.writeLine( 'console.log("illegal instruction HLT not implemented");' );
		break;
		case "TAS":
			outfile.writeLine( 'cpu.regS = cpu.regX & cpu.regA;' );
		break;
		case "SAY":
			outfile.writeLine( 'var result = cpu.regY & ( ( cpu.SAYHighByte + 1 ) & 0xFF );' );
		break;
		case "XAS":
			outfile.writeLine( 'var result = 0' );
			outfile.writeLine( 'console.log("illegal instruction XAS not implemented");' );
		break;
		case "AXA":
			// AND X register with accumulator then AND result with 7 and store in memory.
			outfile.writeLine( 'var result = ( cpu.regX & cpu.regA ) & 0x7;' );
		break;
		case "ANC":
			outfile.writeLine( 'cpu.regA &= ' + inputVariableName + ';' );
			setSignAndZero( outfile, 'cpu.regA' );
			outfile.writeLine( 'cpu.setCarry( cpu.getSign() );' );
		break;
		case "LAS":
			outfile.writeLine( 'var result = 0' );
			outfile.writeLine( 'console.log("illegal instruction LAS not implemented");' );
		break;
		default:
			throw new Error( "Invalid function type for instruction " + instruction.name );
	}
};


var writeOutOperationModeCode = function( outfile, instruction, storeFormatData ) {

	switch ( instruction.opmode ) {
		case "IMMEDIATE":
		case "NONE":
			writeOutActionCode( outfile, instruction );
			break;
		case "ACCUMULATOR":
			incrementSubCycle( outfile );
			writeOutActionCode( outfile, instruction );
			if ( debug ) {
				outfile.writeLine( "if ( typeof result !== 'number' ) { debugger; }" );
			}
			outfile.writeLine( 'cpu.regA = result & 0xFF;' );
			break;
		case "READ":
			incrementSubCycle( outfile );
			outfile.writeLine( 'var operationModeData = memory.read8( readInValue );' );
			if ( debug ) {
				outfile.writeLine( "if ( typeof operationModeData !== 'number' ) { debugger; }" );
			}
			if ( storeFormatData ) {
				outfile.writeLine( 'formatData.operationParam = operationModeData;' );
			}
			writeOutActionCode( outfile, instruction, 'operationModeData' );
			break;
		case "READ_MODIFY_WRITE":
			incrementSubCycle( outfile );
			outfile.writeLine( 'var operationModeData = memory.read8( readInValue );' );
			if ( debug ) {
				outfile.writeLine( "if ( typeof operationModeData !== 'number' ) { debugger; }" );
			}
			if ( storeFormatData ) {
				outfile.writeLine( 'formatData.operationParam = operationModeData;' );
			}
			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.write8( readInValue, operationModeData );' );
			writeOutActionCode( outfile, instruction, 'operationModeData' );
			if ( debug ) {
				outfile.writeLine( "if ( typeof result !== 'number' ) { debugger; }" );
			}
			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.write8( readInValue, result & 0xFF );' );
			break;
		case "WRITE":
			writeOutActionCode( outfile, instruction );
			if ( debug ) {
				outfile.writeLine( "if ( typeof result !== 'number' ) { debugger; }" );
			}
			incrementSubCycle( outfile );
			outfile.writeLine( 'memory.write8( readInValue, result );' );
			break;
		case "BRANCH":
			writeOutActionCode( outfile, instruction );
			outfile.writeLine( 'if ( branchTaken ) {' );
			incrementSubCycle( outfile ); // cycle for branch being taken
			outfile.writeLine( '	if ( ( ((cpu.getPC() + 2) & 0xff00 ) !== ( ((readInValue + 2) ) & 0xff00 ) ) ) {' );
			outfile.writeLine( '		cyclesTaken += ' + instruction.pagecycles );
			incrementSubCycle( outfile );
			outfile.writeLine( '	}' );
			outfile.writeLine( '	cyclesTaken += 1;' );
			incrementSubCycle( outfile ); // cycle for incrementing program counter
			outfile.writeLine( '	cpu.setPC( ( readInValue + ' + instruction.size + ' ) & 0xFFFF );' );
			outfile.writeLine( '} else {' );
			incrementSubCycle( outfile ); // cycle for read
			outfile.writeLine( '	memory.read8( ( cpu.getPC() + 1 ) & 0xFFFF );' );
			outfile.writeLine( '	cpu.setPC( ( cpu.getPC() + ' + instruction.size + ' ) & 0xFFFF );' );
			outfile.writeLine( '}' );
			break;
		default:
			throw new Error( "Invalid opmode for instruction " + instruction.name );
	}
};


var outputInstructionExecuteMethods = function( opcodeData, storeFormatData, useSwitchStatement, filename, exportName ) {

	var instructions = opcodeData.INSTRUCTIONS;
	var outfile = new OutputFile( filename );
	var postfix = storeFormatData ? "_TRACE" : "";

	outfile.writeLine( 'this.Nes = this.Nes || {};' );
	outfile.writeLine();
	outfile.writeLine( '// This file has been automatically generated by the cpuCoreBuilder.js tool');
	outfile.writeLine();
	outfile.writeLine( '"use strict";' );
	outfile.writeLine();
	if ( !useSwitchStatement ) {
		outfile.writeLine( 'var instructions' + postfix + ' = [];' );
	}
//	outfile.writeLine( 'var readInValue, address, cyclesTaken, result, branchTaken, temp, operationModeData;' );
	if ( storeFormatData ) {
		outfile.writeLine( 'var formatData = { programCounter: 0, opcode: 0, opcodeParam: 0, operationParam: 0, regs: {} };' );
	}
	if ( useSwitchStatement ) {
		outfile.writeLine( 'var executeCpuInstructionSwitch = function( opcode, cpu, memory ) {' );
		outfile.pushTab();
		outfile.writeLine( 'switch ( opcode ) {' );
	}
	outfile.writeLine();
	
	// build a function for each instruction
	for ( var instructionIndex=0; instructionIndex<instructions.length; ++instructionIndex ) {
		
		var instruction = instructions[ instructionIndex ];
		var functionName = instruction.name + "_" + instruction.addressingmode + "_" + instruction.code + postfix;
		
		if ( !useSwitchStatement ) {	
			outfile.writeLine( 'function ' + functionName + "( cpu, memory ) {" );
		} else {
			outfile.writeLine( 'case ' + instruction.code + ': { // ' + instruction.name + " " + instruction.addressingmode );
		}
		
		outfile.pushTab();
		
		outfile.writeLine( 'var cyclesTaken = ' + instruction.basecycles + ';' );
		
		if ( storeFormatData ) {
			outfile.writeLine( 'formatData.programCounter = cpu.getPC();' );
			outfile.writeLine( 'formatData.opcode = ' + instruction.code + ';' );
			outfile.writeLine( 'formatData.regs.a = cpu.regA;' );
			outfile.writeLine( 'formatData.regs.x = cpu.regX;' );
			outfile.writeLine( 'formatData.regs.y = cpu.regY;' );
			outfile.writeLine( 'formatData.regs.p = cpu.statusRegToByte();' );
			outfile.writeLine( 'formatData.regs.sp = cpu.regS;' );
		}

		// Do addressing mode first
		writeOutAddressingModeCode( outfile, instruction, storeFormatData );
		
		if ( instruction.addressingmode !== "RELATIVE" && instruction.code !== 0 ) // not a branch or BRK
			outfile.writeLine( "cpu.setPC( ( cpu.getPC() + " + instruction.size + " ) & 0xFFFF );" );
				
		// BIT optimisation: Warn the PPU that we are doing a BIT instruction.
		// This is so we can optimise 2002 loops that are waiting for vblank.
		if ( instruction.functiontype === "BIT" ) {
			outfile.writeLine( "if ( ( readInValue & 0xE007 ) === 0x2002 ) { cpu.mainboard.ppu.bitOperationHappening(); } // BIT 2002 optimisation" );
		}

		// then the operation
		writeOutOperationModeCode( outfile, instruction, storeFormatData );
		if ( debug ) {
			outfile.writeLine( 'if ( cyclesTaken !== cpu.subcycle+1 ) { debugger; }' );
		}

		outfile.writeLine( 'return cyclesTaken;' );
		
		outfile.popTab();
		outfile.writeLine( '};' );
		if ( useSwitchStatement ) {
			outfile.writeLine( 'break;' );
		}
		if ( !useSwitchStatement ) {
	//		outfile.writeLine( 'function ' + instruction.name + "_" + instruction.addressingmode + "_" + instruction.code + " {"
			outfile.writeLine( 'instructions' + postfix + '[ ' + instruction.code + ' ] = ' + functionName + ";" );
		}
	}
	
	if ( useSwitchStatement ) {
		outfile.writeLine( '};' ); // end of switch
		outfile.popTab();
		outfile.writeLine( '};' ); // end of function
		outfile.popTab();
		outfile.writeLine();
		outfile.writeLine( 'Nes.' + exportName + ' = executeCpuInstructionSwitch;' );
		if ( storeFormatData ) {
			outfile.writeLine( 'Nes.cpuTrace = formatData;' );
		}
	} else {
		outfile.writeLine();
		outfile.writeLine( 'Nes.' + exportName + ' = instructions' + postfix + ';' );
		if ( storeFormatData ) {
			outfile.writeLine( 'Nes.cpuTrace = formatData;' );
		}
	}
	outfile.writeLine();
	
	outfile.flush();
};



var outputTraceFormatMethods = function( opcodeData, filename ) {

	var instructions = opcodeData.INSTRUCTIONS;
	var outfile = new OutputFile( filename );
	
	// then build functions which formats a cpu instruction string for debugging purposes
	outfile.writeLine( 'this.Nes = this.Nes || {};' );
	outfile.writeLine();
	outfile.writeLine( '// This file has been automatically generated by the cpuCoreBuilder.js tool');
	outfile.writeLine();
	outfile.writeLine( '(function(){' );	
	outfile.pushTab();
	outfile.writeLine( '"use strict";' );
	outfile.writeLine();
	outfile.writeLine( 'var formatCpuTraceString = [];' );
	outfile.writeLine( 'var formatStr;' );
	
	for ( var instructionIndex=0; instructionIndex<instructions.length; ++instructionIndex ) {
	
		var instruction = instructions[ instructionIndex ];
		outfile.writeLine( 'formatCpuTraceString[ ' + instruction.code + ' ] = function( formatData ) { // ' + instruction.name + " " + instruction.addressingmode );
		outfile.pushTab();
		outfile.writeLine( 'formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " '  + instruction.name + ' ";' );  // program counter

		switch ( instruction.addressingmode ) {
		case "NONE":
			break;
		case "RELATIVE": // branching
			outfile.writeLine( 'formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );' );
			break;
		case "IMMEDIATE16":
			outfile.writeLine( 'formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 );' );
			break;
		case "ACCUMULATOR":
			break;
		case "IMMEDIATE":
			outfile.writeLine( 'formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );' );
			break;
		case "ZEROPAGE":
			outfile.writeLine( 'formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
			break;
		case "ZEROPAGEX":
			outfile.writeLine( 'formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
			break;
		case "ZEROPAGEY":
			outfile.writeLine( 'formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
		case "ABSOLUTE":
			outfile.writeLine( 'formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
			break;
		case "SAY":
		case "ABSOLUTEX":
			outfile.writeLine( 'formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
			break;
		case "ABSOLUTEY":
			outfile.writeLine( 'formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
			break;
		case "INDIRECT":
			outfile.writeLine( 'formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ") = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
			break;
		case "INDIRECTX":
			outfile.writeLine( 'formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
			break;
		case "INDIRECTY":
			outfile.writeLine( 'formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );' );
			break;
		default:
			throw new Error( "Invalid addressingmode for instruction " + instruction.name );
		}
		
		outfile.writeLine( 'while ( formatStr.length < 47 ) { formatStr += " "; }' );
		
		// cpu registers
		outfile.writeLine( 'formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );' );
		outfile.writeLine( 'formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );' );
		outfile.writeLine( 'formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );' );
		outfile.writeLine( 'formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );' );
		outfile.writeLine( 'formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );' );
		
		outfile.writeLine( 'return formatStr;' );
		outfile.popTab();
		outfile.writeLine( '};' );
	}
	outfile.writeLine();
	outfile.writeLine( 'Nes.formatCpuTraceString = formatCpuTraceString;' );
	outfile.popTab();
	outfile.writeLine( '}());' );
	outfile.writeLine();
	
	outfile.flush();
};


var start = function() {

	var opcodeData = JSON.parse( fs.readFileSync( opcodeJson ) );
	
	// Fast version - (chrome) no format data is outputted. Uses an array of functions to execute each instruction (large switch statements choke on chrome)
	outputInstructionExecuteMethods( opcodeData, false, false, 'cpu6502_instructions_fast.js', 'cpuInstructions' );
	
	// Fast version - (firefox). Large switch statement, no format data
	outputInstructionExecuteMethods( opcodeData, false, true, 'cpu6502_instructions_fast_switch.js', 'cpuInstructionsSwitch' );
	
	// Slow version - this is to allow for cpu traces
	outputInstructionExecuteMethods( opcodeData, true, false, 'cpu6502_instructions_trace.js', 'cpuInstructionsTrace' );
	
	// This takes the formatData object created by the trace version of the instructions and turns it into a string
	outputTraceFormatMethods( opcodeData, 'cpu6502_instructions_formatString.js' );
};


try {
	start();
}
catch( err ) {
	console.log( err );
	if ( err.stack ) {
		console.log( err.stack );
	}
	process.exit( 1 );
}

