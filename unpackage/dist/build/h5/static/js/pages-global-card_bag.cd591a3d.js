(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-global-card_bag"],{"22b0":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-55612199]{height:%?105?%;padding:0 %?44?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-55612199]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:%?90?%}.top uni-image[data-v-55612199]{height:%?40?%;width:%?40?%}.top uni-text[data-v-55612199]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},"2ff6":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("641d")),o={data:function(){return{title:"我的卡包",data:""}},components:{returns:n.default},methods:{jump:function(t){uni.navigateTo({url:t})}},onShow:function(){this.service.entire(this,"post",this.service.api_root.global.mytravelscard,{time:0},function(t,e){console.log(e),t.data=e.data})}};e.default=o},"3b04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=a},"5d33":function(t,e,i){"use strict";var a=i("c982"),n=i.n(a);n.a},6092:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),t._l(t.data,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"card"},[i("v-uni-image",{attrs:{src:e.images,mode:""}}),i("v-uni-view",{staticClass:"card_word",on:{click:function(i){i=t.$handleEvent(i),t.jump("./tickey?id="+e.id+"&order="+e.order_no)}}},[i("v-uni-view",{staticClass:"card_word_top"},[i("v-uni-view",{staticClass:"theme"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"card_word_bottom"},[i("v-uni-view",{staticClass:"price"},[i("v-uni-image",{attrs:{src:"../../static/image/price.png",mode:""}}),i("v-uni-text",[t._v("￥"+t._s(e.price))])],1),i("v-uni-view",{staticClass:"data"},[t._v("有效期至"+t._s(e.end_time))])],1)],1)],1)})],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"641d":function(t,e,i){"use strict";i.r(e);var a=i("a9fb"),n=i("8d98");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("5d33");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"55612199",null);e["default"]=r.exports},"8b24":function(t,e,i){"use strict";var a=i("fc1e"),n=i.n(a);n.a},"8d98":function(t,e,i){"use strict";i.r(e);var a=i("3b04"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"8e8e":function(t,e,i){"use strict";i.r(e);var a=i("2ff6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},a540:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".card[data-v-1eb3837f]{position:relative;width:%?690?%;height:%?300?%;margin:%?30?% %?30?% 0}.card uni-image[data-v-1eb3837f]{width:%?690?%;height:%?300?%}.card_word[data-v-1eb3837f]{width:%?690?%;height:%?300?%;color:#fff;position:absolute;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?26?% %?30?% %?26?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:rgba(0,0,0,.4);border-radius:%?18?%}.card_word_top[data-v-1eb3837f]{width:100%;height:%?64?%;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.card_word_top uni-image[data-v-1eb3837f]{width:%?64?%;height:%?64?%;margin-right:%?20?%}.price uni-image[data-v-1eb3837f]{width:%?31?%;height:%?25?%;margin-right:%?14?%}.card_word_bottom[data-v-1eb3837f]{font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.more[data-v-1eb3837f]{width:100%;height:%?150?%;line-height:%?150?%;text-align:center;font-size:%?28?%;color:#818181}.margin[data-v-1eb3837f]{margin:0 %?12?%}.check[data-v-1eb3837f]{color:#1d9dff}",""])},a9fb:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){e=t.$handleEvent(e),t.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"}})],1),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},c982:function(t,e,i){var a=i("22b0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cdb7ee24",a,!0,{sourceMap:!1,shadowMode:!1})},e8c3:function(t,e,i){"use strict";i.r(e);var a=i("6092"),n=i("8e8e");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("8b24");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"1eb3837f",null);e["default"]=r.exports},fc1e:function(t,e,i){var a=i("a540");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("753e0407",a,!0,{sourceMap:!1,shadowMode:!1})}}]);