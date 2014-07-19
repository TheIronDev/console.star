/** Add a new function to the console object
 *
 */
console.star = function(toConsole, options) {
	var log = this.log;
	log.call(this, '********');
        log.call(this, '********');
	log.call(this, toConsole);
        log.call(this, '********');
        log.call(this, '********');
}

console.star('Test');
