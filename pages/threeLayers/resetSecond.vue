<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="ipt">
			
			<input type="text" v-model="accounts" value="" placeholder="手机号"/>
		</view>
		<view class="ipt">
			
			<input type="text" v-model="verify" value="" placeholder="请输入验证码"/>
			<text @click="obtain()">{{verification}}</text>
		</view>
		<view class="ipt">
			<input type="text" v-model="accounts" value="" placeholder="设置新二级密码"/>
		</view>
		<button>确认</button>
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
				title:'重置二级密码',
				verification: '获取验证码',
				disabled:false,
				accounts:'',
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
		onShow() {
			console.log(this)
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
	}
	.ipt{
		display: flex;
		margin: 20rpx;
		border-bottom: 2rpx solid #EEEEEE;
		padding: 20rpx 30rpx;
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
	}
	button{
		background: #1D74FF;
		color: #FFFFFF;
		height: 88rpx;
		line-height: 88rpx;
		border-radius: 44rpx;
		font-size: 34rpx;
		/* width: 84%; */
		margin:78rpx 36rpx;
	}
</style>
