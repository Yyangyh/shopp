(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-threeuser-int_order_detailed"],{"128f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),i("v-uni-view",{staticClass:"order_top"},[2==t.data.status?i("v-uni-view",{},[t._v("买家已付款")]):3==t.data.status?i("v-uni-view",{},[t._v("等待买家收货")]):1==t.data.status?i("v-uni-view",{},[t._v("等待买家付款")]):4==t.data.status?i("v-uni-view",{},[t._v("已完成")]):t._e(),i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/box.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"order_position"},[i("v-uni-view",{},[i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/position.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"posi_one"},[i("v-uni-view",{},[i("v-uni-text",[t._v(t._s(t.data.receive_name))]),i("v-uni-text",[t._v(t._s(t.data.receive_tel))])],1),i("v-uni-view",{},[t._v("地址："+t._s(t.data.receive_province_name)+t._s(t.data.receive_city_name)+t._s(t.data.receive_county_name)+t._s(t.data.receive_address))])],1)],1),3==t.data.status?i("v-uni-view",{staticClass:"order_news"},[i("v-uni-view",{staticClass:"news_one"},[t._v("物流信息")]),i("v-uni-view",{staticClass:"news_two"},[i("v-uni-text",[t._v("快递公司：")]),i("v-uni-text",[t._v(t._s(t.data.express_name))])],1),i("v-uni-view",{staticClass:"news_two"},[i("v-uni-text",[t._v("快递单号：")]),i("v-uni-text",[t._v(t._s(t.data.express_number))])],1),i("v-uni-view",{staticClass:"news_four"},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.jump("/pages/threeLayers/logistics?id="+t.data.express_id+"&number="+t.data.express_number)}}},[i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/contact.png",mode:"widthFix"}}),i("v-uni-text",[t._v("查看物流")])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"order"},[i("v-uni-view",{staticClass:"order_num",on:{click:function(e){e=t.$handleEvent(e),t.jump("../../subindex/threeindex/integral_details?id="+t.data.goods_id)}}},[i("v-uni-view",{staticClass:"num_one"},[i("v-uni-image",{attrs:{src:t.data.images,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"num_two"},[i("v-uni-view",{},[t._v(t._s(t.data.title))])],1),i("v-uni-view",{staticClass:"num_three"},[i("v-uni-view",{},[t._v(t._s(t.data.money))]),i("v-uni-view",{},[t._v("数量：X"+t._s(t.data.buy_number))])],1)],1),i("v-uni-view",{staticClass:"order_total"},[i("v-uni-view",{staticClass:"total_one"},[t._v("订单总价")]),i("v-uni-view",{staticClass:"total_two"},[t._v(t._s(t.data.money))])],1)],1),i("v-uni-view",{staticClass:"order_news"},[i("v-uni-view",{staticClass:"news_one"},[t._v("订单信息")]),2==t.data.status?i("v-uni-view",{staticClass:"news_two"},[i("v-uni-text",[t._v("付款时间：")]),i("v-uni-text",[t._v(t._s(t.data.pay_time))])],1):i("v-uni-view",{staticClass:"news_two"},[i("v-uni-text",[t._v("创建时间：")]),i("v-uni-text",[t._v(t._s(t.data.confirm_time))])],1),i("v-uni-view",{staticClass:"news_three"},[t._v("订单编号："+t._s(t.data.order_no))]),i("v-uni-view",{staticClass:"news_four"},[i("v-uni-view",{},[i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/contact.png",mode:"widthFix"}}),i("v-uni-text",[t._v("联系卖家")])],1)],1)],1),1==t.data.status?i("v-uni-view",{staticClass:"order_bottom"},[i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.cancel()}}},[t._v("取消订单")]),i("v-uni-text",{staticClass:"or_pay",on:{click:function(e){e=t.$handleEvent(e),t.pay()}}},[t._v("付款")])],1):t._e(),3==t.data.status?i("v-uni-view",{staticClass:"order_bottom"},[i("v-uni-text",{staticClass:"or_pay",on:{click:function(e){e=t.$handleEvent(e),t.determine()}}},[t._v("确认收货")])],1):t._e(),t.show?i("v-uni-view",{staticClass:"mask",on:{click:function(e){e=t.$handleEvent(e),t.show=!t.show}}}):t._e(),t.show?i("v-uni-view",{staticClass:"mask_box"},[i("v-uni-image",{staticClass:"close",attrs:{src:"../../../static/image/index/close.png",mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.show=!t.show}}}),i("v-uni-view",{staticClass:"box_top"},[t._v("支付方式")]),i("v-uni-view",{staticClass:"pa_box"},t._l(t.pay_list,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"box_list",on:{click:function(e){e=t.$handleEvent(e),t.choice(a)}}},[i("v-uni-view",{staticClass:"list_top"},[i("v-uni-image",{attrs:{src:e.logo,mode:"widthFix"}}),i("v-uni-view",{},[t._v(t._s(e.name))])],1),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.choice,expression:"item.choice"}],staticClass:"choice",attrs:{src:"../../../static/image/threeLayers/choice.png",mode:"widthFix"}})],1)}),1),i("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.payment()}}},[t._v("立即支付")])],1):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"22b0":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-55612199]{height:%?105?%;padding:0 %?44?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-55612199]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:%?90?%}.top uni-image[data-v-55612199]{height:%?40?%;width:%?40?%}.top uni-text[data-v-55612199]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},"2fa1":function(t,e,i){var a=i("f48a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("77fe0639",a,!0,{sourceMap:!1,shadowMode:!1})},"3b04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=a},"5d33":function(t,e,i){"use strict";var a=i("c982"),n=i.n(a);n.a},"5e9c":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n=a(i("5d73")),s=a(i("f499")),o=a(i("641d")),r={components:{returns:o.default},data:function(){return{title:"订单详情",data:"",data_list:"",pay_list:"",show:!1,payment_id:0,payment_name:""}},methods:{jump:function(t){uni.navigateTo({url:t})},determine:function(){var t=this;uni.showModal({title:"提示",content:"是否确定收货？",success:function(e){if(e.confirm)t.service.entire(t,"post",t.service.api_root.subuser.threeuser.cred_Collect,{id:t.data.id},function(t,e){uni.showToast({icon:"none",title:e.msg}),0==e.code&&setTimeout(function(){t.common.returns(t)},1500)});else if(e.cancel)return}})},cancel:function(){var t=this;uni.showModal({title:"提示",content:"是否确定取消？",success:function(e){if(e.confirm)t.service.entire(t,"post",t.service.api_root.subuser.threeuser.cred_Cancel,{id:t.data.id},function(t,e){uni.showToast({icon:"none",title:e.msg}),0==e.code&&setTimeout(function(){t.common.returns(t)},1500)});else if(e.cancel)return}})},pay:function(){""!=this.pay_list?this.show=!this.show:this.service.entire(this,"post",this.service.api_root.subindex.threeindex.int_pay,{token:uni.getStorageSync("token"),id:this.data.id,payment_id:this.payment_id},function(t,e){t.common.order(e,t,"./int_order_list?status=0","pages/subuser/threeuser/int_order_list?status=0")})},choice:function(t){var e=!0,i=!1,a=void 0;try{for(var o,r=(0,n.default)(this.pay_list);!(e=(o=r.next()).done);e=!0){var d=o.value;d.choice=!1}}catch(c){i=!0,a=c}finally{try{e||null==r.return||r.return()}finally{if(i)throw a}}this.pay_list[t].choice=!0,this.pay_list=JSON.parse((0,s.default)(this.pay_list)),this.payment_id=this.pay_list[t].id,this.payment_name=this.pay_list[t].payment},payment:function(){var t=this;uni.showModal({title:"提示",content:"是否确定支付？",success:function(e){if(e.confirm)t.service.entire(t,"post",t.service.api_root.subindex.threeindex.int_pay,{token:uni.getStorageSync("token"),id:t.data.id,payment_id:t.payment_id},function(t,e){t.common.order(e,t,"./int_order_list?status=0","pages/subuser/threeuser/int_order_list?status=0")});else if(e.cancel)return}})}},onLoad:function(t){this.service.entire(this,"post",this.service.api_root.subuser.threeuser.int_OrderDetail,{orderid:t.id,token:uni.getStorageSync("token")},function(t,e){var i=e.data.order,a=[];0!=Number(i.bt)&&a.push(Number(i.bt)+"版通"),0!=Number(i.credit)&&a.push(Number(i.credit)+"积分"),0!=Number(i.price)&&a.push("￥"+Number(i.price)),i.money=a.join("+"),t.data=i;var s=e.data.payment_list,o=!0,r=!1,d=void 0;try{for(var c,l=(0,n.default)(s);!(o=(c=l.next()).done);o=!0){var u=c.value;u.choice=!1}}catch(f){r=!0,d=f}finally{try{o||null==l.return||l.return()}finally{if(r)throw d}}console.log(s),t.pay_list=s})}};e.default=r},"641d":function(t,e,i){"use strict";i.r(e);var a=i("a9fb"),n=i("8d98");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("5d33");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"55612199",null);e["default"]=r.exports},"8d98":function(t,e,i){"use strict";i.r(e);var a=i("3b04"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},a9fb:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){e=t.$handleEvent(e),t.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"}})],1),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},c0f0:function(t,e,i){"use strict";var a=i("2fa1"),n=i.n(a);n.a},c703:function(t,e,i){"use strict";i.r(e);var a=i("128f"),n=i("f1cb");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("c0f0");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"c28fa252",null);e["default"]=r.exports},c982:function(t,e,i){var a=i("22b0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cdb7ee24",a,!0,{sourceMap:!1,shadowMode:!1})},f1cb:function(t,e,i){"use strict";i.r(e);var a=i("5e9c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},f48a:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-c28fa252]{background:#f1f1f1;height:100%}.content[data-v-c28fa252]{padding-bottom:%?120?%}.order_top[data-v-c28fa252]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?28?%;color:#fff;height:%?200?%;padding:0 %?72?%;background:-o-linear-gradient(128deg,#64c5f9,#3e8ff3);background:linear-gradient(-38deg,#64c5f9,#3e8ff3)}.order_top uni-image[data-v-c28fa252]{height:%?144?%;width:%?214?%}.order_position[data-v-c28fa252]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;height:%?188?%;padding:%?0?% %?20?%;font-size:%?28?%;color:#333}.order_position uni-text[data-v-c28fa252]:nth-of-type(2){color:#999;margin-left:%?32?%}.order_position uni-image[data-v-c28fa252]{height:%?76?%;width:%?76?%;margin-right:%?30?%}.order[data-v-c28fa252]{margin-top:%?20?%;background:#fff;color:#333;padding:%?24?% %?20?%}.order .order_num[data-v-c28fa252]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?28?%}.order .order_num .num_two[data-v-c28fa252]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2}.order .order_num .num_two .specs[data-v-c28fa252]{color:grey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.order .order_num .num_two .specs uni-text[data-v-c28fa252]{margin-right:%?10?%;margin-bottom:%?10?%;font-size:%?24?%;display:block;padding:%?10?% %?8?%;background:#f1f1f1}.order .order_num .num_three[data-v-c28fa252]{margin-left:%?20?%}.order .order_num .num_three uni-view[data-v-c28fa252]{white-space:nowrap}.order .order_num .num_three uni-view[data-v-c28fa252]:nth-of-type(2){font-size:%?24?%;color:#999}.order uni-image[data-v-c28fa252]{width:%?220?%;height:%?142?%;margin-right:%?24?%}.order .order_handle[data-v-c28fa252]{text-align:right;padding-bottom:%?20?%}.order .order_handle uni-text[data-v-c28fa252]{display:inline-block;text-align:center;width:%?160?%;height:%?66?%;font-size:%?28?%;color:#333;border:%?2?% solid #666;border-radius:%?66?%;line-height:%?66?%}.order .order_total[data-v-c28fa252]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?28?%;border-top:%?2?% solid #f1f1f1;padding:%?30?% 0 %?10?% 0}.order .order_total .total_two[data-v-c28fa252]{color:#ff431d}.order_news[data-v-c28fa252]{background:#fff;margin-top:%?20?%;font-size:%?28?%;padding:0 %?20?%}.order_news .news_one[data-v-c28fa252]{padding:%?30?% 0}.order_news .news_two[data-v-c28fa252]{margin-bottom:%?20?%;color:grey}.order_news .news_three[data-v-c28fa252]{font-size:%?24?%;color:grey;margin-bottom:%?30?%}.order_news uni-text[data-v-c28fa252]{font-size:%?24?%}.order_news uni-image[data-v-c28fa252]{height:%?38?%;width:%?40?%;margin-right:%?10?%}.order_news .news_four uni-view[data-v-c28fa252]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:%?32?% 0;border-top:%?2?% solid #f1f1f1}.order_bottom[data-v-c28fa252]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:%?20?% %?20?%;color:#666;font-size:%?28?%;background:#fff;position:fixed;bottom:0;left:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.order_bottom uni-text[data-v-c28fa252]{display:inline-block;width:%?160?%;height:%?66?%;line-height:%?66?%;border-radius:%?66?%;text-align:center;border:%?2?% solid #666;margin-left:%?26?%}.order_bottom .or_pay[data-v-c28fa252]{color:#1d74ff;border-color:#1d74ff}.mask[data-v-c28fa252]{height:100%;width:100%;position:fixed;background:rgba(0,0,0,.5);top:0;left:0}.mask_box[data-v-c28fa252]{position:fixed;width:100%;bottom:0;left:0;background:#fff;height:%?640?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.mask_box .box_top[data-v-c28fa252]{font-size:%?32?%;color:#333;margin-bottom:%?30?%}.mask_box .close[data-v-c28fa252]{height:%?46?%;width:%?46?%;position:absolute;right:%?10?%;top:%?10?%}.box_list[data-v-c28fa252]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;font-size:%?28?%}.box_list .list_top[data-v-c28fa252]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-weight:500;width:100%;height:%?100?%}.box_list .list_top uni-image[data-v-c28fa252]{margin-right:%?38?%;height:%?52?%;width:%?52?%}.box_list .list_top uni-view[data-v-c28fa252]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;height:%?100?%;line-height:%?100?%;border-bottom:%?2?% solid #f1f1f1}.choice[data-v-c28fa252]{position:absolute!important;right:%?20?%;top:%?30?%;height:%?36?%!important;width:%?36?%!important}uni-button[data-v-c28fa252]{position:absolute;left:3%;bottom:%?20?%;height:%?90?%;line-height:%?90?%;border-radius:%?90?%;background:#1d74ff;color:#fff;font-size:%?36?%;width:94%}body.?%PAGE?%[data-v-c28fa252]{background:#f1f1f1}",""])}}]);