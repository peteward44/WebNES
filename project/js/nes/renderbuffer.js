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


///////////////////////////////////////////////////////////////////////////////////////
var g_ClearScreenArray = new Int32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
for ( var ii=0; ii<g_ClearScreenArray.length; ++ii ) {
	g_ClearScreenArray[ ii ] = 0;
}


var renderbuffer = function( mainboard, renderSurface ) {
		
	this._mainboard = mainboard;
	this._renderSurface = renderSurface;
	// this.defaultPalette = [
		// [ 0x80,0x80,0x80 ], [ 0x00,0x3D,0xA6 ], [ 0x00,0x12,0xB0 ], [ 0x44,0x00,0x96 ],
		// [ 0xA1,0x00,0x5E ], [ 0xC7,0x00,0x28 ], [ 0xBA,0x06,0x00 ], [ 0x8C,0x17,0x00 ],
		// [ 0x5C,0x2F,0x00 ], [ 0x10,0x45,0x00 ], [ 0x05,0x4A,0x00 ], [ 0x00,0x47,0x2E ],
		// [ 0x00,0x41,0x66 ], [ 0x00,0x00,0x00 ], [ 0x05,0x05,0x05 ], [ 0x05,0x05,0x05 ],
		// [ 0xC7,0xC7,0xC7 ], [ 0x00,0x77,0xFF ], [ 0x21,0x55,0xFF ], [ 0x82,0x37,0xFA ],
		// [ 0xEB,0x2F,0xB5 ], [ 0xFF,0x29,0x50 ], [ 0xFF,0x22,0x00 ], [ 0xD6,0x32,0x00 ],
		// [ 0xC4,0x62,0x00 ], [ 0x35,0x80,0x00 ], [ 0x05,0x8F,0x00 ], [ 0x00,0x8A,0x55 ],
		// [ 0x00,0x99,0xCC ], [ 0x21,0x21,0x21 ], [ 0x09,0x09,0x09 ], [ 0x09,0x09,0x09 ],
		// [ 0xFF,0xFF,0xFF ], [ 0x0F,0xD7,0xFF ], [ 0x69,0xA2,0xFF ], [ 0xD4,0x80,0xFF ],
		// [ 0xFF,0x45,0xF3 ], [ 0xFF,0x61,0x8B ], [ 0xFF,0x88,0x33 ], [ 0xFF,0x9C,0x12 ],
		// [ 0xFA,0xBC,0x20 ], [ 0x9F,0xE3,0x0E ], [ 0x2B,0xF0,0x35 ], [ 0x0C,0xF0,0xA4 ],
		// [ 0x05,0xFB,0xFF ], [ 0x5E,0x5E,0x5E ], [ 0x0D,0x0D,0x0D ], [ 0x0D,0x0D,0x0D ],
		// [ 0xFF,0xFF,0xFF ], [ 0xA6,0xFC,0xFF ], [ 0xB3,0xEC,0xFF ], [ 0xDA,0xAB,0xEB ],
		// [ 0xFF,0xA8,0xF9 ], [ 0xFF,0xAB,0xB3 ], [ 0xFF,0xD2,0xB0 ], [ 0xFF,0xEF,0xA6 ],
		// [ 0xFF,0xF7,0x9C ], [ 0xD7,0xE8,0x95 ], [ 0xA6,0xED,0xAF ], [ 0xA2,0xF2,0xDA ],
		// [ 0x99,0xFF,0xFC ], [ 0xDD,0xDD,0xDD ], [ 0x11,0x11,0x11 ], [ 0x11,0x11,0x11 ]
	// ];
	
	var paletteArray = [ 0x808080, 0xA63D00, 0xB01200, 0x960044,
		0x5E00A1, 0x2800C7, 0x0006BA, 0x00178C,
		0x002F5C, 0x004510, 0x004A05, 0x2E4700,
		0x664100, 0x000000, 0x050505, 0x050505,
		0xC7C7C7, 0xFF7700, 0xFF5521, 0xFA3782,
		0xB52FEB, 0x5029FF, 0x0022FF, 0x0032D6,
		0x0062C4, 0x008035, 0x008F05, 0x558A00,
		0xCC9900, 0x212121, 0x090909, 0x090909,
		0xFFFFFF, 0xFFD70F, 0xFFA269, 0xFF80D4,
		0xF345FF, 0x8B61FF, 0x3388FF, 0x129CFF,
		0x20BCFA, 0x0EE39F, 0x35F02B, 0xA4F00C,
		0xFFFB05, 0x5E5E5E, 0x0D0D0D, 0x0D0D0D,
		0xFFFFFF, 0xFFFCA6, 0xFFECB3, 0xEBABDA,
		0xF9A8FF, 0xB3ABFF, 0xB0D2FF, 0xA6EFFF,
		0x9CF7FF, 0x95E8D7, 0xAFEDA6, 0xDAF2A2,
		0xFCFF99, 0xDDDDDD, 0x111111, 0x111111,
		0x000000 ];
	
	this.defaultPalette32BitVals = new Uint32Array( paletteArray.length );
	// var paletteArray = [ 0xFF808080, 0xFFA63D00, 0xFFB01200, 0xFF960044,
		// 0xFF5E00A1, 0xFF2800C7, 0xFF0006BA, 0xFF00178C,
		// 0xFF002F5C, 0xFF004510, 0xFF004A05, 0xFF2E4700,
		// 0xFF664100, 0xFF000000, 0xFF050505, 0xFF050505,
		// 0xFFC7C7C7, 0xFFFF7700, 0xFFFF5521, 0xFFFA3782,
		// 0xFFB52FEB, 0xFF5029FF, 0xFF0022FF, 0xFF0032D6,
		// 0xFF0062C4, 0xFF008035, 0xFF008F05, 0xFF558A00,
		// 0xFFCC9900, 0xFF212121, 0xFF090909, 0xFF090909,
		// 0xFFFFFFFF, 0xFFFFD70F, 0xFFFFA269, 0xFFFF80D4,
		// 0xFFF345FF, 0xFF8B61FF, 0xFF3388FF, 0xFF129CFF,
		// 0xFF20BCFA, 0xFF0EE39F, 0xFF35F02B, 0xFFA4F00C,
		// 0xFFFFFB05, 0xFF5E5E5E, 0xFF0D0D0D, 0xFF0D0D0D,
		// 0xFFFFFFFF, 0xFFFFFCA6, 0xFFFFECB3, 0xFFEBABDA,
		// 0xFFF9A8FF, 0xFFB3ABFF, 0xFFB0D2FF, 0xFFA6EFFF,
		// 0xFF9CF7FF, 0xFF95E8D7, 0xFFAFEDA6, 0xFFDAF2A2,
		// 0xFFFCFF99, 0xFFDDDDDD, 0xFF111111, 0xFF111111,
		// 0xFF000000 ]; // last value is tacked on for default black value - put in this array so the variable type is consistent and can be optimised better

	for ( var i=0; i<paletteArray.length; ++i ) {
		this.defaultPalette32BitVals[i] = paletteArray[i];
	}
	
	var that = this;
	this._clipTopAndBottomY = false;
	this._mainboard.connect( 'reset', function( cold ) { that._reset( cold ); } );
	this.priorityBuffer = new Int32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
	this.clearBuffer();
};


