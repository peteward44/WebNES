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
		this._ready = false;

		this._clearArray = new Uint32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._clearArrayColour = this._clearArray[0];

		this._bufferIndexArray = new Int32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._offscreen32BitView = new Uint32Array( TEXTURE_WIDTH * TEXTURE_HEIGHT );
		this._offscreen8BitView = new Uint8Array( this._offscreen32BitView.buffer );

		this._element = canvasParent.getCanvasElement();
		this._glContext = WebGl.getGlContext( this._element );

		this._camera = new WebGl.OrthoCamera( this._glContext );
		this._camera.setup( SCREEN_WIDTH, SCREEN_HEIGHT );

		this._initBuffers();
			
		this._texture = new WebGl.FillableTexture( this._glContext, TEXTURE_WIDTH, TEXTURE_HEIGHT );
			
		canvasParent.connect( 'resize', function() { that._onResize(); } );

		this._inputSizeShaderArray = new Float32Array( [ SCREEN_WIDTH, SCREEN_HEIGHT ] );
		this._outputSizeShaderArray = new Float32Array( [ SCREEN_WIDTH, SCREEN_HEIGHT ] );
		this._textureSizeShaderArray = new Float32Array( [ TEXTURE_WIDTH, TEXTURE_HEIGHT ] );
		
		this._shader = new WebGl.ShaderProgram( this._glContext );
		
		this.loadShader( null, function() {
			that._ready = true;
		} );
	};
	
	
	WebGlRenderSurface.prototype.loadShader = function( shaderFilename, callback ) {
	
		var that = this;
		this._shader.loadAndLink( shaderFilename, function() {
			that._shader.use();

			that._glContext.uniform2fv(that._shader.getUniformLocation("rubyInputSize"), that._inputSizeShaderArray );
			that._glContext.uniform2fv(that._shader.getUniformLocation("rubyOutputSize"), that._outputSizeShaderArray );
			that._glContext.uniform2fv(that._shader.getUniformLocation("rubyTextureSize"), that._textureSizeShaderArray );

			that._glContext.uniformMatrix4fv( that._shader.getUniformLocation("aModelViewProjectionMatrix"), false, that._camera.getMVPMatrix() );

			that._vertexBuffer.bind( that._shader.getAttrib( "aVertexPosition" ) );
			that._textureCoordBuffer.bind( that._shader.getAttrib( "aTextureCoord" ) );
			that._indexBuffer.bind();
			that._texture.bind();

			that._glContext.uniform1i(that._shader.getUniformLocation("rubyTexture"), 0); //Texture unit 0 is for base images.
			
			callback();
		}  );
	};

	
	WebGlRenderSurface.prototype._initBuffers = function() {
		var t = SCREEN_WIDTH / TEXTURE_WIDTH;
		var u = SCREEN_HEIGHT / TEXTURE_HEIGHT;
		
		var vertices = new Float32Array( [
				0, 0,							0.0, 1.0,
				SCREEN_WIDTH,	0,				0.0, 1.0,
				SCREEN_WIDTH,	SCREEN_HEIGHT,	0.0, 1.0,
				0,				SCREEN_HEIGHT,	0.0, 1.0
			] );
		var texCoords = new Float32Array( [
				0.0,	0.0,
				t,		0.0,
				t,		u,
				0.0,	u
			] );
		var indices = new Uint16Array( [ 0, 1, 2,	0, 2, 3 ] );
	
		this._vertexBuffer = new WebGl.VertexBuffer( this._glContext );
		this._vertexBuffer.setData( vertices, 4, 4 );

		this._textureCoordBuffer = new WebGl.VertexBuffer( this._glContext );
		this._textureCoordBuffer.setData( texCoords, 2, 4 );

		this._indexBuffer = new WebGl.IndexBuffer( this._glContext );
		this._indexBuffer.setData( indices, 6 );
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

		if ( !this._ready ) {
			return;
		}
		this._glContext.clear(this._glContext.COLOR_BUFFER_BIT);
		this._texture.fill( 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, this._offscreen8BitView );
		this._glContext.uniform1i(this._shader.getUniformLocation("rubyFrameCount"), mainboard.ppu.frameCounter );
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
	
	
	WebGlRenderSurface.prototype.loadShaderFromUrl = function( url ) {
	
		this.loadShader( url, function() {} );
	};

	
	Gui.WebGlRenderSurface = WebGlRenderSurface;
	
}());
