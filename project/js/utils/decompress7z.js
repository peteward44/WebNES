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
	
	var decompress7z = function( name, binaryString, completeCallback ) {

		// If lzma_worker.js is in the same directory, you don't need to set the path.
		var my_lzma = new LZMA( /*"../src/lzma_worker.js"*/ );
		
		my_lzma.decompress( binaryString,
			function( decompressedData ) {
				completeCallback( null, decompressedData );
			},
			function( progressPercent ) {
				if ( progressPercent < 0 ) {
					completeCallback( 'Error decompressing 7z' );
				}
			} );
	};

	
	Nes.decompress7z = decompress7z;

}());
