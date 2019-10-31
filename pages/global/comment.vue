<template>
	<!-- 评论页面 -->
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns> 
		<view class="comment" v-for="(item,index) in list" :key="index">
			<!-- <view class="wonder">
				精彩评论 （3）
			</view> -->
			<view class="list">
				<view class="list_top">
					<view class="list_left">
						<image src="../../static/image/assemble.png" mode=""></image>
						<view class="name">
							<view class="user">
								{{item.user.user_name_view}}
							</view>
							<view class="day">
								{{item.create_time_date}}
							</view>
						</view>
					</view>
					<view class="hand">
						<!-- 10
						<image src="../../static/image/finger.png" mode=""></image> -->
					</view>
				</view>
				<view class="list_bottom">
					<view class="words">
						{{item.content}}
					</view>
				</view>
			</view>
		</view>

		<!-- <view class="comment">
			<view class="wonder">
				最新评论 （3）
			</view>
			<view class="list">
				<view class="list_top">
					<view class="list_left">
						<image src="../../static/image/assemble.png" mode=""></image>
						<view class="name">
							<view class="user">
								牛哄哄
							</view>
							<view class="day">
								2019-05-30
							</view>
						</view>
					</view>
					<view class="hand">
						10
						<image src="../../static/image/finger.png" mode=""></image>
					</view>
				</view>
				<view class="list_bottom">
					<view class="words">
						nyfejr回到三国考虑到韩国考拉海购
						撒的国防生当
					</view>
				</view>
			</view>
		</view> -->
		<view class="b"></view>
		<view class="bottom">
			<input type="text" value="" placeholder="这一刻,我想说..." v-model="say"/>
			<view class="b_right">
				<text></text>
				<!-- <image src="../../static/image/smile.png" mode=""></image> -->
				<view @click="submitComment">发表</view>
			</view>
		</view>
		<view class="empty" v-show="list == ''">
			<image src="../../static/image/empty.png" mode=""></image>
			<view>暂无数据</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue';
	export default {
		data() {
			return {
				title: '评论',
				user:'',
				list:[],
				say:'',
				id:''
			}
		},
		components: {
			returns
		},
		methods:{
			load(id){
				this.service.entire(this, 'post', this.service.api_root.substrategy.comment_list, {
					page: 1,
					tid: id
				}, function(self, res) {
					console.log(res)
					self.user = res.data.user
					self.list =  res.data
				})
			},
			// 发表评论
			submitComment(){
				console.log(this.say);
				if(!this.say.trim()){
					return
				}
				this.service.entire(this,'post',this.service.api_root.substrategy.comment,{
					tid:this.id, // 攻略id
					content:this.say  
				},function(self,res){
					console.log(res)
					if(res.code == 0){
						uni.showToast({
							image:'../../static/image/bingo.png',
							title:'评论成功'
						})
						self.say = '' // 清空
						self.load(self.id)
					}
				})
			}
		},
		onLoad(e) {
			const id = e.id;
			this.id = id;
			this.load(id)
		}
	}
</script>

<style>
	.comment {
		padding: 26rpx 20rpx 0;
		box-sizing: border-box;
	}

	/* .wonder {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 32rpx;
		color: #333333;
	} */

	.list_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 60rpx;
	}

	.list_top .list_left {
		display: flex;
		height: 60rpx;
		align-items: center;
	}

	.list_top .list_left image {
		width: 57rpx;
		height: 57rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 24rpx;
	}

	.list_top .list_left .user {
		font-size: 24rpx;
		color: #666666;
	}

	.list_top .list_left .day {
		font-size: 24rpx;
		color: #999999;
	}

	.hand {
		font-size: 24rpx;
		color: #999999;
	}

	.hand image {
		width: 30rpx;
		height: 30rpx;
		margin-left: 10rpx;
	}

	.list_bottom {
		width: 100%;
		box-sizing: border-box;
		padding: 0rpx 0rpx 0rpx 80rpx;
	}

	.list_bottom .words {
		width: 100%;
		padding: 20rpx 0;
		border-bottom: 2rpx solid #F1F1F1;
		font-size: 28rpx;
		line-height: 50rpx;
		color: #333333;
	}

	.b {
		width: 100%;
		height: 100rpx;
	}

	.bottom {
		width: 100%;
		height: 100rpx;
		background: #F1F1F1;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10;
		box-sizing: border-box;
		padding: 0rpx 10rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.b_right {
		display: flex;
		align-items: center;
	}

	.bottom input {
		width: 560rpx;
		text-indent: 20rpx;
		color: #333333;
	}

	.b_right image {
		width: 40rpx;
		height: 40rpx;
		margin: 0 10rpx;
	}

	.b_right view {
		width: 100rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		border-radius: 10rpx;
		text-align: center;
		color: #FFFFFF;
		background: linear-gradient(left, #3E8FF3, #64C5F9);
	}
	.empty{
		position: fixed;
		top: 30%;
		left: 50%;
		transform: translate(-50%,-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.empty>view{
		color: #999999;
		font-size: 24rpx;
		margin-top: 22rpx;
	}
	.empty image{
		width: 310rpx;
		height: 290rpx;
	}
</style>
