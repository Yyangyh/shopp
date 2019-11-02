<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="no_data" v-if="no_data == 1">
			<image src="../../static/image/no_data.png" mode="widthFix"></image>
			<view class="">
				暂无数据
			</view>
		</view>
		<view class=""  v-if="no_data == 2">
			<view class="seckill">
				<scroll-view scroll-x class="scroll-view_H">
					<view class="se_left" v-for="(item,index) in time_data" :class="{se_show:show == index}"  @click="choice(index)">
						<text class="se_time" :class="{se_time_show:show == index}">{{item.time}}:00</text>
						<text>{{item.flag}}</text>
					</view>
				</scroll-view>
			</view>
			<view class="se_countdown">
				<view class="co_top">
					{{data != ''?'抢购中，先下单先得哦！':'暂无抢购'}}
				</view>
				<view class="co_bottom" v-show="state == 1">
					距结束<text>{{hour}}</text>:<text>{{minute}}</text>:<text>{{second}}</text>
				</view>
				<view class="co_bottom" v-show="state == 0">
					距开始<text>{{hour}}</text>:<text>{{minute}}</text>:<text>{{second}}</text>
				</view>
			</view>
			<block v-if="data != ''">
				<view class="tab" v-for="(item,index) in data" :key='item.goods_id'>
					<view class="tab_top">
						<image :src="item.goods_image" mode="aspectFill"></image>
						<view class="tab_right">
							<view class="test_one">
								{{item.goods_name}}
							</view>
							<!-- <view class="test_two">
								{{item.title}}
							</view> -->
							<view class="price">
								<text class="price_one">￥{{item.price}}</text>
								<text class="price_two">￥{{item.goods_price}}</text>
							</view>
						</view>
					</view>
					<view class="tab_bottom">
						<view class="bo_one">
							<view class="">
								已售{{item.percentage}}%
							</view>
							<view class="prog">
								<progress :percent="item.percentage" active stroke-width="3" />
							</view>
						</view>
						<view class="bo_two" v-show="state == 1" v-if="item.percentage == 100">
							已售完
						</view>
						<view class="bo_two" v-show="state == 1" @click="jump('./seckill_detailed',index,item.goods_id)" v-else>
							去抢购
						</view>
						<view class="not" v-show="state == 0">
							即将开始
						</view>
					</view>
				</view>
			</block>
			
			<view v-else  class="seckill_image">
				<image src="/static/image/secondary/seckill.png" mode=""></image>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'限时抢购',
				data:'',
				show:0,
				index:0,
				time_data:'',
				state:'',
				hour:0,
				minute:'',
				second:'',
				no_data:''
			}
		},
		methods:{
			jump(url,index,id){
				let data={ // 传参
					id:id,
					price:this.data[index].price,
					goods_price:this.data[index].goods_price,
					sell:this.data[index].sell,
					spec_name:this.data[index].spec_name,
					seckill_id:this.data[index].seckill_goods_id
				}
				uni.navigateTo({
					url:url+'?data='+JSON.stringify(data)
				})
			},
			choice(index){
				let that = this
				that.show = index
				this.index = index
				this.state = this.time_data[index].state
				//倒计时
				clearInterval(this.times)
				let All_data = this.time_data
				All_data[index].flag == '抢购中'? this.state = 1:this.state = 0
				let time = new Date();
				let hour
				this.state == 1 ? hour = All_data[index].time - time.getHours() : hour = All_data[index].time - time.getHours() - 1
				let minute = 59 - time.getMinutes();
				let second = 60 - time.getSeconds();
				this.hour = hour
				this.minute = minute
				this.second = second
				this.times = setInterval(function(){
					that.second --
				},1000)
				//倒计时
				
				
				// 根据时间请求当前时间段的数据
				this.service.entire(this,'post',this.service.api_root.subindex.goods_list,{time:this.time_data[index].time},function(self,ref){
					let data = ref.data.data
					for (let s of data) {
						s.percentage = 100 - ((s.total - s.sell) / s.total) * 100
					}
					self.data = ref.data.data
				})
				
			}
			
		},
		
		onShow() {
			let that  = this
			this.service.entire(this,'get',this.service.api_root.subindex.time_list,{},function(self,res){
				//倒计时
				if(res.data == ''){
					self.no_data = 1
					return
				}else{
					 self.no_data = 2
				}
				let index = self.index
				let data_time = Object.keys(res.data)
				
				let All_data = []
				for (let s of data_time) {
					let state
					res.data[s].flag== '抢购中'?state = 1: state = 0
					All_data.push({
						time:s,
						flag:res.data[s].flag,
						state:state
					})
				}
				All_data[index].flag == '抢购中'? self.state = 1:self.state = 0
				self.time_data = All_data
				let time = new Date();
				let hour
				self.state == 1 ? hour = All_data[index].time - time.getHours() : hour = All_data[index].time - time.getHours() - 1
				let minute = 59 - time.getMinutes();
				let second = 60 - time.getSeconds();
				self.hour = hour
				self.minute = minute
				self.second = second
				self.times = setInterval(function(){
					self.second --
				},1000)
				//倒计时
				if(res.code == 0){ //根据时间请求当前时间段的数据
					self.service.entire(self,'post',self.service.api_root.subindex.goods_list,{time:Object.keys(res.data)[0]},function(selfs,ref){
						let data = ref.data.data
						for (let s of data) {
							s.percentage = 100 - ((s.total - s.sell) / s.total) * 100
						}
						selfs.data = ref.data.data
					})
				}
			})
		},
		onHide(){
			clearInterval(this.times)
		},
		watch:{
			second(news,old){ //监控秒
				if(news == 0){
					this.minute --
					this.second = 59
				}
			},
			minute(news,old){  //监控分钟
				if(news == -1){
					this.hour --
					this.minute = 59
					this.service.entire(this,'post',this.service.api_root.subindex.goods_list,{time:this.time_data[1]},function(self,ref){
						let data = ref.data.data
						for (let s of data) {
							s.percentage = 100 - ((s.total - s.sell) / s.total) * 100
						}
						self.data = ref.data.data
					})
				}
			},
			hour(news,old){
				if(news == -1){  //监控时
					this.hour = 0
					this.show = 0
					clearInterval(this.times)
					this.index = 0
					this.service.entire(this,'get',this.service.api_root.subindex.time_list,{},function(self,res){
						
						//倒计时
						let index = self.index
						let data_time = Object.keys(res.data)
						let All_data = []
						for (let s of data_time) {
							let state
							res.data[s].flag== '抢购中'?state = 1: state = 0
							All_data.push({
								time:s,
								flag:res.data[s].flag,
								state:state
							})
						}
						All_data[index].flag == '抢购中'? self.state = 1:self.state = 0
						self.time_data = All_data
						let time = new Date();
						let hour
						self.state == 1 ? hour = All_data[index].time - time.getHours() : hour = All_data[index].time - time.getHours() - 1
						let minute = 59 - time.getMinutes();
						let second = 60 - time.getSeconds();
						self.hour = hour
						self.minute = minute
						self.second = second
						self.times = setInterval(function(){
							self.second --
						},1000)
						//倒计时
						
						
						if(res.code == 0){   //根据时间请求当前时间段的数据
							self.service.entire(self,'post',self.service.api_root.subindex.goods_list,{time:Object.keys(res.data)[0]},function(selfs,ref){
								let data = ref.data.data
								for (let s of data) {
									s.percentage = 100 - ((s.total - s.sell) / s.total) * 100
								}
								selfs.data = ref.data.data
								
							})
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
		width: 100%;
		background: #F4F4F4;
	}
	
	.content{
		padding-top: 105rpx;
		/* height: 100%; */
		width: 100%;
	}
	.content >>>.top{
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFF;
		z-index: 888;
		box-shadow: none;
	}
	
	.seckill{
		background: #fff;
		/* margin-bottom: 24rpx; */
		font-size: 32rpx;
		color: #666666;
		box-shadow:0px 16rpx 10rpx 0px #eee;
	}
	.seckill .scroll-view_H{
		display: flex;
		justify-content: space-between;
		white-space: nowrap;
		width: 100%;
	}
	.seckill .se_left,.se_right{
		width: 50%;
		text-align: center;
		padding-bottom: 24rpx;
		display: inline-block;
		font-size: 28rpx;
		border-bottom: 4rpx solid #fff;
	}
	.seckill .se_time{
		display: inline-block;
		height: 56rpx;
		line-height: 56rpx;
		border-radius: 56rpx;
		width: 140rpx;
		
		background: #EEEEEE;
		margin-right: 20rpx;
	}
	.se_show{
		color: #1D9DFF;
		border-bottom-color: #1D9DFF !important;
	}
	.se_time_show{
		background:linear-gradient(90deg,rgba(100,197,249,1),rgba(62,143,243,1)) !important;
		color: #fff;
	}
	.se_countdown{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		margin: 30rpx 22rpx;
	}
	.se_countdown text{
		display: inline-block;
		font-size: 28rpx;
		color: #fff;
		background: #333;
		text-align: center;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 5rpx;
		width: 40rpx;
		margin: 0 4rpx;
	}
	.se_countdown text:nth-of-type(1){
		margin-left: 10rpx;
	}
	.tab{
		background: #fff;
		margin: 0 20rpx 16rpx 20rpx;
		border-radius:10rpx;
		height: 280rpx;
		padding-bottom: 20rpx;
	}
	
	.tab .tab_top{
		display: flex;
		padding: 20rpx 0;
		margin: 0 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.tab .tab_top .tab_right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 26rpx;
	}
	.tab .tab_top .test_one{
		color: #666666;
		font-size: 28rpx;
		
	}
	.tab .tab_top .test_two{
		color: #333;
		font-size: 30rpx;
	}
	.tab .tab_top .price{
		color: #FF431D;
		font-size: 28rpx;
	}
	.tab .tab_top .price .price_one{
		font-size: 36rpx;
		/* font-weight: bold; */
		margin-right: 8rpx;
	}
	.tab .tab_top .price .price_two{
		text-decoration:line-through;
		font-size: 28rpx;
		color: #999;
	}
	.tab .tab_top image{
		height: 142rpx;
		width: 220rpx;
	}
	.tab .tab_bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 92rpx;
		padding: 0 20rpx;
	}
	.tab .tab_bottom .bo_one{
		font-size: 28rpx;
		color: #666666;
		display: flex;
		align-items: center;
	}
	.tab .tab_bottom .bo_one .prog{
		width: 226rpx;
		margin-left: 40rpx;
	}
	.tab .tab_bottom .bo_two{
		color: #fff;
		background: #1D9DFF;
		width: 170rpx;
		height: 66rpx;
		line-height: 66rpx;
		border-radius: 66rpx;
		font-size: 28rpx;
		text-align: center;
	}
	.not{
		color: #666666;
		background: #EEEEEE;
		width: 170rpx;
		height: 66rpx;
		line-height: 66rpx;
		border-radius: 66rpx;
		font-size: 28rpx;
		text-align: center;
	}
	.tab .tab_bottom image{
		height: 34rpx;
		width: 34rpx;
		margin-right: 20rpx;
	}
	.no_data{
		text-align: center;
		font-size: 30rpx;
		color: #333333;
	}
	.no_data image{
		margin-top: 50rpx;
		width: 310rpx;
		height: 310rpx;
	}
	.seckill_image{
		text-align: center;
	}
</style>
