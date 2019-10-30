<template>
	<!-- 其他用户游记攻略 -->
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="img">
			<view class="img_left">
				<image :src="avatar" mode=""></image>
				<view class="user">
					<view class="user_name">
						{{username}}
					</view>
					<view class="user_date" @click="jump('./profile')">
						{{desc}}
					</view>
				</view>
			</view>
		</view>
		<view class="fans">
			<view class="fans_box" @click="jump('./my_fans?type=1')">
				<view>{{data.follow_count}}</view>
				<view>粉丝</view>
			</view>
			<view class="fans_box" @click="jump('./my_fans?type=2')">
				<view>{{data.my_follow_count}}</view>
				<view>关注</view>
			</view>
			<view class="fans_box" @click="jump('./my_fans?type=3')">
				<view>{{data.visit_count}}</view>
				<view>访客</view>
			</view>
		</view>
		<view class="tab">
			<view class="travels">
				我的发布
			</view>
		</view>
		<view class="travels_details" v-for="(item,index) in strategy_list" @click="jumping('/pages/global/strategy_details',item.id)">
			<view class="travels_title">
				{{item.title}}
			</view>
			<scroll-view class="scroll-view_H" scroll-x="true"  scroll-left="120">
				<view class="travels_pic">
					<view class="pics">
						<image v-for="(items,indexs) in item.images" :src="items" mode="aspectFill"></image>
					</view>
				</view>
			</scroll-view>
			
			<view class="travels_time">
				<view class="day">
					{{item.create_time_date}}
				</view>
				<view class="comment">
					<image src="../../static/image/index/new5.png" mode=""></image>
					<text>{{item.comment_count}}</text>
					<image src="../../static/image/index/eye5.png" mode=""></image>
					<text>{{item.access_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue';
	export default {
		data() {
			return {
				title: '游记攻略',
				token:uni.getStorageSync('token'),
				uid:uni.getStorageSync('uid'),
				data:'',
				avatar:'',
				username:'',
				desc:'',
				strategy_list:''
			}
		},
		components: {
			returns
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			jumping(url,id){
				uni.navigateTo({
					url:url+'?i='+id
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.substrategy.list,{
				token:this.token,
				uid:this.uid
			},function(self,res){
				console.log(res)
				self.data = res.data
				self.avatar = res.data.user.avatar
				self.username = res.data.user.user_name_view;
				self.desc = res.data.user.desc;
			})
			
			this.service.entire(this,'post',this.service.api_root.index.travels_list,{  //我的发布
				page:1,
				uid:this.uid
			},function(self,res){
				console.log(res)
				self.strategy_list = res.data
			})
		}
	}
</script>

<style scoped>
	page{
		background: #F1F1F1;
	}
	.img {
		margin-top: 20rpx;
		width: 100%;
		height: 158rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 20rpx 0 55rpx;
		background: #FFFFFF;
	}

	.img image {
		width: 103rpx;
		height: 103rpx;
		border-radius: 50%;
	}

	.img_left {
		display: flex;
	}

	.user_name {
		font-size: 32rpx;
		color: #333333;
	}

	.user_date {
		font-size: 24rpx;
		color: #999999;
	}

	.user {
		height: 94rpx;
		margin-left: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	
	.fans{
		width: 100%;
		height: 99rpx;
		/* background: #0078FF; */
		box-sizing: border-box;
		padding-left:30rpx;
		display: flex;
		font-size: 28rpx;
		margin-bottom: 20rpx;
		background: #FFFFFF;
	}
	.fans_box{
		width: 120rpx;
		text-align: center;
		color: #333333;
	}
	.tab{
		width: 100%;
		height: 80rpx;	
		box-sizing: border-box;
		padding-left: 20rpx;
		background: #FFFFFF;
	}
	.tab .travels{
		width: 178rpx;
		height: 80rpx;	
		text-align: center;
		line-height: 80rpx;
		color: #1D9DFF;
		font-size: 32rpx;
		box-sizing: border-box;
		border-bottom: 5rpx solid #1D9DFF;
	}
	.travels_details{
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		background: #FFFFFF;
		margin-bottom: 20rpx;
	}
	.travels_details .travels_title{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		color: #2E2E2E;
		font-size: 28rpx;
	}
	.travels_pic{
		
	}
	.pics {
		white-space: nowrap;
		/* display: flex;
		justify-content: space-between; */
	}
	.pics image{
		width: 226rpx;
		height: 226rpx;
	}
	.travels_time{
		width: 100%;
		height: 52rpx;
		line-height: 52rpx;
		color: #666666;
		font-size: 24rpx;
		/* background: #0078FF; */
		display: flex;
		justify-content: space-between;
	}
	.travels_time .comment image{
		width: 32rpx;
		height: 32rpx;
		vertical-align: middle;
	}
</style>
