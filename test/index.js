var console_star = require('../index'),
	assert = require('assert');

describe('Calling console.star() ', function(){

	// For testing purposes, we want to send consoleOutput directly to an array
	console.gruntTest = function(consoleOutput) {
		consoleResult.push(consoleOutput);
	};
	console.gruntTestAlt = function(consoleOutput) {
		consoleResultAlt.push(consoleOutput);
	};
	var consoleResult = [],
		consoleResultAlt = [],
		starString = console.starOptions.starString;

	beforeEach(function() {

		// Reset the console array, and reset the starOption Defaults
		consoleResult = [];
		consoleResultAlt = [];

		console.starOptions = {
			'starString': '***************',
			'lines': 2,
			'logType': 'gruntTest'
		};
	});

	it('should prepend stars',function(){

		console.star('Test');
		assert.equal(consoleResult[0], starString);
	});

	it('should append stars',function(){

		console.star('Test');
		assert.equal(consoleResult[4], starString);
	});

	it('should update the number of stars if the config is updated',function(){

		console.starOptions.lines = 3;
		console.star('Test');
		assert.equal(consoleResult[0], starString);
		assert.equal(consoleResult[1], starString);
		assert.equal(consoleResult[2], starString);
		assert.equal(consoleResult.length, 7);
	});

	it('should update the starString if the config is updated',function(){

		var newStarString = '+++++++++++++++';
		console.starOptions.starString = newStarString;
		console.star('Test');
		assert.equal(consoleResult[0], newStarString);
	});

	it('should update the logger if the config is updated',function(){

		console.starOptions.logType = 'gruntTestAlt';
		console.star('Test');
		assert.equal(consoleResultAlt.length, 5);
	});
});