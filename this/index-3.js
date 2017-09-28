/**
 * 其他改变指向的方法
 */
var other = {
    test:'1234',
    fn:function(){
        var self = this;
        setTimeout(function(){
            console.log(self.test);
        },100)
    }
}
other.fn();

/**
 * 箭头函数中的this
 * 箭头函数没有this指向
 * this指向全局
 */
var arrow = {
    test2:'33333',
    fn:()=>{
        console.log(this.test2);
    }
}
arrow.fn();