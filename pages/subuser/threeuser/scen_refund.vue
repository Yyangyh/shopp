<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="order">
			<view class="order_num">
				<view class="num_one">
					<image :src="order_data.thumb" mode="aspectFill"></image>
				</view>
				<view class="num_two">
					<view class="">
						{{order_data.name}}
					</view>
					
				</view>
				<view class="num_three">
					<view class="">
						￥{{order_data.price}}
					</view>
					<view class="">
						数量：X{{data.Quantity}}
					</view>
					
				</view>
				
				<!-- <view class="order_handle" v-if="data.status == 2 || data.status == 3" @click="jump('/pages/threeLayers/refund?id='+ item.id+'&oid='+item.order_id)">
					<text>退款/退货</text>
				</view> -->
			</view>
		
			<!--  -->
			
		
			<!--  -->
			<view class="order_total">
				<view class="total_one">
					订单总价
				</view>
				<view class="total_two">
					<!-- ￥ -->{{order_data.price*data.Quantity}}
				</view>
			</view>
		</view>
		
		<view class="refund_chiose">
		</view>
		
		<view class="refund_form">
			<view class="from_one">
				<view class="">
					退款原因：
				</view>
				<picker class="picker" @change="bindPickerChange" :value="index" :range="return_only">
					<view class="uni-input">{{return_only[index]}}</view>
				</picker>
			</view>
			
			<view class="from_one">
				<view class="">
					退款金额：
				</view>
				<view class="from_money">
					￥<input type="text" v-model="data.Amount" disabled=""/>
				</view>
			</view>
			<view class="from_two">
				<view class="">
					退款原因
				</view>
				<textarea v-model="Reason" value="" maxlength='200' placeholder="(选填)" />
			</view>
			<view class="from_two">
				<view class="">
					退款备注
				</view>
				<textarea v-model="Remark" value="" maxlength='200' placeholder="(选填)" />
			</view>
		</view>
		<button @click="ascertain()">确认</button>
	</view>
</template>

<script>
	
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'退款/退货申请',
				show:0,
				add_show:1,
				type:1,
				data:'',
				goods_data:'',
				order_data:'',
				return_only:['请选择','确认超时','行程不确定','价格原因','信息错误重新预定','重复预定','预定流程不方便','变更流程不方便','支付遇到问题'],
				index:0,
				image_list:[],
				images:[],
				num:'',
				price:'',
				Reason:'',
				Remark:''
			}
		},
		methods:{
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			chiose(show){
				this.show = show
				this.index = 0
			},
			
			
			ascertain(){
				
				
				if(this.index == 0){
					uni.showToast({
						icon:'none',
						title:'请完整填写退款信息'
					})
					return
				}
				let data = {
					orderid:this.id,
					CancelType:this.index,
					Reason:this.Reason,
					Remark:this.Remark
				}
				
				let url = this.service.api_root.subuser.threeuser.chargeback
				
				this.service.entire(this,'post',url,data,function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						setTimeout(function(){
							uni.navigateBack({
							    delta: 2
							});
						},1500)
					}
				})
				
				
			}
		},
		
		onLoad(e) {
			this.id = e.id
			console.log(e.id)
			this.service.entire(this, 'get', this.service.api_root.subuser.threeuser.chargebackinfo, {  //景点退单检查
				orderid: e.id,
			}, function(self, res) {
				self.data = res.data
				console.log(res)
				self.order_data = res.data.order[0]
			})
			
		}
	}
</script>

<style scoped>
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
	}
	.order .order_num .num_two{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		height: 120rpx;
		flex-grow: 2;
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
	.refund_chiose{
		
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		color: #333333;
	}
	.refund_chiose .chiose_one{
		width: 43%;
		border: 2rpx solid #eee;
		padding: 20rpx 20rpx;
	}
	 .picker{
		flex-grow: 2;
	}
	.refund_chiose .chiose_one view:nth-of-type(1){
		text-align: center;
	}
	.refund_chiose .chiose_explain{
		font-size: 24rpx;
		color: #999999;
	}
	.refund_form{
		font-size: 32rpx;
		padding: 0 20rpx;
	}
	.refund_form .from_one{
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #F1F1F1;
		height: 100rpx;
	}
	
	.refund_form .from_one view:nth-of-type(1){
		margin-right: 20rpx;
	}
	.refund_form .from_one input{
		flex-grow: 2;
	}
	.from_money{
		display: flex;
		align-items: center;
		color: #FF431D;
	}
	.from_num{
		display: flex;
		align-items: center;
	}
	.from_num view{
		margin-left: 20rpx;
	}
	.from_num text{
		display: inline-block;
		width: 45rpx;
		height: 45rpx;
		border-radius: 50%;
		color: #1D9DFF;
		border: 1px solid #1D9DFF;
		text-align: center;
		line-height: 22px;
	}
	.refund_form .from_two{
		padding-top: 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.refund_form .from_two textarea{
		font-size: 28rpx;
	}
	.image_list{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}
	.image_list .add{
		background: #F1F1F1;
		color: #CCCCCC;
		font-size: 120rpx;
		height: 230rpx;
		width: 230rpx;
		line-height: 230rpx;
		text-align: center;
	}
	.image_list .image_box{
		position: relative;
	}
	.image_list .img{
		height: 230rpx;
		width: 230rpx;
	}
	.image_list .close{
		height: 40rpx;
		width: 40rpx;
		position: absolute;
		top: 5rpx;
		right: 5rpx;
	}
	.show{
		border-color: #FF431D !important;
	}
	.add_show{
		display: none;
	}
	button{
		background: #1D74FF;
		color: #FFFFFF;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 30rpx;
		border-radius: 80rpx;
		margin: 20rpx;
	}
</style>
