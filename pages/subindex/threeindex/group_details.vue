<template>
	<view class="content">
		<!--  -->
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="shop" @click="jump('../group_products?id='+goods.id)">
			<view class="pic">
				<image :src="goods.thumb" mode="aspectFill"></image>
			</view>
			<view class="quantity">
				<view class="name">
					{{goods.title}}
				</view>
				<view class="people">
					{{goods.groupnum}}人团
				</view>
				<view class="price">
					<text class="h1">¥{{goods.price}}/{{goods.goodsnum}}件</text>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="group">
			<!--  -->
			<view class="member">
				<view class="member_list" v-for="(item,index) in users"  :key='index'>
					<block v-if="item" >
						<image v-if="item.heads == 1" class="group_comman" src="../../../static/image/threeLayers/group.png" mode="widthFix"></image>
						<image v-if="item.avatar" class="group_comman1" :src="item.avatar" mode="widthFix"></image>
						
					</block>
					<block v-else>
						<image  src="../../../static/image/threeLayers/group01.png" mode="widthFix"></image>
					</block>
					
				</view>
				
			</view>
			<!--  -->
			<block v-if="data.status == 2">
				<view class="prompt">
					组团成功
				</view>
			</block>
			<block v-else>
				<view class="prompt">
					还差<text style="color: #F2221F;">{{data.num}}</text>人组团成功
				</view>
				<view class="countdown" v-if="second ">
					<text v-if="second > 0">剩余{{duration}}</text>
					<text v-else>{{duration}}</text>
				</view>
			</block>
			
		</view>
		<!--  -->
		<view class="notice">
			1下单开团/参团---2邀请好友参团---3人满拼团成功
		</view>
		<!--  -->
		<view class="details">
			<view class="title">
				<view>拼团详情</view>
				<!-- <view>商品详情</view> -->
			</view>
			<view class="list" v-for="(item,index) in order.users" :key='index'>
				<view class="information">
					<image :src="item.avatar" mode="widthFix"></image>
					<text>{{item.nickname}}</text>
				</view>
				<view class="time">
					<text>2019-09-12</text>
					<text>15:28:23 开团</text>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="bootom" v-if="data.endtime != 0 ">
			<view class="h9" @click="jump('../assemble')">
				首页
			</view>
			<view class="h8" v-if="data.pay_status == 1" @click="tips()">
				快邀请好友参团吧
			</view>
			<view class="h8" v-else-if="data.pay_status == 0" @click="jump('./group_order?type=groups&id='+goods.id+'&teamid='+data.teamid)">
				参与拼团
			</view>
			<view class="h8" v-else-if="data.pay_status == 2">
				团已满
			</view>
		</view>
	</view>
</template>

