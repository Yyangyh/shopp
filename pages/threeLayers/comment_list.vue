<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="all">
			<view class="user_comment">
				用户评论
			</view>
			<view class="box" v-for="(item,index) in list" :key="index">
				<view class="avatar">
					<image :src="item.user.avatar" mode=""></image>
					<view class="detail">
						<view class="name">
							<view style="margin-right: 27rpx;">{{item.user.user_name_view}}</view>
							<view v-if="item.rating==1">
								<image src="../../static/image/littlestar.png" mode=""></image>
							</view>
							<view v-if="item.rating==2">
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
							</view>
							<view v-if="item.rating==3">
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
							</view>
							<view v-if="item.rating==4">
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
							</view>
							<view v-if="item.rating==5">
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
								<image src="../../static/image/littlestar.png" mode=""></image>
							</view>
						</view>
						<view class="day">
							{{item.add_time_date}}
						</view>
					</view>
				</view>
				<view class="article">
					{{item.content}}                     
				</view>
				<block>
					<view class="pics">
						<view v-for="(value,ins) in item.images" :key="ins">
							<image :src="value" mode=""></image>
						</view>
					</view>
				</block>
			</view>
			
		</view>

	</view>
</template>

<script>
	import returns from "../common/returns.vue"
	export default {
		data() {
			return {
				title: '评论',
				list:[]
			}
		},
		components: {
			returns
		},
		onLoad(e) {
			const {goods_id} = e
			if(e.type == 1){
				this.service.entire(this, 'get', this.service.api_root.threeLayers.goood_Comment_List, {
					goods_id:goods_id, //商品id
					page:1
				}, function(self, res) {
					console.log(res);
						console.log(res.data.data);
						self.list = res.data.data
				})
			}else if(e.type ==2){
				this.service.entire(this, 'get', this.service.api_root.subindex.threeindex.comment, {
					goods_id:goods_id, //商品id
					page:1
				}, function(self, res) {
					console.log(res);
						console.log(res.data.data);
						self.list = res.data.data
				})
			}else if(e.type == 3){
				this.service.entire(this, 'get', this.service.api_root.subuser.Ctripspot_comment_list, {
					goods_id:goods_id, //商品id
					page:1
				}, function(self, res) {
					console.log(res);
						console.log(res.data.data);
						self.list = res.data.data
				})
				
			}
		}
	}
</script>

<style>
	page {
		background: #F1F1F1;
	}
	.all{
		padding: 0 44rpx;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	.box{
		width: 100%;
		
	}
	.user_comment{
		color: #333333;
		font-size: 32rpx;
		padding-top:40rpx;
	}
	.avatar{
		width: 100%;
		height: 80rpx;
		margin: 25rpx 0;
		display: flex;
		align-items: center;
	}
	.avatar>image{
		width: 80rpx;
		height: 80rpx;
		margin-right: 31rpx;
		border-radius: 50%;
	}
	.name{
		display: flex;
		align-items: center;
		font-size: 24rpx;
		margin-bottom: 6rpx;
		color: #333333;
	}
	.name image{
		width: 14rpx;
		height: 14rpx;
		margin-right: 12rpx;
	}
	.day{
		font-size: 24rpx;
		color: #999999;
	}
	.article{
		width: 100%;
		padding-right: 12rpx;
		margin-bottom: 22rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #666666;
	}
	.pics {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		/* height: 120rpx; */
		padding-bottom: 28rpx;
		border-bottom: 2rpx solid #F5F5F5;
	}
	.pics image{
		width: 150rpx;
		height: 130rpx;
		margin-right: 20rpx;
	}
</style>
