(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subindex-seckill"],{"3b04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){var t=getCurrentPages();if(t.length>1)uni.navigateBack(1);else{var e=this.$router.go(-1);void 0==e&&uni.reLaunch({url:"/pages/index/index"})}}}};e.default=a},"40da":function(t,e,i){"use strict";var a=i("81c1"),n=i.n(a);n.a},"50f4":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),1==t.no_data?i("v-uni-view",{staticClass:"no_data"},[i("v-uni-image",{attrs:{src:"../../static/image/no_data.png",mode:"widthFix"}}),i("v-uni-view",{},[t._v("暂无数据")])],1):t._e(),2==t.no_data?i("v-uni-view",{},[i("v-uni-view",{staticClass:"seckill"},[i("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":""}},t._l(t.time_data,function(e,a){return i("v-uni-view",{staticClass:"se_left",class:{se_show:t.show==a},on:{click:function(e){e=t.$handleEvent(e),t.choice(a)}}},[i("v-uni-text",{staticClass:"se_time",class:{se_time_show:t.show==a}},[t._v(t._s(e.time)+":00")]),i("v-uni-text",[t._v(t._s(e.flag))])],1)}),1)],1),i("v-uni-view",{staticClass:"se_countdown"},[i("v-uni-view",{staticClass:"co_top"},[t._v("抢购中，先下单先得哦！")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.state,expression:"state == 1"}],staticClass:"co_bottom"},[t._v("距结束"),i("v-uni-text",[t._v(t._s(t.hour))]),t._v(":"),i("v-uni-text",[t._v(t._s(t.minute))]),t._v(":"),i("v-uni-text",[t._v(t._s(t.second))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state == 0"}],staticClass:"co_bottom"},[t._v("距开始"),i("v-uni-text",[t._v(t._s(t.hour))]),t._v(":"),i("v-uni-text",[t._v(t._s(t.minute))]),t._v(":"),i("v-uni-text",[t._v(t._s(t.second))])],1)],1),t._l(t.data,function(e,a){return i("v-uni-view",{key:e.goods_id,staticClass:"tab"},[i("v-uni-view",{staticClass:"tab_top"},[i("v-uni-image",{attrs:{src:e.goods_image,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"tab_right"},[i("v-uni-view",{staticClass:"test_one"},[t._v(t._s(e.goods_name))]),i("v-uni-view",{staticClass:"test_two"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"price"},[i("v-uni-text",{staticClass:"price_one"},[t._v("￥"+t._s(e.price))]),i("v-uni-text",{staticClass:"price_two"},[t._v("￥"+t._s(e.goods_price))])],1)],1)],1),i("v-uni-view",{staticClass:"tab_bottom"},[i("v-uni-view",{staticClass:"bo_one"},[i("v-uni-view",{},[t._v("已售"+t._s(e.percentage)+"%")]),i("v-uni-view",{staticClass:"prog"},[i("v-uni-progress",{attrs:{percent:e.percentage,active:"","stroke-width":"3"}})],1)],1),100==e.percentage?i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.state,expression:"state == 1"}],staticClass:"bo_two"},[t._v("已售完")]):i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.state,expression:"state == 1"}],staticClass:"bo_two",on:{click:function(i){i=t.$handleEvent(i),t.jump("./seckill_detailed",a,e.goods_id)}}},[t._v("去抢购")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state == 0"}],staticClass:"not"},[t._v("即将开始")])],1)],1)})],2):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"51d1":function(t,e,i){var a=i("b5b6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("35249ce8",a,!0,{sourceMap:!1,shadowMode:!1})},"57bb":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.returns()}}}),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"641d":function(t,e,i){"use strict";i.r(e);var a=i("57bb"),n=i("8d98");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("40da");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"130140f9",null);e["default"]=r.exports},"74f9":function(t,e,i){"use strict";i.r(e);var a=i("a792"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"81c1":function(t,e,i){var a=i("847c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("63e52d36",a,!0,{sourceMap:!1,shadowMode:!1})},"847c":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-130140f9]{height:%?105?%;padding:0 %?44?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-130140f9]{height:%?40?%;width:%?40?%}.top uni-text[data-v-130140f9]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},"8d98":function(t,e,i){"use strict";i.r(e);var a=i("3b04"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},a792:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a4bb")),s=a(i("5d73")),o=a(i("f499")),r=a(i("641d")),l={components:{returns:r.default},data:function(){return{title:"限时抢购",data:"",show:0,index:0,time_data:"",state:"",hour:0,minute:"",second:"",no_data:""}},methods:{jump:function(t,e,i){console.log(this.data[e]);var a={id:i,price:this.data[e].price,goods_price:this.data[e].goods_price,sell:this.data[e].sell,spec_name:this.data[e].spec_name,seckill_id:this.data[e].seckill_goods_id};uni.navigateTo({url:t+"?data="+(0,o.default)(a)})},choice:function(t){var e=this;e.show=t,this.index=t,this.state=this.time_data[t].state,clearInterval(this.times);var i=this.time_data;"抢购中"==i[t].flag?this.state=1:this.state=0;var a,n=new Date;a=1==this.state?i[t].time-n.getHours():i[t].time-n.getHours()-1;var o=59-n.getMinutes(),r=60-n.getSeconds();this.hour=a,this.minute=o,this.second=r,this.times=setInterval(function(){e.second--},1e3),this.service.entire(this,"post",this.service.api_root.subindex.goods_list,{time:this.time_data[t].time},function(t,e){var i=e.data.data,a=!0,n=!1,o=void 0;try{for(var r,l=(0,s.default)(i);!(a=(r=l.next()).done);a=!0){var d=r.value;d.percentage=100-(d.total-d.sell)/d.total*100}}catch(c){n=!0,o=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}t.data=e.data.data})}},onShow:function(){this.service.entire(this,"get",this.service.api_root.subindex.time_list,{},function(t,e){if(""!=e.data){t.no_data=2;var i=t.index,a=(0,n.default)(e.data),o=[],r=!0,l=!1,d=void 0;try{for(var c,u=(0,s.default)(a);!(r=(c=u.next()).done);r=!0){var f=c.value,v=void 0;v="抢购中"==e.data[f].flag?1:0,o.push({time:f,flag:e.data[f].flag,state:v})}}catch(g){l=!0,d=g}finally{try{r||null==u.return||u.return()}finally{if(l)throw d}}"抢购中"==o[i].flag?t.state=1:t.state=0,t.time_data=o;var b,h=new Date;b=1==t.state?o[i].time-h.getHours():o[i].time-h.getHours()-1;var p=59-h.getMinutes(),w=60-h.getSeconds();t.hour=b,t.minute=p,t.second=w,t.times=setInterval(function(){t.second--},1e3),0==e.code&&t.service.entire(t,"post",t.service.api_root.subindex.goods_list,{time:(0,n.default)(e.data)[0]},function(t,e){var i=e.data.data,a=!0,n=!1,o=void 0;try{for(var r,l=(0,s.default)(i);!(a=(r=l.next()).done);a=!0){var d=r.value;d.percentage=100-(d.total-d.sell)/d.total*100}}catch(g){n=!0,o=g}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}t.data=e.data.data})}else t.no_data=1})},onHide:function(){clearInterval(this.times)},watch:{second:function(t,e){0==t&&(this.minute--,this.second=59)},minute:function(t,e){-1==t&&(this.hour--,this.minute=59,this.service.entire(this,"post",this.service.api_root.subindex.goods_list,{time:this.time_data[1]},function(t,e){var i=e.data.data,a=!0,n=!1,o=void 0;try{for(var r,l=(0,s.default)(i);!(a=(r=l.next()).done);a=!0){var d=r.value;d.percentage=100-(d.total-d.sell)/d.total*100}}catch(c){n=!0,o=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}t.data=e.data.data}))},hour:function(t,e){-1==t&&(this.hour=0,this.show=0,clearInterval(this.times),this.index=0,this.service.entire(this,"get",this.service.api_root.subindex.time_list,{},function(t,e){var i=t.index,a=(0,n.default)(e.data),o=[],r=!0,l=!1,d=void 0;try{for(var c,u=(0,s.default)(a);!(r=(c=u.next()).done);r=!0){var f=c.value,v=void 0;v="抢购中"==e.data[f].flag?1:0,o.push({time:f,flag:e.data[f].flag,state:v})}}catch(g){l=!0,d=g}finally{try{r||null==u.return||u.return()}finally{if(l)throw d}}"抢购中"==o[i].flag?t.state=1:t.state=0,t.time_data=o;var b,h=new Date;b=1==t.state?o[i].time-h.getHours():o[i].time-h.getHours()-1;var p=59-h.getMinutes(),w=60-h.getSeconds();t.hour=b,t.minute=p,t.second=w,t.times=setInterval(function(){t.second--},1e3),0==e.code&&t.service.entire(t,"post",t.service.api_root.subindex.goods_list,{time:(0,n.default)(e.data)[0]},function(t,e){var i=e.data.data,a=!0,n=!1,o=void 0;try{for(var r,l=(0,s.default)(i);!(a=(r=l.next()).done);a=!0){var d=r.value;d.percentage=100-(d.total-d.sell)/d.total*100}}catch(g){n=!0,o=g}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}t.data=e.data.data})}))}}};e.default=l},b5b6:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-5b190765]{height:100%;width:100%;background:#f4f4f4}.content[data-v-5b190765]{padding-top:%?105?%;\n\t/* height: 100%; */width:100%}.content[data-v-5b190765] .top{position:fixed;top:0;left:0;width:100%;background:#fff;z-index:888;-webkit-box-shadow:none;box-shadow:none}.seckill[data-v-5b190765]{background:#fff;\n\t/* margin-bottom: 24rpx; */font-size:%?32?%;color:#666;-webkit-box-shadow:0 %?16?% %?10?% 0 #eee;box-shadow:0 %?16?% %?10?% 0 #eee}.seckill .scroll-view_H[data-v-5b190765]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;white-space:nowrap;width:100%}.se_right[data-v-5b190765],.seckill .se_left[data-v-5b190765]{width:50%;text-align:center;padding-bottom:%?24?%;display:inline-block;font-size:%?28?%;border-bottom:%?4?% solid #fff}.seckill .se_time[data-v-5b190765]{display:inline-block;height:%?56?%;line-height:%?56?%;border-radius:%?56?%;width:%?140?%;background:#eee;margin-right:%?20?%}.se_show[data-v-5b190765]{color:#1d9dff;border-bottom-color:#1d9dff!important}.se_time_show[data-v-5b190765]{background:-webkit-gradient(linear,left top,right top,from(#64c5f9),to(#3e8ff3))!important;background:-o-linear-gradient(left,#64c5f9,#3e8ff3)!important;background:linear-gradient(90deg,#64c5f9,#3e8ff3)!important;color:#fff}.se_countdown[data-v-5b190765]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?24?%;margin:%?30?% %?22?%}.se_countdown uni-text[data-v-5b190765]{display:inline-block;font-size:%?28?%;color:#fff;background:#333;text-align:center;height:%?40?%;line-height:%?40?%;border-radius:%?5?%;width:%?40?%;margin:0 %?4?%}.se_countdown uni-text[data-v-5b190765]:first-of-type{margin-left:%?10?%}.tab[data-v-5b190765]{background:#fff;margin:0 %?20?% %?16?% %?20?%;border-radius:%?10?%;height:%?280?%;padding-bottom:%?20?%}.tab .tab_top[data-v-5b190765]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% 0;margin:0 %?20?%;border-bottom:%?2?% solid #f1f1f1}.tab .tab_top .tab_right[data-v-5b190765]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:%?26?%}.tab .tab_top .test_one[data-v-5b190765]{color:#666;font-size:%?28?%}.tab .tab_top .test_two[data-v-5b190765]{color:#333;font-size:%?30?%}.tab .tab_top .price[data-v-5b190765]{color:#ff431d;font-size:%?28?%}.tab .tab_top .price .price_one[data-v-5b190765]{font-size:%?36?%;\n\t/* font-weight: bold; */margin-right:%?8?%}.tab .tab_top .price .price_two[data-v-5b190765]{text-decoration:line-through;font-size:%?28?%;color:#999}.tab .tab_top uni-image[data-v-5b190765]{height:%?142?%;width:%?220?%}.tab .tab_bottom[data-v-5b190765]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?92?%;padding:0 %?20?%}.tab .tab_bottom .bo_one[data-v-5b190765]{font-size:%?28?%;color:#666;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tab .tab_bottom .bo_one .prog[data-v-5b190765]{width:%?226?%;margin-left:%?40?%}.tab .tab_bottom .bo_two[data-v-5b190765]{color:#fff;background:#1d9dff;width:%?170?%;height:%?66?%;line-height:%?66?%;border-radius:%?66?%;font-size:%?28?%;text-align:center}.not[data-v-5b190765]{color:#666;background:#eee;width:%?170?%;height:%?66?%;line-height:%?66?%;border-radius:%?66?%;font-size:%?28?%;text-align:center}.tab .tab_bottom uni-image[data-v-5b190765]{height:%?34?%;width:%?34?%;margin-right:%?20?%}.no_data[data-v-5b190765]{text-align:center;font-size:%?30?%;color:#333}.no_data uni-image[data-v-5b190765]{margin-top:%?50?%;width:%?310?%;height:%?310?%}body.?%PAGE?%[data-v-5b190765]{background:#f4f4f4}",""])},c950:function(t,e,i){"use strict";i.r(e);var a=i("50f4"),n=i("74f9");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("ee83");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"5b190765",null);e["default"]=r.exports},ee83:function(t,e,i){"use strict";var a=i("51d1"),n=i.n(a);n.a}}]);