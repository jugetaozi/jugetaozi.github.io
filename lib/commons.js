/**
 *
 * @param 变量为字符串形式的 ID名
 * @returns {Element}
 */
function id(id){
    return  document.getElementById(id);
}

//缓动框架，
function animate(ele,json,time,fn){
    clearInterval(ele.timer);
    ele.timer=setInterval(function () {
        var flag=true;
        for (var k in json){
            if (k=="z-index"){
                ele.style.zIndex=json[k];
            }else if(k=="opacity"){
                var leader=parseFloat(getStyle(ele,k));
                var step=(json[k]-leader)/10;
                ele.style[k]=leader+step;
                ele.style.filter="alpha(opacity:"+(leader+step)*100+")";

                if (Math.abs(json[k]-leader-step)<=0.01){
                    ele.style[k]=json[k];
                    ele.style.filter="alpha(opacity:"+json[k]*100+")";
                }else{
                    flag=false;
                }

            }else{
                var leader=parseFloat(getStyle(ele,k));
                var step=(json[k]-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                ele.style[k]=leader+step+"px";
                if(Math.abs( json[k]-leader-step )<=Math.abs(step)){
                    ele.style[k]=json[k]+"px";
                }else{
                    flag=false;
                }
            }
        }
        if (flag==true){
            clearInterval(ele.timer);
            if (fn){
                fn();
            }
        }
    },time)
}

//缓动框架--获取元素属性兼容封装
function getStyle (ele,attr){
    return window.getComputedStyle(ele,null)[attr]||ele.currentStyle[attr];
}


//取消文字的被选中状态
function quxiao (){
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}


//浏览器可视区域的宽高的封装
function client(){
    //1.区分是普通浏览还是ie678； ie678中的window.innerWidth属性值为undefined；
    if(window.innerWidth !== undefined){
        //普通浏览器；
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }else if(document.compatMode==="CSS1Compat"){//2.区分有没有dtd
        //CSS1Compat:有DTD约束
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }else{
        //没有DTD约束
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    }
}

// 添加事件兼容性写法
function addEvent (ele,eve,fn){
  if (ele.addEventListener){
      ele.addEventListener(eve,fn);
  }else if (ele.attachEvent){
      ele.attachEvent("on"+eve,fn);
  }else{// 兼容dom0  用click 写法
      var oldEve=ele["on"+eve];
      ele["on"+eve]=function () {
          if (oldEve){
              oldEve();
              fn();
          }else{
              fn();
          }
      }
  }
}

//    解绑封装兼容封装
function removeEvent (ele,eve,fn){
    if (ele.removeEventListener){
        ele.removeEventListener(eve,fn);
    }else if(ele.detach){
        ele.detach("on"+ele,fn);
    }else{
        ele["on"+eve]=null;
    }
}

//取消冒泡兼容封装
function cancelBubble (event){
    event=event||window.event;
    if (event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble=true;//这个是用布尔值来操作的
    }

}
