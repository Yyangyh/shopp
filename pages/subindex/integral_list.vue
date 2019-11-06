<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<!-- <view class="top_class">
			<view class="class_list">
				<text>全部分类</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list">
				<text>全部地区</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list" @click="show = !show">
				<text>{{list_test}}</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
		</view> -->
		<!-- <view class="sort_box" :class="show===false ? 'hide' : show===true ? 'show' : ''">
			<view class="sort_list" v-for="(item,index) in sort" :key='index' @click="hook(index,item.name,item.order)">
				<view class="">
					{{item.title}}
				</view>
				<image v-show="item.chiose" src="../../static/image/threeLayers/hook.png" mode="widthFix"></image>
			</view>
		
		</view>
		<view class="sort" v-show="show === true" @click="show = false">
		</view> -->

		<view class="product">
			<view class="pr_list" v-for="item in data" :key='item.id'>
				<image :src="item.images" mode="aspectFill" @click="detailed('threeindex/integral_details?id=' + item.id)"></image>
				<!-- <view class="ticket">
					武汉-特色产品
				</view> -->
				<view class="address">
					{{item.title}}
					<!-- <text class="tips">特色产品</text> -->

				</view>
				<view class="bottom">
					<text class="price">￥{{item.money}}</text>
					<!-- <text class='data'>{{item.sales_count}}人购买</text> -->
					<text class="info" @click="detailed('threeindex/integral_details?id=' + item.id)">进入购买</text>
				</view>
			</view>

		</view>
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	// import returns from '../common/re_search.vue'
	import returns from '../common/returns.vue'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default {
		data() {
			return {
				data: [],
				show: false,
				type: '',
				id: '',
				title:'积分产品',
				more: 'more',
				page: 1,
				loadRecord: true
			}
		},
		components: {
			returns,
			uniLoadMore
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			detailed(url,id,) {
				uni.navigateTo({
					url: url
				})
				
			},
			
			loadMore(){
				let page = this.page
				this.more = 'loading'
				this.service.entire(this, 'post', this.service.api_root.subindex.int_list, {
					category_id: this.id,
					page:page
				}, function(self, res) {
					
					let data = self.data
					for (let s of res.data.data) {
						let money = []
						if(Number(s.bt) != 0) money.push(Number(s.bt)+'版通')
						if(Number(s.credit) != 0) money.push(Number(s.credit)+'积分')
						if(Number(s.price) != 0) money.push('￥'+Number(s.price))
						s.money = money.join('+')
					}
					data.push(...res.data.data)
					self.data = data
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
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			this.loadMore()
		},
		onShow() {
			this.loadMore()
		},
		onLoad(e) {
			this.id = e.id
		}
	}
</script>

<style scoped>
	.content {
		position: relative;
		padding-top: calc(var(--status-bar-height) + 105rpx);
	}
	
	.content>>>.return {
		position: fixed;
		z-index: 999;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #fff;
	}
	
	.top_class {
		position: fixed;
		top: calc(var(--status-bar-height) + 105rpx);
		left: 0;
		background: #fff;
		width: 100%;
	
		z-index: 999;
		display: flex;
		justify-content: space-between;
	}
	
	.top_class .class_list {
		display: flex;
		align-items: center;
		padding: 30rpx 20rpx;
		font-size: 32rpx;
	
	}
	
	.top_class .class_list image {
		height: 20rpx;
		width: 20rpx;
		margin-left: 10rpx;
	}
	
	
	.sort {
		overflow: hidden;
		left: 0;
		top: 0;
		width: 100%;
		position: fixed;
		z-index: 888;
		background: rgba(0, 0, 0, 0.6);
		height: 100%;
	}
	
	.sort_box {
		transition: 0.3s;
		background: #fff;
		position: fixed;
		top: calc(var(--status-bar-height) + 205rpx);
		z-index: 900;
		padding: 0 20rpx;
		box-sizing: border-box;
		width: 100%;
		font-size: 30rpx;
	
	}
	
	.sort_box .sort_list {
		height: 100rpx;
		border-bottom: 2rpx solid #F1F1F1;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.sort_box .sort_list image {
		height: 38rpx;
		width: 38rpx;
	}
	
	.hide {
		transform: translateY(-100%);
	}
	
	.show {
		transform: translateY(0%);
	}
	
	.product {
		background: #F1F1F1;
		overflow: hidden;
	}

	.product .pr_list {
		margin: 20rpx;
		padding: 20rpx;
		background: #fff;
		border-radius: 10rpx;
	}

	.product .bottom .price {
		color: #FF431D;
		margin-right: 20rpx;
		font-size: 28rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.product .bottom .data {
		color: #999999;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.product image {
		width: 100%;
		height: 300rpx;
	}

	.product .info {
		float: right;
		color: #FF431D;
		border: 1rpx solid #FF431D;
		border-radius: 10rpx;
		font-size: 30rpx;
		padding: 10rpx;
	}

	.ticket {
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}

	.address {
		color: #333;
		font-size: 30rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}

	.tips {
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}
</style>
