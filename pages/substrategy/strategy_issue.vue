<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="iss_title">
			<view class="">
				标题
			</view>
			<input v-model="iss_title" type="text" value="" placeholder="输入标题" />
		</view>
		<view class="textarea">
			<textarea placeholder-style="color:#999999" v-model="content" placeholder="这一刻的想法…"/>
		</view>
		<view class="image_list">
			<view class="image_box" v-for="(item,index) in image_list" >
				<image class="img" :src="item" mode="aspectFill" :key='index'></image>
				<image class="close" @click="deletes(index)" src="../../static/image/secondary/close2.png" mode=""></image>
			</view>
			<view class="add" @click="add_image()">
				+
			</view>
		</view>
		<view class="iss_bottom">
			<view class="iss_left">
				<image src="../../static/image/secondary/position.png" mode="widthFix"></image>
				<view class="">
					所在位置
				</view>
			</view>
			<view class="iss_right">
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view>
		<button @click="release()">发布</button>
	</view>
</template>

<script>
	import returns from '../common/returns.vue';
	export default {
		data(){
			return{
				title:'发布编辑',
				image_list:[],
				iss_title:'',
				content:'',
				images:[]
			}
		},
		components:{
			returns
		},
		methods:{
			add_image(){
				let that = this
				uni.chooseImage({
				    count: 1, //默认9
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						uni.uploadFile({
						    url: that.service.api_root.common.upload_image,
						    filePath: res.tempFilePaths[0],
						    name: 'file',
						    formData: {
						        token: uni.getStorageSync('token')
						    },
						    success: (ref) => {
								console.log(ref)
						        if(JSON.parse(ref.data).code == 0){
									console.log(JSON.parse(ref.data))
									 that.image_list.push(res.tempFilePaths[0])
									 that.images.push(JSON.parse(ref.data).data.file)
								}
						    }
						});
				    }
				});
			},
			deletes(index){
				this.image_list.splice(index,1)	
			},
			release(){
				if(!this.iss_title){
					uni.showToast({
						icon:'none',
						title:'请输入标题'
					})
					return
				}
				if(!this.content){
					uni.showToast({
						icon:'none',
						title:'请输入内容'
					})
					return
				}
				this.service.entire(this,'post',this.service.api_root.substrategy.add_travels,{
					title:this.iss_title,
					content:this.content,
					images:this.images,
					address:'广州'
				},function(self,res){
					
				})
			}
		},
	}
</script>

<style scoped>
	.content{
		/* padding: 0 20rpx; */
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	.iss_title{
		height: 100rpx;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.iss_title view{
		font-size: 32rpx;
		color: #333333;
		margin-right: 35rpx;
	}
	.iss_title input{
		flex-grow: 2;
		font-size: 30rpx;
	}
	.textarea{
		padding: 35rpx 0rpx;
	}
	.textarea textarea{
		font-size: 30rpx;
	}
	.image_list{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.image_list .add{
		background: #F1F1F1;
		color: #CCCCCC;
		font-size: 120rpx;
		height: 230rpx;
		width: 230rpx;
		line-height: 230rpx;
		text-align: center;
	}
	.image_list .image_box{
		position: relative;
	}
	.image_list .img{
		height: 230rpx;
		width: 230rpx;
	}
	.image_list .close{
		height: 40rpx;
		width: 40rpx;
		position: absolute;
		top: 5rpx;
		right: 5rpx;
	}
	.iss_bottom{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		font-size: 28rpx;
		border-bottom: 2rpx solid #F1F1F1;
		border-top: 2rpx solid #F1F1F1;
		margin-top: 40rpx;
	}
	.iss_bottom .iss_left{
		display: flex;
		align-items: center;
	}
	.iss_bottom .iss_left image{
		height: 34rpx;
		width: 34rpx;
		margin-right: 10rpx;
	}
	.iss_bottom .iss_right image{
		height: 27rpx;
		width: 27rpx;
	}
	button{
		margin-top: 40rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
		font-size:28rpx;
		color: #fff;
		background: #1D74FF;
	}
</style>
