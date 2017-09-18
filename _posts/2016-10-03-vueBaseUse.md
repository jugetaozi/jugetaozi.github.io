---
layout: post
title: vue-router的简单实用
excerpt: vue实现路由功能
categories: code&nbsp;share
tag: vue
comments: true
---

## 正文

最近在自学Vue框架，今天分享一下自己在使用"vue-router"的方法步骤

### 1、使用npm安装vue-router

```
npm i vue-router --save

```

### 2、导入vue-router(在入口文件main.js)

```
import VueRouter from 'vue-router'

```

### 3、在Vue中集成vue-router

```
Vue.use(VueRouter) 

```

### 4、创建路由对象

```
const router = new VueRouter({
    //配置路由规则
    routes:[
        {path:'/',redirect:'/home'},
        //配置路由重定向
        {path:'/home',component:home},
    ]
});

```

### 5、在根实例中使用router服务

```
new Vue({
    el:"#app", //把我们组件的内容放在id=app的div去显示
    /**
     * createElement它是一个函数
     */
    /**
    render:function(createElement){
        return createElement(App)
    }
    **/
    router,
    render:h=>h(App)
})

```

总结：这就是在Vue中最简单的配置vue-router的小案例，配置好以后我们就可以在其他组件中通过router-link和router-view进行跳转和渲染了。


## 赞助

如果您觉得这篇文章对您有用,可以请作者喝一杯咖啡~~

微信：<img src="{{site.url}}/img/images/wx.png" width="200" height="200" alt="举个桃子的微信">
支付宝：<img src="{{site.url}}/img/images/zfb.png"  width="200" height="200" alt="举个桃子的支付宝">