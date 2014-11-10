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

(function(){
	"use strict";
		
	// autoExtendsMode: 'none', 'exact', 'double'
	var CircularBuffer = function( bufferSize, autoExtendsMode, arrayBufferType ) {

		this._arrayBufferType = arrayBufferType || Int16Array;	
		this._autoExtendsMode = autoExtendsMode || 'double';
		
		this._buffer = null;
		this._readIndex = 0;
		this._writeIndex = 0;
		this._createBufferIfRequired( bufferSize || 65536 );
	};


	CircularBuffer.prototype.sizeOccupied = function() {
		if ( this._readIndex <= this._writeIndex ) {
			return this._writeIndex - this._readIndex;
		} else {
			return ( this._buffer.length - this._readIndex ) + this._writeIndex;
		}
	};


	CircularBuffer.prototype.sizeRemaining = function() {
		return this._buffer.length - this.sizeOccupied();
	};


	CircularBuffer.prototype._createBufferIfRequired = function( spaceRequired ) {

		var bufferSize;
		var recreate = false;
		if ( !this._buffer ) {
			bufferSize = spaceRequired;
			recreate = true;
		} else {
			var minRequired = spaceRequired + this.sizeOccupied();
			var needsNewBuffer = minRequired > this._buffer.length;
			if ( needsNewBuffer ) {
				if ( this._autoExtendsMode === 'none' ) {
					throw new Error( "Buffer has overrun, required size " + minRequired + " current size " + this._buffer.length );
				} else if ( this._autoExtendsMode === 'exact' ) {
					recreate = true;
					bufferSize = minRequired;
				} else { // defaults to 'double'
					recreate = true;
					bufferSize = this._buffer.length;
					do {
						bufferSize = bufferSize * 2;
					} while ( bufferSize < minRequired );
				}
			}
		}

		if ( recreate ) {
			var newBuffer = new this._arrayBufferType( bufferSize );
			if ( this._buffer ) {
				// copy existing buffer data into newly created buffer
				if ( this._readIndex < this._writeIndex ) {
					var dataLen = this._writeIndex - this._readIndex;
					newBuffer.set( this._buffer.subarray( this._readIndex, this._readIndex + dataLen ), 0 );
					this._readIndex = 0;
					this._writeIndex = dataLen;
				} else if ( this._readIndex > this._writeIndex ) {
					var endOfBufferDataLength = this._buffer.length - this._readIndex;
					newBuffer.set( this._buffer.subarray( this._readIndex ), 0 );
					newBuffer.set( this._buffer.subarray( 0, this._writeIndex ), endOfBufferDataLength );
					this._writeIndex = this._writeIndex + endOfBufferDataLength;
					this._readIndex = 0;
				}
			}
			this._buffer = newBuffer;
		}
	};
	
	
	CircularBuffer.prototype._isArrayBuffer = function( buffer ) {
	
		return buffer instanceof this._arrayBufferType;
	};
	
	
	CircularBuffer.prototype._copyArray = function( src, srcIndex, dest, destIndex, length ) {
	
		if ( this._isArrayBuffer( src ) && this._isArrayBuffer( dest ) ) {
			dest.set( src.subarray( srcIndex, srcIndex + length ), destIndex );
		} else {
			for ( var i=0; i<length; ++i ) {
				var d = src[ srcIndex + i ];
				dest[ destIndex + i ] = d;
			//	dest[ destIndex + i ] = ( ( d & 0xFF ) << 8 ) | ( ( d & 0xFF00 ) >> 8 );
			}
		}
	};
	

	CircularBuffer.prototype.push = function( arrayBuffer, length, sourceIndex ) {
		sourceIndex = sourceIndex || 0;
		
		this._createBufferIfRequired( length );
		if ( this._writeIndex >= this._readIndex ) {
			var endOfBufferAvailable = this._buffer.length - this._writeIndex;
			if ( endOfBufferAvailable >= length ) {
				this._copyArray( arrayBuffer, sourceIndex, this._buffer, this._writeIndex, length );
			//	console.log( "push1 this._writeIndex=" + this._writeIndex );
				this._writeIndex += length;
			} else {
				var remainingData = length - endOfBufferAvailable;
				this._copyArray( arrayBuffer, sourceIndex, this._buffer, this._writeIndex, endOfBufferAvailable );
				this._copyArray( arrayBuffer, sourceIndex + endOfBufferAvailable, this._buffer, 0, remainingData );
			//	console.log( "push2 this._writeIndex=" + this._writeIndex );
				this._writeIndex = remainingData;
			}
		} else {
			this._copyArray( arrayBuffer, sourceIndex, this._buffer, this._writeIndex, length );
		//	console.log( "push3 this._writeIndex=" + this._writeIndex );
			this._writeIndex += length;
		}
	};


	CircularBuffer.prototype.pop = function( arrayBuffer, length, destIndex ) {
		destIndex = destIndex || 0;
		
		var readCount = Math.min( length, this.sizeOccupied() );
		
		if ( readCount > 0 ) {
			//console.log( "readCount wi=" + this._writeIndex + " ri=" + this._readIndex );
			if ( this._writeIndex >= this._readIndex ) {
				this._copyArray( this._buffer, this._readIndex, arrayBuffer, destIndex, readCount );
			//	console.log( "1 readindex=" + this._readIndex );
				this._readIndex += readCount;
			} else {
				var endOfBufferAvailable = this._buffer.length - this._readIndex;
				if ( endOfBufferAvailable >= readCount ) {
					this._copyArray( this._buffer, this._readIndex, arrayBuffer, destIndex, readCount );
			//		console.log( "2 readindex=" + this._readIndex );
					this._readIndex += readCount;
				} else {
					var remainingData = readCount - endOfBufferAvailable;
					this._copyArray( this._buffer, this._readIndex, arrayBuffer, destIndex, endOfBufferAvailable );
					this._copyArray( this._buffer, this._readIndex + endOfBufferAvailable, arrayBuffer, destIndex + endOfBufferAvailable, remainingData );
			//		console.log( "3 readindex=" + this._readIndex );
					this._readIndex = remainingData;
				}
			}
		}
		
		return readCount;
	};
	
	
	CircularBuffer.prototype.setElement = function( offset, data ) {
		
		this._buffer[ ( this._writeIndex + offset ) % this._buffer.length ] = data;
	};
	
	
	CircularBuffer.prototype.getElement = function( offset ) {
		
		return this._buffer[ ( this._readIndex + offset ) % this._buffer.length ];
	};
	
	
	CircularBuffer.prototype.reset = function() {
	
		this._writeIndex = 0;
		this._readIndex = 0;
	};
	
	
	CircularBuffer.prototype.advanceRead = function( amount ) {
	
		amount = Math.min( amount, this.sizeOccupied() );
		this._readIndex = ( this._readIndex + amount ) % this._buffer.length;
	};

	
	Nes.CircularBuffer = CircularBuffer;
	
}());
