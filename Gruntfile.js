module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    shell: {
      vuebuild: {
          command: 'node build/build.js',
          options: {
            async: false,
            stdout: true,
            stderr: true,
            failOnError: true,
            execOptions: {
                  cwd: './app/vuejs/'
            }
          }     
        }  
    },

    pkg: grunt.file.readJSON('package.json'),
    //uglify: {
    //  options: {
    //    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //  },
    //  build: {
    //    src: 'src/<%= pkg.name %>.js',
    //    dest: 'build/<%= pkg.name %>.min.js'
    //  }
    //}
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }  
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
        reporter: require('jshint-stylish'),
        reporterOutput: 'jshint_report'
      },
      uses_defaults: ['app/js/route_pagedata_v2/*.js', 'app/reactjs/**/*.js'],
      //with_overrides: {
      //  options: {
      //    curly: false,
      //    undef: true,
      //  },
      //  files: {
      //    src: ['dir3/**/*.js', 'dir4/**/*.js']
      //  },
      //}
    },

  });

  // A very basic default task.
  grunt.registerTask('vuebuild', 'Build Vue part webapp.', function() {
    
    grunt.log.write('').ok();
  });
  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);

  // Load for karam test plugin
  grunt.loadNpmTasks('grunt-karma');
  // Load for JSHint
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell-spawn');
};