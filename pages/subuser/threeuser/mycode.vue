	<!-- 我的邀请码 -->
<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="img">
			<image src="../../../static/image/bgimg.png" mode="scaleToFill"></image>
			<view class="code">
				<image :src="code" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components: {
			returns
		},
		data() {
			return {
				title: '我的邀请码',
				current:0,
				code:''
			}
		},
		onLoad(options) {
			console.log(options)
			this.code = options.code
		}
	}
</script>

<style scoped>
	page{
		width: 100%;
		height: 100%;
	}
	.content{
		width: 100%;
		height: 100%;
	}
	.img{
		width: 100%;
		height: 100%;
		position: fixed;
	}
	.img image{
		width: 100%;
		height: 100%;
	}
	.img .code{
		position: absolute;
		top:60%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 10;
		height: 342rpx;
		width:  342rpx;
	}
	.img .code image{
		height: 342rpx;
		width:  342rpx;
	}
</style>
