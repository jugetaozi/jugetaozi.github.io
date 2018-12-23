---
layout: post
title: "someUtils"
excerpt: "someUtils"
categories: code&nbsp;share
comments: true
---
# 数据的深拷贝(可以拷贝DOM元素)
```
function deepCopy(obj, type) {
        var temp = type || {}
        for (var k in obj) {
            if (Object.prototype.toString.call(obj[k]) === '[object Object]') {
                temp[k] = deepCopy(obj[k], {})
            } else if (Object.prototype.toString.call(obj[k]) === '[object Array]') {
                temp[k] = deepCopy(obj[k], [])
            } else {
                temp[k] = obj[k]
            }
        }
        return temp
    }
//进化版1
    function deepCopy(obj) {
        var temp = Array.isArray(obj) ? [] : {}
        for (var k in obj) {
            if (Object.prototype.toString.call(obj[k]) === '[object Object]') {
                temp[k] = deepCopy(obj[k])
            } else if   (Object.prototype.toString.call(obj[k]) === '[object Array]') {
                temp[k] = deepCopy(obj[k])
            } else {
                temp[k] = obj[k]
            }
        }
        return temp
    }

    //进化版2
    function deepCopy(obj) {
        var temp = Array.isArray(obj) ? [] : {}
        for (var k in obj) {
            var objType = Object.prototype.toString.call(obj[k])
            if ( objType === '[object Object]' || objType === '[object Array]') {
                temp[k] = deepCopy(obj[k])
            }else {
                temp[k] = obj[k]
            }
        }
        return temp
    }
```

---

#

## 最后说几句

如果有任何问题或建议，可以给我[发邮件：156343782@qq.com](mailto:156343782@qq.com).

欢迎交换友链,给我 [发邮件：156343782@qq.com](mailto:156343782@qq.com), 基本上可以做到秒加.


## 赞助

如果您觉得这篇文章对您有用,可以请作者喝一杯咖啡~~

微信：<img src="{{site.url}}/img/images/wx.png" width="200" height="200" alt="举个桃子的微信">
支付宝：<img src="{{site.url}}/img/images/zfb.png"  width="200" height="200" alt="举个桃子的支付宝">