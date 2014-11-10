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


var calculateSha1 = function( binaryArray, startIndex ) {

	try {
		startIndex = startIndex || 0;
		var r = new Rusha( binaryArray.length - startIndex );
		// Using a subarray doesn't work. Need to copy contents into a new array (bit shit but it works)
	//	var sha1 = r.digestFromArrayBuffer( binaryArray.subarray( startIndex ).buffer ).toUpperCase();
		var buf = [];
		for ( var i=startIndex; i<binaryArray.length; ++i ) {
			buf.push( binaryArray[i] );
		}
		var sha1 = r.digestFromBuffer( buf ).toUpperCase();
		while ( sha1.length < 40 ) {
			sha1 = '0' + sha1;
		}
		return sha1;
	}
	catch ( err ) {
		console.error( err );
		console.log( err.stack );
	}
};

Nes.calculateSha1 = calculateSha1;



var dbLookup = function( shaString, callback ) {

	if ( shaString.length !== 40 ) {
		throw new Error( "dbLookup : SHA1 must be 40 characters long! [" + shaString + "]" );
	}

	var path = 'js/db/' + shaString + '.js';
	var data;
	$.getScript( path ).always(function() {
		callback( null, window['NesDb'] ? window['NesDb'][ shaString ] : null );
	} );
};


Nes.dbLookup = dbLookup;

