(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-addto"],{"08a2":function(t,e,i){var a=i("fb97");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("56263806",a,!0,{sourceMap:!1,shadowMode:!1})},"176e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),i("v-uni-view",{staticClass:"list"},[i("v-uni-text",[t._v("收货人")]),i("v-uni-input",{attrs:{type:"text",value:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-text",[t._v("联系电话")]),i("v-uni-input",{attrs:{type:"text",value:""},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),i("v-uni-view",{staticClass:"list_city",on:{click:function(e){e=t.$handleEvent(e),t.show=1}}},[i("v-uni-text",[t._v("所在地区")]),t._l(t.county,function(e,a){return i("v-uni-view",{key:a},[t._v(t._s(e))])})],2),i("v-uni-view",{staticClass:"list"},[i("v-uni-text",[t._v("详细地址")]),i("v-uni-input",{attrs:{type:"text",value:""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),i("v-uni-label",{staticClass:"checkbox"},[i("v-uni-checkbox",{attrs:{value:"",checked:t.checked}}),t._v("设为默认")],1),i("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.preservation()}}},[t._v("保存收货地址")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == 1"}],staticClass:"mask",on:{click:function(e){e=t.$handleEvent(e),t.show=0}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == 1"}],staticClass:"choice_city"},[i("v-uni-image",{attrs:{src:"../../static/image/secondary/close2.png",mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.show=0}}}),i("v-uni-view",{staticClass:"ci_test1"},[t._v("请选择")]),i("v-uni-view",{staticClass:"ci_test"},t._l(t.aggregate,function(e,a){return i("v-uni-view",{key:a},[t._v(t._s(e))])}),1),i("v-uni-view",{staticClass:"ci_box"},[i("v-uni-scroll-view",{staticClass:"box_H",attrs:{"scroll-y":"","scroll-top":"0"}},[i("v-uni-view",{staticClass:"H_city_test"},[t._v("选择省份/地区")]),t._l(t.city,function(e){return i("v-uni-view",{staticClass:"H_city",on:{click:function(i){i=t.$handleEvent(i),t.choice_province(e.id,e.name)}}},[t._v(t._s(e.name))])})],2)],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},1961:function(t,e,i){"use strict";var a=i("08a2"),n=i.n(a);n.a},2135:function(t,e,i){"use strict";i.r(e);var a=i("d15b"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"2cc0":function(t,e,i){var a=i("da5f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f34d5e6c",a,!0,{sourceMap:!1,shadowMode:!1})},"3b04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){var t=getCurrentPages();if(t.length>1)uni.navigateBack(1);else{var e=this.$router.go(-1);void 0==e&&uni.reLaunch({url:"/pages/index/index"})}}}};e.default=a},"641d":function(t,e,i){"use strict";i.r(e);var a=i("c7ad"),n=i("8d98");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("1961");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"251dc206",null);e["default"]=c.exports},"8d98":function(t,e,i){"use strict";i.r(e);var a=i("3b04"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"9aa6":function(t,e,i){"use strict";var a=i("2cc0"),n=i.n(a);n.a},c7ad:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.returns()}}}),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d15b:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7f7f");var n=a(i("641d")),s={data:function(){return{title:"新增收货地址",name:"",tel:"",city:"",county:[],address:"",checked:!1,show:0,aggregate:[],city_id:[]}},components:{returns:n.default},methods:{choice_province:function(t,e){this.city=[],this.aggregate.push(e),this.city_id.push(t),this.service.entire(this,"get",this.service.api_root.common.Region,{pid:t},function(t,e){console.log(e),""==e.data&&(t.show=0,t.county=t.aggregate),t.city=e.data})},preservation:function(){var t;t=0==this.checked?0:1,this.service.entire(this,"post",this.service.api_root.subuser.add_Save,{token:uni.getStorageSync("token"),name:this.name,tel:this.tel,province:this.city_id[0],city:this.city_id[1],county:this.city_id[2],address:this.address,is_default:t},function(t,e){uni.showToast({icon:"none",title:e.msg}),0==e.code&&setTimeout(function(){uni.navigateBack({delta:1})},800)})}},onLoad:function(t){t.id&&this.service.entire(this,"get",this.service.api_root.subuser.add_Detail,{token:uni.getStorageSync("token"),id:t.id},function(t,e){console.log(e),t.name=e.data.name,t.tel=e.data.tel,t.address=e.data.address,0==e.data.is_default?t.checked=!1:t.checked=!0,t.county.push(e.data.province_name),t.county.push(e.data.city_name),t.county.push(e.data.county_name)}),this.service.entire(this,"get",this.service.api_root.common.Region,{},function(t,e){console.log(e),t.city=e.data})},watch:{show:function(t,e){this.aggregate=[],1==t&&this.service.entire(this,"get",this.service.api_root.common.Region,{},function(t,e){console.log(e),t.city_id=[],t.city=e.data})}}};e.default=s},da5f:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-2baa92fa]{width:100%;height:99.9%;background:#fff;border-top:%?1?% solid #fff}.list_city[data-v-2baa92fa]{width:90%;\n\t/* height: 90rpx; */font-size:%?28?%;color:#999;margin:%?30?% auto;padding-bottom:%?30?%;border-bottom:%?1?% solid #999}.list[data-v-2baa92fa]{width:90%;height:%?90?%;font-size:%?28?%;color:#999;margin:%?30?% auto;border-bottom:%?1?% solid #999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;\n\t/* justify-content: center; */-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list uni-text[data-v-2baa92fa]{margin-right:%?16?%}.list uni-input[data-v-2baa92fa]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2}.checkbox[data-v-2baa92fa]{width:90%;font-size:%?28?%;color:#999;margin:%?30?% 5%}uni-button[data-v-2baa92fa]{width:90%;margin-top:%?30?%;border-radius:%?45?%}.mask[data-v-2baa92fa]{position:fixed;height:100%;width:100%;background:#000;opacity:.3;left:0;top:0;z-index:998}.choice_city[data-v-2baa92fa]{background:#fff;position:fixed;height:%?884?%;width:100%;left:0;bottom:0;z-index:999}.choice_city uni-image[data-v-2baa92fa]{position:absolute!important;width:%?40?%;height:%?40?%;right:%?20?%;top:%?20?%}.choice_city .ci_test1[data-v-2baa92fa]{text-align:center;padding:%?10?%;color:#999;font-size:%?30?%}.choice_city .ci_test[data-v-2baa92fa]{height:%?144?%;font-size:%?30?%;padding:%?20?%}.choice_city .ci_box[data-v-2baa92fa]{height:%?700?%}.choice_city .ci_box .box_H[data-v-2baa92fa]{height:%?700?%;font-size:%?30?%}.choice_city .ci_box .box_H uni-view[data-v-2baa92fa]{padding:%?10?%}.choice_city .ci_box .box_H .H_city_test[data-v-2baa92fa]{color:#999}",""])},e483:function(t,e,i){"use strict";i.r(e);var a=i("176e"),n=i("2135");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("9aa6");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"2baa92fa",null);e["default"]=c.exports},fb97:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-251dc206]{height:%?105?%;padding:0 %?44?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?36?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-251dc206]{height:%?40?%;width:%?40?%}.top uni-text[data-v-251dc206]:nth-of-type(2){width:%?40?%;display:inline-block}",""])}}]);