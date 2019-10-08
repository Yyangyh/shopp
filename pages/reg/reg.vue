<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="ipt">
			<image src="../../static/image/user.png" mode=""></image>
			<input type="text" value="" v-model="accounts" placeholder="输入手机号"/>
		</view>
		<view class="ipt">
			<input type="text" v-model="verify" value="" maxlength="4" placeholder="请输入验证码"/>
			<text @click="obtain()">{{verification}}</text>
		</view>
		<view class="ipt">
			<image src="../../static/image/pwd.png" mode=""></image>
			<input type="text"  v-model="pwd" value="" password="treu" placeholder="设置登录密码"/>
		</view>
		<view class="ipt">
			<image src="../../static/image/pwd.png" mode=""></image>
			<input type="text" v-model="pwds" value="" password="treu" placeholder="确认密码"/>
		</view>
		<button @click="reg()">注册</button>
		<view class="test">
			<text>登录</text>
		</view>
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
				pwd:'',
				pwds:'',
				verify:'',
			}
		},
		methods:{
			obtain(){ //获取验证码
				var that = this
				if(that.disabled == true) return
				uni.request({
					url:service.api_root.reg.WlVerifySend,
					method:'POST',
					header:{'X-Requested-With':'xmlhttprequest'},
					data:{
						accounts:that.accounts,
						type:'1'
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
			reg(){ //注册
				let that = this
				// if(!(/^1[3-9][0-9]\d{8,11}$/.test(that.account))){
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '手机号码格式不正确'
				// 	});
				// 	return;
				// }
				if(that.pwd != that.pwds){
					uni.showToast({
						icon:'none',
						title:'密码不一致！'
					})
					return;
				}
				console.log(service.api_root.reg.reg)
				uni.request({
					url:service.api_root.reg.reg,
					method:'POST',
					header:{'X-Requested-With':'xmlhttprequest'},
					data:{
						accounts:that.accounts,
						pwd:that.pwd,
						verify:that.verify,
						type:'sms'
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
							setTimeout(function(){
								uni.redirectTo({
								    url: '../login/login'
								});
							},1500)
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
		overflow: hidden;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
	}
	.ipt{
		display: flex;
		margin: 20rpx;
		border-bottom: 2rpx solid #EEEEEE;
		padding: 20rpx 20rpx;
	}
	.ipt image{
		margin-right: 20rpx;
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
		font-size: 32rpx;
		color: #1D74FF;
	}
</style>
