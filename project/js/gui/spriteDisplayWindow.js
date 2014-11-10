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
	
	var spriteWidth = 8;
	var spriteHeight = 8;
	var canvasWidth = spriteWidth * 8;
	var canvasHeight = spriteHeight * 8;
	var displayMultiplier = 4;
	
	var SpriteDisplayWindow = function( mainboard, divElement ) {
	
		this._mainboard = mainboard;
		
		// add canvas for rendering all sprites on
		this._offscreenElement = document.createElement('canvas');
		this._offscreenElement.width = canvasWidth;
		this._offscreenElement.height = canvasHeight;
		this._offscreenCanvas = this._offscreenElement.getContext( "2d" );
		this._offscreenCanvas.imageSmoothingEnabled = false;
		this._offscreenData = this._offscreenCanvas.getImageData( 0, 0, canvasWidth, canvasHeight );
		this._offscreen32BitView = new Uint32Array( this._offscreenData.data.buffer );
		
		this._element = document.createElement('canvas');
		this._element.width = canvasWidth * displayMultiplier;
		this._element.height = canvasHeight * displayMultiplier;
		this._canvas = this._element.getContext("2d");
		this._canvas.imageSmoothingEnabled = false;
		
		divElement.appendChild( this._element );
		
		this._infoElement = document.createElement( 'p' );
		
		divElement.appendChild( this._infoElement );
		
		this._loadSpriteData();
	};
	
	
	SpriteDisplayWindow.prototype._loadSpriteData = function() {
	
		// copy of renderSprite function in ppu.js
		// TODO: tidy up
		if ( this._mainboard.cart ) {
			
			var innerHtmlText = '';
			var spriteMemory = this._mainboard.ppu.spriteMemory;

			for ( var spriteIndex=0; spriteIndex<64; ++spriteIndex ) {
			
				var memIndex = spriteIndex * 4;
			
				var sy = spriteMemory[ memIndex + 0 ] + 1;
				var patternnum = spriteMemory[ memIndex + 1 ];
				var attribs = spriteMemory[ memIndex + 2 ];
				var sx = spriteMemory[ memIndex + 3 ];
				
		//		innerHtmlText += spriteIndex + ": " + sx + "x" + sy + "</br>";
				
				var flipHorz = ( attribs & 0x40 ) > 0;
				var flipVert = ( attribs & 0x80 ) > 0;

				for ( var y=0; y<8; ++y ) {
					var ppuAddress = 0;

					if ( ( this._mainboard.ppu.control1 & 0x20 ) === 0 /*!ppuControl1.spriteSize*/ )
					{
						ppuAddress = ( patternnum * 16 ) + ( ( flipVert ? 7 - y : y ) & 0x7 ) + ( ( this._mainboard.ppu.control1 & 0x8 ) > 0 /*ppuControl1.spritePatternTableAddress*/ ? 0x1000 : 0 );
					}
					else // big sprites - if sprite num is even, use 0x0 else use 0x1000
					{
						ppuAddress = ((patternnum & 0xFE) * 16) + ((patternnum & 0x01) * 0x1000);

						// var topsprite = IS_INT_BETWEEN( scanline, sy, sy + 8 );

						// if ( !topsprite )
						// { // on flipped, put top sprite on bottom & vis versa
							// if ( flipVert )
								// ppuAddress += 15 - y;
							// else
								// ppuAddress += 8 + y;
						// }
						// else
						// {
							// if ( flipVert )
								// ppuAddress += 23 - y;
							// else
								// ppuAddress += y;
						// }
					}

					var firstByte = this._mainboard.ppu.read8( ppuAddress );
					var secondByte = this._mainboard.ppu.read8( ppuAddress + 8 );
					var paletteMergeByte = (attribs & 3) << 2;

					for ( var x=0; x<8; ++x )
					{
						var mask = 0x80 >> ( flipHorz ? 7 - x : x );
							
						// get 2 lower bits from the pattern table for the colour index
						var paletteindex = ( firstByte & mask ) > 0 ? 1 : 0; // first bit
						paletteindex |= ( secondByte & mask ) > 0 ? 2 : 0; // second bit

						var colour;
						// add 2 upper bits
						if ( paletteindex > 0 ) {
							paletteindex |= paletteMergeByte;
							var paletteIndex = this._mainboard.ppu.paletteTables[ 1 ][ paletteindex ];
							colour = this._mainboard.renderBuffer.defaultPalette32BitVals[ paletteIndex || 0 ] || 0;
						} else {
							var paletteIndex = this._mainboard.ppu.paletteTables[ 1 ][ 0 ];
							colour = this._mainboard.renderBuffer.defaultPalette32BitVals[ paletteIndex ];
						}
						
						var screenIndex = ( ( spriteIndex % 8 ) * 8 + y ) * 64 + ( Math.floor( spriteIndex / 8 ) * 8 ) + x
						this._offscreen32BitView[ screenIndex ] = colour;
					}
				}
			}
			
			this._infoElement.innerHTML = innerHtmlText;
		}
		
		this._updateCanvas();
		var that = this;
		setTimeout( function() { that._loadSpriteData(); }, 1000 );
	};
	
	
	SpriteDisplayWindow.prototype._updateCanvas = function() {
	
		this._offscreenCanvas.putImageData( this._offscreenData, 0, 0 );
		// Draw offscreen canvas onto front buffer, resizing it in the process
		this._canvas.drawImage( this._offscreenElement, 0, 0, this._element.clientWidth, this._element.clientHeight );
	};
	
	
	Gui.SpriteDisplayWindow = SpriteDisplayWindow;

}());
