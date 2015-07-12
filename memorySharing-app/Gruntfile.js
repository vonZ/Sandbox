module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        //Input
        src: [
          'public/javascripts/vendor/jquery/dist/*.js', 
          'public/javascripts/vendor/bootstrap-sass/assets/javascripts/*.js', 
          'public/javascripts/vendor/angular.js',
          'public/javascripts/main.js'
        ],
        //Output
        dest: 'public/javascripts/build/main.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/stylesheets/build/main.min.css': 'public/stylesheets/sass/main.scss'
        }
      }
    },

    watch: {

      scripts: {
        files: ['public/javascripts/*.js'],
        tasks: ['uglify'] 
      },

      css: {
        files: ['public/stylesheets/sass/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }         
      },
    },

    /*connect: {
      server: {
        options: {
          port: 9000,
          base: './'
        }
      }
    },*/



  });

  require('load-grunt-tasks')(grunt);


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass'/*, 'connect'*/, 'watch']);
  grunt.registerTask('dev', [/*'connect',*/ 'watch']);

};