renderbuffer.prototype._reset = function( cold ) {

	this._clipTopAndBottomY = COLOUR_ENCODING_NAME === "NTSC";
};


renderbuffer.prototype.clearBuffer = function() {

	this.priorityBuffer.set( g_ClearScreenArray );
};

renderbuffer.prototype.pickColour = function( paletteIndex ) {

	var pindex = 0;
	if ( paletteIndex < 64 ) {
		pindex = paletteIndex;
	} else {
		pindex = 64;
	}
	return TYPED_ARRAY_GET_UINT32( this.defaultPalette32BitVals, pindex );
};

renderbuffer.prototype._renderPixel = function( bufferIndex, insertIndex, y, paletteIndex ) {

	if ( this._clipTopAndBottomY && ( y < 8 || y > 231 ) ) {
		return;
	}
	
	var colour = this.pickColour( paletteIndex|0 );
	this._renderSurface.writeToBuffer( bufferIndex, insertIndex, colour );
};


renderbuffer.prototype.renderSpritePixelDebug = function( spritenum, x, y ) {

	//this._renderSurface.writeToBuffer( 2, x, y, 0xFFE92BFF );
};


renderbuffer.prototype.renderSpritePixel = function( spritenum, isBehind, x, y, paletteIndex ) {
	var index = y*SCREEN_WIDTH + x;
	var bufferIndex = isBehind ? 0 : 2;
	if ( TYPED_ARRAY_GET_INT32( this.priorityBuffer, index ) === 0 ) {
		TYPED_ARRAY_SET_INT32( this.priorityBuffer, index, spritenum + 1 );
		this._renderPixel( bufferIndex, index, y, paletteIndex );	
	}
};	


renderbuffer.prototype.renderPixel = function( x, y, paletteIndex ) {
	var hitzero = false;
	var index = y*SCREEN_WIDTH + x;
	if ( TYPED_ARRAY_GET_INT32( this.priorityBuffer, index ) === 1 && x < (SCREEN_WIDTH-1) ) {
		hitzero = true;
	}
	this._renderPixel( 1, index, y, paletteIndex );
	return hitzero;
};


renderbuffer.prototype.saveState = function() {
	
	return { priorityBuffer: Nes.uintArrayToString( this.priorityBuffer ) };
};


renderbuffer.prototype.loadState = function( state ) {
	
	this.priorityBuffer = Nes.stringToUintArray( state.priorityBuffer );
};
	

Nes.renderbuffer = renderbuffer;
