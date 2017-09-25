/**
 * this的指向
 * 1.存在对象之中
 * 2.存在构造函数之中
 * 3.普通函数之中
 */

 //对象之中

 var name = 'window_leon'
 var obj = {
     name:'leon',
     fn:function(){
         console.log(this.name);
     }
 };
obj.fn();//leon

//普通函数之中
var age = '33333';
var getAge = function(){
    console.log(this.age);
}
getAge();//3333

//构造函数 
function People(city){
    this.city = city;
};

var p = new People('suzhou');
console.log(p.city);//suzhou