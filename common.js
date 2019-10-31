import service from './service.js'

const order = function(ref,self,url,wxUrl){ //支付调用
			console.log(self.payment_name)
	uni.showToast({
		icon:"none",
		title:ref.msg
	})
	if(self.payment_name == 'Alipay'){
		//当选择支付宝支付时
	   // #ifndef  APP-PLUS
		uni.showToast({
			 icon:'none',
			 title:'只能在APP内选择支付宝支付'
		})
		return
	   // #endif
	   
	   uni.showToast({
			icon:'none',
			title:'支付宝支付暂未开放'
	   })
		return
	}else if(self.payment_name == 'Weixin'){//当选择微信支付时
		// #ifdef H5  
	      
		let ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger"){ //判断是否是在微信内置浏览器打开
		let appId = ref.data.data.appId
		let timeStamp = ref.data.data.timeStamp
		let nonceStr = ref.data.data.nonceStr
		let package_id = ref.data.data.package
		let signType = ref.data.data.signType
		let paySign = ref.data.data.paySign
		console.log(signType)
		function onBridgeReady(appId,timeStamp,nonceStr,package_id,signType,paySign){
			   WeixinJSBridge.invoke(
					'getBrandWCPayRequest', {
					"appId":appId,     //公众号名称，由商户传入     
					"timeStamp":timeStamp,         //时间戳，自1970年以来的秒数     
					"nonceStr":nonceStr, //随机串     
					"package":package_id,     
					"signType":signType,         //微信签名方式：     
					"paySign":paySign //微信签名 
				},function(res){
					  if(res.err_msg == "get_brand_wcpay_request:ok" ){
						uni.redirectTo({
						 url:url
						})
						// 使用以上方式判断前端返回,微信团队郑重提示：
						//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
					} 
				}); 
			}
			if (typeof WeixinJSBridge == "undefined"){
			   if( document.addEventListener ){
				   document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
			   }else if (document.attachEvent){
				   document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
				   document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
			   }
			}else{
				onBridgeReady(appId,timeStamp,nonceStr,package_id,signType,paySign);
			}
	   }else{ //普通浏览器微信支付
			let string = encodeURI('http://wx.huanqiutongmall.com/h5/#/'+wxUrl)
			window.location.href = ref.data.data+'&redirect_url=' + string
	   }
		// #endif  
	   
	   
		// #ifdef  APP-PLUS
		uni.requestPayment({
		    provider: 'wxpay',
		    orderInfo:ref.data.data,//微信、支付宝订单数据
		    success: function (ref) {
			uni.redirectTo({
				url:url
			})
		   },
		   fail: function (err) {
				console.log('fail:' + JSON.stringify(err));
		   }
		});  
		// #endif
	   }else if(self.payment_name == 'WalletPay'){ //选择钱包支付时
			setTimeout(function(){
				uni.redirectTo({
					url:url
				})
			},1500)
		}else if(self.payment_name == 'BtPay'){ //选择版通支付时
			
			setTimeout(function(){
				uni.redirectTo({
					url:url
				})
			},1500)
			
		}else if(self.payment_name == ''){ //积分支付时
			setTimeout(function(){
				uni.redirectTo({
					url:url
				})
			},1500)
			
		}
}

const returns = function(that){
	// #ifdef H5
	let canBack = true  
	const pages = getCurrentPages()  
	// 有可返回的页面则直接返回，uni.navigateBack默认返回失败之后会自动刷新页面 ，无法继续返回  
	if (pages.length > 1) {  
		uni.navigateBack(1)  
		return;  
	}
	// vue router 可以返回uni.navigateBack失败的页面 但是会重新加载  
	let a = that.$router.go(-1)  
	// router.go失败之后则重定向到首页
	if (a == undefined) {  
		uni.reLaunch({  
			url: "/pages/index/index"  
		})  
	}  
	return;  
	// #endif  
	uni.navigateBack(1)
}

const collection = function(that,id){  //收藏
	that.service.entire(that,'get',that.service.api_root.common.Favor,{
		id:id,
		token:uni.getStorageSync('token')
	},function(self,res){
		if(res.code == 0){
			that.is_favor = !that.is_favor
		}
	})
}


const scen_collection = function(that,id){  //景点收藏
	that.service.entire(that,'post',that.service.api_root.subindex.scen_Favor,{
		id:id,
		token:uni.getStorageSync('token')
	},function(self,res){
		console.log(res)
		if(res.code == 0){
			that.is_favor = !that.is_favor
		}
	})
}

const concern = function(that,id){  //关注
	that.service.entire(that,'post',that.service.api_root.substrategy.concern,{
		for_uid:id,
		token:uni.getStorageSync('token')
	},function(self,res){
		console.log(res)
		if(res.code == 0){
			that.is_follow = !that.is_follow
		}else{
			uni.showToast({
				icon:'none',
				title:res.msg
			})
		}
	})
}

