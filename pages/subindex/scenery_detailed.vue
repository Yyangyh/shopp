<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top_img">
			<image :src="data.ImageURL" mode="scaleToFill"></image>
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
					{{data.Name}}
				</view>
				<view class="top_test1">
					{{data.PMRecommand}}
				</view>
				<!-- <view class="top_test2">
					<text>5A景区</text>
					<text>动物园</text>
					<text>其他动物园</text>
				</view> -->
			</view>
			<view class="score">
				<text class="score_test">
					{{data.CommentGrade}}评分
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
					<view class="">
						<image src="../../static/image/time.png" mode="widthFix"></image>
					</view>
					<text>{{data.OpenTimeDesc}}</text>
					<view class="">
						<image class="go" src="../../static/image/go.png" mode="widthFix"></image>
					</view>
				</view>
				<!-- <view class="de_bottom">
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
					</view>sc_details
				</view> -->
			</view>
			<view class="coordinate">
				<view class="co_top">
					<image src="../../static/image/coordinate.png" mode="widthFix"></image>
					<text>{{data.Address}}</text>
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


		<view class="scenery_top" v-if="data_one">
			<view class="" @click="chiose_one(index)" :class="{show: show== index}" v-for="(item,index) in data_one" :key='index'>
				<view class="">
					{{item.name}}
				</view>

			</view>

		</view>
		<view class="scenery_mid" v-if="data_one">
			<view class="" @click="chiose_two(index)" v-for="(item,index) in data_two" :class="{mid_show: mid_show== index}">
				{{item.name}}
			</view>
		</view>

		<view class='scenery_bottom' v-if="data_one">
			<view class="scenery_ticket">
				<view class="ticket">
					<view class="sc_common">
						<image src="../../static/image/ticket1.png" mode="widthFix"></image>
						<text>门票</text>
					</view>
					<view class="ti_common" v-for="(item,index) in data_three" :key='item.id' @click="show_box(index)">
						<view class="com_left">
							<view class="left_test1">
								{{item.Name}}
							</view>
							<view class="left_test2" v-if="item.time_status == 0">
								<image src="../../static/image/selection.png" mode="widthFix"></image>
								<text>当天{{item.AdvanceBookingTime}}前可定票</text>
							</view>
							<view class="left_test2" v-else-if="item.time_status == 1">
								<image src="../../static/image/selection.png" mode="widthFix"></image>
								<text>最早可定明日票</text>
							</view>
							<view class="left_test2" v-else>
								<image src="../../static/image/selection.png" mode="widthFix"></image>
								<text>最早可定{{item.FirstBookingDate}}票</text>
							</view>

							<view class="left_test3" v-if="item.RefundNewType ==1 ">
								随时退
							</view>
							<view class="left_test3" v-else-if="item.RefundNewType ==2">
								非随时退
							</view>
							<view class="left_test3" v-else-if="item.RefundNewType ==3">
								不可退
							</view>
							<view class="left_test4">
								<text>购买须知</text>
								<image src="../../static/image/go.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="com_right">
							<view class="ri_test1">
								￥<text>{{item.Price}}</text>
							</view>
							<view class="ri_test2">
								立即购买
							</view>
						</view>
					</view>

					<!-- <view class="load_more" @click="load_more()">
						{{more_test}}
					</view> -->


				</view>
			</view>

		</view>

		<view class="user_comment">
			<view class="user_top">
				用户评论
			</view>
			<view class="user">
				<image class="user_img" src="../../static/image/portrait.png" mode="widthFix"></image>
				<view class="user_test">
					<view>小小纹~</view>
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
		</view>



		<!-- 购买须知 -->


		<view class="mask" v-show="box == false && buy_box == false? false:true" @click="buy_box= false,box= false">
		
		</view>
		<view class="pop-ups" :class="box===false ? 'mask_none' : box===true ? 'mask_show' : ''">
			<!-- <image src="" mode=""></image> -->
			<view class="h1">
				<text>{{buy_name}}</text>
			</view>
			<scroll-view class="overflowY" scroll-y="true" scroll-left="120">
				<view class="description" v-for="(item, index) in buy_data" :key='index'>
					<view class="h2">{{item.name}}</view>
					<view class="h3" v-for="(items,indexs) in item.data" :key='indexs'>
						<text class="h3_text">{{items.names}}：</text>
						<view class="cc">
							<text class="" v-for="(itemss,indexss) in items.data" :key='indexss'>
								{{itemss.DescDetail}}
							</text>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="btn">
				<view class="price">
					<text>价格</text>
					<text class="ll">￥{{buy_money}}</text>
				</view>
				<view class="payment">
					<!-- <image src="../../static/image/collect.png" mode="widthFix"></image> -->
					<image src="../../static/image/collection.png" mode="widthFix"></image>
					<button type="primary" @click="chiose_date()">立即购买</button>
				</view>
			</view>
		</view>

		<!-- 购买选择日期 -->
		<view class="buy_date"  :class="buy_box===false ? 'mask_none' : buy_box===true ? 'mask_show' : ''">
			<view class="buy_date_test">
				<text>{{buy_name}}</text>
			</view>
			<view class="buy_date_price">￥{{buy_money}}</view>
			<view class="date_test">日期选择</view>
			<view class="chiose_date">
				<view class="date_one" :class="{buy_show:buy_show == 0,prohibit:buy_status != 0}" @click="buy_chiose_date(0)" >
					<view class="">今天</view>
					<view class="">{{buy_today}}</view>
				</view>
				<view class="date_one" :class="{buy_show:buy_show == 1,prohibit:buy_status > 1}" @click="buy_chiose_date(1)">
					<view class="">明天</view>
					<view class="">{{buy_tomorrow}}</view>
				</view>
				<view class="date_one" :class="{buy_show:buy_show == 2,prohibit:buy_status > 2}" @click="buy_chiose_date(2)">
					<view class="">后天</view>
					<view class="">{{buy_acquired}}</view>
				</view>
				<view class="date_one">
					<view class="">其他日期</view>
				</view>
			</view>
			<button class="buy"  @click="jump('/pages/threeLayers/fill_in?id='+buy_id)">立即购买</button>
		</view>

		
		<view>
		    <uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
		     ></uni-calendar>
		     <button @click="open">打开日历</button>
		</view>
		
	</view>
