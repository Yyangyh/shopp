<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_test">
				<!--  #ifdef  APP-PLUS -->
				<image src="../../static/image/sweep.png" mode="widthFix" @click="sweep()"></image>
				<!--  #endif -->
				
				<image src="../../static/image/set.png" mode="widthFix" @click="jump('../subuser/set')"></image>
				<image src="../../static/image/news.png" mode="widthFix" @click="jump('../subuser/feedback')"></image>
				<image src="../../static/image/feedback.png" mode="widthFix"  @click="jump('../subuser/notice')"></image>
			</view>
			<view class="">
				<view class="user" v-if="state == 1">
					<image class="user_head" :src="data.avatar" mode="aspectFill"  @click="jump('../subuser/profile')"></image>
					<view class="user_left">
						<view class="left_top">
							<view v-if="nickname">{{nickname}}</view>
							<view v-else>未修改昵称</view>
							<view class="user_right">
								<image src="../../static/image/id.png" mode="widthFix"></image>
								<text>实名认证</text>
								<image src="../../static/image/go1.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="left_bottom">
							<image src="../../static/image/check.png" mode="widthFix"></image>
							<text>会员</text>
						</view>
					</view>
				</view>
				
				<view class="logint" v-if="state == 2">
					<image class="user_head" src="../../static/image/state_user.png" mode="widthFix"></image>
					<view class="logint_one">
						<view @click="jump('../login/login')">登录/注册</view>
						<image src="../../static/image/go1.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="semicircle" :style="style">
				
			</view>
		</view>
		<view class="user_vip"  @click="jump('../subuser/member')">
			<view class="vip_one">
				<image src="../../static/image/vip.png" mode="widthFix"></image>
				<view class="">
					<view class="">
						成为超级会员
					</view>
					<view class="">
						享受特权，全年可省300元
					</view>
				</view>
			</view>
			<view class="vip_two">
				<view class="">
					立即开通
				</view>
				<image src="../../static/image/go.png" mode=""></image>
			</view>
		</view>
		<view class="user_top">
			<view class="user_tab">
				<view class="tab_list" @click="jump('../subuser/member')">
					<image src="../../static/image/member.png" mode="widthFix"></image>
					<view class="">
						会员中心
					</view>
				</view>
				<view class="tab_list"  @click="jump('../subuser/register')">
					<image src="../../static/image/signIn.png" mode="widthFix"></image>
					<view class="">
						签到
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/integral')">
					<image src="../../static/image/integral1.png" mode="widthFix"></image>
					<view class="">
						积分
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/coupon')">
					<image src="../../static/image/oupon1.png" mode="widthFix"></image>
					<view class="">
						优惠券
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="user_middle">
			<view class="middle_top">
				<view class="">
					我的订单
				</view>
				<view>
					<text>查看更多订单</text>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="middle_tab">
				<view class="tab_top">
					门票玩乐订单
				</view>
				<view class="tab_box">
					<view class="tab_list">
						<image src="../../static/image/behalf1.png" mode="widthFix"></image>
						<view class="">
							待付款
						</view>
					</view>
					<view class="tab_list">
						<image src="../../static/image/stay_use.png" mode="widthFix"></image>
						<view class="">
							待使用
						</view>
					</view>
					<view class="tab_list">
						<image src="../../static/image/stay_comment1.png" mode="widthFix"></image>
						<view class="">
							待评论
						</view>
					</view>
					<view class="tab_list">
						<image src="../../static/image/refund1.png" mode="widthFix"></image>
						<view class="">
							退款
						</view>
					</view>
				</view>
				<view class="tab_top">
					商城订单
				</view>
				<view class="tab_box">
					<view class="tab_list"  @click="jump('../subuser/mall_order?status=1')">
						<image src="../../static/image/behalf2.png" mode="widthFix"></image>
						<view class="">
							待付款
						</view>
					</view>
					<view class="tab_list" @click="jump('../subuser/mall_order?status=2')">
						<image src="../../static/image/stay_goods.png" mode="widthFix"></image>
						<view class="">
							待收货
						</view>
					</view>
					<view class="tab_list" @click="jump('../subuser/mall_order?status=4')">
						<image src="../../static/image/stay_comment2.png" mode="widthFix"></image>
						<view class="">
							待评论
						</view>
					</view>
					<view class="tab_list" @click="jump('../subuser/mall_order?status=5')">
						<image src="../../static/image/refund2.png" mode="widthFix"></image>
						<view class="">
							退款
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
		<view class="list_bottom">
			<view class="list_test">
				其他服务
			</view>
			<view class="tab_box">
				<view class="tab_list"  @click="jump('../subuser/momey')">
				<!-- <view class="tab_list"> -->
					<image src="../../static/image/wallet.png" mode="widthFix"></image>
					<view class="">
						钱包
					</view>
				</view>
				<view class="tab_list"  @click="jump('../subuser/distribution')">
					<image src="../../static/image/distribution.png" mode="widthFix"></image>
					<view class="">
						分销中心
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/commission')">
					<image src="../../static/image/commission.png" mode="widthFix"></image>
					<view class="">
						佣金
					</view>
				</view>
				<view class="tab_list"  @click="jump('../subuser/user_edition')">
					<image src="../../static/image/editionPass.png" mode="widthFix"></image>
					<view class="">
						版通
					</view>
				</view>
				<view class="tab_list">
					<image src="../../static/image/realName.png" mode="widthFix"></image>
					<view class="">
						实名认证
					</view>
				</view>
				<view class="tab_list">
					<image src="../../static/image/collection2.png" mode="widthFix"></image>
					<view class="">
						收藏
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/address')">
					<image src="../../static/image/address.png" mode="widthFix"></image>
					<view class="">
						收货地址
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/assemble_order')">
					<image src="../../static/image/assemble_1.png" mode="widthFix"></image>
					<view class="">
						拼团订单
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/settled')">
					<image src="../../static/image/assemble_1.png" mode="widthFix"></image>
					<view class="">
						商家入驻
					</view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default{
		data() {
			return {
				style:'',
				data:'',
				nickname:'',
				state:''
			}
		},
		methods:{
			sweep(){
				let that = this
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						console.log(res.result)
						let data = res.result
							data = data.split('?')
						console.log(data[0])
						if(data[0] == that.service.api+'/h5/#/pages/reg/reg'){
							uni.navigateTo({
								url:'../reg/reg?'+data[1]
							})
						}
				    }
				});
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onShow() {
			let that = this
			let data ={}
			if(uni.getStorageSync('token')) data.token = uni.getStorageSync('token')
			uni.request({
				url:this.service.api_root.user.userCenter,
				method:'POST',
				data:data,
				success(res) {
					console.log(res.data.data)
					if(res.data.code == -400){
						that.state = 2	
					}else{
						that.state = 1
						that.data = res.data.data
						that.nickname = res.data.data.nickname
						uni.setStorageSync('nickname',res.data.data.nickname)
						uni.setStorageSync('user',res.data.data)
					}
					
				}
			})
			
			
		},
		onLoad() {
			let that = this
			// uni.getSystemInfo({
			//     success: function (res) {
			// 		that.style = {
			// 			height:res.windowWidth+'px',
			// 			borderRadius:'0px 0px '+res.windowWidth/2+'px '+res.windowWidth/2+'px',
			// 			position:'absolute',
			// 			width: '100%',
			// 			top:'-'+(res.windowWidth/2-80)+'px'
			// 		}
			//     }
			// });
		}
	}
