<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<!-- <view class="tab_top">
			<view class="tab_list">
				<image src="../../static/image/secondary/order.png" mode="widthFix"></image>
				<view class="">
					订单通知
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/secondary/trip.png" mode="widthFix"></image>
				<view class="">
					行程提醒
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/secondary/system.png" mode="widthFix"></image>
				<view class="">
					系统通知
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/secondary/activity.png" mode="widthFix"></image>
				<view class="">
					优惠活动
				</view>
			</view>
		</view> -->
		<view class="tab_bottom">
			<view class="list" v-for="(li,index) in list" :key="index">
				<view class="list_top">
					{{li.title}}
				</view>
				<view class="list_middle">
					{{li.detail}}
				</view>
				<view class="list_bottom">
					<text class="time">{{li.add_time_time}}</text>
					<!-- <text class="see">查看详情</text> -->
				</view>
			</view>
			<!-- <view class="list">
				<view class="list_top">
					订单支付提醒
				</view>
				<view class="list_middle">
					订单WL23163464563，长隆野生动物世界景点门票尚未完成支付
				</view>
				<view class="list_bottom">
					<text class="time">2019-06-01 12:34</text>
					<text class="see">查看详情</text>
				</view>
			</view>
			<view class="list">
				<view class="list_top">
					订单支付提醒
				</view>
				<view class="list_middle">
					订单WL23163464563，长隆野生动物世界景点门票尚未完成支付
				</view>
				<view class="list_bottom">
					<text class="time">2019-06-01 12:34</text>
					<text class="see">查看详情</text>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'系统通知',
				list:[]
			}
		},
		methods:{
			
			
		},
		
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.message,{
				
			},function(self,res){ //猜你喜欢
			    var res = res.data;
				self.list = res.data;
			    console.log(res)
			   })
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
	}
	.tab_top{
		display: flex;
		justify-content: space-between;
		margin: 38rpx 30rpx 48rpx 30rpx;
		text-align: center;
		padding: 30rpx 46rpx;
		font-size: 28rpx;
		border-radius:20rpx;
		box-shadow: 0 0 16rpx #ccc;
	}
	.tab_top image{
		height: 100rpx;
		width: 100rpx;
	}
	.tab_bottom{
		/* padding: 40rpx 0 80rpx 0; */
		/* margin: 0 30rpx 86rpx 30rpx; */
		margin: 0 30rpx ;
		/* box-shadow: 0 0 16rpx #ccc; */
		/* border-radius:20rpx; */
		
	}
	
	.tab_bottom .list{
		width: 100%;
		box-sizing: border-box;
		border-bottom: 2rpx solid #F4F4F4;
		padding: 20rpx 40rpx;
		border-radius: 20rpx;
		border: 2rpx solid #F1F1F1;
		margin: 30rpx 0;
		box-shadow: 0 0 18rpx #F1F1F1;
	}
	/* .tab_bottom .list:last-of-type{
		border-bottom: none;
	} */
	.tab_bottom .list_top{
		color: #333333;
		font-size: 32rpx;
	}
	.tab_bottom .list_middle{
		color: #666666;
		font-size: 24rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-top: 22rpx;
	}
	.tab_bottom .list_bottom{
		display: flex;
		justify-content: flex-end;
		margin-top: 22rpx;
		
	}
	.tab_bottom .list_bottom .time{
		color: #999999;
		font-size: 22rpx;
	}
		
	.tab_bottom .list_bottom .see{
		text-align: center;
		display: inline-block;
		height: 46rpx;
		line-height: 46rpx;
		width: 140rpx;
		background: #1D74FF;
		color: #fff;
		font-size: 22rpx;
		border-radius: 46rpx;
	}
</style>
