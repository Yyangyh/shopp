<template>
	<view class="content">
		
		<view class="box">
			<text class="h1">游玩贴士</text>
			<view class="box-content" id="service">
				<view class="button">交通信息</view>
				<view class="button">景点入口</view>
				<view class="button">推荐玩法</view>
				<view class="button">餐饮攻略</view>
				<view class="button">禁止事项</view>
				<view class="button">安全提示</view>
				<view class="button">其他</view>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="box">
			<button type="primary">立即购买</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		position: relative;
		border: 0;
		margin: 0;
		padding: 0;
	}
	.content{
		width: 100%;
	}
	.tabbar{
		width: 100%;
		height: 80rpx;
		/* border: 1rpx solid #000; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tabbar text{
		width: 33.3%;
		line-height: 80rpx;
		text-align: center;
	}
	.tabbar text:last-of-type{
		border-bottom: 6rpx solid #1D9DFF;
	}
	.box,.write{
		width: 100%;
		background: #FFFFFF;
		
	}
	.write:last-of-type{
		padding-bottom: 20rpx;
	}
	.box .h1{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
		color: #000;
		font-size: 32rpx;
		font-weight: bold;
	}
	.box-content,.write-content{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.write-content{
		/* margin-top: 20rpx; */
	}
	.day{
		width: 98%;
		height: 60rpx;
		line-height: 60rpx;
		margin: 0 auto;
		background: #e8f5ff;
		font-size: 32rpx;
		font-weight: bold;
		color: #1D9DFF;
		text-align: center;
	}
	.time{
		width: 98%;
		margin: 0 auto;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #555;
	}
	.prompt{
		
		width: 95%;
		margin: 0 auto;
		text-align: left;
		font-size: 24rpx;
		color: #555;
	}
	#service{
		width: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: start;
		align-items: start;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.icon{
		width: 20%;
		height: 150rpx;
		margin: 20rpx 0rpx;
		font-size: 24rpx;
		color: #555;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: space-between;
		flex-direction: column;
	}
	.image{
		width: 100%;
		height: 130rpx;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.icon image{
		width: 80rpx;
		height: 80rpx;
	}
	.h2{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
		color: #000;
		font-size: 26rpx;
		font-weight: bold;
	}
	.h2 image{
		width: 50rpx;
		height: 80rpx;
	}
	.bgc{
		width: 100%;
		height: 16rpx;
		background: #F2F2F2;
	}
	.img{
		width: 100%;
	}
	.img image{
		width: 95%;
		height: 400rpx;
		margin: 50rpx 2.5% 0;
	}
	.more{
		width: 98%;
		height: 80rpx;
		margin: 20rpx 1% 0;
		border-top: 1rpx solid rgba(0,0,0,.2);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.more text{
		color: #555;
		font-size: 28rpx;
	}
	.more image{
		width: 30rpx;
		height: 50rpx;
		margin: 0;
	}
	.button{
		width: 25%;
		height: 60rpx;
		line-height: 60rpx;
		margin-right: 40rpx;
		margin-bottom: 30rpx;
		text-align: center;
		font-size: 24rpx;
		color: #1D9DFF;
		border-radius: 20rpx;
		background: #e8f5ff;
	}
	.box:last-of-type{
		position: absolute;
		bottom: 20rpx;
		height: 80rpx;
	}
	.box:last-of-type button{
		border-radius: 50rpx;
	}
</style>
