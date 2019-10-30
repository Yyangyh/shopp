<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="sea_top">
			<image @click="returns()" src="../../static/image/return.png" mode=""></image>
			<view class="sea_one">
				<image src="../../static/image/search1.png" mode=""></image>
				<input type="text"  @input="onKeyInput()" v-model="test" value="" />
			</view>
			<!-- <view class="search">
				搜索
			</view> -->
		</view>
		
		
		<view class="" v-if="type == 'scenic'">
			<view class="guess_spot" v-for="(item,index) in data" @click="detailed(item.id)">
				<view class="spot_left">
					<image :src="item.image_url" mode=""></image>
				</view>
				<view class="spot_right">
					<view class="spot_one">
						{{item.name}}
					</view>
					<view class="spot_three">
						{{item.address}}
					</view>
					<view class="spot_two">
						<text>{{item.comment_grade}}分</text>
						<!-- <text>条点评</text> -->
					</view>
					
					<view class="spot_four">
						<view class="">
						</view>
						<view class="">
							<text>￥{{item.price}}</text>起
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="product"  v-else>
			<view class="pr_list" v-for="item in data" :key='item.id'>
				<image :src="item.images" mode="aspectFill" @click="detailed(item.id,item.type)"></image>
				<!-- <view class="ticket">
					武汉-特色产品
				</view> -->
				<view class="address">
					{{item.title}}
					<!-- <text class="tips">特色产品</text> -->
		
				</view>
				<view class="bottom">
					<text class="price">￥{{item.price}}</text>
					<text class='data'>{{item.sales_count}}人购买</text>
					<text class="info" @click="detailed(item.id,item.type)">进入购买</text>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				test:'',
				data:'',
				type:''
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
			onKeyInput(){
				let that = this
				setTimeout(() => { 
					if(!that.test)return
					if(that.type == 'edition'){
						that.editionpass(that.test)
					}else if(that.type == 'scenic'){
						that.scenic(that.test)
					}else if(that.type == 'works'){
						that.works(that.test)
					}else{
						that.feature(that.test)
					}
				}, 0)
				
			},
			detailed(id,type){ //跳转判断
				let url
				if(this.type == 'edition'){
					url = '../subindex/edition_details?id=' + id
				}else if(this.type == 'scenic'){
					url = '../subindex/scenery_detailed?id=' + id
				}else{
					url= '../subindex/product_detailed?id=' + id + '&type=' + type
				}
				uni.navigateTo({
					url:url
				})
			},
			feature(keywords){//特色商品
				this.service.entire(this,'get',this.service.api_root.threeLayers.goodsList,{
					keywords:keywords
				},function(self,res){
					self.data = res.data.data
					console.log(self.data)
				})
			},
			editionpass(keywords){//版通商品
				this.service.entire(this,'get',this.service.api_root.subindex.Category_list,{
					keywords:keywords
				},function(self,res){
					self.data = res.data.data
					console.log(self.data)
				})
			},
			works(keywords){//文创
				this.service.entire(this, 'get', this.service.api_root.subindex.org_category_list,{
					keywords:keywords
				}, function(self, res) { //文创
					console.log(res)
					self.data = res.data.data
				})
			},
			scenic(keywords){//景点
				this.service.entire(this,'get',this.service.api_root.subindex.scen_list,{
					keywords:keywords
				},function(self,res){
					self.data = res.data.data
					console.log(self.data)
				})
			}
		},
		onLoad(e) {
			this.type = e.type
		}
	}
</script>

<style scoped>
	.content{
		/* padding-top: 0; */
	}
	
	.sea_top{
		height: 105rpx;
		padding: 0 44rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		top: var(--status-bar-height);
		z-index: 99;
		left: 0;
		display: flex;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	}
	.sea_top image{
		height: 50rpx;
		width: 50rpx;
	}
	.sea_top .sea_one{
		background: #F1F1F1;
		height: 60rpx;
		border-radius: 30rpx;
		flex-grow: 2;
		display: flex;
		align-items: center;
	}
	.sea_top .sea_one image{
		width: 40rpx;
		height: 40rpx;
		margin: 0 10rpx;
	}
	.sea_top .sea_one input{
		flex-grow: 2;
	}
	.sea_top .search{
		margin-left: 20rpx;
		font-size: 32rpx;
	}
	.product {
		background: #F1F1F1;
		overflow: hidden;
	}
	
	.product .pr_list {
		margin: 20rpx;
		padding: 20rpx;
		background: #fff;
		border-radius: 10rpx;
	}
	
	.product .bottom .price {
		color: #FF431D;
		margin-right: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	
	.product .bottom .data {
		color: #999999;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	
	.product image {
		width: 100%;
		height: 300rpx;
	}
	
	.product .info {
		float: right;
		color: #FF431D;
		border: 1rpx solid #FF431D;
		border-radius: 10rpx;
		font-size: 30rpx;
		padding: 10rpx;
	}
	.address {
		color: #333;
		font-size: 30rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;	
		overflow: hidden;
		text-overflow: ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical; 
		-webkit-line-clamp:2; 
	}
	
	.guess_spot{
		display: flex;
		align-items: center;
		height: 200rpx;
		/* margin-bottom: 42rpx; */
		padding: 0 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.guess_spot:last-child{
		margin-bottom: 0rpx;
	}
	.guess_spot .spot_left{
		position: relative;
		margin-right: 24rpx;
	}
	.guess_spot .spot_left image{
		height: 168rpx;
		width: 230rpx;
		border-radius: 10rpx;
	}
	.guess_spot .spot_right{
		flex-grow: 2;
		height: 100%;
		position: relative;
	}
	.guess_spot .spot_right .spot_one{
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 5rpx;
	}
	.guess_spot .spot_right .spot_two{
		color: #999999;
		font-size: 24rpx;
	}
	.guess_spot .spot_right .spot_two text:first-child{
		font-size: 28rpx;
		color: #1D9DFF;
		font-weight: bold;
		margin-right: 16rpx;
	}
	.guess_spot .spot_right .spot_three{
		color: #999999;
		font-size: 24rpx;
	}
	.guess_spot .spot_right .spot_four{
		
		position: absolute;
		right: 10rpx;
		bottom: 10rpx;
		
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(1){
		font-size: 24rpx;
		color: #666666;
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(1) text{
		font-size: 20rpx;
		color: #EC808D;
		border: 1rpx solid #EC808D;
		padding: 6rpx 8rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(1) text:nth-of-type(2){
		color: #00D3B3;
		border: 1rpx solid #00D3B3;
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(2){
		font-size: 24rpx;
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(2) text{
		color: #FF431D;
		font-size: 36rpx;
		/* font-weight: bold; */
		margin-right: 10rpx;
	}
</style>
