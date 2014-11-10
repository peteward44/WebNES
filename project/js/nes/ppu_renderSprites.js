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


var PpuRenderSprites = function( ppu ) {

	this.ppu = ppu;
	this._overflowSet = false;
	this._useMMC2Latch = false;
};


PpuRenderSprites.prototype.reset = function() {

	this._overflowSet = false;
	this._useMMC2Latch = this.ppu.mainboard.cart.memoryMapper.MMC2Latch !== undefined;
};


PpuRenderSprites.prototype.onEndFrame = function() {

	this._overflowSet = false;
};


PpuRenderSprites.prototype.saveState = function( data ) {

	data._overflowSet = this._overflowSet;
};


PpuRenderSprites.prototype.loadState = function( state ) {

	this._overflowSet = state._overflowSet;
};

/* TODO: 2C02 errata.txt states: Is this right?
What was the timing issue? I fixed 3 major
ones: sprites are evaluated on PPU clock #256,
and not at every 4 pixels like the NTSC 2C02
technical document describes.
*/
var spriteEvaluationStart = 64;
	
var isRangeOverlapping = function( a1, a2, b1, b2 ) {
	// http://stackoverflow.com/questions/3269434/whats-the-most-efficient-way-to-test-two-integer-ranges-for-overlap
	return a2 >= b1 && a1 <= b2;
};



