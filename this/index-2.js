var obj1 = {
    name:'leon1',
    age:23
};

var obj2 = {
    name:'leon2',
    age:33
};

var demo = {
    name:'demo',
    fn:function(){
        console.log(this.name);
    }
};

var test = {
    fn:function(a,b){
        console.log(this.name+"++++++"+a+"==========="+b);
    }
};

/**
 * call apply bind区别
 * 传递参数时，apply是数组形式
 * 调用时，bind需要手动触发函数
 */
test.fn.call(obj1,1,2);

test.fn.apply(obj2,[2,3]);

test.fn.bind(obj1,4,5)();



demo.fn();//demo

demo.fn.call(obj1);//leon1

demo.fn.apply(obj2);//leon2

demo.fn.bind(obj1)();//leon1