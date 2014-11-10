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
	
	var pixelColoursAcross = 16;
	var pixelColoursDown = 2;
	
	var pixelColourWidth = 30;
	var pixelColourHeight = 30;
	
	var canvasWidth = pixelColourWidth * pixelColoursAcross;
	var canvasHeight = pixelColoursDown * pixelColourHeight;
	
	
	var PaletteDisplayWindow = function( mainboard, divElement ) {
	
		this._mainboard = mainboard;
		
		// add canvas for rendering all sprites on
		this._offscreenElement = document.createElement('canvas');
		this._offscreenElement.width = pixelColoursAcross;
		this._offscreenElement.height = pixelColoursDown;
		this._offscreenCanvas = this._offscreenElement.getContext( "2d" );
		this._offscreenCanvas.imageSmoothingEnabled = false;
		this._offscreenData = this._offscreenCanvas.getImageData( 0, 0, pixelColoursAcross, pixelColoursDown );
		this._offscreen32BitView = new Uint32Array( this._offscreenData.data.buffer );
		
		this._element = document.createElement('canvas');
		this._element.width = canvasWidth;
		this._element.height = canvasHeight;
		this._canvas = this._element.getContext("2d");
		this._canvas.imageSmoothingEnabled = false;
		
		divElement.appendChild( this._element );
		
		this._infoElement = document.createElement('p');
		divElement.appendChild( this._infoElement );
		
		this._loadPaletteData();
	};
	
	
	PaletteDisplayWindow.prototype._loadPaletteData = function() {
	
		if ( this._mainboard.cart ) {
		
			var info = '';
		
			for ( var index=0; index<32; ++index ) {
				var paletteIndex = this._mainboard.ppu.paletteTables[ Math.floor( index / 16 ) ][ index % 16 ];
				var colour = this._mainboard.renderBuffer.defaultPalette32BitVals[ paletteIndex || 0 ] || 0;
				this._offscreen32BitView[ index ] = colour;
				
		//		info += ( 0x3F00 + index ).toString(16) + "=" + paletteIndex.toString( 16 ) + "</br>";
			}
			
			this._infoElement.innerHTML = info;
		}
		
		this._updateCanvas();
		var that = this;
		setTimeout( function() { that._loadPaletteData(); }, 1000 );
	};
	
	
	PaletteDisplayWindow.prototype._updateCanvas = function() {
	
		this._offscreenCanvas.putImageData( this._offscreenData, 0, 0 );
		// Draw offscreen canvas onto front buffer, resizing it in the process
		this._canvas.drawImage( this._offscreenElement, 0, 0, this._element.clientWidth, this._element.clientHeight );
	};
	
	
	Gui.PaletteDisplayWindow = PaletteDisplayWindow;

}());
