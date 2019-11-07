<template>
	<view class="load">
		<view class="load_box">
			<image src="../../static/image/index/load.gif" mode="widthFix"></image>
			<view class="">
				努力加载中...
			</view>
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
				
				
			},
			show(){
				
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
		background:#FFFFFF;
		/* position: relative; */
	}
	.load .load_box{
		font-size: 30rpx;
		color: #333333;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);	
	}
	.load image{
		width: 320rpx;
		height: 180rpx;
		
		
		/* -webkit-animation:haha1 1.5s linear infinite */
	}
	/* @-webkit-keyframes haha1{
	 
			0%{-webkit-transform:rotate(0deg);}
	 
			25%{-webkit-transform:rotate(90deg);}
	 
			50%{-webkit-transform:rotate(180deg);}
	 
			75%{-webkit-transform:rotate(270deg);}
	 
			100%{-webkit-transform:rotate(360deg);}
	 } */
	</style>
