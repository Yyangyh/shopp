<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="top_img">
			<image src="../../static/image/scenery.jpg" mode="scaleToFill"></image>
			<view class="top_operation">
				<image src="../../static/image/returns.png" mode="widthFix" @click="returns()"></image>
				<view class="">
					<image class="love" src="../../static/image/love.png" mode="widthFix"></image>
					<image class="share" src="../../static/image/share.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="scenery">
			<view class="sc_top" @click="jump('../threeLayers/policy_facilities')">
				<view class="top_test">
					广州长隆野生动物世界
				</view>
				<view class="top_test1">
					与你共享快乐时光
				</view>
				<view class="top_test2">
					<text>5A景区</text>
					<text>动物园</text>
					<text>其他动物园</text>
				</view>
			</view>
			<view class="score">
				<text class="score_test">
					5.0评分
				</text>
				<text class="comment">
					<text>49107条评论</text>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</text>
			</view>
			
			<view class="recommend">
				<view class="recommend_test">
					特色产品推荐<text>(6)</text>
				</view>
				<view class="recommend_img">
					<view class="re_list">
						<image src="../../static/image/koala.png" mode=""></image>
						<view class="">
							考拉园
						</view>
					</view>
					<view class="re_list">
						<image src="../../static/image/koala.png" mode=""></image>
						<view class="">
							考拉园
						</view>
					</view>
					<view class="re_list">
						<image src="../../static/image/koala.png" mode=""></image>
						<view class="">
							考拉园
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="details">
			<view class="sc_details">
				<view class="de_top">
					<image src="../../static/image/time.png" mode="widthFix"></image>
					<text>开放中，18:00闭园 （周一~周五09:30~18:00开放 周六~周日09:30...</text>
					<image class="go" src="../../static/image/go.png" mode="widthFix"></image>
				</view>
				<view class="de_bottom">
					<view class="de_list">
						<image src="../../static/image/wifi.png" mode="widthFix"></image>
						<text>WIFI</text>
					</view>
					<view class="de_list">
						<image src="../../static/image/parking.png" mode="widthFix"></image>
						<text>停车场</text>
					</view>
					<view class="de_list">
						<image src="../../static/image/store.png" mode="widthFix"></image>
						<text>便利店</text>
					</view>
				</view>
			</view>
			<view class="coordinate">
				<view class="co_top">
					<image src="../../static/image/coordinate.png" mode="widthFix"></image>
					<text>广东省广州市番禺区迎宾路长隆旅游度假村旁</text>
				</view>
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
			<view class="coordinate">
				<view class="co_top">
					<image src="../../static/image/coupon.png" mode="widthFix"></image>
					<text>优惠券</text>
				</view>
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view>
		
		
		<view class="scenery_top">
			<view class=""  @click="show = 0" :class="{show: show== 0}">
				门票
			</view>
			<view class=""  @click="show = 1" :class="{show: show== 1}">
				一日游
			</view>
		</view >
		<view class='scenery_bottom'>
			<view class="scenery_ticket"  v-show="show == 0">
				<view class="ticket">
					<view class="sc_common">
						<image src="../../static/image/ticket1.png" mode="widthFix"></image>
						<text>门票</text>
					</view>
					<view class="ti_common">
						<view class="com_left">
							<view class="left_test1">
								澳门大三巴牌坊+澳门威尼斯度假村
								+永利皇宫观光缆车一日游【新增...
							</view>
							<view class="left_test2">
								<image src="../../static/image/selection.png" mode="widthFix"></image>
								<text>16:00前随买随用</text>
							</view>
							<view class="left_test3">
								条件退
							</view>
							<view class="left_test4">
								<text>购买须知</text>
								<image src="../../static/image/go.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="com_right">
							<view class="ri_test1">
								￥<text>580</text>
							</view>
							<view class="ri_test2" @click="jump('/pages/threeLayers/fill_in')">
								立即购买
							</view>
						</view>
					</view>
					<view class="ti_common">
						<view class="com_left">
							<view class="left_test1">
								澳门大三巴牌坊+澳门威尼斯度假村
								+永利皇宫观光缆车一日游【新增...
							</view>
							<view class="left_test2">
								<image src="../../static/image/selection.png" mode="widthFix"></image>
								<text>16:00前随买随用</text>
							</view>
							<view class="left_test3">
								条件退
							</view>
							<view class="left_test4">
								<text>购买须知</text>
								<image src="../../static/image/go.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="com_right">
							<view class="ri_test1">
								￥<text>580</text>
							</view>
							<view class="ri_test2">
								立即购买
							</view>
						</view>
					</view>
					<view class="ti_common">
						<view class="com_left">
							<view class="left_test1">
								澳门大三巴牌坊+澳门威尼斯度假村
								+永利皇宫观光缆车一日游【新增...
							</view>
							<view class="left_test2">
								<image src="../../static/image/selection.png" mode="widthFix"></image>
								<text>16:00前随买随用</text>
							</view>
							<view class="left_test3">
								条件退
							</view>
							<view class="left_test4">
								<text>购买须知</text>
								<image src="../../static/image/go.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="com_right">
							<view class="ri_test1">
								￥<text>580</text>
							</view>
							<view class="ri_test2">
								立即购买
							</view>
						</view>
					</view>
					<view class="sc_common">
						<image src="../../static/image/ticket1.png" mode="widthFix"></image>
						<text>一日游</text>
					</view>
					<view class="ti_common">
						<view class="com_left">
							<view class="left_test1">
								澳门大三巴牌坊+澳门威尼斯度假村
								+永利皇宫观光缆车一日游【新增...
							</view>
							<view class="left_test2">
								<image src="../../static/image/selection.png" mode="widthFix"></image>
								<text>16:00前随买随用</text>
							</view>
							<view class="left_test3">
								条件退
							</view>
							<view class="left_test4">
								<text>购买须知</text>
								<image src="../../static/image/go.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="com_right">
							<view class="ri_test1">
								￥<text>580</text>
							</view>
							<view class="ri_test2">
								立即购买
							</view>
						</view>
					</view>
					<view class="ti_common">
						<view class="com_left">
							<view class="left_test1">
								澳门大三巴牌坊+澳门威尼斯度假村
								+永利皇宫观光缆车一日游【新增...
							</view>
							<view class="left_test2">
								<image src="../../static/image/selection.png" mode="widthFix"></image>
								<text>16:00前随买随用</text>
							</view>
							<view class="left_test3">
								条件退
							</view>
							<view class="left_test4">
								<text>购买须知</text>
								<image src="../../static/image/go.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="com_right">
							<view class="ri_test1">
								￥<text>580</text>
							</view>
							<view class="ri_test2">
								立即购买
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="scenery_data"  v-show="show == 1">
				345
			</view>
		</view>
		
		<view class="user_comment">
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
					<!-- <view class="">
						1.获取APP ID
					</view>
					<view class="">
						2.一行代码引入组件
					</view>
					<view class="">
						3.配置几个参数赶紧使用吧，地址：http:/say.alipay.net/
					</view> -->
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
		</view>
		
		
		
		<!-- 购买须知 -->
		
		<view class="purchase">
			<view class="pur_box">
				<view class="pur_test">
					澳门大三巴牌坊+澳门威尼斯度假村+永利皇宫观
					光缆车一日游【新增...
				</view>
				<view class="">
					<view class="">
						预定说明
					</view>
					<view class="">
						<text>预定时间：</text>
						<text>可订6月17日</text>
						<view class="">
							需要在游玩当天的16:00前预定
						</view>
					</view>
					<view class="">
						<text>有效期：</text>
						<text>游玩日期当天有效</text>
						
					</view>
					<view class="">
						<text>限购政策：</text>
						<text>每笔订单最多购买20份</text>
					</view>
				</view>
				
				<view class="">
					<view class="">
						入园须知
					</view>
					<view class="">
						<text>入园方式：</text>
						<text>需提前换票入园</text>
					</view>
					<view class="">
						<view class="">
							① 凭商家确认短信、手机号、姓名到景区门口自助取票机或
						</view>
						<view class="">
							① 凭商家确认短信、手机号、姓名到景区门口自助取票机或
						</view>
						<view class="">
							① 凭商家确认短信、手机号、姓名到景区门口自助取票机或
						</view>
					</view>
				</view>
				<view class="">
					<view class="">
						<text>价格</text>
						<text>￥580</text>
					</view>
					<view class="">
						<image src="../../static/image/loves.png" mode="widthFix"></image>
						<text>立即购买</text>
					</view>
				</view>
			</view>
		</view>
		<view class="mask">
			
		</view>
		<view class="pop-ups">
			<view class="h1">
				<text>澳门大三巴牌坊+澳门威尼斯度假村+永利皇宫观 光缆车一日游【新增...</text>
			</view>
			<view class="description">
				<view class="h2">预定说明</view>
				<view class="h3">
					预定时间：
					<view class="cc">
						<text class="point">
							可订6月17日
						</text>
						<text class="">
							需要在游玩当天的16:00前预定
						</text>
					</view>
				</view>
				<view class="h3">
					
				</view>
			</view>
			<view class="regulation">
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				show: 0
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
			}
			
		}
	}
