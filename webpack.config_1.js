var path = require('path');
var webpack = require('webpack');  //加载webpack依赖包
module.exports = {
  devtool: 'source-map',
  entry:  __dirname + "/app/reactjs/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/app/reactjs/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {
    loaders: [
      //{
      //  test: /\.json$/,
      //  loader: "json"
      //},
      {
        test: /\.(js|jsx)$/,
        //include: 'app/reactjs/',
        //exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          babelrc: false,
          presets: ['es2015','react']
        },
      },
      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'//添加对样式表的处理
      },
      // "file" loader for svg
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
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
        new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.scss', '.ts']
  }
}