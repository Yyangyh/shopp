<template>
	<view class="content">
		<image class="int_back" src="../../../static/image/threeLayers/int_detailed.png" mode="widthFix"></image>
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<image src="/static/image/threeLayers/return1.png" mode="widthFix" @click="returns()"></image>
			<text>积分明细</text>
			<text></text>
		</view>
		<view class="integral">
			<view class="int_top">
				<view :class="{show:show == 0}" @click="show = 0">
					全部
				</view>
				<view :class="{show:show == 1}" @click="show = 1">
					获得
				</view>
				<view :class="{show:show == 2}" @click="show = 2">
					消耗
				</view>
			</view>
			<view class="int_box">
				<view class="box_list">
					<view class="list_left">
						<view class="">
							会员签到
						</view>
						<view class="time">
							2019-9-20
						</view>
					</view>
					<view class="list_right">
						+2
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				show:0
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			}
		}
	}
</script>

<style scoped>
	page{
		background: #F1F1F1;
		padding-bottom: 40rpx;
	}
	.status_bar{
		background: rgba(0,0,0,0);
	}
	.int_back{
		position: absolute;
		z-index: 0;
		width: 100%;
	}
	.top{
		position: relative;
		height: 105rpx;
		padding: 0 44rpx;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #fff;
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		width: 40rpx;
		display: inline-block;
	}
	.integral{
		position: relative;
		margin: 0 20rpx;
		background: #fff;
		border-radius: 10rpx;
		
	}
	.integral .int_top{
		margin: 0 20rpx;
		font-size: 32rpx;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
	}
	.integral .int_top view{
		width: 33%;
		padding: 36rpx 0;
		text-align: center;
		border-bottom: 4rpx solid #F5F5F5;
	}
	.show{
		color: #1D9DFF;
		border-bottom-color: #1D9DFF !important;
	}
	.int_box{
		margin: 0 20rpx;
		min-height: 600rpx;
	}
	.int_box .box_list{
		padding: 28rpx 16rpx;
		font-size: 28rpx;
		color: #333333;
		border-bottom: 2rpx solid #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.int_box .box_list .list_left .time{
		color: #999999;
		font-size: 24rpx;
	}
	.int_box .box_list .list_right{
		color: #FF431D;
		font-weight:500;
		font-size: 32rpx;
	}
</style>