//百度统计数据
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9e2f3507f9ba09db6a5bfb99b47d8d7a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//统计home点击量
function homeClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "home-click"]);
}
//统计left按钮点击量
function leftClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "left-click"]);
}
//统计right按钮点击量
function rightClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "right-click"]);
}
//统计about点击量
function aboutClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "about-click"]);
}
//统计github点击量
function githubClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "github-click"]);
}
//统计微博点击量
function weiboClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "weibo-click"]);
}
//统计weixin点击量
function weixinClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "weixin-click"]);
}
//统计email点击量
function emailClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "email-click"]);
}

//百度链接提交
(function () {
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();