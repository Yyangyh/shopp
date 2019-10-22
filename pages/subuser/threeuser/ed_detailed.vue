<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<view class="tab_box">
			<view class="box_list" v-for="(item,index) in data" :key='item.id'>
				<view class="list_one">
					业务类型：{{item.business_type_text}}
				</view>
				<view class="list_one">
					操作金额：{{item.operation_money}}
				</view>
				<view class="list_one">
					最新金额：{{item.latest_money}}
				</view>
				<view class="list_one">
					变更说明：{{item.msg}}
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
	export default{
		components:{
			returns
		},
		data() {
			return {
				title: '版通明细',
				data:''
			}
		},
		methods:{
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.threeuser.UserBtInfo,{},function(self,res){
				console.log(res)
				self.data = res.data.data
			})
		}
	}
</script>

<style scoped>
	.tab_box{
		font-size: 28rpx;
		color: #333333;
	}
	.tab_box .box_list{
		padding: 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.tab_box .box_list view{
		margin-bottom: 10rpx;
	}
	.tab_box .box_list .time{
		text-align: right;
		font-size: 24rpx;
		color: #999999;
	}
</style>
