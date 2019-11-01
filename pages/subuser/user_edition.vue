<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="edition_top">
			<view class="">
				{{data_dition.normal_money}}
			</view>
			<image src="../../static/image/secondary/edition_money.png" mode="widthFix"></image>
		</view>
		<view class="edition_bottom">
			<!-- <view class="list">
				<image src="../../static/image/secondary/edition_give.png" mode="widthFix"></image>
				<view class="">
					赠送版通
				</view>
			</view> -->
			<view class="list" @click="jump('./threeuser/ed_detailed')">
				<image src="../../static/image/secondary/edition_detailed.png" mode="widthFix"></image>
				<view class="">
					版通明细
				</view>
			</view>
			<view class="list" @click="jump('./threeuser/edition_explain')">
				<image src="../../static/image/secondary/edition_about.png" mode="widthFix"></image>
				<view class="">
					关于版通
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title: '版通',
				data_dition:''
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.user.UserBt+'?token='+uni.getStorageSync('token'),{},function(self,res){
				console.log(res)
				self.data_dition = res.data.data
			})
		}
	}
</script>

<style scoped>
	.edition_top{
		text-align: center;
		margin-bottom: 122rpx;
	}
	.edition_top view{
		color: #1D9DFF;
		font-size: 60rpx;
		margin: 58rpx 0 30rpx 0;
		flex-wrap: 600;
	}
	.edition_top image{
		height: 70rpx;
		width: 70rpx;
	}
	.edition_bottom{
		display: flex;
		justify-content: space-between;
		margin: 0 100rpx;
		text-align: center;
		font-size: 30rpx;
		color: #666666;
	}
	.edition_bottom image{
		height: 100rpx;
		width: 98rpx;
	}
</style>
