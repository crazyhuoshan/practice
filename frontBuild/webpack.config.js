const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    }
}

var jsEntry = {},htmlEntry = {};
var jsList = glob.sync('./src/**/*.js');
var htmlList = glob.sync('./src/**/*.html');

for(var jsPath of jsList){
    var chunkName = /.\/(src\/.*?\/*?)\.js/.exec(jsPath)[1];          
    jsEntry[chunkName] = jsPath;
}

for(var htmlPath of htmlList){
    
}

config['entry'] = jsEntry;

module.exports = config;