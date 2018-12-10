'use strict';

module.exports = function exports(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['includeFiles:app', 'wiredep:app'],
      },
      js: {
        files: ['public/*/*.js'],
        options: {
          livereload: '<%= connect.options.livereload %>',
        },
      },
      gruntfile: {
        files: ['Gruntfile.js'],
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>',
        },
        files: [
          'public/{,*/}*.html',
          'public/{,*/}*.js',
          'public/styles/*.css',
        ],
      },
    },
    connect: {
      options: {
        port: 80,
        hostname: '0.0.0.0',
        livereload: 35729,
      },
      app: {
        options: {
          open: false,
          middleware: (connect) => {
            return [
              connect.static('.tmp'),
              connect()
                .use(
                  '/bower_components',
                  connect.static('./bower_components')
                ),
              connect.static('public'),
            ];
          },
        },
      },
    },
    wiredep: {
      options: {},
      app: {
        src: ['public/index.html'],
        ignorePath: /\.\.\//,
      },
    },
    includeFiles: {
      options: {
        basePath: 'public',
        baseUrl: '',
        templates: {
          html: {
            js: '<script type="text/javascript" src="{filePath}"></script>',
            css: '<link rel="stylesheet" href="{filePath}"/>',
          },
        },
      },
      app: {
        files: {
          'public/index.html': 'index.tpl.html',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-include-files');
  grunt.registerTask('serve', [
    'includeFiles:app',
    'wiredep:app',
    'connect:app',
    'watch',
  ]);
};
