(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/threeLayers/order"],{2718:function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return o.e("pages/common/returns").then(o.bind(null,"641d"))},a={data:function(){return{title:"确认订单",data:[],address:"",shopp:"",payment:"",indexs:"",id:"",payment_id:"",show_add:3,require_data:"",coupon_list:"",show:!1,recording:"未选择"}},components:{returns:r},methods:{jump:function(t){e.navigateTo({url:t})},choice:function(e){var t=!0,o=!1,n=void 0;try{for(var r,a=this.payment[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var i=r.value;i.choice=!1}}catch(s){o=!0,n=s}finally{try{t||null==a.return||a.return()}finally{if(o)throw n}}this.payment[e].choice=!0,this.payment_id=this.payment[e].id,this.payment_name=this.payment[e].payment},discount_choice:function(e){var t=!0,o=!1,r=void 0;try{for(var a,i=this.coupon_list[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;s.choice=!1}}catch(c){o=!0,r=c}finally{try{t||null==i.return||i.return()}finally{if(o)throw r}}this.coupon_list[e].choice=!0,console.log(n(this.coupon_list," at pages\\threeLayers\\order.vue:205"))},finish:function(){var e=this;this.show=!1,this.coupon_list.forEach(function(t,o){1==t.choice&&(t.id?(e.require_data.coupon_id=e.coupon_list[o].id,0==e.coupon_list[o].coupon.type?e.recording="￥"+e.coupon_list[o].coupon.discount_value+"元":e.recording="￥"+e.coupon_list[o].coupon.discount_value+"折"):(e.require_data.coupon_id="",e.recording="不使用"))}),console.log(n(this.require_data," at pages\\threeLayers\\order.vue:220")),this.Index()},Index:function(){this.service.entire(this,"post",this.service.api_root.threeLayers.buy_Index,this.require_data,function(e,t){if(e.data=t.data.base,""!=t.data.coupon_data.coupon_list){var o={not_coupon:"不使用"},r=t.data.coupon_data.coupon_list;r.push(o);var a=!0,i=!1,s=void 0;try{for(var c,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var d=c.value;d.choice=!1}}catch(g){i=!0,s=g}finally{try{a||null==u.return||u.return()}finally{if(i)throw s}}console.log(n(r," at pages\\threeLayers\\order.vue:235")),e.coupon_list=r}t.data.base.address?e.show_add=1:e.show_add=0,e.address=t.data.base.address,e.shopp=t.data.goods_list;var l=t.data.payment_list;console.log(n(e.shopp," at pages\\threeLayers\\order.vue:246"));var p=!0,h=!1,f=void 0;try{for(var _,y=l[Symbol.iterator]();!(p=(_=y.next()).done);p=!0){var v=_.value;v.choice=!1}}catch(g){h=!0,f=g}finally{try{p||null==y.return||y.return()}finally{if(h)throw f}}e.payment=l})},payments:function(){var t=this;this.address?this.payment_id?e.showModal({title:"提示",content:"是否确定支付？",success:function(o){if(o.confirm){t.require_data.seckill_goods_id&&(t.require_data.seckill_discount_price=t.shopp[0].seckill_discount_price);var r={token:e.getStorageSync("token"),address_id:t.address.id,payment_id:t.payment_id},a=Object.assign(r,t.require_data);t.service.entire(t,"post",t.service.api_root.threeLayers.Add,a,function(t,o){console.log(n(o," at pages\\threeLayers\\order.vue:285")),0==o.code?t.service.entire(t,"post",t.service.api_root.threeLayers.Pay,{token:e.getStorageSync("token"),id:o.data.order.id},function(e,t){console.log(n(t," at pages\\threeLayers\\order.vue:291")),e.common.order(t,e,"../subuser/mall_order?status=-1","pages/subuser/mall_order?status=-1")}):e.showToast({icon:"none",title:o.msg})})}else if(o.cancel)return}}):e.showToast({icon:"none",title:"请选择支付方式"}):e.showToast({icon:"none",title:"请添加收货地址"})}},onLoad:function(t){console.log(n(JSON.parse(t.data)," at pages\\threeLayers\\order.vue:312")),this.options=JSON.parse(t.data);var o,r=JSON.parse(t.data);console.log(n(" at pages\\threeLayers\\order.vue:316")),o="cart"==r.type?{token:e.getStorageSync("token"),ids:r.id,buy_type:r.type}:r.seckill_id?{token:e.getStorageSync("token"),goods_id:r.id,stock:r.num,spec:r.spec,buy_type:r.type,seckill_goods_id:r.seckill_id}:{token:e.getStorageSync("token"),goods_id:r.id,stock:r.num,spec:r.spec,buy_type:r.type},this.require_data=o},onShow:function(){this.Index()}};t.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])},"32e5":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.show=!e.show},e.e1=function(t){e.show=!e.show})},r=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r})},"344f":function(e,t,o){"use strict";o.r(t);var n=o("32e5"),r=o("3bcf");for(var a in r)"default"!==a&&function(e){o.d(t,e,function(){return r[e]})}(a);o("9579");var i=o("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"05632a68",null);t["default"]=s.exports},"3bcf":function(e,t,o){"use strict";o.r(t);var n=o("2718"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=r.a},"53c5":function(e,t,o){},"565d":function(e,t,o){"use strict";(function(e){o("fc5f"),o("921b");n(o("66fd"));var t=n(o("344f"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},9579:function(e,t,o){"use strict";var n=o("53c5"),r=o.n(n);r.a}},[["565d","common/runtime","common/vendor"]]]);