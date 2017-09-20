var path = require('path');
//var ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../app/reactjs/test/*.spec.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      '../app/reactjs/src/**/*.js': ['webpack', 'sourcemap'],
      '../app/reactjs/test/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/, 
            //exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['airbnb']
            }
          },
          {
            test: /\.json$/,
            exclude: /node_modules/, 
            loader: 'json-loader',
          },
          {
            test: /\.css$/,
            exclude: /node_modules/, 
            loader: 'style-loader!css-loader'//添加对样式表的处理
          },
          {
            // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            // 如下配置，将小于8192byte的图片转成base64码
              test: /\.(png|jpg|gif)$/,
              exclude: /node_modules/, 
              loader: 'url-loader?limit=8192&name=../images/[name].[ext]?[hash]',
          },
          { test: /\.(eot|woff|ttf)$/, 
            exclude: /node_modules/, 
            loader: "file-loader" 
          },
          {
            test: /\.svg$/,
            exclude: /node_modules/, 
            loader: 'svg-url-loader',
            options: {
              
            }
          }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-junit-reporter',
      'karma-html-reporter',
      'karma-mocha-reporter'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    //reporters: ['progress'],

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
      outputDir: 'reactjs/testResults',
      outputFile: 'testResults.log',
      //suite: '',
      useBrowserName: true
    },

    // Configurations for HTML Reporter
    htmlReporter: {
      "outputDir": "reactjs/html/testResults", // where to put the reports
      "templatePath": null, // set if you moved jasmine_template.html
      "focusOnFailures": true, // reports show failures on start
      "namedFiles": false, // name files instead of creating sub-directories
      "pageTitle": null, // page title for reports; browser info by default
      "urlFriendlyName": false, // simply replaces spaces with _ for files/dirs
      "reportName": "report-summary" // report summary filename; browser info by default
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
};