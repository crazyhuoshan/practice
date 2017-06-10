const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//个人开发构建配置
var config = {
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
        contentBase: path.join(__dirname, 'dist/pages'),
        publicPath: './',
        inline: true,//实时刷新
        port: 9000,
        compress: true,
        hot: true
    }
}

var entries = glob.sync('./src/**/*.js'),
    entriHtml = glob.sync('./src/**/*.html')
var entryJsList = {}
var entryHtmlList = {}
for (var _jsPath of entries) {
    var chunkJsName = _jsPath.split('/')[2]
    entryJsList[chunkJsName] = _jsPath
}
for (var _path of entriHtml) {
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

