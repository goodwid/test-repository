const assert = require('chai').assert;
const fizzbuzz = require('../lib/fizzbuzz');

describe('fizz buzz', () => {
	it( 'counts to 15', () => {
		assert.deepEqual( 
			fizzbuzz(15), 
			[1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']
		);
	});
});