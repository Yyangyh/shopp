<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="all">
			<view class="success">
				<image src="../../static/image/gou.png" mode=""></image>
				<view>评论成功</view>
			</view>
			<view class="word">
				坚持写真实、内容丰富的评价！
			</view>
			<view class="btn">
				<view class="btn1" @click="jump('/pages/index/index')">
					返回首页
				</view>
				<view class="btn1">
					查看评论
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		data(){
			return{
				title:'评论成功'
			}
		},
		methods:{
			jump(url){
				uni.reLaunch({
					url: url
				});
			}
		},
		components:{
			returns
		}
	}
</script>

<style>
	.all{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.success{
		margin: 84rpx auto 0;
		font-size: 32rpx;
		color: #1D9DFF;
		display: flex;
		align-items: center;
	}
	.success image{
		width: 40rpx;
		height: 40rpx;
		vertical-align: baseline;
		margin: 8rpx 15rpx 0 0;
	}
	.word{
		font-size: 24rpx;
		color: #333333;
		margin-top: 26rpx;
		margin-bottom: 78rpx;
	}
	.btn{
		display: flex;
		
	}
	.btn1{
		width: 210rpx;
		height: 75rpx;
		border-radius: 40rpx;
		border: 2rpx solid #1D9DFF;
		box-sizing: border-box;
		font-size: 28rpx;
		color: #1D9DFF;
		line-height: 75rpx;
		text-align: center;
	}
	.btn1:first-child{
		margin-right: 60rpx;
	}
</style>
