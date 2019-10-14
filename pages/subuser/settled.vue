<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="">
			<image class="settled_top" src="../../static/image/secondary/settled_top.jpg" mode="widthFix"></image>
			<view class="settled_box">
				<view class="box_list">
					<view class="">
						<view class="">
							商户名称
						</view>
						<text>*</text>
					</view>
					<input type="text" value="" v-model="merchname" placeholder="商户名称"/>
				</view>
				<view class="box_list">
					<view class="">
						<view class="">
							简单介绍
						</view>
					</view>
					<input type="text" value="" v-model="desc"  placeholder="简单介绍下客户"/>
				</view>
			</view>
			<view class="upload">
				<view class="upload_test">
					请上传营业执照
				</view>
				<view class="upload_img"  @click="upload(1)">
					<image src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="upload">
				<view class="upload_test">
					法人身份证正面
				</view>
				<view class="upload_img"  @click="upload(2)">
					<image src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="upload">
				<view class="upload_test">
					法人身份证反面
				</view>
				<view class="upload_img"  @click="upload(3)">
					<image src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="settled_box">
				<view class="box_list">
					<view class="">
						<view class="">
							联系人
						</view>
						<text>*</text>
					</view>
					<input type="text" value="" v-model="realname" placeholder="您的姓名"/>
				</view>
				<view class="box_list">
					<view class="">
						<view class="">
							手机号
						</view>
						<text>*</text>
					</view>
					<input type="text" value=""  v-model="mobile" placeholder="您的手机号"/>
				</view>
				<view class="box_list">
					<view class="list_test">
						请仔细填写联系方式，保证我们能尽快联系到您~
					</view>
					
				</view>
			</view>
			<view class="settled_box">
				<view class="box_list">
					<view class="">
						<view class="">
							账号
						</view>
						<text>*</text>
					</view>
					<input type="text" value="" v-model="uname" placeholder="账号"/>
				</view>
				<view class="box_list">
					<view class="">
						<view class="">
							密码
						</view>
						<text>*</text>
					</view>
					<input type="text" value="" password="true" v-model="upass" placeholder="密码"/>
				</view>
				<view class="box_list">
					<view class="">
						<view class="">
							确认密码
						</view>
						<text>*</text>
					</view>
					<input type="text" value=""  password="true" v-model="confirm_upass" placeholder="确认密码"/>
				</view>
				<view class="box_list">
					<view class="list_test">
						用于登录多商户后台，请认真填写，保证我们能尽快联系到您~
					</view>
					
				</view>
			</view>
			<button @click="submit()">立即申请入驻</button>
		</view>
		<view class="">
			<image src="" mode="widthFix"></image>
		</view>
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
				title: '商家入驻',
				data_dition:'',
				merchname:'',
				desc:'',
				realname:'',
				mobile:'',
				uname:'',
				upass:'',
				confirm_upass:'',
				license_image:'',
				identity_positive_image:'',
				identity_other_image:''
			}
		},
		methods:{
			upload(type){
				let that = this
				uni.chooseImage({
				    success: (chooseImageRes) => {
						console.log(chooseImageRes)
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: this.service.api_root.subuser.merchUpload,
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                token: uni.getStorageSync('token')
				            },
				            success: (res) => {
				                let data = JSON.parse(res.data)
								console.log(data)
								uni.showToast({
									icon:'none',
									title:data.msg
								})
								if(data.code == 0){
									if(type == 1) that.license_image = data.data.file
									if(type == 2) that.identity_positive_image = data.data.file
									if(type == 3) that.identity_other_image = data.data.file
								}
				            }
				        });
				    }
				});
			},
			submit(){
				if(this.confirm_upass != this.upass){
					uni.showToast({
						icon:'none',
						title:'密码不一致'
					})
					return
				}
				this.service.entire(this,'post',this.service.api_root.subuser.merchSubmit,{
					merchname:this.merchname,
					desc:this.desc,
					realname:this.realname,
					mobile:this.mobile,
					license_image:this.license_image,
					identity_positive_image:this.identity_positive_image,
					identity_other_image:this.identity_other_image,
					uname:this.uname,
					upass:this.upass,
				},function(self,res){
					console.log(res)
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.merchRegister,{},function(self,res){
				console.log(res)
			})
		}
		
	}
</script>

<style scoped>
	page{
		background: #F1F1F1;
	}
	.content{
		font-size: 28rpx;
	}
	.uni-input-placeholder{
		color: #999;
	}
	.settled_top{
		width: 100%;
		height: 280rpx;
		margin-bottom: 20rpx;
	}
	.settled_box{
		background: #fff;
		margin-bottom: 20rpx;
	}
	.settled_box .box_list{
		height: 100rpx;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #F1F1F1;
	}
	.settled_box .box_list .list_test{
		font-size: 24rpx;
		width: 100%;
	}
	.settled_box .box_list>view{
		width: 140rpx;
		display: flex;
		justify-content: space-between;
	}
	.settled_box .box_list input{
		font-size: 28rpx;
		flex-grow: 2;
		color: #333;
	}
	.settled_box .box_list text{
		color: #FF431D;
	}
	.upload{
		margin-bottom: 20rpx;
		height: 100rpx;
		padding: 0 20rpx;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.upload .upload_img{
		display: flex;
		align-items: center;
	}
	.upload image:nth-of-type(1){
		width: 50rpx;
		height: 50rpx;
		margin-right: 20rpx;
	}
	.upload image:nth-of-type(2){
		width: 32rpx;
		height: 32rpx;
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
