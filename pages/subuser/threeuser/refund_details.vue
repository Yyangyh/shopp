<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
	<!-- 	<view class="order_top">
			<view class="" v-if="data.status == 2">
				买家已付款
			</view>
			<view class="" v-else-if="data.status == 3">
				等待买家收货
			</view>
			<view class="" v-else-if="data.status == 4">
				已完成
			</view>
			<view class="" v-else-if="data.status == 1">
				等待买家付款
			</view>
			<image src="../../../static/image/threeLayers/box.png" mode="widthFix"></image>
		</view> -->
		<view class="order_position">
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
		</view>
		
		<view class="order_news"  v-if='data.status == 3'>
			<view class="news_one">
				物流信息
			</view>
			<!--  -->
			<view class="news_two" >
				<text>快递公司：</text>
				<text>{{data.express_name}}</text>
			</view>
			<view class="news_two">
				<text>快递单号：</text>
				<text>{{data.express_number}}</text>
			</view>
		
			<!--  -->
			
			<view class="news_four" >
				<view class="" @click="jump('/pages/threeLayers/logistics?id='+data.express_id+'&number='+data.express_number)">
					<image src="../../../static/image/threeLayers/contact.png" mode="widthFix"></image>
					<text>查看物流</text>
				</view>
			</view>
		</view>
		
		<view class="order">
			<view class="order_num"  >
				<view class="num_one" @click="detailed(goods.goods_id,goods.type)">
					<image :src="goods.images" mode="widthFix"></image>
				</view>
				<view class="num_two" @click="detailed(goods.goods_id,goods.type)">
					<view class="">
						{{goods.title}}
					</view>
					<view class="specs">
						
					</view>
				</view>
				<view class="num_three">
					<view class="">
						￥{{goods.price}}
					</view>
					<view class="">
						数量：X{{goods.buy_number}}
					</view>
					
				</view>
				
				<view class="order_handle">
					
					<text v-if="new_aftersale_data == null"  @click="jump('/pages/threeLayers/refund?id='+ new_aftersale_data.id+'&oid='+new_aftersale_data.order_id)">{{new_aftersale_data.status == 4?'申请售后':'退款/退货'}}</text>
					<block v-else>
						<text v-if="new_aftersale_data.status == 3">退款完成</text>
						<text v-else-if="new_aftersale_data.status == 4"  @click="jump('/pages/threeLayers/refund?id='+ new_aftersale_data.id+'&oid='+new_aftersale_data.order_id)">已拒绝</text>
						<text v-else-if="new_aftersale_data.status == 5"  @click="jump('/pages/threeLayers/refund?id='+ new_aftersale_data.id+'&oid='+new_aftersale_data.order_id)">已取消</text>
						<text v-else @click="cancel_return(new_aftersale_data.id)">退款/退货中</text>
					</block>
					
				</view>
			</view>

			<!--  -->
			

			<!--  -->
			<view class="order_total">
				<view class="total_one">
					订单总价
				</view>
				<view class="total_two">
					<!-- ￥ -->{{data.describe}}
				</view>
			</view>
		</view>
		<view class="order_news">
			<view class="news_one">
				订单信息
			</view>
			<!--  -->
			<view class="news_two" v-if="data.status == 2">
				<text>付款时间：</text>
				<text>{{data.pay_time}}</text>
			</view>
			<view class="news_two" v-else>
				<text>创建时间：</text>
				<text>{{data.confirm_time}}</text>
			</view>

			<!--  -->
			<view class="news_three">
				订单编号：{{data.order_no}}
			</view>
			<view class="news_four">
				<view class="">
					<image src="../../../static/image/threeLayers/contact.png" mode="widthFix"></image>
					<text>联系卖家</text>
				</view>
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
				title: '订单详情',
				data: '',
				data_list: '',
				pay_list: '',
				show: false,
				payment_id: '',
				payment_name: '',
				goods:'',
				new_aftersale_data:''
			}
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			cancel_return(id){//取消退款申请
				let that = this
				uni.showModal({
				    title: '提示',
				    content: '是否取消退款/退货申请？',
				    success: function (res) {
				        if (res.confirm) {
				            that.service.entire(that,'get',that.service.api_root.subuser.threeuser.AftersaleCancel,{id:id},function(self,res){
								uni.showToast({
									icon:'none',
									title:res.msg
								})
				            	if(res.code == 0){
									setTimeout(function(){
										self.common.returns(self)
									},1500)
								}
				            })
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
			},
			
			detailed( id, type) {
				if (type == 3) {
					uni.navigateTo({  //版通
						url: '../../subindex/edition_details?id=' + id
					})
				} else if (type == 2) { //文创
					uni.navigateTo({
						url: '../../subindex/edition_details?id=' + id
					})
				} else {
					uni.navigateTo({ //特色
						url: '../../subindex/product_detailed?id=' + id + '&type=' + type
					})
				}
			},
		},
		onLoad(options) {
			this.service.entire(this, 'get', this.service.api_root.threeLayers.Aftersale, {
				oid: options.oid,
				did: options.did
			}, function(self, res) {
				self.data = res.data.order
				self.goods = res.data.goods
				self.new_aftersale_data = res.data.new_aftersale_data
				
				
				
				
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
		position: relative;
		height: 228rpx;
	}
	.order .order_num .num_two{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		height: 120rpx;
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
		position: absolute;
		right: 0;
		bottom: 0;
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
