import service from './service.js'

const order = function(ref, self, url, wxUrl) { //支付调用
	// console.log(self.payment_name)
	uni.showToast({
		icon: "none",
		title: ref.msg
	})
	if (self.payment_name == 'Alipay') {
		//当选择支付宝支付时
		// #ifndef  APP-PLUS
		uni.showToast({
			icon: 'none',
			title: '只能在APP内选择支付宝支付'
		})
		return
		// #endif

		uni.showToast({
			icon: 'none',
			title: '支付宝支付暂未开放'
		})
		return
	} else if (self.payment_name == 'Weixin') { //当选择微信支付时
		// #ifdef H5  

		let ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") { //判断是否是在微信内置浏览器打开
			let appId = ref.data.data.appId
			let timeStamp = ref.data.data.timeStamp
			let nonceStr = ref.data.data.nonceStr
			let package_id = ref.data.data.package
			let signType = ref.data.data.signType
			let paySign = ref.data.data.paySign
			console.log(signType)

			function onBridgeReady(appId, timeStamp, nonceStr, package_id, signType, paySign) {
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest', {
						"appId": appId, //公众号名称，由商户传入     
						"timeStamp": timeStamp, //时间戳，自1970年以来的秒数     
						"nonceStr": nonceStr, //随机串     
						"package": package_id,
						"signType": signType, //微信签名方式：     
						"paySign": paySign //微信签名 
					},
					function(res) {
						if (res.err_msg == "get_brand_wcpay_request:ok") {
							uni.redirectTo({
								url: url
							})
							// 使用以上方式判断前端返回,微信团队郑重提示：
							//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
						}
					});
			}
			if (typeof WeixinJSBridge == "undefined") {
				if (document.addEventListener) {
					document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
				} else if (document.attachEvent) {
					document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
					document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
				}
			} else {
				onBridgeReady(appId, timeStamp, nonceStr, package_id, signType, paySign);
			}
		} else { //普通浏览器微信支付
			let string = encodeURI('http://wx.huanqiutongmall.com/h5/#/' + wxUrl)
			window.location.href = ref.data.data + '&redirect_url=' + string
		}
		// #endif  


		// #ifdef  APP-PLUS
		uni.requestPayment({
			provider: 'wxpay',
			orderInfo: ref.data.data, //微信、支付宝订单数据
			success: function(ref) {
				uni.redirectTo({
					url: url
				})
			},
			fail: function(err) {
				console.log('fail:' + JSON.stringify(err));
			}
		});
		// #endif
	} else if (self.payment_name == 'WalletPay') { //选择钱包支付时
		setTimeout(function() {
			uni.redirectTo({
				url: url
			})
		}, 1500)
	} else if (self.payment_name == 'BtPay') { //选择版通支付时

		setTimeout(function() {
			uni.redirectTo({
				url: url
			})
		}, 1500)

	} else if (self.payment_name == '') { //积分支付时
		setTimeout(function() {
			uni.redirectTo({
				url: url
			})
		}, 1500)

	}
}

const returns = function(that) {
	// #ifdef H5
	// let canBack = true
	// const pages = getCurrentPages()
	// // 有可返回的页面则直接返回，uni.navigateBack默认返回失败之后会自动刷新页面 ，无法继续返回  
	// if (pages.length > 1) {
	// 	uni.navigateBack(1)
	// 	return;
	// }
	// // vue router 可以返回uni.navigateBack失败的页面 但是会重新加载  
	// let a = that.$router.go(-1)
	// // router.go失败之后则重定向到首页
	// if (a == undefined) {
	// 	uni.reLaunch({
	// 		url: "/pages/index/index"
	// 	})
	// }
	// return;
	history.back()
	// #endif  
	// #ifdef APP-PLUS
	uni.navigateBack(1)
	// #endif
}

const collection = function(that, id) { //收藏
	that.service.entire(that, 'get', that.service.api_root.common.Favor, {
		id: id,
		token: uni.getStorageSync('token')
	}, function(self, res) {
		if (res.code == 0) {
			that.is_favor = !that.is_favor
		}
	})
}


const scen_collection = function(that, id) { //景点收藏
	that.service.entire(that, 'post', that.service.api_root.subindex.scen_Favor, {
		id: id,
		token: uni.getStorageSync('token')
	}, function(self, res) {
		console.log(res)
		if (res.code == 0) {
			that.is_favor = !that.is_favor
		}
	})
}

const concern = function(that, id) { //关注
	that.service.entire(that, 'post', that.service.api_root.substrategy.concern, {
		for_uid: id,
		token: uni.getStorageSync('token')
	}, function(self, res) {
		console.log(res)
		if (res.code == 0) {
			that.is_follow = !that.is_follow
		} else {
			uni.showToast({
				icon: 'none',
				title: res.msg
			})
		}
	})
}

const Test = function(time) { //修改时间格式
	let t = time.slice(6, 19)
	let NewDtime = new Date(parseInt(t));
	return formatDate(NewDtime);
}

function formatDate(dt) {
	let year = dt.getFullYear();
	let month = dt.getMonth() + 1;
	let date = dt.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (date < 10) {
		date = "0" + date;
	}
	return year + "-" + month + "-" + date;
}





export default {
	order,
	returns,
	collection,
	Test,
	scen_collection,
	concern
}
