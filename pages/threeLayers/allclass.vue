<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :city = 'city' :type='type'></returns>
		<view class="top_class">
			<view class="class_list"  @click="show_class = !show_class,show_region = false,show=false">
				<text>全部分类</text>
				<image src="/static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list"  @click="show_region = !show_region,show_class=false,show=false">
				<text>销量</text>
				<image src="/static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list" @click="show = !show,show_region = false,show_class=false">
				<text>价格</text>
				<image src="/static/image/dorp.png" mode="widthFix"></image>
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
					<view class="right_list" v-for="(item,index) in data_class_list" :key='item.id' @click="choice_goods(index)">
						<image :src="item.icon" mode="scaleToFill"></image>
						<view class="">
							{{item.name}}
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="sort_box" :class="show_region===false ? 'hide' : show_region===true ? 'show' : ''">
			<view class="sort_list" v-for="(item,index) in sales_sort" :key='index' @click="hook(index,item.name,item.order,'sales')">
				<view class="">
					{{item.title}}
				</view>
				<image v-show="item.chiose" src="../../static/image/threeLayers/hook.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="sort_box" :class="show===false ? 'hide' : show===true ? 'show' : ''">
			<view class="sort_list" v-for="(item,index) in price_sort" :key='index' @click="hook(index,item.name,item.order,'price')">
				<view class="">
					{{item.title}}
				</view>
				<image v-show="item.chiose" src="../../static/image/threeLayers/hook.png" mode="widthFix"></image>
			</view>
		</view>
		
		
		
		<view class="sort" v-show="show === true || show_region === true ||show_class === true" @click="show = false,show_region = false,show_class = false">
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
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	import returns from '../common/re_search.vue'
	export default {
		components: {
			uniLoadMore,
			returns
		},
		data() {
			return {
				data: [],
				show: false,
				city:'',
				show_class:false,
				show_class_list:0,
				data_class:'',
				data_class_list:'',
				show_region:false,
				type: '',
				id: '',
				// list_test:'价格',
				price_sort: [{
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
				],
				sales_sort: [{
						title: '销量最多',
						chiose: false,
						name: 'sales_count',
						order: 'desc '
					},
					{
						title: '销量最低',
						chiose: false,
						name: 'sales_count',
						order: 'asc'
					},
				],
				page:1,
				more:'',
				loadRecord: true,
				request_data:''
			}
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			
			if(this.type == 'works') this.works(this.request_data)
			if(this.type == 'edition') this.edition(this.request_data)
			if(!this.type) this.feature(this.request_data)
			
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
			choice_goods(index){
				console.log(this.data_class_list)
				this.page = 1
				this.data.length = 0
				let id = this.data_class_list[index].id
				let data = {
					category_id: id,
					page:this.page
				}
				if (this.type == 'works') {
					this.works(data)
				} else if (this.type == 'edition') { //版通
					this.edition(data)
				} else {
					this.feature(data)
				}
				[this.show,this.show_region,this.show_class] = [false,false,false]
			},
			hook(index, name, order,type) {
				this.page = 1
				this.data.length = 0
				let data = {
					category_id: this.id,
					order_by_field:name,
					order_by_type:order,
					page:this.page
				}
				if (this.type == 'works') {
					this.works(data)
				} else if (this.type == 'edition') { //版通
					this.edition(data)
				} else {
					this.feature(data)
				}
				[this.show,this.show_region,this.show_class] = [false,false,false]
				
			},
			detailed(url, id, type) {
				if (type == 3) {
					uni.navigateTo({
						url: '../subindex/edition_details?id=' + id
					})
				}else {
					uni.navigateTo({
						url: '../subindex/product_detailed?id=' + id + '&type=' + type
					})
				}
			},
			works(data){//文创
				let datas = data
				this.service.entire(this, 'get', this.service.api_root.subindex.org_category_list,data, function(self, res) {
					self.page ++
					datas.page = self.page
					self.request_data = datas
					let data = self.data
					data.push(...res.data.data)
					self.data = data
					self.more = 'more'
					if (res.data.data.length < 20) {
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
				})
			},
			edition(data){//版通
				let datas = data
				this.service.entire(this, 'get', this.service.api_root.subindex.Category_list,data, function(self, res) {
					self.page ++
					datas.page = self.page
					self.request_data = datas
					let data = self.data
					data.push(...res.data.data)
					self.data = data
					self.more = 'more'
					if (res.data.data.length < 20) {
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
				})
			},
			feature(data){//特色产品
				let datas = data
				this.service.entire(this, 'get', this.service.api_root.threeLayers.goodsList,data, function(self, res) {
					
					self.page ++
					datas.page = self.page
					self.request_data = datas
					let data = self.data
					data.push(...res.data.data)
					self.data = data
					self.more = 'more'
					if (res.data.data.length < 20) {
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
				})
			}
		},
		onLoad(options) {
			console.log(options.type)
			console.log(options,'options')
			this.type = options.type
			this.id = options.id
			let data = {
				category_id: this.id,
<<<<<<< HEAD
				merchid:options.merchid || ''
=======
				page:this.page
>>>>>>> 3665c33e1e8da7791b24f175f65edd88b01f2c83
			}
			if (options.type == 'works') {//文创
				this.works(data)
				this.service.entire(this,'get',this.service.api_root.subindex.org_category,{},function(self,res){
					console.log(res.data[0])
					self.data_class = res.data
					self.data_class_list = res.data[0].items
				})
			} else if (options.type == 'edition') { //版通
				this.edition(data)
				this.service.entire(this,'get',this.service.api_root.subindex.Category,{},function(self,res){
					console.log(res.data[0])
					self.data_class = res.data
					self.data_class_list = res.data[0].items
				})
			}else {//特色产品
				this.feature(data)
				this.service.entire(this,'get',this.service.api_root.subindex.goods_Category,{},function(self,res){//特色产品分类
					console.log(res.data[0])
					self.data_class = res.data
					self.data_class_list = res.data[0].items
					// console.log(self.data)
				})
				
				
				
			}

		},
		onShow() {
			this.city = uni.getStorageSync('city')
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
		width: 114rpx;
		height: 104rpx;
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
