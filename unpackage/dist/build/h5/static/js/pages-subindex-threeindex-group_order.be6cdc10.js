(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subindex-threeindex-group_order"],{"020a":function(e,t,i){var a=i("f427");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("5f98777c",a,!0,{sourceMap:!1,shadowMode:!1})},"22b0":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".top[data-v-55612199]{height:%?105?%;padding:0 %?44?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-55612199]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:%?90?%}.top uni-image[data-v-55612199]{height:%?40?%;width:%?40?%}.top uni-text[data-v-55612199]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},"3b04":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};t.default=a},"529b":function(e,t,i){"use strict";var a=i("020a"),n=i.n(a);n.a},"5d33":function(e,t,i){"use strict";var a=i("c982"),n=i.n(a);n.a},"641d":function(e,t,i){"use strict";i.r(t);var a=i("a9fb"),n=i("8d98");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("5d33");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"55612199",null);t["default"]=l.exports},"79bd":function(e,t,i){"use strict";i.r(t);var a=i("9014"),n=i("c072");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("529b");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"ee757038",null);t["default"]=l.exports},"8d98":function(e,t,i){"use strict";i.r(t);var a=i("3b04"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},9014:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:e.title}}),i("v-uni-view",{staticClass:"top_order"},[1==e.show_add?i("v-uni-view",{staticClass:"name",on:{click:function(t){t=e.$handleEvent(t),e.jump("../../subuser/address")}}},[i("v-uni-view",{staticClass:"info"},[i("v-uni-text",[e._v(e._s(e.address.name))]),i("v-uni-text",[e._v(e._s(e.address.tel))])],1),i("v-uni-view",{staticClass:"address"},[e._v(e._s(e.address.province_name)+e._s(e.address.city_name)+e._s(e.address.county_name)+e._s(e.address.address))])],1):0==e.show_add?i("v-uni-view",{staticClass:"name",on:{click:function(t){t=e.$handleEvent(t),e.jump("../../subuser/address")}}},[i("v-uni-view",{},[e._v("未设置收货地址，请设置")])],1):e._e(),i("v-uni-view",{staticClass:"more"},[i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/right.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"bg"},[i("v-uni-image",{attrs:{src:"../../../static/image/threeLayers/void.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"void"}),i("v-uni-view",{staticClass:"commodity"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:e.shopp.thumb,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.shopp.title))]),i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{staticClass:"momey"},[e._v("￥"+e._s("single"==e.type?e.shopp.groupsprice:e.shopp.price))]),i("v-uni-view",{staticClass:"number"},[e._v("数量：x"+e._s(e.shopp.goodsnum))])],1)],1)],1),i("v-uni-view",{staticClass:"void"}),i("v-uni-view",{staticClass:"message"},[i("v-uni-view",{},[e._v("备注：")]),i("v-uni-textarea",{attrs:{value:"",maxlength:"50",placeholder:"选填 买家留言（50字以内）"}})],1),i("v-uni-view",{staticClass:"void"}),i("v-uni-view",{staticClass:"recording"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-text",[e._v("商品小计")]),i("v-uni-text",[e._v("￥"+e._s("single"==e.type?e.shopp.groupsprice:e.shopp.price))])],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-text",[e._v("运费")]),i("v-uni-text",[e._v("￥"+e._s(e.shopp.freight))])],1)],1),i("v-uni-view",{staticClass:"payment"},[i("v-uni-view",{staticClass:"pa_test"},[e._v("支付方式")]),i("v-uni-view",{staticClass:"pa_box"},e._l(e.payment,function(t,a){return i("v-uni-view",{key:t.id,staticClass:"box_list",on:{click:function(t){t=e.$handleEvent(t),e.choice(a)}}},[i("v-uni-view",{staticClass:"list_top"},[i("v-uni-image",{attrs:{src:t.logo,mode:"widthFix"}}),i("v-uni-view",{},[e._v(e._s(t.name)),i("v-uni-text",{staticStyle:{display:"none"}},[e._v(e._s(e.payment_id))])],1)],1),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.choice,expression:"item.choice"}],staticClass:"choice",attrs:{src:"../../../static/image/threeLayers/choice.png",mode:"widthFix"}})],1)}),1)],1),i("v-uni-view",{staticClass:"pay"},[i("v-uni-view",{staticClass:"paying"},[e._v("需支付："),i("v-uni-text",[e._v("￥"+e._s("single"==e.type?Number(e.shopp.groupsprice)+Number(e.shopp.freight):Number(e.shopp.price)+Number(e.shopp.freight)))])],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.payments()}}},[e._v("立即购买")])],1)],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},a9fb:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(t){t=e.$handleEvent(t),e.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"}})],1),i("v-uni-text",[e._v(e._s(e.titles))]),i("v-uni-text")],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},c072:function(e,t,i){"use strict";i.r(t);var a=i("dbaa"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},c982:function(e,t,i){var a=i("22b0");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("cdb7ee24",a,!0,{sourceMap:!1,shadowMode:!1})},dbaa:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("5d73")),s=a(i("641d")),o={components:{returns:s.default},data:function(){return{title:"确认订单",data:"",type:"",address:"",shopp:"",payment:"",payment_id:"",show_add:3,options:"",payment_name:"",teamid:""}},methods:{jump:function(e){uni.navigateTo({url:e})},choice:function(e){var t=!0,i=!1,a=void 0;try{for(var s,o=(0,n.default)(this.payment);!(t=(s=o.next()).done);t=!0){var l=s.value;l.choice=!1}}catch(r){i=!0,a=r}finally{try{t||null==o.return||o.return()}finally{if(i)throw a}}this.payment[e].choice=!0,this.payment_id=this.payment[e].id,this.payment_name=this.payment[e].payment},payments:function(){var e=this;if(this.address)if(this.payment_id){var t={aid:e.address.id,id:e.shopp.id,payment_id:e.payment_id,type:e.type};this.teamid&&(t.teamid=this.teamid),uni.showModal({title:"提示",content:"是否确定支付？",success:function(i){if(i.confirm)e.service.entire(e,"get",e.service.api_root.subindex.threeindex.grou_Confirm,t,function(e,t){0==t.code?e.service.entire(e,"get",e.service.api_root.subindex.threeindex.my_pay,{token:uni.getStorageSync("token"),orderid:t.data.orderid,payment_id:e.payment_id},function(t,i){e.common.order(i,e,"../../subuser/assemble_order?status=0","pages/subuser/assemble_order?status=1")}):uni.showToast({icon:"none",title:t.msg})});else if(i.cancel)return}})}else uni.showToast({icon:"none",title:"请选择支付方式"});else uni.showToast({icon:"none",title:"请添加收货地址"})}},onLoad:function(e){this.options=e,this.type=e.type,e.teamid&&(this.teamid=e.teamid)},onShow:function(){var e=this.options,t={id:e.id,type:e.type};this.teamid&&(t.teamid=this.teamid),this.service.entire(this,"get",this.service.api_root.subindex.threeindex.ConfirmDetail,t,function(e,t){if(-100!=t.code){e.data=t.data,t.data.address?e.show_add=1:e.show_add=0,e.address=t.data.address,e.shopp=t.data.goods;var i=t.data.payment_list,a=!0,s=!1,o=void 0;try{for(var l,r=(0,n.default)(i);!(a=(l=r.next()).done);a=!0){var d=l.value;d.choice=!1}}catch(c){s=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}e.payment=i}else uni.showModal({title:"提示",content:t.msg,showCancel:!1,success:function(e){e.confirm&&uni.navigateBack({delta:1})}})})}};t.default=o},f427:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".content[data-v-ee757038]{width:100%;height:100%;background:#fff;padding-bottom:%?120?%}.void[data-v-ee757038]{width:100%;height:%?10?%;background:#f2f2f2}.top_order[data-v-ee757038]{width:100%;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.name[data-v-ee757038]{width:90%;margin:0 auto;padding:%?40?% 0;font-size:%?30?%;color:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.info[data-v-ee757038]{width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.more[data-v-ee757038]{width:%?28?%;\n\t/* height: 28rpx; */margin-right:%?20?%}.more uni-image[data-v-ee757038]{width:%?28?%;height:%?28?%}.address[data-v-ee757038]{width:90%;margin-top:%?10?%;font-size:%?28?%;color:#666}.bg[data-v-ee757038]{width:100%;position:absolute;bottom:0}.bg uni-image[data-v-ee757038]{width:100%;height:%?10?%}.commodity[data-v-ee757038]{width:100%;height:%?206?%;padding:%?30?% 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.left[data-v-ee757038]{width:30%;padding:0 5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.left uni-image[data-v-ee757038]{width:%?206?%;height:%?142?%}.right[data-v-ee757038]{width:65%;height:%?206?%;margin-right:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;\n\t/* align-items: flex-start; */-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.title[data-v-ee757038]{font-size:%?32?%;color:#333;font-weight:700}.button[data-v-ee757038]{color:grey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.button uni-view[data-v-ee757038]{font-size:%?24?%;display:block;padding:%?10?% %?8?%;background:#f1f1f1}.price[data-v-ee757038]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.momey[data-v-ee757038]{font-size:%?36?%;color:#ff431d}.number[data-v-ee757038]{font-size:%?24?%;color:#666}.message[data-v-ee757038]{width:100%;height:%?200?%;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.message uni-view[data-v-ee757038]{margin-left:5%;font-size:%?32?%;color:#333}.message uni-textarea[data-v-ee757038]{height:%?150?%;margin-top:%?6?%}.recording[data-v-ee757038]{\n\t/* width: 100%; */font-size:%?32?%;color:#333;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.list[data-v-ee757038]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:%?2?% solid #f2f2f2}.pay[data-v-ee757038]{width:100%;height:%?120?%;border-top:%?1?% solid #f1f1f1;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:fixed;bottom:0}.paying[data-v-ee757038]{margin-left:5%;color:#666;font-size:%?32?%}.paying uni-text[data-v-ee757038]{color:#ff431d}.btn[data-v-ee757038]{width:%?224?%;height:%?90?%;font-size:%?36?%;margin-right:5%}.btn uni-button[data-v-ee757038]{border-radius:%?45?%}.payment[data-v-ee757038]{font-size:%?30?%;padding:%?20?%}.payment uni-image[data-v-ee757038]{height:%?52?%;width:%?52?%}.payment .pa_test[data-v-ee757038]{padding:%?18?% 0}.payment .pa_box .box_list[data-v-ee757038]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}.payment .pa_box .box_list .list_top[data-v-ee757038]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-weight:500;width:100%;height:%?100?%}.payment .pa_box .box_list .list_top uni-image[data-v-ee757038]{margin-right:%?38?%}.payment .pa_box .box_list .list_top uni-view[data-v-ee757038]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;height:%?100?%;line-height:%?100?%;border-bottom:%?2?% solid #f1f1f1}.choice[data-v-ee757038]{position:absolute;right:%?20?%;top:%?30?%;height:%?36?%!important;width:%?36?%!important}",""])}}]);