<template>
	<view class="content">
		<returns :titles='title'></returns>
		<view class="profile">
			<view class="profile_top">
				<view class="list_left">
					头像
				</view>
				<view class="list_right" @click="portraits()">
					<image :src="portrait" mode="aspectFill"></image>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="profile_list">
				<view class="list_left">
					昵称
				</view>
				<view class="list_right" @click="jump('threeuser/modify_name')">
					<view class="" v-if="nickname">
						{{nickname}}
					</view>
					<view class="" v-else ></v-else>
						未填写
					</view>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="profile_list">
				<view class="list_left">
					会员等级
				</view>
				<view class="list_right">
					<view class="">
						普通会员
					</view>
					<image src="" mode="widthFix"></image>
				</view>
			</view>
			<view class="profile_list">
				<view class="list_left">
					手机
				</view>
				<view class="list_right">
					<view class="">
						13800138000
					</view>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
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
				title: '个人资料',
				portrait:uni.getStorageSync('user').avatar,
				nickname:'',
			}
		},
		methods:{
			portraits(){
				let that = this
				uni.chooseImage({
				    success: (chooseImageRes) => {
						console.log(chooseImageRes)
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: this.service.api_root.subuser.UserAvatar,
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                token: uni.getStorageSync('token')
				            },
				            success: (res) => {
				                if(JSON.parse(res.data).code == 0){
									that.portrait = tempFilePaths[0]
									uni.showToast({
										icon:'none',
										title:'修改成功'
									})
								}
				            }
				        });
				    }
				});
				// this.service.entire(this,'post',this.service.api_root.subuser.UserAvatar,)
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onShow() {
			this.nickname = uni.getStorageSync('nickname')
		}
	}
</script>

<style scoped>
	.profile{
		
	}
	.profile .profile_top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 150rpx;
		padding: 0 30rpx 0 20rpx;
		font-size: 32rpx;
		color: #666666;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.profile .profile_top .list_right{
		display: flex;
		align-items: center;
	}
	.profile .profile_top .list_right image:nth-of-type(1){
		height: 94rpx;
		width: 94rpx;
		margin-right: 16rpx;
		border-radius: 94rpx;
	}
	.profile .profile_top .list_right image:nth-of-type(2){
		height: 32rpx;
		width: 32rpx;
	}
	.profile .profile_list{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		font-size: 32rpx;
		padding: 0 30rpx 0 20rpx;
		color: #666666;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.profile .profile_list .list_right{
		display: flex;
		align-items: center;
		color: #010101;
	}
	.profile .profile_list image{
		height: 32rpx;
		width: 32rpx;
		margin-left: 16rpx;
	}
</style>
