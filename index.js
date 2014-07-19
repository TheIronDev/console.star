/**
 * Console.Star mimics the behaviour of console.log, but also wraps the log in stars
 *
 * Usage:
 * console.star('Hello %s', 'World');
 *
 * Result:
 * ***************
 * ***************
 * Hello World
 * ***************
 * ***************
 *
 * @type {{starString: string, lines: number, logType: string}}
 */


/**
 * Default Options, can be overridden at any time
 * @type {{starString: string, lines: number, logType: string}}
 */
console.starOptions = {
	'starString': '***************',
	'lines': 2,
	'logType': 'log'
};

/**
 * The console[log] wrapper, which pre/post-pends stars
 */
console.star = function() {
	var options = this.starOptions,
		log = this[options.logType],
		lines = options.lines,
		starString = options.starString;

	// Pre-log Stars
	while(lines--){log.call(this, starString);}

	// Apply the original console[log]
	log.apply(this, arguments);

	// Reset the count, post-log stars
	lines = options.lines
	while(lines--){log.call(this, starString);}
}

exports = console.star;