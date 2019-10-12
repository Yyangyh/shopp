<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top_search">
			<view class="navigation">
				<view class="coordinate"  @click="jump('../subindex/index_location')">
					<text>广州</text>
					<image src="../../static/image/down.png" mode="widthFix"></image>
				</view>
				<view class="search">
					<image src="../../static/image/search.png" mode="widthFix"></image>
					<input type="text" value="" placeholder="广州" />
				</view>
				<view class="shopp" @click="jump('../threeLayers/shoppingCart')">
					<image src="../../static/image/shopp.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="top_img">
			<!-- <bw-img-upload style="width:100%" ></bw-img-upload> -->
			<bw-swiper :swiperList="swiperList" :swiperType='swiperType' :w_h='w_h' style="width:100%"></bw-swiper>


			<!-- <swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration"
			 :circular='circular'>
				<swiper-item v-for="(item,index) in img_list" :key='index'>
					<image class="" :src="item.images_url" mode="widthFix"></image> -->
			<!-- <view class="swiper-item" :style="{background:'url('+item.pic+') 0 0 no-repeat',backgroundSize:'100% 100%'}"></view> -->
			<!-- 	</swiper-item>
			</swiper> -->
		</view>
		<view class="table">
			<view class="tab_list" @click="jump('../subindex/scenicSpot')">
				<image src="../../static/image/spot.png" mode=""></image>
				<view class="">
					景点门票
				</view>
			</view>
			<view class="tab_list" @click="jump('../subindex/product')">
				<image src="../../static/image/characteristic.png" mode=""></image>
				<view class="">
					特色产品
				</view>
			</view>
			<view class="tab_list" @click="jump()">
				<image src="../../static/image/hotel.png" mode=""></image>
				<view class="">
					酒店
				</view>
			</view>
			<view class="tab_list" @click="jump()">
				<image src="../../static/image/ticket.png" mode=""></image>
				<view class="">
					机票
				</view>
			</view>
			<view class="tab_list" @click="jump('../subindex/edition')">
				<image src="../../static/image/special.png" mode=""></image>
				<view class="">
					版通专享
				</view>
			</view>
			<view class="tab_list" @click="jump('../subindex/works')">
				<image src="../../static/image/product.png" mode=""></image>
				<view class="">
					文创产品
				</view>
			</view>
			<view class="tab_list"  @click="jump('../subindex/seckill')">
				<image src="../../static/image/limited.png" mode=""></image>
				<view class="">
					限时抢购
				</view>
			</view>
			<view class="tab_list"  @click="jump('../subindex/assemble')">
				<image src="../../static/image/assemble.png" mode=""></image>
				<view class="">
					拼团
				</view>
			</view>
		</view>
		
		<view class="assemble">
			<view class="as_popular">
				<view>
					<text></text>
					拼团
				</view>
				<view class="more" @click="jump('../subindex/assemble')">
					查看更多
				</view>
			</view>
			<view class="as_tab">
				<view class="as_list" @click="jump('../subindex/group_products?id='+item.id)" v-for="(item,index) in group_list" :key='item.id'>
					<view class="as_img">
						<image :src="item.thumb" mode="aspectFill"></image>
						<view class="">
							{{item.groupnum}}人成团
						</view>
					</view>
					<view class="list_test">
						{{item.title}}
					</view>
					<view class="list_price">
						拼团价<text>￥{{item.price}}</text>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="spot_img">
			<view class="as_popular">
				<view>
					<text></text>
					精选景点
				</view>
				
			</view>
			<view class="sp_img">
				<view class="img_top">
					<view class="" @click="jump('../subindex/scenery_detailed')">
						<image src="../../static/image/spot1.png" mode="scaleToFill"></image>
						<text>福建厦门鼓浪屿</text>
					</view>
					<view class="" @click="jump('../subindex/scenery_detailed')">
						<image src="../../static/image/spot2.png" mode="scaleToFill"></image>
						<text>迪士尼城堡</text>
					</view>
				</view>
				<view class="img_bottom">
					<view class="" @click="jump('../subindex/scenery_detailed')">
						<image src="../../static/image/spot3.png" mode="scaleToFill"></image>
						<text>福建永定土楼</text>
					</view>
					<view class="" @click="jump('../subindex/scenery_detailed')">
						<image src="../../static/image/spot4.png" mode="scaleToFill"></image>
						<text>朱家角文艺情调</text>
					</view>
					<view class="" @click="jump('../subindex/scenery_detailed')">
						<image src="../../static/image/spot5.png" mode="scaleToFill"></image>
						<text>摩洛哥蓝色之城</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="guess">
			<view class="gu_top">
				猜你喜欢
			</view>
			<view class="gu_popular gu_popular_one">
				<view>
					<text></text>
					文创产品
				</view>
				<view class="more" @click="jump('../subindex/works')" >
					查看更多
				</view>
			</view>
			<view class="spot">
				<view class="sp_list"   @click="jump('../subindex/product_detailed?id='+item.id)" v-for="(item,index) in works_data_guess" :key='item.id'>
					<image :src="item.images" mode="aspectFill"></image>
					<!-- <view class="ticket">
						杭州-景点门票
					</view> -->
					<view class="address">
						<text class="address_title">{{item.title}}</text>
						<!-- <text class="tips">文创</text> -->
						
					</view>
					<view class="bottom">
						<text class="price">￥{{item.price}}</text>
						<text class='data'>{{item.sales_count}}人购买</text>
					</view>
				</view>
			</view>
			<view class="gu_popular">
				<view class="">
					<text></text>
						特色产品
				</view>
				<view class="more"  @click="jump('../subindex/product')">
					查看更多
				</view>
				
			</view>
			<view class="product">
				<view class="pr_list" v-for="(item,index) in item_data_guess" :key='item.id'>
					<image :src="item.images" mode="aspectFill" @click="jump('../subindex/product_detailed?id='+item.id)"></image>
					<!-- <view class="ticket">
						武汉-特色产品
					</view> -->
					<view class="address">
						{{item.title}}
						<text class="tips">特色产品</text>
						
					</view>
					<view class="bottom">
						<text class="price">￥{{item.price}}</text>
						<text class='data'>{{item.sales_count}}人购买</text>
						<text class="info" @click="jump('../subindex/shop')">进入店铺</text>
					</view>
				</view>
			</view>
		</view>
		<!-- <Load v-show = 'show'></Load> -->
		
		<view class="eject" v-show="eject_show">
			<view class="eject_test">
				<view class="ej_top">
					版通（AWT）
				</view>
				<view class="ej_bottom">
					1AWT≈{{set_price}}CNY
				</view>
			</view>
			<image src="../../static/image/index/close.png" mode="widthFix" @click="eject_show = false"></image>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	// import Load from '../../components/load/load.vue'
	import bwSwiper from '../../components/wxcomponents/bw-swiper/bw-swiper.vue'
	export default {
		components: {
			bwSwiper
		},
		data() {
			return {
				//轮播
				swiperList: [{}],
				w_h: 2, //宽高比
				swiperType: true,
				//轮播
				show: false,
				group_list:'',
				eject_show:true,
				item_data_guess:'',
				works_data_guess:'',
				set_price:''
			}
		},
		onLoad() {
			
		},
		onShow() {
			// #ifdef H5  
			let Url = window.location.href
				Url = Url.split('?')
			if(Url.length == 2){
				let token = Url[1].split('token=')[1]
				uni.setStorageSync('token',token)
			}
			// #endif  
			
			service.entire(this, 'get', service.api_root.index.banner, {}, function(self, res) { //轮播图
				
				self.img_list = res.data
				let datas = []
				res.data.forEach((value, index) => {
					// console.log(value)
					let data = {
						img: value.images_url
					}
					datas.push(data)
				})
				self.swiperList = datas
			})
			
			service.entire(this, 'get', service.api_root.index.Redgroupsgoods, {}, function(self, res) { //首页拼团
				
				self.group_list = res.data
			})
			this.service.entire(this,'get',this.service.api_root.threeLayers.goodsList,{},function(self,res){  //猜你喜欢——特色产品
					
					self.item_data_guess = res.data.data
					self.item_data_guess.length = 4
			})
			this.service.entire(this,'get',this.service.api_root.subindex.org_category_list,{red:1},function(self,res){  //猜你喜欢——文创产品
				
				self.works_data_guess = res.data.data
			})
			this.service.entire(this,'post',this.service.api_root.index.btscale,{},function(self,res){  //版通比例
				
				self.set_price = res.data.set_price
			})
		},
		methods: {
			jump(url) {
				if(!url){
					
					uni.showToast({
						icon:'none',
						title:'暂未开放'
					})
					return
				}
				uni.navigateTo({
					url: url
				})
			},


		}
	}
