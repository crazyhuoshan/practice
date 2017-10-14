const path = require('path');
const glob = require('glob');
const htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'/'
    },
    plugins:[],
    devServer:{
        contentBase:'./dist'
    }
}

var jsEntry = {};
var jsList = glob.sync('./src/**/*.js');
var htmlList = glob.sync('./src/**/*.html');

for(var jsPath of jsList){
    var chunkName = /.\/(src\/.*?\/*?)\.js/.exec(jsPath)[1];          
    jsEntry[chunkName] = jsPath;
}

for(var htmlPath of htmlList){
    var htmlName = /.\/(src\/.*?\/*?)\.html/.exec(htmlPath)[1];
    config['plugins'].push(new htmlWebpackPlugin({
        filename:htmlPath,
        template:htmlPath,
        chunks:[htmlName]
    }));
}

config['entry'] = jsEntry;

module.exports = config;