'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    clean: ['dist'],

    copy: {
      dist: {
        files: [{
          src: 'src/sass-flex-mixins.scss',
          dest: 'dist/sass-flex-mixins.scss'
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'copy:dist'
  ]);

  grunt.registerTask('default', ['build']);
};
