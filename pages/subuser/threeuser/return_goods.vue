	<!--我的分销 -- 佣金提现 -->
<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="ipt">
			<input type="text" v-model="express_name" value="" placeholder="请输入快递名称"/>
		</view>
		<view class="ipt">
			<input type="text" v-model="express_number" value=""  placeholder="请输入快递单号	"/>
		</view>
		<button @click="ascertain()">确定</button>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components: {
			returns
		},
		data() {
			return {
				title: '填写退货信息',
				id:'',
				express_name:'',
				express_number:''
			}
		},
		methods:{
			ascertain(){
				if(!this.express_name || !this.express_number){
					uni.showToast({
						icon:'none',
						title:'请完整填写退货信息'
					})
					return
				}
				this.service.entire(this,'post',this.service.api_root.subuser.threeuser.Delivery,{
					id:this.id,
					express_name:this.express_name,
					express_number:this.express_number,
				},function(self,res){
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
		onLoad(e) {
			this.id = e.id
		}
		
	}
</script>

<style scoped>
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
