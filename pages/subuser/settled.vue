<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<image class="settled_top" src="../../static/image/secondary/settled_top.jpg" mode="widthFix"></image>
		<view class="settled_box">
			<view class="box_list">
				<view class="">
					<view class="">
						商户名称
					</view>
					<text>*</text>
				</view>
				<input type="text" value="" placeholder="商户名称"/>
			</view>
			<view class="box_list">
				<view class="">
					<view class="">
						简单介绍
					</view>
				</view>
				<input type="text" value="" placeholder="简单介绍下客户"/>
			</view>
		</view>
		<view class="upload">
			<view class="upload_test">
				请上传营业执照
			</view>
			<view class="upload_img">
				<image src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="upload">
			<view class="upload_test">
				法人身份证正面
			</view>
			<view class="upload_img">
				<image src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="upload">
			<view class="upload_test">
				法人身份证反面
			</view>
			<view class="upload_img">
				<image src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="settled_box">
			<view class="box_list">
				<view class="">
					<view class="">
						联系人
					</view>
					<text>*</text>
				</view>
				<input type="text" value="" placeholder="您的姓名"/>
			</view>
			<view class="box_list">
				<view class="">
					<view class="">
						手机号
					</view>
					<text>*</text>
				</view>
				<input type="text" value="" placeholder="您的手机号"/>
			</view>
			<view class="box_list">
				<view class="list_test">
					请仔细填写联系方式，保证我们能尽快联系到您~
				</view>
				
			</view>
		</view>
		<view class="settled_box">
			<view class="box_list">
				<view class="">
					<view class="">
						账号
					</view>
					<text>*</text>
				</view>
				<input type="text" value="" placeholder="账号"/>
			</view>
			<view class="box_list">
				<view class="">
					<view class="">
						密码
					</view>
					<text>*</text>
				</view>
				<input type="text" value="" placeholder="密码"/>
			</view>
			<view class="box_list">
				<view class="list_test">
					用于登录多商户后台，请认真填写，保证我们能尽快联系到您~
				</view>
				
			</view>
		</view>
		<button>立即申请入驻</button>
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
				title: '商家入驻',
				data_dition:''
			}
		},
		onShow() {
			
		}
	}
</script>

<style scoped>
	page{
		background: #F1F1F1;
	}
	.content{
		font-size: 28rpx;
	}
	.uni-input-placeholder{
		color: #999;
	}
	.settled_top{
		width: 100%;
		height: 280rpx;
		margin-bottom: 20rpx;
	}
	.settled_box{
		background: #fff;
		margin-bottom: 20rpx;
	}
	.settled_box .box_list{
		height: 100rpx;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #F1F1F1;
	}
	.settled_box .box_list .list_test{
		font-size: 24rpx;
		width: 100%;
	}
	.settled_box .box_list>view{
		width: 140rpx;
		display: flex;
		justify-content: space-between;
	}
	.settled_box .box_list input{
		font-size: 28rpx;
		flex-grow: 2;
		color: #333;
	}
	.settled_box .box_list text{
		color: #FF431D;
	}
	.upload{
		margin-bottom: 20rpx;
		height: 100rpx;
		padding: 0 20rpx;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.upload .upload_img{
		display: flex;
		align-items: center;
	}
	.upload image:nth-of-type(1){
		width: 50rpx;
		height: 50rpx;
		margin-right: 20rpx;
	}
	.upload image:nth-of-type(2){
		width: 32rpx;
		height: 32rpx;
	}
	button{
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 80rpx;
		font-size: 28rpx;
		color: #fff;
		background: #1D74FF;
		margin: 30rpx 20rpx;
	}
</style>
