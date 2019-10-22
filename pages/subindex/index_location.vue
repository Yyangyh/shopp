<template>
	<view class="content">
		<view class="top">
			<view class="return">
				<view class="search">
					<image class="search1" src="../../static/image/search1.png" mode=""></image>
					<input type="text" value="" placeholder="武汉周黑鸭"/>
				</view>
				<text @click="returns">取消</text>
			</view>
			<view class="choice">
				<view :class="{show:show == 0}" @click="show = 0">
					国内
				</view>
				<view :class="{show:show == 1}" @click="show = 1">
					国际/地区
				</view>
			</view>
		</view>
		<view class="hot">
			<view class="hot_top">
				<view class="top_test">
					当前历史
				</view>
				<view class="hot_list">
					<image src="../../static/image/secondary/location.png" mode="widthFix"></image>
					<text>广州</text>
				</view>
			</view>
			<view class="hot_bottom">
				<view class="bottom_test">
					热门城市
				</view>
				<view class="tab">
					<view class="tab_list" v-for="(item,index) in hot">
						{{item}}
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import airport from '@/airport.js'
	export default {
		
		data() {
			return {
				list: airport.list,
				hot:airport.hot,
				show:0
			}
		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
				
			},
			returns(){
				this.common.returns(this)
			}
		},
	}
</script>

<style scoped>
	
	.uni-input-placeholder {
		color: #ccc;
	}
	.top{
		width:100%;
		position: fixed;
		top:var(--status-bar-height);
		left: 0;
		background: #FFF;
		z-index: 888;
		box-sizing: border-box;
		box-shadow: 0px 0px 6px #CCCCCC;
	}
	.top .choice{
		display: flex;
		font-size: 28rpx;
	}
	.top .choice view{
		text-align: center;
		width: 50%;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 4rpx solid #fff;
	}
	.show{
		border-bottom-color: #1D9DFF !important;
	}
	.return{
		display: flex;
		align-items: center;
		height: 105rpx;
		
		background: #fff;
		padding: 0 20rpx;
	}
	.return text{
		font-size: 34rpx;
		color: #666666;
	}
	.return .search{
		flex-grow: 2;
		display: flex;
		align-items: center;
		height: 75rpx;
		background: #F1F1F1;	
		border-radius: 34rpx;
		margin-right: 16rpx;
	}
	
	.return .search .search1{
		width: 38rpx;
		height: 38rpx;
		margin: 0 16rpx 0 30rpx;
	}
	.return .search input{
		height: 140rpx;
		font-size: 30rpx;
	}
	.hot{
		padding: 36rpx 20rpx;
	}
	.hot image{
		height: 32rpx;
		width: 26rpx;
		margin-right: 12rpx;
	}
	.hot .hot_top .top_test{
		color: #010101;
		font-size: 28rpx;
	}
	.hot .hot_top .hot_list{
		font-size: 30rpx;
		color: #1D9DFF;
		height: 64rpx;
		border-radius: 64rpx;
		width: 196rpx;
		background: #F1F1F1;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 26rpx 0 38rpx 0;
	}
	.hot .hot_bottom .bottom_test{
		color: #010101;
		font-size: 28rpx;
	}
	.hot .hot_bottom .tab{
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}
	.hot .hot_bottom .tab .tab_list{
		font-size: 30rpx;
		color:#010101;
		height: 64rpx;
		border-radius: 64rpx;
		width: 196rpx;
		background: #F1F1F1;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 26rpx 40rpx 0rpx 0;
	}
</style>