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

/* Estimated number of games with mapper (other mappers had <10 games)
Mapper 004: 569
Mapper 001: 481
Mapper 000: 260
Mapper 002: 200
Mapper 003: 145
Mapper 007: 56
Mapper 011: 35
Mapper 019: 32
Mapper 016: 26
Mapper 099: 25
Mapper 005: 24
Mapper 018: 16
Mapper 066: 16
Mapper 033: 15
Mapper 079: 15
Mapper 045: 14
Mapper 071: 14
Mapper 113: 12
Mapper 245: 11
Mapper 023: 11
Mapper 069: 11 
*/

Nes.mappers = {};
	
"use strict";


var basemapper = function() {
};


basemapper.prototype.construct = function( mainboard, mirroringMethod ) {

	this.mainboard = mainboard;
	this.mirroringMethod = mirroringMethod;
	this.prgPagesMap = new Int32Array( 4 );
	this._prgData = null;
	this._prgPageCount = 0;
	
	this.chrPages = [];
	this.chrPagesMap = new Int32Array( 8 );
	this._chrData = null;
	this._chrPageCount = 0;
	this._usingChrVram = false;
	
	this._gameGenieActive = false;
	this._gameGeniePokes = {};
	
	this.sram = new Int32Array( 0x2000 );
	this.expansionRam = new Int32Array( 0x1FE0 );
};


basemapper.prototype.onEndFrame = function() {
};


basemapper.prototype.getNextEvent = function() {
	return -1;
};


basemapper.prototype.synchronise = function( startTicks, endTicks ) {
};

// MMC3 specific functions
basemapper.prototype.spriteScreenEnabledUpdate = function( spriteEnabled, screenEnabled ) { };
basemapper.prototype.renderingEnabledChanged = function( enabled ) { };


basemapper.prototype.setPrgData = function( array, prg8kPageCount ) {

	this._prgData = array;
	this._prgPageCount = prg8kPageCount;
};


basemapper.prototype.setChrData = function( array, chr1kPageCount ) {

	this._chrData = array;
	this._chrPageCount = chr1kPageCount;
};


////// PRG switching


basemapper.prototype.get1kChrBankCount = function() {
	return this._chrPageCount;
};


basemapper.prototype.get2kChrBankCount = function() {
	return this._chrPageCount >> 1; // Math.floor( this.chrPages.length / 2 );
};


basemapper.prototype.get4kChrBankCount = function() {
	return this._chrPageCount >> 2; // Math.floor( this.chrPages.length / 4 );
};


basemapper.prototype.get8kChrBankCount = function() {
	return this._chrPageCount >> 3; // Math.floor( this.chrPages.length / 8 );
};


basemapper.prototype.get8kPrgBankCount = function() {
	return this._prgPageCount;
};


basemapper.prototype.get16kPrgBankCount = function() {
	return this._prgPageCount >> 1; // Math.floor( this.prgPages.length / 2 );
};


basemapper.prototype.get32kPrgBankCount = function() {
	return this._prgPageCount >> 2; // Math.floor( this.prgPages.length / 4 );
};


basemapper.prototype.switch8kPrgBank = function( id, pos ) {
	//Nes.Trace.writeLine( 'mapper', 'switch8kPrgBank:' + id );
	this.setPrgPage( id % this._prgPageCount, pos );
};


basemapper.prototype.switch16kPrgBank = function( id, low ) {
	if ( this.get16kPrgBankCount() > 0 )
	{
		//Nes.Trace.writeLine( 'mapper', 'switch16kPrgBank:' + id );
		var aid = ( id * 2 ) % this._prgPageCount;
		for ( var i=0; i<2; ++i )
			this.setPrgPage( aid + i, i + (low ? 0 : 2) );
	}
};


