---
layout: post
title: skPlayer (已支持拉取网易云音乐歌单)
excerpt: "一款极简的HTML5音乐播放器。"
categories: Plugin
tag: Plugin
comments: true
---

## 前言
[![npm](https://img.shields.io/npm/v/skplayer.svg)]() [![npm](https://img.shields.io/npm/l/skplayer.svg?maxAge=2592000)]() [![npm](https://img.shields.io/npm/dt/skplayer.svg)]() [![npm](https://img.shields.io/badge/made%20by-Scott-orange.svg)]()  


a simple HTML5 music player  
一款极简的HTML5音乐播放器

预览：  
![demo](https://o9vplcp9o.bkt.clouddn.com/demo.gif)
多曲列表模式预览：  
![demo](https://o9vplcp9o.bkt.clouddn.com/demo_mutil.jpg)
red主题预览：  
![demo](https://o9vplcp9o.bkt.clouddn.com/demo_red.jpg)

## 使用方法
方式1：NPM  

```bash
npm install skplayer
```

方式2：引入文件  

引入css文件： 

```html
<link rel="stylesheet" href="./dist/skPlayer.min.css">
```

写入播放器DOM：

```html
<div id="skPlayer"></div>
```

引入js文件：

```html
<script src="./dist/skPlayer.min.js"></script>
```

配置skPlayer对象：

```js
//无列表单曲模式
skPlayer({
    music:{
        src:'https://o9vplcp9o.bkt.clouddn.com/music.mp3',//音乐文件，必填
        name:'打呼',//歌曲名称，必填
        author:'潘玮柏&杨丞琳',//歌手，必填
        cover:'https://o9vplcp9o.bkt.clouddn.com/cover.jpg'//专辑封面，必填
    },
    //loop:true 是否单曲循环，选填
    //theme:'red' 切换red主题，选填
});
//有列表多曲模式
skPlayer({
    music:[
        {
            src:'https://o9vplcp9o.bkt.clouddn.com/Solitude.mp3',//音乐文件，必填
            name:'Solitude',//歌曲名称，必填
            author:'Re:plus',//歌手，必填
            cover:'https://o9vplcp9o.bkt.clouddn.com/Solitude_cover.jpg'//专辑封面，必填
        },
        {
            src:'https://o9vplcp9o.bkt.clouddn.com/CountingStars.mp3',
            name:'Counting Stars',
            author:'OneRepublic',
            cover:'https://o9vplcp9o.bkt.clouddn.com/CountingStars_cover.jpg'
        },
        {
            src:'https://o9vplcp9o.bkt.clouddn.com/music.mp3',
            name:'打呼',
            author:'潘玮柏&杨丞琳',
            cover:'https://o9vplcp9o.bkt.clouddn.com/cover.jpg'
        }
    ],
    //loop:true 是否单曲循环，选填
    //theme:'red' 切换red主题，选填
});
//获取网易云歌单模式
skPlayer({
    music:317921676 //歌单id(登陆网页版网易云音乐，进入歌单详情后，在url中可找到歌单id，例：'https://music.163.com/#/playlist?id=317921676'),
    theme:'red'
});
```

## 技术依赖
原生Javascript、CSS3、HTML5 DOM API、HTML5 AUDIO API

## TODO
* 滚动歌词
* 兼容移动端

## 最后
UI参考：[dribbble](https://dribbble.com/shots/1233843-Ui-Kit-Rainy-Season)

## 赞助

如果您觉得这篇文章对您有用,可以请作者喝一杯咖啡~~

微信：<img src="{{site.url}}/img/images/wx.png" width="200" height="200" alt="举个桃子的微信">
支付宝：<img src="{{site.url}}/img/images/zfb.png"  width="200" height="200" alt="举个桃子的支付宝">