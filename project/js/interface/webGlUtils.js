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

this.WebGl = this.WebGl || {};

(function(){
	"use strict";
	
	var getGlContext = function( canvas ) {
		return canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
	};
	
	
	var VertexBuffer = function( glContext ) {
	
		this._glContext = glContext;
		this._itemSize = 0;
		this._itemCount = 0;
		this._buffer = this._glContext.createBuffer();
	};
	
	VertexBuffer.prototype.setData = function( vertices, itemSize, itemCount ) {
	
		// ELEMENT_ARRAY_BUFFER is used by index buffer, ARRAY_BUFFER by vertex and tex coord buffers
		this._itemSize = itemSize;
		this._itemCount = itemCount;
		this._glContext.bindBuffer( this._glContext.ARRAY_BUFFER, this._buffer );
		this._glContext.bufferData( this._glContext.ARRAY_BUFFER, vertices, this._glContext.STATIC_DRAW );
	};
	
	
	VertexBuffer.prototype.bind = function( positionAttribute ) {
		this._glContext.bindBuffer( this._glContext.ARRAY_BUFFER, this._buffer );
		this._glContext.vertexAttribPointer( positionAttribute, this._itemSize, this._glContext.FLOAT, false, 0, 0 );
	};
	
	
	
	var IndexBuffer = function( glContext ) {
	
		this._glContext = glContext;
		this._itemCount = 0;
		this._buffer = this._glContext.createBuffer();
	};
	
	IndexBuffer.prototype.setData = function( indices, itemCount ) {
		this._itemCount = itemCount;
		this._glContext.bindBuffer( this._glContext.ELEMENT_ARRAY_BUFFER, this._buffer );
		this._glContext.bufferData( this._glContext.ELEMENT_ARRAY_BUFFER, indices, this._glContext.STATIC_DRAW );
	};
	
	IndexBuffer.prototype.bind = function() {
		this._glContext.bindBuffer(this._glContext.ELEMENT_ARRAY_BUFFER, this._buffer);
	};
	
	IndexBuffer.prototype.draw = function() {
		this._glContext.drawElements(this._glContext.TRIANGLES, this._itemCount, this._glContext.UNSIGNED_SHORT, 0);
	};
	
	
	var ShaderProgram = function( glContext ) {
	
		this._glContext = glContext;
		this._shaderProgram = this._glContext.createProgram();
	};
	

	ShaderProgram.prototype._compileShader = function(id) {
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
	
	
	ShaderProgram.prototype.loadAndLink = function( fragmentName, vertexName ) {
	
		var fragmentShader = this._compileShader( fragmentName );
		var vertexShader = this._compileShader( vertexName );

		this._glContext.attachShader(this._shaderProgram, vertexShader);
		this._glContext.attachShader(this._shaderProgram, fragmentShader);
		this._glContext.linkProgram(this._shaderProgram);

		if (!this._glContext.getProgramParameter(this._shaderProgram, this._glContext.LINK_STATUS)) {
			throw new Error("Could not initialise shaders");
		}
	};
	
	
	ShaderProgram.prototype.use = function() {
	
		this._glContext.useProgram(this._shaderProgram);
	};
	
	
	ShaderProgram.prototype.getAttrib = function( name ) {
		var attrib = this._glContext.getAttribLocation(this._shaderProgram, name);
		this._glContext.enableVertexAttribArray( attrib );
		return attrib;
	};
	
	
	ShaderProgram.prototype.getUniformLocation = function( name ) {
	
		return this._glContext.getUniformLocation(this._shaderProgram, name);
	};
	
	
	
	var FillableTexture = function( glContext, width, height ) {
	
		this._glContext = glContext;
		this._texture = this._glContext.createTexture();
		this._glContext.bindTexture(this._glContext.TEXTURE_2D, this._texture);
		this._glContext.pixelStorei(this._glContext.UNPACK_FLIP_Y_WEBGL, true);
		this._glContext.texImage2D(this._glContext.TEXTURE_2D, 0, this._glContext.RGBA, width, height, 0, this._glContext.RGBA, this._glContext.UNSIGNED_BYTE, null );
	};
	
	FillableTexture.prototype.bind = function() {
	
		this._glContext.activeTexture(this._glContext.TEXTURE0);
		this._glContext.bindTexture( this._glContext.TEXTURE_2D, this._texture );

		var filtering = this._glContext.LINEAR; // NEAREST for block quality, LINEAR for softer texture
  
		this._glContext.texParameteri(this._glContext.TEXTURE_2D, this._glContext.TEXTURE_MAG_FILTER, filtering);
		this._glContext.texParameteri(this._glContext.TEXTURE_2D, this._glContext.TEXTURE_MIN_FILTER, filtering);
	};
	
	FillableTexture.prototype.fill = function( x, y, width, height, array ) {
	
		this._glContext.texSubImage2D( this._glContext.TEXTURE_2D, 0, x, y, width, height, this._glContext.RGBA, this._glContext.UNSIGNED_BYTE, array );
	};
	
	
	
	var OrthoCamera = function( glContext ) {
	
		this._glContext = glContext;
		this._mvMatrix = mat4.create();
		this._pMatrix = mat4.create();
	};
	
	OrthoCamera.prototype.setup = function( width, height ) {

		mat4.ortho(this._pMatrix, 0, width, 0, height, 0.1, 100);
		mat4.identity(this._mvMatrix);
		mat4.translate(this._mvMatrix, this._mvMatrix, [0.0, 0.0, -0.1]);
	};
	
	OrthoCamera.prototype.setMatrices = function( pMatrixUniform, mvMatrixUniform ) {
		this._glContext.uniformMatrix4fv(pMatrixUniform, false, this._pMatrix);
		this._glContext.uniformMatrix4fv(mvMatrixUniform, false, this._mvMatrix);
	};
	
	
	WebGl.OrthoCamera = OrthoCamera;
	WebGl.FillableTexture = FillableTexture;
	WebGl.ShaderProgram = ShaderProgram;
	WebGl.VertexBuffer = VertexBuffer;
	WebGl.IndexBuffer = IndexBuffer;
	
	
	WebGl.webGlSupported = function() {
		try {
			var canvas = document.createElement('canvas');
			var ctx = getGlContext( canvas );
			return ctx !== null;
		}
		catch (e) {
			return false;
		}
	};
	
	WebGl.getGlContext = getGlContext;
	
}());