</script>

<style scoped>
	page{
		background: #F1F1F1;
	}
	.content{
		padding-bottom: 20rpx;
	}
	.status_bar{
		background:linear-gradient(90deg,rgba(0,119,245,1),rgba(0,167,250,1));
	}
	.top{
		
		background:linear-gradient(90deg,rgba(0,119,245,1),rgba(0,167,250,1));
	}
	.top .top_test{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
		z-index: 99;
		
		/* position: absolute; */
		/* width: 100%; */
		
	}
	.top .top_test image{
		height: 48rpx;
		width: 48rpx;
		margin-right: 20rpx;
	}
	
	.top .user{
		display: flex;
		
		color: #fff;
		font-size: 28rpx;
		
		padding: 20rpx 0 100rpx 54rpx;
	}
	.top .user .user_left{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.top .user_head{
		height: 130rpx;
		width: 130rpx;
		border-radius: 130rpx;
		margin-right: 26rpx;
	}
	.top .user .user_left .left_top{
		display: flex;
	}
	.top .user .user_left .left_bottom{
		background: #007FE9;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 36rpx;
		width: 106rpx;
		line-height: 36rpx;
		border-radius: 36rpx;
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	.top .user .user_right{
		background: #007FE9;
		margin-left: 16rpx;
		height: 36rpx;
		border-radius: 36rpx;
		width: 190rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
	}
	.top .user .user_right text{
		margin: 0 6rpx;
	}
	.top .user .user_left image{
		width: 24rpx;
		height: 24rpx;
	}
	.top .logint {
		display: flex;
		color: #fff;
		font-size: 28rpx;
		padding: 20rpx 0 100rpx 54rpx;
	}
	.top .logint .logint_one {
		display: flex;
		align-items: center;
	}
	.top .logint .logint_one image{
		width: 24rpx;
		height: 24rpx;
	}
	.semicircle{
		/* height: 320rpx;
		width: 100%;
		background: #000000;
		border-radius: 100%;
		position: relative;
		top: 10rpx; */
	}
	.user_vip{
		display: flex;
		justify-content: space-between;
		position: relative;
		top: -60rpx;
		border-radius: 10rpx;
		margin: 0 20rpx;
		padding: 16rpx 30rpx;
		font-size: 28rpx;
		color: #333333;
		background: #FFFFFF;
	}
	.user_vip .vip_one{
		display: flex;
	}
	.user_vip .vip_one image{
		height: 78rpx;
		width: 76rpx;
		margin-right: 16rpx;
	}
	.user_vip .vip_one view:nth-of-type(2){
		color: #CCCCCC;
		font-size: 24rpx;
	}
	
	.user_vip .vip_two{
		display: flex;
		align-items: center;
		color: #666666;
	}
	.user_vip .vip_two image{
		height: 20rpx;
		width: 20rpx;
	}
	
	.user_top{
		height: 150rpx;
		margin: 0 20rpx;
		position: relative;
		top: -40rpx;
		background: #fff;
		font-size: 28rpx;
		color: #333333;
		border-radius: 10rpx;
	}
	.user_top .user_tab{
		height: 150rpx;
		display: flex;
		align-items: center;
	}
	.user_top .user_tab .tab_list{
		width: 25%;
		text-align: center;
	}
	.user_top image{
		width: 70rpx;
		height: 70rpx;
		
	}
	.user_middle{
		background: #fff;
		margin: 0 20rpx;
		position: relative;
		top: -20rpx;
		border-radius: 10rpx;
		padding:0rpx 30rpx 28rpx 30rpx;
		border-bottom: 1rpx solid #F2F2F2;
	}
	.user_middle .middle_top{
		display: flex;
		justify-content: space-between;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		border-bottom: 2rpx solid #F2F2F2;
		padding: 34rpx 0;
		
	}
	
	.user_middle .middle_top view:last-child{
		display: flex;
		align-items: center;
	}
	.user_middle .middle_top text{
		font-size: 22rpx;
		color: #333;
		margin-right: 24rpx;
	}
	.user_middle .middle_top image{
		width: 28rpx;
		height: 28rpx;
	}
	.user_middle .middle_tab{
		padding-top: 34rpx;
	}
	.user_middle .middle_tab .tab_top{
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 26rpx;
	}
	.tab_box{
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		text-align: center;
		color: #333333;
		
		font-size: 24rpx;
		
	}
	
	.user_middle .middle_tab .tab_box:nth-of-type(2){
		padding-bottom: 26rpx;
		margin-bottom: 34rpx;
		border-bottom: 2rpx solid #F2F2F2;
	}
	 .tab_box image{
		height: 54rpx;
		width: 54rpx;
		margin-bottom: 13rpx;
	}
	 .tab_box .tab_list{
		width: 25%;
	}
	
	.list_bottom{
		background: #fff;
		margin: 0 20rpx;
		border-radius: 10rpx;
		padding: 36rpx 30rpx 10rpx 30rpx;
	}
	.list_bottom .list_test{
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
		padding-bottom: 32rpx;
		margin-bottom: 20rpx;
		border-bottom: 2rpx solid #F2F2F2;
	}
	.list_bottom  .tab_list{
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;	
	}
	button{
		background: #1D9DFF;
		margin-top: 60rpx;
	}
</style>
