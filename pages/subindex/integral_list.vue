<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns></returns>
		<view class="top_class">
			<view class="class_list">
				<text>全部分类</text>
				<image src="../../static/image/upper.png" mode="widthFix"></image>
			</view>
			<view class="class_list">
				<text>全部地区</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list">
				<text>智能排序</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
		</view>

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
					<text class='data'>{{item.sales_count}}人购买</text>
					<text class="info" @click="detailed('threeindex/integral_details?id=' + item.id)">进入购买</text>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import returns from '../common/re_search.vue'
	export default {
		data() {
			return {
				data: ''
			}
		},
		components: {
			returns
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
				
			}
		},
		onLoad(options) {
			this.service.entire(this, 'get', this.service.api_root.subindex.int_list, {
				category_id: options.id
			}, function(self, res) {
				console.log(res)
				let data = res.data.data
				for (let s of data) {
					let money = []
					if(Number(s.bt) != 0) money.push(Number(s.bt)+'版通')
					if(Number(s.credit) != 0) money.push(Number(s.credit)+'积分')
					if(Number(s.price) != 0) money.push('￥'+Number(s.price))
					s.money = money.join('+')
				}
				self.data = data
			})
		}
	}
</script>

<style scoped>
	.content {}

	.top_class {
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
