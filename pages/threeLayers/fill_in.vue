<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="date">
			<view class="price">
				<view class="h3">{{data.Name}}</view>
				<view class="h2">￥{{Price}}</view>
			</view>
			<view class="num">
				<text>购买数量</text>
				<view class="num_right">
					<view class="less" @click="change_num(1)">-</view>
					<text>{{buy_num}}</text>
					<view class="plus" @click="change_num(2)">+</view>
				</view>
			</view>
			<view class="prompt">
				最多可购{{max_num}}份
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

		<view class="offer">
			<view class="offer_name">
				<image src="../../static/image/coupon.png" mode="widthFix"></image>
				<text>优惠券</text>
			</view>
			<view class="icon">
				<image src="../../static/image/go.png" mode="widthFix"></image>
			</view>
		</view>

		<view class="button">
			<view class="button_name">
				<text>需支付</text>
				<text class="h5">￥{{buy_num*Price}}</text>
			</view>
			<button class="btn" type="primary" @click="emption()">去结算</button>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		components: {
			returns
		},
		data() {
			return {
				title: '订单填写',
				id: '',
				scen_id: '',
				chiose_time: '',
				data: '',
				Price: '',
				max_num: '',
				buy_num: 1,
				default_news: '', //默认模板
				Arr_news: [], //购票人信息
				taker_name: '',
				taker_pho: '',
				additional_data: '', //资源附加信息，有就要渲染
				current: 0
			}
		},
		methods: {
			emption() {//结算
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
				
				this.service.entire(this,'post',this.service.api_root.threeLayers.scen_Confirm,data,function(self,res){
					console.log(res)
					if(res.code == 0){
						uni.navigateTo({
							url:'/pages/threeLayers/order_pay?id='+res.data.orderid+'&name='+self.data.Name
						})
					}else{
						uni.showToast({
							icon:'none',
							title:res.msg
						})
					}
				})
				
				
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
			change_num(type) { //更改购买数量
				if (type == 1) {
					if (this.buy_num == 1) return
					this.buy_num -= 1
					this.Arr_news.pop()
				} else {
					if (this.buy_num == this.max_num) return
					this.buy_num += 1
					this.Arr_news.push(JSON.parse(this.default_news)) //深拷贝，否则地址指向都一样
				}
			}
		},
		onLoad(options) {
			this.chiose_time = options.chiose_time
			this.scen_id = options.scen_id
			this.id = options.id
			this.Price = options.Price
			this.service.entire(this, 'get', this.service.api_root.subindex.scen_ConfirmDetail, {
				ResourceIDList:options.id,
				end_date: options.endDate
			}, function(self, res) {
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
		width: 224rpx;
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
