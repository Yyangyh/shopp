<template>
	<view class="content" @click="show">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top">
			<view class="top_left">
				<image :src="user.avatar" mode=""></image>
				<text>{{user.user_name_view}}</text>
			</view>
			<view class="focus">
				关注
			</view>
		</view>
		
		<rich-text :nodes="richtext"></rich-text>
		
		<view class="bottom" v-if="isShow">
			<view class="bottom_left" @click.stop="isShow = !isShow">
				<image src="../../static/image/penceil.png" mode=""></image>
				<view class="">
					发表评论
				</view>
			</view>
			<view class="bottom_right">
				<view class="img" @click="jumping('/pages/global/comment')">
					<image src="../../static/image/com.png" mode=""></image>
					<view>{{data.comment_count}}</view>
				</view>
				<view class="img" @click="zan">
					<image src="../../static/image/hand.png" mode="" v-if="data.is_star==false"></image>
					<image src="../../static/image/finger.png" mode="" v-else></image>
					<view>{{data.star_count}}</view>
				</view>
				<view class="img">
					<image src="../../static/image/eys.png" mode=""></image>
					<view>{{data.access_count}}</view>
				</view>
			</view>
		</view>
			<view class="comment" v-if="isShow==false" @click.stop="">
			<textarea v-model="say" />
			<view class="confirm">
				<view></view>
				<!-- <image src="../../static/image/smile.png" mode=""></image> -->
				<view class="submit" @click="submitComment">
					发表
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		components:{
			returns
		},
		data(){
			return{
				title:"游记攻略",
				isShow:true,
				richtext:'',
				data:'',
				user:'',
				id:'',
				say:''
			}
		},
		methods:{
			show(){
				console.log(2222);
				//点击content 控制评论盒子隐藏
				this.isShow = true
				
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			jumping(url){
				uni.navigateTo({
					url:url+'?id='+this.id
				})
			},
			// 发表评论
			submitComment(){
				console.log(this.say);
				this.service.entire(this,'post',this.service.api_root.substrategy.comment,{
					tid:this.id, // 攻略列表 进入攻略详细时带过来的那个id
					content:this.say  
				},function(self,res){
					console.log(res)
					if(res.code == 0){
						uni.showToast({
							icon:'none',
							title:res.msg
						})
						self.say = '' // 清空
						self.isShow = !self.isShow // 评论成功隐藏评论框
					}
				})
			},
			// 点赞
			zan(){
				this.service.entire(this,'post',this.service.api_root.substrategy.star,{
					tid:this.id, // 攻略id
				},function(self,res){
					console.log(res)
					if(res.code == 0){
						self.load(self.id)
					}
				})
			},
			load(id){
				this.service.entire(this,'post',this.service.api_root.index.travels_list,{
					page:1,
					id:id  //拿到单条攻略
				},function(self,res){
					console.log(res)
					self.data = res.data[0]
					    let richtext=  res.data[0].content
						self.user = res.data[0].user
					    const regex = new RegExp('<img', 'gi');
					    const regexP = new RegExp('<p', 'gi');
					    const regexspan = new RegExp('<span', 'gi')
					    richtext= richtext.replace(regex, `<img style="max-width: 100%;"`);
					    richtext= richtext.replace(regexP, `<p style="word-wrap:break-word;word-break:normal;"`);
					    richtext= richtext.replace(regexspan, `<span style="word-wrap:break-word;word-break:normal;white-space: pre-wrap;"`);
					    self.richtext = richtext;
				})
			}
		},
		onLoad(option) {
			const id = option.i;
			this.id = id
			this.load(id)
		}
	}	
</script>

<style scoped>
	page{
		background: #F1F1F1;
		width: 100%;
		height: 100%;
	}
	.content{
		width: 100%;
		height: 100%;
	}
	.top{
		width: 100%;
		height: 100rpx;
		/* background: #FFFFFF; */
		padding-left: 47rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
	}
	.top .top_left image{
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 13rpx;
	}
	.top .top_left{
		display: flex;
		align-items: center;
		font-size: 34rpx;
		color: #666666;
	}
	.top .focus{
		width: 107rpx;
		height: 44rpx;
		border-radius: 20rpx;
		line-height: 44rpx;
		font-size: 24rpx;
		text-align: center;
		background: #02A7F0;
		color: #FFFEFE;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 90rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.bottom_left{
		width: 206rpx;
		height: 50rpx;
		background: #1D9DFF;
		border-radius: 30rpx;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding-left: 14rpx;
		color: #FEFFFF;
		font-size: 24rpx;
		color: #FEFFFF;
	}
	
	.bottom_left image{
		width: 34rpx;
		height: 34rpx;
		margin: 0 12rpx;
	}
	.bottom_right{
		height: 100%;
		display: flex;
		justify-content: center;
		font-size: 32rpx;
		color: #666666;
	}
	.bottom_right .img {
		width: 120rpx;
		display: flex;
		align-items: center;
		/* margin: 0 12rpx; */
	}
	.bottom_right .img image{
		width: 49rpx;
		height: 49rpx;
		
	}
	.sub_comment{
		width: 100%;
		height: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 20;
	}
	.comment{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 21;
		width: 100%;
		height: 254rpx;
		background: #FFFFFF;
		padding: 16rpx 30rpx 0;
		box-sizing: border-box;
	}
	textarea{
		width: 690rpx;
		height: 150rpx;
		background: #F2F2F2;
		line-height: 50rpx;
		padding: 0 14rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		color: #333;
		border-radius: 10rpx;
	}
	.confirm {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 22rpx;
	}
	.confirm image{
		width: 44rpx;
		height: 44rpx;
	}
	.submit{
		width: 96rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 24rpx;
		background: #1D9DFF;
		border-radius: 10rpx;
	}
</style>
