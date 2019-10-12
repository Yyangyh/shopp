<template>
	<view class="bg">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="">
			<image class="back" src="../../static/image/back.png" mode="scaleToFill"></image>
			<!-- <view class="content" :style="{background:'url('+back+') 0 0 no-repeat',backgroundSize:'100% 100%'}"> -->
			<view class="">
				<view class="content">
					
					<view class="logo">
						<image src="../../static/logo.png" mode="widthFix"></image>
					</view>
					<view class="box">
						<view class="logo_ipt">
							<text><image src="../../static/image/user.png" mode="widthFix"></image></text>
							<input type="text" value="" v-model="accounts" placeholder="用户名/账号/手机号"/>
						</view>
						<view class="logo_ipt">
							<text><image src="../../static/image/pwd.png" mode="widthFix"></image></text>
							<input type="text" v-model="pwd" password="true" value="" placeholder="请输入您的密码"/>
						</view>
						<view class="logo_test">
							<text @click="jum('../reg/reg')">注册账号</text>
							<text @click="jum('../reg/forget')">忘记密码</text>
						</view>
						<button  @click="login()">登录</button>
						<view class="message">
							<text @click="jum('./message_login')">短信验证码登录</text>
						</view>
						<view class="other">
							<text class="line"></text>
							<text class="other_test">其他登录方式</text>
							<text class="line"></text>
						</view>
						<!-- jklsdfajg -->
						<view class="mode" v-if="show == 0">
							<image src="../../static/image/wx.png" mode="widthFix" @click="wx()"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	import back from '../../static/image/back.png'
	export default{
		data() {
			return {
				back: back,
				accounts:'',
				pwd:'',
				show:0
			}
		},
		methods:{
			jum(url){
				uni.navigateTo({
					url:url
				})
			},
			login(){
				let that = this
				uni.request({
					url:service.api_root.login.login,
					method:'POST',
					header:{'X-Requested-With':'xmlhttprequest'},
					data:{
						accounts:that.accounts,
						pwd:that.pwd,
					},
					success(res) {
						console.log(res)
						let data = res.data 
						console.log(data)
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							// uni.setStorageSync('token',data.data.token)
							that.$store.commit('login',data.data.token)
							// #ifdef H5
							// 	先判断是否在h5打开，再判断是否是在微信浏览器打开
								let ua = navigator.userAgent.toLowerCase();
								if (ua.match(/MicroMessenger/i) == "micromessenger") {
									//微信H5端
									window.location.href = that.service.api_root.login.WeatchInfo+'?token='+data.data.token
									return
								}
								
							// #endif
							
							setTimeout(function(){
								
								uni.switchTab({
									url: '../index/index'
								});
							},1000)
						}
					}
				})
			},
			wx(){
				window.location.href = this.service.api_root.common.Auth
			}
		},
		onShow() {
			// #ifdef H5
				//先判断是否在h5打开，再判断是否是在微信浏览器打开
			
			let ua = navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				this.show = 0
				
			}else{
				this.show = 1
			}
			// #endif
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
		width: 100%;
	}
	.bg{
		height: 100%;
		width: 100%;
	}
	.bg .back{
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 1;
	}
	.content{
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 99;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
	}
	.logo{
		text-align: center;
	}
	.logo image{
		width: 258rpx;
		height: 202rpx;
		margin: 54rpx 0;
	}
	.box{
		padding-top: 86rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 8%;
		width: 84%;
		height: 700rpx;
	}
	.box .logo_ipt{
		display: flex;
		/* justify-content: center; */
		align-content: center;
		align-items: center;
		background: #F5F5F5;
		border-radius: 10rpx;
		height: 100rpx;
		font-size: 28rpx;
		margin: 0 38rpx 30rpx 38rpx;
	}
	.box .logo_ipt text{
		margin: 0 20rpx;
	}
	.box .logo_ipt input{
		flex-grow: 2;
	}
	.box .logo_ipt image{
		width: 30rpx;
		height: 42rpx;
	}
	.logo_test{
		display: flex;
		justify-content: space-between;
		padding: 0 44rpx;
		font-size: 24rpx;
		color: #666666;
	}
	button{
		background: #1D74FF;
		color: #FFFFFF;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 45rpx;
		width: 84%;
		font-size: 34rpx;
		margin:30rpx 8%;
	}
	.message{
		text-align: center;
		color: #1D74FF;
		font-size: 30rpx;
	}
	.other{
		display: flex;
		font-size: 28rpx;
		align-items: center;
		justify-content: center;
		margin-top: 50rpx;
	}
	.other .line{
		width: 120rpx;
		height: 1rpx;
		border-bottom: 1rpx solid #B3B8D3;
	}
	.other .other_test{
		margin: 0 20rpx;
		color: #999999;
		font-size: 24rpx;
	}
	.mode{
		text-align: center;
		margin-top: 20rpx;
	}
	.mode image{
		width: 80rpx;
		height: 80rpx;
	}
</style>