</script>

<style scoped>
	.content{
		background: #F1F1F1;
		
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
		position: absolute;
		z-index: 99;
		top: 0;
		height: 60rpx;
		padding: 20rpx 0;
		display: flex;
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
	.scenery{
		height: 560rpx;
		font-size: 28rpx;
		background: #fff;
		width: 94%;
		position: relative;
		top: -50rpx;
		left: 3%;
		border-radius: 20rpx;
		overflow: hidden;
		
	}
	.scenery .sc_top .top_test{
		font-weight: bold; 
		    font-size: 32rpx;
		    /* margin: 10px; */
		    /* margin: 11px 17px; */
		    margin: 30rpx 20rpx 12rpx 36rpx;
	}
	.scenery .sc_top .top_test1{
		font-size: 24rpx;
		    color: #666666;
		    padding-bottom: 12rpx;
		    padding-left: 36rpx;
		
	}
	.scenery .sc_top .top_test2{
		font-size: 24rpx;
		color: #00D3B3;
		padding-bottom: 20rpx;
		
		padding-left: 38rpx;
		border-bottom: 1rpx solid #F4F4F4;
	}
	.scenery .sc_top .top_test2 text{
		border-radius: 5rpx;
		display: inline-block;
		padding: 0 5rpx;
		border: 1rpx solid #00D3B3;
		margin-right: 20rpx;
		text-align: center;
		height: 36rpx;
		line-height: 36rpx;
	}
	.scenery .score {
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid #F4F4F4;
		padding: 0 20rpx;
	}
	.scenery .score .score_test{
		width: 100%;
		    color: #1D9DFF;
		    /* font-weight: bold; */
		    padding: 30rpx 16rpx;
	}
	.scenery .comment{
		color: #999999;
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}
	.scenery .comment image{
		width: 24rpx;
		height: 24rpx;
	}
	.scenery .recommend{
		padding: 0 34rpx;
	}
	.scenery .recommend .recommend_test{
		font-weight: bold;
		font-size: 28rpx;
		margin: 20rpx 0;
	}
	.scenery .recommend .recommend_test text{
		font-weight: 100;
		color: #999;
	}
	.scenery .recommend .recommend_img{
		display: flex;
		justify-content: flex-start;
		color: #333333;
	}
	.scenery .recommend .recommend_img .re_list{
		width: 18%;
		margin-right: 20rpx;
		height: 120rpx;
	}
	.scenery .recommend .recommend_img .re_list image{
		height: 100%;
		width: 100%;
	}
	.scenery .recommend .recommend_img .re_list view{
		text-align: center;
		font-size: 24rpx;
	}
	.details{
		background: #fff;
		color: #666666;
		padding-top: 20rpx;
		font-size: 24rpx;
	}
	.details .sc_details{
		border-bottom: 2rpx solid #F4F4F4;
	}
	.details .sc_details .de_top image{
		height: 40rpx;
		width: 40rpx;
	}
	.details .sc_details .de_top image:nth-of-type(1){
		margin-right: 10rpx;
		height: 46rpx;
		width: 46rpx;
	}
	.details .sc_details .de_top image:nth-of-type(2){
		height: 36rpx;
		width: 36rpx;
	}
	.details .sc_details .de_top{
		display: flex;
		font-size: 24rpx;
		align-items: center;
		margin: 0 4%;
		/* padding: 0 38rpx; */
	}
	.details .sc_details .de_top text{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	
	.details .sc_details .de_bottom image{
		height: 32rpx;
		width: 32rpx;
		margin-right: 5rpx;
	}
	.details .sc_details .de_bottom{
		font-size: 24rpx;
		display: flex;
		margin:10rpx 40rpx;
		align-items: center;
	}
	.details .sc_details .de_bottom .de_list{
		margin-right: 20rpx;
	}
	.coordinate{
		display: flex;
		font-size: 24rpx;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 4%;
		border-bottom: 2rpx solid #F4F4F4;
	}
	.coordinate:nth-of-type(3){
		border: none;
	}
	.coordinate .co_top{
		display: flex;
		align-items: center;
	}
	.co_top image{
		margin-right: 10rpx;
	}
	.coordinate image{
		height: 32rpx;
		width: 32rpx;
		/* margin-right: 10rpx; */
	}
	.show{
		border-bottom: 2px solid #02A7F0;
	}
	.scenery_top{
		background: #FFFFFF;
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		padding: 0 4%;
		margin-top: 20rpx;
		font-size: 32rpx;
		border-bottom: 2rpx solid #F4F4F4;
	}
	.scenery_top view{
		width: 160rpx;
		text-align: center;
	}
	.scenery_bottom{
		background: #fff;
	}
	.scenery_bottom .scenery_ticket .ticket{
		
	}
	.scenery_bottom .scenery_ticket .ticket .sc_common{
		display: flex;
		align-items: center;
		padding: 20rpx 4%;
		
	}
	.scenery_bottom .scenery_ticket .ticket .sc_common image{
		height: 32rpx;
		width: 32rpx;
		margin-right: 10rpx;
	}
	.scenery_bottom .scenery_ticket .ticket .sc_common text{
		color: #1D9DFF;
		font-weight: bold;
		font-size: 32rpx;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common{
		display: flex;
		height: 100%;
		padding: 30rpx 4%;
		border-bottom: 2rpx solid #F4F4F4;
		height: 230rpx;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left{
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test1{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 26rpx;
		color: #333333;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test2{
		font-size: 26rpx;
		color: #999999;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test2 image{
		width: 18rpx;
		height: 18rpx;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test3{
		color: #00D3B3;
		border: 1rpx solid #00D3B3;
		display: inline;
		width: 75rpx;
		font-size: 22rpx;
		border-radius: 5rpx;
		padding: 5rpx;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test4{
		display: flex;
		align-items: center;	
		font-size: 24rpx;
		color: #999999;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test4 image{
		height: 32rpx;
		width: 32rpx;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_right{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_right .ri_test1{
		color: #FF431D;
		text-align: center;
		margin-bottom: 10rpx;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_right .ri_test1 text{
		font-size: 40rpx;
	}
	.scenery_bottom .scenery_ticket .ticket .ti_common .com_right .ri_test2{
		background: #007AFF;
		color: #fff;
		padding: 10rpx 20rpx;
		font-size: 28rpx;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 50rpx;
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
	.purchase{
		position: fixed;
		background: rgba(0,0,0,.3);
		bottom: 0;
		height: 100%;
		width: 100%;
		display: none;
	}
	.purchase .pur_box{
		position: absolute;
		background: #fff;
		bottom: 0;
		height: 600rpx;
		width: 100%;
	}
	.mask{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	.pop-ups{
		width: 100%;
		height: 848rpx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		z-index: 101;
	}
	.h1{
		width: 100%;
		box-sizing: border-box;
		padding: 36rpx 54rpx 50rpx 14rpx;
		color: #333333;
		line-clamp: 2;
		word-wrap: break-word;
		text-overflow: ellipsis;
		font-size: 32rpx;
		font-weight: bold;
	}
	.description{
		width: 100%;
		box-sizing: border-box;
		padding: 0 16rpx;
	}
	.h2{
		color: #333333;
		font-size: 26rpx;
	}
	.h2:first-of-type{
		display: flex;
		align-items: center;
		padding-left: 14rpx;
		border-left: 4rpx solid #1F9EFF;
	}
	.h3{
		color: #333333;
		font-size: 24rpx;
		color-rendering: ;
		padding-left: 18rpx;
		padding-top: 36rpx;
	}
	.h3:first-of-type{
		display: flex;
		justify-content: center;
	}
	.cc{
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
	}
	.point{
		padding: 0 16rpx;
		font-size: 24rpx;
		background: linear-gradient(top,#FFAA1C,#FF8402);
	}
	
</style>
