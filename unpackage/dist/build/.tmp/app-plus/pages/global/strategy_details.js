(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/global/strategy_details"],{"340a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){e.stopPropagation(),t.isShow=!t.isShow})},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"56c3":function(t,e,a){},"793c":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return a.e("pages/common/returns").then(a.bind(null,"641d"))},o={components:{returns:i},data:function(){return{title:"游记攻略",isShow:!0,richtext:"",data:"",user:"",id:"",say:""}},methods:{show:function(){console.log(t(2222," at pages\\global\\strategy_details.vue:74")),this.isShow=!0},jump:function(t){n.navigateTo({url:t})},jumping:function(t){n.navigateTo({url:t+"?id="+this.id})},submitComment:function(){console.log(t(this.say," at pages\\global\\strategy_details.vue:90")),this.service.entire(this,"post",this.service.api_root.substrategy.comment,{tid:this.id,content:this.say},function(e,a){console.log(t(a," at pages\\global\\strategy_details.vue:95")),0==a.code&&(n.showToast({icon:"none",title:a.msg}),e.say="",e.isShow=!e.isShow)})},zan:function(){this.service.entire(this,"post",this.service.api_root.substrategy.star,{tid:this.id},function(e,a){console.log(t(a," at pages\\global\\strategy_details.vue:111")),0==a.code&&e.load(e.id)})},load:function(e){this.service.entire(this,"post",this.service.api_root.index.travels_list,{page:1,id:e},function(e,a){console.log(t(a," at pages\\global\\strategy_details.vue:122")),e.data=a.data[0];var n=a.data[0].content;e.user=a.data[0].user;var i=new RegExp("<img","gi"),o=new RegExp("<p","gi"),s=new RegExp("<span","gi");n=n.replace(i,'<img style="max-width: 100%;"'),n=n.replace(o,'<p style="word-wrap:break-word;word-break:normal;"'),n=n.replace(s,'<span style="word-wrap:break-word;word-break:normal;white-space: pre-wrap;"'),e.richtext=n})}},onLoad:function(t){var e=t.i;this.id=e,this.load(e)}};e.default=o}).call(this,a("0de9")["default"],a("6e42")["default"])},"8b15":function(t,e,a){"use strict";a.r(e);var n=a("793c"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},ba83:function(t,e,a){"use strict";a.r(e);var n=a("340a"),i=a("8b15");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("f46b");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"21448982",null);e["default"]=r.exports},e2bb:function(t,e,a){"use strict";(function(t){a("fc5f"),a("921b");n(a("66fd"));var e=n(a("ba83"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},f46b:function(t,e,a){"use strict";var n=a("56c3"),i=a.n(n);i.a}},[["e2bb","common/runtime","common/vendor"]]]);