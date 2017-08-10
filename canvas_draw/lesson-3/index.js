var canvas = document.querySelector('#app'),
    ctx = canvas.getContext('2d');
var button = document.querySelector('input');


/**
 * 图片上传，画布显示
 * 
 */
button.onchange = function(){
    var file = button.files[0];
    var fileRead = new FileReader();
    fileRead.readAsDataURL(file);
    fileRead.onload = function(){
        var img = new Image();
        img.src = fileRead.result;
        img.onload = function(){
            ctx.drawImage(img,0,0);
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(100,70);
            ctx.closePath();
            ctx.stroke();
        }
    }
}

/**
 * 缩放图片
 * 
 */
function renderImg(){
    var img = new Image();
    img.src = './Koala.jpg';
    img.onload = function(){
        ctx.drawImage(img,0,0,200,200,0,0,img.width,img.height);
    }
}

renderImg();