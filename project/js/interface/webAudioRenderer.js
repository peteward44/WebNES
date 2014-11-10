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

"use strict";


var WebAudioBuffer = function( audioContext, masterVolNode, size ) {

	this._locked = false;
	this.audioContext = audioContext;

	this.audioNode = null;
	this._gainNode = this.audioContext['createGain']();
	this._gainNode['connect']( masterVolNode );
	
	this.audioBuffer = this.audioContext['createBuffer']( 1, size, this.audioContext['sampleRate'] );

};


WebAudioBuffer.prototype.lockBuffer = function() {

	this._locked = true;
	return this.audioBuffer['getChannelData']( 0 );
};


WebAudioBuffer.prototype.unlockBuffer = function() {

	this._locked = false;
	
	// Alternative method using audio node buffer instead of onaudioprocess
	if ( this.audioNode ) {
		 this.audioNode['disconnect']();
		 this.audioNode = null;
	}
	this.audioNode = this.audioContext['createBufferSource']();
	this.audioNode['buffer'] = this.audioBuffer;
	
	this.audioNode['connect'](this._gainNode);
	this.audioNode['start'](0);
};


////////////////////////////////////////////////////////////////////////////////////////


var WebAudioRenderer = function( bufferSize, sampleRate ) {

	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	if ( window.AudioContext === undefined ) {
		throw new Error( "WebAudio not supported in this browser" );
	}
	this.audioContext = new window.AudioContext();
	this._gainNode = this.audioContext['createGain']();
	this._gainNode['connect']( this.audioContext['destination'] );
};


WebAudioRenderer.prototype.setVolume = function( val ) {
	if ( this._gainNode ) {
		this._gainNode['gain']['value'] = val / 100;
	}
};


WebAudioRenderer.prototype.getSampleRate = function() {
	return this.audioContext['sampleRate'];
};


WebAudioRenderer.prototype.createBuffer = function( size ) {
	return new WebAudioBuffer( this.audioContext, this._gainNode, size );
};


Gui.WebAudioRenderer = WebAudioRenderer;

