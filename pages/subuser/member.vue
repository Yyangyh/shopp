<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<!-- <view class="top_img">
			<image src="../../static/image/secondary/user6.png" mode="widthFix"></image>
			<view class="top_test">
				<view class="test_top">
					牛哄哄
				</view>
				<view class="test_middle"></view>
				<view class="test_bottom">
                    已拥有10 | 差300等级分升级成黄金贵宾
				</view>
			</view>
		</view> -->
		<view class="equity">
			<view class="eq_top">
				超级会员权益
			</view>
			<view class="eq_bottom">
				<view class="eq_list">
					<image src="../../static/image/secondary/Iqiyi.png" mode="widthFix"></image>
					<view class="list_top">
						爱奇艺VIP
					</view>
					<view class="list_bottom">
						黄金会员
					</view>
				</view>
				<view class="eq_list">
					<image src="../../static/image/secondary/rest.png" mode="widthFix"></image>
					<view class="list_top">
						贵宾休息室
					</view>
					<view class="list_bottom">
						免费1次
					</view>
				</view>
				
				<view class="eq_list">
					<image src="../../static/image/secondary/cancel.png" mode="widthFix"></image>
					<view class="list_top">
						无理由取消
					</view>
					<view class="list_bottom">
						订房安心
					</view>
				</view>
				<view class="eq_list">
					<image src="../../static/image/secondary/upgrade.png" mode="widthFix"></image>
					<view class="list_top">
						房型升级
					</view>
					<view class="list_bottom">
						免费1次
					</view>
				</view>
				<view class="eq_list">
					<image src="../../static/image/secondary/breakfast.png" mode="widthFix"></image>
					<view class="list_top">
						免费早餐
					</view>
					<view class="list_bottom">
						1份
					</view>
				</view>
				<view class="eq_list">
					<image src="../../static/image/secondary/refund.png" mode="widthFix"></image>
					<view class="list_top">
						无忧退票
					</view>
					<view class="list_bottom">
						退票险1份
					</view>
				</view>
				<view class="eq_list">
					<image src="../../static/image/secondary/check.png" mode="widthFix"></image>
					<view class="list_top">
						快速安检
					</view>
					<view class="list_bottom">
						免费8次
					</view>
				</view>
				<view class="eq_list">
					<image src="../../static/image/secondary/reimbursement.png" mode="widthFix"></image>
					<view class="list_top">
						报销凭证
					</view>
					<view class="list_bottom">
						免费4次
					</view>
				</view>
			</view>
		</view>
		<view class="bottom_img">
			<image src="../../static/image/secondary/opening.png" mode="widthFix" @click="jump('./threeuser/open_member')"></image>
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
				title:'会员中心',
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
			
		},
		
		onShow() {
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
	}
	
	.top_img {
		height: 186rpx;
		margin: 44rpx 28rpx;
		background: url(../../static/image/secondary/back.png) no-repeat;
		background-size: 100% 100%;
		display: flex;	
		align-items: center;
	}
	.top_img image{
		width: 100rpx;
		height: 100rpx;
		margin: 0 40rpx;
	}
	.top_img .top_test .test_top{
		color: #5B3E30;
		font-size: 32rpx;
	}
	.top_img .top_test .test_middle{
		height: 10rpx;
		width:90%;
		border-radius: 10rpx;
		background: #fff;
		margin: 12rpx 0;
	}
	.top_img .top_test .test_bottom{
		color: #B58438;
		font-size: 22rpx;
	}
	.equity image{
		height: 108rpx;
		width: 108rpx;
	}
	.equity .eq_top{
		padding: 0 52rpx;
		margin: 42rpx 0;
	}
	.equity .eq_bottom {
		display: flex;
		flex-wrap: wrap;
		padding: 0 60rpx;
	}
	.equity .eq_bottom .eq_list{
		text-align: center;
		width: 25%;
		margin-bottom: 52rpx;
	}
	.equity .eq_bottom .eq_list .list_top{
		color: #333333;
		font-size: 28rpx;
		font-weight: 600;
	}
	.equity .eq_bottom .eq_list .list_bottom{
		color: #999999;
		font-size: 22rpx;
	}
	.bottom_img{
		text-align: center;
		margin-top: 32rpx;
	}
	.bottom_img{
		width: 100%;
		height: 100rpx;
	}
</style>
