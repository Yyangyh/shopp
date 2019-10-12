<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top_img">
			<image :src="data.images" mode="aspectFill"></image>
			<view class="top_operation">
				<image src="../../static/image/returns.png" mode="widthFix" @click="returns()"></image>
				<view class="">
					<image class="love" src="../../static/image/love.png" mode="widthFix"></image>
					<image class="share" src="../../static/image/share.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="product_price">
			<view class="pr_top">
				{{data.title}}
			</view>
			<view class="price">
				<text>￥{{data.price}}</text>
				<text>已售{{data.sales_count}}</text>
			</view>
			<view class="pr_bottom">
				<view class="pr_coupon">
					<image src="../../static/image/coupon.png" mode="widthFix"></image>
					<text>优惠券</text>
				</view>
				<view class="receive_co">
					<text>领券</text>
					<image src="../../static/image/go.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="pr_shop">
			<view class="sh_top">
				<image src="../../static/image/portrait1.png" mode="widthFix"></image>
				<text>文旅特色产品</text>
			</view>
			<view class="sh_bottom">
				<text>进店逛逛</text>
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view>

		<view class="user_comment">
			<view class="user_top">
				用户评论
			</view>
			<view class="user">
				<image class="user_img" src="../../static/image/portrait.png" mode="widthFix"></image>
				<view class="user_test">
					<view>小小纹~</view>
					<text>2019-05-01</text>
				</view>
				<view class="user_star">
					<image src="../../static/image/star.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="com_content">
				<view class="content_test">
					<view class="">
						这个评论插件叫AntSay，简单三步即可在自己的网站里嵌入，超轻。
					</view>
					<view class="">
						1.获取APP ID
					</view>
					<view class="">
						2.一行代码引入组件
					</view>
					<view class="">
						3.配置几个参数赶紧使用吧，地址：http:/say.alipay.net/
					</view>
				</view>
				<view class="content_img">
					<image src="../../static/image/greenImg.png" mode=""></image>
					<image src="../../static/image/greenImg.png" mode=""></image>
					<image src="../../static/image/greenImg.png" mode=""></image>
				</view>
				<view class="more">
					查看更多评论
				</view>
			</view>
		</view>

		<view class="pro_img">
			<view class="img_test">
				产品介绍
			</view>
			<rich-text class="test" :nodes="data.content_web"></rich-text>
			<!-- <image src="../../static/image/product4.png" mode="widthFix"></image> -->
		</view>

		<view class="recommend">
			<view class="recommend_test">
				猜你喜欢
			</view>
			<view class="spot">
				<view class="sp_list">
					<image src="../../static/image/duck1.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥100</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck2.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck1.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥100</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck2.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
			</view>
		</view>

		<view class="bottom_tab">
			<view class="tab_list">
				<image src="../../static/image/shops.png" mode="widthFix"></image>
				<view class="">
					店铺
				</view>
			</view>
			<!-- <view class="tab_list" @click="jump('../threeLayers/shoppingCart')">
				<image src="../../static/image/shopping.png" mode="widthFix"></image>
				<view class="">
					购物车
				</view>
			</view> -->
			<view class="tab_list tab_mid" >
				<image src="../../static/image/collection.png" mode="widthFix"></image>
				<view class="">
					收藏
				</view>
			</view>
			<view class="tab_list tab_right">
				<!-- <text @click="show = 1,type = 'cart'">加入购物车</text> -->
				<text @click="show = 1,type = 'goods'">立即购买</text>
			</view>
		</view>



		<view class="mask_black" v-show="show == 1" @click="show = 0">

		</view>
		<view class="mask_white" :class="show===0 ? 'mask_none' : show===1 ? 'mask_show' : ''">
			<view class="wh_top">
				<image :src="data.images" mode="aspectFill"></image>
				<view class="wh_right">
					<view class="wh_test1">
						￥{{price}}
					</view>
					<view class="wh_test2">
						库存{{inventory}}件
					</view>
					<view class="wh_test3">
						选择 规格 数量
					</view>
				</view>
			</view>

			<view class="norms">
				<view class="norms_list" v-for="(item,index) in choose_list" :key='item.id'>
					<view class="norms_test">
						{{item.name}}
					</view>
					<view class="norms_box">
						<button v-for="(items,indexs) in item.value" :key='indexs' :disabled="items.disabled" :class="{norms_show:items.show == true,disabled:items.disabled}"
						 @click="choose(index,indexs)">{{items.name}}</button>
					</view>
				</view>
			</view>
			<view class="wh_bottom">
				<view class="">
					购买数量
				</view>
				<view class="change">
					<text class="reduce" @click="reduce()">-</text>
					<text class="num">{{num}}</text>
					<text class="plus" @click="plus()">+</text>
				</view>
			</view>
			<button class="save" @click="save()">确定</button>
			<image class="close" src="../../static/image/secondary/close2.png" mode="widthFix" @click="show = 0"></image>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: 0,
				norms_show: null,
				data: '',
				num: 1,
				id: '',
				choose_list: [],
				record: 0,
				spec: [],
				index_list: 0,
				price:'',
				type:'',
				inventory:''
			}
		},
		methods: {
			returns() {
				this.common.returns(this)
			},
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			reduce() { //数量减
				this.num == 1 ? this.num = 1 : this.num--
			},
			plus() { //数量加
				this.num++
			},
			choose(index, indexs) { //选择规格
				// console.log(this.index_list,index)
				
				let data = this.choose_list
				
				if(index == this.index_list){ //同级选择
					
					this.index_list == data.length - 1? this.index_list = index : this.index_list = index + 1 //记录index
					for (let s of data[index].value) {
						s.show = false
					}
					data[index].value[indexs].show = true
					this.choose_list = JSON.parse(JSON.stringify(data))
					
					this.spec[index] = {  
						type: data[index].name,
						value: data[index].value[indexs].name
					}
					// console.log(this.spec)
					if(index == data.length -1){ //请求商品库存
						this.service.entire(this,'post',this.service.api_root.subindex.SpecDetail,{
							id: this.id,
							spec: this.spec
						},function(self,res){
							self.price = res.data.price
							self.inventory = res.data.inventory
						})
						return
					}
				}else if(index < this.index_list){  //向上选择
					this.spec.length = index
					for (let i = index; i < data.length; i++) {
						for (let k of data[i].value) {
							k.show = false
						}
					}
					for (let i = index + 1; i < data.length; i++) {
						for (let k of data[i].value) {
							k.disabled = true
						}
					}
					data[index].value[indexs].show = true
					data[index].value[indexs].disabled = false
					this.choose_list = JSON.parse(JSON.stringify(data))
					
					this.spec.push({
						type: data[index].name,
						value: data[index].value[indexs].name
					})
					this.index_list = this.spec.length
					// console.log(this.spec)
				}
				
				this.service.entire(this, 'post', this.service.api_root.subindex.SpecType, {
					id: this.id,
					spec: this.spec
				}, function(self, res) {
					console.log(res)
					if (res.code == 0) {
						let res_data = res.data
						for (let k of res_data) {
							for (let s of data[self.index_list].value) {
								if(k == s.name) s.disabled = false
							}
						}
						
						self.choose_list = data
					}
				})
				// console.log(this.index_list,index)

			},
			save() { //确定
				if(this.type == 'cart'){
					this.service.entire(this, 'post', this.service.api_root.subindex.Save, {
						goods_id: this.id,
						stock: this.num,
						spec: this.spec,
						token: uni.getStorageSync('token')
					}, function(self, res) {
						if (res.code == 0) {
							setTimeout(function() {
								uni.navigateTo({
									url: '../threeLayers/shoppingCart'
								})
							}, 1000)
						}
					})
				}else{
					let data = {
						id:this.id,
						type:'goods',
						num:this.num,
						spec:this.spec
					}
					uni.navigateTo({
						url: '../threeLayers/order?data='+JSON.stringify(data)
					})
				}
				
			}
		},
		onLoad(options) {
			this.id = options.id
			this.service.entire(this, 'get', this.service.api_root.subindex.Detail, {
				goods_id: options.id
			}, function(self, res) {
				
				self.data = res.data.goods
				self.price = res.data.goods.price
				self.inventory = res.data.goods.inventory
				let list = res.data.goods.specifications.choose
				if(list != ''){
					for (let s of list) {
						for (let k of s.value) {
							k.show = false
							k.disabled = true
						}
					}
					for (let s of list[0].value) {
						s.disabled = false
					}
				}
				self.choose_list = list
			})
		}
	}
