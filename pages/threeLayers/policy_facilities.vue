<template>
		<view class="content">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<view class="top">
				<image src="../../static/image/return.png" mode="widthFix" @click="returns()"></image>
				<text>广州长隆野生动物世界</text>
				<text></text>
			</view>
			<view class="tabbar">
				<text class="right" :class="{show:show == 0}" @click="show = 0">政策设施</text>
				<text class="center" :class="{show:show == 1}" @click="show = 1">特色玩法</text>
				<text class="left" :class="{show:show == 2}" @click="show = 2">游玩贴士</text>
			</view>
			<view class="policyFacilities" v-show="show == 0">
				<view class="box">
					<text class="h1">开放时间</text>
					<view class="box-content">
						<view class="day">周一 ~ 周五</view>
						<view class="time">09:30~18:00开放</view>
						<view class="day">周六 ~ 周日</view>
						<view class="time">09:30~18:00开放</view>
					</view>
				</view>
				<view class="box">
					<text class="h1">入园提示</text>
					<view class="box-content">
						<view class="prompt">平日全票250元/人，节假日票价280元/人。</view>
						<view class="prompt">儿童票价平日175元，节假日210元/人。</view>
					</view>
				</view>
				<view class="box">
					<text class="h1">特惠政策</text>
					<view class="box-content">
						<view class="prompt">身高1.0米至1.5米以下儿童，或65岁以上的长者先身份证验票入园（马戏门票及另有规定的票类不适用）</view>
					</view>
				</view>
				<view class="box">
					<text class="h1">小贴士</text>
					<view class="box-content">
						<view class="prompt">长隆野生动物世界自驾车平日票：</view>
						<view class="prompt">1）自驾车游览区只接受20座及以下小型车辆入内自驾车参观，自驾车票为进入自驾区时所须车票，车内游客须另外购买园区门票；</view>
						<view class="prompt"> 2）自驾车辆若发生交通事故，我园将按照交通法规的相关条例协调解决，不对交通事故造成的任何损坏负责</view>
						<view class="prompt"> 3）自驾车游览结束后，请将车辆直接停放在我园的停车场，然后乘客和司机再凭门票进入步行区游览。</view>
						<view class="prompt"> 4）园区内不得带食物</view>
					</view>
				</view>
				<!-- 服务设施 -->
				<view class="box">
					<text class="h1">服务设施</text>
					<view class="box-content" id="service">
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/WiFi.png" mode="aspectFit"></image>
							</view>
							<text>WIFI</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/parking_lot.png" mode="aspectFit"></image>
							</view>
							<text>停车场</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/convenience.png" mode="aspectFit"></image>
							</view>
							<text>便利店</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/charging.png" mode="aspectFit"></image>
							</view>
							<text>手机充电</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/luggage.png" mode="aspectFit"></image>
							</view>
							<text>行李寄存</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/map.png" mode="aspectFit"></image>
							</view>
							<text>景点地图</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/traffic.png" mode="aspectFit"></image>
							</view>
							<text>园内交通</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/pram.png" mode="aspectFit"></image>
							</view>
							<text>婴儿车租赁</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/wheelchair.png" mode="aspectFit"></image>
							</view>
							<text>轮椅租赁</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/toilet.png" mode="aspectFit"></image>
							</view>
							<text>卫生间</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/smoking.png" mode="aspectFit"></image>
							</view>
							<text>吸烟区</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/restaurant.png" mode="aspectFit"></image>
							</view>
							<text>餐厅</text>
						</view>
						<view class="icon">
							<view class="image">
								<image src="../../static/image/threeLayers/store.png" mode="aspectFit"></image>
							</view>
							<text>纪念品商店</text>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallwifi.png" mode="widthFix"></image>
							WiFi
						</text>
						<view class="write-content">
							<view class="prompt">用户名：chimelong-wifi</view>
							<view class="prompt">密码：手机短信验证</view>
							<view class="prompt">覆盖区域：整个园区</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallParking.png" mode="widthFix"></image>
							停车场
						</text>
						<view class="write-content">
							<view class="day">长隆野生动物世界停车场</view>
							<view class="prompt" style="margin-top: 10rpx;">名称：长隆野生动物世界停车场 </view>
							<view class="prompt">参考价格：￥20/次</view>
							<view class="prompt">地址：广东省广州市番禺区大石镇礼村105国道广州长隆野生动物</view>
							<view class="prompt">库位：1000</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallStore.png" mode="widthFix"></image>
							便利店
						</text>
						<view class="write-content">
							<view class="prompt">景区设有便利店，具体指引以现场为准</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallPhone.png" mode="widthFix"></image>
							手机充电
						</text>
						<view class="write-content">
							<view class="prompt">可前往现场客服中心寻求帮助，或者前往园区餐厅、商场等场所查看是否有街电及借充电宝机器，具体以现场指引为准</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallluggage.png" mode="widthFix"></image>
							行李寄存
						</text>
						<view class="write-content">
							<view class="prompt">南门客服驿站、正门入口处（园外）提供行李寄存服务，工作时间同园区开放时间，宠物不能寄存。</view>
							<view class="prompt">大件行李；价格：30元/件/天，尺寸规格：大于26寸（含）行李箱（67cm*45cm*28cm）</view>
							<view class="prompt">小件行李：价格：20元/件/天，尺寸规格：26寸规格以下的行李箱、普通包裹及背包等。</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallspot.png" mode="widthFix"></image>
							景区地图
						</text>
						<view class="write-content">
							<view class="prompt">长隆野生动物世界大门入口处可领取免费景区地图，包含景区内所有演出时间和各个服务设置所在地。您也可以在景区官网查看并下载电子地图。</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smalltraffic.png" mode="widthFix"></image>
							园区交通
						</text>
						<view class="write-content">
							<view class="prompt">缆车：景区内天鹅湖站-—非洲草原站-一熊猫乐园站，时间10：30-闭园前1小时，免费；</view>
							<view class="prompt">小火车；运行于景区乘车游览区，时间09：30-闭园前1.5小时，免费；</view>
							<view class="prompt">免费穿梭巴士1：长隆地铁广场——长隆野生动物世界南门——熊猫酒店（20：00后停开）——长隆国际大马戏（欢乐世界北门）——长隆酒店——长隆野生动物世界南门（19：30后停开）——长隆地铁广场；时间08：50-19：30（每10分钟一班车）；19：40-22：00（每15分钟一班车）（全年）</view>
						</view>
						<view class="prompt">免费穿梭巴士2：长隆野生动物世界至长隆飞鸟乐园，行驶时间：9：30-17：30；发车间隔：30分钟。</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallcarriage.png" mode="widthFix"></image>
							婴儿车租赁
						</text>
						<view class="write-content">
							<view class="prompt">1、租赁点（9个）：南门验票口、4D商场、狸猩士多、细尾蒙商场、白虎园入口、园内客服中心（儿童天地）、天鹅湖租车点（天鹅湖广场）、北门客服中心。</view>
							<view class="prompt">2、退车点（2个）；南门验票口、北门客服中心</view>
							<view class="prompt">3、儿童标准：4岁以下，体重40斤以下；（具体以现场操作为准）。 租赁时间：9：30-18：00（周一周五），9：30-18：30（周六-周日）</view>
							<view class="prompt">4、租赁价格：平日：100元/次，节假日120元/次，押金200元，只收现金。如价格变动，以景区现场价格为准</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallwheelchair.png" mode="widthFix"></image>
							轮椅租赁
						</text>
						<view class="write-content">
							<view class="prompt">轮椅使用服务：押金200元，租金50元/次。（备注：只限园区内使用）如价格变动，以景区现场价格为准</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smalltoilet.png" mode="widthFix"></image>
							卫生间
						</text>
						<view class="write-content">
							<view class="prompt">景区内设有卫生间，在景区入口等地设置有明显标志牌</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallsmoke.png" mode="widthFix"></image>
							吸烟区
						</text>
						<view class="write-content">
							<view class="prompt">长隆野生动物世界设有多个吸烟区，具体位置可在景区官网上查看或可根据景区导览进行选择。</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="../../static/image/threeLayers/smallRestaurant.png" mode="widthFix"></image>
							餐厅
						</text>
						<view class="write-content">
							<view class="prompt">长隆野生动物世界内设有多个餐厅，分别在各个园区内并标有醒目的指示牌。青龙餐厅；金蛇秘境；</view>
							<view class="prompt">熊猫餐厅：熊猫乐园； 熊猫亲子餐厅：熊猫村；</view>
							<view class="prompt">港式茶餐厅：4D影院旁； 亚洲美食：空中缆车萌萌站出入口；</view>
							<view class="prompt">天鹅美食：天鹅湖广场； 雨林美食：雨林仙踪；</view>
							<view class="prompt">金虎食街：百虎山； 考拉食街：考拉馆；</view>
							<view class="prompt">非洲餐厅：非洲森林； 竹林餐厅：动物幼儿园旁；</view>
							<view class="prompt">飞禽美食：步行区； 鱿鱼先生；告龙山出口；</view>
							<view class="prompt">鹦哥亭：鹦哥广场；驾鸯情语：天鹅湖旁；</view>
							<view class="prompt">金猴美食：金猴王国； 长颈鹿美食：长颈鹿广场；</view>
							<view class="prompt"> 萌帅酷美食广场：熊猫乐园站旁。</view>
						</view>
					</view>
					<view class="write">
						<text class="h2">
							<image src="" mode="widthFix"></image>
							纪念品商店
						</text>
						<view class="write-content">
							<view class="prompt">长隆野生动物世界内设有纪念品商店，可在游园地图上查看具体位置。</view>
						</view>
					</view>
				</view>
				<!-- 分界线 -->
				<view class="box">
					<view class="bgc">
						
					</view>
				</view>
				<!-- 特色玩法 -->
				<view class="box">
					<text class="h1">特色玩法</text>
					<view class="box-content">
						<view class="prompt">野生动物世界考拉园；“欢欢“和“乐乐”，还有“四代同堂”的考拉大家族，将给游客带来更多欢乐！长隆大熊猫中心：长隆野生动物世界的心脏位置。在2013年7月31日出生的，广东首只大熊猫宝宝以及2014年7月29，都在这里生活。金蛇秘境：全世界知名的20多个蛇精英种族，全都聚会于此，“金蛇秘境”结合原生态蛇生活环境，为游客创造与蛇近距离接触的条件，体验蛇界的缤纷斑斓和灵气，发现它们亲和、美丽、祥瑞的一面。</view>
						<view class="img">
							<image src="../../static/image/threeLayers/one.png" mode="widthFix"></image>
							<image src="../../static/image/threeLayers/two.png" mode="widthFix"></image>
						</view>
						<view class="more">
							<text>展开更多</text>
							<image src="../../static/image/threeLayers/more.png" mode="widthFix"></image>
						</view>
						
					</view>
				</view>
				<!-- 分界线 -->
				<view class="box">
					<view class="bgc">
						
					</view>
				</view>
				<!-- 游玩贴士 -->
				<view class="box">
					<text class="h1">游玩贴士</text>
					<view class="box-content" id="service">
						<view class="button">交通信息</view>
						<view class="button">景点入口</view>
						<view class="button">推荐玩法</view>
						<view class="button">餐饮攻略</view>
						<view class="button">禁止事项</view>
						<view class="button">安全提示</view>
						<view class="button">其他</view>
					</view>
				</view>
				<!-- 按钮 -->
				<view class="box">
					<button type="primary">立即购买</button>
				</view>
			</view>
			<view class=""  v-show="show == 1">
				
				<policyDetails></policyDetails>
			</view>
			<view class=""  v-show="show == 2">
				<list></list>
			</view>
		</view>
