// Karma configuration
// Generated on Thu Mar 30 2017 02:17:31 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../js/Angular/angular.js',
      '../js/Angular/angular-1.3.6/angular-mocks.js',
      '../js/WebUI4Angular/WebUI4Angular-tpls-all.js',
      '../js/My97DatePicker/WdatePicker.js',
      '../js/scripts/xml2json.js',
      '../js/pagedata/mainSubmitCtrl.js',
      '../js/pagedata/choosedataService.js',
      '../js/pagedata/TreeData.js',
      'unit/mainSubmitCtrlSpec.js',
      'unit/TreeDataSpec.js'
    ],


    // list of files to exclude
    exclude: [
      '../js/pagedata/*.html',
      '../js/pagedata/HttpGetData.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
            'karma-chrome-launcher',
            'karma-jasmine' 
			      ],

    junitReporter : {
      outputFile: 'unit.xml',
      suite: 'unit'
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