<script>
		var strShareUrl = ""
		var strShareTitle = ""
		var strShareSummary = ""
		var strShareImageUrl = ""
	// #ifdef APP-PLUS
		// 如下为分享内容定义，可根据业务需求自行定义
		
		
		
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
	import returns from '../../common/returns.vue'
	export default {
		components:{
			returns
		},
		data() {
			return {
				title: '团详情',
				data:'',
				goods:'',
				users:'',
				order:'',
				
				endtime:'',
				id:'',
				duration:'',
				second:'',
				show:true
			}
		},
		onBackPress() {
			//监听back键，关闭弹出菜单
			if (nvImageMenu.isVisible()) {
				nvImageMenu.hide()
				nvMask.hide()
				return true
			}
		},
		methods:{
			tips(){
				// #ifdef H5
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角选择分享！',
					showCancel:false,
				    success: function (res) {
				       
				    }
				});
				// #endif
				
				
				// #ifdef APP-PLUS
				nvMask.show()
				nvImageMenu.show() //5+应支持从底部向上弹出的动画
				// #endif
				
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onLoad(options) {
			this.id = options.id 
			strShareUrl = 'http://wx.huanqiutongmall.com/h5/#/pages/subindex/threeindex/group_details?id='+options.id 
			
			
		},
		onShow() {
			console.log(this.id)
			this.service.entire(this,'get',this.service.api_root.subindex.threeindex.my_group,{
				token:uni.getStorageSync('token'),
				teamid:this.id
			},function(self,res){
				console.log(res)
				self.data = res.data
				self.goods = res.data.goods
				strShareTitle = res.data.goods.title
				strShareImageUrl = res.data.goods.thumb
				// #ifdef H5
				
				let share_arr = {
					Title:strShareTitle,
					ImageUrl:strShareImageUrl
				}
				if (self.$wechat && self.$wechat.isWechat()) {  //H5微信公众号分享
					 self.$wechat.share(share_arr);
				}
				// #endif
				self.order = res.data.order
				let user = JSON.stringify(res.data.order.users)
					user = JSON.parse(user)
				self.users = user
				console.log(user)
				self.users.length = res.data.goods.groupnum
				self.endtime =  res.data.endtime
				let times = new Date().getTime().toString().substr(0,10)
				
				let second  = res.data.endtime - times
				
				self.timer = setInterval(function(){
					second --
					var days = Math.floor(second / 86400);
					var hours = Math.floor((second % 86400) / 3600);
					var minutes = Math.floor(((second % 86400) % 3600) / 60);
					var seconds = Math.floor(((second % 86400) % 3600) % 60);
					var duration = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
					self.duration = duration
					self.second = second
				},1000)
			})
		},
		onHide(){
			clearInterval(this.timer)
		},
		watch:{
			second(news,old){
				if(news < 0){
					
					this.duration = '拼团订单已过期'
					clearInterval(this.timer)
				}
			},
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		background: #F2F2F2;
	}
	.shop{
		/* width: 100%; */
		height: 240rpx;
		padding-left: 5%;
		background: #FFFFFF;
		margin-top: 2rpx;
		display: flex;
		align-items: center;
	}
	.pic{
		width: 170rpx;
		height: 170rpx;
		background: #00BFFF;
		margin-right: 36rpx;
	}
	.pic image{
		width: 170rpx;
		height: 170rpx;
	}
	.quantity{
		height: 170rpx;
	}
	.name{
		color: #333333;
		font-size: 30rpx;
		font-weight: bold;
	}
	.people{
		margin: 10rpx 0;
		color: #FC9429;
		font-size: 30rpx;
	}
	.h1{
		color: #F2221F;
		font-size: 30rpx;
	}
	.group{
		width: 100%;
		height: 450rpx;
		background: #FFFFFF;
		margin-top: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.member{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.member_list,.member_list image{
		width: 88rpx;
		height: 96rpx;
	}
	
	.member_list{
		margin: 10rpx 20rpx;
		position: relative;
	}
	.member_list .group_comman{
		height: 90rpx;
		width: 90rpx;
		position: absolute;
		z-index: 99;
		bottom: -30rpx;
		left: 0;
	}
	.member_list .group_comman1{
		border-radius: 50%;
		top: 0;
		left: 0;
		z-index: 88;
		position: absolute;
	}
	/* .member_list:first-of-type,.member_list:first-of-type image{
		width: 124rpx;
		height: 124rpx;
	} */
	
	.prompt{
		margin: 20rpx 0;
		color: #333333;
		font-size: 24rpx;
	}
	.countdown{
		color: #F2221F;
		font-size: 28rpx;
	}
	.countdown text{
		border-radius: 5rpx;
		padding: 5rpx;
		margin: 0 5rpx;
		background: #F2221F;
		color: #FFFFFF;
	}
	.notice{
		width: 100%;
		height: 104rpx;
		color: #666666;
		font-size: 26rpx;
		background: #FFFFFF;
		margin-top: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.details{
		width: 100%;
		background: #FFFFFF;
		margin-top: 10rpx;
	}
	.title{
		width: 100%;
		height:104rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 4rpx solid #F2F2F2;
	}
	.title view{
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 104rpx;
		color: #333333;
		font-size: 30rpx;
		
	}
	/* .title view:first-of-type{
		height: 94rpx;
		color: #1D9DFF;
		border-bottom: 10rpx solid #1D9DFF;
	} */
	.list{
		width: 90%;
		height: 100rpx;
		margin: 0 auto;
		border-bottom: 4rpx solid #F2F2F2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.information{
		color: #666666;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.time{
		color: #666666;
		font-size: 24rpx;
		
	}
	.time text{
		margin: 0 10rpx;
	}
	.information image{
		width: 72rpx;
		height: 72rpx;
		margin-right: 20rpx;
		border-radius: 50%;
	}
	.bootom{
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.h9{
		width: 30%;
		height: 100%;
		background: #FFFFFF;
		color: #1D9DFF;
		text-align: center;
		line-height: 100rpx;
	}
	.h8{
		width: 70%;
		height: 100%;
		background: #1D9DFF;
		color: #FFFFFF;
		text-align: center;
		line-height: 100rpx;
	}
</style>
