/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      files: ['grunt.js', 'app/*.js']
    },
    reload: {
        port: 8080,
        proxy: {
          host: 'localhost',
          port: 8000
        }
    },
    watch: {
      files: [
        '*.js',
        'examples/**/*.html',
        'examples/**/*.js',
        'examples/**/*.css',
        'test/*.html'],
      tasks: 'reload'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    }
  });

  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('default', 'server reload watch');
};
