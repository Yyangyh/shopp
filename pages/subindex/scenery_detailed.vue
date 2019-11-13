<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<Load v-if = 'load_show'></Load>
		<share ref="share" :datas='share_arr'></share>
		<view class="top_img">
			<image :src="data.ImageURL" mode="scaleToFill"></image>
			<view class="top_operation" :style="{background:'rgba(255,255,255,'+transparency+')'}">
				<image src="../../static/image/returns.png" mode="widthFix" @click="returns()"></image>
				<view class="top_fixed">
					<image class="love" v-if="is_favor == false" src="../../static/image/love.png" mode="widthFix"  @click="collection()"></image>
					<image class="love" v-else-if = "is_favor == true" src="../../static/image/loves.png" mode="widthFix"  @click="collection()"></image>
					<image @click="tips()" class="share" src="../../static/image/share.png" mode="widthFix"></image>
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
				<!-- <text class="comment">
					<text>49107条评论</text>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</text> -->
			</view>

			<!-- <view class="recommend">
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
			</view> -->
		</view>

		<view class="details">
			<view class="sc_details">
				<view class="de_top">
					<view class="">
						<image src="../../static/image/time.png" mode="widthFix"></image>
					</view>
					<text>{{data.OpenTimeDesc}}</text>
					<view class="">
						<!-- <image class="go" src="../../static/image/go.png" mode="widthFix"></image> -->
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
			<view class="coordinate" @tap="open_map()">
			<!-- <view class="coordinate"> -->
				<view class="co_top">
					<image src="../../static/image/coordinate.png" mode="widthFix"></image>
					<text>{{data.Address}}</text>
				</view>
				<!-- <image src="../../static/image/go.png" mode="widthFix"></image> -->
			</view>
			<!-- <view class="coordinate">
				<view class="co_top">
					<image src="../../static/image/coupon.png" mode="widthFix"></image>
					<text>优惠券</text>
				</view>
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view> -->
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


		<view class="" @click="jump('../threeLayers/comment_list?goods_id='+data.ID+'&type=3')">
			<discuss :comments='comments'></discuss>
		</view>
		<view v-if="comments !=''" class="more"  @click="jump('../threeLayers/comment_list?goods_id='+data.ID+'&type=3')">
			查看更多评论
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
					<!-- <image src="../../static/image/collection.png" mode="widthFix"></image> -->
					<button type="primary" @click="chiose_date()">立即购买</button>
				</view>
			</view>
		</view>

		<!-- 购买选择日期 -->
		<view class="buy_date"  :class="buy_box===false ? 'mask_none' : buy_box===true ? 'mask_show' : ''">
			<view class="buy_date_test">
				<text>{{buy_name}}</text>
			</view>
			<!-- <view class="buy_date_price">￥{{buy_money}}</view> -->
			<view class="date_test">日期选择</view>
			<view class="chiose_date">
				<view class="date_one" v-for="(item,index) in arr_date" :class="{buy_show:buy_show == index,prohibit:item.Price == ''}" @click="buy_chiose_date(index)" >
					<view class="">{{item.name}}</view>
					<view class="">{{item.show_date}}</view>
					<view class="Price">{{item.Price}}</view>
				</view>
				
				<view class="date_one"  :class="{buy_show:buy_show == 3}" >
					<view class=""  @click="open">其他日期</view>
					<view class="">
						{{other_time}}
					</view>
				</view>
			</view>
			<button class="buy"  @click="buy()">立即购买</button>
		</view>

		
		<view>
		    <uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
			:startDate = "startDate"
			:endDate = "endDate"
			:selected = 'buy_selected'
		     ></uni-calendar>
		</view>
		
	</view>
</template>

