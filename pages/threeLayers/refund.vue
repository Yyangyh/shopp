<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="order">
			<view class="order_num">
				<view class="num_one">
					<image :src="goods_data.images" mode="widthFix"></image>
				</view>
				<view class="num_two">
					<view class="">
						{{goods_data.title}}
					</view>
					<view class="specs">
						<text v-for="(item,indexs) in goods_data.spec" :key='indexs'>{{item.type}}：{{item.value}}</text>
					</view>
				</view>
				<view class="num_three">
					<view class="">
						￥{{goods_data.price}}
					</view>
					<view class="">
						数量：X{{goods_data.buy_number}}
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
					<!-- ￥ -->{{order_data.pay_price}}
				</view>
			</view>
		</view>
		
		<view class="refund_chiose">
			<view class="chiose_one" :class="{show:show == 0}" @click="chiose(0)">
				<view class="">
					仅退款
				</view>
				<view class="chiose_explain">
					未收到货(未签收),协商同意前提下
				</view>
			</view>
			<view class="chiose_one" :class="{show:show == 1}" @click="chiose(1)">
				<view class="">
					退款退货
				</view>
				<view class="chiose_explain">
					已收到货,需要退换已收到的货物
				</view>
			</view>
		</view>
		
		<view class="refund_form">
			<view class="from_one">
				<view class="">
					退款/退货原因：
				</view>
				<picker class="picker" @change="bindPickerChange" :value="index" :range="return_only" v-show="show ==0 || show == ''">
					<view class="uni-input">{{return_only[index]}}</view>
				</picker>
				<picker class="picker" @change="bindPickerChange" :value="index" :range="return_money" v-show="show == 1">
					<view class="uni-input">{{return_money[index]}}</view>
				</picker>
			</view>
			<view class="from_one"  v-show="show == 1">
				<view class="">
					退款数量：
				</view>
				<view class="from_num">
					<text @click="change_num(1)">-</text> <view>{{num}}</view> <text @click="change_num(2)">+</text>
				</view>
			</view>
			<view class="from_one">
				<view class="">
					退款金额：
				</view>
				<view class="from_money">
					￥<input type="text" v-model="price"/>
				</view>
			</view>
			<view class="from_two">
				<view class="">
					退款说明
				</view>
				<textarea v-model="msg" value="" maxlength='200' placeholder="退款说明 5~200 个字符之间" />
			</view>
			<view class="from_two">
				<view class="">
					上传凭证（最多上传三张）
				</view>
				<view class="image_list">
					<view class="image_box" v-for="(item,index) in image_list" >
						<image class="img" :src="item" mode="aspectFill" :key='index'></image>
						<image class="close" @click="deletes(index)" src="../../static/image/secondary/close2.png" mode=""></image>
					</view>
					<view class="add" :class="{add_show:add_show == 2}" @click="add_image()">
						+
					</view>
				</view>
			</view>
		</view>
		<button @click="ascertain()">确认</button>
	</view>
</template>

<script>
	
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'退款/退货申请',
				show:0,
				add_show:1,
				data:'',
				goods_data:'',
				order_data:'',
				return_only:['请选择'],
				return_money:['请选择'],
				index:0,
				image_list:[],
				images:[],
				num:'',
				price:'',
				reason:'',
				msg:''
			}
		},
		methods:{
			bindPickerChange: function(e) {
				this.index = e.target.value
				this.reason= e.target.value
			},
			chiose(show){
				this.show = show
				this.index = 0
			},
			change_num(type){
				if(type == 1){
					this.num == 1? this.num = 1 : this.num --
					
				}else{
					this.num == this.goods_data.buy_number?this.num = this.goods_data.buy_number :this.num ++
				}
			},
			add_image(){
				let that = this
				uni.chooseImage({
				    count: 1, //默认9
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						uni.uploadFile({
						    url: that.service.api_root.common.upload_image,
						    filePath: res.tempFilePaths[0],
						    name: 'file',
						    formData: {
						        token: uni.getStorageSync('token')
						    },
						    success: (ref) => {
						        if(JSON.parse(ref.data).code == 0){
									// console.log(JSON.parse(ref.data))
									 that.image_list.push(res.tempFilePaths[0])
									 that.images.push(JSON.parse(ref.data).data.file)
									 if(that.image_list.length == 3)that.add_show = 2
								}
						    }
						});
				    }
				});
			},
			deletes(index){
				this.image_list.splice(index,1)	
				this.images.splice(index,1)
				if(this.image_list.length < 3)this.add_show = 1
			},
			ascertain(){
				let data = new Object()
				if(this.show == 1) data.number = this.num
				data.price = this.price
				data.images = this.images
				data.type = this.show
				if(this.show == 0)data.reason = this.return_only[this.reason] 
				if(this.show == 1)data.reason = this.return_money[this.reason] 
				if(data.reason =='请选择' || this.price =='' || this.msg.length < 5 || this.images.length == 0){
					uni.showToast({
						icon:'none',
						title:'请完整填写退款信息'
					})
					return
				}
				data.msg = this.msg
				let arr_value = Object.values(data)
				if(arr_value.indexOf(undefined) != -1 || arr_value.indexOf(undefined)  != -1){
					uni.showToast({
						icon:'none',
						title:'请完整填写退款信息'
					})
					return
				}
				data.order_id = this.oid
				data.order_detail_id = this.id
				this.service.entire(this,'post',this.service.api_root.threeLayers.Create,data,function(self,res){
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
				
			}
		},
		
		onLoad(e) {
			this.oid = e.oid
			this.id = e.id
			this.service.entire(this,'get',this.service.api_root.threeLayers.Aftersale,{
				oid:e.oid,
				did:e.id
			},function(self,res){
				self.data = res.data
				self.goods_data = res.data.goods
				self.num = res.data.goods.buy_number
				self.order_data = res.data.order
				self.price = res.data.order.pay_price
				self.return_only.push(...res.data.return_only_money_reason)
				self.return_money.push(...res.data.return_money_goods_reason_list)
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
