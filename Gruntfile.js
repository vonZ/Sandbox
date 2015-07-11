module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        //Input
        src: [
          'scripts/vendor/jquery/dist/*.js', 
          'scripts/vendor/bootstrap-sass/assets/javascripts/*.js', 
          'scripts/vendor/angular.js',
          'scripts/main.js'
        ],
        //Output
        dest: 'scripts/build/main.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'styles/build/main.min.css': 'styles/sass/main.scss'
        }
      }
    },

    watch: {

      scripts: {
        files: ['scripts/*.js', 'scripts/AngularJS/*.js'],
        tasks: ['uglify'] 
      },

      css: {
        files: ['styles/sass/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }         
      },
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: './'
        }
      }
    },



  });

  require('load-grunt-tasks')(grunt);


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'connect', 'watch']);
  grunt.registerTask('dev', ['connect', 'watch']);

};