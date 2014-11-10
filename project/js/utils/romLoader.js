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
	
	var decompressIfNecessary = function( name, binaryString, completeCallback ) {

		if ( name.match( /\.zip$/i ) ) {
			// zip - decompress using jszip lib
			var zip = new JSZip( binaryString );
			var findArray = zip.file( /\.nes$/i );
			if ( findArray.length === 0 ) {
				throw new Error( "Could not find .nes file in zip file " + name );
			}
			completeCallback( null, findArray[0].asUint8Array() );
		} else if ( name.match( /\.7z$/i ) ) {
			// 7z - attempt to use lzma lib if it's compressed using LZMA
			Nes.decompress7z( name, binaryString, completeCallback );
		} else if ( name.match( /\.gz$/i ) ) {
			// gzip - use jsziptools lib
			var result = jz.gz.decompress( binaryString );
			completeCallback( null, result );
		} else if ( name.match( /\.nes$/i ) ) {
			// uncompressed file
			completeCallback( null, binaryString );
		} else {
			throw new Error( "Unsupported file extension for file " + name );
		}
	};
	
		
	var getRomNameFromUrl = function( url ) {
	
		var slashIndex = url.lastIndexOf( '/' );
		if ( slashIndex >= 0 ) {
			return url.slice( slashIndex + 1 );
		}
		return url;
	};
	
	
	var loadRomFromUrl = function( url, callback ) {
		
		// Load using a bog standard XHR request as then we can load as binary
		var that = this;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'arraybuffer';
		xhr.overrideMimeType("application/octet-stream");
		xhr.onerror = function( err ) {
			callback( err );
		};
		xhr.onload = function(err) {
			if ( xhr.status === 200 ) {
				var binaryString = new Uint8Array( this.response );
				callback( null, getRomNameFromUrl( url ), binaryString );
			} else {
				callback( "Error loading rom file from URL: '" + url + "' HTTP code: " + xhr.status );
			}
		};

		xhr.send();
	};

	
	Nes.decompressIfNecessary = decompressIfNecessary;
	Nes.loadRomFromUrl = loadRomFromUrl;

}());