basemapper.prototype.switch32kPrgBank = function( id ) {
	if ( this.get32kPrgBankCount() > 0 )
	{
		//Nes.Trace.writeLine( 'mapper', 'switch32kPrgBank:' + id );
		var aid = ( id * 4 ) % this._prgPageCount;
		for ( var i=0; i<4; ++i )
			this.setPrgPage( aid + i, i );
	}
};


basemapper.prototype.setPrgPage = function( id, pos ) {
	if ( TYPED_ARRAY_GET_INT32( this.prgPagesMap, pos ) !== id ) {
		TYPED_ARRAY_SET_INT32( this.prgPagesMap, pos, id * 0x2000 );
	}
};


basemapper.prototype.setChrPage = function( id, pos ) {
	TYPED_ARRAY_SET_INT32( this.chrPagesMap, pos, id * 0x400 );
};


basemapper.prototype.switch1kChrBank = function( id, pos ) {
	this.setChrPage( id % this._chrPageCount, pos );
};


basemapper.prototype.switch2kChrBank = function( id, pos ) {
	if ( this.get2kChrBankCount() > 0 )
	{
		var aid = ( id * 2 ) % this._chrPageCount;
		for ( var i=0; i<2; ++i )
			this.setChrPage( aid + i, ( pos * 2 ) + i );
	}
};


basemapper.prototype.switch4kChrBank = function( id, low ) {
	if ( this.get4kChrBankCount() > 0 )
	{
		var aid = ( id * 4 ) % this._chrPageCount;
		for ( var i=0; i<4; ++i )
			this.setChrPage( aid + i, i + (low ? 0 : 4) );
	}
};


basemapper.prototype.switch8kChrBank = function( id ) {
	if ( this.get8kChrBankCount() > 0 )
	{
		var aid = ( id * 8 ) % this._chrPageCount;
		for ( var i=0; i<8; ++i )
			this.setChrPage( aid + i, i );
	}
};


basemapper.prototype.useVRAM = function( numBanks ) {
	
	numBanks = numBanks || 8;
	this._usingChrVram = true;
	this._chrData = new Int32Array( 0x400 * numBanks );

	this._chrPageCount = numBanks;
	for ( var i=0; i< Math.min( 8, numBanks ); ++i ) {
		this.setChrPage( i, i );
	}
};


// 0x8000 -> 0xFFFF
basemapper.prototype.write8PrgRom = function( offset, data ) {
};


basemapper.prototype.read8PrgRom = function( offset ) {
	
	var pageid = ( offset & 0x6000 ) >> 13; // Math.floor( ( prgOffset ) / 0x2000 );
	var pagepos = TYPED_ARRAY_GET_INT32( this.prgPagesMap, pageid );
	var aid = offset & 0x1FFF;
	var readValue = TYPED_ARRAY_GET_INT32( this._prgData, pagepos + aid );

	if ( this._gameGenieActive ) {
		if ( this._gameGeniePokes.hasOwnProperty( offset ) ) {
			return this._checkGameGenieCode( readValue, offset );
		}
	}
	return readValue;
};


basemapper.prototype._checkGameGenieCode = function( readValue, offset ) {	
	// Game genie override
	var gg = this._gameGeniePokes[ offset ];
	if ( gg.compare === -1 || gg.compare === readValue ) {
		return gg.value;
	}
	return readValue | 0;
};


// VRAM 0x0000 -> 0x2000
basemapper.prototype.write8ChrRom = function( offset, data ) {
	if ( this._usingChrVram ) {
		var pageid = ( offset & 0x1C00 ) >> 10; // Math.floor( offset / 0x400 );
		var pagepos = TYPED_ARRAY_GET_INT32( this.chrPagesMap, pageid );
		var writeOffset = pagepos + ( offset & 0x3FF );
		TYPED_ARRAY_SET_INT32( this._chrData, writeOffset, data );
	}
};


