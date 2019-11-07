<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="ipt">
			<input type="text" v-model="uid" value="" placeholder="请输入赠送用户的id"/>
		</view>
		<view class="ipt">
			<input type="text" v-model="num" value="" placeholder="请输入赠送数量"/>
		</view>
		<button @click="ascertain()">确认</button>
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
				title:'赠送版通',
				uid:'',
				num:''
			}
		},
		methods:{
			ascertain(){ //确定
				let data = new Object()
				let url = this.service.api_root.subuser.threeuser.transferBt 
				data.uid = this.uid
				data.bt = this.num
				this.service.entire(this,'post',url,data,function(self,res){
					console.log(res)
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
