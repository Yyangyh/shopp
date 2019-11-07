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
		<uni-load-more :status="more"></uni-load-more>
		
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue'
	export default{
		components:{
			returns,
			uniLoadMore
		},
		data() {
			return {
				title: '版通明细',
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
				this.service.entire(this,'post',this.service.api_root.subuser.threeuser.UserBtInfo,{page:page},function(self,res){
					console.log(res)
					
					let data = self.data
					data.push(...res.data.data)
					self.data = data
					self.page = page + 1
					self.more = 'more'
					if(res.data.data.length < 10){
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
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
