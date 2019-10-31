<template>
	<view class="return">
		<image class="return_img" src="/static//image/return.png" mode="" @click="returns()"></image>
		<view class="search">
			<text v-if="city"  @click="jump()">{{city}}</text>
			<text v-else @click="jump()">定位</text>
			<image class="dorp" src="/static//image/dorp.png" mode=""></image>
			<image class="search1" src="/static//image/search1.png" mode=""></image>
			<!-- <input  @focus="search()" type="text" value="" placeholder=""/> -->
			<view class="" @click="search()">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['city','type'],
		data() {
			return {
				
			}
		},
		methods:{
			returns(){
				// #ifdef H5
				let canBack = true  
				const pages = getCurrentPages()  
				// 有可返回的页面则直接返回，uni.navigateBack默认返回失败之后会自动刷新页面 ，无法继续返回  
				if (pages.length > 1) {  
					uni.navigateBack(1)  
					return;  
				}  
				// vue router 可以返回uni.navigateBack失败的页面 但是会重新加载  
				let a = this.$router.go(-1)  
				// router.go失败之后则重定向到首页  
				if (a == undefined) {  
					uni.reLaunch({  
						url: "/pages/index/index"  
					})  
				}  
				return;  
				// #endif  
				uni.navigateBack(1)
			},
			jump(){
				uni.navigateTo({
					url:'/pages/subindex/index_location'
				})
			},
			search(){
				console.log(this.type)
				uni.navigateTo({
					url: '/pages/common/search?type='+this.type
				})
			}
			
		},
		onShow() {
			// console.log(123)
		}
		
	}
</script>

<style scoped>
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
	.return .search text{
		margin: 0 20rpx;
		color: #666666;
		font-size: 32rpx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap; 
		width: 100rpx;
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
	.return .search view{
		height: 90rpx;
		flex-grow: 2;
		font-size: 30rpx;
	}
</style>
