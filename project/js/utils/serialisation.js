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
	
	var uintArrayToString = function( uintArray ) {

		if ( !( uintArray instanceof Int32Array ) ) {
			throw new Error( 'Nes.uintArrayToString: Only accepts Int32Array parameter' );
		}
		var str = '';
		for ( var i=0, strLen = uintArray.length; i<strLen; i++ ) {
			var saveValue = uintArray[i];
			if ( saveValue > 0xFFFF ) {
				throw new Error( "Invalid value attempted to be serialised" );
			}
			str += String.fromCharCode( saveValue );
		}
		return str;
	};

	
	var stringToUintArray = function( str ) {

		var buf = new Int32Array( str.length );
		for ( var i=0, strLen = str.length; i<strLen; i++ ) {
			buf[i] = str.charCodeAt(i) | 0;
		}
		return buf;
	};
	
	
	Nes.uintArrayToString = uintArrayToString;
	Nes.stringToUintArray = stringToUintArray;
	
	
	var blobToString = function( blob ) {
	
		var url = window.webkitURL || window.URL;
		return url.createObjectURL(blob);
	};
	
	
	Nes.blobToString = blobToString;

}());