PpuRenderSprites.prototype._renderSprite = function( spriteHeight, spritenum, startline, endline, spritey ) {

	var spriteIndex = spritenum*4;
	var patternnum = TYPED_ARRAY_GET_INT32( this.ppu.spriteMemory, spriteIndex + 1 );
	var attribs = TYPED_ARRAY_GET_INT32( this.ppu.spriteMemory, spriteIndex + 2 );
	var sx = TYPED_ARRAY_GET_INT32( this.ppu.spriteMemory, spriteIndex + 3 );

	var behindBackground = ( attribs & 0x20 ) > 0;
	var flipHorz = ( attribs & 0x40 ) > 0;
	var flipVert = ( attribs & 0x80 ) > 0;
	
	var renderScanlineStart = Math.max( spritey, startline );
	var renderScanlineEnd = Math.min( spritey + spriteHeight - 1, endline );
	var ppuAddress = 0;
	var absSy = 0;
	var mask = 0;
	var topsprite = false;
	var firstByte = 0;
	var secondByte = 0;
	var paletteMergeByte = 0;
	var absx = 0;
	var x = 0;

	for ( var scanline=renderScanlineStart; scanline<=renderScanlineEnd; ++scanline ) {
		ppuAddress = 0;
		absSy = scanline - spritey;

		if ( spriteHeight === 8 /*!ppuControl1.spriteSize*/ )
		{
			ppuAddress = ( patternnum * 16 ) + ( ( flipVert ? 7 - absSy : absSy ) & 0x7 ) + ( ( this.ppu.control1 & 0x8 ) > 0 /*ppuControl1.spritePatternTableAddress*/ ? 0x1000 : 0 );
		}
		else // big sprites - if sprite num is even, use 0x0 else use 0x1000
		{
			ppuAddress = ((patternnum & 0xFE) * 16) + ((patternnum & 0x01) * 0x1000);

			topsprite = IS_INT_BETWEEN( scanline, spritey, spritey + 8 );

			if ( !topsprite )
			{ // on flipped, put top sprite on bottom & vis versa
				if ( flipVert )
					ppuAddress += 15 - scanline + spritey;
				else
					ppuAddress += 8 + absSy;
			}
			else
			{
				if ( flipVert )
					ppuAddress += 23 - scanline + spritey;
				else
					ppuAddress += absSy;
			}
		}

		firstByte = this.ppu.read8( ppuAddress, true, 0 );
		secondByte = this.ppu.read8( ppuAddress + 8, true, 0 );
		paletteMergeByte = (attribs & 3) << 2;
		
		if ( this._useMMC2Latch ) {
			this.ppu.mainboard.cart.memoryMapper.MMC2Latch( ppuAddress + 8 );
		}

		for ( x=0; x<8; ++x )
		{
			absx = x + sx;

			// check sprite clipping
			if ( ( this.ppu.control2 & 0x4 ) === 0 /*!ppuControl2.spriteClipping*/ && absx < 8 ) {
				continue;
			}
			if ( absx > 255 ) {
				break;
			}
		
			mask = 0x80 >> ( flipHorz ? 7 - x : x );
				
			// get 2 lower bits from the pattern table for the colour index
			var paletteindex = ( firstByte & mask ) > 0 ? 1 : 0; // first bit
			paletteindex |= ( secondByte & mask ) > 0 ? 2 : 0; // second bit

			// add 2 upper bits
			if ( paletteindex > 0 ) {
				paletteindex |= paletteMergeByte;
				this.ppu.mainboard.renderBuffer.renderSpritePixel( spritenum, behindBackground, absx, scanline, TYPED_ARRAY_GET_INT32( this.ppu.paletteTables[ 1 ], paletteindex & 0xF ) | 0 );
			}
							
		//	if ( this.ppu.mainboard.debuggingEnabled ) {
		//		this.ppu.mainboard.renderBuffer.renderSpritePixelDebug( spritenum, absx, scanline );
		//	}
		}
	}
};

	
//*** Cycles 0-63: Secondary OAM (32-byte buffer for current sprites on scanline) is initialized to $FF - attempting to read $2004 will return $FF
//*** Cycles 64-255: Sprite evaluation
//* On even cycles, data is read from (primary) OAM
//* On odd cycles, data is written to secondary OAM (unless writes are inhibited, in which case it will read the value in secondary OAM instead)
//1. Starting at n = 0, read a sprite's Y-coordinate (OAM[n][0], copying it to the next open slot in secondary OAM (unless 8 sprites have been found, in which case the write is ignored).
//1a. If Y-coordinate is in range, copy remaining bytes of sprite data (OAM[n][1] thru OAM[n][3]) into secondary OAM.
//2. Increment n
//2a. If n has overflowed back to zero (all 64 sprites evaluated), go to 4
//2b. If less than 8 sprites have been found, go to 1
//2c. If exactly 8 sprites have been found, disable writes to secondary OAM
//3. Starting at m = 0, evaluate OAM[n][m] as a Y-coordinate.
//3a. If the value is in range, set the sprite overflow flag in $2002 and read the next 3 entries of OAM (incrementing 'm' after each byte and incrementing 'n' when 'm' overflows); if m = 3, increment n
//3b. If the value is not in range, increment n AND m (without carry). If n overflows to 0, go to 4; otherwise go to 3
//4. Attempt (and fail) to copy OAM[n][0] into the next free slot in secondary OAM, and increment n (repeat until HBLANK is reached)
//*** Cycles 256-319: Sprite fetches (8 sprites total, 8 cycles per sprite)
//1-4: Read the Y-coordinate, tile number, attributes, and X-coordinate of the selected sprite
//5-8: Read the X-coordinate of the selected sprite 4 times.
//* On the first empty sprite slot, read the Y-coordinate of sprite #63 followed by $FF for the remaining 7 cycles
//* On all subsequent empty sprite slots, read $FF for all 8 reads
//*** Cycles 320-340: Background render pipeline initialization
//* Read the first byte in secondary OAM (the Y-coordinate of the first sprite found, sprite #63 if no sprites were found)

