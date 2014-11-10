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

// consts use by renderPartialScanline
var ScrollReloadTime = 304; // pre-render SL only
var XReloadTime = 257;
var SecondLastTileReloadTime = 324;
var LastTileReloadTime = 332;

var ticksPerTile = 8;
var ticksFirstTile = 3;
var ticksLastTile = ticksFirstTile + ( 31 * ticksPerTile );

var YIncrementTime = 251;
var YIncrementTimeRendering = ( YIncrementTime + 17 ) * MASTER_CYCLES_PER_PPU;
var XReloadTimeRendering = ( XReloadTime + 17 ) * MASTER_CYCLES_PER_PPU;


var backgroundRenderingStart = 0;//this.ppu.screenCoordinatesToTicks( ScrollReloadTime-1, -1 );
var backgroundRenderingEnd = 0;//this.ppu.screenCoordinatesToTicks( SecondLastTileReloadTime-1, 239 );
var backgroundScrollReloadTime = 0; // this.ppu.screenCoordinatesToTicks( ScrollReloadTime, -1 );


var PpuRenderBg = function( ppu ) {

	this.ppu = ppu;
	this._spriteZeroHit = false;
	this._useMMC2Latch = false;
};


PpuRenderBg.prototype.reset = function() {

	backgroundRenderingStart = this.ppu.screenCoordinatesToTicks( ScrollReloadTime-1, -1 );
	backgroundRenderingEnd = this.ppu.screenCoordinatesToTicks( SecondLastTileReloadTime-1, 239 );
	backgroundScrollReloadTime = this.ppu.screenCoordinatesToTicks( ScrollReloadTime, -1 );

	this._bgTableAddress = 0;
	this._spriteZeroHit = false;
	this._renderBuffer = this.ppu.mainboard.renderBuffer;
	this._useMMC2Latch = this.ppu.mainboard.cart.memoryMapper.MMC2Latch !== undefined;
};


PpuRenderBg.prototype.onControl1Change = function( control1 ) {

	this._bgTableAddress = ( control1 & 0x10 ) > 0 /*ppuControl1.screenPatternTableAddress*/ ? 0x1000 : 0;
};


PpuRenderBg.prototype.onEndFrame = function() {

	this._spriteZeroHit = false;
};


PpuRenderBg.prototype.saveState = function( data ) {

	data._spriteZeroHit = this._spriteZeroHit;
};


PpuRenderBg.prototype.loadState = function( state ) {

	this._spriteZeroHit = state._spriteZeroHit;
};


PpuRenderBg.prototype._renderTile = function( ppuReadAddress, tilenum, posy, clippingEnabled ) {

	var triggerTime = 0;
	var renderScanline = posy|0;// ( tilenum <= 2 ? posy + 1 : posy );
	var startXRendering = clippingEnabled ? 8 : 0;
	var baseindex = (tilenum|0) * 8;

	var htile = (ppuReadAddress & 0x001F);
	var vtile = (ppuReadAddress & 0x03E0) >> 5;
	//var finey = ((this.ppu.ppuReadAddress & 0x7000) >> 12);

	var nameTableAddress = ( 0x2000 + (ppuReadAddress & 0x0FFF) ) & 0xFFFF;
	var tileNumber = this.ppu.readNameTable( nameTableAddress, 0 );

	// (screen address) + (tilenumber * 16) + finey
	var tileAddress = this._bgTableAddress + tileNumber * 16 + ((ppuReadAddress & 0x7000) >> 12);
	var attributeByte = this.ppu.readNameTable( 0x23C0 | (ppuReadAddress & 0x0C00) | ((vtile & 0x1C) << 1) | ( (htile >> 2) & 0x7 ), 1 );

	var mergeByte = 0;
	if ( ( htile & 0x2 ) === 0 ) {
		if ( ( vtile & 0x2 ) === 0 ) {
			mergeByte = ( attributeByte & 0x3 ) << 2;
		} else {
			mergeByte = ( attributeByte & 0x30 ) >> 2;
		}
	} else {
		if ( ( vtile & 0x2 ) === 0 ) {
			mergeByte = ( attributeByte & 0xC );
		} else {
			mergeByte = ( attributeByte & 0xC0 ) >> 4;
		}
	}

	//Nes.Trace.writeLine( 'ppu', 'Tile rendered pos: ' + tilenum + ' tileid: ' + tileNumber + ' h=' + htile + ' v=' + vtile + ' ppuAddress=' + ppuReadAddress.toString( 16 ) );
	
	// pattern table reads
	var firstByte = this.ppu.read8( tileAddress, false, 2 );
	var secondByte = this.ppu.read8( tileAddress + 8, false, 3 );
	
	if ( this._useMMC2Latch ) {
		this.ppu.mainboard.cart.memoryMapper.MMC2Latch( tileAddress + 8 );
	}
	
	// render tiles from right-most pixel first - allows us to shift the first & second pattern table byte to get the palette
	// index we want.
	
	var startPixel = baseindex - this.ppu.fineX;
	var endPixel = startPixel + 7;
	var realStartPixel = Math.max( startPixel, 0 );
	var startPixelIndex = realStartPixel - startPixel;
	var paletteIndex = 0;
	var byteMask = 0x80 >> startPixelIndex;
	var x = realStartPixel;
	for ( ; x<=endPixel; ++x )
	{
		paletteIndex = ( firstByte & byteMask ) > 0 ? 0x1 : 0;
		paletteIndex |= ( secondByte & byteMask ) > 0 ? 0x2 : 0;
		
		byteMask >>= 1;

		if ( x >= startXRendering && x < SCREEN_WIDTH ) {
			if ( paletteIndex > 0 ) {
				paletteIndex |= mergeByte;

				if ( ( paletteIndex & 0x3 ) === 0 )
					paletteIndex = 0;
					
				if ( this._renderBuffer.renderPixel( x, renderScanline, TYPED_ARRAY_GET_INT32( this.ppu.paletteTables[ 0 ], paletteIndex & 0xF ) | 0 ) ) {
					
					// Sprite zero hit - will happen in the future as this is the prefetch
					if ( !this._spriteZeroHit ) {
						triggerTime = this.ppu.screenCoordinatesToTicks( x, renderScanline );
						Nes.Trace.writeLine( Nes.trace_ppu, "[" + this.ppu.frameCounter + "] PPU sprite hit scheduled for @ " + x + "x" + renderScanline + " (" + triggerTime + ")" );
						this._spriteZeroHit = true;
						this.ppu.mainboard.synchroniser.changeEventTime( this.ppu._spriteZeroEventId, triggerTime );
					}
				}
			}
		}
	}
};


