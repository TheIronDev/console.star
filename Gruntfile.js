module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			src: ['index.js', 'test/index.js']
		}
	});


	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s).
	grunt.registerTask('default', ['jshint']);

};