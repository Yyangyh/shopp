<template>
	<view class="content">
		<!-- <view class="status_bar">
		            
		</view> -->
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
		
		
		<view class="treaty" v-if="open_protocol == 1">
			<label class="radio"><checkbox style="transform: scale(0.8);" :checked="checked" class="checkbox-3" @click="checked = !checked"></checkbox></label>
			我已阅读并了解<text  @click="treaty_show = true">【注册须知】</text>
		</view>
		
		<view class="Mask" v-show="treaty_show == true" @click="treaty_show = false">
			<!-- 遮罩 -->
		</view>
		
		<view class="treaty_box"  v-show="treaty_show == true">
			<view class="box_top">
				注册须知
			</view>
			<scroll-view scroll-y="true" class="box_conent">
				<rich-text :nodes='treaty'></rich-text>
			</scroll-view>
			<button  @click="treaty_show = false">我已阅读</button>
		</view>
		
		<button @click="reg()">注册</button>
		<view class="test" @click="jump('../login/login')">
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
				referrer:'',
				treaty_show:false,
				treaty:'',
				open_protocol:'',
				checked:false,
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
				console.log(that.checked)
				if(that.open_protocol == 1){
					if(that.checked == false){
						uni.showToast({
							icon:'none',
							title:'请阅读并同意注册须知'	
						})
						return
					}
				}
				
				if(!(/^1[3-9][0-9]\d{8,11}$/.test(that.accounts))){
					uni.showToast({
						icon: 'none',
						title: '手机号码格式不正确'
					});
					return;
				}
				if(that.pwd != that.pwds){
					uni.showToast({
						icon:'none',
						title:'密码不一致！'
					})
					return;
				}
				
				let data_list = {
					accounts:that.accounts,
					pwd:that.pwd,
					verify:that.verify,
					type:'sms'
				}
				if(that.referrer != '') data_list.referrer = that.referrer
				uni.request({
					url:service.api_root.reg.reg,
					method:'POST',
					header:{'X-Requested-With':'xmlhttprequest'},
					data:data_list,
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
		onLoad(options) {
			
			if(options.referrer){
				uni.showToast({
					icon:'none',
					title:options.referrer
				})
				this.referrer = options.referrer
			}
		},
		onShow() {
			let that = this
			uni.request({
				url:this.service.api_root.reg.RegisterAgreement,
				success(res) {
					that.treaty = res.data.data.content.value
					that.open_protocol = res.data.data.status
				}
			})
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
		padding-top: 0;
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
		white-space: nowrap;
	}
	
	.Mask{
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 888;
		background: rgba(0,0,0,.6);
	}
	.treaty{
		background: #fff;
		display: flex;
		align-items: center;
		height: 100rpx;
		padding: 0 20rpx;
		font-size: 30rpx;
	}
	.treaty text{
		color: #1D74FF;
	}
	.treaty_box{
		position: fixed;
		z-index: 999;
		height: 780rpx;
		padding: 20rpx;
		box-sizing: border-box;
		width: 80%;
		background: #fff;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.treaty_box .box_top{
		text-align: center;
		font-size: 36rpx;
	}
	.treaty_box .box_conent{
		margin: 20rpx 0;
		height: 560rpx;
	}
	.treaty_box button{
		position: absolute;
		width: 90%;
		height: 80rpx;
		bottom: 20rpx;
		font-size: 30rpx;
		left: 50%;
		margin: 0;
		transform: translateX(-50%);
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
