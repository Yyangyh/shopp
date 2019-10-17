<template>
	<view class="content">
		<!--  -->
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="shop">
			<view class="pic">
				<image :src="data.thumb" mode="aspectFill"></image>
			</view>
			<view class="introduction">
				<view class="name">
					{{data.title}}
				</view>
				<view class="people">
					<image src="../../../static/image/threeLayers/people.png" mode="widthFix"></image>
					{{data.groupnum}}人成团
				</view>
				<view class="price">
					<view class="num">
						<text class="h2"><text class="h1">￥{{data.price}}</text><!-- /2件 --></text>
					</view>
					<view class="condition">
						已有1人参团
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="crowd">
			<view class="title">
				凑团玩法
			</view>
			<view class="crowd_content">
				<view class="step">
					<view class="icon">
						<image src="../../../static/image/threeLayers/wallet.png" mode="widthFix"></image>
					</view>
					<view class="write">
						<text>下单</text>
						<text>开团/参团</text>
					</view>
				</view>
				<view class="step">
					<view class="arrow">
						<image src="../../../static/image/icon/arrow.png" mode="scaleToFill"></image>
					</view>
					<view class="icon">
						<image src="../../../static/image/threeLayers/invite.png" mode="widthFix"></image>
					</view>
					<view class="write">
						<text>邀请</text>
						<text>好友参团</text>
					</view>
				</view>
				<view class="step">
					<view class="arrow">
						<image src="../../../static/image/icon/arrow.png" mode="scaleToFill"></image>
					</view>
					<view class="icon">
						<image src="../../../static/image/threeLayers/full.png" mode="widthFix"></image>
					</view>
					<view class="write">
						<text>人满</text>
						<text>拼团成功</text>
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="invite">
			<view class="h3">
				<text>支付开团并邀请{{data.groupnum - 1}}人参加</text>
				<text>人数不足自动退款</text>
			</view>
			<view class="button">
				<view class="btn1">
					暂时无团
				</view>
				<view class="btn2" @click="open()">
					我要开团
				</view>
			</view>
		</view>
		<!--  -->
		<view class="more" @click="jump()">
			更多好团
		</view>
		<!--  -->
		<view class="list_shop">
			<!-- <view class="list">
				<view class="img">
					<image src="../../../static/image/threeLayers/shop.png" mode="widthFix"></image>
				</view>
				<view class="shop_name">
					【新用户专享】芙迪伊娜 小蓝膜
				</view>
				<view class="price_tag">
					<view class="h4">
						<text class="h5">
							￥10.00
							
						</text>
						<del class="h6">￥10.00</del>
					</view>
					<view class="h6">
						4人参团
					</view>
				</view>
			</view>
			<view class="list">
				<view class="img">
					<image src="../../../static/image/threeLayers/shop.png" mode="widthFix"></image>
				</view>
				<view class="shop_name">
					【新用户专享】芙迪伊娜 小蓝膜
				</view>
				<view class="price_tag">
					<view class="h4">
						<text class="h5">
							￥10.00
						</text>
						<del class="h6">￥10.00</del>
					</view>
					<view class="h6">
						4人参团
					</view>
				</view>
			</view> -->
		</view>
		
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components:{
			returns
		},
		data() {
			return {
				title: '拼团操作',
				data:'',
				id:'',
				type:''
				
			}
		},
		methods:{
			open(){
				uni.navigateTo({
					url:'./group_order?type='+this.type+'&id='+this.id
				})
			},
			jump(){
				uni.navigateTo({
					url:'../assemble'
				})
			}
		},
		onLoad(options) {
			this.id = options.id
			this.type = options.type
			this.service.entire(this,'get',this.service.api_root.subindex.grou_Detail,{id:options.id},function(self,res){
				console.log(res)
				self.data = res.data.goods
			})
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 100%;
		background: #F2F2F2;
	}
	.content >>>.top{
		position: relative;
	}
	.shop{
		width: 100%;
		height: 250rpx;
		background: #FFFFFF;
		margin-bottom: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.pic{
		width: 30%;
		height: 206rpx;
		margin-right: 20rpx;
	}
	.pic image{
		width: 206rpx;
		height: 206rpx;
	}
	.introduction{
		width: 61%;
		height: 206rpx;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.name{
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
	}
	.people{
		display: flex;
		justify-content: center;
		align-items: center;
		color: #666666;
		font-size: 28rpx;
		margin: 24rpx 0;
	}
	
	.people image{
		width: 34rpx;
		height: 34rpx;
		margin-right:20rpx ;
	}
	.price{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.num{
		color: #FF431D;
	}
	.h1{
		font-size: 40rpx;
		font-size: bold;
	}
	.h2{
		font-size: 36rpx;
		
	}
	.condition{
		color: #666666;
		font-size: 28rpx;
	}
	.crowd{
		width: 100%;
		height: 170rpx;
		background: #FFFFFF;
		margin-bottom: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title{
		width: 90%;
		color: #333333;
		font-size: 30rpx;
		font-weight: bold;
	}
	.crowd_content{
		width: 90%;
		height: 50rpx;
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.step{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.arrow{
		width: 40rpx;
		height: 52rpx;
	}
	.arrow image{
		width: 40rpx;
		height: 52rpx;
	}
	.icon{
		width: 52rpx;
		height: 52rpx;
		margin-right: 20rpx;
	}
	.icon image{
		width: 52rpx;
		height: 52rpx;
	}
	.write{
		font-size: 24rpx;
		color: #333333;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.write text{
		padding: 0;
		border: 0;
		margin: 0;
	}
	.invite{
		width: 100%;
		height: 252rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #333333;
		font-size: 28rpx;
		font-weight: bold;
	}
	.h3{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.button{
		width: 100%;
		margin-top: 40rpx;
		display: flex;
		justify-content: space-around;
	}
	.btn1,.btn2{
		width: 220rpx;
		height: 60rpx;
		border-radius: 60rpx;
		font-size: 28rpx;
		text-align: center;
		line-height: 60rpx;
	}
	.btn1{
		color: #333333;
		border: 1rpx solid #333333;
	}
	.btn2{
		color: #FFFFFF;
		background-color: #1E9DFF;
	}
	.more{
		width: 100%;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		color: #666666;
		font-size: 30rpx;
	}
	.list_shop{
		width: 100%;
		height: 508rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.list{
		width: 350rpx;
		height: 380rpx;
		border-radius: 20rpx;
	}
	.list:first-of-type{
		margin-right: 20rpx;
	}
	.img{
		width: 350rpx;
		height: 224rpx;
	}
	.img image{
		width: 350rpx;
		height: 224rpx;
	}
	.shop_name{
		width: 90%;
		margin: 0 auto;
		color: #000000;
		font-size: 28rpx;
		font-weight: bold;
		/* text-align: center; */
	}
	.price_tag{
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.h4{
		color: #FF431D;
		font-size: 28rpx;
		/* display: flex;
		justify-content: center;
		align-items: center; */
	}
	.h6{
		font-size: 24rpx;
		color: #999999;
	}
</style>
