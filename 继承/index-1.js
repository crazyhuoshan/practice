function SuperClass(){
    this.superValue = true;
}

SuperClass.prototype.getSuperValue = function(){
    return this.superValue;
}

function ChildClass(){
    this.childValue = false;
}

ChildClass.prototype = new SuperClass();

ChildClass.prototype.getChildValue = function(){
    return this.childValue;
}

var obj = new ChildClass();
console.log(obj.getSuperValue());
console.log(obj.getChildValue());