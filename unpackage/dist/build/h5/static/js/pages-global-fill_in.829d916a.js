(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-global-fill_in"],{"3b04":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){var e=getCurrentPages();if(e.length>1)uni.navigateBack(1);else{var t=this.$router.go(-1);void 0==t&&uni.reLaunch({url:"/pages/index/index"})}}}};t.default=a},"3c3b":function(e,t,i){"use strict";i.r(t);var a=i("f045"),n=i("9449");for(var d in n)"default"!==d&&function(e){i.d(t,e,function(){return n[e]})}(d);i("f3a2");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"6f8dead3",null);t["default"]=r.exports},"3fbd":function(e,t,i){var a=i("efc5");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("1c1da835",a,!0,{sourceMap:!1,shadowMode:!1})},"562f":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.returns()}}}),i("v-uni-text",[e._v(e._s(e.titles))]),i("v-uni-text")],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"641d":function(e,t,i){"use strict";i.r(t);var a=i("562f"),n=i("8d98");for(var d in n)"default"!==d&&function(e){i.d(t,e,function(){return n[e]})}(d);i("b4a9");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"35a19ed7",null);t["default"]=r.exports},"8d98":function(e,t,i){"use strict";i.r(t);var a=i("3b04"),n=i.n(a);for(var d in a)"default"!==d&&function(e){i.d(t,e,function(){return a[e]})}(d);t["default"]=n.a},9449:function(e,t,i){"use strict";i.r(t);var a=i("d758"),n=i.n(a);for(var d in a)"default"!==d&&function(e){i.d(t,e,function(){return a[e]})}(d);t["default"]=n.a},b03d:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".top[data-v-35a19ed7]{height:%?105?%;padding:0 %?44?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-35a19ed7]{height:%?40?%;width:%?40?%}.top uni-text[data-v-35a19ed7]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},b4a9:function(e,t,i){"use strict";var a=i("ba47"),n=i.n(a);n.a},ba47:function(e,t,i){var a=i("b03d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("26535717",a,!0,{sourceMap:!1,shadowMode:!1})},d758:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("28a5");var n=a(i("75fc")),d=a(i("f499")),o=a(i("db0c"));i("7f7f");var r=a(i("5d73")),s=a(i("bd86")),l=a(i("2241")),f=a(i("641d")),u={components:{uniCalendar:l.default,returns:f.default},data:function(){var e;return e={title:"订单填写",id:"",scen_id:"",chiose_time:"",data:"",max_num:"",buy_num:1,default_news:"",Arr_news:[],taker_name:"",taker_pho:"",additional_data:"",current:0,buy_show:99,buy_date:"",arr_date:"",other_time:"",startDate:"",endDate:""},(0,s.default)(e,"chiose_time",""),(0,s.default)(e,"sure_date",""),(0,s.default)(e,"buy_selected",[]),e},methods:{open:function(){this.$refs.calendar.open()},confirm:function(e){console.log(e);var t=[],i=!0,a=!1,n=void 0;try{for(var d,o=(0,r.default)(this.sure_date);!(i=(d=o.next()).done);i=!0){var s=d.value;t.push(s.Date)}}catch(l){a=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(a)throw n}}-1!=t.indexOf(e.fulldate)?(this.other_time=e.month+"月"+e.date+"日",this.chiose_time=e.fulldate,this.buy_show=3):uni.showToast({icon:"none",title:"该时间段暂无票可售，请重新选择"})},buy_chiose_date:function(e){""!=this.arr_date[e].Price&&(this.buy_show=e,this.chiose_time=this.arr_date[e].date)},emption:function(){if(""!=this.chiose_time)if(""!=this.taker_name&&""!=this.taker_pho){var e=[],t=!0,i=!1,a=void 0;try{for(var n,d=(0,r.default)(this.Arr_news);!(t=(n=d.next()).done);t=!0){var s=n.value,l={},f=!0,u=!1,c=void 0;try{for(var v,b=(0,r.default)(s);!(f=(v=b.next()).done);f=!0){var h=v.value;if("证件类型"==h.name&&0==h.type_index)return void uni.showToast({icon:"none",title:"游客信息不能为空"});"身份证"==h.value&&(l.IdCardType=1),"证件号"==h.name&&(l.IdCardNo=h.value),"姓名"==h.name&&(l.Cname=h.value),"联系电话"==h.name&&(l.ContactInfo=h.value)}}catch(ee){u=!0,c=ee}finally{try{f||null==b.return||b.return()}finally{if(u)throw c}}e.push(l)}}catch(ee){i=!0,a=ee}finally{try{t||null==d.return||d.return()}finally{if(i)throw a}}for(var x=0;x<e.length;x++){var p=e[x],_=(0,o.default)(p),w=!0,g=!1,y=void 0;try{for(var m,k=(0,r.default)(_);!(w=(m=k.next()).done);w=!0){var C=m.value;if(""==C)return void uni.showToast({icon:"none",title:"游客信息不能为空"})}}catch(ee){g=!0,y=ee}finally{try{w||null==k.return||k.return()}finally{if(g)throw y}}}var z={id:this.scen_id,ResourceID:this.id,UseDate:this.chiose_time,Quantity:this.buy_num,order_no:this.order,detail_id:this.detail_id,contact_info:{Name:this.taker_name,Mobile:this.taker_pho}};if(z.passener_info_list=e,""!=this.additional_data){var I=[];console.log(this.additional_data);var j=!0,D=!1,E=void 0;try{for(var T,A=(0,r.default)(this.additional_data);!(j=(T=A.next()).done);j=!0){var O=T.value,P={};if(1==O.Type||3==O.Type){var R=[],L={};L.id=O.Arr[O.Arr_index].id,L.content="",R.push(L),P.id=O.ResourceOrderExtendInfoID,P.items=R}else if(2==O.Type){var $=[],M=!0,N=!1,F=void 0;try{for(var J,Q=(0,r.default)(O.arr_value);!(M=(J=Q.next()).done);M=!0){var S=J.value,Y={};Y.id=S,Y.content="",$.push(Y)}}catch(ee){N=!0,F=ee}finally{try{M||null==Q.return||Q.return()}finally{if(N)throw F}}P.id=O.ResourceOrderExtendInfoID,P.items=$}else if(4==O.Type){var B=[],U={id:0};U.content=O.text_value,B.push(U),P.id=O.ResourceOrderExtendInfoID,P.items=B}I.push(P)}}catch(ee){D=!0,E=ee}finally{try{j||null==A.return||A.return()}finally{if(D)throw E}}for(var q=0;q<I.length;q++){var G=I[q];if(""==G.items)return void uni.showToast({icon:"none",title:"附加信息不能为空"});var H=!0,K=!1,V=void 0;try{for(var W,X=(0,r.default)(G.items);!(H=(W=X.next()).done);H=!0){var Z=W.value;if((0==Z.id||void 0==Z.id)&&""==Z.content)return void uni.showToast({icon:"none",title:"附加信息不能为空"})}}catch(ee){K=!0,V=ee}finally{try{H||null==X.return||X.return()}finally{if(K)throw V}}}z.ItemAddInfo=I}else z.ItemAddInfo=[];console.log(z),this.service.entire(this,"post",this.service.api_root.global.use_ctrip,z,function(e,t){console.log(t),uni.showToast({icon:"none",title:t.msg}),0==t.code&&setTimeout(function(){e.common.returns(e)},1500)})}else uni.showToast({icon:"none",title:"取票人信息不能为空"});else uni.showToast({icon:"none",title:"请选择使用日期"})},bindPickerChange:function(e,t){this.Arr_news[t][0].type_index=e.target.value,this.Arr_news[t][0].value=this.Arr_news[t][0].type[e.target.value]},bindInput:function(e,t,i){this.Arr_news[t][i].value=e.target.value},chiosePicker:function(e,t){this.additional_data[t].Arr_index=e.target.value,this.additional_data=JSON.parse((0,d.default)(this.additional_data))},checkboxChange:function(e,t){this.additional_data[t].arr_value=(0,n.default)(e.target.value)},addInput:function(e,t){this.additional_data[t].text_value=e.target.value}},onLoad:function(e){this.detail_id=e.detail_id,this.order=e.order;var t=new Date,i=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();a<10&&(a="0"+a),n<10&&(n="0"+n);var o=i+"-"+a+"-"+n;function s(e,t){void 0!=t&&""!=t||(t=1);e=new Date(e);e.setDate(e.getDate()+t);var i=e.getMonth()+1,a=e.getDate();return e.getFullYear()+"-"+l(i)+"-"+l(a)}function l(e){if(void 0==e||""==e)return"";var t=e+"";return t.length<2&&(t="0"+t),t}function f(e){var t=e.split("-");return t=t[1]+"月"+t[2]+"日",t}var u=[{show_date:a+"月"+n+"日",name:"今天",date:o,Price:""},{show_date:f(s(o,1)),name:"明天",date:s(o,1),Price:""},{show_date:f(s(o,2)),name:"后天",date:s(o,2),Price:""}];this.arr_date=u,this.startDate=s(o,3),this.endDate=s(o,30);var c=s(o,30);console.log(this.arr_date),this.scen_id=e.spot_id,this.id=e.id,this.service.entire(this,"get",this.service.api_root.subindex.scen_ConfirmDetail,{ResourceIDList:e.id,end_date:c},function(e,t){var i=t.data.date.ResourceList[0].DateList,a=!0,n=!1,o=void 0;try{for(var s,l=(0,r.default)(i);!(a=(s=l.next()).done);a=!0){var f=s.value,u={};f.Date=e.common.Test(f.Date),u.date=f.Date,u.info="￥"+f.Price,e.buy_selected.push(u);var c=!0,v=!1,b=void 0;try{for(var h,x=(0,r.default)(e.arr_date);!(c=(h=x.next()).done);c=!0){var p=h.value;f.Date==p.date&&(p.Price="￥"+f.Price)}}catch(I){v=!0,b=I}finally{try{c||null==x.return||x.return()}finally{if(v)throw b}}}}catch(I){n=!0,o=I}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}e.sure_date=i,e.data=t.data.info.ResourceList[0],e.max_num=t.data.info.ResourceList[0].MaxQuantity,console.log(t.data.information.ResourceList[0].CustomerInfoItemList);var _=t.data.information.ResourceList[0].CustomerInfoItemList,w=[];_.forEach(function(e,t){var i={};1==e.Model&&(i.value="",i.name=e.Name,"证件类型"==i.name?(i.type=["请选择","身份证"],i.type_index=0,w.unshift(i)):w.push(i))}),e.default_news=(0,d.default)(w),e.Arr_news.push(w),e.additional_data=t.data.info.ResourceList[0].ResourceOrderExtendInfoList;var g=!0,y=!1,m=void 0;try{for(var k,C=(0,r.default)(e.additional_data);!(g=(k=C.next()).done);g=!0){var z=k.value;1==z.Type||3==z.Type?function(){var e=[{text:"请选择"}];z.ResourceOrderExtendInfoItemList.forEach(function(t,i){var a={};a.text=t.Content,a.text_value="",a.id=t.ResourceOrderExtendInfoItemID,e.push(a)}),z.Arr_index=0,z.Arr=e}():4==z.Type?z.text_value="":2==z.Type&&(z.arr_value=[])}}catch(I){y=!0,m=I}finally{try{g||null==C.return||C.return()}finally{if(y)throw m}}console.log(e.additional_data),console.log(e.Arr_news)})}};t.default=u},efc5:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-6f8dead3]{padding-bottom:%?120?%}.content[data-v-6f8dead3]{width:100%;height:100%;overflow:hidden;background:#f1f1f1}.buy_date[data-v-6f8dead3]{background:#fff;width:100%;\n\t/* height: 450rpx; */font-size:%?32?%;z-index:998;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.buy_date .buy_date_test[data-v-6f8dead3]{font-size:%?28?%;padding:%?20?%}.buy_date .buy_date_price[data-v-6f8dead3]{color:#ff431d;padding:0 %?20?% %?20?% %?20?%}.buy_date .date_test[data-v-6f8dead3]{padding-left:%?20?%;margin-top:%?20?%}.buy_date .chiose_date[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?%}.buy_date .chiose_date .date_one[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?28?%;height:%?120?%;width:20%;text-align:center;border-radius:%?10?%;background:#f5f5f5;border:%?2?% solid #eee}.buy_date .chiose_date .date_one uni-view[data-v-6f8dead3]:nth-of-type(2){font-size:%?24?%\n\t/* color: #666; */}.buy_date .chiose_date .date_one .Price[data-v-6f8dead3]{color:#ff431d}.buy_date .buy[data-v-6f8dead3]{background:#007aff;color:#fff;height:%?90?%;line-height:%?90?%;font-size:%?28?%;border-radius:0}.prohibit[data-v-6f8dead3]{opacity:.3}.buy_show[data-v-6f8dead3]{background:#4395ff!important;color:#fff!important}.date[data-v-6f8dead3]{width:100%;background:#fff;overflow:hidden;margin-bottom:%?8?%\n\t/* box-sizing: border-box;\n\tpadding: 0 20rpx; */}.h2[data-v-6f8dead3]{color:#ff431d;text-align:right}.price[data-v-6f8dead3]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;margin:%?40?% 0 %?26?%\n\t/* display: flex;\n\talign-items: center;\n\tjustify-content: space-between; */}.h3[data-v-6f8dead3]{font-size:%?30?%;color:#000}.num[data-v-6f8dead3]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;margin-bottom:%?36?%;color:#1d9dff;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.num_right[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.num_right uni-text[data-v-6f8dead3]{display:inline-block;text-align:center;width:%?50?%;color:#000;font-size:%?30?%}.less[data-v-6f8dead3]{width:%?44?%;height:%?44?%;border-radius:50%;color:#666;border:%?2?% solid #666;text-align:center;line-height:%?44?%}.plus[data-v-6f8dead3]{width:%?44?%;height:%?44?%;border-radius:50%;color:#1d9dff;border:%?2?% solid #1d9dff;text-align:center;line-height:%?44?%}.prompt[data-v-6f8dead3]{width:100%;height:%?88?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;font-size:%?28?%;color:#999;background:#fffeef;line-height:%?88?%}.information[data-v-6f8dead3]{width:100%}.take[data-v-6f8dead3]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?30?%;color:#000;background:#fff;margin-bottom:%?20?%}.take .take_top[data-v-6f8dead3]{height:%?100?%;line-height:%?100?%;margin-left:%?20?%;color:#1d9dff}.information .tourist[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%;padding-left:%?20?%;font-size:%?30?%;background:#fff;color:#1d9dff}.information .log_box[data-v-6f8dead3]{margin-bottom:%?20?%}.log[data-v-6f8dead3]{width:100%;height:%?100?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;font-size:%?30?%;color:#000;background:#fff;margin-bottom:%?2?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.log uni-input[data-v-6f8dead3]{margin-left:%?28?%}.additional .additional_test[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%;font-size:%?30?%;background:#fff;padding-left:%?20?%;color:#1d9dff}.additional .additional_list[data-v-6f8dead3]{background:#fff;padding-left:%?20?%;font-size:%?30?%}.additional .additional_list .list_one[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.additional .additional_list .list_one uni-view[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%}.additional .additional_list .list_one .list_top[data-v-6f8dead3]{margin-right:%?20?%}.additional .additional_list .list_three .list_top[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%}.additional .additional_list .list_three .many_selection[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.additional .additional_list .list_three .many_selection .uni-list-cell[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:%?40?%;margin-bottom:%?20?%}.additional .additional_list .list_two uni-view[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%;font-size:%?30?%}.additional .additional_list .list_two uni-input[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%}.uni-input-placeholder[data-v-6f8dead3]{font-size:%?24?%;color:#ddd}.h4[data-v-6f8dead3]{color:#999;font-size:%?24?%;margin-left:%?28?%}.uni-list[data-v-6f8dead3]{margin-bottom:1px}.uni-list .uni-list-cell[data-v-6f8dead3]{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?30?%;height:%?100?%}.uni-list .uni-list-cell .uni-list-cell-db[data-v-6f8dead3]{margin-left:%?20?%;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2}.h5[data-v-6f8dead3]{color:#ff431d}.offer[data-v-6f8dead3]{width:100%;height:%?100?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;margin-top:%?8?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.offer_name[data-v-6f8dead3]{color:#000;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.offer_name uni-image[data-v-6f8dead3]{width:%?32?%;height:%?24?%;margin-right:%?20?%}.icon uni-image[data-v-6f8dead3]{width:%?26?%;height:%?26?%}.button[data-v-6f8dead3]{width:100%;height:%?120?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:fixed;bottom:0;background:#fff;z-index:111}.button_name[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.button_name uni-text[data-v-6f8dead3]{color:#666;font-size:%?36?%}.button_name .h5[data-v-6f8dead3]{color:#ff431d;margin-left:%?24?%}.button uni-button[data-v-6f8dead3]{width:100%;height:%?90?%;color:#fff;font-size:%?36?%;text-align:center;line-height:%?90?%;background:#1d74ff;border-radius:%?90?%;padding:0;margin:0}\n\n/* 这个是选择后的颜色变化 */.choose[data-v-6f8dead3]{background:#1d9dff;color:#fff}",""])},f045:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:e.title}}),i("v-uni-view",{staticClass:"buy_date"},[i("v-uni-view",{staticClass:"date_test"},[e._v("使用日期选择")]),i("v-uni-view",{staticClass:"chiose_date"},[e._l(e.arr_date,function(t,a){return i("v-uni-view",{staticClass:"date_one",class:{buy_show:e.buy_show==a,prohibit:""==t.Price},on:{click:function(t){t=e.$handleEvent(t),e.buy_chiose_date(a)}}},[i("v-uni-view",{},[e._v(e._s(t.name))]),i("v-uni-view",{},[e._v(e._s(t.show_date))]),i("v-uni-view",{staticClass:"Price"},[e._v(e._s(t.Price))])],1)}),i("v-uni-view",{staticClass:"date_one",class:{buy_show:3==e.buy_show}},[i("v-uni-view",{on:{click:function(t){t=e.$handleEvent(t),e.open(t)}}},[e._v("其他日期")]),i("v-uni-view",{},[e._v(e._s(e.other_time))])],1)],2)],1),i("v-uni-view",{staticClass:"date"},[i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{staticClass:"h3"},[e._v(e._s(e.data.Name))])],1)],1),i("v-uni-view",{staticClass:"information"},[i("v-uni-view",{staticClass:"take"},[i("v-uni-text",{staticClass:"take_top"},[e._v("取票人信息")]),i("v-uni-text",{staticClass:"h4"},[e._v("须填写"),i("v-uni-text",{staticClass:"h5"},[e._v("1个")]),e._v("取票人")],1),i("v-uni-view",{staticClass:"log"},[i("v-uni-text",[e._v("姓名")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名"},model:{value:e.taker_name,callback:function(t){e.taker_name=t},expression:"taker_name"}})],1),i("v-uni-view",{staticClass:"log"},[i("v-uni-text",[e._v("联系电话")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系电话"},model:{value:e.taker_pho,callback:function(t){e.taker_pho=t},expression:"taker_pho"}})],1)],1),i("v-uni-view",{staticClass:"tourist"},[e._v("游客信息")]),e._l(e.Arr_news,function(t,a){return i("v-uni-view",{key:a,staticClass:"log_box"},e._l(t,function(t,n){return i("v-uni-view",{key:n,staticClass:"log"},["证件类型"==t.name?i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("证件类型")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{value:t.type_index,range:t.type},on:{change:function(t){t=e.$handleEvent(t),e.bindPickerChange(t,a)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(t.type[t.type_index]))])],1)],1)],1)],1):[i("v-uni-text",[e._v(e._s(t.name))]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入"+t.name},on:{input:function(t){t=e.$handleEvent(t),e.bindInput(t,a,n)}}})]],2)}),1)})],2),""!=e.additional_data?i("v-uni-view",{staticClass:"additional"},[i("v-uni-view",{staticClass:"additional_test"},[e._v("下单附加信息（必填）")]),e._l(e.additional_data,function(t,a){return i("v-uni-view",{key:t.OrderExtendInfoID,staticClass:"additional_list"},[2==t.Type?[i("v-uni-view",{staticClass:"list_three"},[i("v-uni-view",{staticClass:"list_top"},[e._v(e._s(t.OrderExtendInfoName))]),i("v-uni-checkbox-group",{staticClass:"many_selection",on:{change:function(t){t=e.$handleEvent(t),e.checkboxChange(t,a)}}},e._l(t.ResourceOrderExtendInfoItemList,function(t,a){return i("v-uni-label",{key:t.ResourceOrderExtendInfoItemID,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-checkbox",{attrs:{value:String(t.ResourceOrderExtendInfoItemID),checked:t.checked}})],1),i("v-uni-view",[e._v(e._s(t.Content))])],1)}),1)],1)]:1==t.Type||3==t.Type?[i("v-uni-view",{staticClass:"list_one"},[i("v-uni-view",{staticClass:"list_top"},[e._v(e._s(t.OrderExtendInfoName))]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{value:t.Arr_index,range:t.Arr,"range-key":"text"},on:{change:function(t){t=e.$handleEvent(t),e.chiosePicker(t,a)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(t.Arr[t.Arr_index].text))])],1)],1)],1)]:4==t.Type?[i("v-uni-view",{staticClass:"list_two"},[i("v-uni-view",{staticClass:"list_top"},[e._v(e._s(t.OrderExtendInfoName))]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入"+t.OrderExtendInfoName},on:{input:function(t){t=e.$handleEvent(t),e.addInput(t,a)}}})],1)]:e._e()],2)})],2):e._e(),i("v-uni-view",{staticClass:"button"},[i("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.emption()}}},[e._v("确定")])],1),i("v-uni-view",[i("uni-calendar",{ref:"calendar",attrs:{insert:!1,startDate:e.startDate,endDate:e.endDate,selected:e.buy_selected},on:{confirm:function(t){t=e.$handleEvent(t),e.confirm(t)}}})],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},f3a2:function(e,t,i){"use strict";var a=i("3fbd"),n=i.n(a);n.a}}]);