</template>

<script>
	import policyDetails from '../assembly/policy_details.vue'
	import list from '../assembly/policy_list.vue'
	export default {
		components:{
			policyDetails,
			list
		},
		data() {
			return {
				show: 0
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			returns(){
				this.common.returns(this)
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		width: 40rpx;
		display: inline-block;
	}
	.tab {
		margin-top: 14rpx;
	}
	.tabbar{
		width: 100%;
		height: 90rpx;
		/* border: 1rpx solid #000; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tabbar text{
		width: 33.3%;
		line-height: 80rpx;
		font-size: 32rpx;
		text-align: center;
		border-bottom: 6rpx solid #fff;
	}
	.show{
		border-bottom: 6rpx solid #1D9DFF !important;
	}
	
	.box,.write{
		width: 100%;
		background: #FFFFFF;
		
	}
	.write:last-of-type{
		padding-bottom: 20rpx;
	}
	.box .h1{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
		color: #000;
		font-size: 26rpx;
		font-weight: bold;
	}
	.box-content,.write-content{
		width: 100%;
		display: flex;
		justify-content: center;
		/* align-items: center; */
		flex-direction: column;
	}
	.write-content{
		/* margin-top: 20rpx; */
	}
	.day{
		/* width: 100%; */
		height: 60rpx;
		line-height: 60rpx;
		margin: 0 16rpx;
		background: #e8f5ff;
		font-size: 32rpx;
		font-weight: 400;
		color: #1D9DFF;
		text-align: center;
	}
	.time{
		width: 98%;
		margin: 0 auto;
		font-size: 24rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #555;
	}
	.prompt{
		
		width: 95%;
		margin: 0 auto;
		text-align: left;
		font-size: 24rpx;
		color: #555;
	}
	#service{
		width: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: start;
		align-items: start;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.icon{
		width: 20%;
		height: 150rpx;
		margin: 20rpx 0rpx;
		font-size: 24rpx;
		color: #555;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: space-between;
		flex-direction: column;
	}
	.image{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.icon image{
		width: 80rpx;
		height: 80rpx;
	}
	.h2{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
		color: #000;
		font-size: 26rpx;
		font-weight: bold;
	}
	.h2 image{
		width: 20rpx;
		height: 20rpx;
		margin-right: 16rpx;
	}
	.bgc{
		width: 100%;
		height: 16rpx;
		background: #F2F2F2;
	}
	.img{
		width: 100%;
	}
	.img image{
		width: 95%;
		height: 400rpx;
		margin: 50rpx 2.5% 0;
	}
	.more{
		width: 98%;
		height: 80rpx;
		margin: 20rpx 1% 0;
		border-top: 1rpx solid rgba(0,0,0,.2);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.more text{
		color: #555;
		font-size: 28rpx;
	}
	.more image{
		width: 30rpx;
		height: 50rpx;
		margin: 0;
	}
	.button{
		width: 25%;
		height: 60rpx;
		line-height: 60rpx;
		margin-right: 40rpx;
		margin-bottom: 30rpx;
		text-align: center;
		font-size: 24rpx;
		color: #1D9DFF;
		border-radius: 20rpx;
		background: #e8f5ff;
	}
	.box:last-of-type{
		height: 80rpx;
	}
	.box:last-of-type button{
		border-radius: 50rpx;
	}
</style>