</template>

<script>
	import {uniCalendar} from "../../components/uni-calendar/uni-calendar.vue"
	export default {
		components: {
		    uniCalendar
		},
		data() {
			return {
				show: 0,
				mid_show: 0,
				box: false,
				page: 0,
				data: '',
				data_one: '',
				data_two: '',
				data_three: '',
				more_test: '查看更多',
				buy_data: '', //购买须知数据
				buy_name: '',
				buy_money: '',
				buy_id: '',
				buy_show:99,
				buy_box:false,
				buy_date:'',
				buy_today:'',//今天
				buy_tomorrow:'',//明天
				buy_acquired:'',//后天
				buy_status:''
			}
		},
		methods: {
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e);
			},
			returns() {
				this.common.returns(this)
			},
			jump(url) {
				this.box = false;
				uni.navigateTo({
					url: url
				})
			},
			chiose_date(){ //选择日期
				this.box = false
				this.buy_box = true
				
			},
			buy_chiose_date(index){
				if(this.buy_status >index) return
				this.buy_show = index
			},
			show_box(index) {
				this.box = true;
				this.buy_name = this.data_three[index].Name
				this.buy_money = this.data_three[index].Price
				this.buy_id = this.data_three[index].ID
				this.buy_status = this.data_three[index].time_status
				console.log(this.buy_status)
				let data = this.data_three[index].ResourceAddInfoList
				let Arr_data = []
				let Obj_data = {}
				data.forEach((s, index, item) => { //处理购买须知数据格式

					if (Obj_data.name == s.Title) {
						let aa = {}
						aa.names = s.SubTitle
						aa.data = [...s.ResourceAddInfoDetailList]
						Obj_data.data.push(aa)
					} else {
						Arr_data.push(Obj_data)
						Obj_data = {}
						Obj_data.name = s.Title
						Obj_data.data = []
						let aa = {}
						aa.names = s.SubTitle
						aa.data = [...s.ResourceAddInfoDetailList]
						Obj_data.data.push(aa)
					}

					if (item.length - 1 == index) Arr_data.push(Obj_data) //添加最后一条数据
				})
				Arr_data.shift() //删除第一条空对象
				this.buy_data = Arr_data
			},
			chiose_one(index) {
				this.show = index
				this.data_two = this.data_one[index].data
				this.data_three = this.data_two[0].data
				this.page = 0
				this.more_test = '查看更多'
				if (this.data_three.length - this.page <= 3) {
					this.more_test = '暂无更多'
					return
				}
				this.mid_show = 0
			},
			chiose_two(index) {
				this.mid_show = index
				this.data_three = this.data_two[index].data
				this.page = 0
				this.more_test = '查看更多'
				if (this.data_three.length - this.page <= 3) {
					this.more_test = '暂无更多'
					return
				}
			},
			load_more() { //加载更多景点
				this.more_test = '加载中...'
				this.page += 3

				if (this.data_three.length - this.page <= 3) {
					this.more_test = '暂无更多'
					return
				}
				this.more_test = '查看更多'
			},

		},
		onLoad(options) {
			//获取当前时间
			let date = new Date();
			console.log(date)
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			if (month < 10) {
				month = "0" + month;
			}
			if (day < 10) {
				day = "0" + day;
			}
			let nowDate = year + "-" + month + "-" + day;
			this.buy_today = month + "月" + day+ "日"; //今天
			// console.log(nowDate)
			
			function addDate(date, days) {
			        if (days == undefined || days == '') {
			            days = 1;
			        }
			        var date = new Date(date);
			        date.setDate(date.getDate() + days);
			        var month = date.getMonth() + 1;
			        var day = date.getDate();
			        return  getFormatDate(month) + '月' + getFormatDate(day)+ "日";
			    }
			 
			    // 日期月份/天的显示，如果是1位数，则在前面加上'0'
			function getFormatDate(arg) {
				if (arg == undefined || arg == '') {
					return '';
				}
				var re = arg + '';
				if (re.length < 2) {
					re = '0' + re;
				}
				
				return re;
			}
			this.buy_tomorrow = addDate(nowDate,1)//明天
			this.buy_acquired = addDate(nowDate,2)//后天
			

			this.service.entire(this, 'get', this.service.api_root.subindex.scen_Detail, {
				id: options.id
			}, function(self, res) {
				// console.log(res.data.ResourceList)
				if (res.data.ResourceList.length > 0) {
					for (let s of res.data.ResourceList) {
						for (let n of s.data) {
							for (let m of n.data) {
								m.FirstBookingDate = Test(m.FirstBookingDate)
								let day1 = new Date(nowDate);
								let day2 = new Date(m.FirstBookingDate);
								if ((day2 - day1) / (1000 * 60 * 60 * 24) == 0) {
									m.time_status = 0
								} else if ((day2 - day1) / (1000 * 60 * 60 * 24) == 1) {
									m.time_status = 1
								}else if ((day2 - day1) / (1000 * 60 * 60 * 24) == 2) {
									m.time_status = 2
								}  else {
									m.time_status = 3
								}
							}
						}
					}
					console.log(self.data_one)
					self.data_one = res.data.ResourceList
					self.data_two = res.data.ResourceList[0].data
					self.data_three = res.data.ResourceList[0].data[0].data
				}

				self.data = res.data.goods.ScenicSpotInfoList[0]
				// let result = [];
				// for(let i=0;i<self.data_three.length;i+=3){
				//     result.push(self.data_three.slice(i,i+3));
				// }
				// self.data_three = result
				// console.log(self.data_three)
				let data = res.data.goods.ScenicSpotInfoList[0].ProductInfo.ResourceList


				function formatDate(dt) {
					let year = dt.getFullYear();
					let month = dt.getMonth() + 1;
					let date = dt.getDate();
					return year + "-" + month + "-" + date;
				}

				function Test(time) {
					let t = time.slice(6, 19)
					let NewDtime = new Date(parseInt(t));
					return formatDate(NewDtime);
				}
			})
		}
	}
