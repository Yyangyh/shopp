<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="dis_box">
			<view class="box_list" v-for="(item,index) in data">
				<view class="">
					订单金额：{{item.total_price}}
				</view>
				<view class="">
					收益金额（元）：{{item.profit_price}}
				</view>
				<view class="">
					当前级别：{{item.level}}
				</view>
				<view class="">
					提成比例：{{item.rate}}%
				</view>
				<view class="time">
					{{item.add_time_text}}
				</view>
			</view>
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
				title:'佣金明细',
				data:''
			}
		},
		methods: {
			
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.threeuser.dis_profit,{
				token:uni.getStorageSync('token')
			},function(self,res){
				console.log(res)
				self.data = res.data.data
			})
		}
	}
</script>

<style scoped>
	page{
		background: #F2F2F2;
	}
	.content{
		width: 100%;
		height: 100%;
		
	}
	.dis_box{
		margin: 0 20rpx;
		font-size: 32rpx;
	}
	.dis_box .box_list{
		height: 240rpx;
		border-radius: 10rpx;
		margin-top: 20rpx;
		padding: 20rpx;
		background: #fff;
		box-shadow: 1px 10px 3px #eee;
	}
	.dis_box .box_list view{
		margin-bottom: 10rpx;
		font-size: 28rpx;
		color: #333;
	}
	.dis_box .box_list .time{
		text-align: right;
		font-size: 26rpx;
		color: #999;
	}
</style>
