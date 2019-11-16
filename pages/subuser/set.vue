<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @click="returns()">
				<image src="../../static/image/return.png" mode="widthFix" ></image>
			</view>
			<text>设置</text>
			<text></text>
		</view>
		<view class="tab">
			<view class="tab_list" @click="jump('../threeLayers/modify_phone')" v-if="wxlogin == ''">
				<view class="">
					<image src="../../static/image/secondary/modifyPhone.png" mode="widthFix"></image>
					<text>修改手机号</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
			<view class="tab_list" @click="jump('../threeLayers/modifyPwd')" v-if="wxlogin == ''">
				<view class="">
					<image src="../../static/image/secondary/modifyPwd.png" mode="widthFix"></image>
					<text>修改密码</text>
				</view>
				
				<image src="../../static/image/go.png" mode=""></image>
			</view>
			<view class="tab_list"  @click="jump('../threeLayers/setSecond')" v-if="wxlogin != ''">
				<view class="">
					<image src="../../static/image/secondary/modifySecond.png" mode="widthFix"></image>
					<text>微信绑定手机号</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
			<!-- <view class="tab_list"  @click="jump('../threeLayers/resetSecond')">
				<view class="">
					<image src="../../static/image/secondary/forget.png" mode="widthFix"></image>
					<text>重置二级密码</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view> -->
			<!-- #ifdef APP-PLUS -->
			<view class="tab_list" @click="testing()">
				<view class="">
					<image src="../../static/image/secondary/edition.png" mode="widthFix"></image>
					<text>版本{{current_version}}</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
			<!-- #endif -->
		</view>
		<button  @click="signOut()">退出登录</button>
		
		<view class="copyright">
			版权所有（C）文旅世家
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				wxlogin:'',
				current_version:''
			}
		},
		methods:{
			signOut(){
				this.service.entire(this,'post',this.service.api_root.login.logout,{},function(self,res){
					console.log(res)
				})
				uni.clearStorageSync()
				uni.switchTab({
					url:'../index/index'
				})
			},
			returns(){
				this.common.returns(this)
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			// #ifdef APP-PLUS
			testing(){
				this.service.entire(this, 'get', this.service.api_root.common.version, {}, function(self, res) {  //APP 热更新
					plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) { //这里用 plus.runtime.getProperty() 来获取相关信息。
						if (widgetInfo.version != res.data.version) {
							uni.showModal({
							    title: '提示',
							    content: '检测到新版本，是否确定更新？',
							    success: function (res) {
							        if (res.confirm) {
										uni.showLoading({
										    title: '下载中',
											mask:true
										});
							           uni.downloadFile({
							           	url: self.service.api_root.common.version_wgt,
							           	success: (downloadResult) => {
							           		uni.showLoading({
							           		    title: '安装中',
												mask:true
							           		});
							           		if (downloadResult.statusCode === 200) {
							           			plus.runtime.install(downloadResult.tempFilePath, {
							           				force: true //强制安装
							           			}, function() {
													uni.hideLoading();
							           				plus.runtime.restart();
							           			}, function(e) {
													uni.hideLoading();
							           				console.log(e)
							           
							           			});
							           		}
							           	}
							           });
							        } else if (res.cancel) {
							            console.log('用户点击取消');
										
							        }
							    }
							});
						}else{
							uni.showToast({
								icon:'none',
								title:'当前版本已是最新版本'
							})
						}
					});
					
				})
			}
			// #endif
		},
		onShow() {
			this.wxlogin  = uni.getStorageSync('wxlogin')
			// #ifdef APP-PLUS
			this.current_version = plus.runtime.version
			// #endif
			console.log(this.wxlogin)
		}
	}
</script>

<style scoped>
	.content{
		padding-top: 0;
	}
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		width: 40rpx;
		display: inline-block;
	}
	.tab {
		margin-top: 14rpx;
	}
	.tab .tab_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 88rpx;
		font-weight:400;
		color: #333333;
		font-size: 30rpx;
		margin: 0 30rpx;
		border-bottom: 2rpx solid #F4F4F4;
		padding: 0 38rpx 0 12rpx;
	}
	.tab .tab_list image{
		height: 32rpx;
		width: 32rpx;
	}
	.tab .tab_list view{
		display: flex;
		align-items: center;
	}
	.tab .tab_list view text{
		margin-left: 32rpx;
	}
	button{
		background: #1D74FF;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 90rpx;
		margin: 104rpx 30rpx;
	}
	.copyright{
		text-align: center;
		font-size: 24rpx;
		color: #333333;
	}
</style>
