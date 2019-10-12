<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<returns :titles='title'></returns>
		
		
		<scroll-view scroll-x class="scroll-view_H">
			<view class="scroll-view_box">
				<view class="table" v-for="(item,index) in data">
					<view class="tab_list" v-for="(items,indexs) in data[index]"  @click="jump('../threeLayers/allclass?type=works&id='+items.id)">
						<image :src="items.icon" mode=""></image>
						<view class="">
							{{items.name}}
						</view>
					</view>
				</view>
			</view>
			
		</scroll-view>
		
		
		<view class="exhibition">
			<view class="left">
				<image src="../../static/image/secondary/literature1.png" mode="scaleToFill"></image>
			</view>
			<view class="right">
				<view class="">
					<image src="../../static/image/secondary/literature2.png" mode="scaleToFill"></image>
				</view>
				<view class="">
					<image src="../../static/image/secondary/literature3.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="guess">
			<view class="gu_top">
				猜你喜欢
			</view>
			<view class="product">
				<view class="pr_list" v-for="(item,index) in data_guess">
					<image :src="item.images" mode="aspectFill"  @click="jump('./product_detailed?id='+item.id)"></image>
					<!-- <view class="ticket">
						北京-文创产品
					</view> -->
					<view class="address">
						{{item.title}}
						<text class="tips">文创产品</text>
						
					</view>
					<view class="bottom">
						<text class="price">￥{{item.price}}</text>
						<text class='data'>{{item.sales_count}}人购买</text>
						<text class="info"   @click="jump('./shop')">进入店铺</text>
					</view>
				</view>
			</view>
		</view>
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
				title:'文创产品',
				data:'',
				data_guess:''
				
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onShow() {
			this.service.entire(this,'get',this.service.api_root.subindex.org_category,{},function(self,res){
				
				let data = res.data
				let result = [];
				for(let i=0;i<data.length;i+=10){
				    result.push(data.slice(i,i+10));
				}
				self.data = result
			})
			
			
			this.service.entire(this,'get',this.service.api_root.subindex.org_category_list,{red:1},function(self,res){  //猜你喜欢——文创产品
				console.log(res)
				self.data_guess = res.data.data
			})
		}
		
	}
</script>

<style scoped>
	.content{
		padding-top: 105rpx;
	}
	.content >>>.top{
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFF;
		z-index: 888;
		
	}
	.scroll-view_H{
		display: flex;
		justify-content: space-between;
		white-space: nowrap;
		/* width: 100%; */
	}
	.scroll-view_box{
		/* width: 100%; */
		/* display: flex; */
		/* flex-wrap: nowrap; */
	}
	.table {
		width: 100%;
		display: inline-block;
	/* 	justify-content: flex-start;
		flex-wrap: wrap; */
		/* overflow: hidden; */
		height: 270rpx;
		padding-bottom: 40rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}
	.table .tab_list{
		width: 20%;
		/* display: inline-block; */
		float: left;
		text-align: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #333;
	}
	.table .tab_list image{
		width: 56rpx;
		height: 56rpx;
	}
	.exhibition{
		padding: 0 20rpx 20rpx 20rpx;
		display: flex;
		width: 100%;
		justify-content: space-between;
		box-sizing: border-box;
		margin-top: 30rpx;
		
	}
	
	.exhibition .left {
		width: 49%;
		height: 332rpx;
	}
	
	.exhibition .left image {
		height: 100%;
		width: 100%;
	}
	
	.exhibition .right {
		width: 49%;
		display: flex;
		justify-content: space-between;
		flex-direction: column-reverse;
	}
	
	.exhibition .right view {
		height: 156rpx;
		width: 100%;
	}
	.exhibition .right image{
		height: 100%;
		width: 100%;
	}
	.guess{
		padding: 20rpx;
		
		background: #F1F1F1;
	}
	.guess .gu_top{
		font-weight: bold;
		font-size: 32rpx;
		padding-top: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		background: #fff;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		
	}
	
	.guess .product .pr_list{
		margin-bottom: 20rpx;
		background: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
	}
	.guess .product view:nth-of-type(1){
		border-top-left-radius: 0rpx;
		border-top-right-radius: 0rpx;
	}
	.guess  .ticket{
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	.guess  .address{
		color: #333;
		font-size: 28rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}
	.guess .tips{
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}
	.guess .product .bottom .price{
		color: #FF431D;
		margin-right: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	.guess .product .bottom .data{
		color: #999999;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	.guess .product image{
		width: 100%;
		height: 300rpx;
	}
	.guess .product .info{
		float: right;
		color: #FF431D;
		border: 1rpx solid #FF431D;
		border-radius: 10rpx;
		font-size: 30rpx;
		padding: 10rpx;
	}
</style>
