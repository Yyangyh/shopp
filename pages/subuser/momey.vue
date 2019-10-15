<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<view class="name">
			<view class="back">
				<image src="../../static/me/back.png" mode="widthFix"></image>
				<text>账单</text>
			</view>
			<view class="name_back">
				<view class="avatar">
					<image :src="user.avatar" mode="widthFix"></image>
					<text class="myname">{{user.nickname}}</text>
				</view>
				<view class="button">
					去实名
				</view>
			</view>
		</view>
		<view class="wallet">
			<view class="commission">
				<image src="../../static/image/secondary/commission.png" mode="widthFix"></image>
				<text class="h1">佣金</text>
				<text class="h2">￥00.00</text>
			</view>
			<view class="balance">
				<image src="../../static/image/secondary/balance.png" mode="widthFix"></image>
				<text class="h1">余额</text>
				<text class="h2">￥{{data.normal_money}}</text>
			</view>
			<view class="version_pass">
				<image src="../../static/image/secondary/version_pass.png" mode="widthFix"></image>
				<text class="h1">版通</text>
				<text class="h2">{{data_dition.normal_money}}</text>
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
		data() {
			return {
				title:'钱包',
				data:'',
				data_dition:'',
				user:uni.getStorageSync('user')
			}
		},
		methods: {
			
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.user.UserWallet+'?token='+uni.getStorageSync('token'),{},function(self,res){
				console.log(res)
				self.data = res.data.data
			})
			this.service.entire(this,'post',this.service.api_root.user.UserBt+'?token='+uni.getStorageSync('token'),{},function(self,res){
				console.log(res)
				self.data_dition = res.data.data
			})
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	
	.back{
		height: 105rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
		margin: 0 32rpx;
	}
	.back{
		color: #FFFFFF;
		font-size: 30rpx;
	}
	.back image{
		width: 40rpx;
		height: 40rpx;
	}
	.name{
		
		width: 100%;
		height: 290rpx;
		background: #1D9DFF;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.name_back{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 32rpx;
		margin-bottom: 58rpx;
	}
	.avatar{
		height: 90rpx;
		line-height: 90rpx;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.avatar image{
		width: 90rpx;
		height: 90rpx;
		border-radius: 45rpx;
	}
	.myname{
		margin-left: 30rpx;
		color: #FFFFFF;
	}
	.button{
		width: 120rpx;
		height: 50rpx;
		background: #FFFFFF;
		border-radius: 50rpx;
		color: #1D9DFF;
		font-size: 30rpx;
		text-align: center;
		line-height: 50rpx;
	}
	.wallet{
		width: 90%;
		height: 210rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		position: relative;
		top: -40rpx;
		left: 5%;
		box-shadow: 0 10rpx 20rpx #eee;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.wallet view{
		width: 30%;
	}
	.commission,.balance,.version_pass{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		}
	.commission image,.balance image,.version_pass image{
		width: 70rpx;
		height: 70rpx;
	}
	.h1{
		color: #666666;
		font-size: 30rpx;
	}
	.h2{
		color: #F12229;
		font-size: 30rpx;
	}
</style>
