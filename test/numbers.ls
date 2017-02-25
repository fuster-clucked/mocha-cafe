a = Math.floor Math.random Number.MAX_SAFE_INTEGER
b = Math.floor Math.random Number.MAX_SAFE_INTEGER
c = Math.floor Math.random Number.MAX_SAFE_INTEGER

module.exports =

	'should be closed over addition': !->
		if is-NaN a + b
			throw new Error!

	'should be associative over addition': !->
		if ( a + b ) + c != a + ( b + c )
			throw new Error!

	'should be identical over addition of zero': !->
		if a + 0 != a or 0 + a != a
			throw new Error!

	'should be zero over addition of inverse': !->
		if a + ( -a ) != 0 or ( -a ) + a != 0
			throw new Error!
