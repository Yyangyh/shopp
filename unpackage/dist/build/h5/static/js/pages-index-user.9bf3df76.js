(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-user"],{2539:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("28a5");var a={data:function(){return{style:"",data:"",nickname:""}},methods:{sweep:function(){var t=this;uni.scanCode({success:function(i){console.log("条码类型："+i.scanType),console.log("条码内容："+i.result),console.log(i.result);var e=i.result;e=e.split("?"),console.log(e[0]),e[0]==t.service.api+"/h5/#/pages/reg/reg"&&uni.navigateTo({url:"../reg/reg?"+e[1]})}})},jump:function(t){uni.navigateTo({url:t})}},onShow:function(){this.service.entire(this,"post",this.service.api_root.user.userCenter+"?token="+uni.getStorageSync("token"),{},function(t,i){console.log(i),t.data=i.data,t.nickname=i.data.nickname,uni.setStorageSync("nickname",i.data.nickname),uni.setStorageSync("user",i.data)})},onLoad:function(){}};i.default=a},"3fac":function(t,i,e){var a=e("5b30");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("70dffe06",a,!0,{sourceMap:!1,shadowMode:!1})},"4c02":function(t,i,e){"use strict";e.r(i);var a=e("7191"),s=e("e0f1");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("9c4b");var c=e("2877"),o=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,"c7f5dc6e",null);i["default"]=o.exports},"5b30":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-c7f5dc6e]{background:#f1f1f1}.content[data-v-c7f5dc6e]{padding-bottom:%?20?%}.status_bar[data-v-c7f5dc6e]{background:-webkit-gradient(linear,left top,right top,from(#0077f5),to(#00a7fa));background:-o-linear-gradient(left,#0077f5,#00a7fa);background:linear-gradient(90deg,#0077f5,#00a7fa)}.top[data-v-c7f5dc6e]{background:-webkit-gradient(linear,left top,right top,from(#0077f5),to(#00a7fa));background:-o-linear-gradient(left,#0077f5,#00a7fa);background:linear-gradient(90deg,#0077f5,#00a7fa)}.top .top_test[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?105?%;padding:0 %?20?%;z-index:99\n\t\n\t/* position: absolute; */\n\t/* width: 100%; */}.top .top_test uni-image[data-v-c7f5dc6e]{height:%?48?%;width:%?48?%;margin-right:%?20?%}.top .user[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#fff;font-size:%?28?%;padding:%?20?% 0 %?100?% %?54?%}.top .user .user_left[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.top .user .user_head[data-v-c7f5dc6e]{height:%?130?%;width:%?130?%;border-radius:50%;margin-right:%?26?%}.top .user .user_left .left_top[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.top .user .user_left .left_bottom[data-v-c7f5dc6e]{background:#007fe9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?36?%;width:%?106?%;line-height:%?36?%;border-radius:%?36?%;font-size:%?24?%;margin-top:%?20?%}.top .user .user_right[data-v-c7f5dc6e]{background:#007fe9;margin-left:%?16?%;height:%?36?%;border-radius:%?36?%;width:%?190?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?24?%}.top .user .user_right uni-text[data-v-c7f5dc6e]{margin:0 %?6?%}.top .user uni-image[data-v-c7f5dc6e]{width:%?24?%;height:%?24?%}.semicircle[data-v-c7f5dc6e]{\n\t/* height: 320rpx;\n\twidth: 100%;\n\tbackground: #000000;\n\tborder-radius: 100%;\n\tposition: relative;\n\ttop: 10rpx; */}.user_vip[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;top:%?-60?%;border-radius:%?10?%;margin:0 %?20?%;padding:%?16?% %?30?%;font-size:%?28?%;color:#333;background:#fff}.user_vip .vip_one[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.user_vip .vip_one uni-image[data-v-c7f5dc6e]{height:%?78?%;width:%?76?%;margin-right:%?16?%}.user_vip .vip_one uni-view[data-v-c7f5dc6e]:nth-of-type(2){color:#ccc;font-size:%?24?%}.user_vip .vip_two[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#666}.user_vip .vip_two uni-image[data-v-c7f5dc6e]{height:%?20?%;width:%?20?%}.user_top[data-v-c7f5dc6e]{height:%?150?%;margin:0 %?20?%;position:relative;top:%?-40?%;background:#fff;font-size:%?28?%;color:#333;border-radius:%?10?%}.user_top .user_tab[data-v-c7f5dc6e]{height:%?150?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.user_top .user_tab .tab_list[data-v-c7f5dc6e]{width:25%;text-align:center}.user_top uni-image[data-v-c7f5dc6e]{width:%?70?%;height:%?70?%}.user_middle[data-v-c7f5dc6e]{background:#fff;margin:0 %?20?%;position:relative;top:%?-20?%;border-radius:%?10?%;padding:%?0?% %?30?% %?28?% %?30?%;border-bottom:%?1?% solid #f2f2f2}.user_middle .middle_top[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?32?%;color:#333;font-weight:700;border-bottom:%?2?% solid #f2f2f2;padding:%?34?% 0}.user_middle .middle_top uni-view[data-v-c7f5dc6e]:last-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.user_middle .middle_top uni-text[data-v-c7f5dc6e]{font-size:%?22?%;color:#333;margin-right:%?24?%}.user_middle .middle_top uni-image[data-v-c7f5dc6e]{width:%?28?%;height:%?28?%}.user_middle .middle_tab[data-v-c7f5dc6e]{padding-top:%?34?%}.user_middle .middle_tab .tab_top[data-v-c7f5dc6e]{font-size:%?28?%;font-weight:700;margin-bottom:%?26?%}.tab_box[data-v-c7f5dc6e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;\n\t/* justify-content: space-between; */-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;text-align:center;color:#333;font-size:%?24?%}.user_middle .middle_tab .tab_box[data-v-c7f5dc6e]:nth-of-type(2){padding-bottom:%?26?%;margin-bottom:%?34?%;border-bottom:%?2?% solid #f2f2f2}.tab_box uni-image[data-v-c7f5dc6e]{height:%?54?%;width:%?54?%;margin-bottom:%?13?%}.tab_box .tab_list[data-v-c7f5dc6e]{width:25%}.list_bottom[data-v-c7f5dc6e]{background:#fff;margin:0 %?20?%;border-radius:%?10?%;padding:%?36?% %?30?% %?10?% %?30?%}.list_bottom .list_test[data-v-c7f5dc6e]{font-size:%?32?%;color:#333;font-weight:700;padding-bottom:%?32?%;margin-bottom:%?20?%;border-bottom:%?2?% solid #f2f2f2}.list_bottom .tab_list[data-v-c7f5dc6e]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}uni-button[data-v-c7f5dc6e]{background:#1d9dff;margin-top:%?60?%}body.?%PAGE?%[data-v-c7f5dc6e]{background:#f1f1f1}",""])},7191:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"status_bar"}),e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"top_test"},[e("v-uni-image",{attrs:{src:"../../static/image/set.png",mode:"widthFix"},on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/set")}}}),e("v-uni-image",{attrs:{src:"../../static/image/news.png",mode:"widthFix"},on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/feedback")}}}),e("v-uni-image",{attrs:{src:"../../static/image/feedback.png",mode:"widthFix"},on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/notice")}}})],1),e("v-uni-view",{staticClass:"user"},[e("v-uni-image",{staticClass:"user_head",attrs:{src:t.data.avatar,mode:"aspectFill"},on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/profile")}}}),e("v-uni-view",{staticClass:"user_left"},[e("v-uni-view",{staticClass:"left_top"},[t.nickname?e("v-uni-view",[t._v(t._s(t.nickname))]):e("v-uni-view",[t._v("未修改昵称")]),e("v-uni-view",{staticClass:"user_right"},[e("v-uni-image",{attrs:{src:"../../static/image/id.png",mode:"widthFix"}}),e("v-uni-text",[t._v("实名认证")]),e("v-uni-image",{attrs:{src:"../../static/image/go1.png",mode:"widthFix"}})],1)],1),e("v-uni-view",{staticClass:"left_bottom"},[e("v-uni-image",{attrs:{src:"../../static/image/check.png",mode:"widthFix"}}),e("v-uni-text",[t._v("会员")])],1)],1)],1),e("v-uni-view",{staticClass:"semicircle",style:t.style})],1),e("v-uni-view",{staticClass:"user_vip",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/member")}}},[e("v-uni-view",{staticClass:"vip_one"},[e("v-uni-image",{attrs:{src:"../../static/image/vip.png",mode:"widthFix"}}),e("v-uni-view",{},[e("v-uni-view",{},[t._v("成为超级会员")]),e("v-uni-view",{},[t._v("享受特权，全年可省300元")])],1)],1),e("v-uni-view",{staticClass:"vip_two"},[e("v-uni-view",{},[t._v("立即开通")]),e("v-uni-image",{attrs:{src:"../../static/image/go.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"user_top"},[e("v-uni-view",{staticClass:"user_tab"},[e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/member")}}},[e("v-uni-image",{attrs:{src:"../../static/image/member.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("会员中心")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/register")}}},[e("v-uni-image",{attrs:{src:"../../static/image/signIn.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("签到")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/integral")}}},[e("v-uni-image",{attrs:{src:"../../static/image/integral1.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("积分")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/coupon")}}},[e("v-uni-image",{attrs:{src:"../../static/image/oupon1.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("优惠券")])],1)],1)],1),e("v-uni-view",{staticClass:"user_middle"},[e("v-uni-view",{staticClass:"middle_top"},[e("v-uni-view",{},[t._v("我的订单")]),e("v-uni-view",[e("v-uni-text",[t._v("查看更多订单")]),e("v-uni-image",{attrs:{src:"../../static/image/go.png",mode:"widthFix"}})],1)],1),e("v-uni-view",{staticClass:"middle_tab"},[e("v-uni-view",{staticClass:"tab_top"},[t._v("门票玩乐订单")]),e("v-uni-view",{staticClass:"tab_box"},[e("v-uni-view",{staticClass:"tab_list"},[e("v-uni-image",{attrs:{src:"../../static/image/behalf1.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("待付款")])],1),e("v-uni-view",{staticClass:"tab_list"},[e("v-uni-image",{attrs:{src:"../../static/image/stay_use.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("待使用")])],1),e("v-uni-view",{staticClass:"tab_list"},[e("v-uni-image",{attrs:{src:"../../static/image/stay_comment1.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("待评论")])],1),e("v-uni-view",{staticClass:"tab_list"},[e("v-uni-image",{attrs:{src:"../../static/image/refund1.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("退款")])],1)],1),e("v-uni-view",{staticClass:"tab_top"},[t._v("商城订单")]),e("v-uni-view",{staticClass:"tab_box"},[e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/mall_order?status=1")}}},[e("v-uni-image",{attrs:{src:"../../static/image/behalf2.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("待付款")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/mall_order?status=2")}}},[e("v-uni-image",{attrs:{src:"../../static/image/stay_goods.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("待收货")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/mall_order?status=4")}}},[e("v-uni-image",{attrs:{src:"../../static/image/stay_comment2.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("待评论")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/mall_order?status=5")}}},[e("v-uni-image",{attrs:{src:"../../static/image/refund2.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("退款")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"list_bottom"},[e("v-uni-view",{staticClass:"list_test"},[t._v("其他服务")]),e("v-uni-view",{staticClass:"tab_box"},[e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/momey")}}},[e("v-uni-image",{attrs:{src:"../../static/image/wallet.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("钱包")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/distribution")}}},[e("v-uni-image",{attrs:{src:"../../static/image/distribution.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("分销中心")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/commission")}}},[e("v-uni-image",{attrs:{src:"../../static/image/commission.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("佣金")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/user_edition")}}},[e("v-uni-image",{attrs:{src:"../../static/image/editionPass.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("版通")])],1),e("v-uni-view",{staticClass:"tab_list"},[e("v-uni-image",{attrs:{src:"../../static/image/realName.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("实名认证")])],1),e("v-uni-view",{staticClass:"tab_list"},[e("v-uni-image",{attrs:{src:"../../static/image/collection2.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("收藏")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/address")}}},[e("v-uni-image",{attrs:{src:"../../static/image/address.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("收货地址")])],1),e("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../subuser/assemble_order")}}},[e("v-uni-image",{attrs:{src:"../../static/image/assemble_1.png",mode:"widthFix"}}),e("v-uni-view",{},[t._v("拼团订单")])],1)],1)],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"9c4b":function(t,i,e){"use strict";var a=e("3fac"),s=e.n(a);s.a},e0f1:function(t,i,e){"use strict";e.r(i);var a=e("2539"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a}}]);