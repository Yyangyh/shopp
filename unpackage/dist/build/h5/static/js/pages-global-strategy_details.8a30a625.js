(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-global-strategy_details"],{"0e33":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"swiperContent"},[i("v-uni-swiper",{staticClass:"screen-swiper",class:!t.swiperType||1!=t.displayMultipleItems||t.vertical||t.fullScreen?"":"cardSwiper",style:{height:t.swiperHeight+"px"},attrs:{"indicator-dots":t.indicatorDots,"indicator-active-color":t.indicatorActiveColor,"indicator-color":t.indicatorColor,autoplay:t.autoplay&&t.flag,current:t.current,interval:t.interval,duration:t.duration,circular:t.circular,vertical:t.vertical,"previous-margin":t.previousMargin,"next-margin":t.nextMargin,"display-multiple-items":t.displayMultipleItems,"skip-hidden-item-layout":t.skipHiddenItemLayout},on:{change:function(e){e=t.$handleEvent(e),t.change(e)},animationfinish:function(e){e=t.$handleEvent(e),t.animationfinish(e)}}},t._l(t.swiperList,function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item",class:t.cardCur!=a||1!=t.displayMultipleItems||t.vertical||t.fullScreen?"":"cur",on:{click:function(e){e=t.$handleEvent(e),t.clickItem(a)}}},[e[t.imageKey]&&!e[t.videoKey]?i("v-uni-view",[i("v-uni-image",{style:{height:t.swiperHeight+"px"},attrs:{src:e[t.imageKey]}}),t.textTip?i("v-uni-text",{staticClass:"swiperText",style:{bottom:(t.swiperType?t.textStyleBottom+12:t.textStyleBottom)+"%",right:t.textStyleRight+"%",color:t.textStyleColor,background:t.textStyleBgcolor,"font-size":t.textStyleSize+"upx"}},[t._v(t._s(e[t.textKey]))]):t._e()],1):t._e(),e[t.videoKey]?i("v-uni-view",[i("v-uni-video",{style:{height:t.swiperHeight+"px"},attrs:{src:e[t.videoKey],autoplay:"",loop:"",muted:"",autoplay:t.videoAutoplay,objectFit:"cover"},on:{play:function(e){e=t.$handleEvent(e),t.play(e)},pause:function(e){e=t.$handleEvent(e),t.pause(e)}}})],1):t._e()],1)}),1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"10eb":function(t,e,i){"use strict";var a=i("ab73"),n=i.n(a);n.a},"22b0":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-55612199]{height:%?105?%;padding:0 %?44?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-55612199]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:%?90?%}.top uni-image[data-v-55612199]{height:%?40?%;width:%?40?%}.top uni-text[data-v-55612199]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},"36b5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"bw-swiper",created:function(){var t=this;this.fullScreen&&uni.getSystemInfo({success:function(e){t.swiperHeight=e.screenHeight-44}})},mounted:function(){var t=this;if(!this.fullScreen){var e=uni.createSelectorQuery().in(this);e.select(".swiper-item").boundingClientRect(function(e){t.swiperHeight=e.width/t.w_h}).exec()}},props:{fullScreen:{type:Boolean,default:!1},swiperList:{type:Array,default:function(){return[]}},swiperType:{type:Boolean,default:!1},videoAutoplay:{type:Boolean,default:!1},videoKey:{type:String,default:"src"},imageKey:{type:String,default:"img"},textKey:{type:String,default:"text"},textTip:{type:Boolean,default:!1},textStyleSize:{type:Number,default:24},textStyleBottom:{type:Number,default:5},textStyleRight:{type:Number,default:5},textStyleColor:{type:String,default:"#ffffff"},textStyleBgcolor:{type:String,default:"transparent"},w_h:{type:Number,default:2},skipHiddenItemLayout:{type:Boolean,default:!1},displayMultipleItems:{type:Number,default:1},nextMargin:{type:String,default:"0px"},previousMargin:{type:String,default:"0px"},vertical:{type:Boolean,default:!1},circular:{type:Boolean,default:!0},duration:{type:Number,default:400},interval:{type:Number,default:2500},current:{type:Number,default:0},autoplay:{type:Boolean,default:!0},indicatorColor:{type:String,default:"#CCCCCC"},indicatorActiveColor:{type:String,default:"#ffffff"},indicatorDots:{type:Boolean,default:!0}},data:function(){return{flag:!0,cardCur:0,swiperHeight:300}},computed:{},methods:{play:function(){this.flag=!1},pause:function(){this.flag=!0},clickItem:function(t){this.swiperList.length>0&&this.$emit("clickItem",this.swiperList[t])},change:function(t){this.$emit("change",t)},animationfinish:function(t){this.cardCur=t.detail.current,this.$emit("animationfinish",t)}}};e.default=a},"3b04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=a},"3eac":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-13a74f82]{background:#f1f1f1;width:100%;height:100%}.content[data-v-13a74f82]{width:100%;height:100%}.top[data-v-13a74f82]{width:100%;height:%?100?%;\n\t/* background: #FFFFFF; */padding-left:%?47?%;padding-right:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff}.top .top_left uni-image[data-v-13a74f82]{width:%?72?%;height:%?72?%;border-radius:50%;overflow:hidden;margin-right:%?13?%}.top .top_left[data-v-13a74f82]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?34?%;color:#666}.top .focus[data-v-13a74f82]{width:%?107?%;height:%?44?%;border-radius:%?20?%;line-height:%?44?%;font-size:%?24?%;text-align:center;background:#02a7f0;color:#fffefe}.swiper[data-v-13a74f82]{width:100%}.swiper .swiper_img[data-v-13a74f82],.swiper_box_img[data-v-13a74f82]{width:100%;height:%?200?%}.swiper .swiper_img[data-v-13a74f82]{position:absolute;left:0;top:0}.swiper .swiper_box[data-v-13a74f82]{position:relative}.bottom[data-v-13a74f82]{position:fixed;bottom:0;left:0;z-index:10;width:100%;height:%?90?%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bottom_left[data-v-13a74f82]{width:%?206?%;height:%?50?%;background:#1d9dff;border-radius:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:%?14?%;color:#feffff;font-size:%?24?%;color:#feffff}.bottom_left uni-image[data-v-13a74f82]{width:%?34?%;height:%?34?%;margin:0 %?12?%}.bottom_right[data-v-13a74f82]{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?32?%;color:#666}.bottom_right .img[data-v-13a74f82]{width:%?120?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center\n\t/* margin: 0 12rpx; */}.bottom_right .img uni-image[data-v-13a74f82]{width:%?49?%;height:%?49?%}.sub_comment[data-v-13a74f82]{width:100%;height:100%;position:fixed;bottom:0;left:0;z-index:20}.comment[data-v-13a74f82]{position:fixed;bottom:0;left:0;z-index:21;width:100%;height:%?254?%;background:#fff;padding:%?16?% %?30?% 0;-webkit-box-sizing:border-box;box-sizing:border-box}uni-textarea[data-v-13a74f82]{width:%?690?%;height:%?150?%;background:#f2f2f2;line-height:%?50?%;padding:0 %?14?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?28?%;color:#333;border-radius:%?10?%}.confirm[data-v-13a74f82]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:%?22?%}.confirm uni-image[data-v-13a74f82]{width:%?44?%;height:%?44?%}.submit[data-v-13a74f82]{width:%?96?%;height:%?44?%;line-height:%?44?%;text-align:center;color:#fff;font-size:%?24?%;background:#1d9dff;border-radius:%?10?%}body.?%PAGE?%[data-v-13a74f82]{background:#f1f1f1}",""])},"5d33":function(t,e,i){"use strict";var a=i("c982"),n=i.n(a);n.a},"5d9e":function(t,e,i){var a=i("c336");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("de76d35e",a,!0,{sourceMap:!1,shadowMode:!1})},"641d":function(t,e,i){"use strict";i.r(e);var a=i("a9fb"),n=i("8d98");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("5d33");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"55612199",null);e["default"]=r.exports},8814:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content",on:{click:function(e){e=t.$handleEvent(e),t.show(e)}}},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_left"},[i("v-uni-image",{attrs:{src:t.user.avatar,mode:""}}),i("v-uni-text",[t._v(t._s(t.user.user_name_view))])],1),i("v-uni-view",{staticClass:"focus",on:{click:function(e){e=t.$handleEvent(e),t.follow()}}},[t._v(t._s(t.is_follow?"已关注":"关注"))])],1),i("bw-swiper",{staticStyle:{width:"100%"},attrs:{videoAutoplay:t.videoAutoplay,interval:3e3,swiperList:t.swiperList,swiperType:t.swiperType,w_h:t.w_h},on:{clickItem:function(e){e=t.$handleEvent(e),t.clickItem(e)}}}),i("v-uni-rich-text",{attrs:{nodes:t.richtext}}),t.isShow?i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"bottom_left",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.isShow=!t.isShow}}},[i("v-uni-image",{attrs:{src:"../../static/image/penceil.png",mode:""}}),i("v-uni-view",{},[t._v("发表评论")])],1),i("v-uni-view",{staticClass:"bottom_right"},[i("v-uni-view",{staticClass:"img",on:{click:function(e){e=t.$handleEvent(e),t.jumping("/pages/global/comment")}}},[i("v-uni-image",{attrs:{src:"../../static/image/com.png",mode:""}}),i("v-uni-view",[t._v(t._s(t.data.comment_count))])],1),i("v-uni-view",{staticClass:"img",on:{click:function(e){e=t.$handleEvent(e),t.zan(e)}}},[0==t.is_star?i("v-uni-image",{attrs:{src:"../../static/image/hand.png",mode:""}}):i("v-uni-image",{attrs:{src:"../../static/image/finger.png",mode:""}}),i("v-uni-view",[t._v(t._s(t.star_count))])],1),i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:"../../static/image/eys.png",mode:""}}),i("v-uni-view",[t._v(t._s(t.data.access_count))])],1)],1)],1):t._e(),0==t.isShow?i("v-uni-view",{staticClass:"comment",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e)}}},[i("v-uni-textarea",{model:{value:t.say,callback:function(e){t.say=e},expression:"say"}}),i("v-uni-view",{staticClass:"confirm"},[i("v-uni-view"),i("v-uni-view",{staticClass:"submit",on:{click:function(e){e=t.$handleEvent(e),t.submitComment(e)}}},[t._v("发表")])],1)],1):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"8a16":function(t,e,i){"use strict";var a=i("5d9e"),n=i.n(a);n.a},"8b15":function(t,e,i){"use strict";i.r(e);var a=i("b29a"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"8d98":function(t,e,i){"use strict";i.r(e);var a=i("3b04"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"8e3e":function(t,e,i){"use strict";i.r(e);var a=i("36b5"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},a9fb:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){e=t.$handleEvent(e),t.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/return.png",mode:"widthFix"}})],1),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},ab73:function(t,e,i){var a=i("3eac");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c9789f08",a,!0,{sourceMap:!1,shadowMode:!1})},b177:function(t,e,i){"use strict";i.r(e);var a=i("0e33"),n=i("8e3e");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("8a16");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"38159d1c",null);e["default"]=r.exports},b29a:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("3b2b"),i("ac6a");var n=a(i("641d")),s=a(i("b177")),o={components:{returns:n.default,bwSwiper:s.default},data:function(){return{title:"游记攻略",swiperList:[{}],w_h:1,videoAutoplay:!1,swiperType:!1,isShow:!0,richtext:"",data:"",user:"",id:"",say:"",is_follow:"",is_star:!1,star_count:"",swiper_img:[]}},methods:{show:function(){this.isShow=!0},jump:function(t){uni.navigateTo({url:t})},jumping:function(t){uni.navigateTo({url:t+"?id="+this.id})},follow:function(){this.common.concern(this,this.data.uid)},clickItem:function(t){console.log(t),uni.previewImage({urls:[t.img]})},submitComment:function(){console.log(this.say),this.service.entire(this,"post",this.service.api_root.substrategy.comment,{tid:this.id,content:this.say},function(t,e){console.log(e),0==e.code&&(uni.showToast({icon:"none",title:e.msg}),t.say="",t.isShow=!t.isShow)})},zan:function(){this.is_star=!this.is_star,this.is_star?this.star_count=this.star_count+1:this.star_count=this.star_count-1,this.service.entire(this,"post",this.service.api_root.substrategy.star,{tid:this.id},function(t,e){console.log(e)})},load:function(t){this.service.entire(this,"post",this.service.api_root.index.travels_list,{page:1,id:t},function(t,e){console.log(e);var i=[];e.data[0].images.forEach(function(t,e){var a={img:t};i.push(a)}),t.swiperList=i,t.swiper_img=e.data[0].images,t.data=e.data[0],t.is_follow=e.data[0].is_follow,t.star_count=e.data[0].star_count,t.is_star=e.data[0].is_star;var a=e.data[0].content;t.user=e.data[0].user;var n=new RegExp("<img","gi"),s=new RegExp("<p","gi"),o=new RegExp("<span","gi");a=a.replace(n,'<img style="max-width: 100%;"'),a=a.replace(s,'<p style="word-wrap:break-word;word-break:normal;"'),a=a.replace(o,'<span style="word-wrap:break-word;word-break:normal;white-space: pre-wrap;"'),t.richtext=a})}},onLoad:function(t){var e=t.i;this.id=e,this.load(e)}};e.default=o},ba83:function(t,e,i){"use strict";i.r(e);var a=i("8814"),n=i("8b15");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("10eb");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"13a74f82",null);e["default"]=r.exports},c336:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".cardSwiper .swiper-item[data-v-38159d1c]{width:86%!important;overflow:initial}.cardSwiper .swiper-item uni-view[data-v-38159d1c]{width:100%;display:block;height:100%;border-radius:%?10?%;-webkit-transform:scaleX(.93);-ms-transform:scaleX(.93);transform:scaleX(.93);\r\n\t/* transform: scale(0.93,0.8); */opacity:.7;-webkit-transition:all .1s ease-in 0s;-o-transition:all .1s ease-in 0s;transition:all .1s ease-in 0s;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:8.1%}.cardSwiper .cur uni-view[data-v-38159d1c]{-webkit-transform:initial;-ms-transform:initial;transform:none;opacity:1;-webkit-transition:all .1s ease-in 0s;-o-transition:all .1s ease-in 0s;transition:all .1s ease-in 0s}.swiper-item uni-view[data-v-38159d1c]{height:100%;width:100%;position:relative}.swiperText[data-v-38159d1c]{position:absolute;color:#fff;z-index:2;border-radius:%?4?%;padding:0 %?4?%}.screen-swiper uni-image[data-v-38159d1c]{width:100%}.screen-swiper uni-video[data-v-38159d1c],.swiper-item uni-video[data-v-38159d1c]{width:100%;display:block;height:100%}.swiperContent[data-v-38159d1c]{width:100%}",""])},c982:function(t,e,i){var a=i("22b0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cdb7ee24",a,!0,{sourceMap:!1,shadowMode:!1})}}]);