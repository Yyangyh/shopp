<template>
	<view class="">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<scroll-view scroll-x class="scroll-view_H">
			<view class="scroll-view_box">
				<view class="table" v-for="(item,index) in options">
					<view class="tab_list" v-for="(items,indexs) in options[index]"  @click="jump('../threeLayers/allclass?id='+items.id+'&merchid='+merchid)">
						<image :src="items.icon" mode=""></image>
						<view class="">
							{{items.name}}
						</view>
					</view>
				</view>
			</view>
			
		</scroll-view>
		
		<view class="product">
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
	import returns from '../common/returns.vue'
	export default {
		components: {
			returns
		},
		data() {
			return {
				merchid:'', // 商家id
				title:'商品列表',
				data: '',
				options:[]
			}
		},
		methods: {
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			detailed(id, type) { 
				uni.navigateTo({
					url: '../subindex/product_detailed?id=' + id + '&type=' + type
				})
			}
		},
		onLoad(e) {
			
			
			// type 1文创商品 2特色商品 
			let {merchid,type} = e
			this.merchid = merchid
			if (type == 1) {  // type 1文创商品
				this.service.entire(this, 'get', this.service.api_root.threeLayers.Originality, {
					merchid: merchid
				}, function(self, res) {
					console.log(res);
					self.data = res.data.data
				})
				// 顶部tab 
				this.service.entire(this,'get',this.service.api_root.subindex.org_category,{},function(self,res){
					
					let data = res.data
					let result = [];
					for(let i=0;i<data.length;i+=10){
					    result.push(data.slice(i,i+10));
					}
					self.options = result
				})
			} else if(type == 2) {	//  2特色商品 
				this.service.entire(this, 'get', this.service.api_root.threeLayers.goodsList, {
					merchid: merchid
				}, function(self, res) {
					console.log(res);
					self.data = res.data.data
				})
				// 顶部tab
				this.service.entire(this,'get',this.service.api_root.subindex.goods_Category,{},function(self,res){
					console.log(res)
					let data = res.data
					let result = [];
					for(let i=0;i<data.length;i+=10){
					    result.push(data.slice(i,i+10));
					}
					self.options = result
					// console.log(self.data)
				})
			}

		}
	}
</script>

<style>
	.scroll-view_H{
		display: flex;
		justify-content: space-between;
		white-space: nowrap;
		/* width: 100%; */
		margin-top: 100rpx;
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
	
	.product {
		background: #F1F1F1;
		overflow: hidden;
		margin-top: 104rpx;
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
</style>
