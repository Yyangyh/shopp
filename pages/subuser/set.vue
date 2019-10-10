<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<image src="../../static/image/return.png" mode="widthFix" @click="returns()"></image>
			<text>设置</text>
			<text></text>
		</view>
		<view class="tab">
			<view class="tab_list" @click="jump('../threeLayers/modify_phone')">
				<view class="">
					<image src="../../static/image/secondary/modifyPhone.png" mode="widthFix"></image>
					<text>修改手机号</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
			<view class="tab_list" @click="jump('../threeLayers/modifyPwd')">
				<view class="">
					<image src="../../static/image/secondary/modifyPwd.png" mode="widthFix"></image>
					<text>修改密码</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
			<view class="tab_list"  @click="jump('../threeLayers/setSecond')">
				<view class="">
					<image src="../../static/image/secondary/modifySecond.png" mode="widthFix"></image>
					<text>二级密码</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
			<view class="tab_list"  @click="jump('../threeLayers/resetSecond')">
				<view class="">
					<image src="../../static/image/secondary/forget.png" mode="widthFix"></image>
					<text>重置二级密码</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
			<view class="tab_list">
				<view class="">
					<image src="../../static/image/secondary/edition.png" mode="widthFix"></image>
					<text>版本</text>
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
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
				
			}
		},
		methods:{
			signOut(){
				uni.clearStorageSync('token')
				uni.reLaunch({
				    url: '../login/login'
				});
			},
			returns(){
				this.common.returns(this)
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		
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
