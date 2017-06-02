const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
  var _config = {
    entry: '',
    output: {
      path: path.resolve(__dirname, 'dist'),
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
          // use: ExtractTextPlugin.extract({
          //   use: 'css-loader'
          // })
        }
      ]
    },
    plugins: [],
    devServer: {
      contentBase: path.join(__dirname,'dist/pages'),
      inline: true,//实时刷新
      port: 9000,
      compress: true
    }
  }

  var entries = glob.sync('./src/**/*.js'),
      entriHtml = glob.sync('./src/**/*.html')
  var entryJsList = {}
  var entryHtmlList = {}
  console.log(entries)
  for(var _jsPath of entries){
    var chunkJsName = _jsPath.split('/')[2] 
    entryJsList[chunkJsName] = _jsPath
  }
  console.log(entryJsList)
  for (var _path of entriHtml) {
    var chunkName = _path.split('/')[2] 
    entryHtmlList[chunkName] = _path
    _config.plugins.push(new HtmlWebpackPlugin({
      template: entryHtmlList[chunkName],
      filename: './pages/'+ chunkName +'/' + chunkName + '.html',
      chunks: [chunkName]
    }))
    //  _config.plugins.push(new ExtractTextPlugin({
    //   filename: './css/' + chunkName + '.css',
    //   allChunks: false
    // }))
  }
  _config.entry = entryJsList;

  return _config;
}
