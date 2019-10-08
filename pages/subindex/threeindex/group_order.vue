<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top_order">
			<view class="name" v-if="show_add == 1" @click="jump('../../subuser/address')">
				<view class="info">
					<text>{{address.name}}</text>
					<text>{{address.tel}}</text>
				</view>
				<view class="address">
					{{address.province_name}}{{address.city_name}}{{address.county_name}}{{address.address}}
				</view>
			</view>
			<view class="name" v-else-if="show_add == 0 " @click="jump('../../subuser/address')">
				<view class="">
					未设置收货地址，请设置
				</view>
			</view>

			<view class="more">
				<image src="../../../static/image/threeLayers/right.png" mode="widthFix"></image>
			</view>
			<view class="bg">
				<image src="../../../static/image/threeLayers/void.png" mode="widthFix"></image>
			</view>
		</view>
		<!-- 空隙 -->
		<view class="void"></view>
		<!-- 空隙 -->
		<view class="commodity">
			<view class="left">
				<image :src="shopp.thumb" mode="widthFix"></image>
			</view>
			<view class="right">
				<view class="title">
					{{shopp.title}}
				</view>
				<!-- <view class="button">
					<view>规格：盒</view>
				</view> -->
				<view class="price">
					<view class="momey">
						￥{{shopp.price}}
					</view>
					<view class="number">
						数量：x{{shopp.goodsnum}}
					</view>
				</view>
			</view>
		</view>
		<!-- 空隙 -->
		<view class="void"></view>
		<!-- 空隙 -->
		<view class="message">
			<view class="">
				备注：
			</view>
			<textarea value="" maxlength="50" placeholder="选填 买家留言（50字以内）" />
			</view>
		<!-- 空隙 -->
		<view class="void"></view>
		<!-- 空隙 -->
		<view class="recording">
			<view class="list">
				<text>商品小计</text>
				<text>￥{{type == 'single'?shopp.groupsprice:shopp.price}}</text>
			</view>
			<view class="list">
				<text>运费</text>
				<text>￥{{shopp.freight}}</text>
			</view>
			
		</view>
		
		<view class="payment">
			<view class="pa_test">
				支付方式
			</view>
			<view class="pa_box">
				<view class="box_list"  v-for="(item,index) in payment"  :key='item.id' @click="choice(index)">
					<view class="list_top">
						<image :src="item.logo" mode="widthFix"></image>
						<view class="">
							{{item.name}} <text style="display: none;">{{payment_id}}</text>
						</view>
					</view>
					
					<image v-show="item.choice" class="choice" src="../../../static/image/threeLayers/choice.png" mode="widthFix"></image>
				</view>
				
			</view>
		</view>
		
		<view class="pay">
			<view class="paying">
				需支付：<text>￥{{type == 'single'?(Number(shopp.groupsprice) + Number(shopp.freight)):(Number(shopp.price) + Number(shopp.freight))}}</text>
			</view>
			<view class="btn">
				<button type="primary" @click="payments()">立即购买</button>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components:{
			returns
		},
		data() {
			return {
				title: '确认订单',
				data:'',
				address:'',
				shopp:'',
				payment:'',
				payment_id:'',
				show_add:3,
				options:'',
				payment_name: '',
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			choice(index){ //选择支付方式
				for (let s of this.payment) {
					s.choice = false
				}
				
				this.payment[index].choice = true
				this.payment_id = this.payment[index].id
				console.log(this.payment[index])
				this.payment_name = this.payment[index].payment
			},
			payments(){
				if(!this.address){
					uni.showToast({
						icon:'none',
						title:'请添加收货地址'
					})
					return
				}
				if(!this.payment_id){
					uni.showToast({
						icon:'none',
						title:'请选择支付方式'
					})
					return
				}
				
				this.service.entire(this,'get',this.service.api_root.subindex.threeindex.grou_Confirm,{
					token:uni.getStorageSync('token'),
					aid:this.address.id,
					id:this.shopp.id,
					payment_id:this.payment_id,
					type:this.type
				},function(self,res){
					
					if(res.code == 0){
						self.service.entire(self,'get',self.service.api_root.subindex.threeindex.my_pay,{
							token:uni.getStorageSync('token'),
							orderid:res.data.orderid,
							payment_id:self.payment_id
						},function(selfs,ref){
							// console.log(self)
							
							self.common.order(ref,self,'../../subuser/assemble_order','pages/subuser/assemble_order')
					// 		uni.showToast({
					// 			icon:"none",
					// 			title:ref.msg
					// 		})
					// 	if(self.payment_name == 'Alipay'){
					// 		//当选择支付宝支付时
					// 	   // #ifndef  APP-PLUS
					// 		uni.showToast({
					// 			 icon:'none',
					// 			 title:'只能在APP内选择支付宝支付'
					// 		})
					// 		return
					// 	   // #endif
						   
					// 	   uni.showToast({
					// 			icon:'none',
					// 			title:'支付宝支付暂未开放'
					// 	   })
					// 		return
					// 	}else if(self.payment_name == 'Weixin'){//当选择微信支付时
					// 		// #ifdef H5  
      
					// 		let ua = navigator.userAgent.toLowerCase();
					// 		if (ua.match(/MicroMessenger/i) == "micromessenger"){ //判断是否是在微信内置浏览器打开
					
					// 		let appId = ref.data.data.appId
					// 		let timeStamp = ref.data.data.timeStamp
					// 		let nonceStr = ref.data.data.nonceStr
					// 		let package_id = ref.data.data.package
					// 		let signType = ref.data.data.signType
					// 		let paySign = ref.data.data.paySign
					// 		console.log(signType)
					// 		function onBridgeReady(appId,timeStamp,nonceStr,package_id,signType,paySign){
					// 			   WeixinJSBridge.invoke(
					// 					'getBrandWCPayRequest', {
					// 					"appId":appId,     //公众号名称，由商户传入     
					// 					"timeStamp":timeStamp,         //时间戳，自1970年以来的秒数     
					// 					"nonceStr":nonceStr, //随机串     
					// 					"package":package_id,     
					// 					"signType":signType,         //微信签名方式：     
					// 					"paySign":paySign //微信签名 
					// 				},function(res){
					// 					  if(res.err_msg == "get_brand_wcpay_request:ok" ){
					// 						uni.redirectTo({
					// 						 url:'../../subuser/assemble_order'
					// 						})
					// 						// 使用以上方式判断前端返回,微信团队郑重提示：
					// 						//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
					// 					} 
					// 				}); 
					// 			}
					// 			if (typeof WeixinJSBridge == "undefined"){
					// 			   if( document.addEventListener ){
					// 				   document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
					// 			   }else if (document.attachEvent){
					// 				   document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
					// 				   document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
					// 			   }
					// 			}else{
					// 				onBridgeReady(appId,timeStamp,nonceStr,package_id,signType,paySign);
					// 			}
					// 	   }else{ //普通浏览器微信支付
					// 			let string = encodeURI('http://wx.huanqiutongmall.com/h5/#/pages/subuser/assemble_order')
					// 			window.location.href = ref.data.data+'&redirect_url=' + string
					// 	   }
					// 		// #endif  
						   
						   
					// 		// #ifdef  APP-PLUS
					// 			console.log(ref.data.data)
					// 		uni.requestPayment({
					// 		    provider: 'wxpay',
					// 		    orderInfo:ref.data.data,//微信、支付宝订单数据
					// 		    success: function (ref) {
					// 			uni.redirectTo({
					// 				url:'../../subuser/assemble_order'
					// 			})
					// 		   },
					// 		   fail: function (err) {
					// 				console.log('fail:' + JSON.stringify(err));
					// 		   }
					// 		});  
					
					// 		// #endif
					// 	   }else if(self.payment_name == 'WalletPay'){ //选择钱包支付时
					// 			uni.showToast({
					// 				icon:'none',
					// 				title:ref.msg
					// 			})
					// 			setTimeout(function(){
					// 				uni.redirectTo({
					// 					url:'../../subuser/assemble_order'
					// 				})
					// 			},1500)
					// 		}
						})	
					}else{
						uni.showToast({
							icon:"none",
							title:res.msg
						})
					}
				})
			}
		},
		onLoad(options) {
			this.options = options
			this.type = options.type
			
			
		},
		onShow() {
			let options = this.options
			this.service.entire(this,'get',this.service.api_root.subindex.threeindex.ConfirmDetail,{
				token:uni.getStorageSync('token'),
				id:options.id,
				type:options.type,
			},function(self,res){
				if(res.code == -100){
					uni.showModal({
					    title: '提示',
					    content: res.msg,
						showCancel:false,
					    success: function (res) {
					        if (res.confirm) {
					           uni.navigateBack({
					               delta:1
					           });
					        }
					    }
					});
					return
				}
				self.data = res.data
				if(!res.data.address){
					self.show_add = 0
				}else{
					self.show_add = 1
				}
				self.address = res.data.address
				self.shopp = res.data.goods
				let data = res.data.payment_list
				for (let s of data) {
					s.choice = false
				}
				self.payment = data
			})
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		padding-bottom: 120rpx;
	}
	.void{
		width: 100%;
		height: 10rpx;
		background: #F2F2F2;
	}
	.top_order{
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.name{
		width: 90%;
		margin: 0 auto;
		padding: 40rpx 0;
		font-size: 30rpx;
		color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		
	}
	.info{
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.info text{
	}
	.more{
		width: 28rpx;
		height: 28rpx;
		margin-right: 20rpx;
	}
	.more image{
		width: 28rpx;
		height: 28rpx;
	}
	.address{
		width: 90%;
		margin-top: 10rpx;
		font-size: 28rpx;
		color: #666666;
	}
	.bg{
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	.bg image{
		width: 100%;
		height: 10rpx;
	}
	.commodity{
		width: 100%;
		height: 206rpx;
		padding: 30rpx 0;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
	.left{
		width: 30%;
		padding: 0 5%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.left image{
		width: 206rpx;
		height: 142rpx;
	}
	.right{
		width: 65%;
		height: 206rpx;
		margin-right: 5%;
		display: flex;
		justify-content: flex-start;
		/* align-items: flex-start; */
		align-items: stretch;
		align-content: space-between;
		flex-direction: column;
	}
	.title{
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
	}
	.button{
		color: #808080;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.button view{
		font-size: 24rpx;
		display: block;
		padding: 10rpx 8rpx;
		background: #F1F1F1;
	}
	.price{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.momey{
		font-size: 36rpx;
		color: #FF431D;
	}
	.number{
		font-size: 24rpx;
		color: #666666;
	}
	.message{
		width:100%;
		height: 200rpx;
		padding: 20rpx 0;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.message view{
		margin-left: 5%;
		font-size: 32rpx;
		color: #333333;
	}
	.message textarea{
		height: 150rpx;
		margin-top: 6rpx;
	}
	.recording{
		/* width: 100%; */
		font-size: 32rpx;
		color: #333333;
		padding: 0 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.list{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid #F2F2F2;
	}
	.pay{
		width: 100%;
		height: 120rpx;
		border-top: 1rpx solid #F1F1F1;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		
	}
	.paying{
		margin-left: 5%;
		color: #666666;
		font-size: 32rpx;
	}
	.paying text{
		color: #FF431D;
	}
	.btn{
		width: 224rpx;
		height: 90rpx;
		font-size: 36rpx;
		margin-right: 5%;
	}
	.btn button{
		border-radius: 45rpx;
	}
	
	.payment{
		font-size: 30rpx;
		padding: 20rpx;
	}
	.payment image{
		height: 52rpx;
		width: 52rpx;
	}
	.payment .pa_test{
		padding: 18rpx 0;
	}
	.payment .pa_box{
		
	}
	.payment .pa_box .box_list{
		display: flex;
		position: relative;
	}
	.payment .pa_box .box_list .list_top{
		display: flex;
		align-items: center;
		font-weight: 500;
		width: 100%;
		height: 100rpx;
	}
	.payment .pa_box .box_list .list_top image{
		margin-right: 38rpx;
	}
	.payment .pa_box .box_list .list_top view{
		flex-grow: 2;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.choice{
		position: absolute;
		right: 20rpx;
		top: 30rpx;
		height: 36rpx !important;
		width: 36rpx !important;
	}
</style>
