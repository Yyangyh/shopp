(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subindex/shop"],{"0e26":function(t,n,e){"use strict";var i=e("fbb5"),o=e.n(i);o.a},7081:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("components/wxcomponents/bw-swiper/bw-swiper").then(e.bind(null,"b177"))},a=function(){return e.e("pages/common/returns").then(e.bind(null,"641d"))},r={data:function(){return{title:"商家店铺",merchid:"",swiperList:[{}],swiperType:!0,w_h:2,goodsList:[],originalityList:[]}},methods:{returns:function(){this.common.returns(this)},jump:function(n){t.navigateTo({url:n})}},onLoad:function(t){console.log(i(t," at pages\\subindex\\shop.vue:161")),this.merchid=t.merchid,this.service.entire(this,"get",this.service.api_root.subindex.shop,{merchid:this.merchid},function(t,n){console.log(i(n.data.advs," at pages\\subindex\\shop.vue:166")),t.goodsList=n.data.goods,t.originalityList=n.data.originality;var e=[];n.data.advs.forEach(function(t,n){var i={img:t.thumb};e.push(i)}),t.swiperList=e})},components:{bwSwiper:o,returns:a}};n.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])},"76a8":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},a1a5:function(t,n,e){"use strict";e.r(n);var i=e("7081"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},a689:function(t,n,e){"use strict";(function(t){e("fc5f"),e("921b");i(e("66fd"));var n=i(e("d6e2"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},d6e2:function(t,n,e){"use strict";e.r(n);var i=e("76a8"),o=e("a1a5");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("0e26");var r=e("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"14065f5a",null);n["default"]=u.exports},fbb5:function(t,n,e){}},[["a689","common/runtime","common/vendor"]]]);