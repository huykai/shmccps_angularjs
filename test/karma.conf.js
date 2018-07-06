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
      '../app/bower_components/angular/angular.min.js',
      '../app/bower_components/angular-route/angular-route.min.js',
      '../app/bower_components/angular-cookies/angular-cookies.min.js',
      '../app/lib/jquery/jquery-2.0.3.min.js',
      '../app/lib/bootstrap/bootstrap.min.js',
      '../app/lib/wysiwyg/js/wysihtml5-0.3.0.min.js',
      '../app/lib/wysiwyg/js/bootstrap3-wysihtml5.js',
      '../app/js/WebUI4Angular/WebUI4Angular-tpls-all.js',
      '../app/js/My97DatePicker/WdatePicker.js',
      '../app/js/scripts/xml2json.js',
      
      '../app/js/route_pagedata_v2/mainSubmitCtrl.js',
      '../app/js/route_pagedata_v2/DataGridDemoExcelCtrl.js',
      '../app/js/route_pagedata_v2/choosedataService.js',
      '../app/js/route_pagedata_v2/MenuData.js',
      '../app/js/route_pagedata_v2/TreeData.js',
      '../app/js/route_pagedata_v2/admin_controllers.js',
      '../app/js/route_pagedata_v2/admin_services.js',

      '../app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      '../app/js/route_pagedata_v2/modal_chart.js',
      '../app/js/route_pagedata_v2/Line_chart.js',
      
      '../app/bower_components/chart.js/dist/Chart.min.js',
      '../app/bower_components/angular-chart.js/dist/angular-chart.min.js',
      
      '../app/bower_components/angular-mocks/angular-mocks.js',

      'unit/mainSubmitCtrlSpec.js',
      'unit/TreeDataSpec.js'
    ],

    // list of files to exclude
    exclude: [
      '../app/js/route_pagedata_v2/*.html',
      '../app/js/route_pagedata_v2/HttpGetData.js'
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
    //browsers: ['Chrome'],
    browsers: ['PhantomJS', 'PhantomJS_custom'],
    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: { 
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    plugins : [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-jasmine',
            'karma-html-reporter',
            'karma-mocha-reporter'
		],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress', 'junit', 'kjhtml'],
    reporters: ['progress', 'mocha', 'junit', 'html'],

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
    
    junitReporter : {
      outputDir: 'testResults',
      outputFile: 'testResults.log',
      //suite: '',
      useBrowserName: true
    },

    // Configurations for HTML Reporter
    htmlReporter: {
      "outputDir": "test/testResults", // where to put the reports
      "templatePath": null, // set if you moved jasmine_template.html
      "focusOnFailures": true, // reports show failures on start
      "namedFiles": false, // name files instead of creating sub-directories
      "pageTitle": null, // page title for reports; browser info by default
      "urlFriendlyName": false, // simply replaces spaces with _ for files/dirs
      "reportName": "report-summary" // report summary filename; browser info by default
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
