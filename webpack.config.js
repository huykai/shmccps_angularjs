const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const webpack = require('webpack');  //加载webpack依赖包

//css文件提取器需要的模块
var ExtractTextPlugin=require('extract-text-webpack-plugin');

//postcss-loader 需要的配置项
var precss       = require('precss');
var autoprefixer = require('autoprefixer');


module.exports = {
  devtool: 'source-map',
  entry:  __dirname + "/app/reactjs/src/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/app/reactjs/build",//打包后的文件存放的地方
    filename: '[name]' + '_bundle.js' //打包后输出文件的文件名
  },
  module: {
    rules: [
      //{test: /\.css$/, use: 'css-loader'},
      {test: /\.ts$/, use: 'ts-loader'},
      {
        test: /\.(js|jsx)$/,
        //include: 'app/reactjs/',
        exclude: /node_modules/,  //加上这行，webpack就不会自行找需要编译的mudule了
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          //babelrc: false,
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ["transform-react-jsx"]
        }
        //options: {
          //babelrc: false,
        //  presets: ['es2015','react','env'],
        //  plugins: [
        //    ["emotion"]
        //  ]
        //},
      },
      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        // 如下配置，将小于8192byte的图片转成base64码
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192&name=../images/[name].[ext]?[hash]',
      },
      { test: /\.(eot|woff|ttf)$/, 
        loader: "file-loader" 
      },
      //{
      //  test: /\.css$/,
      //  loader: 'style-loader!css-loader!postcss-loader'//添加对样式表的处理
      //},

      // 编译css并自动添加css前缀 并将css提取出来
      //{ 
      //  test: /\.css$/, 
      //  loader: ExtractTextPlugin.extract('style-loader!css-loader!postcss-loader')
      //  //loader: ExtractTextPlugin.extract('style-loader','css-loader')
      //},

      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({
            fallback: [{
                loader: 'style-loader',
            }],
            use: [{
                loader: 'css-loader'//,
                //options: {
                //    modules: true,
                //    localIdentName: '[name]__[local]--[hash:base64:5]',
                //},
            }, {
                loader: 'postcss-loader',
            }],
        }),
      },

      
      //{
      //  test: /\.ico$/,
      //  loader: 'file-loader',
      //  query: {
      //    name: './app/reactjs/build/' + '[name].[ext]'
      //  }
      //},
      // "svg-url-loader" loader for svg
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          
        }
      }
    ]
  },
  
  //postcss: function() {
  //  return [
  //    autoprefixer({
  //      browsers: [
  //        '>1%',
  //        'last 4 versions',
  //        'Firefox ESR',
  //        'not ie < 9', // React doesn't support IE8 anyway
  //      ]
  //    }),
  //  ];
  //},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
        //提取之后生成的css文件名字  （bulid/css/app.css）
    new ExtractTextPlugin('css/app.css'),
        //添加下面的plugin,可以用在product环境，用来减小js文件大小
        //在development环境下，取消此plugin，可以方便dev，比如debug source
        //new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
          template: 'app/reactjs/public/index.html',
          title: 'Traffica trace log',
          filename: '../../index_traffica_v2.html',
          inject: 'body'
        })
  ],
  context: __dirname,
  resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.scss', '.ts'],
        modules: ["node_modules"]
  },
  //postcss: function () {
  //  return [precss, autoprefixer];
  //}
}