<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="mo_name">
			<view class="name_top">
				<input type="text" value="" v-model="nickname" placeholder="请输入新的昵称"/>
			</view>
			<view class="name_bottom">
				昵称由汉字、字母、数字、符号组成
			</view>
		</view>
		<button @click="preservation()">保存</button>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title: '个人资料',
				nickname:''
			}
		},
		methods:{
			preservation(){
				this.service.entire(this,'post',this.service.api_root.subuser.threeuser.UserSave,{
					nickname:this.nickname,
					token:uni.getStorageSync('token')
				},function(self,res){
					console.log(res)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						uni.setStorageSync('nickname',self.nickname)
						setTimeout(function(){
							self.common.returns(self)
						},1500)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.mo_name{
		padding: 0 20rpx;
		margin-top: 30rpx;
	}
	.mo_name .name_top{
		height: 88rpx;
		line-height: 88rpx;
		background: #F1F1F1;
		margin-bottom: 30rpx;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		border-radius: 10rpx;
	}
	.mo_name .name_top input{
		width: 100%;
		font-size: 32rpx;
	}
	.mo_name .name_bottom{
		color: #666666;
		font-size: 28rpx;
	}
	button{
		margin: 64rpx 20rpx;
		color: #fff;
		background: #1D74FF;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 80rpx;
		font-size: 32rpx;
	}
</style>
