<template>
	<!-- 我的粉丝 -->
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top_box">
			<view>
				<view class="num active2">17</view>
				<view class="part active">我的粉丝</view>
			</view>
			<view>
				<view class="num">17</view>
				<view class="part">我的粉丝</view>
			</view>
			<view>
				<view class="num">17</view>
				<view class="part">我的粉丝</view>
			</view>
		</view>
		<view class="list">
			<view class="single_list">
				<view class="list_left">
					<image src="" mode=""></image>
					<view>品品762</view>
				</view>
				<view class="focus">
					关注
				</view>
			</view>
			
			
			
			<view class="single_list">
				<view class="list_left">
					<image src="" mode=""></image>
					<view>品品762</view>
				</view>
				<view class="focus">
					关注
				</view>
			</view>
			<view class="single_list">
				<view class="list_left">
					<image src="" mode=""></image>
					<view>品品762</view>
				</view>
				<view class="focus">
					关注
				</view>
			</view>
			<view class="single_list">
				<view class="list_left">
					<image src="" mode=""></image>
					<view>品品762</view>
				</view>
				<view class="focus">
					关注
				</view>
			</view>
			
			
			
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		components:{
			returns
		},
		data(){
			return{
				title:"我的粉丝"
			}
		}
	}
</script>

<style>
	page{
		background: #F1F1F1;
	}
	.content{
		color: #666666;
	}
	.top_box{
		width: 100%;
		height: 120rpx;
		display: flex;
		background: #FFFFFF;
		margin-bottom: 6rpx;
	}
	.top_box>view{
		width: 33.33%;
		height: 120rpx;
		text-align: center;
		color: #666666;
		box-sizing: border-box;
		padding-top: 20rpx;
	}
	.num{
		font-size: 31rpx;
		padding-bottom:4rpx;
	}
	.part{
		font-size: 34rpx;
	}
	.single_list{
		width: 100%;
		height: 144rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3rpx;
	}
	.list_left{
		height: 144rpx;
		display: flex;
		align-items: center;
		font-size: 36rpx;
	}
	.list_left image{
		width: 100rpx;
		height: 100rpx;
		margin-right: 31rpx;
	}
	.focus{
		width: 107rpx;
		height: 44rpx;
		border-radius: 20rpx;
		font-size: 24rpx;
		line-height: 44rpx;
		text-align: center;
		background: #02A7F0;
		color: #FFFFFF;
	}
	.active{
		color: #1D9DFF;
	}
	.active2{
		color: #333333;
	}
</style>
