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

var PPU_TICKS_PER_SCANLINE = 341;
var MASTER_CYCLES_PER_PPU = 5;
var MASTER_CYCLES_PER_SCANLINE = PPU_TICKS_PER_SCANLINE * MASTER_CYCLES_PER_PPU;

var CPU_RESET_ADDRESS = 0xFFFC;
var CPU_IRQ_ADDRESS = 0xFFFE;
var CPU_NMI_ADDRESS = 0xFFFA;

var SCREEN_WIDTH = 256;
var SCREEN_HEIGHT = 240;

	
var IS_INT_BETWEEN = function( offset, min, max ) {
	return min <= offset && offset < max;
};


var ZERO_PAD = function(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};


var ZERO_PAD_HEX = function(n, width, z) {
	return ZERO_PAD( n.toString( 16 ), width, z );
};

var g_DefaultColourEncoding = 'NTSC';

var COLOUR_ENCODING_NAME = "";
var COLOUR_ENCODING_REFRESHRATE = 0.0;
var COLOUR_ENCODING_MTC_PER_CPU = 0;
var COLOUR_ENCODING_VBLANK_SCANLINES = 0;
var COLOUR_ENCODING_FRAME_SCANLINES = 0;
var COLOUR_ENCODING_VBLANK_MTC = 0;
var COLOUR_ENCODING_FRAME_MTC = 0;


var setColourEncodingType = function( name ) {

	if ( name === 'PAL' ) {
		COLOUR_ENCODING_NAME = "PAL";
		COLOUR_ENCODING_REFRESHRATE = 50.0;
		COLOUR_ENCODING_MTC_PER_CPU = 16;
		COLOUR_ENCODING_VBLANK_SCANLINES = 70;
		COLOUR_ENCODING_FRAME_SCANLINES = 312;
	} else {
		COLOUR_ENCODING_NAME = "NTSC";
		COLOUR_ENCODING_REFRESHRATE = 60.1;
		COLOUR_ENCODING_MTC_PER_CPU = 15;
		COLOUR_ENCODING_VBLANK_SCANLINES = 20;
		COLOUR_ENCODING_FRAME_SCANLINES = 262;
	}
	
	COLOUR_ENCODING_VBLANK_MTC = COLOUR_ENCODING_VBLANK_SCANLINES * MASTER_CYCLES_PER_SCANLINE;
	COLOUR_ENCODING_FRAME_MTC = COLOUR_ENCODING_FRAME_SCANLINES * MASTER_CYCLES_PER_SCANLINE;
};


setColourEncodingType( g_DefaultColourEncoding );

var PPU_MIRRORING_HORIZONTAL = 0;
var PPU_MIRRORING_VERTICAL = 1;
var PPU_MIRRORING_FOURSCREEN = 2;
var PPU_MIRRORING_SINGLESCREEN_NT0 = 3;
var PPU_MIRRORING_SINGLESCREEN_NT1 = 4;


Nes.mirroringMethodToString = function( method ) {
	switch ( method ) {
		case PPU_MIRRORING_HORIZONTAL: // default
			return 'horizontal';
		case PPU_MIRRORING_VERTICAL:
			return 'vertical';
		case PPU_MIRRORING_FOURSCREEN:
			return 'fourscreen';
		case PPU_MIRRORING_SINGLESCREEN_NT0:
			return 'singlescreen 0';
		case PPU_MIRRORING_SINGLESCREEN_NT1:
			return 'singlescreen 1';
	}
	return '';
};


var JOYPAD_A = 0;
var JOYPAD_B = 1;
var JOYPAD_SELECT = 2;
var JOYPAD_START = 3;
var JOYPAD_UP = 4;
var JOYPAD_DOWN = 5;
var JOYPAD_LEFT = 6;
var JOYPAD_RIGHT = 7;

var JOYPAD_NAME_TO_ID = function( name ) {
	if ( name === 'UP' ) { return JOYPAD_UP; }
	else if ( name === 'DOWN' ) { return JOYPAD_DOWN; }
	else if ( name === 'LEFT' ) { return JOYPAD_LEFT; }
	else if ( name === 'RIGHT' ) { return JOYPAD_RIGHT; }
	else if ( name === 'A' ) { return JOYPAD_A; }
	else if ( name === 'B' ) { return JOYPAD_B; }
	else if ( name === 'SELECT' ) { return JOYPAD_SELECT; }
	else if ( name === 'START' ) { return JOYPAD_START; }
	else { throw new Error( "JOYPAD_NAME_TO_ID: Invalid parameter" ); }
};


var JOYPAD_ID_TO_NAME = function( id ) {
	if ( id === JOYPAD_UP ) { return 'UP'; }
	else if ( id === JOYPAD_DOWN ) { return 'DOWN'; }
	else if ( id === JOYPAD_LEFT ) { return 'LEFT'; }
	else if ( id === JOYPAD_RIGHT ) { return 'RIGHT'; }
	else if ( id === JOYPAD_A ) { return 'A'; }
	else if ( id === JOYPAD_B ) { return 'B'; }
	else if ( id === JOYPAD_SELECT ) { return 'SELECT'; }
	else if ( id === JOYPAD_START ) { return 'START'; }
	else { throw new Error( "JOYPAD_ID_TO_NAME: Invalid parameter " + id ); }
};


