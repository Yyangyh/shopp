<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<view class="buy_date">
			
			<!-- <view class="buy_date_price">￥{{buy_money}}</view> -->
			<view class="date_test">使用日期选择</view>
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
		</view>
		
		<view class="date">
			<view class="price">
				<view class="h3">{{data.Name}}</view>
			</view>
		</view>
		<view class="information">
			<view class="take">
				<text class="take_top">取票人信息</text>
				<text class="h4">须填写<text class="h5">1个</text>取票人</text>

				<view class="log">
					<text>姓名</text>
					<input type="text" placeholder="请输入姓名" v-model="taker_name" />
				</view>
				<view class="log">
					<text>联系电话</text>
					<input type="text" placeholder="请输入联系电话" v-model="taker_pho" />
				</view>
			</view>


			<view class="tourist">
				游客信息
			</view>
			<view class="log_box" v-for="(item,index) in Arr_news" :key='index'>
			
				<view class="log" v-for="(items,indexs) in item" :key='indexs'>
					<view class="uni-list" v-if="items.name == '证件类型'">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								证件类型
							</view>
							<view class="uni-list-cell-db">
								<picker @change="bindPickerChange($event,index)" :value="items.type_index" :range="items.type">
									<!-- 传参需要加$event -->
									<view class="uni-input">{{items.type[items.type_index]}}</view>
								</picker>
							</view>
						</view>
					</view>
					<block v-else>
						<text>{{items.name}}</text>
						<input type="text" @input="bindInput($event,index,indexs)" :placeholder="'请输入' +items.name " />
					</block>
				</view>
			</view>
		</view>

		<view class="additional" v-if="additional_data != ''">
			<view class="additional_test">
				下单附加信息（必填）
			</view>
			<view class="additional_list" v-for="(item,index) in additional_data" :key='item.OrderExtendInfoID'>
				
				<block v-if="item.Type == 2">
					<!-- 多选 -->
					
					<view class="list_three">
						<view class="list_top">
							{{item.OrderExtendInfoName}}
						</view>
						<checkbox-group @change="checkboxChange($event,index)" class="many_selection">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(items, indexs) in item.ResourceOrderExtendInfoItemList" :key="items.ResourceOrderExtendInfoItemID">
								<view>
									<checkbox :value="String(items.ResourceOrderExtendInfoItemID)" :checked="items.checked" />
								</view>
								<view>{{items.Content}}</view>
							</label>
						</checkbox-group>
					</view>
				</block>
				<block v-else-if="item.Type == 1 ||item.Type == 3 ">
					<!-- 下拉 --><!-- 单选 -->
					<view class="list_one">
						<view class="list_top">
							{{item.OrderExtendInfoName}}
						</view>
						<view class="uni-list-cell-db">
							<picker @change="chiosePicker($event,index)" :value="item.Arr_index" :range="item.Arr" range-key="text">
								<view class="uni-input">{{item.Arr[item.Arr_index].text}}</view>
							</picker>
						</view>
					</view>
					
				</block>
				<block v-else-if="item.Type == 4">
					<!-- 文本框-->
					<view class="list_two">
						<view class="list_top">
							{{item.OrderExtendInfoName}}
						</view>
						<input type="text"  @input="addInput($event,index)" value="" :placeholder="'请输入'+item.OrderExtendInfoName" />
					</view>
					
				</block>
			</view>
		</view>

		

		<view class="button">
			
			<button class="btn" type="primary" @click="emption()">确定</button>
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
	import returns from '../common/returns.vue'
	export default {
		components: {
			uniCalendar,
			returns
		},
		data() {
			return {
				title: '订单填写',
				id: '',
				scen_id: '',
				chiose_time: '',
				data: '',
				max_num: '',
				buy_num: 1,
				default_news: '', //默认模板
				Arr_news: [], //购票人信息
				taker_name: '',
				taker_pho: '',
				additional_data: '', //资源附加信息，有就要渲染
				current: 0,
				
				buy_show:99,
				buy_date:'',
				arr_date:'', //今天明天后天
				other_time:'',
				startDate:'',//日历开始时间
				endDate:'',//日历结束时间
				chiose_time:'',//选中的日期
				sure_date:'',//携程可选日期
				buy_selected:[],
			}
		},
		methods: {
			open(){//调用日历
				this.$refs.calendar.open();
			},
			confirm(e) {  //日历表选择日期时间
				console.log(e);
				let Arr_data = []
				for (let s of this.sure_date) {
					Arr_data.push(s.Date)
				}
				if(Arr_data.indexOf(e.fulldate) != -1){
					this.other_time = e.month+'月'+e.date+'日'
					this.chiose_time = 	e.fulldate
					this.buy_show = 3
				}else{
					uni.showToast({
						icon:'none',
						title:'该时间段暂无票可售，请重新选择'
					})
				}
				
			},
			buy_chiose_date(index){
				if(this.arr_date[index].Price == '') return
				this.buy_show = index
				this.chiose_time = this.arr_date[index].date
			},
			emption() {//结算
				if(this.chiose_time == ''){
					uni.showToast({
						icon:'none',
						title:'请选择使用日期'
					})
					return
				}
				if(this.taker_name == '' ||this.taker_pho == ''){
					uni.showToast({
						icon:'none',
						title:'取票人信息不能为空'
					})
					return
				}
				let info_list = [] //游客信息
				for (let s of this.Arr_news) {
					let Obj = {}
					for (let k of s) {
						if (k.name == '证件类型') {
							if(k.type_index == 0){
								uni.showToast({
									icon:'none',
									title:'游客信息不能为空'
								})
								return
							}
						}
						if (k.value == '身份证') Obj.IdCardType = 1
						if (k.name == '证件号') Obj.IdCardNo = k.value
						if (k.name == '姓名') Obj.Cname = k.value
						if (k.name == '联系电话') Obj.ContactInfo = k.value
					}
					info_list.push(Obj)
				}
				for (let s of info_list) {
					let info_arr = Object.values(s)
					for (let k of info_arr) {
						if(k == ''){
							uni.showToast({
								icon:'none',
								title:'游客信息不能为空'
							})
							return
						}
					}
				}
				
				let data = {
					id: this.scen_id,
					ResourceID: this.id,
					UseDate: this.chiose_time,
					Quantity: this.buy_num,
					order_no:this.order,
					detail_id:this.detail_id,
					contact_info: {
						Name: this.taker_name,
						Mobile: this.taker_pho,
					},
					
				}
				data.passener_info_list = info_list
				
				if(this.additional_data != ''){//订单附加信息
					let ItemAddInfo = [] 
					console.log(this.additional_data)
					for (let s of this.additional_data) {
						let Obj = {}
						if(s.Type == 1 ||s.Type == 3){ //单选或者下拉
							let arr = []
							let arr_obj = {}
							arr_obj.id = s.Arr[s.Arr_index].id
							arr_obj.content = ''
							arr.push(arr_obj)
							Obj.id = s.ResourceOrderExtendInfoID
							Obj.items = arr
						}else if(s.Type == 2){//多选
							let arr = []
							for (let k of s.arr_value) {
								let arr_obj = {}
								arr_obj.id = k
								arr_obj.content = ''
								arr.push(arr_obj)
							}
							Obj.id = s.ResourceOrderExtendInfoID
							Obj.items = arr
						}else if(s.Type == 4){//文本
							let arr = []
							let arr_obj = {}
							arr_obj.id = 0
							arr_obj.content = s.text_value
							arr.push(arr_obj)
							Obj.id = s.ResourceOrderExtendInfoID
							Obj.items = arr
						}
						ItemAddInfo.push(Obj)
					}
					for (let s of ItemAddInfo) {
						if(s.items ==''){
							uni.showToast({
								icon:'none',
								title:'附加信息不能为空'
							})
							return
						}
						for (let k of s.items) {
							if(k.id == 0 || k.id == undefined){
								if(k.content == ''){
									uni.showToast({
										icon:'none',
										title:'附加信息不能为空'
									})
									return
								}
							}
						}
					}
					data.ItemAddInfo = ItemAddInfo
				}else{
					data.ItemAddInfo = []
				}
				
				console.log(data)
				
				this.service.entire(this,'post',this.service.api_root.global.use_ctrip,data,function(self,res){
					console.log(res)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						setTimeout(function(){
							self.common.returns(self)
						},1500)
					}
				})
				// this.service.entire(this,'post',this.service.api_root.threeLayers.scen_Confirm,data,function(self,res){
				// 	console.log(res)
				// 	if(res.code == 0){
				// 		uni.navigateTo({
				// 			url:'/pages/threeLayers/order_pay?id='+res.data.orderid+'&name='+self.data.Name
				// 		})
				// 	}else{
				// 		uni.showToast({
				// 			icon:'none',
				// 			title:res.msg
				// 		})
				// 	}
				// })
				
				
			},
			bindPickerChange: function(e, index) {
				this.Arr_news[index][0].type_index = e.target.value
				this.Arr_news[index][0].value = this.Arr_news[index][0].type[e.target.value]
			},
			bindInput: function(e, index, indexs) {
				this.Arr_news[index][indexs].value = e.target.value
			},
			chiosePicker: function(e,index) { //单选和下拉
				this.additional_data[index].Arr_index = e.target.value
				this.additional_data = JSON.parse(JSON.stringify(this.additional_data)) //更新数据，视图才会更新
			},
			checkboxChange: function(e,index) {//多选
				this.additional_data[index].arr_value = [...e.target.value]
			},
			addInput: function(e,index) {//文本框
				this.additional_data[index].text_value = e.target.value
			},
		},
		onLoad(options) {
			this.detail_id = options.detail_id
			this.order = options.order
			//获取当前时间
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
			let Dates = addDate(nowDate,30)
			
			console.log(this.arr_date)
			this.scen_id = options.spot_id
			this.id = options.id
			this.service.entire(this, 'get', this.service.api_root.subindex.scen_ConfirmDetail, {
				ResourceIDList:options.id,
				end_date: Dates
			}, function(self, res) {
				
				
				let date = res.data.date.ResourceList[0].DateList
				
				for (let s of date) {
					let Obj = {}
					s.Date = self.common.Test(s.Date)
					Obj.date = s.Date
					Obj.info = '￥'+s.Price
					self.buy_selected.push(Obj)
					for (let k of self.arr_date) {
						if(s.Date == k.date){
							k.Price = '￥'+s.Price
						}
					}
				}
				self.sure_date = date
				
				
				
				self.data = res.data.info.ResourceList[0]
				self.max_num = res.data.info.ResourceList[0].MaxQuantity
				
				console.log(res.data.information.ResourceList[0].CustomerInfoItemList)
				let data = res.data.information.ResourceList[0].CustomerInfoItemList
				let Arr = []
				data.forEach((s, index) => {
					let obj_news = {}
					if (s.Model == 1) {
						obj_news.value = ''
						obj_news.name = s.Name
						if (obj_news.name == '证件类型') {
							obj_news.type = ['请选择', '身份证']
							obj_news.type_index = 0
							Arr.unshift(obj_news) //添加至第一位
						} else {
							Arr.push(obj_news)
						}
					}
				})
				self.default_news = JSON.stringify(Arr)
				self.Arr_news.push(Arr)

				self.additional_data = res.data.info.ResourceList[0].ResourceOrderExtendInfoList
				
				// console.log(JSON.stringify(self.additional_data))
				for (let s of self.additional_data) {
					if(s.Type == 1 || s.Type == 3){
						let Arr = [
							{
								text:'请选择',
							}
						]
						s.ResourceOrderExtendInfoItemList.forEach((k,index) => {
							let obj = {}
							obj.text = k.Content
							obj.text_value = ''
							obj.id = k.ResourceOrderExtendInfoItemID
							Arr.push(obj)
						})
						s.Arr_index = 0
						s.Arr = Arr
					}else if(s.Type == 4){
						s.text_value = ''
					}else if(s.Type == 2){
						s.arr_value = []
					}
				}
				console.log(self.additional_data)
				console.log(self.Arr_news)
			})
		}
	}
