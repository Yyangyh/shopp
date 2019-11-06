<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="ipt">
			
			<input type="text" v-model="accounts" value="" password placeholder="旧密码"/>
		</view>
		<view class="ipt">
			<input type="text" v-model="pwd" value="" password placeholder="设置新密码"/>
		</view>
		<view class="ipt">
			<input type="text" v-model="asc_pwd" value="" password placeholder="确认新密码"/>
		</view>
		<button @click="ascertain()">确认</button>
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
				title:'修改密码',
				accounts:'',
				pwd:'',
				asc_pwd:''
			}
		},
		methods:{
			ascertain(){
				if(this.pwd != this.asc_pwd){
					uni.showToast({
						icon:'none',
						title:'密码不一致'
					})
					return
				}
				this.service.entire(this,'post',this.service.api_root.threeLayers.LoginPwdUpdate,{
					my_pwd:this.accounts,
					new_pwd:this.pwd,
					confirm_new_pwd:this.asc_pwd
				},function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						setTimeout(function(){
							self.common.returns(self)
						},1500)
					}
				})
			}
			
		},
		
		onShow() {
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