</script>

<style scoped>
	.content {
		background: #F1F1F1;
		padding-bottom: 100rpx;
	}
	
	.top_img {
		width: 100%;
		height: 360rpx;
		position: relative;
	}
	
	.top_img image {
		width: 100%;
		height: 100%;
	
	}
	
	.top_img .top_operation {
		width: 100%;
		position: absolute;
		z-index: 99;
		top: 0;
		height: 60rpx;
		padding: 20rpx 0;
		display: flex;
		/* flex-direction: column; */
		/* flex-wrap: wrap; */
		justify-content: space-between;
		align-items: center;
		/* margin: 0 20rpx; */
	}
	
	.top_img .top_operation image {
		height: 50rpx;
		width: 50rpx;
	}
	
	.top_img .top_operation image:nth-of-type(1) {
		margin-left: 30rpx;
	}
	
	.top_img .top_operation .love {
		margin-right: 20rpx;
	}
	
	.top_img .top_operation .share {
		margin-right: 30rpx;
	}
	
	.product_price {
		background: #fff;
		width: 96%;
		font-size: 32rpx;
		position: relative;
		top: -20rpx;
		left: 2%;
		border-radius: 10rpx;
	}
	
	.product_price .pr_top {
		/* font-weight: bold; */
		font-size: 30rpx;
		padding: 20rpx;
	
	}
	
	.product_price .price {
		display: flex;
		justify-content: space-between;
		padding-right: 28rpx;
		padding-left: 12rpx;
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid #F4F4F4;
		color: #999;
		font-size: 24rpx;
	}
	
	.product_price .price text:nth-of-type(1) {
		/* font-weight: bold; */
		color: #FF431D;
		font-size: 36rpx;
	}
	
	.product_price .pr_bottom {
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
	}
	
	.product_price .pr_bottom image {
		width: 32rpx;
		height: 32rpx;
	}
	
	.product_price .pr_bottom .pr_coupon {
		color: #999;
		font-size: 30rpx;
	}
	
	.product_price .pr_bottom .pr_coupon image {
		margin-right: 20rpx;
	}
	
	.product_price .pr_bottom .receive_co {
		display: flex;
		align-items: center;
		text-align: right;
		color: #999;
		font-size: 24rpx;
	}
	
	.pr_shop {
		background: #fff;
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		line-height: 120rpx;
		padding: 0 20rpx;
	}
	
	.pr_shop .sh_top {
		display: flex;
		align-items: center;
		color: #333333;
		font-size: 32rpx;
		font-weight: 400;
	}
	
	.pr_shop .sh_top image {
		height: 90rpx;
		width: 90rpx;
		margin-right: 20rpx;
	}
	
	.pr_shop .sh_bottom {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #999;
		padding-right: 2%;
	}
	
	.pr_shop .sh_bottom image {
		height: 32rpx;
		width: 32rpx;
	}
	
	.user_comment {
		background: #fff;
		margin-top: 20rpx;
		padding: 20rpx 30rpx;
	}
	
	.user_comment .user_top {
		font-weight: bold;
		font-size: 28rpx;
	
	}
	
	.user_comment .user {
		display: flex;
		align-items: center;
		margin: 20rpx 0;
	}
	
	.user_comment .user .user_img {
		width: 90rpx;
		height: 90rpx;
	}
	
	.user_comment .user .user_test {
		margin: 0 20rpx;
		font-size: 32rpx;
	}
	
	.user_comment .user .user_test view {
		font-weight: bold;
		color: #333333;
		font-size: 28rpx;
	}
	
	.user_comment .user .user_test text {
		font-size: 24rpx;
		color: #999999;
		
	}
	
	.user_comment .user .user_star {
		align-self: flex-start;
	}
	
	.user_comment .user .user_star image {
		height: 26rpx;
		width: 26rpx;
	}
	
	.user_comment .com_content .content_test view {
		font-size: 24rpx;
		color: #666666;
	}
	
	.user_comment .com_content .content_img image {
		height: 120rpx;
		width: 120rpx;
		margin-right: 20rpx;
		margin-top: 30rpx;
	}
	
	.user_comment .com_content .more {
		font-size: 32rpx;
		color: #666666;
		margin: 20rpx 0;
	}
	
	.pro_img {}
	
	.pro_img .img_test {
		text-align: center;
		padding: 30rpx;
		font-size: 32rpx;
	}
	
	.pro_img image {
		width: 100%;
	}
	
	.recommend .recommend_test {
		font-size: 36rpx;
		font-weight: bold;
		padding: 30rpx 20rpx;
		background: #fff;
		margin-top: 30rpx;
	}
	
	.spot {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
		background: #fff;
	}
	
	.spot .sp_list {
		width: 45%;
		height: 400rpx;
		background: #fff;
		box-shadow: 0px 0px 4px #eee;
		margin-bottom: 30rpx;
		border-top-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
	}
	
	.spot .sp_list image {
		width: 100%;
		height: 200rpx;
	}
	
	.ticket {
		color: #666666;
		font-size: 24rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	
	.address {
		color: #333;
		font-size: 26rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}
	
	.tips {
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}
	
	.spot .sp_list .bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	
	.spot .sp_list .bottom .price {
		color: #FF431D;
	}
	
	.spot .sp_list .bottom .data {
		color: #999999;
		font-size: 26rpx;
	}
	
.bottom_tab{
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		padding: 20rpx 40rpx 20rpx 40rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
	}
	.bottom_tab .tab_list{
		text-align: center;
		
	}
	.bottom_tab .tab_mid{
		margin-left: -80rpx !important;
	}
	.bottom_tab .tab_list image{
		height: 44rpx;
		width: 44rpx;
	}
	.bottom_tab .tab_list view{
		color: #999999;
	}
	.bottom_tab .tab_right{
		font-size: 32rpx;
		color: #fff;
	}
	.bottom_tab .tab_right text{
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 30rpx;
		font-size: 30rpx;
	}
	.bottom_tab .tab_right text:nth-of-type(1){
		background: #1D9DFF;
		border-radius: 20rpx;
		width: 320rpx;
		
	}
	.bottom_tab button{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 80rpx;
		font-size: 30rpx;
		color: #fff;
		background: #999999;
	}
	
	
	.mask_black {
		position: fixed;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 1);
		opacity: 0.3;
		top: 0;
		left: 0;
		z-index: 998;
	}
	
	.mask_white {
		position: fixed;
		padding: 20rpx;
		background: #fff;
		box-sizing: border-box;
		width: 100%;
		min-height: 884rpx;
		bottom: 0;
		left: 0;
		z-index: 999;
		transition: .3s;
		transform: translateY(100%);
	}
	.mask_none{
		transform: translateY(100%);
	}
	.mask_show{
		transform: translateY(0);
	}
	
	.mask_white .wh_top {
		display: flex;
		align-items: flex-end;
		color: #333333;
		font-size: 24rpx;
		margin-bottom: 28rpx;
	}
	
	.mask_white .wh_top image {
		width: 250rpx;
		height: 160rpx;
		margin-right: 22rpx;
	}
	
	.mask_white .wh_top .wh_right {}
	
	.mask_white .wh_top .wh_right .wh_test1 {
		color: #FF431D;
		font-size: 36rpx;
	}
	
	.mask_white .wh_top .wh_right .wh_test2 {
		color: #999999;
		font-size: 24rpx;
		margin: 7rpx 0 8rpx 0;
	}
	
	.norms_test {
		margin: 0rpx 0 18rpx 0;
		font-size: 30rpx;
	}
	
	.norms_box button {
		display: inline-block;
		background: #F1F1F1;
		color: #333333;
		font-size: 28rpx;
		height: 60rpx;
		line-height: 60rpx;
		padding: 0 34rpx;
		text-align: center;
		margin-bottom: 26rpx;
		margin-right: 20rpx;
		border-radius: 10rpx;
	
	}
	
	.wh_bottom {
		display: flex;
		justify-content: space-between;
		padding: 34rpx 0;
		border-top: 2rpx solid #F1F1F1;
		font-size: 30rpx;
	}
	
	.wh_bottom .change {
		display: flex;
		align-items: center;
	}
	
	.wh_bottom .reduce {
		display: inline-block;
		background: #F3F3F3;
		height: 54rpx;
		line-height: 54rpx;
		text-align: center;
		width: 74rpx;
		color: #999999;
		font-size: 46rpx;
		border-radius: 10rpx;
	}
	
	.wh_bottom .num {
		background: #E8E8E8;
		font-size: 30rpx;
		display: inline-block;
		height: 54rpx;
		line-height: 54rpx;
		border-radius: 10rpx;
		width: 74rpx;
		text-align: center;
		margin: 0 4rpx;
	}
	
	.wh_bottom .plus {
		background: #E8E8E8;
		font-size: 46rpx;
		display: inline-block;
		height: 54rpx;
		line-height: 54rpx;
		color: #999999;
		width: 74rpx;
		text-align: center;
		border-radius: 10rpx;
	}
	
	.mask_white .save {
		background: #1D74FF;
		color: #fff;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 80rpx;
		position: absolute;
		bottom: 20rpx;
		left: 2%;
		width: 96%;
	}
	
	.close {
		height: 40rpx;
		width: 40rpx;
		position: absolute !important;
		top: 12rpx;
		right: 12rpx;
	}
	
	.norms_show {
		background: #1D9DFF !important;
		color: #fff !important;
	}
	
	.disabled {
		opacity: 0.5;
	}
</style>
