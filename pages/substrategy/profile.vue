<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="intro">
			<input type="text" value="" placeholder="输入文字……" maxlength="15" v-model="words"/>
			<view class="count">
				{{wordCount}}/15
			</view>
		</view>
		<view class="submit">
			<view class="smile">
				<image src="../../static/image/smile.png" mode=""></image>
			</view>
			<view class="comfirm">
				确定
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue';
	export default {
		data(){
			return{
				title:'个人简介编辑',
				words:''
			}
		},
		components:{
			returns
		},
		methods:{
			
		},
		computed:{
			wordCount(){
				var arr = this.words.split('');
				return arr.length
			}
		}
	}
</script>

<style scoped>
	.intro{
		position: relative;
		width: 710rpx;
		height: 150rpx;
		font-size: 24rpx;
		color: #999999;
		background: #F1F1F1;
		margin: 40rpx 20rpx 26rpx;
		box-sizing: border-box;
		padding: 23rpx;
		border-radius: 10rpx;
	}
	.intro input{
		font-size: 24rpx;
	}
	.count{
		position: absolute;
		right: 21rpx;
		bottom: 21rpx;
	}
	.submit{
		width: 710rpx;
		margin: 0 20rpx;
		display: flex;
		justify-content: space-between;
	}
	.submit .smile{
		width: 40rpx;
		height: 40rpx;
		/* vertical-align: middle; */
		margin-top: 12rpx;
	}
	.submit image{
		width: 40rpx;
		height: 40rpx;
	}
	.submit .comfirm{
		width: 100rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		background: linear-gradient(90deg,#3E8FF3,#64C5F9);
		font-size: 28rpx;
		color: #FFFFFF;
		border-radius: 16rpx;
	}
</style>
