const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'app.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],
  devServer: {
    contentBase: './dist',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    inline: true,//设置为true，当源文件改变时会自动刷新页面
    port: 8080//设置默认监听端口，如果省略，默认为"8080"
  }
}