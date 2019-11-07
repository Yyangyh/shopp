<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="">
			<view class="member">
				超级会员
			</view>
			<view class="tab">
				<view class="tab_list" v-for="(item,index) in data" :key='item.id' @click="chiose(index)">
					<image :src="item.images_url" mode="widthFix"></image>
					<view class="list_test">
						<view class="test_one">
							会员等级：{{item.name}}
						</view>
						<view class="test_two">
							开通价格：{{item.user_pay_money}}
						</view>
						<view class="test_three">
							满减：{{item.full_reduction_price == 0?'无满减':'满'+item.order_price+'减'+item.full_reduction_price}}
						</view>
						<view class="test_four">
							折扣：{{item.discount_rate}}折
						</view>
					</view>
					<image v-show="item.chiose" class="chiose" src="/static/image/threeLayers/chiose.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="buy">
			<view class="buy_test">
				需支付<text>￥{{money}}</text>
			</view>
			<view class="buying" @click="ascertain()">
				立即购买
			</view>
		</view>
		
		<view class="mask" v-if="show" @click="show = !show">
		
		</view>
		<view class="mask_box" :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''">
			<image class="close" src="../../../static/image/index/close.png" mode="widthFix" @click="show = !show"></image>
			<view class="box_top">
				支付方式
			</view>
			<view class="pa_box">
				<view class="box_list" v-for="(item,index) in pay_list" :key='item.id' @click="choice_pay(index)">
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
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'开通会员',
				data:'',
				money:'',
				levelid:'',
				pay_list:'',
				show:false,
			}
		},
		methods:{
			chiose(index){
				for (let s of this.data) {
					s.chiose = false
				}
				this.data[index].chiose = true
				this.data[index].id = this.levelid
				this.money = this.data[index].user_pay_money
			},
			choice_pay(index) {
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
				            that.service.entire(that, 'get', that.service.api_root.subuser.threeuser.Level_pay, {
				            	
				            	orderid: that.orderid,
				            	payment_id: that.payment_id
				            }, function(self, ref) {
								self.show = false
				            	self.common.order(ref,self,'/pages/subuser/threeuser/open_member','pages/subuser/threeuser/open_member')
				            })
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
				
			
			},
			ascertain(){
				this.service.entire(this,'get',this.service.api_root.subuser.threeuser.Level_Confirm,{levelid:this.levelid},function(self,res){
					console.log(res)
					let data = res.data.payment_list
					for (let s of data) {
						s.choice = false
					}
					console.log(data)
					self.pay_list = data
					self.orderid = res.data.orderid
					self.show = !self.show
				})
			}
		},
		
		onShow() {
			this.service.entire(this,'get',this.service.api_root.subuser.threeuser.Level_lists,{},function(self,res){
				console.log(res)
				for (let s of res.data) {
					s.chiose = false
				}
				res.data[0].chiose = true
				self.money = res.data[0].user_pay_money
				self.levelid = res.data[0].id
				self.data = res.data
				
			})
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
	}
	.member{
		margin: 20rpx;
	}
	.tab .tab_list{
		display: flex;
		/* margin-bottom: 30rpx; */
		position: relative;
		padding:  20rpx;
		border-bottom: 2rpx solid #f1f1f1;
	}
	.tab .tab_list image{
		width: 194rpx;
		height: 194rpx;
	}
	.tab .tab_list .list_test{
		font-size: 28rpx;
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.chiose{
		height: 45rpx !important;
		width: 45rpx !important;
		right: 20rpx;
		top: 50%;
		transform: translateY(-50%);
		position: absolute !important;
	}
	.buy{
		height: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		font-size: 30rpx;
	}
	.buy .buy_test text{
		font-size: 40rpx;
		color: #FF431D;
	}
	.buy .buying{
		background: #1D74FF;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 45rpx;
		width: 223rpx;
		text-align: center;
		
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
