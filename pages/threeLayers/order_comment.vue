<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="goods">
			<view class="shop">
				<image src="../../static/image/secondary/shop.png" mode=""></image>
				<view class="shop_name">
					折木奉太郎
				</view>
				<image src="../../static/image/arrowright.png" mode=""></image>
			</view>
			<view class="goods_detail">
				<image src="" mode=""></image>
				<view class="detail_right">
					<view class="words">
						洁丽雅毛巾2条装 纯棉洗脸洗澡家用成人男女帕
					</view>
					<view class="amount">
						<view class="num">
							两条装
						</view>
						<view class="count">
							x1
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="comment">
				整单评价
			</view>
			<view class="star">
				<view class="left" >评分</view>
				<image :src="item.src" mode="" v-for="(item,index) in imgList" :key="index" @click="choose(index)"></image>
				<view :class="[active>=0?'col':'']">
					{{amount}}
				</view>
			</view>
			<!-- 晒图 -->
			<view class="pic">
				<view class="left">
					晒图
				</view>
				<view class="pics">
					<view class="pic_box" >
						<image src="" mode=""></image>
					</view>
					<image src="../../static/image/addpic.png" mode=""></image>
				</view>
			</view>
			<!-- 评论 -->
			<view class="say">
				<view class="left">
					评论
				</view>
				<textarea value="" placeholder="说点什么吧" />
			</view>
		</view>
		<view class="submit">
			发布
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		data() {
			return {
				title: '发布评价',
				imgList:[
					{src:'../../static/image/star1.png'},
					{src:'../../static/image/star1.png'},
					{src:'../../static/image/star1.png'},
					{src:'../../static/image/star1.png'},
					{src:'../../static/image/star1.png'}
				],
				active:-1,
				level:['1分','2分','3分','4分','5分'],
				amount:"没有评分"
			}
		},
		methods:{
			choose(index){
				for (var j = 0; j<this.imgList.length;j++) {
					this.imgList[j].src = '../../static/image/star1.png'
				}
				for (var i = 0; i<=index; i++) {
					this.imgList[i].src = '../../static/image/star2.png'
					this.amount = this.level[i]
					this.active = i
				}
			}
		},
		components: {
			returns
		}
	}
</script>

<style>
	page {
		background: #F1F1F1;
	}

	.goods {
		width: 710rpx;
		/* height: 274rpx; */
		margin: 20rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 20rpx;
		border-radius: 10rpx;
	}

	.goods .shop {
		width: 100%;
		height: 34rpx;
		display: flex;
		align-items: center;
		margin-bottom: 32rpx;
	}

	.goods .shop image:first-child {
		width: 38rpx;
		height: 34rpx;
		margin-right: 14rpx;
	}

	.goods .shop image:last-child {
		width: 12rpx;
		height: 25rpx;
		margin-left: 15rpx;
	}

	.goods .shop .shop_name {
		font-size: 28rpx;
		color: #333333;
	}

	.goods .goods_detail {
		width: 670rpx;
		height: 166rpx;
		display: flex;
	}

	.goods .goods_detail image {
		width: 260rpx;
		height: 166rpx;
	}

	.goods .detail_right .words {
		color: #333333;
		font-size: 28rpx;
	}

	.goods .detail_right .amount {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		margin-top: 15rpx;
		color: #999999;
	}
	.bottom{
		font-size: 28rpx;
		margin: 0 20rpx;
		width: 710rpx;
		box-sizing: border-box;
		padding: 0 22rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
	}
	.bottom .comment{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.star{
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		color: #666666;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.left{
		width: 100rpx;
	}
	.star image{
		width: 33rpx;
		height: 33rpx;
		margin-top: 4rpx;
		margin-right: 14rpx;
	}
	.pic{
		width: 100%;
		display: flex;
		align-items: center;
		padding: 38rpx 0;
		margin-bottom: 36rpx;
		color: #666666;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.pic image{
		width: 104rpx;
		height: 104rpx;
	}
	.pic .pics {
		display: flex;
	}
	.pic .pics .pic_box{
		margin-right: 20rpx;
	}
	.say{
		display: flex;
		color:#666666;
	}
	
	textarea{
		width: 100%;
		height: 162rpx;
		color: #CCCCCC;
		box-sizing: border-box;
		padding:0 6rpx 6rpx 6rpx;
		font-size: 28rpx;
	}
	.submit{
		width: 710rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 40rpx;
		position: fixed;
		bottom: 20rpx;
		left: 20rpx;
		
		background: #1D74FF;
	}
	.col{
		color: #1D9DFF;
	}
</style>
