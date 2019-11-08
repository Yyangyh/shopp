<template>
	<view class="content">
		
		<view class="ipt">
			<image src="../../static/image/user.png" mode=""></image>
			<input type="text" v-model="accounts" value="" placeholder="输入手机号"/>
		</view>
		<view class="ipt">
			<image src="../../static/image/pwd.png" mode=""></image>
			<input type="text" v-model="verify" value="" placeholder="请输入验证码"/>
			<text @click="obtain()">{{verification}}</text>
		</view>
		<button @click="login()">登录</button>
		<view class="test" @click="jump('./login')">
			<text>密码登录</text>
		</view>
		<!-- <view class="other">
			<text class="line"></text>
			<text class="other_test">其他登录方式</text>
			<text class="line"></text>
		</view> -->
		<!-- <view class="mode">
			<image src="../../static/image/wx.png" mode="widthFix"></image>
		</view> -->
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data() {
			return {
				verification: '获取验证码',
				disabled:false,
				accounts:'',
				verify:'',
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			obtain(){ //获取验证码
				var that = this
				
				if(that.disabled == true) return
				
				uni.request({
					url:service.api_root.reg.WlVerifySend,
					method:'POST',
					header:{'X-Requested-With':'xmlhttprequest'},
					data:{
						accounts:that.accounts,
						type:'2'
					},
					success(res) {
						console.log(that.disabled)
						let data = res.data 
						console.log(data)
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							that.verification = '60s'
							that.disabled = true
							that.timer = setInterval(function(){
								let num = that.verification.split('s')[0]
								num --
								that.verification = num+'s'
							},1000)
						}
						
					}
				})
				
						
			},
			
			login(){
				let that = this
				uni.request({
					url:service.api_root.login.MobileLogin,
					method:'POST',
					header:{'X-Requested-With':'xmlhttprequest'},
					data:{
						accounts:that.accounts,
						verify:that.verify,
					},
					success(res) {
						let data = res.data 
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							uni.setStorageSync('token',data.data.token)
							uni.setStorageSync('token',data.data.token)
							uni.setStorageSync('uid',data.data.id)
							uni.setStorageSync('user',data.data)
							uni.setStorageSync('mobile',data.data.mobile)
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
			}
			
		},
		watch:{
			verification(curval,oldval){// 监听定时器的num值
				if(curval == '-1s'){
					clearInterval(this.timer)
					this.verification = '重新获取'
					this.disabled = false
				}
			}
		},
	}
</script>

<style scoped>
	.content{
		padding-top: 0;
		overflow: hidden;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
	}
	.ipt{
		display: flex;
		margin: 20rpx;
		border-bottom: 2rpx solid #EEEEEE;
		padding: 20rpx 0;
	}
	.ipt image{
		margin: 0 20rpx;
		width: 35rpx;
		height: 45rpx;
	}
	.ipt input{
		flex-grow: 2;
	}
	.ipt text{
		font-size: 32rpx;
		width: 160rpx;
		text-align: center;
		white-space: nowrap;
	}
	button{
		background: #1D74FF;
		color: #FFFFFF;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 45rpx;
		width: 84%;
		margin:60rpx 8% 30rpx 8%;
	}
	.test{
		text-align: center;
		color: #1D74FF;
		font-size: 32rpx;
	}
	.other{
		display: flex;
		font-size: 28rpx;
		align-items: center;
		justify-content: center;
		margin-top: 100rpx;
	}
	.other .line{
		width: 120rpx;
		height: 1rpx;
		border-bottom: 1rpx solid #B3B8D3;
	}
	.other .other_test{
		margin: 0 20rpx;
		color: #999999;
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
