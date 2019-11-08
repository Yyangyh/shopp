<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @click="returns()">
				<image src="/static/image/return.png" mode="widthFix" ></image>
			</view>
			<text>商城订单</text>
			<text></text>
		</view>
		<view class="mall_box">
			<view class="box_top">
				<view class="top_list" :class="{show:show == -1}" @click="chiose(-1)">
					全部
				</view>
				<view class="top_list" :class="{show:show == 1}" @click="chiose(1)">
					待付款
				</view>
				<view class="top_list" :class="{show:show == 2}" @click="chiose(2)">
					待发货
				</view>
				<view class="top_list" :class="{show:show == 3}" @click="chiose(3)">
					待收货
				</view>
				<view class="top_list" :class="{show:show == 4}" @click="chiose(4)">
					已完成
				</view>
				
			</view>
			<view class="box_bottom">
				<view class="bottom_list" v-for="(item,index) in data" :key='item.id'>
					<view class="list_top">
						<view class="top1">
							<image src="../../static/image/secondary/shop.png" mode="widthFix"></image>
							<text>店铺名字</text>
							<image src="../../static/image/go.png" mode="widthFix"></image>
						</view>

						<view class="top2 refund" v-if="item.status == 7">
							{{item.status_name}}
						</view>
						<view class="top2 obligation" v-if="item.status == 1">
							{{item.status_name}}
						</view>
						<view class="top2 stayGoods" v-if="item.status == 2">
							{{item.status_name}}
						</view>
						<view class="top2 stayComment" v-if="item.status == 3">
							{{item.status_name}}
						</view>
						<view class="top2 stayComment" v-if="item.status == 4">
							{{item.status_name}}
						</view>
						<view class="top2 refund" v-if="item.status == 5">
							{{item.status_name}}
						</view>
					</view>
					<view  v-for="(items,indexs) in item.items" :key='indexs'>
						<!-- 加多一个盒子套住评论 -->
						<view class="list_middle" @click="jump('threeuser/order_details?id='+item.id)">
							<view class="">
								<image :src="items.images" mode="aspectFill"></image>
							</view>
							<view class="middle1">
								<view class="">{{items.title}}</view>
								<view>套装</view>
							</view>
							<view class="middle2">x1</view>
							
						</view>
						
					</view><!-- 加多一个盒子套住评论 -->

					<view class="list_bottom">
						<!-- <view class="bottom1">
							支付方式：在线支付
						</view> -->
						
						<view class="bottom_one">
							<view class="bottom2">
								订单金额<text>￥{{item.total_price}}</text>
							</view>
							
							<view>
								<view class="bottom3" v-if='item.status == 4 || item.status == 5' @click="deletes(item.id,index)">
									删除订单
								</view>
								<view class="bottom3" v-if='item.status == 4 && item.user_is_comments ==0' @click="jump('/pages/threeLayers/order_comment?id='+item.id+'&type=1')">
									评论
								</view>
								<!-- <view class="bottom3" v-if='item.status == 3' @click="jump('/pages/threeLayers/logistics?id='+item.express_id+'&number='+item.express_number)">
									查看物流
								</view> -->
								<view class="bottom3" @click="jump('threeuser/order_details?id='+item.id)">
									详情
								</view>
								
							</view>
							
						</view>

					</view>
				</view>

			</view>
		</view>
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default {
		components: {
			returns,
			uniLoadMore
		},
		data() {
			return {
				title: '商城订单',
				show: 0,
				data: [],
				status: '',
				more: 'more',
				page: 1,
				loadRecord: true

			}
		},
		methods: {
			returns() {
				uni.switchTab({
					url: '/pages/index/user'
				});
			},
			jump(url) {
				
				uni.navigateTo({
					url: url
				})
			},
			deletes(id,index){ //删除订单
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否确定删除订单？',
					success: function (res) {
						if (res.confirm) {
							that.service.entire(that, 'get', that.service.api_root.subuser.Delete_order, {
								id:id
							}, function(self, res) {
								uni.showToast({
									icon:'none',
									title:res.msg
								})
								if(res.code == 0)self.data.splice(index,1)
							})
						} else if (res.cancel) {
							// console.log('用户点击取消');
							return
						}
					}
				});
			
				
			},
			chiose(status) {
				this.more = 'loading'
				this.data = []
				this.show = status
				this.loadRecord = true
				this.service.entire(this, 'post', this.service.api_root.subuser.order_Index, {
					token: uni.getStorageSync('token'),
					is_more: 1,
					status: status,
					page: 1
				}, function(self, res) {
					self.data = res.data.data
					if (res.data.data.length < 10) {
						self.more = 'noMore'
						self.loadRecord = false
					}
				})
			},
			loadMore() {
				let page = this.page
				this.more = 'loading'
				this.service.entire(this, 'post', this.service.api_root.subuser.order_Index, {
					token: uni.getStorageSync('token'),
					is_more: 1,
					status: this.show,
					page: page
				}, function(self, res) {

					let data = self.data

					data.push(...res.data.data)
					self.data = data
					console.log(self.data);
					self.page = page + 1
					self.more = 'more'
					if (res.data.data.length < 10) {
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
				})
			}
		},
		onLoad(options) {
			this.status = options.status
			this.show = options.status
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			this.loadMore()
		},
		onShow() {
			this.data.length = 0
			this.page = 1
			this.loadMore()
		}
	}
