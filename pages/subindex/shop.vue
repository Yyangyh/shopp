<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="return">
			<image class="return_img" src="../../static/image/return.png" mode="" @click="returns()"></image>
			<view class="search">
				<text>广州</text>
				<image class="dorp" src="../../static/image/dorp.png" mode=""></image>
				<image class="search1" src="../../static/image/search1.png" mode=""></image>
				<input type="text" value="" placeholder="武汉周黑鸭"/>
			</view>
			
			
		</view>
		<view class="img">
			<image src="../../static/image/top.png" mode=""></image>
		</view>
		<view class="table">
			<view class="tab_list">
				<image src="../../static/image/commodity.png" mode=""></image>
				<view class="">
					全部商品
				</view>
			</view>
			<view class="tab_list" @click="jump('../threeLayers/classification')">
				<image src="../../static/image/classification.png" mode=""></image>
				<view class="">
					商品分类
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/new.png" mode=""></image>
				<view class="">
					新品上市
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/ranking.png" mode=""></image>
				<view class="">
					销售排行
				</view>
			</view>
		</view>
		<view class="recommend">
			<view class="recommend_test">
				推荐产品
			</view>
			<view class="spot">
				<view class="sp_list">
					<image src="../../static/image/duck1.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥100</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck2.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck1.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥100</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck2.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		}
		
	}
</script>

<style scoped>
	.content{
		
	}
	.uni-input-placeholder{
		color: #cccccc;
	}
	.return{
		display: flex;
		align-items: center;
		height: 105rpx;
		box-shadow: 0px 0px 6px #CCCCCC;
	}
	.return .return_img{
		width: 48rpx;
		height: 48rpx;
		
		margin-left: 20rpx;
	}
	.return .search{
		flex-grow: 2;
		display: flex;
		align-items: center;
		height: 75rpx;
		background: #F1F1F1;
		margin: 0 20rpx;
		border-radius: 34rpx;
	}
	.return .search input{
		height: 140rpx;
	}
	.return .search text{
		margin: 0 20rpx;
		color: #666666;
		font-size: 32rpx;
	}
	.return .search .dorp{
		width: 12rpx;
		height: 12rpx;
		margin-right: 20rpx;
	}
	.return .search .search1{
		width: 38rpx;
		height: 38rpx;
		margin-right: 20rpx;
	}
	.img{
		width: 100%;
		height: 410rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
	}
	.img image{
		width: 100%;
		height: 100%;
	}
	.table {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-bottom: 40rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}
	.table .tab_list{
		width: 25%;
		text-align: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #666;
	}
	.table .tab_list image{
		width: 80rpx;
		height: 80rpx;
	}
	.recommend .recommend_test{
		font-size: 40rpx;
		font-weight: bold;
		padding: 0 20rpx;
		margin: 30rpx 0;
	}
	.spot{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
	}
	.spot .sp_list{
		width: 45%;
		height: 400rpx;
		background: #fff;
		box-shadow: 0px 0px 4px #eee;
		margin-bottom: 30rpx;
		border-top-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
	}
	.spot .sp_list image{
		width: 100%;
		height: 200rpx;
	}
	.ticket{
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	.address{
		color: #333;
		font-size: 30rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}
	.tips{
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}
	.spot .sp_list .bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	.spot .sp_list .bottom .price{
		color: #FF431D;
	}
	.spot .sp_list .bottom .data{
		color: #999999;
		font-size: 26rpx;
	}
</style>