</script>

<style scoped>
	.content {
		background: #F1F1F1;
		padding-top: 0;
	}

	.top_img {
		width: 100%;
		height: 360rpx;
		position: relative;
	}

	.top_img image {
		width: 100%;
		height: 100%;

	}

	.top_img .top_operation {
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

	.top_img .top_operation image {
		height: 50rpx;
		width: 50rpx;
	}

	.top_img .top_operation image:nth-of-type(1) {
		margin-left: 30rpx;
	}

	.top_img .top_operation .love {
		margin-right: 20rpx;
	}

	.top_img .top_operation .share {
		margin-right: 30rpx;
	}

	.scenery {
		height: 560rpx;
		font-size: 28rpx;
		background: #fff;
		width: 94%;
		position: relative;
		top: -50rpx;
		left: 3%;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: 20rpx 0 28rpx #eee;
	}

	.scenery .sc_top .top_test {
		font-weight: bold;
		font-size: 32rpx;
		/* margin: 10px; */
		/* margin: 11px 17px; */
		margin: 30rpx 20rpx 12rpx 36rpx;
	}

	.scenery .sc_top .top_test1 {
		font-size: 24rpx;
		color: #666666;
		padding-bottom: 12rpx;
		padding-left: 36rpx;

	}

	.scenery .sc_top .top_test2 {
		font-size: 24rpx;
		color: #00D3B3;
		padding-bottom: 20rpx;

		padding-left: 38rpx;
		border-bottom: 1rpx solid #F4F4F4;
	}

	.scenery .sc_top .top_test2 text {
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

	.scenery .score .score_test {
		width: 100%;
		color: #1D9DFF;
		/* font-weight: bold; */
		padding: 30rpx 16rpx;
	}

	.scenery .comment {
		color: #999999;
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	.scenery .comment image {
		width: 24rpx;
		height: 24rpx;
	}

	.scenery .recommend {
		padding: 0 34rpx;
	}

	.scenery .recommend .recommend_test {
		font-weight: bold;
		font-size: 28rpx;
		margin: 20rpx 0;
	}

	.scenery .recommend .recommend_test text {
		font-weight: 100;
		color: #999;
	}

	.scenery .recommend .recommend_img {
		display: flex;
		justify-content: flex-start;
		color: #333333;
	}

	.scenery .recommend .recommend_img .re_list {
		width: 18%;
		margin-right: 20rpx;
		height: 120rpx;
	}

	.scenery .recommend .recommend_img .re_list image {
		height: 100%;
		width: 100%;
	}

	.scenery .recommend .recommend_img .re_list view {
		text-align: center;
		font-size: 24rpx;
	}

	.details {
		background: #fff;
		color: #666666;
		padding-top: 20rpx;
		font-size: 24rpx;
	}

	.details .sc_details {
		border-bottom: 2rpx solid #F4F4F4;
		padding-bottom: 20rpx;
	}

	.details .sc_details .de_top image {
		height: 40rpx;
		width: 40rpx;
	}

	.details .sc_details .de_top image:nth-of-type(1) {
		height: 30rpx;
		width: 30rpx;
	}

	.details .sc_details .de_top image:nth-of-type(2) {
		height: 36rpx;
		width: 36rpx;

	}

	.details .sc_details .de_top {
		display: flex;
		font-size: 24rpx;
		align-items: center;
		margin: 0 4%;
		/* padding: 0 38rpx; */
	}

	.details .sc_details .de_top view:nth-of-type(1) {
		margin-right: 10rpx;
	}

	.details .sc_details .de_top text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.details .sc_details .de_bottom image {
		height: 18rpx;
		width: 18rpx;
		margin-right: 5rpx;
	}

	.details .sc_details .de_bottom {
		font-size: 24rpx;
		display: flex;
		margin: 10rpx 50rpx;
		align-items: center;
	}

	.details .sc_details .de_bottom .de_list {
		margin-right: 20rpx;
	}

	.coordinate {
		display: flex;
		font-size: 24rpx;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 4%;
		border-bottom: 2rpx solid #F4F4F4;
	}

	.coordinate:nth-of-type(3) {
		border: none;
	}

	.coordinate .co_top {
		display: flex;
		align-items: center;
	}

	.co_top image {
		margin-right: 10rpx;
	}

	.coordinate image {
		height: 30rpx;
		width: 30rpx;
		/* margin-right: 10rpx; */
	}

	.show {
		border-bottom: 2px solid #02A7F0;
	}

	.scenery_top {
		background: #FFFFFF;
		display: flex;
		/* height: 100rpx; */
		line-height: 100rpx;
		padding: 0 4%;
		margin-top: 20rpx;
		font-size: 32rpx;
		border-bottom: 2rpx solid #F4F4F4;
	}

	.scenery_top view {
		width: 160rpx;
		text-align: center;
	}

	.scenery_mid {
		display: flex;
		align-items: center;
		height: 120rpx;
		background: #fff;
		font-size: 28rpx;
		padding: 0 4%;
		flex-wrap: wrap;
	}

	.scenery_mid view {
		color: #666;
		background: #FFFAD3;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 50rpx;
		padding: 0 30rpx;
		margin-right: 20rpx;
	}

	.mid_show {
		background: #FFD300 !important;
		color: #333 !important;
	}

	.scenery_bottom {
		background: #fff;
	}

	.scenery_bottom .scenery_ticket .ticket {}

	.scenery_bottom .scenery_ticket .ticket .sc_common {
		display: flex;
		align-items: center;
		padding: 20rpx 4%;

	}

	.scenery_bottom .scenery_ticket .ticket .sc_common image {
		height: 32rpx;
		width: 32rpx;
		margin-right: 10rpx;
	}

	.scenery_bottom .scenery_ticket .ticket .sc_common text {
		color: #1D9DFF;
		font-weight: bold;
		font-size: 32rpx;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common {
		display: flex;
		height: 100%;
		padding: 30rpx 4%;
		border-bottom: 2rpx solid #F4F4F4;
		height: 230rpx;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left {
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test1 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 26rpx;
		color: #333333;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test2 {
		font-size: 26rpx;
		color: #999999;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test2 image {
		width: 18rpx;
		height: 18rpx;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test3 {
		color: #00D3B3;
		border: 1rpx solid #00D3B3;
		display: inline;
		width: 120rpx;
		text-align: center;
		font-size: 22rpx;
		border-radius: 5rpx;
		padding: 5rpx;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test4 {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #999999;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_left .left_test4 image {
		height: 32rpx;
		width: 32rpx;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_right {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_right .ri_test1 {
		color: #FF431D;
		text-align: center;
		margin-bottom: 10rpx;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_right .ri_test1 text {
		font-size: 40rpx;
	}

	.scenery_bottom .scenery_ticket .ticket .ti_common .com_right .ri_test2 {
		background: #007AFF;
		color: #fff;
		padding: 10rpx 20rpx;
		font-size: 28rpx;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 50rpx;
	}

	.load_more {
		height: 80rpx;
		line-height: 80rpx;
		color: #333333;
		text-align: center;
		font-size: 28rpx;
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

	.purchase {
		position: fixed;
		background: rgba(0, 0, 0, .3);
		bottom: 0;
		height: 100%;
		width: 100%;
		display: none;
	}

	.purchase .pur_box {
		position: absolute;
		background: #fff;
		bottom: 0;
		height: 600rpx;
		width: 100%;
	}

	.mask {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}

	.pop-ups {
		width: 100%;
		height: 900rpx;
		box-sizing: border-box;
		/* padding-bottom: 120rpx; */
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		z-index: 101;
		padding-bottom: 120rpx;
		transition: .3s;
		transform: translateY(100%);
	}

	.mask_none {
		transform: translateY(100%) !important;
	}

	.mask_show {
		transform: translateY(0) !important;
	}

	.overflowY {
		height: 627rpx;
	}

	.h1 {
		width: 100%;
		box-sizing: border-box;
		padding: 36rpx 54rpx 0rpx 14rpx;
		color: #333333;
		line-clamp: 2;
		padding-bottom: 20rpx;
		word-wrap: break-word;
		text-overflow: ellipsis;
		font-size: 32rpx;
		font-weight: bold;
	}

	.description {
		width: 100%;
		box-sizing: border-box;
		padding: 0 16rpx;
	}

	.h2 {
		color: #333333;
		font-size: 26rpx;
	}

	.h2:first-of-type {
		display: flex;
		align-items: center;
		padding-left: 14rpx;
		border-left: 4rpx solid #1F9EFF;
	}

	.h3 {
		color: #333333;
		font-size: 24rpx;
		padding-left: 18rpx;
		margin-top: 30rpx;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.h3 .h3_text {
		white-space: nowrap;
	}

	.cc {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
	}

	.cc text {
		padding: 0 16rpx;
	}

	.point {
		/* padding: 0 16rpx; */
		margin-bottom: 18rpx;
		font-size: 24rpx;
		background: linear-gradient(top, #FFAA1C, #FF8402);
	}

	.xx {
		color: #666666;
		font-size: 24rpx;
	}

	.regulation {
		width: 100%;
		box-sizing: border-box;
		padding: 0 16rpx;
	}

	.h4 {
		color: #666666;
		font-size: 24rpx;
		padding-left: 18rpx;
		margin-top: 16rpx;
	}

	.h4:nth-of-type(1) {
		margin-top: 0;
	}

	.btn {
		width: 100%;
		height: 120rpx;
		box-sizing: border-box;
		padding: 0 40rpx;
		position: fixed;
		bottom: 0;
		z-index: 102;
		background: #FFFFFF;
		box-shadow: 0rpx 0 15rpx 0 #CCCCCC;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.price {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.price text {
		color: #666666;
		font-size: 34rpx;
	}

	.price .ll {
		color: #FF431D;
		font-size: 40rpx;
	}

	.payment {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.payment image {
		width: 70rpx;
		height: 70rpx;
		margin-right: 30rpx;
	}

	.payment button {
		color: #FFFFFF;
		font-size: 34rpx;
		width: 224rpx;
		height: 90rpx;
		border-radius: 90rpx;
		text-align: center;
	}

	.buy_date {
		position: fixed;
		background: #fff;
		bottom: 0;
		left: 0;
		width: 100%;
		/* height: 450rpx; */
		font-size: 32rpx;
		z-index: 998;
		box-sizing: border-box;
		transition: .3s;
		transform: translateY(100%);
	}
	.buy_date .buy_date_test{
		font-size: 28rpx;
		padding: 20rpx;
	}
	.buy_date .buy_date_price{
		color: #FF431D;
		padding: 0 20rpx 20rpx 20rpx;
	}
	.buy_date .date_test{
		padding-left: 20rpx;
	}
	.buy_date .chiose_date{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
	}
	.buy_date .chiose_date .date_one{
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 28rpx;
		height: 70rpx;
		width: 20%;
		text-align: center;
		border-radius: 10rpx;
		background: #F5F5F5;
		border: 2rpx solid #EEEEEE;
	}
	.buy_date .chiose_date .date_one view:nth-of-type(2){
		font-size: 24rpx;
		/* color: #666; */
	}
	.buy_date .buy{
		background: #007AFF;
		color: #fff;
		font-size: 28rpx;
		border-radius: 0;
	}
	.prohibit{
		opacity: 0.3;
	}
	.buy_show{
		background: #4395ff !important;
		color: #fff !important;
	}
</style>
