var canvas = document.querySelector('#app'),
    ctx = canvas.getContext('2d');
var color = '#000';
var store= [];
//渲染棋盘
function renderBoard() {
    var width = canvas.width,
        height = canvas.height;
    var i = 50;
    while (i < width) {
        ctx.strokeStyle = '#ccc';
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
        i += 50;
    }

    var j = 50;
    while (j < height) {
        ctx.strokeStyle = '#ccc';
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
        j += 50;
    }
}

//渲染棋子
canvas.addEventListener('click', function (e) {
    var x = e.x - canvas.getBoundingClientRect().top;
    var y = e.y - canvas.getBoundingClientRect().left;
    var result = vaildChess(x, y);
    if (result) {
        renderChess(result.x, result.y);
        store.push(result);
        console.log(result.x+"====="+result.y)
    }
})

function renderChess(x, y) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();
    // color = color === '#000' ? 'green' : '#000';
}


//验证棋子有效性(50,50)
function vaildChess(x, y) { 
    var rangeX = Math.floor(x / 50),
        rangeY = Math.floor(y / 50);
    var valueX = Math.abs(50 * rangeX - x),
        valueY = Math.abs(50 * rangeY - y);
    if (valueX >= 0 && valueX <= 30 &&
        valueY >= 0 && valueY <= 30) {
        return {x:50 * rangeX,y:50 * rangeY};
    } else {
        return false;
    }
}

function judgeWin(x,y){
     //向左
     while(){}
}

//入口函数
function main() { 
    renderBoard();
};

main();