var backgroundTileCount = 34;


PpuRenderBg.prototype._incrementY = function( ppuReadAddress ) {
	/*
		Y increment
		At dot 256 of each scanline, fine Y is incremented, overflowing to coarse Y, and finally adjusted to wrap among the nametables vertically.
		Bits 12-14 are fine Y. Bits 5-9 are coarse Y. Bit 11 selects the vertical nametable.
			if ((v & 0x7000) != 0x7000)        // if fine Y < 7
				v += 0x1000                      // increment fine Y
			else
				v &= ~0x7000                     // fine Y = 0
				int y = (v & 0x03E0) >> 5        // let y = coarse Y
				if y == 29
					y = 0                          // coarse Y = 0
					v ^= 0x0800                    // switch vertical nametable
				else if y == 31
					y = 0                          // coarse Y = 0, nametable not switched
				else
					y += 1                         // increment coarse Y
				v = (v & ~0x03E0) | (y << 5)     // put coarse Y back into v
	*/
	// INCREMENT Y LOGIC
	if ((ppuReadAddress & 0x7000) === 0x7000) {
		// wrap when tile y offset = 7
		//ppuReadAddress &= ~0x7000;
		ppuReadAddress &= 0x8FFF;

		if ((ppuReadAddress & 0x03E0) === 0x03A0) {
			// wrap tile y and switch name table bit 11, if tile y is 29
			ppuReadAddress ^= 0x0800; 
			ppuReadAddress &= 0xFC1F;
		} else if ((ppuReadAddress & 0x03E0) === 0x03E0) {
			// wrap tile y if it is 31
			ppuReadAddress &= 0xFC1F;
		} else {
			// just increment tile y
			ppuReadAddress += 0x0020;
		}
	} else {
		// increment tile y offset
		ppuReadAddress += 0x1000; 
	}
	return ppuReadAddress;
};


PpuRenderBg.prototype._incrementX = function( ppuReadAddress ) {
	/*
	The coarse X component of v needs to be incremented when the next tile is reached. Bits 0-4 are incremented, with overflow toggling bit 10. This means that bits 0-4 count from 0 to 31 across a single nametable, and bit 10 selects the current nametable horizontally.
	if ((v & 0x001F) == 31) // if coarse X == 31
	  v &= ~0x001F          // coarse X = 0
	  v ^= 0x0400           // switch horizontal nametable
	else
	  v += 1                // increment coarse X
	*/
	// INCREMENT X LOGIC
	if ((ppuReadAddress & 0x001F) === 0x001F) {
		// switch name tables (bit 10) and reset tile x to 0
		ppuReadAddress = ( ppuReadAddress ^ 0x0400 ) & 0xFFE0;
	} else {
		// next tile
		ppuReadAddress = ( ppuReadAddress + 1 ) & 0xFFFF;
	}
	return ppuReadAddress;
};


