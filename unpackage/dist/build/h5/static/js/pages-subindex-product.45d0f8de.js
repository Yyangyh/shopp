(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subindex-product"],{"1cd3":function(t,e,i){"use strict";var n=i("8911"),a=i.n(n);a.a},"2f0c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("v-uni-view",{staticClass:"return"},[i("v-uni-image",{staticClass:"return_img",attrs:{src:"../../static/image/return.png",mode:""},on:{click:function(e){e=t.$handleEvent(e),t.returns()}}}),i("v-uni-view",{staticClass:"search"},[t.city?i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.jump("/pages/subindex/index_location")}}},[t._v(t._s(t.city))]):i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.jump("/pages/subindex/index_location")}}},[t._v("定位")]),i("v-uni-image",{staticClass:"dorp",attrs:{src:"../../static/image/dorp.png",mode:""}}),i("v-uni-image",{staticClass:"search1",attrs:{src:"../../static/image/search1.png",mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:""},on:{focus:function(e){e=t.$handleEvent(e),t.search()}}})],1)],1),i("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":""}},[i("v-uni-view",{staticClass:"scroll-view_box"},t._l(t.data,function(e,n){return i("v-uni-view",{staticClass:"table"},t._l(t.data[n],function(e,n){return i("v-uni-view",{staticClass:"tab_list",on:{click:function(i){i=t.$handleEvent(i),t.jump("../threeLayers/allclass?id="+e.id)}}},[i("v-uni-image",{attrs:{src:e.icon,mode:""}}),i("v-uni-view",{},[t._v(t._s(e.name))])],1)}),1)}),1)],1),i("v-uni-view",{staticClass:"exhibition"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:"../../static/image/green.png",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{},[i("v-uni-image",{attrs:{src:"../../static/image/nuts.png",mode:"scaleToFill"}})],1),i("v-uni-view",{},[i("v-uni-image",{attrs:{src:"../../static/image/snackss.png",mode:"scaleToFill"}})],1)],1)],1),i("v-uni-view",{staticClass:"guess"},[i("v-uni-view",{staticClass:"gu_top"},[t._v("猜你喜欢")]),i("v-uni-view",{staticClass:"product"},t._l(t.data_guess,function(e,n){return i("v-uni-view",{key:e.id,staticClass:"pr_list"},[i("v-uni-image",{attrs:{src:e.images,mode:"aspectFill"},on:{click:function(i){i=t.$handleEvent(i),t.jump("./product_detailed?id="+e.id)}}}),i("v-uni-view",{staticClass:"address"},[t._v(t._s(e.title)),i("v-uni-text",{staticClass:"tips"},[t._v("特色产品")])],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),i("v-uni-text",{staticClass:"data"},[t._v(t._s(e.sales_count)+"人购买")]),i("v-uni-text",{staticClass:"info",on:{click:function(e){e=t.$handleEvent(e),t.jump("./shop")}}},[t._v("进入店铺")])],1)],1)}),1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},5548:function(t,e,i){"use strict";i.r(e);var n=i("2f0c"),a=i("e980");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("1cd3");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"b7789a4e",null);e["default"]=r.exports},8911:function(t,e,i){var n=i("9f4a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2c53d1d0",n,!0,{sourceMap:!1,shadowMode:!1})},"9f4a":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .content{\n\tpadding-top: 105rpx;\n} */.uni-input-placeholder[data-v-b7789a4e]{color:#ccc}.return[data-v-b7789a4e]{position:fixed;top:0;left:0;width:100%;z-index:888;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?105?%;-webkit-box-shadow:0 0 6px #ccc;box-shadow:0 0 6px #ccc}.return .return_img[data-v-b7789a4e]{width:%?48?%;height:%?48?%;margin-left:%?20?%}.return .search[data-v-b7789a4e]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?75?%;background:#f1f1f1;margin:0 %?20?%;border-radius:%?34?%}.return .search uni-input[data-v-b7789a4e]{height:%?140?%}.return .search uni-text[data-v-b7789a4e]{margin:0 %?20?%;color:#666;font-size:%?32?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;width:%?140?%}.return .search .dorp[data-v-b7789a4e]{width:%?12?%;height:%?12?%;margin-right:%?20?%}.return .search .search1[data-v-b7789a4e]{width:%?38?%;height:%?38?%;margin-right:%?20?%}.scroll-view_H[data-v-b7789a4e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;white-space:nowrap\n\t/* width: 100%; */}.scroll-view_box[data-v-b7789a4e]{\n\t/* width: 100%; */\n\t/* display: flex; */\n\t/* flex-wrap: nowrap; */}.table[data-v-b7789a4e]{width:100%;display:inline-block;\n/* \tjustify-content: flex-start;\n\tflex-wrap: wrap; */\n\t/* overflow: hidden; */height:%?270?%;padding-bottom:%?40?%;border-bottom:%?6?% solid #f5f5f5}.table .tab_list[data-v-b7789a4e]{width:20%;\n\t/* display: inline-block; */float:left;text-align:center;margin-top:%?30?%;font-size:%?28?%;color:#333}.table .tab_list uni-image[data-v-b7789a4e]{width:%?56?%;height:%?56?%}.exhibition[data-v-b7789a4e]{padding:0 %?20?% %?20?% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?30?%}.exhibition .left[data-v-b7789a4e]{width:49%;height:%?332?%}.exhibition .left uni-image[data-v-b7789a4e]{height:100%;width:100%}.exhibition .right[data-v-b7789a4e]{width:49%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.exhibition .right uni-view[data-v-b7789a4e]{height:%?156?%;width:100%}.exhibition .right uni-image[data-v-b7789a4e]{height:100%;width:100%}.guess[data-v-b7789a4e]{padding:%?20?%;background:#f1f1f1}.guess .gu_top[data-v-b7789a4e]{font-weight:700;font-size:%?32?%;padding-top:%?20?%;padding-left:%?20?%;padding-bottom:%?10?%;background:#fff;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.guess .product .pr_list[data-v-b7789a4e]{margin-bottom:%?20?%;background:#fff;padding:%?20?%;border-radius:%?10?%}.guess .product uni-view[data-v-b7789a4e]:first-of-type{border-top-left-radius:%?0?%;border-top-right-radius:%?0?%}.guess .ticket[data-v-b7789a4e]{color:#666;font-size:%?28?%;margin:%?10?% 0;padding:0 %?10?%}.guess .address[data-v-b7789a4e]{color:#333;font-size:%?28?%;font-weight:700;padding:0 %?10?%;margin-bottom:%?20?%}.guess .tips[data-v-b7789a4e]{color:#00d3b3;font-size:%?24?%;border:%?1?% solid #00d3b3;padding:%?2?% %?10?%;border-radius:%?5?%;margin-left:%?20?%;font-weight:100}.guess .product .bottom .price[data-v-b7789a4e]{color:#ff431d;margin-right:%?20?%;height:%?70?%;line-height:%?70?%}.guess .product .bottom .data[data-v-b7789a4e]{color:#999;font-size:%?26?%;height:%?70?%;line-height:%?70?%}.guess .product uni-image[data-v-b7789a4e]{width:100%;height:%?300?%}.guess .product .info[data-v-b7789a4e]{float:right;color:#ff431d;border:%?1?% solid #ff431d;border-radius:%?10?%;font-size:%?30?%;padding:%?10?%}",""])},ad24:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{data:"",data_guess:""}},methods:{returns:function(){this.common.returns(this)},jump:function(t){uni.navigateTo({url:t})},search:function(){uni.navigateTo({url:"/pages/common/search?type=scenic"})}},onShow:function(){this.city=uni.getStorageSync("city"),this.service.entire(this,"get",this.service.api_root.subindex.goods_Category,{},function(t,e){for(var i=e.data,n=[],a=0;a<i.length;a+=10)n.push(i.slice(a,a+10));t.data=n}),this.service.entire(this,"get",this.service.api_root.threeLayers.goodsList,{},function(t,e){t.data_guess=e.data.data})}};e.default=n},e980:function(t,e,i){"use strict";i.r(e);var n=i("ad24"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a}}]);