PpuRenderSprites.prototype.renderTo = function( startTicks, endTicks ) {

	// Further optimisations can be made: Keep list of visible sprites, update on memory changes -
	// don't need to iterate over 64 of them each time then
	// (dont think this'll work as you need to go over 64 sprites anyway for overflow check)
	
	var firstSpriteEvaluation = this.ppu.screenCoordinatesToTicks( spriteEvaluationStart-1, -1 );
	var lastSpriteEvaluation = this.ppu.screenCoordinatesToTicks( spriteEvaluationStart, 238 );
	var spritesVisible = ( this.ppu.control2 & 0x10 ) > 0 /*ppuControl2.spritesVisible*/;
	var ticksIntoCurrentLine = ( startTicks % MASTER_CYCLES_PER_SCANLINE );
	var nextSpriteEval = startTicks - ticksIntoCurrentLine + spriteEvaluationStart * MASTER_CYCLES_PER_PPU;
	var startline = 0;
	var endline = 0;
	var spriteHeight = ( this.ppu.control1 & 0x20 ) > 0 /*ppuControl1.spriteSize*/ ? 16 : 8;
	var nextScanlineSpritesCount = 0;
	var readFromY = 0;
	var spritenum = 0;
	var spritey = 0;
	var that = this;
	
	if ( !spritesVisible ) {
		return;
	}

	if ( startTicks < firstSpriteEvaluation ) {
		startTicks = firstSpriteEvaluation;
	}
	if ( endTicks > lastSpriteEvaluation ) {
		endTicks = lastSpriteEvaluation;
	}
	
	if ( endTicks <= startTicks ) {
		return;
	}

	// work out when sprites are next due to be evaluated
	while ( nextSpriteEval <= startTicks ) {
		nextSpriteEval += MASTER_CYCLES_PER_SCANLINE;
	}
	
	if ( nextSpriteEval > endTicks ) {
		return; // not yet time for the next evaluation period
	}
	
	startline = this.ppu.ticksToScreenCoordinates( nextSpriteEval ).y + 1;
	endline = startline;
	while ( nextSpriteEval <= endTicks ) {
		nextSpriteEval += MASTER_CYCLES_PER_SCANLINE;
		endline++;
	}
	endline = Math.min( endline, 239 );
	
//		Nes.Trace.writeLine( 'ppu', 'sprite sync=' + JSON.stringify( this.ppu.ticksToScreenCoordinates( startTicks ) ) + ' end=' + JSON.stringify( this.ppu.ticksToScreenCoordinates( endTicks ) ) + ' startline=' + startline + ' endline=' + endline );

	// check each sprite to see which fall within the area to check.
	for ( spritenum=0; spritenum < 64; ++spritenum )
	{
		// if ( ( this.ppu.status & 0x20 ) === 0 /*!ppuStatus.spriteOverflow*/ && !this._overflowSet && nextScanlineSpritesCount >= 8 )
		// { // bug in ppu, must emulate for purposes of calculating correct overflow set time
			// var overflowSpriteY = this.ppu.spriteMemory[ spritenum * 4 + readFromY ];
			// readFromY++;
			// if ( readFromY >= 4 )
				// readFromY = 0;

			// //if ( overflowSpriteY >= 0 && overflowSpriteY < SCREEN_HEIGHT ) {
				// // TODO: overflow broken
				// // if ( isRangeOverlapping( startline, endline, overflowSpriteY + 1, overflowSpriteY + spriteHeight + 1 ) ) {
					// // // ( number of ticks since start of frame to the current scanline (-1 because this function predicts the scanline ahead, +1 for pre-render scanline
					// // // and last one of vblank) + ( 64 ppu ticks into scanline when evaluation begins )
					// // // + ( 2 ppu ticks per sprite evaluated ) + ( 6 ppu ticks per sprite found )
					// // var ticksWhenToSetOverflow = ( (scanline + COLOUR_ENCODING_VBLANK_SCANLINES) * PPU_TICKS_PER_SCANLINE * MASTER_CYCLES_PER_PPU );
					// // ticksWhenToSetOverflow += ( 64 * MASTER_CYCLES_PER_PPU );
					// // ticksWhenToSetOverflow += ( spritenum * 2 * MASTER_CYCLES_PER_PPU ) + ( 8 * 6 * MASTER_CYCLES_PER_PPU );
					
					// // this._overflowSet = true;
					// // this.ppu.mainboard.synchroniser.addEvent( 'ppu sprite overflow', ticksWhenToSetOverflow, function( eventTime ) { that.ppu._eventSpriteOverflow( eventTime ); } );
				// // }
			// //}
		// }

		spritey = TYPED_ARRAY_GET_INT32( this.ppu.spriteMemory, spritenum * 4 ) + 1;

		if ( spritey > 0 && spritey < SCREEN_HEIGHT ) {
			if ( isRangeOverlapping( startline, endline, spritey, spritey + spriteHeight ) ) {
				//var moreThanEightSprites = nextScanlineSpritesCount >= 8;
				//nextScanlineSpritesCount++;
				this._renderSprite( spriteHeight, spritenum, startline, endline, spritey );
			}
		}
	}
};


Nes.PpuRenderSprites = PpuRenderSprites;

