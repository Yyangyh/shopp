<template>
	<view class="content">
		
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<!--  -->
		<view class="show">
			<view @click="choice(0)" :class="{choice:show == 0}">组团中</view>
			<view @click="choice(1)" :class="{choice:show == 1}">组团成功</view>
			<view @click="choice(-1)" :class="{choice:show == -1}">组团失败</view>
		</view>
		<!--  -->
		<view class="" v-for="(item,index) in data" :key='item.id' class="group_list">
			<view class="notice">
				<view class="notice_content">
					<text>订单号:{{item.orderno}}</text>
					<!-- <text class="ing">团购进行中</text> -->
				</view>
			</view>
			<!--  -->
			<view class="shop">
				<view class="pic">
					<image :src="item.thumb" mode="aspectFill"></image>
				</view>
				<view class="quantity">
					<view class="name">
						{{item.title}}
					</view>
					<view class="price">
						<text class="h1">¥{{item.price}}/<text class="h2">x{{item.goodsnum}}</text></text>
					</view>
				</view>
			</view>
			<!--  -->
			<view class="details">
				<view class="details_content">
					<text>共1个商品 总额:¥{{item.price * item.goodsnum}}元</text>
					<image src="../../static/icon/arrow.png" mode="widthFix"></image>
				</view>
				<view class="button">
					<view class="button_content" @click="jump('./group_details?id='+item.teamid)">
						查看团详情
					</view>
					<image src="../../static/icon/arrow.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="mask" v-if="data == ''">
			<image src="../../../static/image/no_data.png" mode="widthFix" ></image>
		</view>
		<!--  -->
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'我的团',
				show:0,
				data:''
			}
		},
		methods:{
			choice(type){
				
				this.show = type
				this.service.entire(this,'get',this.service.api_root.subindex.threeindex.my_teams,{
					token:uni.getStorageSync('token'),
					status:type
				},function(self,res){
					console.log(res)
					self.data = res.data.data
				})
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			}	
		},
		onShow() {
			this.choice(0)
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		background: #F2F2F2;
		
	}
	.show{
		width: 100%;
		height: 90rpx;
		background: #FFFFFF;
		margin-bottom: 1rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.show view{
		width: 33.33%;
		text-align: center;
		line-height: 80rpx;
		font-size: 30rpx;
		border-bottom: 4rpx solid #fff;
	}
	.choice{
		color: #1D9DFF;
		border-bottom-color: #1D9DFF !important;
	}
	.group_list{
		border-bottom: 4rpx solid #cccc;
	}
	.notice{
		width: 100%;
		height: 90rpx;
		
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		/* margin-bottom: 1rpx; */
	}
	.notice_content{
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #666666;
		font-size: 24rpx;
	}
	.ing{
		color: #EE7543;
	}
	.shop{
		/* width: 100%; */
		height: 290rpx;
		/* padding-left: 5%; */
		padding: 0 40rpx; 
		background: #FFFFFF;
		margin-top: 2rpx;
		display: flex;
		align-items: center;
	}
	.pic{
		width: 170rpx;
		height: 170rpx;
		background: #00BFFF;
		margin-right: 36rpx;
	}
	.pic image{
		width: 170rpx;
		height: 170rpx;
	}
	.quantity{
		/* width: ; */
		height: 170rpx;
	}
	.name{
		color: #333333;
		font-size: 30rpx;
		font-weight: bold;
		margin-bottom: 70rpx;
	}
	.price{
		
	}
	.h1{
		color: #F2221F;
		font-size: 30rpx;
	}
	.h2{
		color: #333333;
	}
	.details{
		width: 100%;
		height: 200rpx;
		background: #FFFFFF;
		margin-top: 2rpx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
	}
	.details_content{
		color: #333333;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.button{
		margin-top: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button_content{
		width: 190rpx;
		height: 70rpx;
		border-radius: 70rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		background: #1D9DFF;
		text-align: center;
		line-height: 70rpx;
	}
	.details_content image,.button image{
		width: 28rpx;
		height: 28rpx;
		margin-left: 20rpx;
	}
	.mask{
		background: #fff;
		text-align: center;
	}
	.mask image{
		height: 310rpx;
		width: 310rpx;
	}
</style>
