<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="top">
			<text></text>
			<text>游记攻略</text>
			<image src="../../static/image/index/user4.png" mode="widthFix"></image>
		</view>
		<view class="search">
			<view class="search_top">
				<image src="../../static/image/index/search4.png" mode="widthFix"></image>
				<input type="text" value="" placeholder="搜索攻略游记"/>
			</view>
			<view class="search_bottom">
				<view :class="{show:show == 0}"  @click="show = 0">
					发现
				</view>
				<view :class="{show:show == 1}" @click="show = 1">
					当前地区
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom_list">
				<view class="list_top">
					<view class="list_left">
						<image src="../../static/image/index/user5.png" mode="widthFix"></image>
						<view class="top_one">
							<view class="one_name">
								品品762
							</view>
							<view class="tiem">
								2019-06-13
							</view>
						</view>
					</view>
					<view class="list_right">
						<image src="../../static/image/index/new5.png" mode="widthFix"></image>
						<text>563</text>
						<image src="../../static/image/index/eye5.png" mode="widthFix"></image>
						<text>563</text>
					</view>
					
				</view>
				<view class="list_bottom">
					<view class="list_one">
						一周太短,但足够遇见最美的云
					</view>
					<view class="list_two">
						 洱海的日光,苍山的云 稀薄欧丽雅的海鸥 由北至南飞了好几千公里,下关的风 上官的花 而你广告在路上 不期而遇
					</view>
					<view class="list_three">
						<image src="../../static/image/index/strategy1.png" mode="widthFix"></image>
						<image src="../../static/image/index/strategy2.png" mode="widthFix"></image>
						<image src="../../static/image/index/strategy3.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="bottom_list">
				<view class="list_top">
					<view class="list_left">
						<image src="../../static/image/index/user5.png" mode="widthFix"></image>
						<view class="top_one">
							<view class="one_name">
								品品762
							</view>
							<view class="tiem">
								2019-06-13
							</view>
						</view>
					</view>
					<view class="list_right">
						<image src="../../static/image/index/new5.png" mode="widthFix"></image>
						<text>563</text>
						<image src="../../static/image/index/eye5.png" mode="widthFix"></image>
						<text>563</text>
					</view>
					
				</view>
				<view class="list_bottom">
					<view class="list_one">
						一周太短,但足够遇见最美的云
					</view>
					<view class="list_two">
						 洱海的日光,苍山的云 稀薄欧丽雅的海鸥 由北至南飞了好几千公里,下关的风 上官的花 而你广告在路上 不期而遇
					</view>
					<view class="list_three">
						<image src="../../static/image/index/strategy1.png" mode="widthFix"></image>
						<image src="../../static/image/index/strategy2.png" mode="widthFix"></image>
						<image src="../../static/image/index/strategy3.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="bottom_list">
				<view class="list_top">
					<view class="list_left">
						<image src="../../static/image/index/user5.png" mode="widthFix"></image>
						<view class="top_one">
							<view class="one_name">
								品品762
							</view>
							<view class="tiem">
								2019-06-13
							</view>
						</view>
					</view>
					<view class="list_right">
						<image src="../../static/image/index/new5.png" mode="widthFix"></image>
						<text>563</text>
						<image src="../../static/image/index/eye5.png" mode="widthFix"></image>
						<text>563</text>
					</view>
					
				</view>
				<view class="list_bottom">
					<view class="list_one">
						一周太短,但足够遇见最美的云
					</view>
					<view class="list_two">
						 洱海的日光,苍山的云 稀薄欧丽雅的海鸥 由北至南飞了好几千公里,下关的风 上官的花 而你广告在路上 不期而遇
					</view>
					<view class="list_three">
						<image src="../../static/image/index/strategy1.png" mode="widthFix"></image>
						<image src="../../static/image/index/strategy2.png" mode="widthFix"></image>
						<image src="../../static/image/index/strategy3.png" mode="widthFix"></image>
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
				show: 0
			}
		},
	}
</script>

<style scoped>
	.content{
		background: #F4F4F4;
	}
	.top{
		text-align: center;
		height: 105rpx;
		font-size: 32rpx;
		padding: 0 20rpx;
		background: #fff;
		font-weight: bold;
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		padding: 0 22rpx;
		box-shadow:0px 1rpx 20rpx 0px #eee;
	}
	.top text:first-child{
		width: 82rpx;
		display: inline-block;
	}
	.top image{
		height: 82rpx;
		width: 82rpx;
		
	}
	.search{
		padding-top: 24rpx;
		background: #fff;
	}
	.search .search_top{
		background: #F1F1F1;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 70rpx;
		margin: 0 20rpx;
		display: flex;
		align-items: center;
	}
	.search .search_top image{
		height: 38rpx;
		width: 38rpx;
		margin: 0 16rpx 0 34rpx;
	}
	.search .search_bottom{
		display: flex;
		margin: 0 20rpx;
		color: #333333;
		font-size: 30rpx;
	}
	.search .search_bottom view{
		width: 50%;
		text-align: center;
		padding: 24rpx 0;
		
	}
	.show{
		color: #02A7F0;
		border-bottom: 4rpx solid #1D9DFF;
	}
	.bottom{
		margin-top: 20rpx;
		
	}
	.bottom .bottom_list{
		background: #fff;
		padding: 0 20rpx 20rpx 20rpx;
		margin-bottom: 20rpx;
	}
	.bottom .list_top{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 0;
	}
	.bottom .list_top image{
		height: 70rpx;
		width: 70rpx;
		margin-right: 18rpx;
	}
	.bottom .list_top .list_left{
		display: flex;
		justify-content: space-between;
	}
	
	.bottom .list_top  .list_left .top_one .one_name{
		font-size: 28rpx;
		color: #333333;
		font-weight:400;
	}
	.bottom .list_top  .list_left .top_one .tiem{
		font-size: 20rpx;
		color: #666666;
	}
	.bottom .list_top .list_right{
		align-self: flex-end;
	}
	.bottom .list_top .list_right image{
		height: 26rpx;
		width: 26rpx;
		margin-right: 8rpx;
	}
	.bottom .list_top .list_right text{
		color: #666666;
		font-size: 20rpx;
	}
	.bottom .list_top .list_right text:nth-of-type(1){
		margin-right: 10rpx;
	}
	.bottom .list_bottom .list_one{
		font-size: 26rpx;
		font-weight: bold;
		margin-bottom: 14rpx;
	}
	.bottom .list_bottom .list_two{
		font-size: 26rpx;
		color: #666666;
		margin-bottom: 26rpx;
		padding: 0 12rpx;
	}
	.bottom .list_bottom .list_three{
		display: flex;
		justify-content: space-between;
	}
	.bottom .list_bottom .list_three image{
		height: 236rpx;
		width: 236rpx;
	}
</style>
