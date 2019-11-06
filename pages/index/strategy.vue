<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<text></text>
			<text>攻略游记</text>
			<image v-if="user" @click="jump('../substrategy/my_travels')" :src="user.avatar" mode="widthFix"></image>
			<image v-else class="user_head" src="../../static/image/state_user.png" mode="widthFix"></image>
		</view>
		<view class="search">
			<view class="search_top" @click="jump('/pages/global/search')">
				<image src="../../static/image/index/search4.png" mode="widthFix"></image>
				搜索攻略游记
				<!-- <input type="text" value="" placeholder="搜索攻略游记" /> -->
			</view>
			<view class="search_bottom">
				<view :class="{show:show == 0}" @click="changeList(0)">
					发现
				</view>
				<view :class="{show:show == 1}" @click="changeList(1)">
					{{address != ''?address:'选择地区'}}
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="location" @click="jump('/pages/subindex/index_location')">
				<image src="/static/image/secondary/location.png" mode="widthFix"></image>
				<view class="">
					{{address != ''?address:'选择地区'}}
				</view>
				
			</view>
			<view class="bottom_list" v-for="(item,index) in data" :key='item.id' @click="jumping('/pages/global/strategy_details',item.id)">
				<view class="list_top">
					<view class="list_left">
						<image @click.stop="jumping('../substrategy/str_user',item.uid)" :src="item.user.avatar" mode="widthFix"></image>
						<view class="top_one">
							<view class="one_name">
								{{item.user.user_name_view}}
							</view>
							<view class="tiem">
								{{item.create_time_date}}
							</view>
						</view>
					</view>
					<view class="list_right">
						<image src="../../static/image/index/new5.png" mode="widthFix"></image>
						<text>{{item.comment_count}}</text>
						<image src="../../static/image/index/eye5.png" mode="widthFix"></image>
						<text>{{item.access_count}}</text>
					</view>

				</view>
				<view class="list_bottom">
					<view class="list_one">
						{{item.title}}
					</view>
					<view class="list_two">
						{{item.content}}
					</view>
					<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
						<view class="list_three">
							<image v-for="(items,indexs) in item.images" :key='indexs' :src="items" mode="aspectFill"></image>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>

		<view class="add_str">
			<image @click="jump('../substrategy/strategy_issue')" src="../../static/image/index/add.png" mode=""></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: 0,
				user: '',
				data: '',
				address: ''
			}
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			jumping(url,i) {
				// i = 用户uid / 攻略详细id
				// console.log(uid);
				// console.log(url);
				uni.navigateTo({
					url: url+'?i='+i
				})
			},
			changeList(i) {
				this.show = i;
				if(i==0){
					this.load()
				}else{
					// 当前地区 
					console.log(this.address);
					if(!uni.getStorageSync('city')){
						uni.navigateTo({
							url:'/pages/subindex/index_location'
						})
					}
					this.load({address:this.address})
				}
				
			},
			load(address) {
				this.user = uni.getStorageSync('user')
				this.service.entire(this, 'post', this.service.api_root.index.travels_list, {
					page: 1,
					...address
				}, function(self, res) {
					console.log(res)
					self.data = res.data
				})
			}
		},
		onShow() {
			this.address = uni.getStorageSync('city')
			this.show = 0;
			this.load()
		}

	}
</script>

<style scoped>
	.content {
		background: #F4F4F4;
		padding-top: 105rpx;
	}

	.top {
		text-align: center;
		height: 105rpx;
		font-size: 32rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		background: #fff;
		font-weight: bold;
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		padding: 0 22rpx;
		box-shadow: 0px 1rpx 20rpx 0px #eee;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #fff;
		z-index: 888;
	}

	.top text:first-child {
		width: 82rpx;
		display: inline-block;
	}

	.top image {
		height: 82rpx;
		width: 82rpx;
		border-radius: 50%;
	}

	.search {
		padding-top: 24rpx;
		background: #fff;
	}

	.search .search_top {
		background: #F1F1F1;
		color: #CCCCCC;
		font-size: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 70rpx;
		margin: 0 20rpx;
		display: flex;
		align-items: center;
	}

	.search .search_top image {
		height: 38rpx;
		width: 38rpx;
		margin: 0 16rpx 0 34rpx;
	}

	.search .search_bottom {
		display: flex;
		margin: 0 20rpx;
		color: #333333;
		font-size: 30rpx;
	}

	.search .search_bottom view {
		width: 50%;
		text-align: center;
		padding: 24rpx 0;

	}

	.show {
		color: #02A7F0;
		border-bottom: 4rpx solid #1D9DFF;
	}

	.bottom {
		margin-top: 20rpx;

	}
	.bottom .location{
		background: #fff;
		padding: 20rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
	}
	.bottom .location image{
		height: 30rpx;
		width: 30rpx;
		margin-right: 10rpx;
	}
	.bottom .bottom_list {
		background: #fff;
		padding: 0 20rpx 20rpx 20rpx;
		margin-bottom: 20rpx;
	}

	.bottom .list_top {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 0;
	}

	.bottom .list_top image {
		height: 70rpx;
		width: 70rpx;
		margin-right: 18rpx;
		border-radius: 50%;
	}

	.bottom .list_top .list_left {
		display: flex;
		justify-content: space-between;
	}

	.bottom .list_top .list_left .top_one .one_name {
		font-size: 28rpx;
		color: #333333;
		font-weight: 400;
	}

	.bottom .list_top .list_left .top_one .tiem {
		font-size: 20rpx;
		color: #666666;
	}

	.bottom .list_top .list_right {
		align-self: flex-end;
	}

	.bottom .list_top .list_right image {
		height: 26rpx;
		width: 26rpx;
		margin-right: 8rpx;
	}

	.bottom .list_top .list_right text {
		color: #666666;
		font-size: 20rpx;
	}

	.bottom .list_top .list_right text:nth-of-type(1) {
		margin-right: 10rpx;
	}

	.bottom .list_bottom .list_one {
		font-size: 26rpx;
		font-weight: bold;
		margin-bottom: 14rpx;
	}

	.bottom .list_bottom .list_two {
		font-size: 26rpx;
		color: #666666;
		margin-bottom: 26rpx;
		padding: 0 12rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}

	.bottom .list_bottom .list_three {
		white-space: nowrap;
		width: 100%;
	}

	.bottom .list_bottom .list_three image {
		height: 236rpx;
		width: 236rpx;
		border: 2rpx solid #eee;
	}

	.add_str {
		position: fixed;
		bottom: 110rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.add_str image {
		width: 96rpx;
		height: 96rpx;
	}
</style>
