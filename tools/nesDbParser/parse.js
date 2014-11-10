
"use strict";

var fs = require( 'fs' );
var path = require( 'path' );
var extend = require('node.extend');
var parseString = require('xml2js').parseString;

var gameGenieTextFile = path.join( __dirname, 'gameGenieCodes.txt' );
var outDir = path.join( process.cwd(), 'out' );
var logFile = path.join( process.cwd(), 'log.txt' );

var ggCodes = {};
var ggLookupMap = {};

fs.writeFileSync( logFile, '' );


var outputGameGenieCodesThatWerentLookedUp = function() {

	var a = Object.keys( ggLookupMap );
	for ( var i=0; i<a.length; ++i ) {
		var gameName = a[i];
		if ( !ggLookupMap[ gameName ] ) {
			fs.appendFileSync( logFile, "WARNING: Game genie game not used: '" + gameName + "'\n" );
		}
	}
};


var lookupGameGenieCodes = function( gameName ) {
	
	ggLookupMap[ gameName ] = true;
	return ggCodes[ gameName ];
};


var parseCodeLine = function( codeLine, absoluteLine ) {

	var validCharacters = [ 'A', 'P', 'Z', 'L', 'G', 'I', 'T', 'Y', 'E', 'O', 'X', 'U', 'K', 'S', 'V', 'N' ];
	
	var validateCode = function( c ) {
		for ( var i=0; i<c.length; ++i ) {
			var letter = c[i];
			if ( validCharacters.indexOf( letter ) < 0 ) {
				return false;
			}
		}
		return true;
	};
	
	// need to parse '+' between codes and '/' (AND and OR)
	var split = codeLine.split( ' ' ).filter( function( l ) { return l.length > 0; } );
	var codes = [];
	var code = [];
	var codeName = '';
	var expectCode = true;
	for ( var j=0; j<split.length; ++j ) {
		var c = split[j];
		if ( expectCode ) {
			if ( c.length === 8 || c.length === 6 ) {
				if ( !validateCode( c ) ) {
					fs.appendFileSync( logFile, "WARNING: Code at line " + absoluteLine + " contains invalid characters '" + c + "'\n" );
				} else {
					code.push( c );
				}
				expectCode = false;
			} else {
				fs.appendFileSync( logFile, "WARNING: Game genie text file parser expected code at line " + absoluteLine + " but got '" + c + "'\n" );
			}
		} else if ( !expectCode && ( c === '/' || c === '+' ) ) {
			expectCode = true;
			if ( c === '/' ) { // OR
				codes.push( code.slice( 0 ) );
				code = [];
			}
		} else {
			codes.push( code );
			codeName = split.slice( j ).join( ' ' );
			break;
		}
	}
	return { name: codeName.trim(), codes: codes };
};


var loadGameGenieCodes = function() {

	ggCodes = {};
	
	var content = fs.readFileSync( gameGenieTextFile ).toString();
	// format is game name\n\ncodes\n\n
	var lines = content.split( '\n' );
	
	for ( var i=0; i<lines.length; ) {
	
		var gameName = lines[ i++ ].trim();
		var blank = lines[ i++ ].trim();
		if ( blank !== '' ) {
			fs.appendFileSync( logFile, "WARNING: Game genie text file parser expected blank line at line " + i + " but got '" + blank + "'\n" );
		}
		var codes = [];
		while ( i < lines.length ) {
			var codeLine = lines[ i++ ].trim();
			if ( codeLine === '' ) {
				break;
			} else {
				codes.push( parseCodeLine( codeLine, i ) );
			}
		}
		
		ggCodes[ gameName ] = codes;
		ggLookupMap[ gameName ] = false;
	}
};




var filterObject = function( sha1, game ) {
	// remove any cartridge instances that dont match the sha1
	var copy = extend( true, {}, game );
	copy.cartridge = copy.cartridge.filter( function( cart ) {
		return cart.$.sha1 === sha1;
	} );
	return copy;
};


var outputFiles = function( result ) {

	if ( !fs.existsSync( outDir ) ) {
		fs.mkdirSync( outDir );
	}
	
	result.database.game.forEach( function( game ) {
		try {
			var ggCodes = lookupGameGenieCodes( game.$.name );

			game.cartridge.forEach( function( cartridge ) {
				var name = cartridge.$.sha1;
				
				var outFile = path.join( outDir, name.toUpperCase() + ".js" );
				if ( !fs.existsSync( outFile ) ) {
					var filtered = filterObject( cartridge.$.sha1, game );
					if ( ggCodes ) {
						filtered.gameGenieCodes = ggCodes;
					}
					fs.writeFileSync( outFile, "this.NesDb = this.NesDb || {};\n\nNesDb[ '" + name + "' ] = " + JSON.stringify( filtered, null, '\t' ) + ";\n" );
				}
			} );
		}
		catch ( err ) {
			console.log( err );
			if ( err.stack ) {
				console.log( err.stack );
			}
		}
	} );
	
	outputGameGenieCodesThatWerentLookedUp();
};


var start = function() {

	if ( process.argv.length < 2 ) {
		console.log( "Must specify filename!" );
		return 1;
	}

	var filename = process.argv.slice(2).join( " " );
	
	if ( !fs.existsSync( filename ) ) {
		console.log( filename + " does not exist!" );
		return 1;
	}
	
	loadGameGenieCodes();
	
	var xml = fs.readFileSync( filename );
	parseString( xml, function( err, result ) {
		if ( err ) {
			console.log( "Error parsing file: " + err );
		} else {
			//fs.writeFileSync( 'out.txt', JSON.stringify( result, null, '\t' ) );
			outputFiles( result );
		}
	} );
	
	return 0;
};


var exitCode = 0;

try {
	exitCode = start();
}
catch ( err ) {
	console.log( err );
	if ( err.stack ) {
		console.log( err.stack );
	}
	exitCode = 1;
}

process.exit( exitCode );
