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
				<view :class="{show:show == -1}" @click="choice(-1)">
					全部
				</view>
				<view :class="{show:show == 0}" @click="choice(0)">
					获得
				</view>
				<view :class="{show:show == 1}" @click="choice(1)">
					消耗
				</view>
			</view>
			<view class="int_box">
				<view class="box_list" v-for="(item,index) in data" :key='item.id'>
					<view class="list_left">
						<view class="">
							{{item.msg}}
						</view>
						<view class="time">
							{{item.add_time_time}}
						</view>
					</view>
					<view class="list_right">
						{{item.new_integral - item.original_integral}}
					</view>
				</view>
				
			</view>
			<uni-load-more :status="more"></uni-load-more>
		</view>
		
	</view>
</template>

<script>
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue'
	export default{
		components:{
			uniLoadMore
		},
		data() {
			return {
				show:-1,
				data:[],
				more:'more',
				page:1,
				loadRecord:true
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
			choice(status){
				this.show = status
				this.loadRecord = true
				this.page = 1
				let data = {
					token:uni.getStorageSync('token'),
					is_more:1,
					page:1
				}
				if(status != -1) data.type = status
				this.service.entire(this,'post',this.service.api_root.subuser.UserIntegral,data,function(self,res){
					self.data = res.data.data
					if(res.data.data.length < 10){
						self.more = 'noMore'
						self.loadRecord = false
					}
				})
			},
			loadMore(){  //上拉加载更多
				let page = this.page
				this.more = 'loading'
				let data = {
					token:uni.getStorageSync('token'),
					is_more:1,
					page:page
				}
				if(this.show != -1) data.type = this.show
				this.service.entire(this,'post',this.service.api_root.subuser.UserIntegral,data,function(self,res){
				
					let data = self.data
					if(res.data.data == ''){
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
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
		min-height: 900rpx;
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