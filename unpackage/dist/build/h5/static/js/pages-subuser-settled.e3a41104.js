(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-settled"],{"3b04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){var t=getCurrentPages();if(t.length>1)uni.navigateBack(1);else{var e=this.$router.go(-1);void 0==e&&uni.reLaunch({url:"/pages/index/index"})}}}};e.default=a},"562f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.returns()}}}),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"5e02":function(t,e,i){var a=i("e139");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("2f28dafa",a,!0,{sourceMap:!1,shadowMode:!1})},"641d":function(t,e,i){"use strict";i.r(e);var a=i("562f"),s=i("8d98");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("b4a9");var o=i("2877"),l=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"35a19ed7",null);e["default"]=l.exports},"645c":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("641d")),n={components:{returns:s.default},data:function(){return{title:"商家入驻",data_dition:"",status:99,reason:"",merchname:"",desc:"",realname:"",mobile:"",uname:"",upass:"",confirm_upass:"",license_image:"",identity_positive_image:"",identity_other_image:"",treaty_show:!1,treaty:"",open_protocol:"",checked:!0,msg:""}},methods:{upload:function(t){var e=this,i=this;uni.chooseImage({success:function(a){console.log(a);var s=a.tempFilePaths;uni.uploadFile({url:e.service.api_root.subuser.merchUpload,filePath:s[0],name:"file",formData:{token:uni.getStorageSync("token")},success:function(e){var a=JSON.parse(e.data);console.log(a),uni.showToast({icon:"none",title:a.msg}),0==a.code&&(1==t&&(i.license_image=a.data.file),2==t&&(i.identity_positive_image=a.data.file),3==t&&(i.identity_other_image=a.data.file))}})}})},submit:function(){console.log(this.checked),console.log(this.open_protocol),1==this.checked||1!=this.open_protocol?this.confirm_upass==this.upass?this.service.entire(this,"post",this.service.api_root.subuser.merchSubmit,{merchname:this.merchname,desc:this.desc,realname:this.realname,mobile:this.mobile,license_image:this.license_image,identity_positive_image:this.identity_positive_image,identity_other_image:this.identity_other_image,uname:this.uname,upass:this.upass},function(t,e){console.log(e),uni.showToast({icon:"none",title:e.msg}),0==e.code&&setTimeout(function(){uni.switchTab({url:"../index/user"})},1500)}):uni.showToast({icon:"none",title:"密码不一致"}):uni.showToast({icon:"none",title:"请阅读并同意入驻须知"})}},onShow:function(){this.service.entire(this,"post",this.service.api_root.subuser.merchRegister,{},function(t,e){console.log(e),0==e.code?(t.status=e.data.status,t.reason=e.data.reason,t.treaty=e.data.applycontent,t.open_protocol=e.data.open_protocol):(t.status=2,t.msg=e.msg)})}};e.default=n},8078:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),""===t.status||-1==t.status?i("v-uni-view",{},[i("v-uni-image",{staticClass:"settled_top",attrs:{src:"../../static/image/secondary/settled_top.jpg",mode:"widthFix"}}),-1==t.status?i("v-uni-view",{staticClass:"reason"},[i("v-uni-view",{},[t._v("您的申请被驳回：")]),i("v-uni-view",{},[t._v(t._s(t.reason))]),i("v-uni-view",{},[t._v("请重新提交")])],1):t._e(),i("v-uni-view",{staticClass:"settled_box"},[i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{},[i("v-uni-view",{},[t._v("商户名称")]),i("v-uni-text",[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"商户名称"},model:{value:t.merchname,callback:function(e){t.merchname=e},expression:"merchname"}})],1),i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{},[i("v-uni-view",{},[t._v("简单介绍")])],1),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"简单介绍下客户"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1),i("v-uni-view",{staticClass:"upload"},[i("v-uni-view",{staticClass:"upload_test"},[t._v("请上传营业执照")]),i("v-uni-view",{staticClass:"upload_img",on:{click:function(e){e=t.$handleEvent(e),t.upload(1)}}},[t.license_image?i("v-uni-image",{attrs:{src:t.license_image,mode:"widthFix"}}):i("v-uni-image",{attrs:{src:"../../static/image/secondary/settled_img.png",mode:"widthFix"}}),i("v-uni-image",{attrs:{src:"../../static/image/go.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"upload"},[i("v-uni-view",{staticClass:"upload_test"},[t._v("法人身份证正面")]),i("v-uni-view",{staticClass:"upload_img",on:{click:function(e){e=t.$handleEvent(e),t.upload(2)}}},[t.identity_positive_image?i("v-uni-image",{attrs:{src:t.identity_positive_image,mode:"widthFix"}}):i("v-uni-image",{attrs:{src:"../../static/image/secondary/settled_img.png",mode:"widthFix"}}),i("v-uni-image",{attrs:{src:"../../static/image/go.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"upload"},[i("v-uni-view",{staticClass:"upload_test"},[t._v("法人身份证反面")]),i("v-uni-view",{staticClass:"upload_img",on:{click:function(e){e=t.$handleEvent(e),t.upload(3)}}},[t.identity_other_image?i("v-uni-image",{attrs:{src:t.identity_other_image,mode:"widthFix"}}):i("v-uni-image",{attrs:{src:"../../static/image/secondary/settled_img.png",mode:"widthFix"}}),i("v-uni-image",{attrs:{src:"../../static/image/go.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"settled_box"},[i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{},[i("v-uni-view",{},[t._v("联系人")]),i("v-uni-text",[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"您的姓名"},model:{value:t.realname,callback:function(e){t.realname=e},expression:"realname"}})],1),i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{},[i("v-uni-view",{},[t._v("手机号")]),i("v-uni-text",[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"您的手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{staticClass:"list_test"},[t._v("请仔细填写联系方式，保证我们能尽快联系到您~")])],1)],1),i("v-uni-view",{staticClass:"settled_box"},[i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{},[i("v-uni-view",{},[t._v("账号")]),i("v-uni-text",[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"账号"},model:{value:t.uname,callback:function(e){t.uname=e},expression:"uname"}})],1),i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{},[i("v-uni-view",{},[t._v("密码")]),i("v-uni-text",[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"",password:"true",placeholder:"密码"},model:{value:t.upass,callback:function(e){t.upass=e},expression:"upass"}})],1),i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{},[i("v-uni-view",{},[t._v("确认密码")]),i("v-uni-text",[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"",password:"true",placeholder:"确认密码"},model:{value:t.confirm_upass,callback:function(e){t.confirm_upass=e},expression:"confirm_upass"}})],1),i("v-uni-view",{staticClass:"box_list"},[i("v-uni-view",{staticClass:"list_test"},[t._v("用于登录多商户后台，请认真填写，保证我们能尽快联系到您~")])],1)],1),1==t.open_protocol?i("v-uni-view",{staticClass:"treaty"},[i("v-uni-label",{staticClass:"radio"},[i("v-uni-checkbox",{staticClass:"checkbox-3",staticStyle:{transform:"scale(0.8)"},attrs:{checked:t.checked}})],1),t._v("我已阅读并了解"),i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.treaty_show=!0}}},[t._v("【入驻须知】")])],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.treaty_show,expression:"treaty_show == true"}],staticClass:"Mask",on:{click:function(e){e=t.$handleEvent(e),t.treaty_show=!1}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.treaty_show,expression:"treaty_show == true"}],staticClass:"treaty_box"},[i("v-uni-view",{staticClass:"box_top"},[t._v("入驻须知")]),i("v-uni-view",{staticClass:"box_conent"},[i("v-uni-rich-text",{attrs:{nodes:t.treaty}})],1),i("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.treaty_show=!1}}},[t._v("我已阅读")])],1),i("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.submit()}}},[t._v("立即申请入驻")])],1):0==t.status?i("v-uni-view",{staticClass:"process"},[i("v-uni-image",{attrs:{src:"../../static/image/secondary/submit.png",mode:"widthFix"}}),i("v-uni-view",{},[t._v("已提交，请耐心等待审核~")])],1):1==t.status?i("v-uni-view",{staticClass:"process"},[i("v-uni-view",{},[t._v("入驻成功！")])],1):2==t.status?i("v-uni-view",{staticClass:"process"},[i("v-uni-image",{attrs:{src:"../../static/image/secondary/submit.png",mode:"widthFix"}}),i("v-uni-view",{},[t._v(t._s(t.msg)+"！")])],1):t._e()],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"8d98":function(t,e,i){"use strict";i.r(e);var a=i("3b04"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},"925b":function(t,e,i){"use strict";i.r(e);var a=i("645c"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},9544:function(t,e,i){"use strict";i.r(e);var a=i("8078"),s=i("925b");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("f441");var o=i("2877"),l=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"02f40455",null);e["default"]=l.exports},b03d:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-35a19ed7]{height:%?105?%;padding:0 %?44?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-35a19ed7]{height:%?40?%;width:%?40?%}.top uni-text[data-v-35a19ed7]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},b4a9:function(t,e,i){"use strict";var a=i("ba47"),s=i.n(a);s.a},ba47:function(t,e,i){var a=i("b03d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("26535717",a,!0,{sourceMap:!1,shadowMode:!1})},e139:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-02f40455]{background:#f1f1f1;height:100%}.content[data-v-02f40455]{font-size:%?28?%;height:100%}.uni-input-placeholder[data-v-02f40455]{color:#999}.reason[data-v-02f40455]{padding:%?20?%;background:#f76464;color:#fff;font-size:%?28?%}.settled_top[data-v-02f40455]{width:100%;height:%?280?%;margin-bottom:%?20?%}.settled_box[data-v-02f40455]{background:#fff;margin-bottom:%?20?%}.settled_box .box_list[data-v-02f40455]{height:%?100?%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:%?1?% solid #f1f1f1}.settled_box .box_list .list_test[data-v-02f40455]{font-size:%?24?%;width:100%}.settled_box .box_list>uni-view[data-v-02f40455]{width:%?140?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.settled_box .box_list uni-input[data-v-02f40455]{font-size:%?28?%;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;color:#333}.settled_box .box_list uni-text[data-v-02f40455]{color:#ff431d}.upload[data-v-02f40455]{margin-bottom:%?20?%;height:%?100?%;padding:0 %?20?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.upload .upload_img[data-v-02f40455]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.upload uni-image[data-v-02f40455]:first-of-type{width:%?50?%;height:%?50?%;margin-right:%?20?%}.upload uni-image[data-v-02f40455]:nth-of-type(2){width:%?32?%;height:%?32?%}.Mask[data-v-02f40455]{position:fixed;left:0;top:0;height:100%;width:100%;z-index:888;background:rgba(0,0,0,.6)}.treaty[data-v-02f40455]{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?100?%;padding:0 %?20?%}.treaty uni-text[data-v-02f40455]{color:#1d74ff}.treaty_box[data-v-02f40455]{position:fixed;z-index:999;height:%?780?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;width:80%;background:#fff;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.treaty_box .box_top[data-v-02f40455]{text-align:center;font-size:%?36?%}.treaty_box .box_conent[data-v-02f40455]{margin:%?20?% 0;height:%?560?%}.treaty_box uni-button[data-v-02f40455]{position:absolute;width:90%;height:%?80?%;bottom:%?20?%;left:50%;margin:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}uni-button[data-v-02f40455]{text-align:center;height:%?80?%;line-height:%?80?%;border-radius:%?80?%;font-size:%?28?%;color:#fff;background:#1d74ff;margin:%?30?% %?20?%}.process[data-v-02f40455]{text-align:center;height:100%;background:#fff;position:fixed;z-index:1;width:100%;padding-top:%?120?%}.process uni-view[data-v-02f40455]{text-align:center;font-size:%?28?%}.process uni-image[data-v-02f40455]{height:%?290?%;width:%?290?%}body.?%PAGE?%[data-v-02f40455]{background:#f1f1f1}",""])},f441:function(t,e,i){"use strict";var a=i("5e02"),s=i.n(a);s.a}}]);