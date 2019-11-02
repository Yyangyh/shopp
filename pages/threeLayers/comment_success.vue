<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="all">
			<view class="success">
				<image src="../../static/image/gou.png" mode=""></image>
				<view>评论成功</view>
			</view>
			<view class="word">
				坚持写真实、内容丰富的评价！
			</view>
			<view class="btn">
				<view class="btn1" @click="jump('/pages/index/index')">
					返回首页
				</view>
				<!-- 	<view class="btn1">
					查看评论
				</view> -->
			</view>
		</view>
		<view class="list" v-for="(item,index) in list" :key="index">
			<view class="left">
				<image :src="item.images" mode=""></image>
				<view class="words">
					{{item.title}}
				</view>
			</view>
			<view class="right" @click="toDetail(item.goods_id)">
				查看评价
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		data() {
			return {
				title: '评论成功',
				id: '',
				list: []
			}
		},
		methods: {
			jump(url) {
				uni.reLaunch({
					url: url
				});
			},
			toDetail(goods_id){
				uni.navigateTo({
					url:'/pages/threeLayers/comment_list'+'?goods_id='+goods_id
				})
			}
		},
		components: {
			returns
		},
		onLoad(options) {
			this.id = options.id // 订单id
			this.service.entire(this, 'post', this.service.api_root.subuser.threeuser.Order_detail, {
				id: options.id
			}, function(self, res) {
				console.log(res.data.items);
				self.list = res.data.items
			})
		}
	}
</script>

<style>
	.all {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.success {
		margin: 84rpx auto 0;
		font-size: 32rpx;
		color: #1D9DFF;
		display: flex;
		align-items: center;
	}

	.success image {
		width: 40rpx;
		height: 40rpx;
		vertical-align: baseline;
		margin: 8rpx 15rpx 0 0;
	}

	.word {
		font-size: 24rpx;
		color: #333333;
		margin-top: 26rpx;
		margin-bottom: 78rpx;
	}

	.btn {
		display: flex;

	}

	.btn1 {
		width: 210rpx;
		height: 75rpx;
		border-radius: 40rpx;
		border: 2rpx solid #1D9DFF;
		box-sizing: border-box;
		font-size: 28rpx;
		color: #1D9DFF;
		line-height: 75rpx;
		text-align: center;
	}

	.list {
		width: 100%;
		height: 120rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.list .left {
		display: flex;
		height: 120rpx;
		align-items: center;

	}

	.list .left image {
		width: 98rpx;
		height: 62rpx;
		margin-right: 14rpx;
	}

	.list .left .words {
		font-size: 24rpx;
		color: #333333;
		width: 330rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.list .right {
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #333333;
		font-size: 24rpx;
		border-radius: 30rpx;
		box-sizing: border-box;
		border: 2rpx solid #333333;
	}
</style>