<script>
	import uniCalendar from "../../components/uni-calendar/uni-calendar.vue"
	import Load from '../../components/load/load.vue'
	import share from'../common/share.vue'
	import discuss from '../common/discuss.vue'
	export default {
		components:{
		    uniCalendar,
			Load,
			share,
			discuss
		},
		data() {
			return {
				show: 0,
				load_show:true,
				show_bottom:{
					background:'rgba(255,255,255,0)'
				},
				scen_id:'',
				is_favor:'',//景点收藏
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
				arr_date:'', //今天明天后天
				other_time:'',
				startDate:'',//日历开始时间
				endDate:'',//日历结束时间
				chiose_time:'',//选中的日期
				sure_date:'',//携程可选日期
				buy_selected:[],
				transparency:0,
				windowHeight:'',
				share_arr:{},
				comments:''
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
		onLoad() {
			this.windowHeight = uni.getSystemInfoSync().windowHeight
			console.log(this.windowHeight)
		},
		methods: {
			open(){
				this.$refs.calendar.open();
			},
			open_map(){
				console.log(this.data.Latitude,this.data.Longitude)
				uni.openLocation({
					latitude: this.data.Latitude,
					longitude: this.data.Longitude,
					name: this.data.Address,
					success: function () {
						console.log('success');
					}
				});
			},
			confirm(e) {  //日历表选择日期时间
				console.log(e);
				let date
				let month
				e.date<10?date = '0'+e.date:date = e.date
				e.month<10?month = '0'+e.month:month = e.month
				
				let fulldate = e.year+'-'+month+'-'+date
				// console.log(fulldate)
				let Arr_data = []
				for (let s of this.sure_date) {
					Arr_data.push(s.Date)
				}
				// console.log(Arr_data)
				if(Arr_data.indexOf(fulldate) != -1){
					this.other_time = month+'月'+date+'日'
					this.chiose_time = 	fulldate
					this.buy_show = 3
				}else{
					uni.showToast({
						icon:'none',
						title:'该时间段暂无票可售，请重新选择'
					})
				}
				
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
			buy(url){
				if(this.chiose_time == ''){
					uni.showToast({
						icon:'none',
						title:'请选择使用日期'
					})
					return
				}
				let Price
				for (let s of this.sure_date) {
					console.log(s)
					if(s.Date == this.chiose_time){
						Price = s.Price
						break
					}
				}
				this.box = false;
				uni.navigateTo({
					url: '/pages/threeLayers/fill_in?id='+this.buy_id+'&endDate='+this.endDate+'&chiose_time='+this.chiose_time+'&Price='+Price+'&scen_id='+this.scen_id
				})
			},
			collection(){
				this.common.scen_collection(this,this.scen_id)
			},
			returns() { //返回
				this.common.returns(this)
			},
			jump(url) {
				uni.navigateTo({
					url:url
				})
			},
			chiose_date(){ //选择日期
				this.box = false
				this.buy_box = true
				this.service.entire(this,'get',this.service.api_root.subindex.scen_ConfirmDetail,{
					ResourceIDList:this.buy_id,
					end_date:this.endDate,
				},function(self,res){
					console.log(res)
					let date = res.data.date.ResourceList[0].DateList
					
					for (let s of date) {
						let Obj = {}
						s.Date = self.common.Test(s.Date)
						// console.log(s.Date)
						// console.log(self.arr_date)
						Obj.date = s.Date
						Obj.info = '￥'+s.Price
						self.buy_selected.push(Obj)
						for (let k of self.arr_date) {
							// console.log(s.Date == k.date)
							if(s.Date == k.date){
								k.Price = '￥'+s.Price
							}
						}
					}
					self.sure_date = date
					
				})
			},
			buy_chiose_date(index){
				if(this.arr_date[index].Price == '') return
				this.buy_show = index
				this.chiose_time = this.arr_date[index].date
			},
			show_box(index) {
				this.box = true;
				this.buy_name = this.data_three[index].Name
				this.buy_money = this.data_three[index].Price
				this.buy_id = this.data_three[index].ID
				// this.buy_status = this.data_three[index].time_status
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
			this.share_arr.Url = 'http://wx.huanqiutongmall.com/h5/#/pages/subindex/scenery_detailed?id='+options.id
			this.scen_id = options.id
			let date = new Date();
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
			// console.log(nowDate)
			
			function addDate(date, days) {
				if (days == undefined || days == '') {
					days = 1;
				}
				var date = new Date(date);
				date.setDate(date.getDate() + days);
				var month = date.getMonth() + 1;
				var day = date.getDate();
				return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
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
			function changeDate(data){
				let a = data.split('-')
				a = a[1]+'月'+a[2]+'日'
				return a
			}
			let arr_date = [ 
				{
					show_date:month + "月" + day+ "日",
					name:'今天',
					date:nowDate,
					Price:''
				},
				{
					show_date:changeDate(addDate(nowDate,1)),
					name:'明天',
					date:addDate(nowDate,1),
					Price:''
				},
				{
					show_date:changeDate(addDate(nowDate,2)),
					name:'后天',
					date:addDate(nowDate,2),
					Price:''
				},
			]
			this.arr_date = arr_date
			this.startDate = addDate(nowDate,3) //日历表开始时间
			this.endDate = addDate(nowDate,30) //日历表结束时间

			this.service.entire(this, 'get', this.service.api_root.subindex.scen_Detail, {
				id: options.id
			}, function(self, res) {
				res.data.is_favor == 0 ? self.is_favor = false :self.is_favor = true
				console.log(res.data.is_favor)
				if (res.data.ResourceList.length > 0) {
					for (let s of res.data.ResourceList) {
						for (let n of s.data) {
							for (let m of n.data) {
								m.FirstBookingDate = self.common.Test(m.FirstBookingDate)
								let day1 = new Date(nowDate);
								let day2 = new Date(m.FirstBookingDate);
								if ((day2 - day1) / (1000 * 60 * 60 * 24) == 0) { //根据相差天数分配状态
									m.time_status = 0
								} else if ((day2 - day1) / (1000 * 60 * 60 * 24) == 1) {
									m.time_status = 1
								} else {
									m.time_status = 2
								}
							}
						}
					}
					self.data_one = res.data.ResourceList
					// console.log(self.data_one)
					self.data_two = res.data.ResourceList[0].data
					self.data_three = res.data.ResourceList[0].data[0].data
				}

				self.data = res.data.goods.ScenicSpotInfoList[0]
				
				self.share_arr.Title = self.data.Name//分享
				self.share_arr.ImageUrl = self.data.ImageURL//分享
				// #ifdef H5
				if (self.$wechat && self.$wechat.isWechat()) {  //H5微信公众号分享
					 self.$wechat.share(self.share_arr);
				}
				// #endif
				
				if(res.data.comments != ''){
					console.log(res.data.comments)
					self.comments = res.data.comments[0]  //评论
					let rating_num = new Array(Number(self.comments.rating)) //评论
					self.comments.rating_num = rating_num  //评论
				}
				
				let data = res.data.goods.ScenicSpotInfoList[0].ProductInfo.ResourceList

				self.load_show = false
			})
		},
		watch:{
			buy_box(news,old){
				if(news == false) {
					this.buy_show = 99
					for (let s of this.arr_date) {
						s.Price = ''
					}
				}
			}
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
	.top_img .top_operation .top_fixed{
		
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
		height: 226rpx;
		font-size: 28rpx;
		background: #fff;
		/* width: 94%; */
		/* position: relative; */
		/* top: -50rpx; */
		/* margin: 0 20rpx; */
		/* border-radius: 20rpx; */
		overflow: hidden;
		margin-bottom: 20rpx;
		/* box-shadow: 0 0 20rpx #eee; */
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
		flex-grow: 2;
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
	.more {
		font-size: 32rpx;
		color: #666666;
		background: #fff;
		padding: 20rpx 20rpx;
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
		background: rgba(0, 0, 0, .4);
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
		margin-top: 10rpx;
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
		height: 120rpx;
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
	.buy_date .chiose_date .date_one .Price{
		color: #FF431D;
	}
	.buy_date .buy{
		background: #007AFF;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
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
