<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<view class="amount">
			<view class="box">
				<text>0.00</text>
				<text>累计佣金（元）</text>
			</view>
		</view>
		<view class="features">
			<view class="list">
				<view class="name">
					<image src="../../../static/image/secondary/list_01.png" mode="widthFix"></image>
					<text>可提现佣金</text>
				</view>
				<view class="money">
					20.78 元
				</view>
			</view>
			<view class="list">
				<view class="name">
					<image src="../../../static/image/secondary/list_02.png" mode="widthFix"></image>
					<text>可提现佣金</text>
				</view>
				<view class="money">
					20.78 元
				</view>
			</view>
			<view class="list">
				<view class="name">
					<image src="../../../static/image/secondary/list_03.png" mode="widthFix"></image>
					<text>可提现佣金</text>
				</view>
				<view class="money">
					20.78 元
				</view>
			</view>
			<view class="list">
				<view class="name">
					<image src="../../../static/image/secondary/list_04.png" mode="widthFix"></image>
					<text>可提现佣金</text>
				</view>
				<view class="money">
					20.78 元
				</view>
			</view>
			<view class="list">
				<view class="name">
					<image src="../../../static/image/secondary/list_05.png" mode="widthFix"></image>
					<text>可提现佣金</text>
				</view>
				<view class="money">
					20.78 元
				</view>
			</view>
			<view class="list">
				<view class="name">
					<image src="../../../static/image/secondary/list_06.png" mode="widthFix"></image>
					<text>可提现佣金</text>
				</view>
				<view class="money">
					20.78 元
				</view>
			</view>
		</view>
		<view class="consent">
			<text class="h1">用户须知</text>
			<text class="h2">买家确认收货后,立即获得分销佣金</text>
			<text class="h3">注意：可用佣金<text style="color: #F2221F;">1元</text>后才能申请提现</text>
		</view>
		<view class="button">
			<button type="primary">提现</button>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components:{
			returns
		},
		data() {
			return {
				title:'佣金'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 100%;
		background: #F2F2F2;
		
	}
	.amount{
		width: 100%;
		height: 316rpx;
		background: #FFFFFF;
		overflow: hidden;
	}
	.box{
		height: 256rpx;
		box-sizing: border-box;
		margin: 30rpx 30rpx;
		background: #1D9DFF;
		border-radius: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-shadow: 0 5rpx 20rpx #1D9DFF4D;
	}
	.box text{
		color: #FFFFFF;
		font-size: 36rpx;
		font-weight: bold;
	}
	.box text:first-of-type{
		font-size: 60rpx;
	}
	.features{
		width: 100%;
		margin: 18rpx auto;
	}
	.list{
		width: 100%;
		height: 94rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 0 26rpx;
		margin-bottom: 2rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.name{
		color: #666666;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}
	.name image{
		width: 40rpx;
		height: 40rpx;
		margin-right: 22rpx;
	}
	.money{
		color: #F2221F;
		font-size: 36rpx;
	}
	.consent{
		width: 100%;
		height: 162rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		box-sizing: border-box;
		padding: 0 32rpx;
	}
	.h1{
		color: #333333;
		font-size: 30rpx;
		font-weight: bold;
	}
	.h2,.h3{
		color: #666666;
		font-size: 24rpx;
	}
	.button{
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		box-sizing: border-box;
		padding: 0 34rpx;
		margin-top: 26rpx;
	}
	.button button{
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		background: #1D9DFF;
		color: #FFFFFF;
		font-size: 36rpx;
		border-radius: 90rpx;
	}
</style>
