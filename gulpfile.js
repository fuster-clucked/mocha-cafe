const gulp = require( 'gulp' )
const pump = require( 'pump' )

const merge = require( 'merge2' )
const concat = require( 'gulp-concat' )

const download = require( 'gulp-download' )
const uglify = require( 'gulp-uglify' )

const { src, dest } = gulp

const CDNJS = 'http://cdnjs.cloudflare.com/ajax/libs'

gulp.task( 'default', () => {

	pump( [
		merge(
			download( `${CDNJS}/systemjs/0.20.7/system.js`),
			download( `${CDNJS}/mocha/3.2.0/mocha.min.js` ),
			download( `${CDNJS}/jsdiff/3.2.0/diff.min.js` ),
			pump( [ src( 'lib/*.js' ), uglify() ] )
		),
		concat( 'mocha-cafe.min.js' ),
		dest( 'dist' )
	] )

} )
