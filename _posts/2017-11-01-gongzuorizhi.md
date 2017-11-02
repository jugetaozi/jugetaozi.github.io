---
layout: post
title: "2017-10  工作日志"
excerpt: "前端小白的Es6和vue采坑之旅"
categories: code&nbsp;share
comments: true
---
# 10月工作日志

1、按 es6 的规范 import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回。
[如果都使用 es6 的规范，这个是很明确的。](http://es6.ruanyifeng.com/#docs/module#export-命令)

```
export命令除了输出变量，还可以输出函数或类（class）。

export function multiply(x, y) {
  return x * y;
};
```
上面代码对外输出一个函数multiply。

通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
```
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```
上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。

需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系

---

2、`{ name: 'app' }`是一个对象,` export default { name: 'app' }`是es6 module语法, 导出这个对象. 
[vue组件的name属性主要用于方便debug](https://www.vue-js.com/topic/58b6771616e85e176c177310)

---

3、.sync修饰符 : 在element UI 中的 模态框 必须要使用.sync修饰符将组件的状态同步 还有一种情况是当父子组件的双向数据绑定 [当子组件需要改变props里面的值的时候。](https://cn.vuejs.org/v2/guide/components.html#sync-修饰符)

---

4、vue中路径加上./ 是相对路径 当前目录.  如果不加 以src/为根目录  根目录可以在配置文件中定义 webpack.base.conf.js种定义src下的各文件路径的解析

---

5、vue-cli搭建的目录结构中的config 文件

```
module.exports = {
  // 构建产品时使用的配置
  build: {
    // 环境变量
    env: require('./prod.env'),
    // html入口文件
    index: path.resolve(__dirname, '../dist/index.html'),
    // 产品文件的存放路径[详情见](http://javascript.ruanyifeng.com/nodejs/path.html#toc1)
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 二级目录，存放静态资源文件的目录，位于dist文件夹下
    assetsSubDirectory: 'static',
    // 发布路径，如果构建后的产品文件有用于发布CDN或者放到其他域名的服务器，可以在这里进行设置
    // 设置之后构建的产品文件在注入到index.html中的时候就会带上这里的发布路径
    assetsPublicPath: '/',
    // 是否使用source-map
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 是否开启gzip压缩
    productionGzip: false,
    // gzip模式下需要压缩的文件的扩展名，设置js、css之后就只会对js和css文件进行压缩
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 是否展示webpack构建打包之后的分析报告
    bundleAnalyzerReport: process.env.npm_config_report
  },
  // 开发过程中使用的配置
  dev: {
    // 环境变量
    env: require('./dev.env'),
    // dev-server监听的端口
    port: 8080,
    // 是否自动打开浏览器
    autoOpenBrowser: true,
    // 静态资源文件夹
    assetsSubDirectory: 'static',
    // 发布路径
    assetsPublicPath: '/',
    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
    // 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    // 是否开启 cssSourceMap
    cssSourceMap: false
  }
}
```

---

6、$route.matched 和 params query 的[演示](http://www.cnblogs.com/Leo_wl/p/5702350.html)

---


7、...ES6拓展运算符 利用...解构数组和对象
[扩展运算符的应用](http://blog.csdn.net/qq_30100043/article/details/53391308)

---


8、[vue-router 的一些技术点总结  ](http://www.cnblogs.com/ang-/p/7082291.html)

---

9、
> - webpack.dev.congig 中的 devtool 注释掉 加快热加载
> - 一个路由匹配到的所有路由记录会暴露为$route对象的$route.matched数组.  
> - 可以遍历$route.matched来检查路由记录中的meta字段 
> - 变量加上中括号 可以表示函数名 在export中 ES6支持
> - [props中可以设置required : 必须提供字段  default  可选字段 有默认值](https://segmentfault.com/q/1010000006867564/a-1020000006867611)

---

10、可以把数组传给 :class  结合三元表达式 
```
<button 
class="btn" 
:class="[computeStyle(item.status),item.stepId=currentStep? "btn-executing" :'']"
></button>
```

---

11、深度watch：   watch一个对象  对象的属性值改变了 递归检查改变  
```

let stepDetail = {
  age = 18
}
watch:{
  stepDetail:{
    handler:function(){
      console.log('stepDetail属性改变了')
    },
    deep:true
  }
}
stepDetail.age = 20  // console.log('stepDetail属性改变了')
```
> 如果为浅监听 用.方法为对象赋值 不会被监听到

---

12、 深拷贝一个数组 可以使用 [].concat(arr) 的方法实现

---


13、
- vue 数据绑定的对象 如果绑定的是属性  那么属性的读写会触发双向绑定
- @keyup.enter 是用来监听回车事件  在element-ui种需要.native添加原生监听
- promise 的链式调用  then需要返回  promise resolve/reject   传递给下一个then    在then里面如果用定时  不能单纯返回 resolve
- 如果在change事件中需要默认传递的参数  在参数上用$event代替即可

---

14、当子组件接受到父组件Props传来的值时，不能用v-model双向绑定，如果需要同步更新，需要在子组件内部重新、构建一个组件域，与外界解耦 ， [通过emit(update:foo,params) 与.sync 实现双向绑定](http://blog.csdn.net/quanwuhui/article/details/56675407)

---


15、computed watch 要用  匿名函数 箭头函数的this.指向全局vm对象

---

(正文完)商业转载请联系作者获得授权,非商业转载请注明[出处](http://www.jugetaozi.com/blog/gulp-info/)。

## 最后说几句

如果有任何问题或建议，可以给我[发邮件：156343782@qq.com](mailto:156343782@qq.com).

欢迎交换友链,给我 [发邮件：156343782@qq.com](mailto:156343782@qq.com), 基本上可以做到秒加.


## 赞助

如果您觉得这篇文章对您有用,可以请作者喝一杯咖啡~~

微信：<img src="{{site.url}}/img/images/wx.png" width="200" height="200" alt="举个桃子的微信">
支付宝：<img src="{{site.url}}/img/images/zfb.png"  width="200" height="200" alt="举个桃子的支付宝">