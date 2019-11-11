<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			积分商城
		</view>
		<view class="table">
			<view class="tab_list" v-for="(item,index) in data" @click="jump('../subindex/integral_list?id='+item.id)" :key='item.id'>
				<image :src="item.icon" mode="widthFix"></image>
				<view class="">
					{{item.name}}
				</view>
			</view>
			
		</view>
		
		<view class="guess">
			<view class="guess_test">
				猜你喜欢
			</view>
			<view class="guess_box">
				
				<view class="guess_box_left">
					<view class="box_list" v-for="(item,index) in data_list" :key='item.id' @click="jump('../subindex/threeindex/integral_details?id='+item.id)" v-if="index%2 == 0">
						<image :src="item.images" mode="widthFix"></image>
						<view class="list_one">
							{{item.title}}
						</view>
						<view class="list_two">
							{{item.money}}兑换
						</view>
						<view class="list_three">
							￥{{item.original_price}}
						</view>
					</view>
				</view>
				<view class="guess_box_right">
					<view class="box_list" v-for="(item,index) in data_list" :key='item.id' @click="jump('../subindex/threeindex/integral_details?id='+item.id)" v-if="index%2 == 1">
						<image :src="item.images" mode="widthFix"></image>
						<view class="list_one">
							{{item.title}}
						</view>
						<view class="list_two">
							{{item.money}}兑换
						</view>
						<view class="list_three">
							￥{{item.original_price}}
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<uni-load-more :status="more"></uni-load-more>
		
		
	</view>
</template>

<script>
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default{
		components: {
			uniLoadMore
		},
		data() {
			return {
				data:'',
				data_list:[],
				more: 'more',
				page: 1,
				loadRecord: true
			}
		},
		
		onReachBottom() {
			if (this.loadRecord == false) return
			this.loadMore()
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.index.int_category,{},function(self,res){  //分类列表
				console.log(res)
				self.data = res.data
			})
			this.data_list.length = 0
			this.page = 1
			this.loadMore()
			
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			loadMore(){
				let page = this.page
				this.more = 'loading'
				this.service.entire(this, 'post', this.service.api_root.subindex.int_list, {  //猜你喜欢
					is_home_recommended: 1,
					page:page
				}, function(self, res) {
					// console.log(res)
					
					let data = self.data_list
					for (let s of res.data.data) {
						let money = []
						if(Number(s.bt) != 0) money.push(Number(s.bt)+'版通')
						if(Number(s.credit) != 0) money.push(Number(s.credit)+'积分')
						if(Number(s.price) != 0) money.push('￥'+Number(s.price))
						s.money = money.join('+')
					}
					data.push(...res.data.data)
					self.data_list = data
					console.log(self.data);
					self.page = page + 1
					self.more = 'more'
					if (res.data.data.length < 10) {
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
					
					
					
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		padding-top: 105rpx;
	}
	.top{
		height: 105rpx;
		line-height: 105rpx;
		text-align: center;
		font-weight: bold;
		font-size: 32rpx;
		background: #fff;
		box-shadow:0px 1rpx 20rpx 0px #eee;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #fff;
		z-index: 888;
	}
	.table {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding-bottom: 40rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}
	
	.table .tab_list {
		width: 20%;
		text-align: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #333;
	}
	
	.table .tab_list image {
		width: 56rpx;
		height: 56rpx;
	}
	.guess{
		
		padding: 20rpx 20rpx;
	}	
	.guess .guess_test{
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
	.guess .guess_box{
		/* display: flex;
		flex-wrap: wrap;
		justify-content: space-between; */
	}
	.guess .guess_box .guess_box_left,.guess_box_right{
		display: inline-block;
		width: 50%;
		vertical-align: top;  
		padding: 0rpx 4rpx;
		box-sizing: border-box;
	}
	.guess .guess_box .box_list{
		/* width: 49%; */
		font-size: 28rpx;
		margin-bottom: 20rpx;
	}
	.guess .guess_box .box_list .list_one{
		font-weight: bold;
		clolr: #333;
		margin-bottom: 10rpx;
		/* height: 76rpx; */
		overflow: hidden;
		text-overflow: ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical; 
		-webkit-line-clamp:2; 
	}
		
	.guess .guess_box .box_list .list_two{
		color: #FF431D;
		
	}
	.guess .guess_box .box_list .list_three{
		color: #999999;
		font-size: 24rpx;
		text-decoration:line-through;
	}
	.guess .guess_box image{
		width: 100%;
		height: 224rpx;
		margin-bottom: 20rpx;
	}
</style>
