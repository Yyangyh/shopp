(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/user"],{"046f":function(t,e,a){},"4c02":function(t,e,a){"use strict";a.r(e);var n=a("5dc3"),u=a("e0f1");for(var r in u)"default"!==r&&function(t){a.d(e,t,function(){return u[t]})}(r);a("58a9");var o=a("2877"),s=Object(o["a"])(u["default"],n["a"],n["b"],!1,null,"9d1b9914",null);e["default"]=s.exports},5560:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{style:"",data:"",nickname:"",state:"",order_status:"",name_status:"",uid:""}},methods:{sweep:function(){var e=this;t.scanCode({success:function(a){var n=a.result;n=n.split("?"),n[0]==e.service.api+"/h5/#/pages/reg/reg"&&t.navigateTo({url:"../reg/reg?"+n[1]})}})},jump:function(e){2!=this.state?t.navigateTo({url:e}):t.navigateTo({url:"../login/login"})}},onShow:function(){var e=this,n={};t.getStorageSync("token")&&(n.token=t.getStorageSync("token")),t.request({url:this.service.api_root.user.userCenter,method:"POST",data:n,success:function(n){-400==n.data.code?(e.state=2,e.order_status=""):(e.state=1,e.data=n.data.data,e.name_status=n.data.data.UserIdentityCard,e.order_status=n.data.data.user_order_status,console.log(a(n.data.data," at pages\\index\\user.vue:394")),e.nickname=n.data.data.nickname,e.uid=t.getStorageSync("uid"),t.setStorageSync("nickname",n.data.data.nickname),t.setStorageSync("user",n.data.data))}})},onLoad:function(){}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},"584d":function(t,e,a){"use strict";(function(t){a("fc5f"),a("921b");n(a("66fd"));var e=n(a("4c02"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"58a9":function(t,e,a){"use strict";var n=a("046f"),u=a.n(n);u.a},"5dc3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},u=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return u})},e0f1:function(t,e,a){"use strict";a.r(e);var n=a("5560"),u=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=u.a}},[["584d","common/runtime","common/vendor"]]]);