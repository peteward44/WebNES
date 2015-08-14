
"use strict";

var path = require( 'path' );
var fs = require( 'fs' );

var rootOutput = path.join( process.cwd(), 'out' );

module.exports = function(grunt) {

	var isDebug = grunt.option( "debug" ) ? true : false;

	var outputHtml = path.join( rootOutput, 'index_app.html' );
	var outputJs = path.join( rootOutput, 'js', 'nes.min.js' );
	var outputComponentsJs = path.join( rootOutput, 'js', 'nes.components.min.js' );
	var tempClosureBuildFile = path.join( rootOutput, 'js', 'tmp.nes.min.js' );
	var tempComponentsClosureBuildFile = path.join( rootOutput, 'js', 'tmp.nes.components.min.js' );

	var closureOptionsNesJs = {
		compilerFile: 'closureCompiler/build/compiler.jar',
		checkModified: false,
		compilerOpts: {
			compilation_level: 'SIMPLE_OPTIMIZATIONS',
			debug: isDebug,
			externs: ['closureCompiler/externs/*.js'],
			warning_level: 'verbose',
			jscomp_error: [ 'checkRegExp', 'checkDebuggerStatement', 'checkVars', 'const', 'constantProperty', 'duplicate', 'suspiciousCode' ],
	//			jscomp_warning: [ /*'checkTypes'*/ ],
			jscomp_off: ['globalThis', 'checkTypes' ],
			summary_detail_level: 3
		},
		execOpts: {
			maxBuffer: 500 * 1024 * 1024
		},
		d32: false, // will use 'java -client -d32 -jar compiler.jar'
		TieredCompilation: true // will use 'java -server -XX:+TieredCompilation -jar compiler.jar'
	};
	
	
	var closureOptionsNesComponentsJs = {
		compilerFile: 'closureCompiler/build/compiler.jar',
		checkModified: false,
		compilerOpts: {
			compilation_level: 'SIMPLE_OPTIMIZATIONS',
			debug: isDebug,
			externs: ['closureCompiler/externs/*.js'],
			warning_level: 'QUIET',
			jscomp_off: ['globalThis', 'checkTypes', 'checkRegExp', 'checkDebuggerStatement', 'checkVars', 'const', 'constantProperty', 'duplicate', 'suspiciousCode' ],
			summary_detail_level: 3
		},
		execOpts: {
			maxBuffer: 500 * 1024 * 1024
		},
		d32: false, // will use 'java -client -d32 -jar compiler.jar'
		TieredCompilation: true // will use 'java -server -XX:+TieredCompilation -jar compiler.jar'
	};
	
	
	if ( isDebug ) {
		closureOptionsNesJs.compilerOpts.formatting = 'PRETTY_PRINT';
	}

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{ expand: true, nonull: true, cwd: 'project', src: ['**.html'], dest: rootOutput },
					{ expand: true, nonull: true, cwd: 'bower_components/jquery-ui/themes/smoothness/images', src: ['**'], dest: path.join( rootOutput, 'css/images' ) },
					{ expand: true, nonull: true, cwd: 'project/js/db', src: ['**'], dest: path.join( rootOutput, 'js/db' ) },
					{ expand: true, nonull: true, cwd: 'project/shaders', src: ['**'], dest: path.join( rootOutput, 'shaders' ) },
					{ expand: true, nonull: true, cwd: 'project/images', src: ['**'], dest: path.join( rootOutput, 'images' ) }
				]
			}
		},
		rename: {
			main: {
				files: [
					{ src: tempClosureBuildFile, dest: outputJs },
					{ src: tempComponentsClosureBuildFile, dest: outputComponentsJs }
				]
			}
		},
		replaceDebugMethods: {
			main: {
				src: outputJs
			}
		},
		closureCompiler:  {
			// any name that describes your task
			nesJs: {
				src: outputJs,
				dest: tempClosureBuildFile,
				options: closureOptionsNesJs
			},
			
			nesComponentsJs: {
				src: outputComponentsJs,
				dest: tempComponentsClosureBuildFile,
				options: closureOptionsNesComponentsJs
			}
		},
		// uglify: {
			// options: {
				// banner: "/* Nesulator : Pete Ward 2014 : peteward44@gmail.com */\n",
				// mangle: false,
				// compress: false
			// }
		// },
		useminPrepare: {
			html: 'project/index_app.html',
			options: {
				dest: rootOutput,
				flow: {
					steps: {
						js: ['concat'],
						css: ['concat', 'cssmin']
					},
					post: {}
				}
			}
		},
		usemin: {
			html: outputHtml
		}
	});
	
	grunt.registerMultiTask( 'replaceDebugMethods', 'Replaces debug functions', function() {
		
		var doesHaveBrackets = function( text, regex ) {
			var matches = text.match( regex );
			if ( matches && matches.length > 0 ) {
				for ( var i=0; i<matches.length; ++i ) {
					var m = matches[i];
					var bracketMatch = m.match( /\(/g );
					if ( bracketMatch && bracketMatch.length > 1 ) {
						return m;
					}
				}
			}
			return null;
		};
		
		var text = fs.readFileSync( this.data.src ).toString();
		
		// this can be buggy if there are brackets in the middle of the function. So we disallow the usage of brackets in the matches.
		// We count the number of opening brackets to see if they've been used, throw exception if they have.
		// check each use of TYPED_ARRAY_GET and TYPED_ARRAY_SET to determine if brackets were used in the expression
		var getRegex = new RegExp( "TYPED_ARRAY_GET_[\\w\\d]+\\s*\\(([^\\,]+)\\,([^\\)]+)\\)", 'g' );
		var setRegex = new RegExp( "TYPED_ARRAY_SET_[\\w\\d]+\\s*\\(([^\\,]+)\\,([^\\,]+)\\,([^\\)]+)\\)", 'g' );
		
		var m = doesHaveBrackets( text, getRegex );
		if ( m ) {
			throw new Error( "TYPED_ARRAY_GET has brackets in expression, please remove '" + m + "'" );
		}
		
		m = doesHaveBrackets( text, setRegex );
		if ( m ) {
			throw new Error( "TYPED_ARRAY_SET has brackets in expression, please remove '" + m + "'" );
		}
		
		text = text.replace( getRegex, "$1[$2]" );
		text = text.replace( setRegex, "$1[$2] = $3" );
		
		// Remove any Nes.Trace.writeLine calls in release build
	//	if ( !isDebug ) {
			text = text.replace( /^\s*Nes\.Trace\.writeLine.*$/mg, "" );
	//	}
		
		fs.writeFileSync( this.data.src, text );
	} );

	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-closure-tools' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-rename' );
	grunt.loadNpmTasks( 'grunt-usemin' );
	grunt.registerTask( 'default', [
		'copy:main',
		'useminPrepare',
		'concat',
		'cssmin',
		'replaceDebugMethods',
		'closureCompiler',
		'rename',
		'usemin'
	] );

};

