<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="int_top">
			<image class="back" src="../../static/image/secondary/integral_back.png" mode="widthFix"></image>
			<view class="back_index">
				<view class="int_num">
					945
				</view>
				<view class="int_tab">
					<view class="int_list">
						<image src="../../static/image/secondary/integral.png" mode="widthFix"></image>
						<view class="">
							积分商城
						</view>
					</view>
					<view class="int_list"  @click="jump('threeuser/int_detailed')">
						<image src="../../static/image/secondary/integral_detailed.png" mode="widthFix"></image>
						<view class="">
							积分明细
						</view>
					</view>
					<view class="int_list" @click="jump('threeuser/int_order_list')">
						<image src="../../static/image/secondary/integral_order.png" mode="widthFix"></image>
						<view class="">
							积分订单
						</view>
					</view>
					<view class="int_list">
						<image src="../../static/image/secondary/integral_explain.png" mode="widthFix"></image>
						<view class="">
							积分说明
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="equity">
			<view class="equity_box">
				<image src="../../static/image/secondary/int_equity.png" mode="widthFix"></image>
				<text>积分兑权益</text>
			</view>
		</view>
		<view class="shopp">
			<view class="shopp_tab">
				<view class="shopp_list">
					<image src="../../static/image/secondary/shopp1.png" mode="widthFix"></image>
					<view class="list_one">
						洁丽雅毛巾2条装 纯棉洗脸洗澡家用成人男女帕 
					</view>
					<view class="list_two">
						1000积分兑换
					</view>
					<view class="list_three">
						￥100
					</view>
				</view>
				<view class="shopp_list">
					<image src="../../static/image/secondary/shopp2.png" mode="widthFix"></image>
					<view class="list_one">
						心选超轻削光紗弯柄三折晴雨伞遮阳伞  
					</view>
					<view class="list_two">
						1000积分+50版通兑换
					</view>
					<view class="list_three">
						￥100
					</view>
				</view>
			</view>
		</view>
		<view class="equity">
			<view class="equity_box">
				<image src="../../static/image/secondary/int_shopp.png" mode="widthFix"></image>
				<text>积分兑权益</text>
			</view>
		</view>
		<view class="shopp">
			<view class="shopp_tab">
				<view class="shopp_list">
					<image src="../../static/image/secondary/shopp1.png" mode="widthFix"></image>
					<view class="list_one">
						洁丽雅毛巾2条装 纯棉洗脸洗澡家用成人男女帕 
					</view>
					<view class="list_two">
						1000积分兑换
					</view>
					<view class="list_three">
						￥100
					</view>
				</view>
				<view class="shopp_list">
					<image src="../../static/image/secondary/shopp2.png" mode="widthFix"></image>
					<view class="list_one">
						心选超轻削光紗弯柄三折晴雨伞遮阳伞  
					</view>
					<view class="list_two">
						1000积分+50版通兑换
					</view>
					<view class="list_three">
						￥100
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'积分',
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
			
		},
		
		onShow() {
			
		}
	}
</script>

<style scoped>
	.int_top{
		position: relative;
		color: #fff;
		width: 100%;
		height: 560rpx;
	}
	.int_top .back{
		width: 100%;
		position: absolute;
		z-index: 1;
	}
	.int_top .back_index{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 99;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.int_top .back_index .int_num{
		text-align: center;
		font-weight: bold;
		font-size: 100rpx;
		margin-top: 64rpx;
	}
	.int_top .back_index .int_tab{
		display: flex;
		margin-bottom: 60rpx;
		font-size: 24rpx;
		text-align: center;
	}
	.int_top .back_index .int_tab .int_list{
		width: 25%;
	}
	.int_top .back_index image{
		width: 62rpx;
		height: 62rpx;
	}
	.equity{
		margin-top: 40rpx;
		text-align: center;
	}
	.equity .equity_box{
		/* display: inline; */
		height: 100%;
		position: relative;
	}
	.equity .equity_box text{
		position: absolute;
		font-weight: bold;
		font-size: 40rpx;
		color: #fff;
		top: 50%;
		left: 50%;
		transform: translate(-30%,-50%);
	}
	.shopp{
		margin-top: 40rpx;
	}
	.shopp .shopp_tab{
		display: flex;
		font-size: 28rpx;
		color: #333333;
		padding: 0 20rpx;
	}
	.shopp image{
		height: 224rpx;
		width: 348rpx;
	}
	.shopp .shopp_tab .shopp_list{
		text-align: center;
		width: 50%;
	}
	.shopp .shopp_tab .shopp_list .list_two{
		color: #FF431D;
		margin: 16rpx 0 10rpx 0;
	}
	.shopp .shopp_tab .shopp_list .list_three{
		color: #999999;
		font-size: 24rpx;
		text-decoration:line-through;
		font-weight: 300;
	}
	.shopp .shopp_tab .shopp_list view{
		text-align: left;
		font-weight: 600;
	}
</style>
