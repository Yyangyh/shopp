<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<share ref="share" :datas='share_arr'></share>
		<view class="top_img">	
			<image :src="data.thumb" mode="scaleToFill"></image>
			<view class="top_operation" :style="{background:'rgba(255,255,255,'+transparency+')'}">
				<image src="../../static/image/returns.png" mode="widthFix" @click="returns()"></image>
				<view class="">
					<!-- <image class="love" src="../../static/image/love.png" mode="widthFix"></image> -->
					<image @click="tips()" class="share" src="../../static/image/share.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="product_price">
			<view class="pr_top">
				{{data.title}}
			</view>
			<view class="price">
				<view class="">
					<text>￥{{data.price}}</text>
					<image src="../../static/image/secondary/team.png" mode=""></image>
					<text>{{data.groupnum}}人成团</text>
				</view>
				<text class="sell">已售{{data.sales}}</text>
			</view>
			<view class="pr_bottom">
				<view class="pr_coupon">
					
					<text>拼团规则</text>
				</view>
				<view class="receive_co">
					<text>邀请好友组团</text>
					<!-- <image src="../../static/image/go.png" mode=""></image> -->
				</view>
			</view>
		</view>
		<!-- <view class="pr_shop">
			<view class="sh_top">
				<image src="../../static/image/portrait1.png" mode="widthFix"></image>
				<text>文旅特色产品</text>
			</view>
			<view class="sh_bottom">
				<text>进店逛逛</text>
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view> -->
		
		<!-- <view class="user_comment">
			<view class="user_top">
				用户评论
			</view>
			<view class="user">
				<image class="user_img" src="../../static/image/portrait.png" mode="widthFix"></image>
				<view class="user_test">
					<view >小小纹~</view>
					<text>2019-05-01</text>
				</view>
				<view class="user_star">
					<image src="../../static/image/star.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="com_content">
				<view class="content_test">
					<view class="">
						这个评论插件叫AntSay，简单三步即可在自己的网站里嵌入，超轻。
					</view>
				</view>
				<view class="content_img">
					<image src="../../static/image/greenImg.png" mode=""></image>
					<image src="../../static/image/greenImg.png" mode=""></image>
					<image src="../../static/image/greenImg.png" mode=""></image>
				</view>
				<view class="more">
					查看更多评论
				</view>
			</view>
		</view> -->
		
		<view class="pro_img">
			<view class="img_test">
				产品介绍
			</view>
			<rich-text  class="test" :nodes="data.content"></rich-text>
			<!-- <image src="../../static/image/product4.png" mode="widthFix"></image> -->
		</view>
		
		<!-- <view class="recommend">
			<view class="recommend_test">
				猜你喜欢
			</view>
			<view class="spot">
				<view class="sp_list">
					<image src="../../static/image/duck1.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥100</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck2.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck1.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥100</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list">
					<image src="../../static/image/duck2.png" mode=""></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
			</view>
		</view> -->
		
		<view class="bottom_tab">
			<!-- <view class="tab_list">
				<image src="../../static/image/shops.png" mode="widthFix"></image>
				<view class="">
					店铺
				</view>
			</view> -->
			<!-- <view class="tab_list" @click="jump('../threeLayers/shoppingCart')">
				<image src="../../static/image/shopping.png" mode="widthFix"></image>
				<view class="">
					购物车
				</view>
			</view> -->
			<!-- <view class="tab_list">
				<image src="../../static/image/collection.png" mode="widthFix"></image>
				<view class="">
					收藏
				</view>
			</view> -->
			<view class="tab_list tab_right">
				<view class="single" @click="purchase('single')">
					<view class="">
						￥{{data.groupsprice}}
					</view>
					<view class="">
						单独购买
					</view>
				</view>
				<view class="group" @click="purchase('groups')">
					<view class="">
						￥{{data.price}}
					</view>
					<view class="">
						参与拼团
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import share from'../common/share.vue'
	export default {
		components:{
			share
		},
		data() {
			return {
				show: 0,
				data:'',
				id:'',
				transparency:0,
				share_arr:{}
			}
		},
		onPageScroll(e){
			// console.log(e)
			if(e.scrollTop >= 150){
				this.transparency  = 1
			}else{
				this.transparency  = 0
			}
			
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			tips(){ //分享
				// #ifdef H5
				
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角选择分享！',
					showCancel:false,
				    success: function (res) {
				       
				    }
				});
				
				// #endif
				// #ifdef APP-PLUS
				this.$refs.share.share();
				// #endif
			},
			purchase(data){
				if(data == 'single'){
					uni.navigateTo({
						url:'threeindex/group_order?type='+data+'&id='+this.id
					})
				}else{
					uni.navigateTo({
						url:'threeindex/operation?type='+data+'&id='+this.id
					})
				}
				
			}
		},
		onLoad(options) {
			
			this.share_arr.Url = 'http://wx.huanqiutongmall.com/h5/#/pages/subindex/group_products?id='+options.id
			this.id = options.id
			
			this.service.entire(this,'get',this.service.api_root.subindex.grou_Detail,{id:options.id},function(self,res){
				console.log(res)
				self.data = res.data.goods
				
				self.share_arr.Title = self.data.title//分享
				self.share_arr.ImageUrl = self.data.thumb//分享
				
				// #ifdef H5
				if (self.$wechat && self.$wechat.isWechat()) {  //H5微信公众号分享
					 self.$wechat.share(self.share_arr);
				}
				// #endif
				
			})
		}
	}
