
"use strict";

var path = require( 'path' );
var fs = require( 'fs' );
var JSZip = require( 'jszip' );


var getTargetFolder = function( mapperId ) {
	
	return path.join( 'c:\\incoming\\sorted_nes', 'mapper_' + mapperId );
};


var copyFile = function( filename, mapperId, callback ) {

	var targetFolder = getTargetFolder( mapperId );
	if ( !fs.existsSync( targetFolder ) ) {
		fs.mkdirSync( targetFolder );
	}
	var targetFile = path.join( targetFolder, path.basename( filename ) );
	var rs = fs.createReadStream( filename );
	var ws = fs.createWriteStream( targetFile );
	rs.on( 'close', function() {
		rs.unpipe();
		callback();
	} );
	rs.pipe( ws );
};



var getMapperId = function( binaryString ) {

	var stringIndex = 0;
	var correctHeader = [ 78, 69, 83, 26 ];
	
	for ( var i=0; i<correctHeader.length; ++i )
	{
		if ( correctHeader[ i ] !== binaryString[ stringIndex++ ] )
			throw( 'Invalid NES header for file!' );
	}

	var prgPageCount = binaryString[ stringIndex++ ];
	var chrPageCount = binaryString[ stringIndex++ ];
	var controlByte1 = binaryString[ stringIndex++ ];
	var controlByte2 = binaryString[ stringIndex++ ];
	
	stringIndex += 8; // eight zeroes in file
	
	var horizontalMirroring = (controlByte1 & 0x01) === 0;
	var sramEnabled = (controlByte1 & 0x02) > 0;
	var hasTrainer = (controlByte1 & 0x04) > 0;
	var fourScreenRamLayout = (controlByte1 & 0x08) > 0;
	
	// var mirroringMethod = 0;
	// if ( fourScreenRamLayout )
		// mirroringMethod = Nes.PPU_MIRRORING_METHOD.FOURSCREEN;
	// else if ( !horizontalMirroring )
		// mirroringMethod = Nes.PPU_MIRRORING_METHOD.VERTICAL;
	// else
		// mirroringMethod = Nes.PPU_MIRRORING_METHOD.HORIZONTAL;
	
	var mapperId = 0;
	mapperId |= (controlByte1 & 0xF0) >> 4;
	mapperId |= (controlByte2 & 0xF0);

	return mapperId;
};


var load = function( file, binaryString, callback ) {

	var mapperId = getMapperId( binaryString );
	copyFile( file, mapperId, callback );
};


var attemptLoad = function( file, callback ) {

	if ( file.match( /\.zip$/i ) ) {
		// zip - decompress using jszip lib
		var binaryString = fs.readFileSync( file );
		var zip = new JSZip( binaryString );
		var findArray = zip.file( /\.nes$/i );
		if ( findArray.length === 0 ) {
			throw new Error( "Could not find .nes file in zip file " + name );
		}
		load( file, findArray[0].asUint8Array(), callback );
	} else if ( file.match( /\.nes$/i ) ) {
		// uncompressed file
		var binaryString = fs.readFileSync( file );
		load( file, binaryString, callback );
	} else {
		throw new Error( "Unsupported file extension for file " + name );
	}

};


var nextFile = function( folder, files, index, callback ) {

	var file = path.join( folder, files[index] );
	if ( fs.statSync( file ).isFile() ) {
		try {
			attemptLoad( file, callback );
		}
		catch ( err ) {
			console.log( "Error loading file " + file + " " + err );
			callback();
		}
	}
};


var start = function( folder ) {
	
	var files = fs.readdirSync( folder );
	var index = 0;
	
	var callback = function() {
		if ( index + 1 < files.length ) {
			setImmediate( function() { nextFile( folder, files, ++index, callback ); } );
		}
	};
	
	nextFile( folder, files, index, callback );
};





start( 'c:\\incoming\\nes' );
