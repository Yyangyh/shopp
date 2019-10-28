<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="order_top">
			<view class="" v-if="data.status == 0">
				等待买家付款
			</view>
			<view class="" v-else-if="data.status == -1">
				已取消
			</view>
			<view class="" v-else-if="data.status == 2">
				退款
			</view>
			<view class="" v-else-if="data.status == 1">
				已付款
			</view>
			<image src="../../../static/image/threeLayers/box.png" mode="widthFix"></image>
		</view>
		<!-- <view class="order_position">
			<view class="">
				<image src="../../../static/image/threeLayers/position.png" mode="widthFix"></image>
			</view>
			<view class="posi_one">
				<view class="">
					<text>{{data.receive_name}}</text>
					<text>{{data.receive_tel}}</text>
				</view>
				<view class="">
					地址：{{data.receive_province_name}}{{data.receive_city_name}}{{data.receive_county_name}}{{data.receive_address}}
				</view>
			</view>
		</view> -->

		<view class="order">
			<view class="order_num" @click="detailed(data.ctripspot_id)">
				<view class="num_one">
					<image :src="data.thumb" mode="widthFix"></image>
				</view>
				<view class="num_two">
					<view class="">
						{{data_list.Name}}
					</view>
					<view class="specs">
						
					</view>
				</view>
				<!-- <view class="num_three">
					<view class="">
						￥{{data_list.Price}}
					</view>
					<view class="">
						
					</view>
				</view> -->
			</view>

			<!--  -->
			<!-- <view class="order_handle" v-if="data.status == 2">
				<text>退款</text>
			</view> -->

			<!--  -->
			<view class="order_total">
				<view class="total_one">
					订单总价
				</view>
				<view class="total_two">
					￥{{data_list.Price}}
				</view>
			</view>
		</view>
		<view class="order_news">
			<view class="news_one">
				订单信息
			</view>
			<!--  -->
			
			<view class="news_two">
				<text>使用日期：</text>
				<text>{{data.use_date}}</text>
			</view>

			<!--  -->
			<view class="news_three">
				订单编号：{{data.orderno}}
			</view>
			<view class="news_four">
				<view class="">
					<image src="../../../static/image/threeLayers/contact.png" mode="widthFix"></image>
					<text>联系卖家</text>
				</view>
			</view>
		</view>


		<view class="order_bottom" v-if="data.status == 0">
			<!-- <text>修改地址</text> -->
			<text>取消订单</text>
			<text class="or_pay" @click="show = !show">付款</text>
		</view>

		<view class="mask" v-if="show" @click="show = !show">

		</view>
		<view class="mask_box" :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''">
			<image class="close" src="../../../static/image/index/close.png" mode="widthFix" @click="show = !show"></image>
			<view class="box_top">
				支付方式
			</view>
			<view class="pa_box">
				<view class="box_list" v-for="(item,index) in pay_list" :key='item.id' @click="choice(index)">
					<view class="list_top">
						<image :src="item.logo" mode="widthFix"></image>
						<view class="">
							{{item.name}}
						</view>
					</view>
					<image v-show="item.choice" class="choice" src="../../../static/image/threeLayers/choice.png" mode="widthFix"></image>
				</view>
			</view>
			<button @click="payment()">立即支付</button>

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
				title: '订单详情',
				data: '',
				data_list: '',
				pay_list: '',
				show: false,
				payment_id: '',
				payment_name: '',

			}
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			detailed(id) {
				uni.navigateTo({
					url: '../../subindex/scenery_detailed?id=' + id
				})
			},
			choice(index) {
				for (let s of this.pay_list) {
					s.choice = false
				}
				this.pay_list[index].choice = true
				this.pay_list = JSON.parse(JSON.stringify(this.pay_list))
				this.payment_id = this.pay_list[index].id
				this.payment_name = this.pay_list[index].payment
			},
			payment() {
				//提交
				let  that = this
				if (!this.payment_id) {
					uni.showToast({
						icon: 'none',
						title: '请选择支付方式'
					})
					return
				}
				uni.showModal({
				    title: '提示',
				    content: '是否确定支付？',
				    success: function (res) {
				        if (res.confirm) {
				            that.service.entire(that, 'get', that.service.api_root.threeLayers.scen_pay, {
				            	token: uni.getStorageSync('token'),
				            	orderid: that.orderid,
				            	payment_id: that.payment_id
				            }, function(self, ref) {
				            	self.common.order(ref,self,'../scen_order?status=-2','pages/subuser/scen_order?status=-2')
				            	
				            })
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
				

			}
		},
		onLoad(options) {
			this.orderid = options.id
			this.service.entire(this, 'get', this.service.api_root.subuser.threeuser.scen_orders_Detail, {
				orderid: options.id,
				token: uni.getStorageSync('token')
			}, function(self, res) {
				self.data = res.data
				self.data_list = res.data.ctrip_date_info.ResourceList[0]
				let data = res.data.payment_list
				for (let s of data) {
					s.choice = false
				}
				console.log(data)
				self.pay_list = data
			})
		}
	}
</script>

<style scoped>
	page {
		background: #F1F1F1;
		height: 100%;

	}

	.content {
		padding-bottom: 120rpx;
	}

	.order_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		color: #FFFFFF;
		height: 200rpx;
		padding: 0 72rpx;
		background: linear-gradient(-38deg, rgba(100, 197, 249, 1), rgba(62, 143, 243, 1));
	}

	.order_top image {
		height: 144rpx;
		width: 214rpx;
	}

	.order_position {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background: #fff;
		height: 188rpx;
		padding: 0rpx 20rpx;
		font-size: 28rpx;
		color: #333;
	}

	.order_position text:nth-of-type(2) {
		color: #999999;
		margin-left: 32rpx;
	}

	.order_position image {
		height: 76rpx;
		width: 76rpx;
		margin-right: 30rpx;
	}

	.order {
		margin-top: 20rpx;
		background: #FFFFFF;
		color: #333333;
		padding: 24rpx 20rpx;
	}

	.order .order_num {
		display: flex;
		font-size: 28rpx;
	}

	.order .order_num .num_two .specs {
		color: #808080;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.order .order_num .num_two .specs text {
		margin-right: 10rpx;
		margin-bottom: 10rpx;
		font-size: 24rpx;
		display: block;
		padding: 10rpx 8rpx;
		background: #F1F1F1;
	}

	.order .order_num .num_three {
		margin-left: 20rpx;
	}

	.order .order_num .num_three view {
		white-space: nowrap;
	}

	.order .order_num .num_three view:nth-of-type(2) {
		font-size: 24rpx;
		color: #999999;
	}

	.order image {
		width: 220rpx;
		height: 142rpx;
		margin-right: 24rpx;
	}

	.order .order_handle {
		text-align: right;
		padding-bottom: 20rpx;
	}

	.order .order_handle text {
		display: inline-block;
		text-align: center;
		width: 160rpx;
		height: 66rpx;
		font-size: 28rpx;
		color: #333;
		border: 2rpx solid #666666;
		border-radius: 66rpx;
		line-height: 66rpx;
	}

	.order .order_total {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		border-top: 2rpx solid #F1F1F1;
		padding: 30rpx 0 10rpx 0;
	}

	.order .order_total .total_two {
		color: #FF431D;
	}

	.order_news {
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 28rpx;
		padding: 0 20rpx;
	}

	.order_news .news_one {
		padding: 30rpx 0;
	}

	.order_news .news_two {
		margin-bottom: 20rpx;
		color: #808080;
	}

	.order_news .news_three {
		font-size: 24rpx;
		color: #808080;
		margin-bottom: 30rpx;
	}

	.order_news text {
		font-size: 24rpx;
	}

	.order_news image {
		height: 38rpx;
		width: 40rpx;
		margin-right: 10rpx;
	}

	.order_news .news_four view {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 32rpx 0;
		border-top: 2rpx solid #F1F1F1;
	}

	.order_bottom {
		display: flex;
		justify-content: flex-end;
		padding: 20rpx 20rpx;
		color: #666666;
		font-size: 28rpx;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
	}

	.order_bottom text {
		display: inline-block;
		width: 160rpx;
		height: 66rpx;
		line-height: 66rpx;
		border-radius: 66rpx;
		text-align: center;
		border: 2rpx solid #666666;
		margin-left: 26rpx;
	}

	.order_bottom .or_pay {
		color: #1D74FF;
		border-color: #1D74FF;
	}

	.mask {
		height: 100%;
		width: 100%;
		position: fixed;
		background: rgba(0, 0, 0, .5);
		top: 0;
		left: 0;
	}

	.mask_box {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background: #fff;
		height: 640rpx;
		padding: 20rpx;
		box-sizing: border-box;
		transition: .3s;
		transform: translateY(100%);
	}
	.mask_none{
	  transform: translateY(100%);
	}
	.mask_show{
	  transform: translateY(0);
	}
	.mask_box .box_top {
		font-size: 32rpx;
		color: #333333;
		margin-bottom: 30rpx;
	}

	.mask_box .close {
		height: 46rpx;
		width: 46rpx;
		position: absolute;
		right: 10rpx;
		top: 10rpx;
	}

	.box_list {
		display: flex;
		position: relative;
		font-size: 28rpx;
	}

	.box_list .list_top {
		display: flex;
		align-items: center;
		font-weight: 500;
		width: 100%;
		height: 100rpx;
	}

	.box_list .list_top image {
		margin-right: 38rpx;
		height: 52rpx;
		width: 52rpx;
	}

	.box_list .list_top view {
		flex-grow: 2;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}

	.choice {
		position: absolute !important;
		right: 20rpx;
		top: 30rpx;
		height: 36rpx !important;
		width: 36rpx !important;
	}

	button {
		position: absolute;
		left: 3%;
		bottom: 20rpx;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 90rpx;
		background: #1D74FF;
		color: #fff;
		font-size: 36rpx;
		width: 94%;
	}
</style>
