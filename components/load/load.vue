<template>
	<view class="load">
		<view class="">
			<image src="../../static/image/loader.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			load(){
				console.log(123)
				uni.showToast({
					icon:'none',
					title:'123'
				})
			},
			show(){
				console.log(123)
			}
		},
		created() {
			
		}
		
	}
</script>

<style scoped>
	.load{
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		background: rgba(0,0,0,.7);
		/* position: relative; */
	}
	.load image{
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -40rpx;
		margin-top: -40rpx;
		-webkit-animation:haha1 1.5s linear infinite
	}
	@-webkit-keyframes haha1{
	 
			0%{-webkit-transform:rotate(0deg);}
	 
			25%{-webkit-transform:rotate(90deg);}
	 
			50%{-webkit-transform:rotate(180deg);}
	 
			75%{-webkit-transform:rotate(270deg);}
	 
			100%{-webkit-transform:rotate(360deg);}
	 }
	</style>
