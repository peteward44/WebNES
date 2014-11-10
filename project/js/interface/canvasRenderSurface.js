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
	
		
	var CanvasRenderSurface = function( canvasParent ) {
	
		this._clearArray = new Uint32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._clearArrayColour = this._clearArray[0];

		this._bufferIndexArray = new Int32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
	
		this._offscreenElement = document.createElement('canvas');
		this._offscreenElement.width = SCREEN_WIDTH;
		this._offscreenElement.height = SCREEN_HEIGHT;
		this._offscreenCanvas = this._offscreenElement.getContext( "2d" );
		//this._offscreenCanvas.imageSmoothingEnabled = false;
		this._offscreenData = this._offscreenCanvas.getImageData( 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT );
		
		if ( !this._offscreenData.data.buffer ) {
			throw new Error( "Browser does not support canvas image buffers. Cannot run emulator" );
		}
		// Chrome & Firefox support passing the underlying image data buffer to Uint32Array(). IE does not.
		this._offscreen32BitView = new Uint32Array( this._offscreenData.data.buffer );
		if ( this._offscreen32BitView.length !== this._clearArray.length ) {
			throw new Error( "Unexpected canvas buffer size (actual=" + this._offscreen32BitView.length + ")" );
		}

		this._element = canvasParent.getCanvasElement();
		this._canvas = this._element.getContext("2d");
		//this._canvas.imageSmoothingEnabled = false;
	};
	
	
	CanvasRenderSurface.prototype.writeToBuffer = function( bufferIndex, insertIndex, colour ) {

		//if ( baseIndex < 0 || baseIndex >= this._offscreen32BitView.length ) { throw new Error( "CanvasRenderSurface.prototype.writeToBuffer: Invalid bounds" ); }
		var existingIndex = TYPED_ARRAY_GET_INT32( this._bufferIndexArray, insertIndex );
		if ( existingIndex <= bufferIndex ) {
			TYPED_ARRAY_SET_UINT32( this._offscreen32BitView, insertIndex, 0xFF000000 | colour );
			TYPED_ARRAY_SET_INT32( this._bufferIndexArray, insertIndex, bufferIndex );
		}
	};
	
	
	CanvasRenderSurface.prototype.getRenderBufferHash = function() {
	
		var rusha = new Rusha();
		return rusha.digestFromArrayBuffer( this._offscreen32BitView ).toUpperCase();
	};
	
	
	CanvasRenderSurface.prototype.clearBuffers = function( backgroundColour ) {
	
		var i=0;
		// update clear array if background colour changes
		if ( backgroundColour !== this._clearArrayColour ) {
			for ( i=0; i<this._clearArray.length; ++i ) {
				this._clearArray[ i ] = 0xFF000000 | backgroundColour;
			}
			this._clearArrayColour = backgroundColour;
		}
		
		// set background colour
		this._offscreen32BitView.set( this._clearArray );
		
		// Nes.ClearScreenArray is a quicker way of clearing this array
		this._bufferIndexArray.set( g_ClearScreenArray );
		
		// for ( var i=0; i<this._bufferIndexArray.length; ++i ) {
			// this._bufferIndexArray[i] = 0;
			// this._offscreen32BitView[i] = backgroundColour;
		// }
	};
	
	
	CanvasRenderSurface.prototype.render = function( mainboard ) {

		this._offscreenCanvas.putImageData( this._offscreenData, 0, 0 );
		// Draw offscreen canvas onto front buffer, resizing it in the process
		this._canvas.drawImage( this._offscreenElement, 0, 0, this._element.clientWidth, this._element.clientHeight );
	};
		
	
	CanvasRenderSurface.prototype.screenshotToFile = function() {

		this._offscreenElement.toBlob( function( blob ) {
			saveAs( blob, "screenshot.png" );
		});
	};
	
	
	CanvasRenderSurface.prototype.screenshotToString = function() {

		return this._offscreenElement.toDataURL("image/png");
	};
	
	
	Gui.CanvasRenderSurface = CanvasRenderSurface;
	
}());
