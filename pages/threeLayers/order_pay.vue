<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top">
			<view class="detail">
				<text class="h1">广州长隆野生动物世界</text>
				<text class="h2">需在60分钟内完成订单支付，否则该订单将自动取消。</text>
			</view>
			<view class="amount">
				<text>应付总额：</text>
				<text class="digital">￥200</text>
			</view>
		</view>
		<view class="interval">
			
		</view>
		<view class="pay">
			<view class="log">
				<text class="h10">支付方式</text>
			</view>
			<view class="log">			
				<image src="" mode="widthFix"></image>
				<view class="h9">银行卡</view>
			</view>
			<view class="log">
				<image src="" mode="widthFix"></image>
				<view class="h9">微信支付</view>
			</view>
			<view class="log">
				<image src="" mode="widthFix"></image>
				<view class="h9">支付宝</view>
			</view>
			<view class="log">
				<image src="" mode="widthFix"></image>
				<view class="h9">版通</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary">立即支付</button>
		</view>
		
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'订单支付',
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
		/* background: #F1F1F1; */
	}
	.top{
		width: 100%;
		box-sizing: border-box;
		margin-top: 20rpx;
		/* padding: 0 20rpx; */
		background: #FFFFFF;
	}
	.detail{
		width: 100%;
		box-sizing: border-box;
		color: #999999;
		border-bottom: 2rpx solid #F1F1F1;
		font-size: 28rpx;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
	}
	.h1{
		color: #000000;
		font-size: 34rpx;
		font-weight: bold;
		padding: 0 20rpx;
	}
	.h2{
		padding: 26rpx 20rpx;
	}
	.amount{
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		color: #999999;
		font-size: 28rpx;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.digital{
		color: #FF431D;
		font-size: 36rpx;
	}
	.interval{
		width: 100%;
		height: 30rpx;
		background: #F1F1F1;
	}
	.pay{
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.log{
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.log:first-of-type{
		border-bottom: 2rpx solid #F1F1F1;
	}
	.h9{
		width: calc(100% - 58rpx);
		height: 100%;
		margin-left: 38rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.h10{
		color: #000000;
	}
	.log image{
		width: 52rpx;
		height: 52rpx;
	}
	.btn{
		width: 100%;
		height: 90rpx;
		text-align: center;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-top: 84rpx;
		color: #FFFFFF;
		font-size: 36rpx;
	}
	.btn button{
		width: 100%;
		height: 90rpx;
		background: #1D74FF;
		color: #FFFFFF;
		font-size: 36rpx;
		border-radius: 90rpx;
	}
</style>view
