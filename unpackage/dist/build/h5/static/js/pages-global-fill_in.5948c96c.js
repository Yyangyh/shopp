(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-global-fill_in"],{"22b0":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-55612199]{height:%?105?%;padding:0 %?44?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-55612199]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:%?90?%}.top uni-image[data-v-55612199]{height:%?40?%;width:%?40?%}.top uni-text[data-v-55612199]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},"3b04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=a},"3c3b":function(t,e,i){"use strict";i.r(e);var a=i("f045"),n=i("9449");for(var d in n)"default"!==d&&function(t){i.d(e,t,function(){return n[t]})}(d);i("f3a2");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"6f8dead3",null);e["default"]=r.exports},"3fbd":function(t,e,i){var a=i("efc5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1c1da835",a,!0,{sourceMap:!1,shadowMode:!1})},"5d33":function(t,e,i){"use strict";var a=i("c982"),n=i.n(a);n.a},"641d":function(t,e,i){"use strict";i.r(e);var a=i("a9fb"),n=i("8d98");for(var d in n)"default"!==d&&function(t){i.d(e,t,function(){return n[t]})}(d);i("5d33");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"55612199",null);e["default"]=r.exports},"8d98":function(t,e,i){"use strict";i.r(e);var a=i("3b04"),n=i.n(a);for(var d in a)"default"!==d&&function(t){i.d(e,t,function(){return a[t]})}(d);e["default"]=n.a},9449:function(t,e,i){"use strict";i.r(e);var a=i("d758"),n=i.n(a);for(var d in a)"default"!==d&&function(t){i.d(e,t,function(){return a[t]})}(d);e["default"]=n.a},a9fb:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){e=t.$handleEvent(e),t.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"}})],1),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},c982:function(t,e,i){var a=i("22b0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cdb7ee24",a,!0,{sourceMap:!1,shadowMode:!1})},d758:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("28a5");var n=a(i("75fc")),d=a(i("f499")),o=a(i("db0c"));i("7f7f");var r=a(i("5d73")),s=a(i("bd86")),l=a(i("2241")),f=a(i("641d")),c={components:{uniCalendar:l.default,returns:f.default},data:function(){var t;return t={title:"订单填写",id:"",scen_id:"",chiose_time:"",data:"",max_num:"",buy_num:1,default_news:"",Arr_news:[],taker_name:"",taker_pho:"",additional_data:"",current:0,buy_show:99,buy_date:"",arr_date:"",other_time:"",startDate:"",endDate:""},(0,s.default)(t,"chiose_time",""),(0,s.default)(t,"sure_date",""),(0,s.default)(t,"buy_selected",[]),t},methods:{open:function(){this.$refs.calendar.open()},confirm:function(t){console.log(t);var e=[],i=!0,a=!1,n=void 0;try{for(var d,o=(0,r.default)(this.sure_date);!(i=(d=o.next()).done);i=!0){var s=d.value;e.push(s.Date)}}catch(l){a=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(a)throw n}}-1!=e.indexOf(t.fulldate)?(this.other_time=t.month+"月"+t.date+"日",this.chiose_time=t.fulldate,this.buy_show=3):uni.showToast({icon:"none",title:"该时间段暂无票可售，请重新选择"})},buy_chiose_date:function(t){""!=this.arr_date[t].Price&&(this.buy_show=t,this.chiose_time=this.arr_date[t].date)},emption:function(){if(""!=this.chiose_time)if(""!=this.taker_name&&""!=this.taker_pho){var t=[],e=!0,i=!1,a=void 0;try{for(var n,d=(0,r.default)(this.Arr_news);!(e=(n=d.next()).done);e=!0){var s=n.value,l={},f=!0,c=!1,u=void 0;try{for(var v,b=(0,r.default)(s);!(f=(v=b.next()).done);f=!0){var h=v.value;if("证件类型"==h.name&&0==h.type_index)return void uni.showToast({icon:"none",title:"游客信息不能为空"});"身份证"==h.value&&(l.IdCardType=1),"证件号"==h.name&&(l.IdCardNo=h.value),"姓名"==h.name&&(l.Cname=h.value),"联系电话"==h.name&&(l.ContactInfo=h.value)}}catch(tt){c=!0,u=tt}finally{try{f||null==b.return||b.return()}finally{if(c)throw u}}t.push(l)}}catch(tt){i=!0,a=tt}finally{try{e||null==d.return||d.return()}finally{if(i)throw a}}for(var x=0;x<t.length;x++){var p=t[x],_=(0,o.default)(p),w=!0,g=!1,y=void 0;try{for(var m,k=(0,r.default)(_);!(w=(m=k.next()).done);w=!0){var C=m.value;if(""==C)return void uni.showToast({icon:"none",title:"游客信息不能为空"})}}catch(tt){g=!0,y=tt}finally{try{w||null==k.return||k.return()}finally{if(g)throw y}}}var z={id:this.scen_id,ResourceID:this.id,UseDate:this.chiose_time,Quantity:this.buy_num,order_no:this.order,detail_id:this.detail_id,contact_info:{Name:this.taker_name,Mobile:this.taker_pho}};if(z.passener_info_list=t,""!=this.additional_data){var I=[];console.log(this.additional_data);var j=!0,D=!1,E=void 0;try{for(var T,A=(0,r.default)(this.additional_data);!(j=(T=A.next()).done);j=!0){var O=T.value,P={};if(1==O.Type||3==O.Type){var R=[],L={};L.id=O.Arr[O.Arr_index].id,L.content="",R.push(L),P.id=O.ResourceOrderExtendInfoID,P.items=R}else if(2==O.Type){var $=[],M=!0,N=!1,F=void 0;try{for(var J,Q=(0,r.default)(O.arr_value);!(M=(J=Q.next()).done);M=!0){var S=J.value,Y={};Y.id=S,Y.content="",$.push(Y)}}catch(tt){N=!0,F=tt}finally{try{M||null==Q.return||Q.return()}finally{if(N)throw F}}P.id=O.ResourceOrderExtendInfoID,P.items=$}else if(4==O.Type){var U=[],q={id:0};q.content=O.text_value,U.push(q),P.id=O.ResourceOrderExtendInfoID,P.items=U}I.push(P)}}catch(tt){D=!0,E=tt}finally{try{j||null==A.return||A.return()}finally{if(D)throw E}}for(var B=0;B<I.length;B++){var G=I[B];if(""==G.items)return void uni.showToast({icon:"none",title:"附加信息不能为空"});var H=!0,K=!1,V=void 0;try{for(var W,X=(0,r.default)(G.items);!(H=(W=X.next()).done);H=!0){var Z=W.value;if((0==Z.id||void 0==Z.id)&&""==Z.content)return void uni.showToast({icon:"none",title:"附加信息不能为空"})}}catch(tt){K=!0,V=tt}finally{try{H||null==X.return||X.return()}finally{if(K)throw V}}}z.ItemAddInfo=I}else z.ItemAddInfo=[];console.log(z),this.service.entire(this,"post",this.service.api_root.global.use_ctrip,z,function(t,e){console.log(e),uni.showToast({icon:"none",title:e.msg}),0==e.code&&setTimeout(function(){t.common.returns(t)},1500)})}else uni.showToast({icon:"none",title:"取票人信息不能为空"});else uni.showToast({icon:"none",title:"请选择使用日期"})},bindPickerChange:function(t,e){this.Arr_news[e][0].type_index=t.target.value,this.Arr_news[e][0].value=this.Arr_news[e][0].type[t.target.value]},bindInput:function(t,e,i){this.Arr_news[e][i].value=t.target.value},chiosePicker:function(t,e){this.additional_data[e].Arr_index=t.target.value,this.additional_data=JSON.parse((0,d.default)(this.additional_data))},checkboxChange:function(t,e){this.additional_data[e].arr_value=(0,n.default)(t.target.value)},addInput:function(t,e){this.additional_data[e].text_value=t.target.value}},onLoad:function(t){this.detail_id=t.detail_id,this.order=t.order;var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();a<10&&(a="0"+a),n<10&&(n="0"+n);var o=i+"-"+a+"-"+n;function s(t,e){void 0!=e&&""!=e||(e=1);t=new Date(t);t.setDate(t.getDate()+e);var i=t.getMonth()+1,a=t.getDate();return t.getFullYear()+"-"+l(i)+"-"+l(a)}function l(t){if(void 0==t||""==t)return"";var e=t+"";return e.length<2&&(e="0"+e),e}function f(t){var e=t.split("-");return e=e[1]+"月"+e[2]+"日",e}var c=[{show_date:a+"月"+n+"日",name:"今天",date:o,Price:""},{show_date:f(s(o,1)),name:"明天",date:s(o,1),Price:""},{show_date:f(s(o,2)),name:"后天",date:s(o,2),Price:""}];this.arr_date=c,this.startDate=s(o,3),this.endDate=s(o,30);var u=s(o,30);console.log(this.arr_date),this.scen_id=t.spot_id,this.id=t.id,this.service.entire(this,"get",this.service.api_root.subindex.scen_ConfirmDetail,{ResourceIDList:t.id,end_date:u},function(t,e){var i=e.data.date.ResourceList[0].DateList,a=!0,n=!1,o=void 0;try{for(var s,l=(0,r.default)(i);!(a=(s=l.next()).done);a=!0){var f=s.value,c={};f.Date=t.common.Test(f.Date),c.date=f.Date,c.info="￥"+f.Price,t.buy_selected.push(c);var u=!0,v=!1,b=void 0;try{for(var h,x=(0,r.default)(t.arr_date);!(u=(h=x.next()).done);u=!0){var p=h.value;f.Date==p.date&&(p.Price="￥"+f.Price)}}catch(I){v=!0,b=I}finally{try{u||null==x.return||x.return()}finally{if(v)throw b}}}}catch(I){n=!0,o=I}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}t.sure_date=i,t.data=e.data.info.ResourceList[0],t.max_num=e.data.info.ResourceList[0].MaxQuantity,console.log(e.data.information.ResourceList[0].CustomerInfoItemList);var _=e.data.information.ResourceList[0].CustomerInfoItemList,w=[];_.forEach(function(t,e){var i={};1==t.Model&&(i.value="",i.name=t.Name,"证件类型"==i.name?(i.type=["请选择","身份证"],i.type_index=0,w.unshift(i)):w.push(i))}),t.default_news=(0,d.default)(w),t.Arr_news.push(w),t.additional_data=e.data.info.ResourceList[0].ResourceOrderExtendInfoList;var g=!0,y=!1,m=void 0;try{for(var k,C=(0,r.default)(t.additional_data);!(g=(k=C.next()).done);g=!0){var z=k.value;1==z.Type||3==z.Type?function(){var t=[{text:"请选择"}];z.ResourceOrderExtendInfoItemList.forEach(function(e,i){var a={};a.text=e.Content,a.text_value="",a.id=e.ResourceOrderExtendInfoItemID,t.push(a)}),z.Arr_index=0,z.Arr=t}():4==z.Type?z.text_value="":2==z.Type&&(z.arr_value=[])}}catch(I){y=!0,m=I}finally{try{g||null==C.return||C.return()}finally{if(y)throw m}}console.log(t.additional_data),console.log(t.Arr_news)})}};e.default=c},efc5:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-6f8dead3]{padding-bottom:%?120?%}.content[data-v-6f8dead3]{width:100%;height:100%;overflow:hidden;background:#f1f1f1}.buy_date[data-v-6f8dead3]{background:#fff;width:100%;\n\t/* height: 450rpx; */font-size:%?32?%;z-index:998;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.buy_date .buy_date_test[data-v-6f8dead3]{font-size:%?28?%;padding:%?20?%}.buy_date .buy_date_price[data-v-6f8dead3]{color:#ff431d;padding:0 %?20?% %?20?% %?20?%}.buy_date .date_test[data-v-6f8dead3]{padding-left:%?20?%;margin-top:%?20?%}.buy_date .chiose_date[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?%}.buy_date .chiose_date .date_one[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?28?%;height:%?120?%;width:20%;text-align:center;border-radius:%?10?%;background:#f5f5f5;border:%?2?% solid #eee}.buy_date .chiose_date .date_one uni-view[data-v-6f8dead3]:nth-of-type(2){font-size:%?24?%\n\t/* color: #666; */}.buy_date .chiose_date .date_one .Price[data-v-6f8dead3]{color:#ff431d}.buy_date .buy[data-v-6f8dead3]{background:#007aff;color:#fff;height:%?90?%;line-height:%?90?%;font-size:%?28?%;border-radius:0}.prohibit[data-v-6f8dead3]{opacity:.3}.buy_show[data-v-6f8dead3]{background:#4395ff!important;color:#fff!important}.date[data-v-6f8dead3]{width:100%;background:#fff;overflow:hidden;margin-bottom:%?8?%\n\t/* box-sizing: border-box;\n\tpadding: 0 20rpx; */}.h2[data-v-6f8dead3]{color:#ff431d;text-align:right}.price[data-v-6f8dead3]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;margin:%?40?% 0 %?26?%\n\t/* display: flex;\n\talign-items: center;\n\tjustify-content: space-between; */}.h3[data-v-6f8dead3]{font-size:%?30?%;color:#000}.num[data-v-6f8dead3]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;margin-bottom:%?36?%;color:#1d9dff;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.num_right[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.num_right uni-text[data-v-6f8dead3]{display:inline-block;text-align:center;width:%?50?%;color:#000;font-size:%?30?%}.less[data-v-6f8dead3]{width:%?44?%;height:%?44?%;border-radius:50%;color:#666;border:%?2?% solid #666;text-align:center;line-height:%?44?%}.plus[data-v-6f8dead3]{width:%?44?%;height:%?44?%;border-radius:50%;color:#1d9dff;border:%?2?% solid #1d9dff;text-align:center;line-height:%?44?%}.prompt[data-v-6f8dead3]{width:100%;height:%?88?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;font-size:%?28?%;color:#999;background:#fffeef;line-height:%?88?%}.information[data-v-6f8dead3]{width:100%}.take[data-v-6f8dead3]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?30?%;color:#000;background:#fff;margin-bottom:%?20?%}.take .take_top[data-v-6f8dead3]{height:%?100?%;line-height:%?100?%;margin-left:%?20?%;color:#1d9dff}.information .tourist[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%;padding-left:%?20?%;font-size:%?30?%;background:#fff;color:#1d9dff}.information .log_box[data-v-6f8dead3]{margin-bottom:%?20?%}.log[data-v-6f8dead3]{width:100%;height:%?100?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;font-size:%?30?%;color:#000;background:#fff;margin-bottom:%?2?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.log uni-input[data-v-6f8dead3]{margin-left:%?28?%}.additional .additional_test[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%;font-size:%?30?%;background:#fff;padding-left:%?20?%;color:#1d9dff}.additional .additional_list[data-v-6f8dead3]{background:#fff;padding-left:%?20?%;font-size:%?30?%}.additional .additional_list .list_one[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.additional .additional_list .list_one uni-view[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%}.additional .additional_list .list_one .list_top[data-v-6f8dead3]{margin-right:%?20?%}.additional .additional_list .list_three .list_top[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%}.additional .additional_list .list_three .many_selection[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.additional .additional_list .list_three .many_selection .uni-list-cell[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:%?40?%;margin-bottom:%?20?%}.additional .additional_list .list_two uni-view[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%;font-size:%?30?%}.additional .additional_list .list_two uni-input[data-v-6f8dead3]{min-height:%?100?%;line-height:%?100?%}.uni-input-placeholder[data-v-6f8dead3]{font-size:%?24?%;color:#ddd}.h4[data-v-6f8dead3]{color:#999;font-size:%?24?%;margin-left:%?28?%}.uni-list[data-v-6f8dead3]{margin-bottom:1px}.uni-list .uni-list-cell[data-v-6f8dead3]{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?30?%;height:%?100?%}.uni-list .uni-list-cell .uni-list-cell-db[data-v-6f8dead3]{margin-left:%?20?%;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2}.h5[data-v-6f8dead3]{color:#ff431d}.offer[data-v-6f8dead3]{width:100%;height:%?100?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;margin-top:%?8?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.offer_name[data-v-6f8dead3]{color:#000;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.offer_name uni-image[data-v-6f8dead3]{width:%?32?%;height:%?24?%;margin-right:%?20?%}.icon uni-image[data-v-6f8dead3]{width:%?26?%;height:%?26?%}.button[data-v-6f8dead3]{width:100%;height:%?120?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:fixed;bottom:0;background:#fff;z-index:111}.button_name[data-v-6f8dead3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.button_name uni-text[data-v-6f8dead3]{color:#666;font-size:%?36?%}.button_name .h5[data-v-6f8dead3]{color:#ff431d;margin-left:%?24?%}.button uni-button[data-v-6f8dead3]{width:100%;height:%?90?%;color:#fff;font-size:%?36?%;text-align:center;line-height:%?90?%;background:#1d74ff;border-radius:%?90?%;padding:0;margin:0}\n\n/* 这个是选择后的颜色变化 */.choose[data-v-6f8dead3]{background:#1d9dff;color:#fff}",""])},f045:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),i("v-uni-view",{staticClass:"buy_date"},[i("v-uni-view",{staticClass:"date_test"},[t._v("使用日期选择")]),i("v-uni-view",{staticClass:"chiose_date"},[t._l(t.arr_date,function(e,a){return i("v-uni-view",{staticClass:"date_one",class:{buy_show:t.buy_show==a,prohibit:""==e.Price},on:{click:function(e){e=t.$handleEvent(e),t.buy_chiose_date(a)}}},[i("v-uni-view",{},[t._v(t._s(e.name))]),i("v-uni-view",{},[t._v(t._s(e.show_date))]),i("v-uni-view",{staticClass:"Price"},[t._v(t._s(e.Price))])],1)}),i("v-uni-view",{staticClass:"date_one",class:{buy_show:3==t.buy_show}},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.open(e)}}},[t._v("其他日期")]),i("v-uni-view",{},[t._v(t._s(t.other_time))])],1)],2)],1),i("v-uni-view",{staticClass:"date"},[i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{staticClass:"h3"},[t._v(t._s(t.data.Name))])],1)],1),i("v-uni-view",{staticClass:"information"},[i("v-uni-view",{staticClass:"take"},[i("v-uni-text",{staticClass:"take_top"},[t._v("取票人信息")]),i("v-uni-text",{staticClass:"h4"},[t._v("须填写"),i("v-uni-text",{staticClass:"h5"},[t._v("1个")]),t._v("取票人")],1),i("v-uni-view",{staticClass:"log"},[i("v-uni-text",[t._v("姓名")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名"},model:{value:t.taker_name,callback:function(e){t.taker_name=e},expression:"taker_name"}})],1),i("v-uni-view",{staticClass:"log"},[i("v-uni-text",[t._v("联系电话")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系电话"},model:{value:t.taker_pho,callback:function(e){t.taker_pho=e},expression:"taker_pho"}})],1)],1),i("v-uni-view",{staticClass:"tourist"},[t._v("游客信息")]),t._l(t.Arr_news,function(e,a){return i("v-uni-view",{key:a,staticClass:"log_box"},t._l(e,function(e,n){return i("v-uni-view",{key:n,staticClass:"log"},["证件类型"==e.name?i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("证件类型")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{value:e.type_index,range:e.type},on:{change:function(e){e=t.$handleEvent(e),t.bindPickerChange(e,a)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(e.type[e.type_index]))])],1)],1)],1)],1):[i("v-uni-text",[t._v(t._s(e.name))]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入"+e.name},on:{input:function(e){e=t.$handleEvent(e),t.bindInput(e,a,n)}}})]],2)}),1)})],2),""!=t.additional_data?i("v-uni-view",{staticClass:"additional"},[i("v-uni-view",{staticClass:"additional_test"},[t._v("下单附加信息（必填）")]),t._l(t.additional_data,function(e,a){return i("v-uni-view",{key:e.OrderExtendInfoID,staticClass:"additional_list"},[2==e.Type?[i("v-uni-view",{staticClass:"list_three"},[i("v-uni-view",{staticClass:"list_top"},[t._v(t._s(e.OrderExtendInfoName))]),i("v-uni-checkbox-group",{staticClass:"many_selection",on:{change:function(e){e=t.$handleEvent(e),t.checkboxChange(e,a)}}},t._l(e.ResourceOrderExtendInfoItemList,function(e,a){return i("v-uni-label",{key:e.ResourceOrderExtendInfoItemID,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-checkbox",{attrs:{value:String(e.ResourceOrderExtendInfoItemID),checked:e.checked}})],1),i("v-uni-view",[t._v(t._s(e.Content))])],1)}),1)],1)]:1==e.Type||3==e.Type?[i("v-uni-view",{staticClass:"list_one"},[i("v-uni-view",{staticClass:"list_top"},[t._v(t._s(e.OrderExtendInfoName))]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{value:e.Arr_index,range:e.Arr,"range-key":"text"},on:{change:function(e){e=t.$handleEvent(e),t.chiosePicker(e,a)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(e.Arr[e.Arr_index].text))])],1)],1)],1)]:4==e.Type?[i("v-uni-view",{staticClass:"list_two"},[i("v-uni-view",{staticClass:"list_top"},[t._v(t._s(e.OrderExtendInfoName))]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入"+e.OrderExtendInfoName},on:{input:function(e){e=t.$handleEvent(e),t.addInput(e,a)}}})],1)]:t._e()],2)})],2):t._e(),i("v-uni-view",{staticClass:"button"},[i("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.emption()}}},[t._v("确定")])],1),i("v-uni-view",[i("uni-calendar",{ref:"calendar",attrs:{insert:!1,startDate:t.startDate,endDate:t.endDate,selected:t.buy_selected},on:{confirm:function(e){e=t.$handleEvent(e),t.confirm(e)}}})],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f3a2:function(t,e,i){"use strict";var a=i("3fbd"),n=i.n(a);n.a}}]);