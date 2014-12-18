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

this.Gui = this.Gui || {};

(function(){
	"use strict";
	
	var compress = function( rawString ) {
	
		var compressed;
		// LZString is way too slow and gives pretty much the same result, use jz.algos instead
		//compressed = LZString.compress( raw );
		var int32Array = Nes.stringToUintArray( rawString );
		compressed = Nes.uintArrayToString( new Int32Array( jz.algos.deflate( new Uint8Array( int32Array ) ) ) );
		return compressed;
	};
	
	
	var decompress = function( rawString ) {
		var decompressed;
		//decompressed = LZString.decompress( compressed );
		var int32Array = Nes.stringToUintArray( rawString );
		decompressed = Nes.uintArrayToString( new Int32Array( jz.algos.inflate( new Uint8Array( int32Array ) ) ) );
		return decompressed;
	};
	
	
	var getCartName = function( slotName, cartName ) {
		return slotName + ":" + cartName;
	};
	
	
	var getMetaName = function( cartName ) {
		return "meta:" + cartName;
	};
	
	
	var getMetaObject = function( cartName ) {
		var obj = loadFromLocalStorage( getMetaName( cartName ) );
		if ( !obj ) {
			obj = { slots: {} };
		}
		return obj;
	};
	
	
	var setMetaObject = function( cartName, obj ) {
		saveToLocalStorage( getMetaName( cartName ), obj );
	};
	
	
	var saveState = function( slotName, cartName, data, screenData ) {
		
		if ( localStorage ) {
			// save state data as it's own local storage object
			saveToLocalStorage( getCartName( slotName, cartName ), data );

			// add to meta data object
			var meta = getMetaObject( cartName );
			var slotMeta = {};
			if ( screenData ) {
				slotMeta.screen = compress( screenData );
				console.log( "Saved screenshot size: " + slotMeta.screen.length + " (uncompressed: " + screenData.length + ")" );
			}
			slotMeta.date = Date.now();
			meta.slots[ slotName ] = slotMeta;
			setMetaObject( cartName, meta );
		}
	};
	
	
	var loadState = function( slotName, cartName ) {
	
		if ( localStorage ) {
			var compressed = localStorage.getItem( getCartName( slotName, cartName ) );
			if ( compressed ) {
				var compressedLength = compressed.length;
				var decompressed = decompress( compressed );
				var obj = JSON.parse( decompressed );
				console.log( "Loaded data size: " + compressedLength + " (uncompressed: " + decompressed.length + ")" );
				return obj;
			}
		} else {
			//( 'Browser does not support local storage' );
		}
		return null;
	};
	
	
	var getStateMetaData = function( cartName, decompressScreenData ) {
		var meta = getMetaObject( cartName );
		// decompress all image data before passing it back
		if ( decompressScreenData ) {
			var keyNames = Object.keys( meta.slots );
			for ( var keyIndex=0; keyIndex<keyNames.length; ++keyIndex ) {
				var slotName = keyNames[ keyIndex ];
				var slot = meta.slots[ slotName ];
				if ( slot.screen ) {
					slot.screen = decompress( slot.screen );
				}
			}
		}
		return meta;
	};
	
	
	var renameState = function( meta, slotName, newSlotName, cartName ) {
		
		// rename data object
		var itemName = getCartName( slotName, cartName );
		var data = localStorage.getItem( itemName );
		if ( data ) {
			localStorage.removeItem( itemName );
			
			if ( newSlotName ) {
				var newItemName = getCartName( newSlotName, cartName );
				localStorage.setItem( newItemName, data );
			}
		
			// rename it in meta object
			if ( newSlotName ) {
				meta.slots[ newSlotName ] = meta.slots[ slotName ];
			}
			delete meta.slots[ slotName ];
		}
	};
	
	
	var renameQuickSaveStates = function( slotName, cartName, limitCount ) {

		var meta = getMetaObject( cartName );
		
		// remove last quicksave.
		renameState( meta, slotName + ZERO_PAD( limitCount-1, 2, 0 ), null, cartName );
		
		// rename any others, moving each one down. We go backwards so we don't overwrite 
		for ( var i=limitCount-2; i>0; --i ) {
			renameState( meta, slotName + ZERO_PAD( i, 2, 0 ), slotName + ZERO_PAD( i+1, 2, 0 ), cartName );
		}
		
		// rename main 'quicksave' slot
		renameState( meta, slotName, slotName + ZERO_PAD( 1, 2, 0 ), cartName );
		
		setMetaObject( cartName, meta );
	};
	
	
	var saveStateSupported = function() {
	
		return !!localStorage;
	};
		
	
	var saveToLocalStorage = function( name, data ) {
		if ( localStorage ) {
			var raw = JSON.stringify( data );
			var compressed = compress( raw );
			localStorage.setItem( name, compressed );
		}
	};
	
	
	var loadFromLocalStorage = function( name ) {
		if ( localStorage ) {
			var compressed = localStorage.getItem( name );
			if ( compressed ) {
				var compressedLength = compressed.length;
				var decompressed = decompress( compressed );
				var obj = JSON.parse( decompressed );
				return obj;
			}
		}
		return null;
	};
	
	
	Gui.saveState = saveState;
	Gui.loadState = loadState;
	Gui.getStateMetaData = getStateMetaData;
	Gui.renameQuickSaveStates = renameQuickSaveStates;
	Gui.saveStateSupported = saveStateSupported;
	Gui.saveToLocalStorage = saveToLocalStorage;
	Gui.loadFromLocalStorage = loadFromLocalStorage;
	
}());
