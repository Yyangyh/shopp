<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top_img">
			<!-- 顶部图片 -->
		</view>
		<view class="card padding">
			<view class="theme">
				北京旅游卡套餐优惠卡
			</view>
			<view class="theme_card">
				<view class="card_name">
					电子卡
				</view>
				<view class="place">
					故宫
				</view>
				<view class="place">
					故宫
				</view>
			</view>
		</view>
		<view class="discount">
			<view class="buy">
				<view class="buy_left">
					购卡优惠
				</view>
				<view class="buy_right">
					<view class="buy_detail">
						<view class="text">
							买卡即赠
						</view>
						<view class="words">
							北京门票玩乐
						</view>

					</view>
					<view class="buy_detail">
						<view class="text">
							超值换购
						</view>
						<view class="words">
							超级会员
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 套餐明细 -->
		<view class="menu">
			<view class="menu_top" @click="isShow = !isShow">
				<view class="menu_title">
					套餐明细
				</view>
				<image src="../../static/image/arrowright.png" mode=""></image>
			</view>
			<view class="menu_details" v-if="isShow">
				<view class="menu_details_box">
					<view>北京故宫颐和园成人票×1</view>
					<view>北京故宫颐和园成人票×1</view>
					<view>北京故宫颐和园成人票×1</view>
					<view>北京故宫颐和园成人票×1</view>
					<view>北京故宫颐和园成人票×1</view>
				</view>
			</view>
		</view>
		<view class="time">
			<view class="validity">
				<view class="validity_title">
					套餐明细
				</view>
				<image src="../../static/image/arrowright.png" mode=""></image>
			</view>
		</view>
		<view class="time">
			<view class="validity">
				<view class="validity_title">
					购买须知
				</view>
				<image src="../../static/image/arrowright.png" mode=""></image>
			</view>
		</view>
		<!-- 产品详细  -->
		<view class="pruduct">
			产品详细
		</view>
		<view class="produce">
			<image src="../../static/image/produce.png" mode=""></image>
		</view>
		<view class="footer">
			<view class="money">
				<text class="need_pay">需支付</text>
				<text class="account">￥</text>
				<text class="account_big">2988</text>
			</view>
			<view class="pay">
				立即购买
			</view>
		</view>
		<view class="bottom"></view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue';
	export default {
		data() {
			return {
				title: '北京旅游卡套餐优惠卡',
				isShow: false
			}
		},
		components: {
			returns
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}

	.top_img {
		width: 718rpx;
		height: 300rpx;
		margin: 19rpx 16rpx 38rpx;
		background: #00D3B3;
	}

	.padding {
		padding: 0 27rpx;
		box-sizing: border-box;
	}

	.theme {
		font-size: 28rpx;
		font-weight: bold;
		color: #333333;
	}

	.theme_card {
		display: flex;
		align-items: center;
		margin-top: 21rpx;
		padding-bottom: 32rpx;
		border-bottom: 4rpx solid #F4F4F4;
	}

	.card_name {
		margin-right: 23rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.place {
		width: 60rpx;
		height: 27rpx;
		text-align: center;
		line-height: 27rpx;
		color: #00D3B3;
		border-radius: 10rpx;
		font-size: 24rpx;
		border: 2rpx solid #00D3B3;
		margin: 0 10rpx;
	}

	.discount {
		width: 100%;
		height: 158rpx;
		padding: 27rpx 27rpx 0rpx;
		box-sizing: border-box;
	}

	.buy {
		display: flex;
		padding-bottom: 30rpx;
		border-bottom: 4rpx solid #F4F4F4;
	}

	.buy .buy_left {
		width: 160rpx;
		font-size: 28rpx;
		color: #999999;
	}

	.buy_detail {
		display: flex;
		align-items: center;
	}

	.buy_detail:first-child {
		margin-bottom: 25rpx;
	}

	.buy_right .buy_detail .text {
		width: 110rpx;
		height: 30rpx;
		text-align: center;
		line-height: 30rpx;
		background: rgb(232, 245, 255);
		font-size: 24rpx;
		color: #1D9DFF;
		margin-right: 31rpx;
		padding: 4rpx 10rpx;
	}

	.buy_right .buy_detail .words {
		font-size: 28rpx;
		color: #333333;
	}

	.menu {}

	.menu_top {
		display: flex;
		padding: 20rpx 26rpx 20rpx 28rpx;
		align-items: center;
		box-shadow: 0 6rpx 6rpx #F4F4F4;
	}

	.menu_title {
		box-sizing: border-box;
		width: 100%;
		font-size: 28rpx;
		color: #333333;
	}

	.menu_top image {
		width: 16rpx;
		height: 31rpx;
	}

	.menu_details {
		width: 100%;
		padding: 16rpx 28rpx 0;
		box-sizing: border-box;
		font-size: 26rpx;
		color: #333333;
	}

	.menu_details_box {
		padding-bottom: 8rpx;
		border-bottom: 4rpx solid #F4F4F4;
	}

	.menu_details_box>view {
		height: 54rpx;
		line-height: 54rpx;
	}

	.time {
		width: 100%;
		height: 80rpx;
		padding: 0 28rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.time .validity {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 4rpx solid #F4F4F4;
	}

	.validity image {
		width: 16rpx;
		height: 31rpx;
	}

	.validity_title {
		color: #333333;
		font-size: 28rpx;
	}

	.pruduct {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 30rpx;
		color: #333333;
		background: #F2F2F2;
	}

	.produce {
		width: 100%;
		height: 1120rpx;

	}

	.produce image {
		width: 100%;
		height: 1120rpx;
	}
	.bottom{
		width: 100%;
		height: 130rpx;
	}
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120rpx;
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		padding: 0 18rpx 0 40rpx;
		background: #FFFFFF;
	}
	.footer .money{
		height: 120rpx;
		line-height: 120rpx;
	}
	.need_pay{
		font-size: 28rpx;
		color: #666666;
		margin-right: 12rpx;
	}
	.account{
		font-size: 28rpx;
		color: #FF431D;
	}
	.account_big{
		font-size: 32rpx;
		color: #FF431D;
	}
	.pay{
		width: 196rpx;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		border-radius: 44rpx;
		font-size: 28rpx;
		background: #1D74FF;
		color: #FFFFFF;
	}
</style>
