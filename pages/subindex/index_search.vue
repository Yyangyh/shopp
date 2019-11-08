<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="sea_top">
			<image @click="returns()" src="../../static/image/return.png" mode=""></image>
			<view class="sea_one">
				<image src="../../static/image/search1.png" mode=""></image>
				<input type="text"  @input="onKeyInput()" v-model="test" value="" placeholder="请搜索你喜欢的~" />
			</view>
			<!-- <view class="search">
				搜索
			</view> -->
		</view>
		
		<view class="tab" v-if="all_data != ''">
			<view class="tab_list" @click="chiose(1)" :class="{show:show == 1}">
				景点门票
			</view>
			<view class="tab_list" @click="chiose(2)" :class="{show:show == 2}">
				特色产品
			</view>
			<view class="tab_list" @click="chiose(3)" :class="{show:show == 3}">
				文创产品
			</view>
		</view>
		
		<view class="" v-if="show == 1">
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
		
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default{
		components: {
			uniLoadMore
		},
		data() {
			return {
				test:'',
				all_data:'',
				data:'',
				type:'',
				show:1,
				page:2,
				more:'',
				loadRecord: true
			}
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			
			if(this.show == 1) this.scenic(this.test)
			if(this.show == 2) this.feature(this.test)
			if(this.show == 3) this.works(this.test)
			
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
			onKeyInput(){
				this.more = 'loading'
				this.show = 1
				let that = this
				setTimeout(() => { 
					if(!that.test)return
					that.index_all(that.test)
					
				}, 0)
				
			},
			chiose(type){
				if(this.show == type) return
				this.show = type
				this.page = 2
				this.loadRecord = true
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 100
				});
				if(type == 1) this.data = this.all_data.ctripspot.data
				if(type == 2) this.data = this.all_data.goods.data
				if(type == 3) this.data = this.all_data.originality.data
			},
			detailed(id,type){ //跳转判断
				let url
				 if(this.show == 1){
					url = '../subindex/scenery_detailed?id=' + id
				}else{
					url= '../subindex/product_detailed?id=' + id + '&type=' + type
				}
				uni.navigateTo({
					url:url
				})
			},
			index_all(keywords){
				this.service.entire(this,'get',this.service.api_root.subindex.index_searcht,{
						keywords:keywords
					},function(self,res){
						self.data = res.data.ctripspot.data
						self.all_data = res.data
						if (res.data.ctripspot.data.length < 20) {
							self.more = 'noMore'
							self.loadRecord = false
							return
						}
						self.more = 'more'
						console.log(self.data)
					})
			},
			feature(keywords){//特色商品
				this.more = 'loading'
				this.service.entire(this,'get',this.service.api_root.threeLayers.goodsList,{
					keywords:keywords,
					page:this.page
				},function(self,res){
					self.page ++
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
			// editionpass(keywords){//版通商品
			// 	this.service.entire(this,'get',this.service.api_root.subindex.Category_list,{
			// 		keywords:keywords	
			// 	},function(self,res){
			// 		self.data = res.data.data
			// 		console.log(self.data)
			// 	})
			// },
			works(keywords){//文创
				this.more = 'loading'
				this.service.entire(this, 'get', this.service.api_root.subindex.org_category_list,{
					keywords:keywords,
					page:this.page
				}, function(self, res) { //文创
					self.page ++
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
			scenic(keywords){//景点
				this.more = 'loading'
				this.service.entire(this,'get',this.service.api_root.subindex.scen_list,{
					keywords:keywords,
					page:this.page
				},function(self,res){
					self.page ++
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
		onLoad(e) {
			this.type = e.type
		}
	}
</script>

<style scoped>
	.content{
		padding-top: calc(185rpx + var(--status-bar-height));
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
		font-size: 26rpx;
		font-weight: 200;
	}
	.sea_top .search{
		margin-left: 20rpx;
		font-size: 32rpx;
	}
	.tab{
		position: fixed;
		width: 100%;
		background: #fff;
		z-index: 98;
		top: calc(var(--status-bar-height) + 105rpx);
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20rpx;
		height: 80rpx;
		font-size: 30rpx;
	}
	.tab view{
		height: 100%;
		width: 33.3%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 4rpx solid #fff;
	}
	.show{
		border-bottom-color: #0078FF !important;
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
