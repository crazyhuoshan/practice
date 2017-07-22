# canvas基础图形绘制  
### 起步  
获取页面中canvas标签，并且获取2d上下文。
### 直线
直线的构成需要知道两个点，起点和终点。在canvas中通过moveTo获取起始点，通过lineTo连接两点，渲染直线。  
### 矩形  
调用canvas中的API可以直接绘画矩形。绘制一个矩形需要4个参数，起始点坐标，长宽。这边的坐标指的是矩形的左上角坐标，不是对角线交点坐标。 
### 圆  
调用API，常用参数需要知道圆心，和半径。最后三个参数圆弧起始点，圆弧终结点，true为逆时针。  
### 总结  
这些是canvas中绘画基础图形的方法，现成api调用即可。