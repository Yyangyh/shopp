
import  service  from '../service.js';
var jweixin = require('jweixin-module');

export default {
    //判断是否在微信中  
    isWechat: function() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/micromessenger/i) == 'micromessenger') {
            // console.log('是微信客户端')
            return true;
        } else {
            // console.log('不是微信客户端')
            return false;
        }
    },
    //初始化sdk配置  
    initJssdkShare: function(callback, url) {
		console.log(service)
        //服务端进行签名 ，可使用uni.request替换。 签名算法请看文档  
		uni.request({
			url:service.api_root.common.jssdk_sign,
			method:'get',
			data:{
				url:url
			},
			success(res) {
				console.log(res.data.data.sign)
				if (res.data) {
				    jweixin.config({
				        // debug: true,
				        appId: res.data.data.app_id,
				        timestamp: res.data.data.timestamp,
				        nonceStr: res.data.data.noncestr,
				        signature: res.data.data.sign,
				        jsApiList: [
				            'updateAppMessageShareData',
				            'updateTimelineShareData'
				        ]
				    });
				    //配置完成后，再执行分享等功能  
				    if (callback) {
				        callback(res.data);
				    }
				}
			}
		})
		
        // post(
        //     'https://fbyc.microchainsoft.cn/index/wechat/getSignPackage',
        //     {
        //         url: url
        //     },
        //     function(res) {
        //         // console.log(res)
              
        // });
    },
    // initJssdk:function(callback){
    //     post('https://fbyc.microchainsoft.cn/index/wechat/getSignPackage',{},
    //         function (res) {
    //             if(res.data){
    //                 jweixin.config({
    //                     debug: true,
    //                     appId: res.data.appId,
    //                     timestamp: res.data.timestamp,
    //                     nonceStr: res.data.nonceStr,
    //                     signature: res.data.signature,
    //                     jsApiList: [
    //                         'checkJsApi',
    //                         'getLocation'
    //                     ]
    //                 });
    //                 //配置完成后，再执行分享等功能  
    //                 if (callback) {
    //                     callback(res.data);
    //                 }
    //             }
    //         })
    // },
    //在需要自定义分享的页面中调用  
    share: function(data, url) {
        url = url ? url : window.location.href;
        if (!this.isWechat()) {
            return;
        }
        //每次都需要重新初始化配置，才可以进行分享  
        this.initJssdkShare(function(signData) {
            jweixin.ready(function() {
                var shareData = {
                    title: data && data.Title ? data.Title : signData.site_name,
                    desc: '',
                    // desc: 'data && data.desc ? data.desc : signData.site_description',
                    link: url,
                    imgUrl: data && data.ImageUrl ? data.ImageUrl : signData.site_logo,
                    success: function(res) {
                        //用户点击分享后的回调，这里可以进行统计，例如分享送金币之类的  
                        // post('/api/member/share');
                    },
                    cancel: function(res) {}
                };
                //分享给朋友接口  
				jweixin.updateAppMessageShareData(shareData);  
				
                
				
                //分享到朋友圈接口  
				
                jweixin.updateTimelineShareData(shareData);
            });
        }, url);
    },
    //在需要定位页面调用
    // location: function(callback) {
    //     if (!this.isWechat()) {
    //         console.log('不是微信客户端')
    //         return;
    //     }
    //     console.info('定位')
    //     this.initJssdk(function(res) {
    //         jweixin.ready(function() {
    //             console.info('定位ready')
    //             jweixin.getLocation({
    //                 type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    //                 success: function (res) {
    //                     // console.log(res);
    //                     callback(res)
    //                 },
    //                 fail:function(res){
    //                     console.log(res)
    //                 },
    //                 // complete:function(res){
    //                 //     console.log(res)
    //                 // }
    //             });
    //         });
    //     });
    // }
}