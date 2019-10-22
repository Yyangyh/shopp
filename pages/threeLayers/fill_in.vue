<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="date">
			<view class="h1">
				使用日期
			</view>

			<view class="package">
				<view class="date_content">
					<view class="box">
						<view class="boxs">
							<text>今天</text>
							<text>09-11</text>
							<text>不可订</text>
						</view>
						<view class="boxs">
							<text>明天</text>
							<text>09-12</text>
							<text class="h2">￥100</text>
						</view>
						<view class="boxs">
							<text>后天</text>
							<text>09-13</text>
							<text class="h2">￥100</text>
						</view>
						<view class="boxs">
							<text>更多</text>
							<text>日期</text>
							<text class="h2">￥100<text class="ll">起</text></text>
						</view>
					</view>
					<view class="title">
						<image src="../../static/image/threeLayers/title.png" mode="widthFix"></image>请先选择使用日期
					</view>
				</view>
			</view>

			<view class="price">
				<text class="h3">成人票（可携带1名1.5米以下儿童入园）</text>
				<text class="h2">￥100</text>
			</view>
			<view class="num">
				<text>购买须知</text>
				<view class="num_right">
					<view class="less">-</view>
					<text>1</text>
					<view class="plus">+</view>
				</view>
			</view>
			<view class="prompt">
				最多可购20份
			</view>
		</view>
		<view class="information">
			<view class="log">
				<text>取票信息</text>
				<text class="h4">须填写<text class="h5">1个</text>取票人</text>
			</view>
			<view class="log">
				<text>姓名</text>
				<input type="text" placeholder="须与证件上的名字一样" />
			</view>
			<view class="log">
				<text>手机</text>
				<input type="text" placeholder="输入手机号" />
			</view>
		</view>
		<view class="offer">
			<view class="offer_name">
				<image src="../../static/image/coupon.png" mode="widthFix"></image>
				<text>优惠券</text>
			</view>
			<view class="icon">
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="">

		</view>
		<view class="button">
			<view class="button_name">
				<text>需支付</text>
				<text class="h5">￥100</text>
			</view>
			<button class="btn" type="primary" @click="jump()">去结算</button>
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
				title:'订单填写',
			}
		},
		methods:{
			jump(){
				uni.navigateTo({
					url:'/pages/threeLayers/order_pay'
				})
			}
		},
		onLoad(options) {
			this.service.entire(this,'get',this.service.api_root.threeLayers.scen_ConfirmDetail,{
				ResourceIDList:options.id,
				end_date:'2019-10-25'
			},function(self,res){
				console.log(res)
			})
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #F1F1F1;
	}
	
	.date {
		width: 100%;
		background: #FFFFFF;
		overflow: hidden;
		margin-bottom: 8rpx;
		/* box-sizing: border-box;
		padding: 0 20rpx; */
	}

	.h1 {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin: 26rpx 0;
		font-size: 34rpx;
		color: #000000;
	}

	.package {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
	}

	.date_content {
		width: 100%;
		height: 252rpx;
		box-sizing: border-box;
		background: #F0F9FF;
		padding: 28rpx 20rpx;
		border: 1px solid #A1D6FF;
		border-radius: 10rpx;
	}

	.box {
		width: 100%;
		height: 150rpx;
		box-sizing: border-box;
		/* padding: 0 20rpx; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.boxs {
		width: 150rpx;
		height: 150rpx;
		border: 2rpx solid #A1D6FF;
		border-radius: 10rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #1D9DFF;
		font-size: 28rpx;
	}

	.boxs:first-of-type {
		background: #F1F1F1;
		border: 2rpx solid #CCCCCC;
		color: #999999;
	}

	.h2 {
		color: #FF431D;
	}

	.ll {
		color: #999999;
	}

	.title {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 24rpx;
		color: #FF431D;
		margin-top: 24rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.title image {
		width: 28rpx;
		height: 28rpx;
		margin-right: 6rpx;
	}

	.price {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin: 40rpx 0 26rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.h3 {
		font-size: 30rpx;
		color: #000000;
	}

	.num {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-bottom: 36rpx;
		color: #1D9DFF;
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.num_right {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.num_right text {
		margin: 0 32rpx;
		color: #000000;
		font-size: 30rpx;
	}

	.less {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		color: #666666;
		border: 2rpx solid #666666;
		text-align: center;
		line-height: 44rpx;
	}

	.plus {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		color: #1D9DFF;
		border: 2rpx solid #1D9DFF;
		text-align: center;
		line-height: 44rpx;
	}

	.prompt {
		width: 100%;
		height: 88rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		font-size: 28rpx;
		color: #999999;
		background: #FFFEEF;
		line-height: 88rpx;
	}

	.information {
		width: 100%;

	}

	.log {
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		font-size: 30rpx;
		color: #000000;
		background: #FFFFFF;
		margin-bottom: 2rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.log input {
		margin-left: 28rpx;
	}

	.uni-input-placeholder {
		font-size: 24rpx;
		color: #DDDDDD;
	}

	.h4 {
		color: #999999;
		font-size: 24rpx;
		margin-left: 28rpx;
	}

	.h5 {
		color: #FF431D;
	}

	.offer {
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-top: 8rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.offer_name {
		color: #000000;
		font-size: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.offer_name image {
		width: 32rpx;
		height: 24rpx;
		margin-right: 20rpx;
	}

	.icon image {
		width: 26rpx;
		height: 26rpx;
	}

	.button {
		width: 100%;
		height: 120rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
	}

	.button_name {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button_name text {
		color: #666666;
		font-size: 36rpx;
	}

	.button_name .h5 {
		color: #FF431D;
		margin-left: 24rpx;
	}

	.button button {
		width: 224rpx;
		height: 90rpx;
		color: #FFFFFF;
		font-size: 36rpx;
		text-align: center;
		line-height: 90rpx;
		background: #1D74FF;
		border-radius: 90rpx;
		padding: 0;
		margin: 0;
	}
/* 这个是选择后的颜色变化 */
	.choose {
		background: #1D9DFF;
		color: #FFFFFF;
	}
</style>
