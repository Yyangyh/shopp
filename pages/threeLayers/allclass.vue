<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns></returns>
		<view class="top_class">
			<view class="class_list"  @click="show_class = !show_class">
				<text>全部分类</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list"  @click="show_region = !show_region">
				<text>全部地区</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list" @click="show = !show">
				<text>{{list_test}}</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="sort_box" :class="show_class===false ? 'hide' : show_class===true ? 'show' : ''">
			<view class="box_class">
				<view class="class_left">
					<view :class="{show_class_list:show_class_list == index}"  v-for="(item,index) in data_class" :key='item.id' @click="choice_class(index)">
						{{item.name}}
					</view>
				</view>
				<view class="class_right">
					<view class="right_list" v-for="(item,index) in data_class_list"  :key='item.id'>
						<image :src="item.icon" mode="scaleToFill"></image>
						<view class="">
							{{item.name}}
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="sort_box" :class="show_region===false ? 'hide' : show_region===true ? 'show' : ''">
			345
		</view>
		
		<view class="sort_box" :class="show===false ? 'hide' : show===true ? 'show' : ''">
			<view class="sort_list" v-for="(item,index) in sort" :key='index' @click="hook(index,item.name,item.order)">
				<view class="">
					{{item.title}}
				</view>
				<image v-show="item.chiose" src="../../static/image/threeLayers/hook.png" mode="widthFix"></image>
			</view>
		</view>
		
		
		
		<view class="sort" v-show="show === true" @click="show = false">
		</view>
		<view class="product">
			<view class="pr_list" v-for="item in data" :key='item.id'>
				<image :src="item.images" mode="aspectFill" @click="detailed('../subindex/product_detailed',item.id,item.type)"></image>
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
					<text class="info" @click="detailed('../subindex/product_detailed',item.id,item.type)">进入购买</text>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import returns from '../common/re_search.vue'
	export default {
		data() {
			return {
				data: '',
				show: false,
				show_class:false,
				show_class_list:0,
				data_class:'',
				data_class_list:'',
				show_region:false,
				type: '',
				id: '',
				list_test:'智能排序',
				sort: [{
						title: '价格最低',
						chiose: false,
						name: 'min_price',
						order: 'asc'
					},
					{
						title: '价格最高',
						chiose: false,
						name: 'min_price',
						order: 'desc'
					},
					{
						title: '销量最多',
						chiose: false,
						name: 'sales_count',
						order: 'asc'
					},
				]
			}
		},
		components: {
			returns
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			choice_class(index){ //分类选择
				this.data_class_list = this.data_class[index].items
				this.show_class_list = index
			},
			hook(index, name, order) {
				console.log(index)
				this.list_test = this.sort[index].title
				let data = {
					category_id: this.id,
					order_by_field:name,
					order_by_type:order
				}
				console.log(data)
				if (this.type == 'works') {
					this.service.entire(this, 'get', this.service.api_root.subindex.org_category_list, data, function(self, res) { //文创
						console.log(res)
						self.data = res.data.data
						self.show = false
					})
				} else if (this.type == 'edition') { //版通
					this.service.entire(this, 'get', this.service.api_root.subindex.Category_list, data, function(self, res) {
						console.log(res)
						self.data = res.data.data
						self.show = false
					})
				} else if (this.type == 'scenic') { //景点
					this.service.entire(this, 'get', this.service.api_root.subindex.scen_list, data, function(self, res) {
						console.log(res)
						self.data = res.data.data
						self.show = false
					})
				} else {
					this.service.entire(this, 'get', this.service.api_root.threeLayers.goodsList, data, function(self, res) { //特色
						console.log(res)
						self.data = res.data.data
						self.show = false
					})
				}
			},
			detailed(url, id, type) {
				if (type == 3) {
					uni.navigateTo({
						url: '../subindex/edition_details?id=' + id
					})
				} else if (type == 1) { //景点
					uni.navigateTo({
						url: '../subindex/edition_details?id=' + id
					})
				} else {
					uni.navigateTo({
						url: '../subindex/product_detailed?id=' + id + '&type=' + type
					})
				}
			}
		},
		onLoad(options) {
			console.log(options.type)
			this.type = options.type
			this.id = options.id
			if (options.type == 'works') {
				this.service.entire(this, 'get', this.service.api_root.subindex.org_category_list, { //文创商品列表
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
				
				
				
			} else if (options.type == 'edition') { //版通
				this.service.entire(this, 'get', this.service.api_root.subindex.Category_list, {
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
			} else if (options.type == 'scenic') { //景点
				this.service.entire(this, 'get', this.service.api_root.subindex.scen_list, {
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
			} else {
				this.service.entire(this, 'get', this.service.api_root.threeLayers.goodsList, { //特色产品列表
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
				
				this.service.entire(this,'get',this.service.api_root.subindex.goods_Category,{},function(self,res){//特色产品分类
					console.log(res.data[0])
					self.data_class = res.data
					self.data_class_list = res.data[0].items
					
					// console.log(self.data)
				})
				
				
				
			}

		}
	}
</script>

<style scoped>
	.content {
		position: relative;
		padding-top: 210rpx;
	}

	.content>>>.return {
		position: fixed;
		z-index: 999;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #fff;
	}

	.top_class {
		position: fixed;
		top: calc(var(--status-bar-height) + 105rpx);
		left: 0;
		background: #fff;
		width: 100%;

		z-index: 999;
		display: flex;
		justify-content: space-between;
	}

	.top_class .class_list {
		display: flex;
		align-items: center;
		padding: 30rpx 20rpx;
		font-size: 32rpx;

	}

	.top_class .class_list image {
		height: 20rpx;
		width: 20rpx;
		margin-left: 10rpx;
	}

	.sort {
		overflow: hidden;
		left: 0;
		top: 0;
		width: 100%;
		position: fixed;
		z-index: 888;
		background: rgba(0, 0, 0, 0.6);
		height: 100%;
	}

	.sort_box {
		transition: 0.3s;
		background: #fff;
		position: fixed;
		top: calc(var(--status-bar-height) + 205rpx);
		z-index: 900;
		/* padding: 0 20rpx; */
		box-sizing: border-box;
		width: 100%;
		font-size: 30rpx;

	}
	.sort_box .sort_list {
		height: 100rpx;
		padding: 0 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.sort_box .sort_list image {
		height: 38rpx;
		width: 38rpx;
	}

	.hide {
		transform: translateY(-100%);
	}

	.show {
		transform: translateY(0%);
	}
	
	.box_class{
		display: flex;
	}
	.box_class .class_left{
		
	}
	.box_class .class_left view{
		height: 88rpx;
		line-height: 88rpx;
		width: 210rpx;
		text-align: center;
		font-size: 28rpx;
		color: #6F6F6F;
		background: #F1F1F1;
	}
	.box_class .class_right{
		display: flex;
		justify-content: flex-start;
		/* align-items: center; */
		align-items: flex-start;
		flex-wrap: wrap;
		height: 100%;
	}
	.box_class .class_right image{
		width: 134rpx;
		height: 124rpx;
	}
	.box_class .class_right .right_list{
		text-align: center;
		font-size: 24rpx;
		width: 33.3%;
		height: 180rpx;
	}
	.show_class_list{
		color: #000000 !important;
		background: #fff !important;
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

	.ticket {
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}

	.address {
		color: #333;
		font-size: 30rpx;
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
</style>
