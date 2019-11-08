<template>
	<view class="content">
		
		<view class="ipt">
			<image src="../../static/image/user.png" mode=""></image>
			<input type="text" value="" v-model="accounts" placeholder="输入手机号"/>
		</view>
		<view class="ipt">
			
			<input type="text" value="" v-model="verify" placeholder="请输入验证码"/>
			<text @click="obtain()">{{verification}}</text>
		</view>
		<view class="ipt">
			<image src="../../static/image/pwd.png" mode=""></image>
			<input type="text" value="" v-model="pwd" password placeholder="设置新密码"/>
		</view>
		<view class="ipt">
			<image src="../../static/image/pwd.png" mode=""></image>
			<input type="text" value="" v-model="as_pwd" password placeholder="确认密码"/>
		</view>
		<button @click="accomplish()">完成</button>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				verification: '获取验证码',
				disabled:false,
				accounts:'',
				verify:'',
				pwd:'',
				as_pwd:''
				
			}
		},
		methods:{
			obtain(){ //获取验证码
				var that = this
				if(that.disabled == true) return
				uni.request({
					url:this.service.api_root.reg.WlVerifySend,
					method:'POST',
					header:{'X-Requested-With':'xmlhttprequest'},
					data:{
						accounts:that.accounts,
						type:'3'
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
			accomplish(){
				var that = this
				if(that.pwd != that.as_pwd){
					uni.showToast({
						icon:'none',
						title:'密码不一致'
					})
					return
				}
				
				uni.request({
					url:this.service.api_root.reg.ForgetPwd,
					method:'POST',
					header:{'X-Requested-With':'xmlhttprequest'},
					data:{
						accounts:that.accounts,
						pwd:that.pwd,
						verify:that.verify
					},
					success(res) {
						
						let data = res.data 
						console.log(data)
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							setTimeout(function(self,res){
								that.common.returns(that)
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
		padding-top: 20rpx;
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
		white-space: nowrap;
	}
	button{
		background: #1D74FF;
		color: #FFFFFF;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 45rpx;
		width: 84%;
		margin:60rpx 8%;
	}
</style>
