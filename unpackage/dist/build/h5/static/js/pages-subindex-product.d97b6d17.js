(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subindex-product"],{"1ee1":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"status_bar"}),n("v-uni-view",{staticClass:"return"},[n("v-uni-image",{staticClass:"return_img",attrs:{src:"../../static/image/return.png",mode:""},on:{click:function(e){e=t.$handleEvent(e),t.returns()}}}),n("v-uni-view",{staticClass:"search"},[t.city?n("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.jump("/pages/subindex/index_location")}}},[t._v(t._s(t.city))]):n("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.jump("/pages/subindex/index_location")}}},[t._v("定位")]),n("v-uni-image",{staticClass:"dorp",attrs:{src:"../../static/image/dorp.png",mode:""}}),n("v-uni-image",{staticClass:"search1",attrs:{src:"../../static/image/search1.png",mode:""}}),n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.search()}}})],1)],1),n("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":""}},[n("v-uni-view",{staticClass:"scroll-view_box"},t._l(t.data,function(e,i){return n("v-uni-view",{staticClass:"table"},t._l(t.data[i],function(e,i){return n("v-uni-view",{staticClass:"tab_list",on:{click:function(n){n=t.$handleEvent(n),t.jump("../threeLayers/allclass?id="+e.id)}}},[n("v-uni-image",{attrs:{src:e.icon,mode:""}}),n("v-uni-view",{},[t._v(t._s(e.name))])],1)}),1)}),1)],1),n("v-uni-view",{staticClass:"guess"},[n("v-uni-view",{staticClass:"gu_top"},[t._v("猜你喜欢")]),n("v-uni-view",{staticClass:"product"},t._l(t.data_guess,function(e,i){return n("v-uni-view",{key:e.id,staticClass:"pr_list"},[n("v-uni-image",{attrs:{src:e.images,mode:"aspectFill"},on:{click:function(n){n=t.$handleEvent(n),t.jump("./product_detailed?id="+e.id)}}}),n("v-uni-view",{staticClass:"address"},[t._v(t._s(e.title)),n("v-uni-text",{staticClass:"tips"},[t._v("特色产品")])],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),n("v-uni-text",{staticClass:"data"},[t._v(t._s(e.sales_count)+"人购买")]),n("v-uni-text",{staticClass:"info",on:{click:function(n){n=t.$handleEvent(n),t.jump("../subindex/shop?merchid="+e.merchid)}}},[t._v("进入店铺")])],1)],1)}),1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"25a1":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .content{\n\tpadding-top: 105rpx;\n} */.uni-input-placeholder[data-v-4ca00abe]{color:#ccc}.return[data-v-4ca00abe]{position:fixed;top:0;left:0;width:100%;z-index:888;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?105?%;-webkit-box-shadow:0 0 6px #ccc;box-shadow:0 0 6px #ccc}.return .return_img[data-v-4ca00abe]{width:%?48?%;height:%?48?%;margin-left:%?20?%}.return .search[data-v-4ca00abe]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?75?%;background:#f1f1f1;margin:0 %?20?%;border-radius:%?34?%}.return .search uni-view[data-v-4ca00abe]{height:%?90?%;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2}.return .search uni-text[data-v-4ca00abe]{margin:0 %?20?%;color:#666;font-size:%?32?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;width:%?140?%}.return .search .dorp[data-v-4ca00abe]{width:%?12?%;height:%?12?%;margin-right:%?20?%}.return .search .search1[data-v-4ca00abe]{width:%?38?%;height:%?38?%;margin-right:%?20?%}.scroll-view_H[data-v-4ca00abe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;white-space:nowrap\n\t/* width: 100%; */}.scroll-view_box[data-v-4ca00abe]{\n\t/* width: 100%; */\n\t/* display: flex; */\n\t/* flex-wrap: nowrap; */}.table[data-v-4ca00abe]{width:100%;display:inline-block;\n/* \tjustify-content: flex-start;\n\tflex-wrap: wrap; */\n\t/* overflow: hidden; */height:%?270?%;padding-bottom:%?40?%;border-bottom:%?6?% solid #f5f5f5}.table .tab_list[data-v-4ca00abe]{width:20%;\n\t/* display: inline-block; */float:left;text-align:center;margin-top:%?30?%;font-size:%?28?%;color:#333}.table .tab_list uni-image[data-v-4ca00abe]{width:%?56?%;height:%?56?%}.exhibition[data-v-4ca00abe]{padding:0 %?20?% %?20?% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?30?%}.exhibition .left[data-v-4ca00abe]{width:49%;height:%?332?%}.exhibition .left uni-image[data-v-4ca00abe]{height:100%;width:100%}.exhibition .right[data-v-4ca00abe]{width:49%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.exhibition .right uni-view[data-v-4ca00abe]{height:%?156?%;width:100%}.exhibition .right uni-image[data-v-4ca00abe]{height:100%;width:100%}.guess[data-v-4ca00abe]{padding:%?20?%;background:#f1f1f1}.guess .gu_top[data-v-4ca00abe]{font-weight:700;font-size:%?32?%;padding-top:%?20?%;padding-left:%?20?%;padding-bottom:%?10?%;background:#fff;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.guess .product .pr_list[data-v-4ca00abe]{margin-bottom:%?20?%;background:#fff;padding:%?20?%;border-radius:%?10?%}.guess .product uni-view[data-v-4ca00abe]:first-of-type{border-top-left-radius:%?0?%;border-top-right-radius:%?0?%}.guess .ticket[data-v-4ca00abe]{color:#666;font-size:%?28?%;margin:%?10?% 0;padding:0 %?10?%}.guess .address[data-v-4ca00abe]{color:#333;font-size:%?28?%;font-weight:700;padding:0 %?10?%;margin-bottom:%?20?%}.guess .tips[data-v-4ca00abe]{color:#00d3b3;font-size:%?24?%;border:%?1?% solid #00d3b3;padding:%?2?% %?10?%;border-radius:%?5?%;margin-left:%?20?%;font-weight:100}.guess .product .bottom .price[data-v-4ca00abe]{color:#ff431d;margin-right:%?20?%;height:%?70?%;line-height:%?70?%}.guess .product .bottom .data[data-v-4ca00abe]{color:#999;font-size:%?26?%;height:%?70?%;line-height:%?70?%}.guess .product uni-image[data-v-4ca00abe]{width:100%;height:%?300?%}.guess .product .info[data-v-4ca00abe]{float:right;color:#ff431d;border:%?1?% solid #ff431d;border-radius:%?10?%;font-size:%?30?%;padding:%?10?%}",""])},5548:function(t,e,n){"use strict";n.r(e);var i=n("1ee1"),a=n("e980");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("ec1a");var o=n("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"4ca00abe",null);e["default"]=r.exports},ad24:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{data:"",data_guess:""}},methods:{returns:function(){this.common.returns(this)},jump:function(t){uni.navigateTo({url:t})},search:function(){uni.navigateTo({url:"/pages/common/search?type=feature"})}},onShow:function(){this.city=uni.getStorageSync("city"),this.service.entire(this,"get",this.service.api_root.subindex.goods_Category,{},function(t,e){console.log(e);for(var n=e.data,i=[],a=0;a<n.length;a+=10)i.push(n.slice(a,a+10));t.data=i}),this.service.entire(this,"get",this.service.api_root.threeLayers.goodsList,{},function(t,e){t.data_guess=e.data.data})}};e.default=i},cb9b:function(t,e,n){var i=n("25a1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("204d2515",i,!0,{sourceMap:!1,shadowMode:!1})},e980:function(t,e,n){"use strict";n.r(e);var i=n("ad24"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},ec1a:function(t,e,n){"use strict";var i=n("cb9b"),a=n.n(i);a.a}}]);