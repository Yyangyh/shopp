<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns></returns>
		<view class="top_img">
			<bw-swiper :swiperList="swiperList" :swiperType='swiperType' :w_h='w_h' style="width:100%"></bw-swiper>
			
		</view>
		
		
		<scroll-view scroll-x class="scroll-view_H">
			<view class="scroll-view_box">
				<view class="table" v-for="(item,index) in data">
					<view class="tab_list" v-for="(items,indexs) in data[index]"  @click="jump('../threeLayers/allclass?type=scenic&id='+items.id)">
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
				<image src="../../static/image/paradise.png" mode="scaleToFill"></image>
			</view>
			<view class="right">
				<view class="">
					<image src="../../static/image/cliff.png" mode="scaleToFill"></image>
				</view>
				<view class="">
					<image src="../../static/image/innovation.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="guess">
			<view class="gu_top">
				猜你喜欢
			</view>
			<view class="guess_bottom">
				<!-- <view class="">
					景点推荐
				</view> -->
				<view class="" class="show">
					一日游
				</view>
			</view>
			<view class="spot_box">
				<view class="guess_spot" v-for="(item,index) in data_guess" @click="detailed('../subindex/product_detailed',item.id)">
					<view class="spot_left">
						<image :src="item.images" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<!-- <view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view> -->
						<view class="spot_three">
							{{item.region_name}}
						</view>
						<view class="spot_four">
							<view class="">
								{{item.simple_desc}}
								<!-- <text>{{item.simple_desc}}</text> -->
								<!-- <text>湖畔</text> -->
							</view>
							<view class="">
								<text>￥{{item.min_price}}</text>起
							</view>
						</view>
					</view>
				</view>
				<!-- <view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view> -->
			</view>
			<!-- <view class="gu_top">
				猜你喜欢
			</view>
			
			<view class="spot_box">
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
			</view> -->
		</view>
		<!-- <view class="tab">
			<view class="tab_list">
				<image src="../../static/image/lately.png" mode="widthFix"></image>
				<view class="">
					最近浏览
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/collection1.png" mode="widthFix"></image>
				<view class="">
					我的收藏
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/order.png" mode="widthFix"></image>
				<view class="">
					订单
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/coupon1.png" mode="widthFix"></image>
				<view class="">
					代金券
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import bwSwiper from '../../components/wxcomponents/bw-swiper/bw-swiper.vue'
	import returns from '../common/re_search.vue'
	export default {
		components: {
			bwSwiper,
			returns
		},
		data() {
			return {
				//轮播
				swiperList: [{}],
				w_h: 2, //宽高比
				swiperType: true,
				//轮播
				show:'',
				data:'',
				data_guess:''
			}
		},
		methods: {
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			detailed(url,id) {
				//景点
				uni.navigateTo({
					url: './edition_details?id=' + id
				})
				
			}
		},
		onShow() {
			this.service.entire(this, 'get', this.service.api_root.index.banner, {}, function(self, res) { //轮播图
				self.img_list = res.data
				let datas = []
				res.data.forEach((value, index) => {
					let data = {
						img: value.images_url
					}
					datas.push(data)
				})
				self.swiperList = datas
			})
			this.service.entire(this,'get',this.service.api_root.subindex.scen_Category,{},function(self,res){ //景点分类
				let data = res.data
				let result = [];
				for(let i=0;i<data.length;i+=10){
				    result.push(data.slice(i,i+10));
				}
				self.data = result
			})
			
			this.service.entire(this,'get',this.service.api_root.subindex.scen_redspot,{},function(self,res){
				console.log(res)
				self.data_guess = res.data
			})
		},

	}
</script>

<style scoped>
	.content {
		padding-bottom: 132rpx;
		padding-top: 105rpx;
	}
	.content >>>.return{
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFF;
		z-index: 888;
	}
	.top_img {
		width: 100%;
		/* height: 400rpx; */
		position: relative;
		z-index: 1;
		margin: 15rpx 0;
	}

	.swiper {
		width: 100%;
		/* height: 400rpx; */
	}

	.swiper image {
		width: 100%;
		height: 300rpx;
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
	
	.exhibition {
		padding: 0 20rpx;
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

	.exhibition .right image {
		height: 100%;
		width: 100%;
	}

	.guess {
		
	}

	.guess .gu_top {
		font-weight: bold;
		font-size: 36rpx;
		margin-top: 72rpx;
		margin-bottom: 26rpx;
		padding: 0 20rpx;
	}
	.guess .guess_bottom{
		display: flex;
		justify-content: flex-start;
		font-size: 24rpx;
		margin-bottom: 32rpx;
		padding: 0 20rpx;
	}
	.guess .guess_bottom view{
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		padding: 0 20rpx;
		border-radius: 60rpx;
	}
	.guess .guess_bottom view{
		color: #333;
		background: #F1F1F1;
		margin-right: 20rpx;
	}
	.show{
		background:linear-gradient(90deg,rgba(100,197,249,1),rgba(62,143,243,1)) !important;
		color: #fff !important;
	}
	.guess .spot_box{
		padding: 0 20rpx;
		border-bottom: 4rpx solid #F5F5F5;
	}
	.guess .guess_spot{
		display: flex;
		margin-bottom: 42rpx;
	}
	.guess .guess_spot:last-child{
		margin-bottom: 0rpx;
		padding-bottom: 28rpx;
	}
	.guess .guess_spot .spot_left{
		position: relative;
		margin-right: 24rpx;
	}
	.guess .guess_spot .spot_left image{
		height: 168rpx;
		width: 230rpx;
	}
	.guess .guess_spot .spot_left text{
		position: absolute;
		top: 10rpx;
		left: 5rpx;
		font-size: 20rpx;
		background: rgba(0,0,0,.4);
		color: #fff;
		display: inline-block;
		height: 32rpx;
		padding: 0 10rpx;
		border-radius: 5rpx;
		text-align: center;
		line-height: 32rpx;
	}
	.guess .guess_spot .spot_right{
		flex-grow: 2;
	}
	.guess .guess_spot .spot_right .spot_one{
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 5rpx;
	}
	.guess .guess_spot .spot_right .spot_two{
		color: #999999;
		font-size: 24rpx;
	}
	.guess .guess_spot .spot_right .spot_two text:first-child{
		font-size: 28rpx;
		color: #1D9DFF;
		font-weight: bold;
		margin-right: 16rpx;
	}
	.guess .guess_spot .spot_right .spot_three{
		color: #999999;
		font-size: 24rpx;
	}
	.guess .guess_spot .spot_right .spot_four{
		display: flex;
		justify-content: space-between;
		color: #999999;
		align-items: center;
		
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(1){
		font-size: 24rpx;
		color: #666666;
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(1) text{
		font-size: 20rpx;
		color: #EC808D;
		border: 1rpx solid #EC808D;
		padding: 6rpx 8rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(1) text:nth-of-type(2){
		color: #00D3B3;
		border: 1rpx solid #00D3B3;
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(2){
		font-size: 24rpx;
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(2) text{
		color: #FF431D;
		font-size: 36rpx;
		/* font-weight: bold; */
		margin-right: 10rpx;
	}
	.tab{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		height: 132rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		color: #333;
		padding: 0 44rpx;
	}
	.tab .tab_list{
		text-align: center;
	}
	.tab image{
		height: 78rpx;
		width: 78rpx;
	}
</style>
