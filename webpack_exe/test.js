const path = require('path')
const glob = require('glob')

const entries = glob.sync('./src/**/*.js')
const entryJsList = {}
const entryHtmlList = []
for (var i=0;i<entries.length;i++) {
    console.log(entries[i]);
    var chunkName = '';
    chunkName = entries[i].slice('./src/'.length, -'/index.js'.length)
    entryJsList[chunkName] = entries[i]
}
console.log(entryJsList);