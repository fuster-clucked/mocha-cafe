Object.defineProperty( Error.prototype, 'htmlMessage', {
	get: function () {
		if( this.expected === undefined && this.actual === undefined )
			return

		return JsDiff.diffChars( this.expected, this.actual )
			.reduce( function ( html, part ) {
				var color = part.added ? 'limegreen' : part.removed ? 'red' : 'lightgrey'
				html.push( '<span style="color:', color, '">', part.value, '</span>' )
				return html
			}, [] ).join( '' )
	}
} )

var started = false;

Object.getPrototypeOf( System ).go = function ( config ) {
	this.config( config || {
		packages: { '.': { defaultExtension: 'js' } }
	} )

	this.import( 'index' ).then( function ( exports ) {
		mocha.suite.emit( 'require', exports )
		mocha.run()
	} )

	started = true;
}

addEventListener( 'DOMContentLoaded', function () {

	var $mocha = document.querySelector( '#mocha' )

	if( !$mocha ) {
		$mocha = document.createElement( 'main' )
		$mocha.id = 'mocha'
		document.body.appendChild( $mocha )
	}

	var $link = document.createElement( 'link' )
	$link.rel = 'stylesheet'
	$link.href = '//cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.min.css'
	$mocha.appendChild( $link )

	if( !started )
		System.go()

} )