</script>

<style scoped>
	.mall_box {
		font-size: 30rpx;

	}

	.refund {
		/* 退款 */
		color: #666666;
	}

	.obligation {
		/* 待支付 */
		color: #D9011C;
	}

	.stayGoods {
		/* 收货 */
		color: #02A7F0;
	}

	.stayComment {
		/* 待评价 */
		color: #F09B22;
	}

	.top {
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		z-index: 99;
		height: 105rpx;
		padding: 0 44rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow: 0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	}

	.top image {
		height: 40rpx;
		width: 40rpx;
	}

	.top text:nth-of-type(2) {
		width: 40rpx;
		display: inline-block;
	}

	.mall_box .box_top {
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		margin: 28rpx 0 40rpx 0;
	}

	.mall_box .box_top .top_list {
		padding: 0 20rpx;
		height: 44rpx;
		line-height: 44rpx;
		border-radius: 44rpx;
	}

	.show {
		color: #fff;
		background: #1D9DFF;
	}

	.mall_box .box_bottom {
		background: #fff;

	}

	.mall_box .box_bottom .bottom_list {
		padding: 20rpx;
		background: #fff;
		border-radius: 20rpx;
		margin: 0 20rpx 32rpx 20rpx;
		box-shadow: 0px 0rpx 20rpx 0px rgba(0, 0, 0, 0.1);
	}

	.mall_box .box_bottom .bottom_list .list_top {
		display: flex;
		justify-content: space-between;

	}

	.mall_box .box_bottom .bottom_list .list_top .top1 {
		display: flex;
		align-items: center;
	}

	.mall_box .box_bottom .bottom_list .list_top .top1 text {
		margin: 0 20rpx;
		font-weight: 400;
		color: #999999;
	}

	.mall_box .box_bottom .bottom_list .list_top .top1 image {
		height: 30rpx;
		width: 30rpx;
	}

	.mall_box .box_bottom .bottom_list .list_top .top2 {
		/* color: #999999; */
		font-size: 28rpx;
		/* font-weight: bold; */
	}

	.mall_box .box_bottom .bottom_list .list_middle {
		display: flex;
		align-items: center;
		margin-top: 30rpx;
		
	}

	.mall_box .box_bottom .bottom_list .list_middle .middle1 {
		font-size: 24rpx;
		color: #999999;
	}

	.mall_box .box_bottom .bottom_list .list_middle .middle1 view:nth-of-type(1) {
		font-size: 28rpx;
		font-weight: bold;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.mall_box .box_bottom .bottom_list .list_middle .middle2 {
		font-size: 26rpx;
		color: #999999;
		flex-grow: 2;
		text-align: right;
	}

	.mall_box .box_bottom .bottom_list .list_middle image {
		height: 122rpx;
		width: 122rpx;
		margin-right: 20rpx;
	}

	.mall_box .box_bottom .bottom_list .list_bottom {
		text-align: right;
		font-size: 24rpx;
		color: #999999;
	}

	.mall_box .box_bottom .bottom_list .list_bottom .bottom2 {
		text-align: right;
		margin: 10rpx 0;
	}

	.mall_box .box_bottom .bottom_list .list_bottom .bottom2 text {
		font-weight: bold;
		margin-left: 10rpx;
	}

	/* 	.mall_box .box_bottom  .bottom_list .list_bottom .bottom3{
		display: inline-block;
		width: 154rpx;
		height: 52rpx;
		line-height: 52rpx;
		border-radius: 52rpx;
		background: #1D9DFF;
		color: #fff;
		text-align: center;
		margin-left: 20rpx;
	} */
	.bottom3 {
		display: inline-block;
		width: 154rpx;
		height: 52rpx;
		line-height: 52rpx;
		border-radius: 52rpx;
		background: #1D9DFF;
		color: #fff;
		text-align: center;
		margin-left: 20rpx;
	}
	.bottom_one{
		/* display: flex;
		justify-content: space-between; */
	}
	.pl_box{
		margin-bottom: 10rpx;
		display: flex;
		justify-content: space-between;
	}
	.pl {
		width: 154rpx;
		height: 52rpx;
		line-height: 52rpx;
		border-radius: 52rpx;
		background: #1D9DFF;
		color: #fff;
		text-align: center;
		/* float: right; */
		
	}
</style>
