<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top_img">
			<image :src="data.images" mode="aspectFill"></image>
		</view>
		<view class="card padding">
			<view class="theme">
				{{data.title}}
			</view>
			<view class="theme_card">
				<view class="card_name">
					电子卡
				</view>
				<view class="place" v-for="(item,index) in data.tag" :key='index'>
					{{item}}
				</view>
				<!-- <view class="place">
					故宫
				</view> -->
			</view>
		</view>
		<!-- <view class="discount">
			<view class="buy">
				<view class="buy_left">
					购卡优惠
				</view>
				<view class="buy_right">
					<view class="buy_detail">
						<view class="text">
							买卡即赠
						</view>
						<view class="words">
							北京门票玩乐
						</view>

					</view>
					<view class="buy_detail">
						<view class="text">
							超值换购
						</view>
						<view class="words">
							超级会员
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<!-- 套餐明细 -->
		<view class="menu">
			<view class="menu_top">
				<view class="menu_title">
					套餐明细
				</view>
				<image src="../../static/image/arrowright.png" mode=""></image>
			</view>
			<view class="menu_details">
				<view class="menu_details_box">
					<view v-for="(item,index) in data.menpiao">{{item.a}}×1</view>
					
				</view>
			</view>
		</view>
		<view class="time">
			<view class="validity">
				<view class="validity_title">
					套餐有效期{{data.start_time}}至{{data.end_time}}
				</view>
				<!-- <image src="../../static/image/arrowright.png" mode=""></image> -->
			</view>
		</view>
		<view class="time">
			<view class="validity">
				<view class="validity_title">
					购买须知
				</view>
				<!-- <image src="../../static/image/arrowright.png" mode=""></image> -->
			</view>
		</view>
		<view class="menu_details">
			<view class="menu_details_box">
				<view>{{data.buy_tip}}</view>
				
			</view>
		</view>
		<!-- 产品详细  -->
		<view class="pruduct">
			产品详细
		</view>
		<view class="produce">
			<rich-text :nodes="data.content"></rich-text>
		</view>
		
		
		
		<view class="mask" v-if="show" @click="show = !show">
		
		</view>
		<view class="mask_box" :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''">
			<image class="close" src="../../static/image/index/close.png" mode="widthFix" @click="show = !show"></image>
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
					<image v-show="item.choice" class="choice" src="../../static/image/threeLayers/choice.png" mode="widthFix"></image>
				</view>
			</view>
			<button @click="payment()">立即支付</button>
		
		</view>
		
		
		<view class="footer">
			<view class="money">
				<text class="need_pay">需支付</text>
				<text class="account">￥</text>
				<text class="account_big">{{data.price}}</text>
			</view>
			<view class="pay" @click="show = !show">
				立即购买
			</view>
		</view>
		<view class="bottom"></view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue';
	export default {
		data() {
			return {
				title: '旅游卡套餐优惠卡',
				isShow: false,
				data:'',
				content:'',
				show:false,
				pay_list:'',
				payment_id:'',
				payment_name:''
			}
		},
		components: {
			returns
		},
		methods:{
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
				            that.service.entire(that, 'post',that.service.api_root.global.card_pay, {
				            	token: uni.getStorageSync('token'),
				            	cid: that.data.id,
				            	payment_id: that.payment_id
				            }, function(self, ref) {
				            	self.common.order(ref,self,'./card_bag','pages/subuser/card_bag')
				            })
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
			}
		},
		onLoad(e) {
			this.service.entire(this,'post',this.service.api_root.global.card_detail,{id:e.id},function(self,res){
				console.log(res)
				self.data = res.data
			})
			this.service.entire(this,'post',this.service.api_root.global.card_buy,{},function(self,res){
				console.log(res)
				// self.data = res.data
				let data = res.data
				for (let s of data) {
					s.choice = false
				}
				console.log(data)
				self.pay_list = data
			})
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
		overflow-x: hidden;
	}

	.top_img {
		width: 718rpx;
		height: 300rpx;
		margin: 19rpx 16rpx 38rpx;
		/* background: #00D3B3; */
	}
	.top_img image{
		width: 100%;
		height: 300rpx;
	}
	.padding {
		padding: 0 27rpx;
		box-sizing: border-box;
	}

	.theme {
		font-size: 28rpx;
		font-weight: bold;
		color: #333333;
	}

	.theme_card {
		display: flex;
		align-items: center;
		margin-top: 21rpx;
		padding-bottom: 32rpx;
		border-bottom: 4rpx solid #F4F4F4;
	}

	.card_name {
		margin-right: 23rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.place {
		width: 60rpx;
		height: 27rpx;
		text-align: center;
		line-height: 27rpx;
		color: #00D3B3;
		border-radius: 10rpx;
		font-size: 24rpx;
		border: 2rpx solid #00D3B3;
		margin: 0 10rpx;
	}

	.discount {
		width: 100%;
		height: 158rpx;
		padding: 27rpx 27rpx 0rpx;
		box-sizing: border-box;
	}

	.buy {
		display: flex;
		padding-bottom: 30rpx;
		border-bottom: 4rpx solid #F4F4F4;
	}

	.buy .buy_left {
		width: 160rpx;
		font-size: 28rpx;
		color: #999999;
	}

	.buy_detail {
		display: flex;
		align-items: center;
	}

	.buy_detail:first-child {
		margin-bottom: 25rpx;
	}

	.buy_right .buy_detail .text {
		width: 110rpx;
		height: 30rpx;
		text-align: center;
		line-height: 30rpx;
		background: rgb(232, 245, 255);
		font-size: 24rpx;
		color: #1D9DFF;
		margin-right: 31rpx;
		padding: 4rpx 10rpx;
	}

	.buy_right .buy_detail .words {
		font-size: 28rpx;
		color: #333333;
	}

	.menu {}

	.menu_top {
		display: flex;
		padding: 20rpx 26rpx 20rpx 28rpx;
		align-items: center;
		box-shadow: 0 6rpx 6rpx #F4F4F4;
	}

	.menu_title {
		box-sizing: border-box;
		width: 100%;
		font-size: 28rpx;
		color: #333333;
	}

	.menu_top image {
		width: 16rpx;
		height: 31rpx;
	}

	.menu_details {
		width: 100%;
		padding: 16rpx 28rpx 0;
		box-sizing: border-box;
		font-size: 26rpx;
		color: #333333;
	}

	.menu_details_box {
		padding-bottom: 8rpx;
		border-bottom: 4rpx solid #F4F4F4;
	}

	.menu_details_box>view {
		/* height: 54rpx; */
		line-height: 54rpx;
	}

	.time {
		width: 100%;
		height: 80rpx;
		padding: 0 28rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.time .validity {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 4rpx solid #F4F4F4;
	}

	.validity image {
		width: 16rpx;
		height: 31rpx;
	}

	.validity_title {
		color: #333333;
		font-size: 28rpx;
	}

	.pruduct {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 30rpx;
		color: #333333;
		background: #F2F2F2;
	}

	.produce {
		width: 100%;
		/* height: 1120rpx; */

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
		z-index: 888;
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
	.bottom{
		width: 100%;
		height: 130rpx;
	}
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120rpx;
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		padding: 0 18rpx 0 40rpx;
		background: #FFFFFF;
	}
	.footer .money{
		height: 120rpx;
		line-height: 120rpx;
	}
	.need_pay{
		font-size: 28rpx;
		color: #666666;
		margin-right: 12rpx;
	}
	.account{
		font-size: 28rpx;
		color: #FF431D;
	}
	.account_big{
		font-size: 32rpx;
		color: #FF431D;
	}
	.pay{
		width: 196rpx;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		border-radius: 44rpx;
		font-size: 28rpx;
		background: #1D74FF;
		color: #FFFFFF;
	}
</style>
