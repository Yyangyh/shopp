(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/settled"],{"02f0":function(e,t,s){},1522:function(e,t,s){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return s.e("pages/common/returns").then(s.bind(null,"641d"))},i={components:{returns:n},data:function(){return{title:"商家入驻",data_dition:"",status:99,reason:"",merchname:"",desc:"",realname:"",mobile:"",uname:"",upass:"",confirm_upass:"",license_image:"",identity_positive_image:"",identity_other_image:"",treaty_show:!1,treaty:"",open_protocol:"",checked:!0,msg:""}},methods:{upload:function(t){var s=this,n=this;e.chooseImage({success:function(i){console.log(o(i," at pages\\subuser\\settled.vue:207"));var a=i.tempFilePaths;e.uploadFile({url:s.service.api_root.subuser.merchUpload,filePath:a[0],name:"file",formData:{token:e.getStorageSync("token")},success:function(s){var i=JSON.parse(s.data);console.log(o(i," at pages\\subuser\\settled.vue:218")),e.showToast({icon:"none",title:i.msg}),0==i.code&&(1==t&&(n.license_image=i.data.file),2==t&&(n.identity_positive_image=i.data.file),3==t&&(n.identity_other_image=i.data.file))}})}})},submit:function(){console.log(o(this.checked," at pages\\subuser\\settled.vue:235")),console.log(o(this.open_protocol," at pages\\subuser\\settled.vue:236")),1!=this.checked||1!=this.open_protocol?this.confirm_upass==this.upass?this.service.entire(this,"post",this.service.api_root.subuser.merchSubmit,{merchname:this.merchname,desc:this.desc,realname:this.realname,mobile:this.mobile,license_image:this.license_image,identity_positive_image:this.identity_positive_image,identity_other_image:this.identity_other_image,uname:this.uname,upass:this.upass},function(t,s){console.log(o(s," at pages\\subuser\\settled.vue:262")),e.showToast({icon:"none",title:s.msg}),0==s.code&&setTimeout(function(){e.switchTab({url:"../index/user"})},1500)}):e.showToast({icon:"none",title:"密码不一致"}):e.showToast({icon:"none",title:"请阅读并同意入驻须知"})}},onShow:function(){this.service.entire(this,"post",this.service.api_root.subuser.merchRegister,{},function(e,t){console.log(o(t," at pages\\subuser\\settled.vue:279")),0==t.code?(e.status=t.data.status,e.reason=t.data.reason,e.treaty=t.data.applycontent,e.open_protocol=t.data.open_protocol):(e.status=2,e.msg=t.msg)})}};t.default=i}).call(this,s("6e42")["default"],s("0de9")["default"])},1564:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.treaty_show=!0},e.e1=function(t){e.treaty_show=!1},e.e2=function(t){e.treaty_show=!1})},n=[];s.d(t,"a",function(){return o}),s.d(t,"b",function(){return n})},"6c26":function(e,t,s){"use strict";(function(e){s("fc5f"),s("921b");o(s("66fd"));var t=o(s("9544"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])},"925b":function(e,t,s){"use strict";s.r(t);var o=s("1522"),n=s.n(o);for(var i in o)"default"!==i&&function(e){s.d(t,e,function(){return o[e]})}(i);t["default"]=n.a},9544:function(e,t,s){"use strict";s.r(t);var o=s("1564"),n=s("925b");for(var i in n)"default"!==i&&function(e){s.d(t,e,function(){return n[e]})}(i);s("e296");var a=s("2877"),u=Object(a["a"])(n["default"],o["a"],o["b"],!1,null,"711d6fa5",null);t["default"]=u.exports},e296:function(e,t,s){"use strict";var o=s("02f0"),n=s.n(o);n.a}},[["6c26","common/runtime","common/vendor"]]]);