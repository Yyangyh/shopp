<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top_test">
			<view class="detail">
				<text class="h1">{{name}}</text>
				<text class="h2">需在60分钟内完成订单支付，否则该订单将自动取消。</text>
			</view>
			<view class="amount">
				<text>应付总额：</text>
				<text class="digital">￥{{data.price}}</text>
			</view>
		</view>
		<view class="interval">
			
		</view>
		<view class="pay">
			<view class="log">
				<text class="h10">支付方式</text>
			</view>
			<view class="log_list" v-for="(item,index) in payment_list" :key='item.id' @click="choice(index)">			
				<view class="list_one">
					<image :src="item.logo" mode="widthFix"></image>
					<view class="h9">{{item.name}}</view>
				</view>
				<image v-show="item.choice" class="choice" src="../../static/image/threeLayers/choice.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="payment()">立即支付</button>
		</view>
		
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'订单支付',
				name:'',
				price:'',
				payment_list:'',
				payment_id:'',
				payment_name:'',
				data:''
			}
		},
		methods:{
			choice(index){
				for (let s of this.payment_list) {
					s.choice = false
				}
				this.payment_list[index].choice = true
				this.payment_list = JSON.parse(JSON.stringify(this.payment_list))
				this.payment_id = this.payment_list[index].id
				this.payment_name = this.payment_list[index].payment
			},
			payment(){
				let that = this
				if(!this.payment_id){
					uni.showToast({
						icon:'none',
						title:'请选择支付方式'
					})
					return
				}
				if(this.data.status != 0){
					uni.showToast({
						icon:'none',
						title:'订单已过期，请重新下单'
					})
					return
				}
				uni.showModal({
				    title: '提示',
				    content: '是否确定支付？',
				    success: function (res) {
				        if (res.confirm) {
				            // console.log('用户点击确定');
							that.service.entire(that,'get',that.service.api_root.threeLayers.scen_pay,{
								orderid:that.orderid,
								payment_id:that.payment_id
							},function(self,ref){
								console.log(ref)
								self.common.order(ref,self,'../subuser/scen_order?status=-2','pages/subuser/scen_order?status=-2')
							})	
				        } else if (res.cancel) {
				            // console.log('用户点击取消');
							return
				        }
				    }
				});
			}
		},
		onLoad(e) {
			this.name = e.name
			this.orderid = e.id
			this.service.entire(this,'get',this.service.api_root.threeLayers.scen_Confirm_Detail,{
				orderid:e.id
			},function(self,res){
				console.log(res)
				self.data = res.data
				let data = res.data.payment_list
				for (let s of data) {
					s.choice = false
				}
				self.payment_list = data
			})
		}
	}
</script>

<style>
	.content{
		width: 100%;
		/* background: #F1F1F1; */
	}
	.top_test{
		width: 100%;
		box-sizing: border-box;
		margin-top: 20rpx;
		/* padding: 0 20rpx; */
		background: #FFFFFF;
	}
	.detail{
		width: 100%;
		box-sizing: border-box;
		color: #999999;
		border-bottom: 2rpx solid #F1F1F1;
		font-size: 28rpx;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
	}
	.h1{
		color: #000000;
		font-size: 34rpx;
		font-weight: bold;
		padding: 0 20rpx;
	}
	.h2{
		padding: 26rpx 20rpx;
	}
	.amount{
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		color: #999999;
		font-size: 28rpx;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.digital{
		color: #FF431D;
		font-size: 36rpx;
	}
	.interval{
		width: 100%;
		height: 30rpx;
		background: #F1F1F1;
	}
	.pay{
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	.log{
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.log:first-of-type{
		border-bottom: 2rpx solid #F1F1F1;
	}
	.h9{
		height: 100%;
		align-items: center;
		font-size: 30rpx;
		color: #333333;
	}
	.h10{
		color: #000000;
	}
	.log_list{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid #F1F1F1;
		height: 100rpx;
	}
	.log_list .list_one{
		display: flex;
	}
	.list_one image{
		width: 52rpx;
		height: 52rpx;
		margin-right: 38rpx;
	}
	.choice{
		height: 36rpx !important;
		width: 36rpx !important;
	}
	.btn{
		width: 100%;
		height: 90rpx;
		text-align: center;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-top: 84rpx;
		color: #FFFFFF;
		font-size: 36rpx;
	}
	.btn button{
		width: 100%;
		height: 90rpx;
		background: #1D74FF;
		color: #FFFFFF;
		font-size: 36rpx;
		border-radius: 90rpx;
	}
</style>view
