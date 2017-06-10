const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//配置基础对象
const config = {
  entry: '',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: './js/[name].js?[chunkhash]',
    chunkFilename: './js/[id].js?[chunkhash]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}

var entries = glob.sync('./src/**/*.js'),
    entryHtml = glob.sync('./src/**/*.html')
var entryJsList = {} , 
    entryHtmlList = {}
for (var _jsPath of entries) {
  var chunkJsName = _jsPath.split('/')[2]
  entryJsList[chunkJsName] = _jsPath
}
for (var _path of entryHtml) {
  var chunkName = _path.split('/')[2]
  entryHtmlList[chunkName] = _path
  config.plugins.push(new HtmlWebpackPlugin({
    template: entryHtmlList[chunkName],
    filename: './pages/' + chunkName + '/' + chunkName + '.html',
    chunks: [chunkName]
  }))
}
config.entry = entryJsList;

module.exports = config;