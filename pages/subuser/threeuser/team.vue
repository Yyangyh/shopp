	<!-- 我的分销--我的团队 -->
<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
	<view class="team_level">
		<view :class="['team_level_box', current == 0?'active':'']" v-if="data != ''" @click="change(0)">一级（{{data.length}}）</view>
		<view :class="['team_level_box', current == 1?'active':'']" v-if="son" @click="change(1)">二级（{{son.length}}）</view>
		<view :class="['team_level_box', current == 2?'active':'']" v-if="grandson" @click="change(2)">三级（{{grandson.length}}）</view>
	</view>
	
	<view class="team_list" v-for="(item,index) in data_list" :key='item.id'>
		<view class="list_left">
			<image :src="item.avatar" mode="widthFix"></image>
		</view>
		<view class="list_right">
			<view class="username">
				<text>昵称：{{item.nickname}}</text>
				<text style="padding-left: 80rpx;">{{item.username}}</text>
			</view>
			<view class="become_data">成为分销商时间： {{item.add_time_text}}</view>
		</view>
	</view>
	
	<!-- <view class="tip">没有更多的数据了</view> -->
	<view class="no_data" v-if="false">
		<view class="no_data_img">
			<image src="../../../static/image/no_data.png" mode="widthFix"></image>
		</view>
	</view>
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
				title: '我的团队',
				current:0,
				data:'', //一级
				son:'',//二级
				grandson:'',//三级
				data_list:''
			}
		},
		methods:{
			change(i){
				this.current = i
				if(i == 0) this.data_list = this.data
				if(i == 1) this.data_list = this.son
				if(i == 2) this.data_list = this.grandson
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.threeuser.dis_team,{
				token:uni.getStorageSync('token')
			},function(self,res){
				console.log(res)
				self.data = res.data.data.data
				self.son = res.data.data.son
				self.grandson = res.data.data.grandson
				self.data_list = res.data.data.data
			})
		}
	}
</script>

<style scoped>
	.team_level{
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	.team_level .team_level_box{
		/* width: 346rpx; */
		flex-grow: 1;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 32rpx;
		color: #999999;
		border-radius: 10rpx;
		background-color: #F1F1F1;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
	.team_level view:nth-child(1){
		margin-left: 0rpx;
	}
	.team_level view:nth-last-of-type(1){
		margin-right: 0rpx;
	}
	.team_level .team_level_box.active{
		background:linear-gradient(to right, #3E8FF3 20%,#64C5F9 100%);
		color: #FFFFFF;
	}
	.no_data{
		width: 100%;
		padding: 220rpx;
		box-sizing: border-box;
	}
	.no_data_img{
		width: 310rpx;
		height: 254rpx;
	}
	.no_data_img image{
		width: 310rpx;
		height: 254rpx;
	}
	.team_list{
		display: flex;
		padding: 20rpx 20rpx;
		border-bottom: 4rpx solid #F1F1F1;
	}
	.list_left {
		width: 100rpx;
		height: 100rpx;
		margin-right: 20rpx;
	}
	.list_left image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
	}
	.list_right {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.list_right .username{
		font-size: 28rpx;
	}
	.list_right .become_data{
		font-size: 24rpx;
		color: #999999;
	}
	.tip{
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 24rpx;
		color: #999999;
	}
</style>
