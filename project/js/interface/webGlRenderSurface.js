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
	
		
	var WebGlRenderSurface = function( canvasParent ) {
	
		var that = this;
			
		this._cubeVertexPositionBuffer = null;
		this._cubeVertexTextureCoordBuffer = null;
		this._cubeVertexIndexBuffer = null;

		this._clearArray = new Uint32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._clearArrayColour = this._clearArray[0];

		this._bufferIndexArray = new Int32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
		this._offscreen32BitView = new Uint32Array( TEXTURE_WIDTH * TEXTURE_HEIGHT );
		this._offscreen8BitView = new Uint8Array( this._offscreen32BitView.buffer );

		this._element = canvasParent.getCanvasElement();
		this._glContext = this._element.getContext("webgl") || this._element.getContext("experimental-webgl");
		this._glContext.viewportWidth = this._element.width;
		this._glContext.viewportHeight = this._element.height;
		this._glContext.clearColor(0.0, 0.0, 0.0, 1.0);
			

		this._mvMatrix = mat4.create();
		this._pMatrix = mat4.create();

		this._initShaders();
		this._initBuffers();
		this._initTexture();

		canvasParent.connect( 'resize', function() { that._onResize(); } );
	};

	
	WebGlRenderSurface.prototype._initBuffers = function() {

		this._cubeVertexPositionBuffer = this._glContext.createBuffer();
		this._glContext.bindBuffer(this._glContext.ARRAY_BUFFER, this._cubeVertexPositionBuffer);
		var vertices = new Float32Array( [
			0, 0,							0.0,
			SCREEN_WIDTH,	0,				0.0,
			SCREEN_WIDTH,	SCREEN_HEIGHT,	0.0,
			0,				SCREEN_HEIGHT,	0.0
		] );
		this._glContext.bufferData(this._glContext.ARRAY_BUFFER, vertices, this._glContext.STATIC_DRAW);
		this._cubeVertexPositionBuffer.itemSize = 3;
		this._cubeVertexPositionBuffer.numItems = 4;

		this._cubeVertexTextureCoordBuffer = this._glContext.createBuffer();
		this._glContext.bindBuffer(this._glContext.ARRAY_BUFFER, this._cubeVertexTextureCoordBuffer);
		var t = SCREEN_WIDTH / TEXTURE_WIDTH;
		var u = SCREEN_HEIGHT / TEXTURE_HEIGHT;
		var textureCoords = new Float32Array( [
			0.0,	0.0,
			t,		0.0,
			t,		u,
			0.0,	u
		] );
		this._glContext.bufferData(this._glContext.ARRAY_BUFFER, textureCoords, this._glContext.STATIC_DRAW);
		this._cubeVertexTextureCoordBuffer.itemSize = 2;
		this._cubeVertexTextureCoordBuffer.numItems = 4;

		this._cubeVertexIndexBuffer = this._glContext.createBuffer();
		this._glContext.bindBuffer(this._glContext.ELEMENT_ARRAY_BUFFER, this._cubeVertexIndexBuffer);
		var cubeVertexIndices = new Uint16Array( [
			0, 1, 2,	0, 2, 3
		] );
		this._glContext.bufferData(this._glContext.ELEMENT_ARRAY_BUFFER, cubeVertexIndices, this._glContext.STATIC_DRAW);
		this._cubeVertexIndexBuffer.itemSize = 1;
		this._cubeVertexIndexBuffer.numItems = 6;
	};
	

	WebGlRenderSurface.prototype._initTexture = function() {
	
		var that = this;
		this._texture = this._glContext.createTexture();
		
		this._glContext.bindTexture(this._glContext.TEXTURE_2D, this._texture);
		this._glContext.pixelStorei(this._glContext.UNPACK_FLIP_Y_WEBGL, true);
		this._glContext.texImage2D(this._glContext.TEXTURE_2D, 0, this._glContext.RGBA, TEXTURE_WIDTH, TEXTURE_HEIGHT, 0, this._glContext.RGBA, this._glContext.UNSIGNED_BYTE, null );
	};
	

	WebGlRenderSurface.prototype._setMatrixUniforms = function() {
		this._glContext.uniformMatrix4fv(this._shaderProgram.pMatrixUniform, false, this._pMatrix);
		this._glContext.uniformMatrix4fv(this._shaderProgram.mvMatrixUniform, false, this._mvMatrix);
	}

	

	WebGlRenderSurface.prototype._compileShader = function(id) {
		var shaderScript = document.getElementById(id);
		if (!shaderScript) {
			return null;
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
			return null;
		}

		this._glContext.shaderSource(shader, str);
		this._glContext.compileShader(shader);

		if (!this._glContext.getShaderParameter(shader, this._glContext.COMPILE_STATUS)) {
			throw new Error( this._glContext.getShaderInfoLog(shader) );
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
		this._glContext.viewportWidth = this._element.width;
		this._glContext.viewportHeight = this._element.height;
		this._glContext.viewport(0, 0, this._element.width, this._element.height);
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

	
		this._glContext.viewport(0, 0, this._glContext.viewportWidth, this._glContext.viewportHeight);
		this._glContext.clear(this._glContext.COLOR_BUFFER_BIT | this._glContext.DEPTH_BUFFER_BIT);
		
		mat4.ortho(this._pMatrix, 0, SCREEN_WIDTH, 0, SCREEN_HEIGHT, 0.1, 100)

		mat4.identity(this._mvMatrix);
		mat4.translate(this._mvMatrix, this._mvMatrix, [0.0, 0.0, -0.1]);

		this._glContext.bindBuffer(this._glContext.ARRAY_BUFFER, this._cubeVertexPositionBuffer);
		this._glContext.vertexAttribPointer(this._shaderProgram.vertexPositionAttribute, this._cubeVertexPositionBuffer.itemSize, this._glContext.FLOAT, false, 0, 0);

		this._glContext.bindBuffer(this._glContext.ARRAY_BUFFER, this._cubeVertexTextureCoordBuffer);
		this._glContext.vertexAttribPointer(this._shaderProgram.textureCoordAttribute, this._cubeVertexTextureCoordBuffer.itemSize, this._glContext.FLOAT, false, 0, 0);

		this._glContext.activeTexture(this._glContext.TEXTURE0);
		this._glContext.bindTexture( this._glContext.TEXTURE_2D, this._texture );
		//this._glContext.texImage2D( this._glContext.TEXTURE_2D, 0, this._glContext.RGBA, 256, 256, 0, this._glContext.RGBA, this._glContext.UNSIGNED_BYTE, this._offscreen8BitView );
		this._glContext.texSubImage2D( this._glContext.TEXTURE_2D, 0, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, this._glContext.RGBA, this._glContext.UNSIGNED_BYTE, this._offscreen8BitView );
  
		var filtering = this._glContext.LINEAR; // NEAREST
  
		this._glContext.texParameteri(this._glContext.TEXTURE_2D, this._glContext.TEXTURE_MAG_FILTER, filtering);
		this._glContext.texParameteri(this._glContext.TEXTURE_2D, this._glContext.TEXTURE_MIN_FILTER, filtering);

		this._glContext.uniform1i(this._shaderProgram.samplerUniform, 0);

		this._glContext.bindBuffer(this._glContext.ELEMENT_ARRAY_BUFFER, this._cubeVertexIndexBuffer);
		this._setMatrixUniforms();
		this._glContext.drawElements(this._glContext.TRIANGLES, this._cubeVertexIndexBuffer.numItems, this._glContext.UNSIGNED_SHORT, 0);
	};
		
	
	WebGlRenderSurface.prototype.screenshotToFile = function() {

		// this._offscreenElement.toBlob( function( blob ) {
			// saveAs( blob, "screenshot.png" );
		// });
	};
	
	
	WebGlRenderSurface.prototype.screenshotToString = function() {

		//return this._offscreenElement.toDataURL("image/png");
		return '';
	};
	
	
	Gui.WebGlSupported = function() {
		try {
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
			return ctx !== null;
		}
		catch (e) {
			return false;
		}
	};
	
	Gui.WebGlRenderSurface = WebGlRenderSurface;
	
}());
