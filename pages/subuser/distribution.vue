<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		
		<view class="avatar">
			<view class="personal">
				<image :src="user.avatar" mode="widthFix"></image>
				<view class="name">
					<text class="h1" v-if="user.nickname">{{user.nickname}}</text>
					<text class="h1" v-else>未修改昵称</text>
					<text class="h2">推荐人:{{data.myreferrer}}</text>
					<text class="level">{{user_data.name}}</text>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="invitation">
			<view class="code">
				<image src="../../static/image/secondary/my_invitation.png" mode="widthFix"></image>
				<text>我的邀请码</text>
			</view>
			<view class="qb"  @click="jump('threeuser/mycode?code='+qrcode)">
				<image :src="qrcode" mode="widthFix"></image>
			</view>
		</view>
		<!--  -->
		<view class="commission">
			<view class="success">
				<text class="h3">{{data.user_profit_price}}</text>
				<text class="h4">获得佣金(元)</text>
			</view>
			<!-- <view class="operational">
				<view class="writing">
					<text class="h3">234.23</text>
					<text class="h4">成功提现佣金(元)</text>
				</view>
				<view class="btn" @click="jump('threeuser/withdrawal')">
					佣金提现
				</view>
			</view> -->
		</view>
		<!--  -->
		<view class="features">
			<view class="list" @click="jump('threeuser/dis_commision')">
				<image src="../../static/image/secondary/dc.png" mode="widthFix"></image>
				<view class="list_name">
					<text>分销佣金</text>
					<text class="h5">{{data.profit_total}} 单</text>
				</view>
			</view>
			<view class="list"  @click="jump('threeuser/presentation')">
				<image src="../../static/image/secondary/order2.png" mode="widthFix"></image>
				<view class="list_name">
					<text>分销订单</text>
					<text class="h5">{{data.order_total}} 笔</text>
				</view>
			</view>
			<!-- <view class="list">
				<image src="../../static/image/secondary/withdraw.png" mode="widthFix"></image>
				<view class="list_name">
					<text>提现明细</text>
					<text class="h5">0 笔</text>
				</view>
			</view> -->
			<view class="list"  @click="jump('threeuser/team')">
				<image src="../../static/image/secondary/my_team.png" mode="widthFix"></image>
				<view class="list_name">
					<text>我的团队</text>
					<text class="h5">{{data.team_total}} 人</text>
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
		data() {
			return {
				title:'我的分销',
				data:'',
				user_data:'',
				qrcode:'',
				user:uni.getStorageSync('user')
			}
		},
		methods: {
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.dis_index,{},function(self,res){
				console.log(res)
				self.data = res.data
				self.qrcode = res.data.qrcode.data
				self.user_data = res.data.user_level.data
			})
		}
	}
</script>

<style scoped>
	page{
		background: #F2F2F2;
	}
	.content{
		width: 100%;
		height: 100%;
		background: #F2F2F2;
		position: relative;
	}
	.content>>>.top{
		position: relative;
		z-index: 99;
	}
	.avatar{
		width: 100%;
		height: 280rpx;
		background: #FFFFFF;
		position: relative;
	}
	.personal{
		width: 100%;
		height: 160rpx;
		box-sizing: border-box;
		padding: 0 32rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: absolute;
		bottom: 60rpx;
	}
	.personal image{
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}
	.name{
		display: flex;
		align-content: space-between;
		flex-direction: column;
		margin-left: 40rpx;
	}
	.h1{
		color: #333333;
		font-size: 36rpx;
	}
	.h2{
		color: #333333;
		font-size: 30rpx;
	}
	.level{
		/* width: 120rpx; */
		height: 44rpx;
		border: 2rpx solid #1D9DFF;
		border-radius: 44rpx;
		font-size: 24rpx;
		color: #666666;
		flex-grow: 1;
		text-align: center;
		line-height: 44rpx;
	}
	.invitation{
		width: 100%;
		height: 140rpx;
		box-sizing: border-box;
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 26rpx;
		color: #333333;
		font-size: 30rpx;
		background: #FFFFFF;
	}
	.code{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.code text{
		margin-left: 24rpx;
	}
	.code image{
		width: 80rpx;
		height: 80rpx;
	}
	.qb{
		width: 84rpx;
		height: 84rpx;
	}
	.qb image{
		width: 84rpx;
		height: 84rpx;
	}
	.commission{
		width: 100%;
		height: 150rpx;
		margin-top: 32rpx;
	}
	.success{
		width: 100%;
		height: 154rpx;
		line-height: 77rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 0 32rpx;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.h3{
		color: #F2221F;
		font-size: 36rpx;
	}
	.h4{
		color: #666666;
		font-size: 30rpx;
	}
	.operational{
		width: 100%;
		height: 154rpx;
		margin-top: 4rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.writing{
		height: 100%;
		line-height: 77rpx;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.btn{
		width: 156rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 60rpx;
		background: #1D9DFF;
		font-size: 28rpx;
		color: #FFFFFF;
	}
	.features{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 30rpx;
	}
	.list{
		width: 49.6%;
		height: 184rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 6rpx;
	}
	.list image{
		width: 94rpx;
		height: 94rpx;
		margin-right: 10rpx;
	}
	.list_name{
		color: #333333;
		font-size: 30rpx;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.h5{
		color: #999999;
	}
</style>
