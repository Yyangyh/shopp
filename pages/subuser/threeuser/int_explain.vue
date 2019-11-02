<template>
	<view class="content">
		<image class="int_back" src="../../../static/image/threeLayers/int_detailed.png" mode="widthFix"></image>
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @click="returns()">
				<image src="/static/image/threeLayers/return1.png" mode="widthFix" ></image>
			</view>
			<text>积分说明</text>
			<text></text>
		</view>
		<view class="integral">
			<view class="">
				定店铺购物，通过现金、银行卡、网上移动端支付等方式实际支付的金额，按1元人民币＝1积分的方式累计积分。例如，如果会员实际支付人民币500元，可获得500积分。
			</view>
			<view class="">
				2.以下情况不积分：
			</view>
			<view class="">
				- 实际支付金额低于小于等于商品吊牌金额五折的金额部分不计入积分。
			</view>
			<view class="">
				- 在非指定网站或指定店铺进行购买
			</view>
			<view class="">
				- 不参与积分的特定商品
			</view>
			<view class="">
				- 促销活动礼品或赠品
			</view>
			<view class="">
				- 通过FILA团购渠道购买的商品
			</view>
			<view class="">
				- 通过员工福利卡购买的商品
			</view>
			<view class="">
				3.以下情况不积分：
			</view>
			<view class="">
				- 实际支付金额低于小于等于商品吊牌金额五折的金额部分不计入积分。
			</view>
			<view class="">
				- 在非指定网站或指定店铺进行购买
			</view>
			<view class="">
				- 不参与积分的特定商品
			</view>
			<view class="">
				- 促销活动礼品或赠品
			</view>
			<view class="">
				- 通过FILA团购渠道购买的商品
			</view>
			<view class="">
				- 通过员工福利卡购买的商品
			</view>
			
		</view>
		
	</view>
</template>

<script>
	
	export default{
		
		data() {
			return {
				
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
		},
	}
</script>

<style scoped>
	page{
		background: #F1F1F1;
		padding-bottom: 40rpx;
	}
	.status_bar{
		/* background: rgba(0,0,0,0); */
	}
	.content{
		padding-top: 0;
	}
	.int_back{
		position: absolute;
		z-index: 0;
		width: 100%;
	}
	.top{
		position: relative;
		height: 105rpx;
		padding: 0 44rpx;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #fff;
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		width: 40rpx;
		display: inline-block;
	}
	.integral{
		position: relative;
		margin: 0 20rpx;
		padding: 60rpx 40rpx;
		font-size: 24rpx;
		background: #fff;
		border-radius: 10rpx;
		color: #333333;
	}
	.integral view{
		margin-bottom: 24rpx;
	}
	
</style>