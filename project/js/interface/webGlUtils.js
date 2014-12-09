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
	
	
	var MultiCallback = function() {
	
		this._allCallback = null;
		this._dueCount = 0;
		this._completeCount = 0;
	};
	
		
	MultiCallback.prototype._callbackComplete = function() {
	
		this._completeCount++;
		this._checkComplete();
	};
	
	
	MultiCallback.prototype._checkComplete = function() {
	
		if ( this._completeCount === this._dueCount ) {
			this._allCallback();
		}
	};
	
	
	MultiCallback.prototype.callback = function() {
		
		this._dueCount++;
		var that = this;
		return function() { that._callbackComplete(); }
	};
	
	
	MultiCallback.prototype.start = function( allCallback ) {
	
		this._allCallback = allCallback;
		this._checkComplete();
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
		// add some extensions - this enables fwidth() method, see https://www.khronos.org/registry/gles/extensions/OES/OES_standard_derivatives.txt
		this._glContext.getExtension('OES_standard_derivatives');
		
		this._uniformLocationCache = {};
		this._attribCache = {};
		this._shaderProgram = this._glContext.createProgram();
	};
	

	ShaderProgram.prototype._compileShader = function( glType, str ) {
	
		var shader = this._glContext.createShader( glType );

		if ( glType === this._glContext.VERTEX_SHADER ) {
			// Add variables common to all vertex shaders
			str = 'uniform mat4 aModelViewProjectionMatrix;\n' + str;
			str = 'attribute vec4 aVertexPosition;\n' + str;
			str = 'attribute vec2 aTextureCoord;\n' + str;
		}
		
		str = 'precision mediump float;\n' + str; // Bodge precision on script
		str = '#extension GL_OES_standard_derivatives : enable\n' + str;
		
		this._glContext.shaderSource(shader, str);
		this._glContext.compileShader(shader);

		if (!this._glContext.getShaderParameter(shader, this._glContext.COMPILE_STATUS)) {
			throw new Error( "Error compiling shader script " + this._glContext.getShaderInfoLog(shader) );
		}
		
		this._glContext.attachShader(this._shaderProgram, shader);
	};
	
	
	ShaderProgram.prototype._shaderLoadSuccess = function( xmlRaw, callback ) {
		
		var xmlDoc = $( xmlRaw );
		var fragmentStr = xmlDoc.find( 'fragment' ).text();
		var vertexStr = xmlDoc.find( 'vertex' ).text();
		
		this._compileShader( this._glContext.FRAGMENT_SHADER, fragmentStr );
		this._compileShader( this._glContext.VERTEX_SHADER, vertexStr );
		
		this._glContext.linkProgram( this._shaderProgram );

		if (!this._glContext.getProgramParameter( this._shaderProgram, this._glContext.LINK_STATUS )) {
			throw new Error( this._glContext.getProgramInfoLog( this._shaderProgram ) );
		}
		
		callback( null );
	};
	
	
	ShaderProgram.prototype.loadAndLink = function( shaderFile, callback ) {
	
		this._uniformLocationCache = {};
		this._attribCache = {};
			
		var that = this;
		$['ajax']({
			'url': 'shaders/' + shaderFile,
			'success': function( xmlDoc ) { that._shaderLoadSuccess( xmlDoc, callback ); },
			'dataType': 'xml'
		});
	};
	
	
	ShaderProgram.prototype.use = function() {
	
		this._glContext.useProgram(this._shaderProgram);
	};
	
	
	ShaderProgram.prototype.getUniformLocation = function( name ) {
	
		if ( !this._uniformLocationCache.hasOwnProperty( name ) ) {
			 this._uniformLocationCache[ name ] = this._glContext.getUniformLocation(this._shaderProgram, name);
		}
		return this._uniformLocationCache[ name ];
	};
		
	
	ShaderProgram.prototype.getAttrib = function( name ) {
	
		if ( !this._attribCache.hasOwnProperty( name ) ) {
			this._attribCache[ name ] = this._glContext.getAttribLocation(this._shaderProgram, name);
			this._glContext.enableVertexAttribArray( this._attribCache[ name ] );
		}
		return this._attribCache[ name ];
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
		this._glContext.texParameteri(this._glContext.TEXTURE_2D, this._glContext.TEXTURE_WRAP_S, this._glContext.CLAMP_TO_EDGE);
		this._glContext.texParameteri(this._glContext.TEXTURE_2D, this._glContext.TEXTURE_WRAP_T, this._glContext.CLAMP_TO_EDGE);
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
	
	OrthoCamera.prototype.getMVPMatrix = function() {
		var combined = mat4.create();
		mat4.multiply( combined, this._pMatrix, this._mvMatrix );
		return combined;
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
