<template>
	<view class="content">
		<!--  -->
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="shop" @click="jump('../group_products?id='+goods.id)">
			<view class="pic">
				<image :src="goods.thumb" mode="aspectFill"></image>
			</view>
			<view class="quantity">
				<view class="name">
					{{goods.title}}
				</view>
				<view class="people">
					{{goods.groupnum}}人团
				</view>
				<view class="price">
					<text class="h1">¥{{goods.price}}/{{goods.goodsnum}}件</text>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="group">
			<!--  -->
			<view class="member">
				<view class="member_list" v-for="(item,index) in users"  :key='index'>
					<block v-if="item" >
						<image v-if="item.heads == 1" class="group_comman" src="../../../static/image/threeLayers/group.png" mode="widthFix"></image>
						<image v-if="item.avatar" class="group_comman1" :src="item.avatar" mode="widthFix"></image>
						
					</block>
					<block v-else>
						<image  src="../../../static/image/threeLayers/group01.png" mode="widthFix"></image>
					</block>
					
				</view>
				
			</view>
			<!--  -->
			<block v-if="data.status == 2">
				<view class="prompt">
					组团成功
				</view>
			</block>
			<block v-else>
				<view class="prompt">
					还差<text style="color: #F2221F;">{{data.num}}</text>人组团成功
				</view>
				<view class="countdown" v-if="second ">
					<text v-if="second > 0">剩余{{duration}}</text>
					<text v-else>{{duration}}</text>
				</view>
			</block>
			
		</view>
		<!--  -->
		<view class="notice">
			1下单开团/参团---2邀请好友参团---3人满拼团成功
		</view>
		<!--  -->
		<view class="details">
			<view class="title">
				<view>拼团详情</view>
				<!-- <view>商品详情</view> -->
			</view>
			<view class="list" v-for="(item,index) in order.users" :key='index'>
				<view class="information">
					<image :src="item.avatar" mode="widthFix"></image>
					<text>{{item.nickname}}</text>
				</view>
				<view class="time">
					<text>2019-09-12</text>
					<text>15:28:23 开团</text>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="bootom" v-if="data.endtime != 0 ">
			<view class="h9" @click="jump('../assemble')">
				首页
			</view>
			<view class="h8" v-if="data.pay_status == 1" @click="tips()">
				快邀请好友参团吧
			</view>
			<view class="h8" v-else-if="data.pay_status == 0" @click="jump('./group_order?type=groups&id='+goods.id+'&teamid='+data.teamid)">
				参与拼团
			</view>
			<view class="h8" v-else-if="data.pay_status == 2">
				团已满
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components:{
			returns
		},
		data() {
			return {
				title: '团详情',
				data:'',
				goods:'',
				users:'',
				order:'',
				
				endtime:'',
				id:'',
				duration:'',
				second:'',
				show:true
			}
		},
		methods:{
			tips(){
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角选择分享！',
					showCancel:false,
				    success: function (res) {
				       
				    }
				});
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onLoad(options) {
			this.id = options.id 
		},
		onShow() {
			this.service.entire(this,'get',this.service.api_root.subindex.threeindex.my_group,{
				token:uni.getStorageSync('token'),
				teamid:this.id
			},function(self,res){
				console.log(res)
				self.data = res.data
				self.goods = res.data.goods
				self.order = res.data.order
				let user = JSON.stringify(res.data.order.users)
					user = JSON.parse(user)
				self.users = user
				console.log(user)
				self.users.length = res.data.goods.groupnum
				self.endtime =  res.data.endtime
				let times = new Date().getTime().toString().substr(0,10)
				
				let second  = res.data.endtime - times
				
				self.timer = setInterval(function(){
					second --
					var days = Math.floor(second / 86400);
					var hours = Math.floor((second % 86400) / 3600);
					var minutes = Math.floor(((second % 86400) % 3600) / 60);
					var seconds = Math.floor(((second % 86400) % 3600) % 60);
					var duration = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
					self.duration = duration
					self.second = second
				},1000)
			})
		},
		onHide(){
			clearInterval(this.timer)
		},
		watch:{
			second(news,old){
				if(news < 0){
					
					this.duration = '拼团订单已过期'
					clearInterval(this.timer)
				}
			},
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		background: #F2F2F2;
	}
	.shop{
		/* width: 100%; */
		height: 240rpx;
		padding-left: 5%;
		background: #FFFFFF;
		margin-top: 2rpx;
		display: flex;
		align-items: center;
	}
	.pic{
		width: 170rpx;
		height: 170rpx;
		background: #00BFFF;
		margin-right: 36rpx;
	}
	.pic image{
		width: 170rpx;
		height: 170rpx;
	}
	.quantity{
		height: 170rpx;
	}
	.name{
		color: #333333;
		font-size: 30rpx;
		font-weight: bold;
	}
	.people{
		margin: 10rpx 0;
		color: #FC9429;
		font-size: 30rpx;
	}
	.h1{
		color: #F2221F;
		font-size: 30rpx;
	}
	.group{
		width: 100%;
		height: 450rpx;
		background: #FFFFFF;
		margin-top: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.member{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.member_list,.member_list image{
		width: 88rpx;
		height: 96rpx;
	}
	
	.member_list{
		margin: 10rpx 20rpx;
		position: relative;
	}
	.member_list .group_comman{
		height: 90rpx;
		width: 90rpx;
		position: absolute;
		z-index: 99;
		bottom: -30rpx;
		left: 0;
	}
	.member_list .group_comman1{
		border-radius: 50%;
		top: 0;
		left: 0;
		z-index: 88;
		position: absolute;
	}
	/* .member_list:first-of-type,.member_list:first-of-type image{
		width: 124rpx;
		height: 124rpx;
	} */
	
	.prompt{
		margin: 20rpx 0;
		color: #333333;
		font-size: 24rpx;
	}
	.countdown{
		color: #F2221F;
		font-size: 28rpx;
	}
	.countdown text{
		border-radius: 5rpx;
		padding: 5rpx;
		margin: 0 5rpx;
		background: #F2221F;
		color: #FFFFFF;
	}
	.notice{
		width: 100%;
		height: 104rpx;
		color: #666666;
		font-size: 26rpx;
		background: #FFFFFF;
		margin-top: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.details{
		width: 100%;
		background: #FFFFFF;
		margin-top: 10rpx;
	}
	.title{
		width: 100%;
		height:104rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 4rpx solid #F2F2F2;
	}
	.title view{
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 104rpx;
		color: #333333;
		font-size: 30rpx;
		
	}
	/* .title view:first-of-type{
		height: 94rpx;
		color: #1D9DFF;
		border-bottom: 10rpx solid #1D9DFF;
	} */
	.list{
		width: 90%;
		height: 100rpx;
		margin: 0 auto;
		border-bottom: 4rpx solid #F2F2F2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.information{
		color: #666666;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.time{
		color: #666666;
		font-size: 24rpx;
		
	}
	.time text{
		margin: 0 10rpx;
	}
	.information image{
		width: 72rpx;
		height: 72rpx;
		margin-right: 20rpx;
		border-radius: 50%;
	}
	.bootom{
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.h9{
		width: 30%;
		height: 100%;
		background: #FFFFFF;
		color: #1D9DFF;
		text-align: center;
		line-height: 100rpx;
	}
	.h8{
		width: 70%;
		height: 100%;
		background: #1D9DFF;
		color: #FFFFFF;
		text-align: center;
		line-height: 100rpx;
	}
</style>
