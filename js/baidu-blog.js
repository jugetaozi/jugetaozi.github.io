//百度统计数据
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ad7043a42dea926a79bdada91162942f";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

//统计github点击量
function githubClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "github-click"]);
}
//统计微博点击量
function weiboClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "weibo-click"]);
}
//统计email点击量
function emailClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "email-click"]);
}
//统计dribbble点击量
function dribbbleClick() {
  _hmt.push(['_trackEvent', "social-link-btn", "click", "dribbble-click"]);
}
//百度链接提交
(function () {
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
    bp.src = 'https://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();