<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="card" v-for="(item,index) in data" :key='item.id'>
			<image :src="item.images" mode=""></image>
			<view class="card_word" @click="jump('./tickey?id='+item.id+'&order='+item.order_no)">
				<view class="card_word_top">
					<!-- <image src="../../static/image/bjavatar.png" mode=""></image> -->
					<view class="theme">
						{{item.title}}
					</view>
				</view>
				<view class="card_word_bottom">
					<view class="price">
						<image src="../../static/image/price.png" mode=""></image>
						<text>￥{{item.price}}</text>
					</view>
					<view class="data">
						有效期至{{item.end_time}}
					</view>
				</view>
			</view>
		</view>
		
		<!-- <view class="more">
			<text>没有更多卡片</text>
			<text class="margin">|</text>
			<text class="check">查看失效卡</text>
		</view> -->
	</view>
</template>

<script>
	import returns from '../common/returns.vue';
	export default {
		data() {
			return {
				title: '我的卡包',
				data:''
			}
		},
		components: {
			returns
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.global.mytravelscard,{time:0},function(self,res){
				console.log(res)
				self.data = res.data
			})
		}
	}
</script>

<style scoped>
	.card{
		position: relative;
		width: 690rpx;
		height: 300rpx;
		margin: 30rpx 30rpx 0;
	}
	.card image{
		width: 690rpx;
		height: 300rpx;
	}
	.card_word{
		width: 690rpx;
		height: 300rpx;
		color: #FFFFFF;
		position: absolute;
		top: 0;
		left: 0;
		box-sizing: border-box;
		padding: 26rpx 30rpx 26rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: rgba(0,0,0,.4);
		border-radius: 18rpx;
	}
	.card_word_top{
		width: 100%;
		height: 64rpx;
		font-size: 32rpx;
		display: flex;
		align-items: center;
	}
	.card_word_top image{
		width: 64rpx;
		height: 64rpx;
		margin-right: 20rpx;
	}
	.price image{
		width: 31rpx;
		height: 25rpx;
		margin-right: 14rpx;
	}
	.card_word_bottom{
		font-size: 24rpx;
		display: flex;
		justify-content: space-between;
	}
	.more{
		width: 100%;
		height: 150rpx;
		line-height: 150rpx;
		text-align: center;
		font-size: 28rpx;
		color: #818181;
	}
	.margin{
		margin: 0 12rpx;
	}
	.check{
		color: #1D9DFF;
	}
</style>
