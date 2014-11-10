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


"use strict";


function ASSERT_NUMBER( num ) {
	if ( ( typeof num !== 'number' ) || isNaN( num ) || !isFinite( num ) ) {
		throw new Error( "ASSERT_NUMBER: Invalid parameter" );
	}
};


function TYPED_ARRAY_GET_UINT32( array, offset ) {
	
	if ( !( array instanceof Uint32Array ) || ( typeof offset !== 'number' ) ) {
		throw new Error( "Invalid parameter" );
	}
	if ( offset < 0 || offset >= array.length ) {
		throw new Error( "Out of bounds" );
	}
	return array[ offset ];
};


function TYPED_ARRAY_GET_INT32( array, offset ) {
	
	if ( !( array instanceof Int32Array ) || ( typeof offset !== 'number' ) ) {
		throw new Error( "Invalid parameter" );
	}
	if ( offset < 0 || offset >= array.length ) {
		throw new Error( "Out of bounds" );
	}
	return array[ offset ];
};


function TYPED_ARRAY_SET_UINT32( array, offset, data ) {
	
	if ( !( array instanceof Uint32Array ) || ( typeof offset !== 'number' ) || ( typeof data !== 'number' ) ) {
		throw new Error( "Invalid parameter" );
	}
	if ( offset < 0 || offset >= array.length ) {
		throw new Error( "Out of bounds" );
	}
	array[ offset ] = data;
};


function TYPED_ARRAY_SET_INT32( array, offset, data ) {
	
	if ( !( array instanceof Int32Array ) || ( typeof offset !== 'number' ) || ( typeof data !== 'number' ) ) {
		throw new Error( "Invalid parameter" );
	}
	if ( offset < 0 || offset >= array.length ) {
		throw new Error( "Out of bounds" );
	}
	array[ offset ] = data;
};

