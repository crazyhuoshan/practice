var canvas = document.querySelector('#app'),
    ctx = canvas.getContext('2d');

function render() {
    ctx.save();
    ctx.beginPath();
    ctx.fillRect(100, 100, 100, 100);
    ctx.fillStyle = 'red'
    ctx.fillRect(200,200,100,100);
    ctx.save();
    ctx.fillStyle = 'blue'
    ctx.fillRect(300,300,100,100);
     ctx.restore();
    ctx.fillRect(400,400,100,100);
    ctx.closePath();
}
render();