<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="attestation" v-if="status === '0'">
			<image src="/static/image/secondary/attestation.png" mode="widthFix"></image>
			<view class="">
				认证审核中……
			</view>
		</view>
		<view class="adopt" v-else-if="status === '1'">
			<image src="/static/image/secondary/adopt.png" mode="widthFix"></image>
			<view class="">
				审核通过
			</view>
		</view>
		<block v-else-if="status == 2 || status == 4">
			<view class="reject" v-if="status == 2">
				<view class="">
					您的申请被驳回：
				</view>
				<view class="">
					{{reject_test}}
				</view>
				<view class="">
					请重新提交
				</view>
			</view>
			<view class="real_list">
				<view class="">
					姓名
				</view>
				<input type="text" value="" placeholder="请输入真实姓名" v-model="realname"/>
			</view>
			<view class="real_list">
				<view class="">
					身份证号码
				</view>
				<input type="text" value="" placeholder="请输入身份证号" v-model="idnum"/>
			</view>
			<view class="real_test">
				请上传本人真实身份证信息,一经提交无法修改
			</view>
			<view class="real_img">
				<view class="real_img_one" @click="up_img(1)">
					<block v-if="heads_img == ''">
						<image class="image" src="/static/image/secondary/real_front.png" mode="widthFix"></image>
						<image class="sweep" src="/static/image/secondary/sweep.png" mode="widthFix"></image>
					</block>
					<image v-else class="image" :src="heads_img" mode="widthFix"></image>
				</view>
				<view class="real_img_two">
					身份证正面照
				</view>
				<view class="real_img_one" @click="up_img(2)">
					<block v-if="tails_img == ''">
						<image class="image" src="/static/image/secondary/real_verso.png" mode="widthFix"></image>
						<image class="sweep" src="/static/image/secondary/sweep.png" mode="widthFix"></image>
					</block>
					<image v-else class="image" :src="tails_img" mode="widthFix"></image>
				</view>
				<view class="real_img_two">
					身份证反面照
				</view>
			</view>
			<button @click="ascertain()">提交</button>
		</block>
		
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title: '实名认证',
				status:'',
				reject_test:'',
				realname:'',
				idnum:'',
				heads:'',
				heads_img:'',
				tails:'',
				tails_img:'',
			}
		},
		methods:{
			up_img(type){
				let that = this
				uni.chooseImage({
				    count: 1, //默认9
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						uni.showLoading({
							title: '上传中',
							mask: true
						});
						let times = setTimeout(function() {
							uni.hideLoading()
							uni.showToast({
								icon: 'none',
								title: '网络请求错误，请稍后再试'
							})
							return
						}, 10000)
						uni.uploadFile({
						    url: that.service.api_root.common.upload_image,
						    filePath: res.tempFilePaths[0],
						    name: 'file',
						    formData: {
						        token: uni.getStorageSync('token')
						    },
						    success: (ref) => {
								uni.hideLoading()
								clearTimeout(times)
						        if(JSON.parse(ref.data).code == 0){
									// console.log(JSON.parse(ref.data))
									if(type == 1){
										that.heads = JSON.parse(ref.data).data.file
										that.heads_img = res.tempFilePaths[0]
									}else{
										that.tails = JSON.parse(ref.data).data.file
										that.tails_img = res.tempFilePaths[0]
									}
									
								}else{
									uni.showToast({
										icon: 'none',
										title: JSON.parse(ref.data).msg
									})
								}
						    }
						});
				    }
				});
			},
			ascertain(){
				if(this.realname == '' || this.idnum == '' || this.heads == '' || this.tails == ''){
					uni.showToast({
						icon:'none',
						title:'请完整填写实名信息'
					})
					return
				}
				this.service.entire(this,'post',this.service.api_root.subuser.Reg_name,{
					realname:this.realname,
					idnum:this.idnum,
					heads:this.heads,
					tails:this.tails,
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
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.Reg_Detail,{},function(self,res){
				console.log(res)
				if(res.data != ''){
					self.status = res.data.status
					if(self.status ==2 )self.reject_test = res.data.reason
				}else{
					self.status = 4
				}
			})
		}
	}
</script>

<style scoped>
	.attestation{
		text-align: center;
		font-size: 24rpx;
		color: #999999;
	}
	.attestation image{
		height: 264rpx;
		width: 293rpx;
	}
	.adopt {
		
		font-size: 24rpx;
		color: #999999;
		text-align: center;
	}
	.adopt image{
		margin: 60rpx 0 30rpx 0;
		height: 182rpx;
		width: 182rpx;
	}
	.real_list{
		display: flex;
		align-items: center;
		height: 100rpx;
		color: #3B4248;
		font-size: 24rpx;
		padding: 0 20rpx;
		border-bottom: 2rpx solid #F4F4F4;
	}
	.reject{
		padding: 10px;
		background: #F76464;
		color: #fff;
		font-size: 14px;
	}
	.real_list view{
		width: 140rpx;
		padding: 0 20rpx;
	}
	.real_list input{
		font-size: 24rpx;
		flex-grow: 2;
	}
	.real_test{
		text-align: center;
		color: #4DA9FF;
		font-size: 24rpx;
		padding: 40rpx 0;
	}
	.real_img{
		padding: 0 20rpx;
	}
	.real_img  .real_img_two{
		text-align: center;
		font-size: 28rpx;
		color: #333333;
		padding: 10rpx 0 30rpx 0;
	}
	.real_img .real_img_one{
		position: relative;
	}
	.real_img .image{
		width: 100%;
	}
	.real_img .sweep{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 110rpx;
		height: 101rpx;
	}
	button{
		    text-align: center;
		    height: 80rpx;
		    line-height: 80rpx;
		    border-radius: 80rpx;
		    font-size: 28rpx;
		    color: #fff;
		    background: #1D74FF;
		    margin: 30rpx 20rpx;
	}
</style>
