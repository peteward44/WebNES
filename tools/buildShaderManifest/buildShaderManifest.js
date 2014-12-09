
"use strict";

var path = require( 'path' );
var fs = require( 'fs' );

var changeSlashes = function( str ) {
	return str.replace( /\\/g, '/' );
};


var outputManifest = function( manifest ) {

	var out = '';
	manifest.forEach( function( file ) {
		var name = path.basename( file, path.extname( file ) );
		out += '<option value="' + changeSlashes( file ) + '">' + name + '</option>\n';
	} );
	fs.writeFileSync( 'out.log', out );
};

	
var readDir = function( folder, rootFolder, manifest ) {
	var files = fs.readdirSync( folder );
	
	files.forEach( function( justFile ) {
		var absfile = path.join( folder, justFile );
		var rootFile = path.join( rootFolder, justFile );
		if ( fs.statSync( absfile ).isFile() ) {
			manifest.push( rootFile );
		} else {
			readDir( absfile, rootFile, manifest );
		}
	} );
};


var start = function( folder ) {
	var manifest = [];
	var rootFolder = '';
	readDir( folder, rootFolder, manifest );
	outputManifest( manifest );
};


start( process.argv[2] );
