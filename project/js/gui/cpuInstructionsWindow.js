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
	
	// var CpuInstructionsWindow = function( mainboard, divElement ) {
	
		// var that = this;
		// this._strArray = [];
		// this._dataArray = [];
		// this._element = document.createElement('textarea');
		// this._element.rows = 10;
		// this._element.cols = 40;
		// divElement.appendChild( this._element );
		// this._mainboard = mainboard;
		// this._mainboard.connect( 'reset', function() { that._reset(); } );
		// this._mainboard.cpu.setExecuteCallback( function( programCounter, instruction, instructionBytes, addressingModeArgs ) {
			// that._onCpuExecute( programCounter, instruction, instructionBytes, addressingModeArgs );
		// } );
	// };
	
	
	// CpuInstructionsWindow.prototype._reset = function() {
	
		// // run decompiler, display current position in window
		
	// };
	
	
	// CpuInstructionsWindow.prototype._onCpuExecute = function( programCounter, instruction, instructionBytes, addressingModeArgs ) {

		// // get next instruction details
		// var currentProgramCounter = this._mainboard.cpu.programCounter;
		// var nextOpCode = this._mainboard.memory.read8( currentProgramCounter );
		// var nextInstruction = Nes.getInstructionByOpcode( nextOpCode );
		
		// // is next instruction break pointed?
		// if ( this._mainboard.cpu.isRunning ) {
			// this._mainboard.cpu.breakPoint( false );
		// }
	
	// //	this._addData( [ programCounter, instruction, instructionBytes, addressingModeArgs ] );

		// //if ( !instruction.legal ) {
		// //	this._onTextRefresh( true );
		// //	debugger;
		// //}
		
		// // if ( instruction.name === "BRK" ) {
		// // //	this._onTextRefresh( true );
			// // debugger;
		// // }
	// };
	
	
	// Nes.CpuInstructionsWindow = CpuInstructionsWindow;

}());
