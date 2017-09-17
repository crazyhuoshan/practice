function Slider(params){
  this.wrap = params.wrap;
  this.list = params.list;
  this.width = params.width;
  this.height = params.height;
};
Slider.prototype.init = function () {
    this.renderContainer();
}
Slider.prototype.renderContainer = function () {
    var tmpl = '<ul style="width:'+this.width+'px;height:'+this.height+'px">$imgs</ul>';
    var imgs = this.list;
    var str = '';
    if(!imgs.length){
        console.warn('缺少幻灯图片');
        return;
    }
    for(var i = 0;i<imgs.length;i++){
        str += '<li><img src='+imgs[i]+' /></li>';
    };
    var tpl = tmpl.replace(/\$imgs/g,str);
    if(!this.wrap){
        console.warn('缺少幻灯容器');
        return;
    };
    $(this.wrap).append(tpl);
}
