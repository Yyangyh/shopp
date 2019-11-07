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
			<text>关于版通</text>
			<text></text>
		</view>
		<view class="integral">
			{{value}}
		</view>
		
	</view>
</template>

<script>
	
	export default{
		
		data() {
			return {
				value:''
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.threeuser.getBtMsg,{},function(self,res){
				console.log(res)
				self.value = res.data.home_bt_msg.value
			})
		}
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
		min-height: 800rpx;
	}
	.integral view{
		margin-bottom: 24rpx;
	}
	
</style>