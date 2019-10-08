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
				<image :src="item.images" mode="aspectFill" @click="detailed('../subindex/product_detailed',item.id,item.type)"></image>
				<!-- <view class="ticket">
					武汉-特色产品
				</view> -->
				<view class="address">
					{{item.title}}
					<!-- <text class="tips">特色产品</text> -->

				</view>
				<view class="bottom">
					<text class="price">￥{{item.price}}</text>
					<text class='data'>{{item.sales_count}}人购买</text>
					<text class="info" @click="detailed('../subindex/product_detailed',item.id,item.type)">进入购买</text>
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
			detailed(url, id, type) {
				if (type == 3) {
					uni.navigateTo({
						url: '../subindex/edition_details?id=' + id
					})
				} else if (type == 1) { //景点
					uni.navigateTo({
						url: '../subindex/edition_details?id=' + id
					})
				} else {
					uni.navigateTo({
						url: '../subindex/product_detailed?id=' + id
					})
				}
			}
		},
		onLoad(options) {
			console.log(options.type)
			if (options.type == 'works') {
				this.service.entire(this, 'get', this.service.api_root.subindex.org_category_list, { //文创
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
			} else if (options.type == 'edition') { //版通
				this.service.entire(this, 'get', this.service.api_root.subindex.Category_list, {
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
			} else if (options.type == 'scenic') { //景点
				this.service.entire(this, 'get', this.service.api_root.subindex.scen_list, {
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
			}else if (options.type == 'integral') { //积分
				this.service.entire(this, 'get', this.service.api_root.threeLayers.int_list, {
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
			} else {
				this.service.entire(this, 'get', this.service.api_root.threeLayers.goodsList, { //特色
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
			}

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
