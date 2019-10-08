<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="register_img">
			<image src="../../static/image/secondary/banner.png" mode="widthFix"></image>
			
		</view>
		<view class="register_top">
			<view class="re_box">
				<view class="re_top">
					<text>+5</text>
					<text>+10</text>
					<text>+15</text>
					<text>+20</text>
					<text>+25</text>
					<text>+30</text>
					<text>+35</text>
				</view>
				<view class="re_middle">
					<view><text class="show">1</text></view>
					<view><text class="show">2</text></view>
					<view><text class="show">3</text></view>
					<view><text>4</text></view>
					<view><text>5</text></view>
					<view><text>6</text></view>
					<view><text>7</text></view>
				</view>
				<view class="re_bottom">
					<text>第1天</text>
					<text>第2天</text>
					<text>第3天</text>
					<text>第4天</text>
					<text>第5天</text>
					<text>第6天</text>
					<text>第7天</text>
				</view>
				<view class="progress">
					<progress percent="35"  stroke-width="4" backgroundColor="#C9E8FF"/>
				</view>
			</view>
			<view class="">
				<button @click="show = 1">签到</button>
			</view>
		</view>
		<view class="register_bottom">
			<view class="re_one">
				<text class="line"></text>
				<view class="">
					你是今日第<text> 46938</text>名签到用户
				</view>
				<text class="line"></text>
			</view>
			<view class="re_two">
				<image src="../../static/image/secondary/gold.png" mode="widthFix"></image>
				<text>+15</text>
			</view>
		</view>
		
		<view class="register" v-show="show == 1">
			<view class="box">
				<image src="../../static/image/secondary/register.png" mode="widthFix"></image>
				<view class="test_one">
					签到成功
				</view>
				<view class="test_two">
					累计签到<text>3</text>天，今日<image src="../../static/image/secondary/gold.png" mode="widthFix"></image><text>+15</text>
				</view>
				<view class="test_three">
					距领取大礼包还剩4天
				</view>
			</view>
			<image class="close" src="../../static/image/secondary/close.png" mode="widthFix"  @click="show = 0"></image>
		</view>
		
	</view>
</template>

<script>
	import service from '../../service.js'
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'签到',
				show:0
			}
		},
		methods:{
			
			
		},
		
		onShow() {
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
	}
	.register_img image{
		width: 100%;
		height: 150rpx;
	}
	.register{
		
	}
	.register_top{
		width: 700rpx;
		box-sizing: border-box;
		padding: 48rpx 0;
		height: 342rpx;
		position: relative;
		left: 50%;
		margin-left: -350rpx;
		top: -80rpx;
		background: #fff;
		border-radius: 20rpx;
		box-shadow:0px 4rpx 6rpx 0px rgba(0, 0, 0, 0.1);
	}
	.register_top .re_box{
		position: relative;
		height: 124rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.register_top .re_box view{
		
	}
	.register_top .re_box view text{
		text-align: center;
		display: inline-block;
		width: 100rpx;
	}
	.register_top .re_box .re_top{
		font-size: 20rpx;
		color: #999999;
	}
	.register_top .re_box .re_middle{
		display: flex;
		position: absolute;
		top: 48%;
		transform: translateY(-50%);
		z-index: 99;
	}
	.register_top .re_box .re_middle view{
		width: 100rpx;
		text-align: center;
	}
	.register_top .re_box .re_middle view text{
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		background: #C9E8FF;
		color: #1D74FF;
		font-size: 22rpx;
		border-radius: 50%;
	}
	.show{
		background: #1D74FF !important;
		color: #fff !important;
	}
	.register_top .re_box .re_bottom{
		color: #1D74FF;
		font-size: 20rpx;
	}
	.register_top .re_box .progress{
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
	}
	
	.register_top button{
		width: 584rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 80rpx;
		margin-top: 50rpx;
		background: #1D74FF;
		color: #fff;
	}
	.register_bottom .re_one{
		display: flex;
		font-size: 26rpx;
		align-items: center;
		justify-content: center;
	}
	.register_bottom .re_one text{
		color: #1D74FF;
		margin: 0 8rpx;
	}
	.register_bottom .re_one .line{
		width: 46rpx;
		display: inline-block;
		height: 2rpx;
		background: #333333;
		margin: 0 38rpx;
	}
	.register_bottom .re_two{
		margin-top: 22rpx;
		text-align: center;
		font-size: 26rpx;
		color: #333333;
	}
	.register_bottom image{
		height: 30rpx;
		width: 62rpx;
		margin-right: 6rpx;
	}
	.register{
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 998;
		background:rgba(0,0,0,.7);
	}
	.register .close{
		width: 74rpx;
		height: 74rpx;
		position: absolute;
		left: 50%;
		margin-left: -37rpx;
		top: 50%;
		margin-top: 387rpx;
	}
	.register .box{
		background: #fff;
		height: 680rpx;
		width: 600rpx;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		color: #333;
		font-size: 28rpx;
		z-index: 999;
		transform: translate(-50%,-50%);
	}
	.register .box .test_one{
		color: #FFD76A;
		font-size: 54rpx;
		font-weight: bold;
	}
	.register .box .test_two{
		margin: 32rpx 0 14rpx 0; 
	}
	.register .box .test_two text{
		color: #F09B22;
	}
	.register .box .test_two image{
		height: 30rpx;
		width: 62rpx;
	}
	.register .box image{
		width: 448rpx;
		height: 448rpx;
	}
</style>
