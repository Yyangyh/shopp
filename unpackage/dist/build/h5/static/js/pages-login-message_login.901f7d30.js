(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-message_login"],{"87c2":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-377c3550]{padding-top:0;overflow:hidden}.uni-input-placeholder[data-v-377c3550]{color:#c5c5c5}.ipt[data-v-377c3550]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:%?20?%;border-bottom:%?2?% solid #eee;padding:%?20?% 0}.ipt uni-image[data-v-377c3550]{margin:0 %?20?%;width:%?35?%;height:%?45?%}.ipt uni-input[data-v-377c3550]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2}.ipt uni-text[data-v-377c3550]{font-size:%?32?%;width:%?160?%;text-align:center;white-space:nowrap}uni-button[data-v-377c3550]{background:#1d74ff;color:#fff;height:%?90?%;line-height:%?90?%;border-radius:%?45?%;width:84%;margin:%?60?% 8% %?30?% 8%}.test[data-v-377c3550]{text-align:center;color:#1d74ff;font-size:%?32?%}.other[data-v-377c3550]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:%?100?%}.other .line[data-v-377c3550]{width:%?120?%;height:%?1?%;border-bottom:%?1?% solid #b3b8d3}.other .other_test[data-v-377c3550]{margin:0 %?20?%;color:#999}.mode[data-v-377c3550]{text-align:center;margin-top:%?20?%}.mode uni-image[data-v-377c3550]{width:%?80?%;height:%?80?%}",""])},a23a:function(t,e,i){"use strict";i.r(e);var n=i("ec98"),a=i("d3ff");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("b837");var c=i("2877"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"377c3550",null);e["default"]=r.exports},b6d9:function(t,e,i){var n=i("87c2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("77ee9ed1",n,!0,{sourceMap:!1,shadowMode:!1})},b837:function(t,e,i){"use strict";var n=i("b6d9"),a=i.n(n);a.a},d3ff:function(t,e,i){"use strict";i.r(e);var n=i("e1dc"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},e1dc:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("4917"),i("28a5");var a=n(i("3675")),o={data:function(){return{verification:"获取验证码",disabled:!1,accounts:"",verify:""}},methods:{jump:function(t){uni.navigateTo({url:t})},obtain:function(){var t=this;1!=t.disabled&&uni.request({url:a.default.api_root.reg.WlVerifySend,method:"POST",header:{"X-Requested-With":"xmlhttprequest"},data:{accounts:t.accounts,type:"2"},success:function(e){console.log(t.disabled);var i=e.data;console.log(i),uni.showToast({icon:"none",title:i.msg}),0==i.code&&(t.verification="60s",t.disabled=!0,t.timer=setInterval(function(){var e=t.verification.split("s")[0];e--,t.verification=e+"s"},1e3))}})},login:function(){var t=this;uni.request({url:a.default.api_root.login.MobileLogin,method:"POST",header:{"X-Requested-With":"xmlhttprequest"},data:{accounts:t.accounts,verify:t.verify},success:function(e){var i=e.data;if(uni.showToast({icon:"none",title:i.msg}),0==i.code){uni.setStorageSync("token",i.data.token),uni.setStorageSync("token",i.data.token),uni.setStorageSync("uid",i.data.id),uni.setStorageSync("user",i.data),uni.setStorageSync("mobile",i.data.mobile);var n=navigator.userAgent.toLowerCase();if("micromessenger"==n.match(/MicroMessenger/i))return void(window.location.href=t.service.api_root.login.WeatchInfo+"?token="+i.data.token);setTimeout(function(){uni.switchTab({url:"../index/index"})},1e3)}}})}},watch:{verification:function(t,e){"-1s"==t&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}}};e.default=o},ec98:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"ipt"},[i("v-uni-image",{attrs:{src:"../../static/image/user.png",mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"输入手机号"},model:{value:t.accounts,callback:function(e){t.accounts=e},expression:"accounts"}})],1),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-image",{attrs:{src:"../../static/image/pwd.png",mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入验证码"},model:{value:t.verify,callback:function(e){t.verify=e},expression:"verify"}}),i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.obtain()}}},[t._v(t._s(t.verification))])],1),i("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.login()}}},[t._v("登录")]),i("v-uni-view",{staticClass:"test",on:{click:function(e){e=t.$handleEvent(e),t.jump("./login")}}},[i("v-uni-text",[t._v("密码登录")])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);