</script>

<style scoped>
	.content {
		padding-bottom: 20rpx;
		padding-top: 105rpx;
	}

	.uni-input-placeholder {
		color: #fff;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		top: 0;
		left: 0;
		z-index: 888;
		background: #1D9DFF;
		position: fixed;
	}

	.top_search {
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #1D9DFF;
		z-index: 888;
	}

	.top_search .navigation {
		height: 105rpx;
		font-size: 34rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.top_search .navigation .coordinate {
		color: #fff;
		margin: 0 22rpx;
		display: flex;
		align-items: center;
	}

	.top_search .navigation .coordinate image {
		width: 30rpx;
		height: 30rpx;
		margin-left: 10rpx;
	}

	.top_search .navigation .search {
		flex-grow: 2;
		height: 70rpx;
		border-radius: 35rpx;
		display: flex;
		align-items: center;
		color: #fff;
		background: rgba(255, 255, 255, .4);
	}

	.top_search .navigation .search input {
		font-size: 30rpx;
	}

	.top_search .navigation .search image {
		margin: 0 20rpx;
		width: 38rpx;
		height: 38rpx;
	}

	.top_search .navigation .shopp {
		margin: 0 30rpx;
	}

	.top_search .navigation image {
		width: 45rpx;
		height: 45rpx;
	}

	.top_img {
		width: 100%;
		/* height: 300rpx; */
		position: relative;
		z-index: 1;
		margin: 15rpx 0;
	}

	.swiper {
		width: 100%;
		/* height: 200rpx; */
	}

	.swiper image {
		width: 100%;
		height: 300rpx;
	}


	.table {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-bottom: 40rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}

	.table .tab_list {
		width: 25%;
		text-align: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #333;
	}

	.table .tab_list image {
		width: 80rpx;
		height: 80rpx;
	}
	
	
	.assemble {
		padding: 30rpx 20rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}
	.as_popular{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
		font-weight: bold;
		margin-bottom: 24rpx;
	}
	.as_popular view{
		display: flex;
		align-items: center;
	}
	.as_popular text{
		display: inline-block;
		width: 6rpx;
		height: 28rpx;
		border-radius: 6rpx;
		background: #FF431D;
		margin-right: 22rpx;
	}
	.assemble .as_tab {
		display: flex;
		justify-content: space-between;
	}
	.assemble .as_tab .as_list{
		width: 30%;
	}
	.assemble .as_tab .as_img{
		position: relative;
	}
	.assemble .as_tab .as_img view{
		background:rgba(0,0,0,1);
		opacity:0.6;
		border-radius:0px 0px 10rpx 10rpx;
		color: #fff;
		position: absolute;
		font-size: 20rpx;
		bottom: 8rpx;
		left: 0;
		width: 100%;
		text-align: center;
	}
	.assemble .as_tab .list_test{
		font-size: 28rpx;
		color: #333333;
		margin: 9rpx 0 11rpx 0;
	    overflow: hidden;/*超出部分隐藏*/
		text-overflow:ellipsis;/* 超出部分显示省略号 */
		white-space: nowrap;/*规定段落中的文本不进行换行 */
	}
	.assemble .as_tab .list_price{
		color: #FF431D;
		font-size: 20rpx;
	}
	.assemble .as_tab .list_price text{
		font-size: 28rpx;
		font-weight: bold;
	}
	.assemble .as_tab image{
		width: 216rpx;
		height: 138rpx;
	}
	.spot_img {
		padding: 15px 10px;
		display: flex;
		flex-direction: column;
		
	}
	.spot_img .img_top{
		display: flex;
		justify-content: space-between;
	}
	.spot_img .img_top view{
		position: relative;
		height: 240rpx;
	}
	.spot_img .img_top view:nth-of-type(1) image{
		width: 470rpx;
		height: 235rpx;
	}
	.spot_img .img_top view:nth-of-type(2) image{
		width: 235rpx;
		height: 235rpx;
	}
	.spot_img .img_top view text{
		font-size: 28rpx;
		color: #fff;
		position: absolute;
		left: 20rpx;
		bottom: 20rpx;
	}
	.spot_img .img_bottom{
		display: flex;
		justify-content: space-between;
	}
	.spot_img .img_bottom view{
		position: relative;
		height: 240rpx;
	}
	
	.spot_img .img_bottom view image{
		width: 235rpx;
		height: 235rpx;
	}
	.spot_img .img_bottom view text{
		font-size: 28rpx;
		color: #fff;
		position: absolute;
		left: 20rpx;
		bottom: 20rpx;
	}
	.guess {
		padding: 20rpx;
		background: #F1F1F1;
	}

	.guess .gu_top {
		font-weight: bold;
		font-size: 32rpx;
		padding: 20rpx 20rpx 0 20rpx;
		background: #fff;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}

	.guess .gu_popular {
		color: #1D9DFF;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 20rpx 0rpx 20rpx;
		background: #fff;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}
	.guess .gu_popular_one{
		border-top-left-radius: 0rpx;
		border-top-right-radius: 0rpx;
	}
	.guess .gu_popular text {
		display: inline-block;
		width: 6rpx;
		height: 28rpx;
		border-radius: 6rpx;
		background: #1D9DFF;
		margin-right: 22rpx;
	}
	.guess .gu_popular view:nth-of-type(1){
		display: flex;
		align-items: center;
	}
	.more{
		font-size: 24rpx;
		color: #CCCCCC;
	}
	.guess .spot {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
		background: #fff;
		padding: 20rpx;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
	}

	.guess .spot .sp_list {
		width: 49%;
		height: 440rpx;
		background: #fff;
		box-shadow:0px 2rpx 10rpx 0px #eee;
		margin-bottom: 30rpx;
		border-top-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
	}

	.guess .spot .sp_list image {
		width: 100%;
		height: 240rpx;
	}

	.guess .ticket {
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}

	.guess .address {
		color: #333;
		font-size: 28rpx;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
		font-weight: bold;
	}
	.guess .address_title{
		overflow: hidden;
		text-overflow: ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical; 
		-webkit-line-clamp:2; 
	}
	.guess .tips {
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}

	.guess .spot .sp_list .bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}

	.guess .spot .sp_list .bottom .price {
		color: #FF431D;
	}

	.guess .spot .sp_list .bottom .data {
		color: #999999;
		font-size: 26rpx;
	}

	.guess .product .bottom .price {
		color: #FF431D;
		margin-right: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.guess .product .bottom .data {
		color: #999999;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.guess .product image {
		width: 100%;
		height: 300rpx;
	}

	.guess .product .info {
		float: right;
		color: #FF431D;
		border: 1rpx solid #FF431D;
		border-radius: 10rpx;
		font-size: 30rpx;
		padding: 10rpx;
	}
	.guess .product{
		border-radius: 10rpx;
	}
	.guess .product .pr_list{
		margin-bottom: 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		background: #fff;
	}
	.guess .product view:nth-of-type(1){
		border-top-left-radius: 0rpx;
		border-top-right-radius: 0rpx;
	}
	.eject{
		height: 100%;
		width: 100%;
		background:rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 998;
	}
	.eject .eject_test{
		position: absolute;
		width: 518rpx;
		height: 250rpx;
		left: 50%;
		top: 315rpx;
		margin-left: -259rpx;
		font-size: 36rpx;
		color: #fff;
		background: url('../../static/image/index/eject_bg.png') no-repeat;
		background-size: 100% 100%;
	}
	.eject .eject_test .ej_top{
		text-align: center;
		margin: 56rpx 0 24rpx 0;
	}
	.eject .eject_test .ej_bottom{
		background: #fff;
		color: #0078FF;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		border-radius: 10rpx;
		font-weight: 500;
		margin: 0 50rpx;
	}
	.eject image{
		height: 72rpx;
		width: 72rpx;
		position: absolute;
		left: 50%;
		margin-left: -36rpx;
		top: 597rpx;
	}
</style>
