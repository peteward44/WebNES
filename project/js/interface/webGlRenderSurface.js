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
	
	// Must be power of 2
	var TEXTURE_WIDTH = 256;
	var TEXTURE_HEIGHT = 256;
	
	
	var getGlContext = function( canvas ) {
		return canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
	};
	
	
	var WebGlVertexBuffer = function( glContext ) {
	
		this._glContext = glContext;
		this._itemSize = 0;
		this._itemCount = 0;
		this._buffer = this._glContext.createBuffer();
	};
	
	WebGlVertexBuffer.prototype.setData = function( vertices, itemSize, itemCount ) {
	
		// ELEMENT_ARRAY_BUFFER is used by index buffer, ARRAY_BUFFER by vertex and tex coord buffers
		this._itemSize = itemSize;
		this._itemCount = itemCount;
		this._glContext.bindBuffer( this._glContext.ARRAY_BUFFER, this._buffer );
		this._glContext.bufferData( this._glContext.ARRAY_BUFFER, vertices, this._glContext.STATIC_DRAW );
	};
	
	
	WebGlVertexBuffer.prototype.bind = function( positionAttribute ) {
		this._glContext.bindBuffer( this._glContext.ARRAY_BUFFER, this._buffer );
		this._glContext.vertexAttribPointer( positionAttribute, this._itemSize, this._glContext.FLOAT, false, 0, 0 );
	};
	
	
	
	var WebGlIndexBuffer = function( glContext ) {
	
		this._glContext = glContext;
		this._itemCount = 0;
		this._buffer = this._glContext.createBuffer();
	};
	
	WebGlIndexBuffer.prototype.setData = function( indices, itemCount ) {
		this._itemCount = itemCount;
		this._glContext.bindBuffer( this._glContext.ELEMENT_ARRAY_BUFFER, this._buffer );
		this._glContext.bufferData( this._glContext.ELEMENT_ARRAY_BUFFER, indices, this._glContext.STATIC_DRAW );
	};
	
	WebGlIndexBuffer.prototype.bind = function() {
		this._glContext.bindBuffer(this._glContext.ELEMENT_ARRAY_BUFFER, this._buffer);
	};
	
	WebGlIndexBuffer.prototype.draw = function() {
		this._glContext.drawElements(this._glContext.TRIANGLES, this._itemCount, this._glContext.UNSIGNED_SHORT, 0);
	};
	

	
	var WebGlRenderSurface = function( canvasParent ) {
	
		var that = this;

		this._clearArray = new Uint32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._clearArrayColour = this._clearArray[0];

		this._bufferIndexArray = new Int32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._offscreen32BitView = new Uint32Array( TEXTURE_WIDTH * TEXTURE_HEIGHT );
		this._offscreen8BitView = new Uint8Array( this._offscreen32BitView.buffer );

		this._element = canvasParent.getCanvasElement();
		this._glContext = getGlContext( this._element );

		this._initShaders();
		this._initBuffers();
		this._initTexture();
		this._initView();
		
		this._vertexBuffer.bind( this._shaderProgram.vertexPositionAttribute );
		this._textureCoordBuffer.bind( this._shaderProgram.textureCoordAttribute );
		this._indexBuffer.bind();

		this._glContext.activeTexture(this._glContext.TEXTURE0);
		this._glContext.bindTexture( this._glContext.TEXTURE_2D, this._texture );
		  
		var filtering = this._glContext.LINEAR; // NEAREST for block quality, LINEAR for softer texture
  
		this._glContext.texParameteri(this._glContext.TEXTURE_2D, this._glContext.TEXTURE_MAG_FILTER, filtering);
		this._glContext.texParameteri(this._glContext.TEXTURE_2D, this._glContext.TEXTURE_MIN_FILTER, filtering);

		this._glContext.uniform1i(this._shaderProgram.samplerUniform, 0);

		canvasParent.connect( 'resize', function() { that._onResize(); } );
	};
	
	
	WebGlRenderSurface.prototype._initView = function() {
	
		var mvMatrix = mat4.create();
		var pMatrix = mat4.create();

		mat4.ortho(pMatrix, 0, SCREEN_WIDTH, 0, SCREEN_HEIGHT, 0.1, 100);
		mat4.identity(mvMatrix);
		mat4.translate(mvMatrix, mvMatrix, [0.0, 0.0, -0.1]);

		this._glContext.uniformMatrix4fv(this._shaderProgram.pMatrixUniform, false, pMatrix);
		this._glContext.uniformMatrix4fv(this._shaderProgram.mvMatrixUniform, false, mvMatrix);
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
	
		this._vertexBuffer = new WebGlVertexBuffer( this._glContext );
		this._vertexBuffer.setData( vertices, 3, 4 );

		this._textureCoordBuffer = new WebGlVertexBuffer( this._glContext );
		this._textureCoordBuffer.setData( texCoords, 2, 4 );

		this._indexBuffer = new WebGlIndexBuffer( this._glContext );
		this._indexBuffer.setData( indices, 6 );
	};
	

	WebGlRenderSurface.prototype._initTexture = function() {
	
		this._texture = this._glContext.createTexture();
		this._glContext.bindTexture(this._glContext.TEXTURE_2D, this._texture);
		this._glContext.pixelStorei(this._glContext.UNPACK_FLIP_Y_WEBGL, true);
		this._glContext.texImage2D(this._glContext.TEXTURE_2D, 0, this._glContext.RGBA, TEXTURE_WIDTH, TEXTURE_HEIGHT, 0, this._glContext.RGBA, this._glContext.UNSIGNED_BYTE, null );
	};
	

	WebGlRenderSurface.prototype._compileShader = function(id) {
		var shaderScript = document.getElementById(id);
		if (!shaderScript) {
			throw new Error( "Could not find shader script for DOM element '" + id + "'" );
		}

		var str = "";
		var k = shaderScript.firstChild;
		while (k) {
			if (k.nodeType === 3) {
				str += k.textContent;
			}
			k = k.nextSibling;
		}

		var shader;
		if (shaderScript.type === "x-shader/x-fragment") {
			shader = this._glContext.createShader(this._glContext.FRAGMENT_SHADER);
		} else if (shaderScript.type === "x-shader/x-vertex") {
			shader = this._glContext.createShader(this._glContext.VERTEX_SHADER);
		} else {
			throw new Error( "Could not find shader script for DOM element '" + id + "'" );
		}

		this._glContext.shaderSource(shader, str);
		this._glContext.compileShader(shader);

		if (!this._glContext.getShaderParameter(shader, this._glContext.COMPILE_STATUS)) {
			throw new Error( "Error compiling shader script '" + id + "' " + this._glContext.getShaderInfoLog(shader) );
		}

		return shader;
	};


	WebGlRenderSurface.prototype._initShaders = function() {
	
		var fragmentShader = this._compileShader( "shader-fs" );
		var vertexShader = this._compileShader( "shader-vs" );

		this._shaderProgram = this._glContext.createProgram();
		this._glContext.attachShader(this._shaderProgram, vertexShader);
		this._glContext.attachShader(this._shaderProgram, fragmentShader);
		this._glContext.linkProgram(this._shaderProgram);

		if (!this._glContext.getProgramParameter(this._shaderProgram, this._glContext.LINK_STATUS)) {
			throw new Error("Could not initialise shaders");
		}

		this._glContext.useProgram(this._shaderProgram);

		this._shaderProgram.vertexPositionAttribute = this._glContext.getAttribLocation(this._shaderProgram, "aVertexPosition");
		this._glContext.enableVertexAttribArray(this._shaderProgram.vertexPositionAttribute);

		this._shaderProgram.textureCoordAttribute = this._glContext.getAttribLocation(this._shaderProgram, "aTextureCoord");
		this._glContext.enableVertexAttribArray(this._shaderProgram.textureCoordAttribute);

		this._shaderProgram.pMatrixUniform = this._glContext.getUniformLocation(this._shaderProgram, "uPMatrix");
		this._shaderProgram.mvMatrixUniform = this._glContext.getUniformLocation(this._shaderProgram, "uMVMatrix");
		this._shaderProgram.samplerUniform = this._glContext.getUniformLocation(this._shaderProgram, "uSampler");
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
		this._glContext.texSubImage2D( this._glContext.TEXTURE_2D, 0, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, this._glContext.RGBA, this._glContext.UNSIGNED_BYTE, this._offscreen8BitView );
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
	
	
	Gui.WebGlSupported = function() {
		try {
			var canvas = document.createElement('canvas');
			var ctx = getGlContext( canvas );
			return ctx !== null;
		}
		catch (e) {
			return false;
		}
	};
	
	Gui.WebGlRenderSurface = WebGlRenderSurface;
	
}());
