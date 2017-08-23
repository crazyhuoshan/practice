var canvas = document.querySelector('#app'),
    ctx = canvas.getContext('2d');

function drawEllipse(x,y,a,b){
    var r = (a > b) ? a : b;
    var scaleX = a / r;
    var scaleY = b / r;
    ctx.scale(scaleX,scaleY);
    ctx.beginPath();
    ctx.arc(x/scaleX,y/scaleY,r,0,2*Math.PI,true);
    ctx.closePath();
    ctx.stroke();
}

// drawEllipse(250,250,100,200);


function bezier(){

    ctx.moveTo(100,100);
    ctx.bezierCurveTo(100, 200, 200, 200, 200, 100);
    ctx.stroke();
    
    ctx.moveTo(100,100);
    ctx.bezierCurveTo(100,0,200,0,200,100);
    ctx.stroke();
}
// bezier();

function demo1(){
    ctx.beginPath();
    ctx.moveTo(100,400);
    ctx.lineTo(300,100);
    ctx.lineTo(400,400);
    ctx.stroke();

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(100,400);
    ctx.quadraticCurveTo(300, 100, 400, 400);
    ctx.stroke();
    
}
// demo1();

function demo2(){
    ctx.beginPath();
    ctx.moveTo(100,400);
    ctx.lineTo(200,100);
    ctx.lineTo(300,130);
    ctx.lineTo(400,400);
    ctx.stroke();


    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(100,400);
    ctx.bezierCurveTo(200,100,300,130,400,400);
    ctx.stroke();
    
}
// demo2();

function cloud(){
    ctx.moveTo(100,200);
    ctx.quadraticCurveTo(100,150,200,150);
    // ctx.moveTo(200,100);
    // ctx.quadraticCurveTo(300,100,300,200);
    // ctx.moveTo(300,200);
    // ctx.quadraticCurveTo(300,300,200,300);
    // ctx.moveTo(200,300);
    // ctx.quadraticCurveTo(100,300,100,200)
    ctx.stroke();   
}
cloud();