basemapper.prototype.read8ChrRom = function( offset, renderingSprites, readType ) {
	var pageid = ( offset & 0x1C00 ) >> 10; // Math.floor( offset / 0x400 );
	var pagepos = TYPED_ARRAY_GET_INT32( this.chrPagesMap, pageid );
	var readOffset = pagepos + ( offset & 0x3FF );
	return TYPED_ARRAY_GET_INT32( this._chrData, readOffset ) | 0;
};


basemapper.prototype.write8SRam = function( offset, data ) {
	TYPED_ARRAY_SET_INT32( this.sram, offset & 0x1FFF, data );
};


basemapper.prototype.read8SRam = function( offset ) {
	return TYPED_ARRAY_GET_INT32( this.sram, offset & 0x1FFF ) | 0;
};


basemapper.prototype.write8EXRam = function( offset, data ) {
	TYPED_ARRAY_SET_INT32( this.expansionRam, offset - 0x4020, data );
};


basemapper.prototype.read8EXRam = function( offset ) {
	return TYPED_ARRAY_GET_INT32( this.expansionRam, offset - 0x4020 ) | 0;
};


basemapper.prototype.reset = function() {
};


// Called from gameGenie.js - modified the PRG at given value
basemapper.prototype.gameGeniePoke = function( codeName, address, value, compareValue ) {

	this._gameGenieActive = true;
	this._gameGeniePokes[ address ] = { name: codeName, value: value, compare: compareValue };
};

basemapper.prototype.removeGameGeniePoke = function( codeName ) {
	
	var keyArray = Object.keys( this._gameGeniePokes );
	for ( var i=0; i<keyArray.length; ++i ) {
		var prop = keyArray[i];
		if ( this._gameGeniePokes.hasOwnProperty( prop ) ) {
			var gg = this._gameGeniePokes[ prop ];
			if ( gg && gg.name === codeName ) {
				delete this._gameGeniePokes[ prop ];
			}
		}
	}
	
	var codesActive = Object.keys( this._gameGeniePokes ).length;
	this._gameGenieActive = codesActive > 0;
};


basemapper.prototype.saveState = function() {

	var data = {};
	
	data.mirroringMethod = this.mirroringMethod;
	data._usingChrVram = this._usingChrVram;
	//data.prgPagesMap = $.extend( {}, this.prgPagesMap );
	//data.chrPagesMap = $.extend( {}, this.chrPagesMap ); // TODO: restore
	data.sram = Nes.uintArrayToString( this.sram );
	data.expansionRam = Nes.uintArrayToString( this.expansionRam );
	data._gameGeniePokes = $.extend( {}, this._gameGeniePokes );
	if ( this._usingChrVram ) {
		//data.chrPages = this.chrPages.map( function( page ) { return Nes.uintArrayToString( page ); } );
		data._chrData = Nes.uintArrayToString( this._chrData );
	}
	if ( this.mapperSaveState ) {
		this.mapperSaveState( data );
	}
	return data;
};


basemapper.prototype.loadState = function( state ) {

	this.mirroringMethod = state.mirroringMethod;
	this._usingChrVram = state._usingChrVram;
	//this.prgPagesMap = $.extend( {}, state.prgPagesMap );
	// this.chrPagesMap = $.extend( {}, state.chrPagesMap ); // TODO: restore
	this.sram = Nes.stringToUintArray( state.sram );
	this.expansionRam = Nes.stringToUintArray( state.expansionRam );
	this._gameGeniePokes = $.extend( {}, state._gameGeniePokes );
	if ( this._usingChrVram ) {
		this._chrData = Nes.stringToUintArray( state._chrData );
	}
	if ( this.mapperLoadState ) {
		this.mapperLoadState( state );
	}
};


Nes.basemapper = basemapper;


Nes.createMapper = function( mapperId, mainboard, mirroringMethod ) {

	var mapperClass = Nes.mappers[ mapperId ];
	if ( mapperClass === undefined ) {
		throw new Error( 'Mapper id ' + mapperId + ' is not supported' );
	}
	var mapper = new mapperClass();
	mapper.construct( mainboard, mirroringMethod );
	return mapper;
};

