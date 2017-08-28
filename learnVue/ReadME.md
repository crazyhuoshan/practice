# 生命周期  
beforeCreate 无法获取data  
created 实例创建完成
beforeUpdate 数据更新时触发dom渲染，updated执行时渲染工作已完成  
vm.$destroy()触发beforeDestroy，destroyed方法  
mounted html结构挂载完成，可以发送异步数据请求，在生命周期中只触发一次