</script>

<style scoped>
	.content{
		background: #F1F1F1;
		padding-bottom: 120rpx;
		padding-top: 0;
	}
	.top_img{
		width: 100%;
		height: 360rpx;
		position: relative;
	}
	.top_img image{
		width: 100%;
		height: 100%;
		
	}
	.top_img .top_operation{
		width: 100%;
		/* position: absolute; */
		z-index: 99;
		top: 0;
		height: 60rpx;
		padding: 20rpx 0;
		display: flex;
		position: fixed;
		width: 100%;
		top:var(--status-bar-height);
		left: 0;
		/* flex-direction: column; */
		/* flex-wrap: wrap; */
		justify-content: space-between;
		align-items: center;
		/* margin: 0 20rpx; */
	}
	.top_img .top_operation image{
		height: 50rpx;
		width: 50rpx;
	}
	.top_img .top_operation image:nth-of-type(1){
		margin-left: 30rpx;
	}
	.top_img .top_operation .love{
		margin-right: 20rpx;
	}
	.top_img .top_operation .share{
		margin-right: 30rpx;
	}
	.product_price{
		background: #fff;
		font-size: 32rpx;
		border-top: 2rpx solid #F1F1F1;
		margin-bottom: 20rpx;
	}
	.product_price .pr_top{
		/* font-weight: bold; */
		font-size: 32rpx;
		padding: 20rpx;
		
	}
	.product_price .price{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		border-bottom: 2rpx solid #F4F4F4;
		color: #999;
		font-size: 30rpx;
		align-items: center;
	}
	.product_price .price view{
		display: flex;
		align-items: center;
	}
	.product_price .price image{
		height: 34rpx;
		width: 34rpx;
		margin: 0 20rpx 0 30rpx;
	}
	.product_price .price view text:nth-of-type(1){
		font-weight: bold;
		color: #FF431D;
		font-size: 36rpx;
	}
	.product_price .price view text:nth-of-type(2){
		font-size: 28rpx;
	}
	.product_price .price .sell{
		font-size: 24rpx;
	}
	.product_price .pr_bottom {
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
	}
	.product_price .pr_bottom image{
		width: 32rpx;
		height: 32rpx;
	}
	.product_price .pr_bottom .pr_coupon{
		display: flex;
		align-items: center;
		color: #333333;
		font-size: 30rpx;
		
	}
	.product_price .pr_bottom .pr_coupon image{
		margin-right: 20rpx;
	}
	.product_price .pr_bottom .receive_co{
		display: flex;
		align-items: center;
		text-align: right;
		color: #999;
		font-size: 24rpx;
	}
	.pr_shop{
		background: #fff;
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		line-height: 120rpx;
		padding: 0 20rpx;
	}
	.pr_shop .sh_top{
		display: flex;
		align-items: center;
		color: #333333;
		font-size: 32rpx;
		font-weight: 400;
	}
	.pr_shop .sh_top image{
		height: 90rpx;
		width: 90rpx;
		margin-right: 20rpx;
	}
	.pr_shop .sh_bottom {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #999;
		padding-right: 2%;
	}
	.pr_shop .sh_bottom image{
		height: 32rpx;
		width: 32rpx;
	}
	
	.user_comment {
		background: #fff;
		margin-top: 20rpx;
		padding: 20rpx 30rpx;
	}
	
	.user_comment .user_top {
		font-weight: bold;
		font-size: 28rpx;
	
	}
	
	.user_comment .user {
		display: flex;
		align-items: center;
		margin: 20rpx 0;
	}
	
	.user_comment .user .user_img {
		width: 90rpx;
		height: 90rpx;
	}
	
	.user_comment .user .user_test {
		margin: 0 20rpx;
		font-size: 32rpx;
	}
	
	.user_comment .user .user_test view {
		font-weight: bold;
		color: #333333;
		font-size: 28rpx;
	}
	
	.user_comment .user .user_test text {
		font-size: 24rpx;
		color: #999999;
		
	}
	
	.user_comment .user .user_star {
		align-self: flex-start;
	}
	
	.user_comment .user .user_star image {
		height: 26rpx;
		width: 26rpx;
	}
	
	.user_comment .com_content .content_test view {
		font-size: 24rpx;
		color: #666666;
	}
	
	.user_comment .com_content .content_img image {
		height: 120rpx;
		width: 120rpx;
		margin-right: 20rpx;
		margin-top: 30rpx;
	}
	
	.user_comment .com_content .more {
		font-size: 32rpx;
		color: #666666;
		margin: 20rpx 0;
	}
	.pro_img{
		
	}
	.pro_img .img_test{
		text-align: center;
		padding: 30rpx;
		font-size: 32rpx;
	}
	.pro_img image{
		width: 100%;
	}
	.recommend .recommend_test{
		font-size: 32rpx;
		font-weight: bold;
		padding: 30rpx 20rpx;
		background: #fff;
		margin-top: 30rpx;
	}
	.spot{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
		background: #fff;
	}
	.spot .sp_list{
		width: 45%;
		height: 400rpx;
		background: #fff;
		box-shadow: 0px 0px 4px #eee;
		margin-bottom: 30rpx;
		border-top-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
	}
	.spot .sp_list image{
		width: 100%;
		height: 200rpx;
	}
	.ticket{
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	.address{
		color: #333;
		font-size: 24rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}
	.tips{
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}
	.spot .sp_list .bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	.spot .sp_list .bottom .price{
		color: #FF431D;
	}
	
	.spot .sp_list .bottom .data{
		color: #999999;
		font-size: 26rpx;
	}
	.bottom_tab{
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		padding: 20rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
	}
	.bottom_tab .tab_list{
		text-align: center;
		color: #999999;
	}
	.bottom_tab .tab_list image{
		height: 44rpx;
		width: 44rpx;
		
	}
	
	.bottom_tab .tab_right{
		font-size: 32rpx;
		display: flex;
		width: 100%;
	}
	.bottom_tab .tab_right .single{
		background: #1D9DFF;
		color: #fff;
		font-size: 24rpx;
		width: 50%;
		height: 80rpx;
		border-bottom-left-radius: 40rpx;
		border-top-left-radius: 40rpx;
	}
	.bottom_tab .tab_right .single view:nth-of-type(1){
		font-size: 30rpx;
	}
	.bottom_tab .tab_right .group{
		background: #1D74FF;
		color: #fff;
		font-size: 24rpx;
		width: 50%;
		height: 80rpx;
		border-bottom-right-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}
	.bottom_tab .tab_right .group view:nth-of-type(1){
		font-size: 30rpx;
	}
	.bottom_tab .tab_right text{
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 30rpx;
		font-size: 30rpx;
	}
	.bottom_tab .tab_right text:nth-of-type(1){
		background: #1D9DFF;
		border-bottom-left-radius: 40rpx;
		border-top-left-radius: 40rpx;
	}
	.bottom_tab .tab_right text:nth-of-type(2){
		background: #1D74FF;
		border-bottom-right-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}
</style>