</script>

<style scoped>
	page {
		padding-bottom: 120rpx;
	}

	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #F1F1F1;
	}
	.buy_date {
		background: #fff;
		width: 100%;
		/* height: 450rpx; */
		font-size: 32rpx;
		z-index: 998;
		box-sizing: border-box;
		overflow: hidden;
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
		margin-top: 20rpx;
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
	.date {
		width: 100%;
		background: #FFFFFF;
		overflow: hidden;
		margin-bottom: 8rpx;
		/* box-sizing: border-box;
		padding: 0 20rpx; */
	}

	.h2 {
		color: #FF431D;
		text-align: right;
	}

	.price {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin: 40rpx 0 26rpx;
		/* display: flex;
		align-items: center;
		justify-content: space-between; */
	}

	.h3 {
		font-size: 30rpx;
		color: #000000;
	}

	.num {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-bottom: 36rpx;
		color: #1D9DFF;
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.num_right {

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.num_right text {
		display: inline-block;
		text-align: center;
		width: 50rpx;
		color: #000000;
		font-size: 30rpx;
	}

	.less {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		color: #666666;
		border: 2rpx solid #666666;
		text-align: center;
		line-height: 44rpx;
	}

	.plus {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		color: #1D9DFF;
		border: 2rpx solid #1D9DFF;
		text-align: center;
		line-height: 44rpx;
	}

	.prompt {
		width: 100%;
		height: 88rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		font-size: 28rpx;
		color: #999999;
		background: #FFFEEF;
		line-height: 88rpx;
	}

	.information {
		width: 100%;

	}

	.take {
		width: 100%;
		box-sizing: border-box;
		font-size: 30rpx;
		color: #000000;
		background: #FFFFFF;
		margin-bottom: 20rpx;

	}

	.take .take_top {
		height: 100rpx;
		line-height: 100rpx;
		margin-left: 20rpx;
		color: #1D9DFF;
	}
	.information .tourist{
		min-height: 100rpx;
		line-height: 100rpx;
		padding-left: 20rpx;
		font-size: 30rpx;
		background: #fff;
		color: #1D9DFF;
	}
	.information .log_box {
		margin-bottom: 20rpx;
	}

	.log {
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		font-size: 30rpx;
		color: #000000;
		background: #FFFFFF;
		margin-bottom: 2rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.log input {
		margin-left: 28rpx;
	}
	.additional .additional_test{
		min-height: 100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
		background: #fff;
		padding-left: 20rpx;
		color: #1D9DFF;
	}
	.additional .additional_list{
		background: #fff;
		padding-left: 20rpx;
		font-size: 30rpx;
	}
	.additional .additional_list .list_one{
		display: flex;
		
	}
	.additional .additional_list .list_one view{
		min-height: 100rpx;
		line-height: 100rpx;
	}
	.additional .additional_list .list_one .list_top{
		margin-right: 20rpx;
	}
	.additional .additional_list .list_three .list_top{
		min-height: 100rpx;
		line-height: 100rpx;
	}
	.additional .additional_list .list_three .many_selection{
		display: flex;
		flex-wrap: wrap;
	}
	.additional .additional_list .list_three .many_selection .uni-list-cell{
		display: flex;
		margin-right: 40rpx;
		margin-bottom: 20rpx;
	}
	.additional .additional_list .list_two view{
		min-height: 100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
	}
	.additional .additional_list .list_two input{
		min-height: 100rpx;
		line-height: 100rpx;
	}
	.uni-input-placeholder {
		font-size: 24rpx;
		color: #DDDDDD;
	}
	.h4 {
		color: #999999;
		font-size: 24rpx;
		margin-left: 28rpx;
	}

	.uni-list {
		margin-bottom: 1px;
	}

	.uni-list .uni-list-cell {
		background: #fff;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		height: 100rpx;
	}

	.uni-list .uni-list-cell .uni-list-cell-db {
		margin-left: 20rpx;
		flex-grow: 2;
	}

	.h5 {
		color: #FF431D;
	}

	.offer {
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-top: 8rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.offer_name {
		color: #000000;
		font-size: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.offer_name image {
		width: 32rpx;
		height: 24rpx;
		margin-right: 20rpx;
	}

	.icon image {
		width: 26rpx;
		height: 26rpx;
	}

	.button {
		width: 100%;
		height: 120rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		z-index: 111;
	}

	.button_name {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button_name text {
		color: #666666;
		font-size: 36rpx;
	}

	.button_name .h5 {
		color: #FF431D;
		margin-left: 24rpx;
	}

	.button button {
		width: 100%;
		height: 90rpx;
		color: #FFFFFF;
		font-size: 36rpx;
		text-align: center;
		line-height: 90rpx;
		background: #1D74FF;
		border-radius: 90rpx;
		padding: 0;
		margin: 0;
	}

	/* 这个是选择后的颜色变化 */
	.choose {
		background: #1D9DFF;
		color: #FFFFFF;
	}
</style>
