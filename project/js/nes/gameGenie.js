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


var codes = {
	'A': 0x00, // 0000
	'P': 0x01, // 0001
	'Z': 0x02, // 0010
	'L': 0x03, // 0011
	'G': 0x04, // 0100
	'I': 0x05, // 0101
	'T': 0x06, // 0110
	'Y': 0x07, // 0111
	'E': 0x08, // 1000
	'O': 0x09, // 1001
	'X': 0x0A, // 1010
	'U': 0x0B, // 1011
	'K': 0x0C, // 1100
	'S': 0x0D, // 1101
	'V': 0x0E, // 1110
	'N': 0x0F // 1111
};

var ggcodeArray = new Int32Array( 8 );


var stringToCodeArray = function( codeString ) {

	for ( var i=0; i<codeString.length; ++i ) {
		var code = codes[ codeString[ i ] ];
		if ( code === undefined ) {
			throw new Error( "Invalid character in game genie code" );
		}
		ggcodeArray[i] = code;
	}
	return ggcodeArray;
};


var processGameGenieCode = function( mainboard, codeString, enable ) {

	if ( codeString.length !== 6 && codeString.length !== 8 ) {
		throw new Error( "Invalid game genie code entered '" + codeString + "'" );
	}
	
	if ( enable ) {
		var code = stringToCodeArray( codeString );
		
		// Char # |   0   |   1   |   2   |   3   |   4   |   5   |
		// Bit  # |3|2|1|0|3|2|1|0|3|2|1|0|3|2|1|0|3|2|1|0|3|2|1|0|
		// maps to|1|6|7|8|H|2|3|4|-|I|J|K|L|A|B|C|D|M|N|O|5|E|F|G|
		if ( codeString.length === 6 ) {
			var value = ( code[0] & 0x7 ); // 678
			value |= ( code[5] & 0x8 ) // 5
			value |= ( code[1] & 0x7 ) << 4; // 234
			value |= ( code[0] & 0x8 ) << 4; // 1
			
			var address = ( code[4] & 0x7 ); // MNO
			address |= ( code[3] & 0x8 ); // L
			address |= ( code[2] & 0x7 ) << 4; // IJK
			address |= ( code[1] & 0x8 ) << 4; // H
			address |= ( code[5] & 0x7 ) << 8; // EFG
			address |= ( code[4] & 0x8 ) << 8; // D
			address |= ( code[3] & 0x7 ) << 12; // ABC
			
			mainboard.cart.memoryMapper.gameGeniePoke( codeString, address + 0x8000, value, -1 );
			
		} else if ( codeString.length === 8 ) {
			// Note: Similar to 6 character code but '5' is in different place
			// Char # |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |	
			// Bit  # |3|2|1|0|3|2|1|0|3|2|1|0|3|2|1|0|3|2|1|0|3|2|1|0|3|2|1|0|3|2|1|0|
			// maps to|1|6|7|8|H|2|3|4|-|I|J|K|L|A|B|C|D|M|N|O|%|E|F|G|!|^|&|*|5|@|#|$|
			// compareValue = !@#$%^&*
			var value = ( code[0] & 0x7 ); // 678
			value |= ( code[7] & 0x8 ) // 5
			value |= ( code[1] & 0x7 ) << 4; // 234
			value |= ( code[0] & 0x8 ) << 4; // 1
			
			var address = ( code[4] & 0x7 ); // MNO
			address |= ( code[3] & 0x8 ); // L
			address |= ( code[2] & 0x7 ) << 4; // IJK
			address |= ( code[1] & 0x8 ) << 4; // H
			address |= ( code[5] & 0x7 ) << 8; // EFG
			address |= ( code[4] & 0x8 ) << 8; // D
			address |= ( code[3] & 0x7 ) << 12; // ABC
			
			var compareValue = ( code[6] & 0x7 ); // ^&*
			compareValue |= ( code[5] & 0x8 ); // %
			compareValue |= ( code[7] & 0x7 ) << 4; // @#$
			compareValue |= ( code[6] & 0x8 ) << 4; // !
			
			// It then checks the value to be replaced with the compare
			// value, if they are the same it replaces the original value with the new
			// value if not the value remains the same.
			mainboard.cart.memoryMapper.gameGeniePoke( codeString, address + 0x8000, value, compareValue );
		}
	} else {
		mainboard.cart.memoryMapper.removeGameGeniePoke( codeString );
	}
};


Nes.processGameGenieCode = processGameGenieCode;

