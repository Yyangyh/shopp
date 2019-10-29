<template>
	<view class="top">
		<image src="/static/image/return.png" mode="widthFix" @click="returns()"></image>
		<text>{{titles}}</text>
		<text></text>
	</view>
</template>

<script>
	export default{
		props:['titles'],
		data() {
			return {
				
			}
		},
		methods:{
			returns(){
				// #ifdef H5  
				let canBack = true  
				const pages = getCurrentPages()
				// 有可返回的页面则直接返回，uni.navigateBack默认返回失败之后会自动刷新页面 ，无法继续返回  
				if (pages.length > 1) {  
					uni.navigateBack(1)  
					return;  
				}  
				// vue router 可以返回uni.navigateBack失败的页面 但是会重新加载  
				let a = this.$router.go(-1)  
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
		}
		
	}
</script>

<style scoped>
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		top: var(--status-bar-height);
		z-index: 99;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
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
</style>
