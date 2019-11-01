<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<view class="tab">
			<view class="tab_list" :class="{show:show == 0}" @click="show = 0">
				全部
			</view>
			<!-- <view class="tab_list" :class="{show:show == 1}" @click="show = 1">
				景点
			</view> -->
			<view class="tab_list" :class="{show:show == 2}" @click="show = 2">
				我的
			</view>
		</view>
		<view class="cou_box">
			<view class="cou_list">
				<view class="cou_test">
					<view class="cou_left">
						<view class="left_one">
							￥<text>100</text>优惠券名称
						</view>
						<view class="left_two">
							满减 满300减100
						</view>
						<view class="left_two">
							有效期：2019-05-04至2019-05-06
						</view>
					</view>
					
					<view class="cou_right">
						领取
					</view>
				</view>
				
			</view>
			<view class="cou_list">
				<view class="cou_test">
					<view class="cou_left">
						<view class="left_one">
							￥<text>100</text>优惠券名称
						</view>
						<view class="left_two">
							满减 满300减100
						</view>
						<view class="left_two">
							有效期：2019-05-04至2019-05-06
						</view>
					</view>
					
					<view class="cou_right already">
						已领取
					</view>
				</view>
				
			</view>
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
				title:'优惠券',
				show:''
			}
		},
		methods:{
			
			
		},
		
		onShow() {
			this.service.entire(this,'get',this.service.api_root.subuser.CouponList,{},function(self,res){
				console.log(res)
			})
		}
	}
</script>

<style scoped>
	.tab{
		display: flex;
		
	}
	.tab .tab_list{
		width: 50%;
		text-align: center;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 32rpx;
		border-bottom: 8rpx solid #fff;
	}
	.show{
		border-bottom-color: #1D9DFF !important;
	}
	.cou_box{
		margin-top: 10rpx;
	}
	.cou_box .cou_list{
		/* position: relative; */
		background: url('../../static/image/secondary/coupon.png') no-repeat;
		background-size: 100% 100%;
		width: 710rpx;
		height: 182rpx;
		display: flex;
		align-items: center;
		margin: 0 auto;
		margin-top: 30rpx;
	}
	.cou_box .cou_list .cou_test{
		/* position: absolute; */
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40rpx;
	}
	.cou_box .cou_list .cou_test .cou_left{
		color: #1D9DFF;
		font-size: 28rpx;
	}
	.cou_box .cou_list .cou_test .cou_left text{
		font-size:48rpx;
		margin-right: 16rpx;
	}
	.cou_box .cou_list .cou_test .cou_left .left_two{
		font-size: 24rpx;
	}
	
	.cou_box .cou_list .cou_test .cou_right{
		width: 142rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 60rpx;
		text-align: center;
		font-size: 30rpx;
		color: #FFFFFF;
		background: #1D9DFF;
	}
	.already{
		background: #999999 !important;
	}
</style>
