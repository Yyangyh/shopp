	<!-- 我的分销--我的团队 -->
<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
	<view class="team_level">
		<view :class="['team_level_box', current == 0?'active':'']" @click="change(0)">一级（0）</view>
		<view :class="['team_level_box', current == 1?'active':'']" @click="change(1)">二级（0）</view>
	</view>
	
	<view class="team_list">
		<view class="list_left">
			<image src="../../../static/image/avatar.png" mode="widthFix"></image>
		</view>
		<view class="list_right">
			<view class="username">
				<text>昵称：牛哄哄</text>
				<text style="padding-left: 80rpx;">18576612345</text>
			</view>
			<view class="become_data">成为分销商时间： 2019-05-10 16：03</view>
		</view>
	</view>
	<view class="team_list">
		<view class="list_left">
			<image src="../../../static/image/avatar.png" mode="widthFix"></image>
		</view>
		<view class="list_right">
			<view class="username">
				<text>昵称：牛哄哄</text>
				<text style="padding-left: 80rpx;">18576612345</text>
			</view>
			<view class="become_data">成为分销商时间： 2019-05-10 16：03</view>
		</view>
	</view>
	<view class="tip">没有更多的数据了</view>
	<view class="no_data" v-if="false">
		<view class="no_data_img">
			<image src="../../../static/image/no_data.png" mode="widthFix"></image>
		</view>
	</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components: {
			returns
		},
		data() {
			return {
				title: '我的团队',
				current:0
			}
		},
		methods:{
			change(i){
				this.current = i
			}
		}
	}
</script>

<style scoped>
	.team_level{
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	.team_level .team_level_box{
		width: 346rpx;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 32rpx;
		color: #999999;
		border-radius: 10rpx;
		background-color: #F1F1F1;
	}
	.team_level .team_level_box.active{
		background:linear-gradient(to right, #3E8FF3 20%,#64C5F9 100%);
		color: #FFFFFF;
	}
	.no_data{
		width: 100%;
		padding: 220rpx;
		box-sizing: border-box;
	}
	.no_data_img{
		width: 310rpx;
		height: 254rpx;
	}
	.no_data_img image{
		width: 310rpx;
		height: 254rpx;
	}
	.team_list{
		display: flex;
		padding: 20rpx 20rpx;
		border-bottom: 4rpx solid #F1F1F1;
	}
	.list_left {
		width: 100rpx;
		height: 100rpx;
		margin-right: 20rpx;
	}
	.list_left image{
		width: 100rpx;
		height: 100rpx;
	}
	.list_right {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.list_right .username{
		font-size: 28rpx;
	}
	.list_right .become_data{
		font-size: 24rpx;
		color: #999999;
	}
	.tip{
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 24rpx;
		color: #999999;
	}
</style>
