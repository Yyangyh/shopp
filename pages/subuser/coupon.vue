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
			<block v-if="show == 0">
				<view class="cou_list" v-for="(item,index) in data" :key='item.id'>
					<view class="cou_test">
						<view class="cou_left">
							<view class="left_one">
								￥<text>{{item.discount_value}}</text>{{item.type == 1?'折':'元'}}
							</view>
							<view class="left_two">
								{{item.use_limit_type_name}}
							</view>
							<!-- <view class="left_two">
								有效期：{{item.fixed_time_start}}至{{item.fixed_time_end}}
							</view> -->
						</view>
						
						<view class="cou_right" :class="{already:item.is_operable == 0}" @click="receive(index)">
							{{item.is_operable == 0?'已领取':'领取'}}
						</view>
					</view>
				</view>
			</block>
			<block v-else>
				<view class="cou_list" v-for="(item,index) in user_data" :key='item.id'>
					
					<view class="cou_test">
						<view class="cou_left">
							<view class="left_one">
								￥<text>{{item.coupon.discount_value}}</text>{{item.coupon.type == 1?'折':'元'}}
							</view>
							<view class="left_two">
								{{item.coupon.use_limit_type_name}}
							</view>
							<view class="left_two">
								有效期：{{item.time_start_text}}至{{item.time_end_text}}
							</view>
						</view>
						
						<!-- <view class="cou_right" :class="{already:item.coupon.is_operable == 0}">
							{{item.coupon.is_operable == 0?'已领取':'领取'}}
						</view> -->
					</view>
				</view>
			</block>
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
				show:'',
				data:'',
				user_data:''
			}
		},
		methods:{
			receive(index){
				this.service.entire(this,'get',this.service.api_root.subuser.Receive,{coupon_id:this.data[index].id},function(self,res){
					if(res.code == 0){
						self.data[index].is_operable = 0
					}else{
						uni.showToast({
							icon:'none',
							title:res.msg
						})
					}
				})
			},
			CouponList(){
				this.service.entire(this,'get',this.service.api_root.subuser.CouponList,{},function(self,res){
					self.data = res.data
				})
			},
			CouponUserList(){
				this.service.entire(this,'get',this.service.api_root.subuser.CouponUserList,{},function(self,res){
					self.user_data = res.data.not_use
				})
			}
		},
		
		onShow() {
			this.CouponList()
		},
		watch:{
			show(){
				if(this.show == 2){
					this.CouponUserList()
				}else{
					this.CouponList()
				}
			}
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
