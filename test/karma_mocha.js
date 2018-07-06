// Karma configuration
// Generated on Thu Mar 30 2017 02:17:31 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({
    

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'config/api_config.js',
      'config/mongo_database.js',
      'config/redis_database.js',
      'config/route_api.js',
      'config/secret.js',
      'config/site_config.js',
      'config/token_manager.js',
      'route/*.js',
      'app.js',
      'server.js',

      'test/unit/app.test.js',
      'test/unit/server.test.js',
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins : [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-mocha-reporter'
		],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress', 'junit', 'kjhtml'],
    reporters: ['mocha'],

    // reporter options
    mochaReporter: {
      output: 'autowatch',
      showDiff: true,
      divider: '=',
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },
    
    
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
