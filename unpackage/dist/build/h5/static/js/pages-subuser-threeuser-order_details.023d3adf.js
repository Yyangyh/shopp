(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-threeuser-order_details"],{"26ea":function(e,t,i){"use strict";i.r(t);var a=i("2af6"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"2ae9":function(e,t,i){"use strict";var a=i("90ad"),n=i.n(a);n.a},"2af6":function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("5d73")),s=a(i("f499")),o=a(i("641d")),r={components:{returns:o.default},data:function(){return{title:"订单详情",data:"",data_list:"",pay_list:"",show:!1,payment_id:"",payment_name:""}},methods:{jump:function(e){uni.navigateTo({url:e})},determine:function(){var e=this;uni.showModal({title:"提示",content:"是否确定收货？",success:function(t){if(t.confirm)e.service.entire(e,"get",e.service.api_root.subuser.threeuser.Collect,{id:e.data.id},function(e,t){uni.showToast({icon:"none",title:t.msg}),0==t.code&&setTimeout(function(){e.common.returns(e)},1500)});else if(t.cancel)return}})},cancel:function(){var e=this;uni.showModal({title:"提示",content:"是否确定取消？",success:function(t){if(t.confirm)e.service.entire(e,"get",e.service.api_root.subuser.threeuser.Cancel,{id:e.data.id},function(e,t){uni.showToast({icon:"none",title:t.msg}),0==t.code&&setTimeout(function(){e.common.returns(e)},1500)});else if(t.cancel)return}})},detailed:function(e,t){3==t?uni.navigateTo({url:"../../subindex/edition_details?id="+e}):2==t?uni.navigateTo({url:"../../subindex/edition_details?id="+e}):uni.navigateTo({url:"../../subindex/product_detailed?id="+e+"&type="+t})},choice:function(e){var t=!0,i=!1,a=void 0;try{for(var o,r=(0,n.default)(this.pay_list);!(t=(o=r.next()).done);t=!0){var d=o.value;d.choice=!1}}catch(l){i=!0,a=l}finally{try{t||null==r.return||r.return()}finally{if(i)throw a}}this.pay_list[e].choice=!0,this.pay_list=JSON.parse((0,s.default)(this.pay_list)),this.payment_id=this.pay_list[e].id,this.payment_name=this.pay_list[e].payment},payment:function(){var e=this;this.payment_id?uni.showModal({title:"提示",content:"是否确定支付？",success:function(t){if(t.confirm)e.service.entire(e,"post",e.service.api_root.threeLayers.Pay,{token:uni.getStorageSync("token"),id:e.data.id,payment_id:e.payment_id},function(e,t){e.common.order(t,e,"../mall_order?status=-1","pages/subuser/mall_order?status=-1")});else if(t.cancel)return}}):uni.showToast({icon:"none",title:"请选择支付方式"})}},onLoad:function(e){this.service.entire(this,"post",this.service.api_root.subuser.threeuser.Order_detail,{id:e.id,token:uni.getStorageSync("token")},function(e,t){e.data=t.data,e.data_list=t.data.items;var i=t.data.payment_list,a=!0,s=!1,o=void 0;try{for(var r,d=(0,n.default)(i);!(a=(r=d.next()).done);a=!0){var l=r.value;l.choice=!1}}catch(c){s=!0,o=c}finally{try{a||null==d.return||d.return()}finally{if(s)throw o}}console.log(i),e.pay_list=i})}};t.default=r},"3b04":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){var e=getCurrentPages();if(e.length>1)uni.navigateBack(1);else{var t=this.$router.go(-1);void 0==t&&uni.reLaunch({url:"/pages/index/index"})}}}};t.default=a},4676:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-d0ee2064]{background:#f1f1f1;height:100%}.content[data-v-d0ee2064]{padding-bottom:%?120?%}.order_top[data-v-d0ee2064]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?28?%;color:#fff;height:%?200?%;padding:0 %?72?%;background:-o-linear-gradient(128deg,#64c5f9,#3e8ff3);background:linear-gradient(-38deg,#64c5f9,#3e8ff3)}.order_top uni-image[data-v-d0ee2064]{height:%?144?%;width:%?214?%}.order_position[data-v-d0ee2064]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;height:%?188?%;padding:%?0?% %?20?%;font-size:%?28?%;color:#333}.order_position uni-text[data-v-d0ee2064]:nth-of-type(2){color:#999;margin-left:%?32?%}.order_position uni-image[data-v-d0ee2064]{height:%?76?%;width:%?76?%;margin-right:%?30?%}.order[data-v-d0ee2064]{margin-top:%?20?%;background:#fff;color:#333;padding:%?24?% %?20?%}.order .order_num[data-v-d0ee2064]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?28?%}.order .order_num .num_two .specs[data-v-d0ee2064]{color:grey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.order .order_num .num_two .specs uni-text[data-v-d0ee2064]{margin-right:%?10?%;margin-bottom:%?10?%;font-size:%?24?%;display:block;padding:%?10?% %?8?%;background:#f1f1f1}.order .order_num .num_three[data-v-d0ee2064]{margin-left:%?20?%}.order .order_num .num_three uni-view[data-v-d0ee2064]{white-space:nowrap}.order .order_num .num_three uni-view[data-v-d0ee2064]:nth-of-type(2){font-size:%?24?%;color:#999}.order uni-image[data-v-d0ee2064]{width:%?220?%;height:%?142?%;margin-right:%?24?%}.order .order_handle[data-v-d0ee2064]{text-align:right;padding-bottom:%?20?%}.order .order_handle uni-text[data-v-d0ee2064]{display:inline-block;text-align:center;width:%?160?%;height:%?66?%;font-size:%?28?%;color:#333;border:%?2?% solid #666;border-radius:%?66?%;line-height:%?66?%}.order .order_total[data-v-d0ee2064]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?28?%;border-top:%?2?% solid #f1f1f1;padding:%?30?% 0 %?10?% 0}.order .order_total .total_two[data-v-d0ee2064]{color:#ff431d}.order_news[data-v-d0ee2064]{background:#fff;margin-top:%?20?%;font-size:%?28?%;padding:0 %?20?%}.order_news .news_one[data-v-d0ee2064]{padding:%?30?% 0}.order_news .news_two[data-v-d0ee2064]{margin-bottom:%?20?%;color:grey}.order_news .news_three[data-v-d0ee2064]{font-size:%?24?%;color:grey;margin-bottom:%?30?%}.order_news uni-text[data-v-d0ee2064]{font-size:%?24?%}.order_news uni-image[data-v-d0ee2064]{height:%?38?%;width:%?40?%;margin-right:%?10?%}.order_news .news_four uni-view[data-v-d0ee2064]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:%?32?% 0;border-top:%?2?% solid #f1f1f1}.order_bottom[data-v-d0ee2064]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:%?20?% %?20?%;color:#666;font-size:%?28?%;background:#fff;position:fixed;bottom:0;left:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.order_bottom uni-text[data-v-d0ee2064]{display:inline-block;width:%?160?%;height:%?66?%;line-height:%?66?%;border-radius:%?66?%;text-align:center;border:%?2?% solid #666;margin-left:%?26?%}.order_bottom .or_pay[data-v-d0ee2064]{color:#1d74ff;border-color:#1d74ff}.mask[data-v-d0ee2064]{height:100%;width:100%;position:fixed;background:rgba(0,0,0,.5);top:0;left:0}.mask_box[data-v-d0ee2064]{position:fixed;width:100%;bottom:0;left:0;background:#fff;height:%?640?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.mask_none[data-v-d0ee2064]{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.mask_show[data-v-d0ee2064]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.mask_box .box_top[data-v-d0ee2064]{font-size:%?32?%;color:#333;margin-bottom:%?30?%}.mask_box .close[data-v-d0ee2064]{height:%?46?%;width:%?46?%;position:absolute;right:%?10?%;top:%?10?%}.box_list[data-v-d0ee2064]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;font-size:%?28?%}.box_list .list_top[data-v-d0ee2064]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-weight:500;width:100%;height:%?100?%}.box_list .list_top uni-image[data-v-d0ee2064]{margin-right:%?38?%;height:%?52?%;width:%?52?%}.box_list .list_top uni-view[data-v-d0ee2064]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;height:%?100?%;line-height:%?100?%;border-bottom:%?2?% solid #f1f1f1}.choice[data-v-d0ee2064]{position:absolute!important;right:%?20?%;top:%?30?%;height:%?36?%!important;width:%?36?%!important}uni-button[data-v-d0ee2064]{position:absolute;left:3%;bottom:%?20?%;height:%?90?%;line-height:%?90?%;border-radius:%?90?%;background:#1d74ff;color:#fff;font-size:%?36?%;width:94%}body.?%PAGE?%[data-v-d0ee2064]{background:#f1f1f1}",""])},"562f":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.returns()}}}),i("v-uni-text",[e._v(e._s(e.titles))]),i("v-uni-text")],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"641d":function(e,t,i){"use strict";i.r(t);var a=i("562f"),n=i("8d98");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("b4a9");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"35a19ed7",null);t["default"]=r.exports},"67c4":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:e.title}}),i("v-uni-view",{staticClass:"order_top"},[2==e.data.status?i("v-uni-view",{},[e._v("买家已付款")]):3==e.data.status?i("v-uni-view",{},[e._v("等待买家收货")]):4==e.data.status?i("v-uni-view",{},[e._v("已完成")]):1==e.data.status?i("v-uni-view",{},[e._v("等待买家付款")]):e._e(),i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/box.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"order_position"},[i("v-uni-view",{},[i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/position.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"posi_one"},[i("v-uni-view",{},[i("v-uni-text",[e._v(e._s(e.data.receive_name))]),i("v-uni-text",[e._v(e._s(e.data.receive_tel))])],1),i("v-uni-view",{},[e._v("地址："+e._s(e.data.receive_province_name)+e._s(e.data.receive_city_name)+e._s(e.data.receive_county_name)+e._s(e.data.receive_address))])],1)],1),i("v-uni-view",{staticClass:"order"},[e._l(e.data_list,function(t,a){return i("v-uni-view",{key:t.id,staticClass:"order_num",on:{click:function(i){i=e.$handleEvent(i),e.detailed(t.goods_id,t.type)}}},[i("v-uni-view",{staticClass:"num_one"},[i("v-uni-image",{attrs:{src:t.images,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"num_two"},[i("v-uni-view",{},[e._v(e._s(t.title))]),i("v-uni-view",{staticClass:"specs"},e._l(e.data_list[a].spec,function(t,a){return i("v-uni-text",{key:a},[e._v(e._s(t.type)+"："+e._s(t.value))])}),1)],1),i("v-uni-view",{staticClass:"num_three"},[i("v-uni-view",{},[e._v("￥"+e._s(t.price))]),i("v-uni-view",{},[e._v("数量：X"+e._s(t.buy_number))])],1)],1)}),i("v-uni-view",{staticClass:"order_total"},[i("v-uni-view",{staticClass:"total_one"},[e._v("订单总价")]),i("v-uni-view",{staticClass:"total_two"},[e._v("￥"+e._s(e.data.price))])],1)],2),i("v-uni-view",{staticClass:"order_news"},[i("v-uni-view",{staticClass:"news_one"},[e._v("订单信息")]),2==e.data.status?i("v-uni-view",{staticClass:"news_two"},[i("v-uni-text",[e._v("付款时间：")]),i("v-uni-text",[e._v(e._s(e.data.pay_time))])],1):i("v-uni-view",{staticClass:"news_two"},[i("v-uni-text",[e._v("创建时间：")]),i("v-uni-text",[e._v(e._s(e.data.confirm_time))])],1),i("v-uni-view",{staticClass:"news_three"},[e._v("订单编号："+e._s(e.data.order_no))]),i("v-uni-view",{staticClass:"news_four"},[i("v-uni-view",{},[i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/contact.png",mode:"widthFix"}}),i("v-uni-text",[e._v("联系卖家")])],1)],1)],1),1==e.data.status?i("v-uni-view",{staticClass:"order_bottom"},[i("v-uni-text",{on:{click:function(t){t=e.$handleEvent(t),e.cancel()}}},[e._v("取消订单")]),i("v-uni-text",{staticClass:"or_pay",on:{click:function(t){t=e.$handleEvent(t),e.show=!e.show}}},[e._v("付款")])],1):3==e.data.status?i("v-uni-view",{staticClass:"order_bottom"},[i("v-uni-text",{staticClass:"or_pay",on:{click:function(t){t=e.$handleEvent(t),e.determine()}}},[e._v("确定收货")])],1):e._e(),e.show?i("v-uni-view",{staticClass:"mask",on:{click:function(t){t=e.$handleEvent(t),e.show=!e.show}}}):e._e(),i("v-uni-view",{staticClass:"mask_box",class:!1===e.show?"mask_none":!0===e.show?"mask_show":""},[i("v-uni-image",{staticClass:"close",attrs:{src:"../../../static/image/index/close.png",mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.show=!e.show}}}),i("v-uni-view",{staticClass:"box_top"},[e._v("支付方式")]),i("v-uni-view",{staticClass:"pa_box"},e._l(e.pay_list,function(t,a){return i("v-uni-view",{key:t.id,staticClass:"box_list",on:{click:function(t){t=e.$handleEvent(t),e.choice(a)}}},[i("v-uni-view",{staticClass:"list_top"},[i("v-uni-image",{attrs:{src:t.logo,mode:"widthFix"}}),i("v-uni-view",{},[e._v(e._s(t.name))])],1),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.choice,expression:"item.choice"}],staticClass:"choice",attrs:{src:"../../../static/image/threeLayers/choice.png",mode:"widthFix"}})],1)}),1),i("v-uni-button",{on:{click:function(t){t=e.$handleEvent(t),e.payment()}}},[e._v("立即支付")])],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"6ac0":function(e,t,i){"use strict";i.r(t);var a=i("67c4"),n=i("26ea");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("2ae9");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"d0ee2064",null);t["default"]=r.exports},"8d98":function(e,t,i){"use strict";i.r(t);var a=i("3b04"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"90ad":function(e,t,i){var a=i("4676");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("ff283dc8",a,!0,{sourceMap:!1,shadowMode:!1})},b03d:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".top[data-v-35a19ed7]{height:%?105?%;padding:0 %?44?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-35a19ed7]{height:%?40?%;width:%?40?%}.top uni-text[data-v-35a19ed7]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},b4a9:function(e,t,i){"use strict";var a=i("ba47"),n=i.n(a);n.a},ba47:function(e,t,i){var a=i("b03d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("26535717",a,!0,{sourceMap:!1,shadowMode:!1})}}]);