(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"33e2":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){this.service.entire(this,"get",this.service.api_root.common.version,{},function(t,o){plus.runtime.getProperty(plus.runtime.appid,function(u){u.version!=o.data.version&&e.showModal({title:"提示",content:"检测到新版本，是否确定更新？",success:function(o){o.confirm?(e.showLoading({title:"下载中",mask:!0}),e.downloadFile({url:t.service.api_root.common.version_wgt,success:function(t){e.showLoading({title:"安装中",mask:!0}),200===t.statusCode&&plus.runtime.install(t.tempFilePath,{force:!0},function(){e.hideLoading(),plus.runtime.restart()},function(t){e.hideLoading(),console.log(n(t," at App.vue:33"))})}})):o.cancel&&(console.log(n("用户点击取消"," at App.vue:40")),e.showToast({icon:"none",title:u.version}))}})})})},onLoad:function(){},onShow:function(){console.log(n("App Show"," at App.vue:63"))},onHide:function(){console.log(n("App Hide"," at App.vue:66"))}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},4589:function(e,t,n){},6281:function(e,t,n){"use strict";n.r(t);var o=n("33e2"),u=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=u.a},"8e47":function(e,t,n){"use strict";(function(e){n("fc5f"),n("921b");var t=a(n("66fd")),o=a(n("dc79")),u=a(n("3675")),i=a(n("8235")),r=a(n("f1b3"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){return n.e("components/load/load").then(n.bind(null,"91bf"))};t.default.component("Load",f),t.default.prototype.$store=r.default,t.default.prototype.service=u.default,t.default.prototype.common=i.default,t.default.config.productionTip=!1,o.default.mpType="app";var s=new t.default(c({},o.default));e(s).$mount()}).call(this,n("6e42")["createApp"])},dc79:function(e,t,n){"use strict";n.r(t);var o=n("6281");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("fa7b");var i,r,a=n("2877"),c=Object(a["a"])(o["default"],i,r,!1,null,null,null);t["default"]=c.exports},fa7b:function(e,t,n){"use strict";var o=n("4589"),u=n.n(o);u.a}},[["8e47","common/runtime","common/vendor"]]]);