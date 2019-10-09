<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="tab">
			<view :class="{active:current == 0}" @click="currentTab(0)">所有</view>
			<view :class="{active:current == 1}" @click="currentTab(1)">待审核</view>
			<view :class="{active:current == 2}" @click="currentTab(2)">待打款</view>
			<view :class="{active:current == 3}" @click="currentTab(3)">已打款</view>
			<view :class="{active:current == 4}" @click="currentTab(4)">无效</view>
		</view>
		<!-- 提现明细 -->
		<view class="detail">
			<view class="de_head">
				<view class="de_dflex">
					<text class="col_black">提现到支付宝</text>
					<text class="col_red">+10.00元</text>
				</view>
				<view class="de_dflex">
					<text class="col_grey">2019-6-19&nbsp;&nbsp;16:56</text>
					<text class="col_ora">申请中</text>
				</view>
			</view>
			<view class="de_foot">
				<text>实际金额:10.00元&nbsp;&nbsp;手续费 :0.00元</text>
				
			</view>
		</view>
		<view class="bottom" v-if="false">
				<image src="../../../static/image/no_data.png" mode="widthFix"></image>
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
				title: '提现明细',
				current:0
			}
		},
		methods:{
			currentTab(i){
				this.current = i
			}
		}
	}
</script>

<style scoped>
	uni-page-body {
		width: 100%;
		height: 100%;
	}

	.content {
		width: 100%;
		height: 100%;
		background: #F2F2F2;
		/* position: relative; */
	}

	.tab {
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;
		padding: 20rpx 20rpx 0 20rpx;
		height: 82rpx;
	}

	.tab>view {
		font-size: 30rpx;
		color: #333333;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
	}
	.bottom {
		padding: 220rpx;
	}
	.bottom image{
		width: 310rpx;
		height: 310rpx;
		/* background-color: #0078FF; */
	}
	.detail{
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
	.detail .de_head{
		width: 100%;
		height: 130rpx;
		padding-top: 28rpx;
		border-bottom: 4rpx solid  #F2F2F2;
		box-sizing: border-box;
	}
	.detail .de_head .de_dflex{
		display: flex;
		justify-content: space-between;
	}
	.detail .de_foot{
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 30rpx;
		color: #666666;
		/* background-color: #0078FF; */
		
	}
	.tab .active {
		color: #1D9DFF;
		border-bottom: 6rpx solid #1D9DFF;
	}
	.col_black{
		font-size: 30rpx;
		color: #333333;
	}
	.col_red{
		color: #F2221F;
		font-size: 36rpx;
	}
	.col_grey{
		color: #999999;
		font-size: 24rpx;
	}
	.col_ora{
		color: #FF9749;
		font-size: 30rpx;
	}
</style>
