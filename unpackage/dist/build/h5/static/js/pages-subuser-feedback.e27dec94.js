(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-feedback"],{"0109":function(t,e,a){"use strict";a.r(e);var i=a("be88"),n=a("fda3");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("99b1");var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"0b1670ea",null);e["default"]=o.exports},"08a2":function(t,e,a){var i=a("fb97");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("56263806",i,!0,{sourceMap:!1,shadowMode:!1})},1961:function(t,e,a){"use strict";var i=a("08a2"),n=a.n(i);n.a},"21fb":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".content[data-v-0b1670ea]{overflow:hidden}.fe_top[data-v-0b1670ea]{margin:0 %?46?%}.fe_test[data-v-0b1670ea]{color:#333;font-size:%?34?%;padding:0 %?6?%;margin:%?36?% 0 %?42?% 0;font-weight:700}.fe_top .tab_box[data-v-0b1670ea]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.fe_top .tab_box .tab_list[data-v-0b1670ea]{width:%?196?%;height:%?66?%;line-height:%?66?%;color:#1d9dff;background:#e8f5ff;border-radius:%?33?%;text-align:center;margin-bottom:%?34?%;font-size:%?30?%}.fe_bottom[data-v-0b1670ea]{margin:0 %?40?%}.textarea[data-v-0b1670ea]{background:#f2f2f2;padding:%?42?% %?34?%}uni-button[data-v-0b1670ea]{background:#1d74ff;color:#fff;height:%?88?%;line-height:%?88?%;border-radius:%?44?%;font-size:%?34?%;\n\t/* width: 84%; */margin:%?80?% %?36?%}",""])},"3b04":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["titles"],data:function(){return{}},methods:{returns:function(){var t=getCurrentPages();if(t.length>1)uni.navigateBack(1);else{var e=this.$router.go(-1);void 0==e&&uni.reLaunch({url:"/pages/index/index"})}}}};e.default=i},"3b8b":function(t,e,a){var i=a("21fb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1ace13b4",i,!0,{sourceMap:!1,shadowMode:!1})},"641d":function(t,e,a){"use strict";a.r(e);var i=a("c7ad"),n=a("8d98");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("1961");var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"251dc206",null);e["default"]=o.exports},"8bde":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(a("3675"));var n=i(a("641d")),s={components:{returns:n.default},data:function(){return{title:"反馈"}},methods:{},onShow:function(){}};e.default=s},"8d98":function(t,e,a){"use strict";a.r(e);var i=a("3b04"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},"99b1":function(t,e,a){"use strict";var i=a("3b8b"),n=a.n(i);n.a},be88:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"status_bar"}),a("returns",{attrs:{titles:t.title}}),a("v-uni-view",{staticClass:"fe_top"},[a("v-uni-view",{staticClass:"fe_test"},[t._v("反馈类型")]),a("v-uni-view",{staticClass:"tab_box"},[a("v-uni-view",{staticClass:"tab_list"},[t._v("交通信息")]),a("v-uni-view",{staticClass:"tab_list"},[t._v("景点入口")]),a("v-uni-view",{staticClass:"tab_list"},[t._v("推荐玩法")]),a("v-uni-view",{staticClass:"tab_list"},[t._v("交通信息")]),a("v-uni-view",{staticClass:"tab_list"},[t._v("景点入口")]),a("v-uni-view",{staticClass:"tab_list"},[t._v("推荐玩法")])],1)],1),a("v-uni-view",{staticClass:"fe_bottom"},[a("v-uni-view",{staticClass:"fe_test"},[t._v("反馈类型")]),a("v-uni-view",{staticClass:"textarea"},[a("v-uni-textarea",{attrs:{"placeholder-style":"color:#999999",placeholder:"输入反馈内容"}})],1)],1),a("v-uni-button",[t._v("提交")])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},c7ad:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.returns()}}}),a("v-uni-text",[t._v(t._s(t.titles))]),a("v-uni-text")],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},fb97:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".top[data-v-251dc206]{height:%?105?%;padding:0 %?44?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?36?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-251dc206]{height:%?40?%;width:%?40?%}.top uni-text[data-v-251dc206]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},fda3:function(t,e,a){"use strict";a.r(e);var i=a("8bde"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a}}]);