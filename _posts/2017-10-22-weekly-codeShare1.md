---
layout: post
title: "weekly-codeShare(1)"
excerpt: "weekly-codeShare"
categories: code&nbsp;share
comments: true
---

# js基础share
- 在window上声明的变量与全局变量的区别： window上的可以delete 全局的不行
- 递归函数应该始终用arguments.callee调用自身  因为函数名有可能会改变
- new操作符的作用：1.设置一个空对象2.设置对象的原型链3.用func.call(将构造函数内的逻辑跑一边)4.判断构造函数的返回值类型  如果是值类型返回obj 如果是引用类型则返回引用类型的对象
##  webWorker
```
// 外部环境
var worker = new Worker("test.js");
 
worker.addEventListener("message", function (e) {
    // 接收到了数据
    console.log(e.data);//内部传出来的数据
});
 
worker.addEventListener("error", function(e) {
    // 发生了错误
});
 
// 向Worker环境内部发送数据
worker.postMessage("hi");
 
// 立即停止Worker，不管它在干什么

//内部环境：
var a = 0;
 
self.addEventListener("message", function (e) {
    setInterval(function () {
        a++;
        postMessage(e.data + a);
        if (a == 10) {
            self.close();//内部终止
        }
    }, 1000);
}, false);

```
> 主要的点: 1.首先 引入一个内部worker
> 2.分别监听了message和errors事件,用来处理worker传出来的数据以及错误信息.
> 3.向worker内部发送一条数据 另外 不用担心此时test.js还没有加载进来的问题  这个浏览器会帮我们搞定
> 4.最后 把worker停掉 主线程是worker.terminate()内部线程是worker.close()
> worker内部如果要加载其他的脚本可以用 importScripts('a.js')
> worker与主线程之间的通信内容 可以是文本 也可以是二进制文件  这种关系是拷贝关系  浏览器内部的机制是  先把数据串行化 然后把字符串发给worker  后者再将它还原

#### with 改变当前作用域 弊端:容易导致变量泄露

### console.time('funcWith') console.timeEnd("funcWith")

## 任务队列:
- 所有的同步任务都是在主线程上执行的  形成一个执行栈
- 主线程之外 还存在一个任务队列 .只要异步任务有了运行结果 就在任务队列之中放置一个事件
- 当主线程任务执行完毕后  会查询当前任务队列是否有事件 如果有 结束等待 开始执行
- 不断重复第三步

## 自定义任务  
- 1.创建事件对象 var eve = document.createEvent("build")或者 new Event("build")
- 2.初始化事件 eve.initEvent("build") 接受三个参数  分别是事件的类型(字符串值) /canBubble 是否冒泡  /cancelable 是否可以用preventDefault方法取消事件 该步骤非必须  可以在第三步中声明
- 3.监听DOM元素对象事件
> ```
> document.addEventListener> ("build", function() {
>         alert("弹弹弹，弹走鱼尾纹~~");
>    });
> ```
- 4.// 触发, 即弹出文字   document.dispatchEvent(eve)
- 注意 new Event的参数是这个事件的名字 监听的事件名 dispatchEvent传入的是创建的事件对象
  
----
## DOM0 DOM2 DOM3级事件处理程序
DOM0的事件具有极好的跨浏览器优势, 会以最快的速度绑定, 如果你通过DOM2绑定要等到JS运行, DOM0不用, 因为DOM0是写在元素上面的哇; 事件对象的eventPhase属性 可以确定事件当前正位于事件流的哪个阶段  只有在事件处理阶段  才会存在event对象   一旦事件执行完毕 event对象就会被销毁

DOM0事件是写在html上的事件
DOM2事件是addEventListener绑定的事件  只能有removeEventListener来移除.
DOM3级事件在DOM2级事件的基础上添加了更多的事件类型，全部类型如下：
- UI事件，当用户与页面上的元素交互时触发，如：load、scroll
- 焦点事件，当元素获得或失去焦点时触发，如：blur、focus       
- 鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup       
- 滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel       
- 文本事件，当在文档中输入文本时触发，如：textInput    
- 键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress    
- 合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart  
- 变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified         

同时DOM3级事件也允许使用者自定义一些事件。

## 事件委托和代理
优点:1.减少内存的消耗
2.动态绑定元素
缺点:有一定的局限性 
1.层级过多 可能会被某一层组织掉


## 最后说几句

如果有任何问题或建议，可以给我[发邮件：156343782@qq.com](mailto:156343782@qq.com).

欢迎交换友链,给我 [发邮件：156343782@qq.com](mailto:156343782@qq.com), 基本上可以做到秒加.


## 赞助

如果您觉得这篇文章对您有用,可以请作者喝一杯咖啡~~

微信：<img src="{{site.url}}/img/images/wx.png" width="200" height="200" alt="举个桃子的微信">
支付宝：<img src="{{site.url}}/img/images/zfb.png"  width="200" height="200" alt="举个桃子的支付宝">