(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/threeLayers/comment_list"],{2172:function(t,e,n){"use strict";(function(t){n("fc5f"),n("921b");a(n("66fd"));var e=a(n("44c1"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"33a4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("pages/common/returns").then(n.bind(null,"641d"))},o={data:function(){return{title:"评论",list:[]}},components:{returns:a},onLoad:function(e){var n=e.goods_id;this.service.entire(this,"get",this.service.api_root.threeLayers.goood_Comment_List,{goods_id:n,page:1},function(e,n){console.log(t(n," at pages\\threeLayers\\comment_list.vue:83")),console.log(t(n.data.data," at pages\\threeLayers\\comment_list.vue:84")),e.list=n.data.data})}};e.default=o}).call(this,n("0de9")["default"])},"44c1":function(t,e,n){"use strict";n.r(e);var a=n("7717"),o=n("7a48");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("62c8");var u=n("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"45c4":function(t,e,n){},"62c8":function(t,e,n){"use strict";var a=n("45c4"),o=n.n(a);o.a},7717:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"7a48":function(t,e,n){"use strict";n.r(e);var a=n("33a4"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a}},[["2172","common/runtime","common/vendor"]]]);