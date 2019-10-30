<template>
	<!-- 门票 -->
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top_img">
			<!-- 顶部图片 -->
		</view>
		<view class="cou_box">
			<view class="cou_list" :class="[item.status == 0 ? 'show':'notsh']" @click="jump('./fill_in?id='+item.resouce_id+'&spot_id='+item.spot_id+'&detail_id='+item.id+'&order='+order,item.status)" v-for="(item,index) in data" :key='item.id'>
				<view class="cou_test">
					<view class="cou_left">
						<view class="left_one">
							{{item.resouce_name}}
						</view>
						<view class="left_two">
							使用期限：{{item.start_time}}至{{item.end_time}}
						</view>
						<view class="left_two">
							张数：1张
						</view>
					</view>
					
					<view class="cou_right">
						{{item.status == 0?'待使用':'已使用'}}
					</view>
				</view>
				
			</view>
			
			
			
		</view>	
		<!-- <view class="box" v-if="isShow">
			<view class="code">
				<view class="code_top">
					<view class="bigword">长隆野生动物世界成人门票*1</view>
					<view class="ma">
						核销码
					</view>
				</view>
			</view>
			<view class="close" @click="isShow = !isShow">
				<image src="../../static/image/secondary/circle.png" mode=""></image>
			</view>
		</view> -->
	</view>
</template>

<script>
	import returns from '../common/returns.vue';
	export default {
		data() {
			return {
				title: '门票',
				isShow:true,
				data:''
			}
		},
		components: {
			returns
		},
		methods:{
			jump(url,status){
				if(status != 0) return
				uni.navigateTo({
					url:url
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.global.mytravelscarddetail,{id:this.id},function(self,res){
				console.log(res)
				self.data = res.data
			})
		},
		onLoad(e) {
			this.order = e.order
			this.id = e.id
			
		}
	}
</script>

<style scoped>
	.cou_box{
		margin-top: 10rpx;
	}
	.show{
		background: url('../../static/image/secondary/coupon.png') no-repeat;
		color: #1D9DFF;
	}
	.notsh{
		background: url('../../static/image/secondary/gray.png') no-repeat;
		color: #999;
	}
	.cou_box .cou_list{
		/* position: relative; */
		background-size: 100% 100%;
		width: 710rpx;
		height: 182rpx;
		display: flex;
		align-items: center;
		margin: 0 auto;
		margin-top: 30rpx;
	}
	.left_one{
		margin-bottom: 12rpx;
		font-size: 30rpx;
		font-weight: bold;
		overflow: hidden;
		text-overflow: ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical; 
		-webkit-line-clamp:2; 
	}
	.cou_box .cou_list .cou_test{
		/* position: absolute; */
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40rpx;
	}
	.cou_box .cou_list .cou_test .cou_left{
		width: 534rpx;
		font-size: 28rpx;
	}
	.cou_box .cou_list .cou_test .cou_left .left_two{
		font-size: 24rpx;
	}
	
	.cou_box .cou_list .cou_test .cou_right{
		width: 142rpx;
		height: 60rpx;
		line-height: 60rpx;
		/* border-radius: 60rpx; */
		text-align: center;
		font-size: 32rpx;
		width: 96rpx;
		white-space: nowrap;
		/* background: #1D9DFF; */
	}
	
	/* 灰色背景图部分开始 */
	.cou_list_two{
		/* position: relative; */
		background-size: 100% 100%;
		width: 710rpx;
		height: 182rpx;
		display: flex;
		align-items: center;
		margin: 0 auto;
		margin-top: 30rpx;
	}
	.cou_list_two .left_one{
		margin-bottom: 12rpx;
		font-size: 32rpx;
		color:#333333;
		font-weight: bold;
	}
	.cou_box .cou_list_two .cou_test{
		/* position: absolute; */
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40rpx;
	}
	.cou_box .cou_list_two .cou_test .cou_left{
		color: #999999;
		font-size: 28rpx;
	}
	.cou_box .cou_list_two .cou_test .cou_left .left_two{
		font-size: 24rpx;
	}
	
	.cou_box .cou_list_two .cou_test .cou_right{
		width: 142rpx;
		height: 60rpx;
		line-height: 60rpx;
		/* border-radius: 60rpx; */
		text-align: center;
		font-size: 32rpx;
		color:#333333;
		/* background: #1D9DFF; */
	}
	
	/* 灰色背景部分结束 */
	
	.box{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		background: rgba(0,0,0,.5);
		
	}
	.box .code{
		width: 593rpx;
		height: 700rpx;
		position: fixed;
		z-index: 20;
		top: 50%;
		left: 50%;
		background: url('../../static/image/secondary/cordbottom.png') no-repeat;
		background-size: 100% 100%;
		transform: translate(-50%,-50%);
	}
	.box .code .code_top{
		width: 593rpx;
		height: 246rpx;
		background: url('../../static/image/secondary/cordtop.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.box .code .code_top .bigword{
		width: 593rpx;
		position: absolute;
		text-align: center;
		top: 50%;
		/* left: 50%; */
		transform: translate(0,-50%);
		font-size: 32rpx;
		color: #FFFFFF;
		font-weight: bold;
		display: block;
	}
	.box .code .code_top .ma{
		font-size: 28rpx;
		text-align: center;
		color: #F5F5F5;
		position: absolute;	
		top: 70%;
		left: 50%;
		transform: translateX(-50%);
	}
	.close {
		width: 73rpx;
		height: 73rpx;
		position: fixed;
		bottom: 114rpx;
		left: 50%;
		transform: translateX(-50%);
		z-index: 20;
	}
	.close image{
		width: 73rpx;
		height: 73rpx;
	}
</style>
