<template>
	<view class="">
		<view class="user_comment" v-if="comments">
			<view class="user_top">
				用户评论
			</view>
			<view class="user">
				<image class="user_img" v-if="comments.user " :src="comments.user.avatar" mode="widthFix"></image>
				<view class="user_test"  v-if="comments.user ">
					<view>{{comments.user.user_name_view}}</view>
					<text>{{comments.add_time_date}}</text>
				</view>
				<view class="user_star">
					<image v-for="(item,index) in comments.rating_num" src="../../static/image/star.png" mode="widthFix"></image>
					<!-- {{comments.rating_text}} -->
				</view>
			</view>
			<view class="com_content">
				<view class="content_test">
					<view class="">
						{{comments.content}}
					</view>
				</view>
				<view class="content_img">
					<image v-for="(item,index) in comments.images" :key='index' :src="item" mode=""></image>
				</view>
				
			</view>
		</view>
		<view class="" v-else>
			
		</view>
	</view>
	
</template>

<script>
	export default{
		props:['comments'],
		data() {
			return {
				
			}
		},
	}
</script>

<style scoped>
	.user_comment {
		background: #fff;
		margin-top: 20rpx;
		padding: 20rpx 30rpx;
	}
	
	.user_comment .user_top {
		font-weight: bold;
		font-size: 28rpx;
	
	}
	
	.user_comment .user {
		display: flex;
		align-items: center;
		margin: 20rpx 0;
	}
	
	.user_comment .user .user_img {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
	}
	
	.user_comment .user .user_test {
		margin: 0 20rpx;
		font-size: 32rpx;
	}
	
	.user_comment .user .user_test view {
		font-weight: bold;
		color: #333333;
		font-size: 28rpx;
	}
	
	.user_comment .user .user_test text {
		font-size: 24rpx;
		color: #999999;
		
	}
	
	.user_comment .user .user_star {
		align-self: flex-start;
		font-size: 24rpx;
		color: #333333;
	}
	
	.user_comment .user .user_star image {
		height: 26rpx;
		width: 26rpx;
	}
	
	.user_comment .com_content .content_test view {
		font-size: 24rpx;
		color: #666666;
	}
	
	.user_comment .com_content .content_img image {
		height: 120rpx;
		width: 120rpx;
		margin-right: 16rpx;
		margin-top: 30rpx;
	}
	
	.user_comment .com_content .more {
		font-size: 32rpx;
		color: #666666;
		margin: 20rpx 0;
	}
</style>
