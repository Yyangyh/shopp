	<!--我的分销 -- 佣金提现 -->
<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view>
			<view class="drawal">
				<text class="col_grey">可提现佣金 : <text class="col_black">200元</text></text>
				<text class="col_blue">全部提现</text>
			</view>
		</view>
		<view class="quota">
			<view class="quota_top">提现金额</view>
			<view class="quota_bottom">
				<text>¥</text>
				<input type="text" value="" placeholder="请输入提现金额"/></view>
		</view>
		<view class="way">
			<view class="col_grey">提现方式</view>
			<view class="alipay">
				<view class="alipay_img">
					<image src="../../../static/image/alipayicon.png" mode="widthFix"></image>
					<text>提现到支付宝</text>
				</view>
				<view class="circle">
					<image src="../../../static/image/circle.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="alipay">
				<view class="alipay_img">
					<image src="../../../static/image/cardicon.png" mode="widthFix"></image>
					<text>提现到银行卡</text>
				</view>
				<view class="circle">
					<image src="../../../static/image/circle.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="cash">
			<view class="cash_box">提现</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components: {
			returns
		},
		data() {
			return {
				title: '佣金提现',
				
			}
		}
	}
</script>

<style scoped>
	uni-page-body {
		width: 100%;
		height: 100%;
	}
	.content{
		width: 100%;
		height: 100%;
		background: #F2F2F2;
	}
	.drawal{
		display: flex;
		justify-content: space-between;
		padding: 20rpx ;
	}
	.quota{
		width: 100%;
		height: 190rpx;
		padding: 20rpx;
		box-sizing: border-box;
		color: #333333;
		background-color: #FFFFFF;
	}
	.quota .quota_top{
		
		font-size: 36rpx;
	}
	.quota .quota_bottom{
		font-size: 48rpx;
		display: flex;
		align-items: center;
		margin-top: 20rpx;
	}
	.quota .quota_bottom input{
		font-size: 44rpx;
	}
	.way{
		box-sizing: border-box;
		width: 100%;
		margin-top: 20rpx;
	}
	.way>view{
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		border-bottom:4rpx solid #F2F2F2;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #FFFFFF;
	}
	.alipay {
		display: flex;
		justify-content: space-between;
		font-size: 36rpx;
		color: #333333;
	}
	.alipay .alipay_img image{
		width: 64rpx;
		height: 64rpx;
		vertical-align: middle;
		margin-right: 20rpx;
	}
	.alipay .circle{
		width: 44rpx;
		height: 44rpx;
		
	}
	.alipay .circle image{
		width: 44rpx;
		height: 44rpx;
		vertical-align: middle;
	}
	.cash{
		width: 100%;
		box-sizing: border-box;
		padding:28rpx 20rpx;
	}
	.cash .cash_box{
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		background-color: #1D9DFF;
		color: white;
		font-size: 36rpx;
		border-radius: 44rpx;
	}
	.col_grey{
		font-size: 36rpx;
		color:#666666;
	}
	
	.col_black{
		color: black;
	}
	.col_blue{
		color: #02A7F0;
		font-size: 36rpx;
		font-weight: 500;
	}
</style>
