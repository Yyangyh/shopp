(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/threeLayers/modify_phone"],{"084d":function(t,i,e){"use strict";e.r(i);var n=e("7743"),o=e("3f13");for(var r in o)"default"!==r&&function(t){e.d(i,t,function(){return o[t]})}(r);e("5ba1");var s=e("2877"),a=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"dfc8b3da",null);i["default"]=a.exports},"3f13":function(t,i,e){"use strict";e.r(i);var n=e("d01f"),o=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=o.a},"5ba1":function(t,i,e){"use strict";var n=e("af81"),o=e.n(n);o.a},7743:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},a1db:function(t,i,e){"use strict";(function(t){e("fc5f"),e("921b");n(e("66fd"));var i=n(e("084d"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("6e42")["createPage"])},af81:function(t,i,e){},d01f:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;n(e("3675"));function n(t){return t&&t.__esModule?t:{default:t}}var o=function(){return e.e("pages/common/returns").then(e.bind(null,"641d"))},r={components:{returns:o},data:function(){return{title:"修改手机号",ori_verification:"获取验证码",ori_disabled:!1,ori_accounts:"",ori_verify:"",verification:"获取验证码",disabled:!1,accounts:"",verify:"",show:1}},methods:{obtain:function(){var i=this;if(1!=i.disabled){var e=new Object;2==this.show&&(e.accounts=i.accounts),this.service.entire(this,"get",this.service.api_root.threeLayers.VerifySend,e,function(i,e){t.showToast({icon:"none",title:e.msg}),0==e.code&&(2==i.show?(i.verification="60s",i.disabled=!0,i.timer=setInterval(function(){var t=i.verification.split("s")[0];t--,i.verification=t+"s"},1e3)):(i.ori_verification="60s",i.ori_disabled=!0,i.ori_timer=setInterval(function(){var t=i.ori_verification.split("s")[0];t--,i.ori_verification=t+"s"},1e3)))})}},ascertain:function(){var i,e=new Object;1==this.show?(i=this.service.api_root.threeLayers.VerifyCheck,e.verify=this.ori_verify):(i=this.service.api_root.threeLayers.AccountsUpdate,e.verify=this.verify,e.accounts=this.accounts),this.service.entire(this,"post",i,e,function(i,e){if(t.showToast({icon:"none",title:e.msg}),0==e.code){if(1==i.show)return void(i.show=2);t.setStorageSync("mobile",i.accounts),setTimeout(function(){i.common.returns(i)},1500)}})}},watch:{verification:function(t,i){"-1s"==t&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)},ori_verification:function(t,i){"-1s"==t&&(clearInterval(this.ori_timer),this.ori_verification="重新获取",this.ori_disabled=!1)}},onShow:function(){this.ori_accounts=t.getStorageSync("mobile")}};i.default=r}).call(this,e("6e42")["default"])}},[["a1db","common/runtime","common/vendor"]]]);