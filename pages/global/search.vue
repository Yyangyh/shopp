<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="sea_top">
			<image @click="returns()" src="../../static/image/return.png" mode=""></image>
			<view class="sea_one">
				<image src="../../static/image/search1.png" mode=""></image>
				<input type="text" @input="onKeyInput()" v-model="test" value="" focus />
			</view>
			<view class="search">
				搜索
			</view>
		</view>
		<view class="bottom">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				test: '',
				data: '',
				timer: ''
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
			returns() {
				this.common.returns(this)
			},
			onKeyInput() {

				if (this.timer) clearTimeout(this.timer); //如果500毫秒内又一次触发，则会重新计算时间
				this.timer = setTimeout(() => {
					console.log('dddd')
					this.service.entire(this, 'post', this.service.api_root.index.travels_list, {
						keywords: this.test
					}, function(self, res) {
						console.log(res)
						self.data = res.data
					})
				}, 500)

			} //,
			// feature(keywords){//特色商品

			// }

		}
	}
</script>

<style scoped>
	.content {
		padding-top: 0;
	}

	page {
		background: #F1F1F1;
	}

	.sea_top {
		height: 105rpx;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
	}

	.sea_top image {
		height: 50rpx;
		width: 50rpx;
	}

	.sea_top .sea_one {
		background: #FFFFFF;
		height: 60rpx;
		border-radius: 30rpx;
		flex-grow: 2;
		display: flex;
		align-items: center;
	}

	.sea_top .sea_one image {
		width: 40rpx;
		height: 40rpx;
		margin: 0 10rpx;
	}

	.sea_top .search {
		margin-left: 20rpx;
		font-size: 32rpx;
	}

	.bottom {
		margin-top: 20rpx;

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
</style>
