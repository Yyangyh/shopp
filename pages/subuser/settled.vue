<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="" v-if="status === '' || status == -1">
			<image class="settled_top" src="../../static/image/secondary/settled_top.jpg" mode="widthFix"></image>
			<view class="reason" v-if="status == -1">
				<view class="">
					您的申请被驳回：
				</view>
				<view class="">
					{{reason}}
				</view>
				<view class="">
					请重新提交
				</view>
			</view>
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
					<image v-if="license_image" :src="license_image" mode="widthFix"></image>
					<image v-else src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
					
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="upload">
				<view class="upload_test">
					法人身份证正面
				</view>
				<view class="upload_img"  @click="upload(2)">
					<image v-if="identity_positive_image" :src="identity_positive_image" mode="widthFix"></image>
					<image v-else src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="upload">
				<view class="upload_test">
					法人身份证反面
				</view>
				<view class="upload_img"  @click="upload(3)">
					<image v-if="identity_other_image" :src="identity_other_image" mode="widthFix"></image>
					<image v-else src="../../static/image/secondary/settled_img.png" mode="widthFix"></image>
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
			
			<view class="treaty" v-if="open_protocol == 1">
				<label class="radio"><checkbox style="transform: scale(0.8);" :checked="checked" class="checkbox-3"></checkbox></label>
				我已阅读并了解<text  @click="treaty_show = true">【入驻须知】</text>
			</view>
			
			<view class="Mask" v-show="treaty_show == true" @click="treaty_show = false">
				<!-- 遮罩 -->
			</view>
			<view class="treaty_box"  v-show="treaty_show == true">
				<view class="box_top">
					入驻须知
				</view>
				<view class="box_conent">
					<rich-text :nodes='treaty'></rich-text>
				</view>
				<button  @click="treaty_show = false">我已阅读</button>
			</view>
			<button @click="submit()">立即申请入驻</button>
		</view>
		
		<view class="process" v-else-if="status == 0">
			<image src="../../static/image/secondary/submit.png" mode="widthFix"></image>
			<view class="">
				已提交，请耐心等待审核~
			</view>
		</view>
		<view class="process" v-else-if="status == 1">
			<!-- <image src="../../static/image/secondary/submit.png" mode="widthFix"></image> -->
			<view class="">
				入驻成功！
			</view>
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
				status:99, //申请状态
				reason:'',
				merchname:'',
				desc:'',
				realname:'',
				mobile:'',
				uname:'',
				upass:'',
				confirm_upass:'',
				license_image:'',
				identity_positive_image:'',
				identity_other_image:'',
				treaty_show:false,
				treaty:'',
				open_protocol:'',
				checked:true
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
				console.log(this.checked)
				console.log(this.open_protocol)
				if(this.checked == true && this.open_protocol == 1){
					uni.showToast({
						icon:'none',
						title:'请阅读并同意入驻须知'
					})
					return
				}
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
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						setTimeout(function(){
							uni.switchTab({
								url:'../index/user'
							})
						},1500)
					}
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.merchRegister,{},function(self,res){
				console.log(res)
				self.status = res.data.status
				self.reason = res.data.reason
				self.treaty = res.data.applycontent
				self.open_protocol = res.data.open_protocol
			})
		}
		
	}
</script>

<style scoped>
	page{
		background: #F1F1F1;
		height: 100%;
	}
	.content{
		font-size: 28rpx;
		height: 100%;
	}
	.content>>>.top{
		position: relative;
		z-index: 99;
	}
	.uni-input-placeholder{
		color: #999;
	}
	.reason{
		padding: 20rpx;
		background: #F76464;
		color: #fff;
		font-size: 28rpx;
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
		left: 50%;
		margin: 0;
		transform: translateX(-50%);
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
	.process{
		text-align: center;
		height: 100%;
		background: #fff;
		position: fixed;
		z-index: 1;
		width: 100%;
		padding-top: 120rpx;
	}
	.process view{
		text-align: center;
		font-size: 28rpx;
		
	}
	.process image{
		height: 290rpx;
		width: 290rpx;
		
	}
</style>