PpuRenderBg.prototype.renderTo = function( startTicks, endTicks, ppuReadAddress, ppuLatchAddress ) {

	Nes.Trace.writeLine( Nes.trace_ppu, 'sync: startTicks=' + startTicks + ' endTicks=' + endTicks );

	var ticksInFirstLine = 0;
	var ticksAtFirstScanline = 0;
	var tileTickPosition = 0;
	var tilenum = 0;
	var ticksAtFirstRenderingScanline = 0;
	var ticksAtFirstRenderingScanlineEnd = 0;
	var scanlineStart = 0;
	var posy = 0;
	var clippingEnabled = ( this.ppu.control2 & 0x2 ) === 0/*ppuControl2.backgroundClipping*/;
	var backgroundRenderingEnabled = ( this.ppu.control2 & 0x8 ) > 0 /* ppuControl2.backgroundSwitch */;
	var reloadTime = 0;
	var incrementYTime = 0;
	var scanline = 0;

	if ( startTicks < backgroundRenderingStart ) {
		startTicks = backgroundRenderingStart;
	}
	if ( endTicks > backgroundRenderingEnd ) {
		endTicks = backgroundRenderingEnd;
	}
	if ( endTicks <= startTicks ) {
		return ppuReadAddress;
	}

	ticksInFirstLine = ( startTicks % MASTER_CYCLES_PER_SCANLINE );
	ticksAtFirstScanline = startTicks - ticksInFirstLine;
	ticksAtFirstRenderingScanline = ticksAtFirstScanline - MASTER_CYCLES_PER_SCANLINE + ( SecondLastTileReloadTime * MASTER_CYCLES_PER_PPU );
	ticksAtFirstRenderingScanlineEnd = ticksAtFirstRenderingScanline + MASTER_CYCLES_PER_SCANLINE; // ( 34 * 8 * MASTER_CYCLES_PER_PPU );
	
	while ( ticksAtFirstRenderingScanlineEnd < startTicks || ticksAtFirstRenderingScanline < backgroundRenderingStart ) {
		ticksAtFirstRenderingScanline += MASTER_CYCLES_PER_SCANLINE;
		ticksAtFirstRenderingScanlineEnd += MASTER_CYCLES_PER_SCANLINE;
	}
		
	if ( backgroundScrollReloadTime > startTicks && backgroundScrollReloadTime <= endTicks ) {
		// reset ppu address on cycle 304 of pre-render scanline
		ppuReadAddress = (ppuReadAddress & 0x41F) | (ppuLatchAddress & 0x7BE0);
	}

//	Nes.Trace.writeLine( 'ppu', 'Start sync start=' + JSON.stringify( this.ppu.ticksToScreenCoordinates( startTicks ) ) + ' end=' + JSON.stringify( this.ppu.ticksToScreenCoordinates( endTicks ) ) + " ticksAtFirstRenderingScanline=" + JSON.stringify( this.ppu.ticksToScreenCoordinates( ticksAtFirstRenderingScanline ) ) );

	scanlineStart = ticksAtFirstRenderingScanline;
	scanline = ( Math.floor( ( ticksAtFirstRenderingScanline - backgroundRenderingStart ) / MASTER_CYCLES_PER_SCANLINE ) ) | 0;

	// tile prefetches between SecondLastTileReloadTime (previous line) for 34 tiles
	while ( scanlineStart <= endTicks ) {
		incrementYTime = scanlineStart + YIncrementTimeRendering;
		reloadTime = scanlineStart + XReloadTimeRendering;

		for ( tilenum=0; tilenum<backgroundTileCount; ++tilenum ) {
		
			tileTickPosition = scanlineStart + ( tilenum * 8 * MASTER_CYCLES_PER_PPU );
							
			if ( tileTickPosition > endTicks || tileTickPosition > backgroundRenderingEnd ) {
				break;
			}
			if ( tileTickPosition <= startTicks ) {
				continue;
			}
			
			if ( backgroundRenderingEnabled ) {
				this._renderTile( ppuReadAddress, tilenum, scanline, clippingEnabled );
			}
			ppuReadAddress = this._incrementX( ppuReadAddress );
		}

		// render last tile on screen, increment Y
		if ( incrementYTime < backgroundRenderingEnd && incrementYTime > startTicks && incrementYTime <= endTicks ) {
			ppuReadAddress = this._incrementY( ppuReadAddress );
		}

		//Nes.Trace.writeLine( 'ppu', 'reloadTime=' + JSON.stringify( this.ppu.ticksToScreenCoordinates( reloadTime ) ) + " scanlineStart=" + JSON.stringify( this.ppu.ticksToScreenCoordinates( scanlineStart ) ) );
		if ( reloadTime < backgroundRenderingEnd && reloadTime > startTicks && reloadTime <= endTicks ) {
			ppuReadAddress = (ppuReadAddress & 0xFBE0) | (ppuLatchAddress & 0x041F);
		}
		
		scanlineStart += MASTER_CYCLES_PER_SCANLINE;
		scanline++;
	}
	return ppuReadAddress;
};


Nes.PpuRenderBg = PpuRenderBg;