const Test = function(time){ //修改时间格式
	let t = time.slice(6, 19)
	let NewDtime = new Date(parseInt(t));
	return formatDate(NewDtime);
}
function formatDate(dt) {
	let year = dt.getFullYear();
	let month = dt.getMonth() + 1;
	let date = dt.getDate();
	return year + "-" + month + "-" + date;
}



const share = function(obj){
	// #ifdef APP-PLUS
		// 如下为分享内容定义，可根据业务需求自行定义
		var strShareUrl = obj.Url
		var strShareTitle = obj.Title
		var strShareSummary = obj.Summary
		var strShareImageUrl = obj.ImageUrl
		
		//以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心
		var screenWidth = plus.screen.resolutionWidth
		//以360px宽度屏幕为例，上下左右边距及2排按钮边距留25像素，图标宽度55像素，同行图标间的间距在360宽的屏幕是30px，但需要动态计算，以此原则计算4列图标分别的left位置
		//图标下的按钮文字距离图标5像素，文字大小12像素
		//底部取消按钮高度固定为44px
		//TODO 未处理横屏和pad，这些情况6个图标应该一排即可
		var margin = 25,
			iconWidth = 55,
			icontextSpace = 5,
			textHeight = 12
		var left1 = margin / 360 * screenWidth
		var iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
		if (iconSpace <= 5) { //屏幕过窄时，缩小边距和图标大小，再算一次
			margin = 15
			iconWidth = 40
			left1 = margin / 360 * screenWidth
			iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
		}
		var left2 = left1 + iconWidth + iconSpace
		var left3 = left1 + (iconWidth + iconSpace) * 2
		var left4 = left1 + (iconWidth + iconSpace) * 3
		var top1 = left1
		var top2 = top1 + iconWidth + icontextSpace + textHeight + left1
	// 	console.log("screenWidth: " + screenWidth + " ;height: " + plus.screen.resolutionHeight);
	// 	console.log("left1: " + left1);
	// 	console.log("iconSpace: " + iconSpace);
		var nvMask = new plus.nativeObj.View("nvMask", { //先创建遮罩层
			top: '0px',
			left: '0px',
			height: '100%',
			width: '100%',
			backgroundColor: 'rgba(0,0,0,0.2)'
		});
		nvMask.addEventListener("click", function() { //处理遮罩层点击
			nvMask.hide();
			nvImageMenu.hide();
		})
		var nvImageMenu = new plus.nativeObj.View("nvImageMenu", { //创建底部图标菜单
			bottom: '0px',
			left: '0px',
			// height: '264px',
			height: '184px',
			width: '100%',
			backgroundColor: 'rgb(255,255,255)'
		});
		//绘制底部图标菜单的内容
		nvImageMenu.draw([
			{
				tag: 'rect',//菜单顶部的分割灰线
				color: '#e7e7e7',
				position: {
					top: '0px',
					height: '1px'
				}
			},
			{
				tag: 'font',
				id: 'sharecancel',//底部取消按钮的文字
				text: '取消分享',
				textStyles: {
					size: '14px'
				},
				position: {
					bottom: '0px',
					height: '44px'
				}
			},
			{
				tag: 'rect',//底部取消按钮的顶部边线
				color: '#e7e7e7',
				position: {
					bottom: '45px',
					height: '1px'
				}
			},
			{
				tag: 'img',
				id: 'imgwechatfriend',
				src: '/static/sharemenu/wechatfriend.png',
				position: {
					top: top1,
					left: left1,
					width: iconWidth,
					height: iconWidth
				}
			},
			{
				tag: 'font',
				id: 'fontwechatfriend',
				text: '微信好友',
				textStyles: {
					size: textHeight
				},
				position: {
					top: top1 + iconWidth + icontextSpace,
					left: left1,
					width: iconWidth,
					height: textHeight
				}
			},
			{
				tag: 'img',
				id: 'imgwechatmoments',
				src: '/static/sharemenu/wechatmoments.png',
				position: {
					top: top1,
					left: left2,
					width: iconWidth,
					height: iconWidth
				}
			},
			{
				tag: 'font',
				id: 'fontwechatmoments',
				text: '微信朋友圈',
				textStyles: {
					size: textHeight
				},
				position: {
					top: top1 + iconWidth + icontextSpace,
					left: left2 - 2.5,
					width: iconWidth + 5,
					height: textHeight
				}
			},
			// {
			// 	tag: 'img',
			// 	id: 'imgweibo',
			// 	src: '/static/sharemenu/weibo.png',
			// 	position: {
			// 		top: top1,
			// 		left: left3,
			// 		width: iconWidth,
			// 		height: iconWidth
			// 	}
			// },
			// {
			// 	tag: 'font',
			// 	id: 'fontweibo',
			// 	text: '微博',
			// 	textStyles: {
			// 		size: textHeight
			// 	},
			// 	position: {
			// 		top: top1 + iconWidth + icontextSpace,
			// 		left: left3,
			// 		width: iconWidth,
			// 		height: textHeight
			// 	}
			// },
			// {
			// 	tag: 'img',
			// 	id: 'imgqq',
			// 	src: '/static/sharemenu/qq.png',
			// 	position: {
			// 		top: top1,
			// 		left: left4,
			// 		width: iconWidth,
			// 		height: iconWidth
			// 	}
			// },
			// {
			// 	tag: 'font',
			// 	id: 'fontqq',
			// 	text: 'QQ',
			// 	textStyles: {
			// 		size: textHeight
			// 	},
			// 	position: {
			// 		top: top1 + iconWidth + icontextSpace,
			// 		left: left4,
			// 		width: iconWidth,
			// 		height: textHeight
			// 	}
			// },
			{
				tag: 'img',
				id: 'imgcopyurl',
				src: '/static/sharemenu/copyurl.png',
				position: {
					// top: top2,
					// left: left1,
					top: top1,
					left: left3,
					width: iconWidth,
					height: iconWidth
				}
			},
			{
				tag: 'font',
				id: 'fontcopyurl',
				text: '复制',
				textStyles: {
					size: textHeight
				},
				position: {
					// top: top2 + iconWidth + icontextSpace,
					// left: left1,
					top: top1 + iconWidth + icontextSpace,
					left: left3,
					width: iconWidth,
					height: textHeight
				}
			},
			{
				tag: 'img',
				id: 'imgmore',
				src: '/static/sharemenu/more.png',
				position: {
					// top: top2,
					// left: left2,
					top: top1,
					left: left4,
					width: iconWidth,
					height: iconWidth
				}
			},
			{
				tag: 'font',
				id: 'fontmore',
				text: '更多',
				textStyles: {
					size: textHeight
				},
				position: {
					// top: top2 + iconWidth + icontextSpace,
					// left: left2,
					top: top1 + iconWidth + icontextSpace,
					left: left4,
					width: iconWidth,
					height: textHeight
				}
			},
			//如果想要增加更多按钮，请在这里继续添加，第二列还有2个空位
		])
		nvImageMenu.addEventListener("click", function(e) { //处理底部图标菜单的点击事件，根据点击位置触发不同的逻辑
			// console.log("click menu"+JSON.stringify(e));
			if (e.screenY > plus.screen.resolutionHeight - 44) { //点击了底部取消按钮
				nvMask.hide();
				nvImageMenu.hide();
			} else if (e.clientX < 5 || e.clientX > screenWidth - 5 || e.clientY < 5) {
				//屏幕左右边缘5像素及菜单顶部5像素不处理点击
			} else { //点击了图标按钮
				var iClickIndex = -1 //点击的图标按钮序号，第一个图标按钮的index为0
				var iRow = e.clientY < (top2 - (left1 / 2)) ? 0 : 1
				var iCol = -1
				if (e.clientX < (left2 - (iconSpace / 2))) {
					iCol = 0
				} else if (e.clientX < (left3 - (iconSpace / 2))) {
					iCol = 1
				} else if (e.clientX < (left4 - (iconSpace / 2))) {
					iCol = 2
				} else {
					iCol = 3
				}
				if (iRow == 0) {
					iClickIndex = iCol
				} else {
					iClickIndex = iCol + 4
				}
				console.log("点击按钮的序号: " + iClickIndex);
				if (iClickIndex >= 0 && iClickIndex <= 5) { //处理具体的点击逻辑，此处也可以自行定义逻辑。如果增减了按钮，此处也需要跟着修改
					var strProvider="",strScene=""
					switch (iClickIndex) {
						case 0:
							strProvider = "weixin"
							strScene = "WXSceneSession"
							break;
						case 1:
							strProvider = "weixin"
							strScene = "WXSenceTimeline"
							break;
						// case 2:
						// 	strProvider = "sinaweibo"
						// 	break;
						// case 3:
						// 	strProvider = "qq"
						// 	break;
						case 2:
							uni.setClipboardData({
								data: strShareUrl,
								complete() {
									uni.showToast({
										title: "已复制到剪贴板"
									})
								}
							})
							break;
						case 3:
							plus.share.sendWithSystem({
								content: strShareUrl,
							})
							break;
					}
					if (strProvider!="") { //点击了0-3序号的这4个按钮
						uni.share({
							provider: strProvider,
							scene:strScene,
							type: 0,
							href: strShareUrl,
							title: strShareTitle,
							summary: strShareSummary,
							imageUrl: strShareImageUrl,
							success: function(res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function(err) {
								console.log("fail:" + JSON.stringify(err));
							}
						})
					}
				}
			}
		})
		/* nvImageMenu.addEventListener("touchstart", function(e) {
			if (e.screenY > (plus.screen.resolutionHeight - 44)) {
				//TODO 这里可以处理按下背景变灰的效果
			}
		})
		nvImageMenu.addEventListener("touchmove", function(e) {
			//TODO 这里可以处理按下背景变灰的效果
			if (e.screenY > plus.screen.resolutionHeight - 44) {}
		})
		nvImageMenu.addEventListener("touchend", function(e) {
			//TODO 这里可以处理释放背景恢复的效果
		})
		*/
		// #endif
}




export default{
	order,
	returns,
	collection,
	Test,
	scen_collection,
	concern,
	share
}