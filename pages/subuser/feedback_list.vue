<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @click="returns()">
				<image src="/static/image/return.png" mode="widthFix" ></image>
			</view>
			<text>历史反馈</text>
			<text @click="jump('./feedback')">去反馈</text>
		</view>
		<view class="tab">
			<view class="tab_list" v-for="(item,index) in data" :key='item.id'>
				<view class="list_one">
					标题：{{item.title}}
				</view>
				<view class="list_two">
					{{item.content}}
				</view>
				<view class="list_three">
					{{item.add_time_date}}
				</view>
			</view>
		</view>
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default{
		components:{
			returns,
			uniLoadMore
		},
		data() {
			return {
				title:'历史反馈',
				data:[],
				more:'more',
				page:1,
				loadRecord:true
			}
		},
		methods:{
			returns(){
				uni.switchTab({
				    url: '/pages/index/user'
				});
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			
			loadMore(){
				let page = this.page
				this.more = 'loading'
				this.service.entire(this,'post',this.service.api_root.subuser.answerList,{
					page:page
				},function(self,res){
					console.log(res.data)
					let data = self.data
					
					data.push(...res.data)
					self.data = data
					self.page = page + 1
					if(res.data.length < 10){
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
			this.data.length = 0
			this.page = 1
			this.loadMore()
		}
	}
</script>

<style scoped>
	
	.top{
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		z-index: 99;
		height: 105rpx;
		padding: 0 44rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		/* width: 40rpx; */
		font-size: 28rpx;
		color: #666;
		font-weight: 400;
		display: inline-block;
	}
	.tab{
		font-size: 30rpx;
	}
	.tab .tab_list{
		padding: 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.list_one{
		font-size: 28rpx;
		color: #666;
	}
	.list_two{
		margin: 10rpx 0;
		height: 80rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.list_three{
		text-align: right;
		font-size: 24rpx;
		color: #999999;
	}
</style>
