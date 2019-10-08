<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="fe_top">
			<view class="fe_test">反馈类型</view>
			<view class="tab_box">
				<view class="tab_list">
					交通信息
				</view>
				<view class="tab_list">
					景点入口
				</view>
				<view class="tab_list">
					推荐玩法
				</view>
				<view class="tab_list">
					交通信息
				</view>
				<view class="tab_list">
					景点入口
				</view>
				<view class="tab_list">
					推荐玩法
				</view>
			</view>
		</view>
		<view class="fe_bottom">
			<view class="fe_test">
				反馈类型
			</view>
			<view class="textarea">
				<textarea placeholder-style="color:#999999" placeholder="输入反馈内容"/>
			</view>
		</view>
		<button>提交</button>
	</view>
</template>

<script>
	import service from '../../service.js'
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'反馈',
			}
		},
		methods:{
			
			
		},
		
		onShow() {
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
	}
	.fe_top{
		margin: 0 46rpx;
		
	}
	.fe_test{
		color: #333333;
		font-size: 34rpx;
		padding: 0 6rpx;
		margin: 36rpx 0 42rpx 0;
		font-weight: bold;
	}
	.fe_top .tab_box{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.fe_top .tab_box .tab_list{
		width: 196rpx;
		height: 66rpx;
		line-height: 66rpx;
		color: #1D9DFF;
		background: #E8F5FF;
		border-radius: 33rpx;
		text-align: center;
		margin-bottom: 34rpx;
		font-size: 30rpx;
	}
	.fe_bottom{
		margin: 0 40rpx;
	}
	.textarea{
		background: #F2F2F2;
		padding: 42rpx 34rpx;
	}
	button{
		background: #1D74FF;
		color: #FFFFFF;
		height: 88rpx;
		line-height: 88rpx;
		border-radius: 44rpx;
		font-size: 34rpx;
		/* width: 84%; */
		margin:80rpx 36rpx;
	}
	
</style>
