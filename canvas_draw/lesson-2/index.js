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
bezier();