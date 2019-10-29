<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="top">
			<text></text>
			<text>全球旅游卡</text>
			<image src="../../static/image/card.png" mode="widthFix" @click="jump('/pages/global/card_bag')"></image>
		</view>
		<view class="top_img">
			
			<bw-swiper :swiperList="swiperList" :swiperType='swiperType' :w_h='w_h' style="width:100%"></bw-swiper>
			<!-- <swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration"
			 :circular='circular'>
				<swiper-item v-for="(item,index) in img_list" :key='index'>
					<image class="" :src="item.images_url" mode="widthFix"></image>
				</swiper-item>
			</swiper> -->
		</view>
		<view class="discount_box">
			<view class="box_top">
				<image src="../../static/image/fire.png" mode="widthFix"></image>
				<text>疯狂热销</text>
			</view>
			<view class="discount"  @click="jump('/pages/global/travel_card')">
				<view class="dis_left">
					<view class="left_top">
						北京旅游卡套餐优惠卡
					</view>
					<view class="left_bottom">
						<text>套卡</text>
						<text>套卡</text>
					</view>
					<view class="left_time">
						使用期限：2019-06-15至2020-06-16
					</view>
				</view>
				<view class="dis_right">
					￥<text>2988</text>
				</view>
			</view>
			<view class="discount" @click="jump('/pages/global/tickey')">
				<view class="dis_left">
					<view class="left_top">
						北京旅游卡套餐优惠卡
					</view>
					<view class="left_bottom">
						<text>套卡</text>
						<text>套卡</text>
					</view>
					<view class="left_time">
						使用期限：2019-06-15至2020-06-16
					</view>
				</view>
				<view class="dis_right">
					￥<text>2988</text>
				</view>
			</view>
			<view class="discount" @click="jump('/pages/global/fill_in')">
				<view class="dis_left">
					<view class="left_top">
						北京旅游卡套餐优惠卡
					</view>
					<view class="left_bottom">
						<text>套卡</text>
						<text>套卡</text>
					</view>
					<view class="left_time">
						使用期限：2019-06-15至2020-06-16
					</view>
				</view>
				<view class="dis_right">
					￥<text>2988</text>
				</view>
			</view>
			<view class="discount">
				<view class="dis_left">
					<view class="left_top">
						北京旅游卡套餐优惠卡
					</view>
					<view class="left_bottom">
						<text>套卡</text>
						<text>套卡</text>
					</view>
					<view class="left_time">
						使用期限：2019-06-15至2020-06-16
					</view>
				</view>
				<view class="dis_right">
					￥<text>2988</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import bwSwiper from '../../components/wxcomponents/bw-swiper/bw-swiper.vue'
	export default {
		components:{
		    bwSwiper
		},
		data() {
			return {
				//轮播
				    swiperList:[{}],
				    w_h:2, //宽高比
				    swiperType:true,
				    //轮播
			}
		},
		onShow() {
			this.service.entire(this,'get',this.service.api_root.index.banner,{},function(self,res){
				self.img_list = res.data
				let datas = []
				res.data.forEach((value,index) => {
					let data = {
						img:value.images_url
					}
					datas.push(data)
				})
				self.swiperList = datas
			})
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		padding-bottom: 20rpx;
		padding-top: 105rpx;
	}
	.top{
		background: #1D9DFF;
		text-align: center;
		color: #FFFFFF;
		height: 105rpx;
		font-size: 32rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 22rpx;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		z-index: 888;
	}
	.top text:first-child{
		width: 42rpx;
		display: inline-block;
	}
	.top image{
		height: 42rpx;
		width: 42rpx;
		
	}
	.top_img{
		width: 100%;
		/* height: 400rpx; */
		position: relative;
		z-index: 1;
		margin: 15rpx 0;
	}
	.swiper{
		width: 100%;
		/* height: 400rpx; */
	}
	.swiper image{
		width: 100%;
		height: 300rpx;
	}
	.discount_box{
		padding: 0 20rpx;
	}
	.discount_box .box_top{
		text-align: center;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 110rpx;
	}
	.discount_box .box_top image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
	.discount_box .discount{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 0;
		border-bottom: 2rpx solid #F4F4F4;
	}
	.discount_box .discount .dis_left .left_top{
		font-weight: bold;
		color: #333333;
		margin-bottom: 16rpx;
		font-size: 32rpx;
	}
	.discount_box .discount .dis_left .left_bottom{
		margin-bottom: 10rpx;
	}
	.discount_box .discount .dis_left .left_bottom text{
		color: #00D3B3;
		border:  2rpx solid #00D3B3;
		border-radius: 10rpx;
		font-size: 24rpx;
		margin-right: 20rpx;
		
		padding: 0rpx 10rpx;
	}
	.discount_box .discount .dis_left .left_time{
		color: #999999;
		font-size: 24rpx;
	}
	.discount_box .discount .dis_right{
		display: flex;
		align-items: center;
		color: #FF431D;
	}
	.discount_box .discount .dis_right text{
		font-weight: bold;
	}
</style>
