var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error',function(){
    console.log('error');
});
db.on('open',function(){
    console.log('connection');
});