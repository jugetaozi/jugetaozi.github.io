---
layout: post
title: CSS3 Filter的十种特效
excerpt: "不整不知道呀，一整才让我感到吃惊，太强大了。"
tag: CSS
categories: 转载
comments: true
---

最近到处看到有人在说CSS3的[filter](https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html)一直没有时间自己去测试这效果。今天终于抽出时间学习这个CSS3的**Filter**。不整不知道呀，一整才让我感到吃惊，太强大了。大家先来看个效果吧：

[![img](http://www.w3cplus.com/sites/default/files/filter-demo.png)](http://jsfiddle.net/w3cplus/wThjx/)

我想光看上面的效果就能吸引你了，要是你自己动手的话，我想您更会感到神奇。细一看，这些效果就像是photoshop整出来的一样，其实是真是这样的，有很多效果都是类似于photoshop中的特效。不过有一点大家需要特别的注意：**此处的CSS3 filter和css filter完全是两样东东。更不是我们一直说的IE滤镜。具体所指的是什么？大家感兴趣的可以点击这里。**我就不多说了，因为说也说不清楚，我只想和大家一起探讨的是如何使用这个“CSS3 Filter”。那我们开始吧。

**Filters**主要是运用在图片上，以实现一些特效。（尽管他们也能运用于video上），不过我们在些只来讨论图片上的运用。

#### 语法

```
      elm {
        filter: none | <filter-function > [ <filter-function> ]* 
      }      
    
```

其默认值是none，他不具备继承性，其中filter-function一个具有以下值可选：

1. grayscale灰度
2. sepia褐色（求专业指点翻译）
3. saturate饱和度
4. hue-rotate色相旋转
5. invert反色
6. opacity透明度
7. brightness亮度
8. contrast对比度
9. blur模糊
10. drop-shadow阴影

#### 浏览器的兼容性

目前支持这个属性的浏览器少得可怜，现在只是webkit支持，而且只有[webkit nightly](http://nightly.webkit.org/)版本和[Chrome 18.0.976以上](http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=6&ved=0CF8QFjAF&url=http%3A%2F%2Fwww.google.com%2Fchrome%2Fintl%2Fen%2Feula_dev.html&ei=GWD0Tq2hLovkrAfv3ojtDw&usg=AFQjCNFc6aJq0n3DNLjLkV2ArUF5r58pmA&sig2=rzPxXvCeMdRmC5wwhyYRsA)以上版本才支持，所以说，你要是想看到效果就需要下载这两个版本中的一个，我使用的是[Google Chrome Canary](http://tools.google.com/dlpage/chromesxs)。

下面我们一起来见证这些效果的实现过程，首先在页面中有一张图片：

```
      <img class="normal" title="normal" width="128" height="128" alt="HTML5 Logo" src="http://www.w3cplus.com/sites/default/files/filter.jpg" />
    
```

我在此处取名为“normal”，表示此图没有任何“filter”效果，那么后面的效果，我们依次将其类名改成对应的效果名。大家看下面的代码吧：

#### 一、grayscale灰度

使用这个特效，会把图片变成灰色的，也就是说你的图片将只有两种颜色“黑色”和“白色”

```
      .grayscale{
          -webkit-filter:grayscale(1);
      }    
    
```

**默认值：**100％，

如果你在grayscale()中没有任何参数值，将会以“100%”渲染。其效果下图所示：

[![img](http://www.w3cplus.com/sites/default/files/filter-grayscale.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 二、sepia

sepia不知道如何译，暂时就叫他“褐色”，使用这种效果，你的图片好像很古老的一样

```
      .sepia{
          -webkit-filter:sepia(1);
      }    
    
```

**默认值：**100％，

如果你在sepia()中没有任参数值，将会以“100％”渲染，具体效果如下：

[![img](http://www.w3cplus.com/sites/default/files/filter-sepia.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 三、saturate饱和度

saturat是用来改变图片的饱和度

```
      .saturate{
         -webkit-filter:saturate(0.5);
      }      
    
```

**默认值：**100％，

[![img](http://www.w3cplus.com/sites/default/files/filter-saturate.png)](http://jsfiddle.net/w3cplus/wThjx/)

如果我们将其值变大到300%

```
      .saturate{
         -webkit-filter:saturate(3);
      }
    
```

[![img](http://www.w3cplus.com/sites/default/files/filter-saturate2.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 四、hue-rotate色相旋转

hue-rotate用来改变图片的色相

```
      .hue-rotate{
           -webkit-filter:hue-rotate(90deg);
       }
    
```

**默认值：**0deg

[![img](http://www.w3cplus.com/sites/default/files/filter-hue-rotate.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 五、invert反色

invert做出来的效果就像是我们照相机底面的效果一样

```
      .invert{
            -webkit-filter:invert(1);
        }
    
```

**默认值：**100％

[![img](http://www.w3cplus.com/sites/default/files/filter-invert.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 六、opacity透明度

这个就很好理解了，改变图片的透明度

```
      .opacity{
        -webkit-filter:opacity(.2);
      }
    
```

**默认值：**100%

[![img](http://www.w3cplus.com/sites/default/files/filter-opacity.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 七、brightness亮度

改变图片的亮度

```
      .brightness{
            -webkit-filter:brightness(.5);
        }
    
```

**默认值：**100％

[![img](http://www.w3cplus.com/sites/default/files/filter-brightness.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 八、contrast对比度

改变图片的对比度，整个psd的，都懂这个意思

```
      .contrast{
            -webkit-filter:contrast(2);
        }
    
```

**默认值：**100％

[![img](http://www.w3cplus.com/sites/default/files/filter-contrast.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 九、blur模糊

一看字面意思就知道了，改变图片的清晰度

```
      .blur{
            -webkit-filter:blur(3px);
        }
    
```

**默认值：**0

[![img](http://www.w3cplus.com/sites/default/files/filter-blur.png)](http://jsfiddle.net/w3cplus/wThjx/)

#### 十、drop-shadow阴影

这个很像box-shadow一样的效果，给图片加阴影效果

```
      .drop-shadow{
            -webkit-filter:drop-shadow(5px 5px 5px #ccc);
        }
    
```

[![img](http://www.w3cplus.com/sites/default/files/filter-drop-shadow.png)](http://jsfiddle.net/w3cplus/wThjx/)

那么上面就是filter中的十种效果，当然大家可以根据自己的需求进行自定义：

```
      .custom{
            -webkit-filter:saturate(5) hue-rotate(500deg) grayscale(0.3) sepia(0.7) contrast(1.5) invert(0.2) brightness(.9);
        }
    
```

[![img](http://www.w3cplus.com/sites/default/files/filter-custom.png)](http://jsfiddle.net/w3cplus/wThjx/)

有关于CSS3的filter就简单的介绍到这里了，如果大家想更清楚的了解filter是神马，可以点击下面的扩展阅读：

1. [Say Hello to Webkit Filters](http://net.tutsplus.com/tutorials/html-css-techniques/say-hello-to-css3-filters/)
2. [Quick Fun: CSS3 Filter Effects](http://girliemac.com/blog/2011/12/21/quick-fun-css3-filter-effects/)
3. [Filter Effects 1.0](https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html)
4. [-webkit-filter是神马？](http://www.w3cplus.com/css3/http//www.qianduan.net/what-is-webkit-filter.html)

大家还可以借助[Jeffrey](http://net.tutsplus.com/)写的一个[在线制作CSS3 Filter效果工具](http://jsbin.com/uziyih)。

今天我就说到这里了，希望大家喜欢这篇教程。



\## 赞助

如果您觉得这篇文章对您有用,可以请作者喝一杯咖啡~~

微信：<img src="{{site.url}}/img/images/wx.png" width="200" height="200" alt="举个桃子的微信">
支付宝：<img src="{{site.url}}/img/images/zfb.png"  width="200" height="200" alt="举个桃子的支付宝">