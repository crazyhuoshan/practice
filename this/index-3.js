/**
 * 其他改变指向的方法
 */
var qwer = '1111';
function demo(){
    var self = this;
    setTimeout(function(){
        console.log(self.qwer);
    },1000);
};
demo();

