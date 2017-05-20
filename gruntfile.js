module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['**/ar/*.scss', '**/en/*.scss'],
          dest: 'dist/',
          ext: '.css'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['scss/**'],
        tasks: ['sass-compile'],
        options: {
          spawn: false,
        },
      },
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/assets/css/ar/style.css': ['dist/ar/style.css'],
          'dist/assets/css/en/style.css': ['dist/en/style.css'],
        }
      }
    },

    htmlmin: {    
    dev: {                                       // Another target
        files: [{
          expand: true,
          cwd: 'templates',
          src: ['**/layout/*.html', '**/views/*.html'],
          dest: 'dist'
      }]
    }
  }
    
  });


  grunt.registerTask('sass-compile', ['sass', "cssmin",'htmlmin']);
  grunt.registerTask('sass-watch', ['watch']);
  grunt.registerTask('default', ['sass-compile']);

};