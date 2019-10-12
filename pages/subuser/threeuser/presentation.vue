<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<!-- 分销订单 -->
		<view class="pre_box">
			<view class="box_list" v-for="(item,index) in data">
				<view class="list_one">
					<image :src="item.avatar" mode="widthFix"></image>
					<view class="">
						{{item.user_name_view}}
					</view>
				</view>
				<view class="">
					支付方式：{{item.payment_name}}
				</view>
				<view class="">
					订单金额（元）：{{item.total_price}}
				</view>
				<view class="">
					退款金额（元）：{{item.refund_price}}
				</view>
				<view class="time">
					{{item.add_time_text}}
				</view>
			</view>
		</view>
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue'
	export default {
		components: {
			returns,
			uniLoadMore
		},
		data() {
			return {
				title: '分销订单',
				data:[],
				more:'more',
				page:1,
				loadRecord:true
			}
		},
		methods:{
			loadMore(){
				let page = this.page
				this.more = 'loading'
				this.service.entire(this,'post',this.service.api_root.subuser.threeuser.dis_order,{
					token:uni.getStorageSync('token'),
					page:page
				},function(self,res){
					console.log(res)
					let data = res.data.data
					self.data.push(...data)
					self.page = page + 1
					
					if(res.data.data.length < 10){
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
					self.more = 'more'
				})
			}
		},
		onReachBottom(){
			if(this.loadRecord == false) return
			this.loadMore()
		},
		onShow() {
			this.loadMore()
		}
	}
</script>

<style scoped>
	page{
		/* background: #F2F2F2; */
	}

	.content {
		width: 100%;
		height: 100%;
		font-size: 28rpx;
		/* position: relative; */
	}
	.pre_box .box_list{
		padding: 20rpx;
		border-bottom: 4rpx solid #eee;
	}
	.pre_box .box_list view{
		margin: 10rpx 0;
	}
	.pre_box .box_list .list_one{
		display: flex;
		align-items: center;
	}
	.pre_box .box_list .list_one image{
		height: 60rpx;
		width: 60rpx;
		border-radius: 30rpx;
		margin-right: 20rpx;
	}
	.pre_box .box_list .time{
		color: #999999;
		text-align: right;
		font-size: 24rpx;
	}
</style>
