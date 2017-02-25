var numbers = require( 'numbers' )

mocha.setup( 'exports' )

module.exports = {

	'Mocha Café': {
		'plain errors': {
			'should not blow it up': function () {
				throw new Error( 'Gotcha!' )
			}
		},

		'assertion errors': {
			'should show pretty diff': function () {
				var error = new Error()
				error.expected = 'foobar'
				error.actual = 'barbaz'
				throw error
			}
		}
	},

	'Nerd Showcase': {
		numbers: numbers
	}

}
