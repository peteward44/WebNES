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
this.WebGl = this.WebGl || {};

(function(){
	"use strict";
	
	// Must be power of 2
	var TEXTURE_WIDTH = 256;
	var TEXTURE_HEIGHT = 256;
	
	
	var WebGlRenderSurface = function( canvasParent ) {
	
		var that = this;

		this._clearArray = new Uint32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._clearArrayColour = this._clearArray[0];

		this._bufferIndexArray = new Int32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._offscreen32BitView = new Uint32Array( TEXTURE_WIDTH * TEXTURE_HEIGHT );
		this._offscreen8BitView = new Uint8Array( this._offscreen32BitView.buffer );

		this._element = canvasParent.getCanvasElement();
		this._glContext = WebGl.getGlContext( this._element );

		this._initShaders();
		this._initBuffers();

		this._camera = new WebGl.OrthoCamera( this._glContext );
		this._camera.setup( SCREEN_WIDTH, SCREEN_HEIGHT );
		this._camera.setMatrices( this._pMatrixUniform, this._mvMatrixUniform );
		
		this._texture = new WebGl.FillableTexture( this._glContext, TEXTURE_WIDTH, TEXTURE_HEIGHT );
		
		this._vertexBuffer.bind( this._vertexPositionAttribute );
		this._textureCoordBuffer.bind( this._textureCoordAttribute );
		this._indexBuffer.bind();
		this._texture.bind();

		this._glContext.uniform1i(this._samplerUniform, 0);

		canvasParent.connect( 'resize', function() { that._onResize(); } );
	};

	
	WebGlRenderSurface.prototype._initBuffers = function() {
		var t = SCREEN_WIDTH / TEXTURE_WIDTH;
		var u = SCREEN_HEIGHT / TEXTURE_HEIGHT;
		
		var vertices = new Float32Array( [
				0, 0,							0.0,
				SCREEN_WIDTH,	0,				0.0,
				SCREEN_WIDTH,	SCREEN_HEIGHT,	0.0,
				0,				SCREEN_HEIGHT,	0.0
			] );
		var texCoords = new Float32Array( [
				0.0,	0.0,
				t,		0.0,
				t,		u,
				0.0,	u
			] );
		var indices = new Uint16Array( [ 0, 1, 2,	0, 2, 3 ] );
	
		this._vertexBuffer = new WebGl.VertexBuffer( this._glContext );
		this._vertexBuffer.setData( vertices, 3, 4 );

		this._textureCoordBuffer = new WebGl.VertexBuffer( this._glContext );
		this._textureCoordBuffer.setData( texCoords, 2, 4 );

		this._indexBuffer = new WebGl.IndexBuffer( this._glContext );
		this._indexBuffer.setData( indices, 6 );
	};
	

	WebGlRenderSurface.prototype._initShaders = function() {
	
		this._shader = new WebGl.ShaderProgram( this._glContext );
		this._shader.loadAndLink( "shader-fs", "shader-vs" );
		this._shader.use();

		this._vertexPositionAttribute = this._shader.getAttrib( "aVertexPosition" );
		this._textureCoordAttribute = this._shader.getAttrib( "aTextureCoord" );

		this._pMatrixUniform = this._shader.getUniformLocation("uPMatrix");
		this._mvMatrixUniform = this._shader.getUniformLocation("uMVMatrix");
		this._samplerUniform = this._shader.getUniformLocation("uSampler");
	};


	WebGlRenderSurface.prototype._onResize = function() {
		this._glContext.viewport(0, 0, this._element.width, this._element.height);
		this._glContext.clearColor(0.0, 0.0, 0.0, 1.0);
	};
	
	
	WebGlRenderSurface.prototype.writeToBuffer = function( bufferIndex, insertIndex, colour ) {

		//if ( baseIndex < 0 || baseIndex >= this._offscreen32BitView.length ) { throw new Error( "WebGlRenderSurface.prototype.writeToBuffer: Invalid bounds" ); }
		var existingIndex = TYPED_ARRAY_GET_INT32( this._bufferIndexArray, insertIndex );
		if ( existingIndex <= bufferIndex ) {
			TYPED_ARRAY_SET_UINT32( this._offscreen32BitView, insertIndex, 0xFF000000 | colour );
			TYPED_ARRAY_SET_INT32( this._bufferIndexArray, insertIndex, bufferIndex );
		}
	};
	
	
	WebGlRenderSurface.prototype.getRenderBufferHash = function() {
	
		var rusha = new Rusha();
		return rusha.digestFromArrayBuffer( this._offscreen32BitView ).toUpperCase();
	};
	
	
	WebGlRenderSurface.prototype.clearBuffers = function( backgroundColour ) {
	
		// update clear array if background colour changes
		if ( backgroundColour !== this._clearArrayColour ) {
			for ( var i=0; i<this._clearArray.length; ++i ) {
				this._clearArray[ i ] = 0xFF000000 | backgroundColour;
			}
			this._clearArrayColour = backgroundColour;
		}
		
		// set background colour
		this._offscreen32BitView.set( this._clearArray );
		
		// Nes.ClearScreenArray is a quicker way of clearing this array
		this._bufferIndexArray.set( g_ClearScreenArray );
	};
	
	
	WebGlRenderSurface.prototype.render = function( mainboard ) {

		this._glContext.clear(this._glContext.COLOR_BUFFER_BIT);
		this._texture.fill( 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, this._offscreen8BitView );
		this._indexBuffer.draw();
	};
	
	
	WebGlRenderSurface.prototype._createCanvasWithScreenshotOn = function() {
	
		// create copy of offscreen buffer into a new canvas element
		var element = document.createElement('canvas');
		element.width = SCREEN_WIDTH;
		element.height = SCREEN_HEIGHT;
		var canvas = element.getContext( "2d" );
		var imgData = canvas.getImageData( 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT );
		imgData.data.set( this._offscreen8BitView.subarray( 0, SCREEN_WIDTH * SCREEN_HEIGHT * 4 ) );
		canvas.putImageData( imgData, 0, 0 );
		return element;
	};
		
	
	WebGlRenderSurface.prototype.screenshotToFile = function() {
	
		var element = this._createCanvasWithScreenshotOn();
		element.toBlob( function( blob ) {
			saveAs( blob, "screenshot.png" );
		});
	};
	
	
	WebGlRenderSurface.prototype.screenshotToString = function() {
		
		var element = this._createCanvasWithScreenshotOn();
		return element.toDataURL("image/png");
	};
	

	Gui.WebGlRenderSurface = WebGlRenderSurface;
	
}());
