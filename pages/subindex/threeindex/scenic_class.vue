<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns></returns>
		<view class="top_class">
			<view class="class_list"  @click="show_class = !show_class">
				<text>全部分类</text>
				<image src="../../../static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list"  @click="show_region = !show_region">
				<text>全部地区</text>
				<image src="../../../static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list" @click="show = !show">
				<text>{{list_test}}</text>
				<image src="../../../static/image/dorp.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="sort_box" :class="show_class===false ? 'hide' : show_class===true ? 'show' : ''">
			<view class="box_class">
				<view class="class_left">
					<view :class="{show_class_list:show_class_list == index}"  v-for="(item,index) in data_class" :key='item.id' @click="choice_class(index)">
						{{item.name}}
					</view>
				</view>
				<view class="class_right">
					<view class="right_list" v-for="(item,index) in data_class_list"  :key='item.id'>
						<image :src="item.icon" mode="scaleToFill"></image>
						<view class="">
							{{item.name}}
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="sort_box" :class="show_region===false ? 'hide' : show_region===true ? 'show' : ''">
			345
		</view>
		
		<view class="sort_box" :class="show===false ? 'hide' : show===true ? 'show' : ''">
			<view class="sort_list" v-for="(item,index) in sort" :key='index' @click="hook(index,item.name,item.order)">
				<view class="">
					{{item.title}}
				</view>
				<image v-show="item.chiose" src="../../../static/image/threeLayers/hook.png" mode="widthFix"></image>
			</view>
		</view>
		
		
		
		<view class="sort" v-show="show === true" @click="show = false">
		</view>
		<view class="product">
			<view class="guess_spot" v-for="(item,index) in data" @click="detailed('../scenery_detailed?id='+item.id)">
				<view class="spot_left">
					<image :src="item.image_url" mode=""></image>
				</view>
				<view class="spot_right">
					<view class="spot_one">
						{{item.name}}
					</view>
					<view class="spot_three">
						{{item.address}}
					</view>
					<view class="spot_two">
						<text>{{item.comment_grade}}分</text>
						<!-- <text>条点评</text> -->
					</view>
					
					<view class="spot_four">
						<view class="">
						</view>
						<view class="">
							<text>￥{{item.price}}</text>起
						</view>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import returns from '../../common/re_search.vue'
	export default {
		data() {
			return {
				data: '',
				show: false,
				show_class:false,
				show_class_list:0,
				data_class:'',
				data_class_list:'',
				show_region:false,
				type: '',
				id: '',
				list_test:'智能排序',
				sort: [{
						title: '价格最低',
						chiose: false,
						name: 'min_price',
						order: 'asc'
					},
					{
						title: '价格最高',
						chiose: false,
						name: 'min_price',
						order: 'desc'
					},
					{
						title: '销量最多',
						chiose: false,
						name: 'sales_count',
						order: 'asc'
					},
				]
			}
		},
		components: {
			returns
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			choice_class(index){ //分类选择
				this.data_class_list = this.data_class[index].items
				this.show_class_list = index
			},
			hook(index, name, order) {
				console.log(index)
				this.list_test = this.sort[index].title
				let data = {
					category_id: this.id,
					order_by_field:name,
					order_by_type:order
				}
			},
			detailed(url) {
				// function formatDate(dt) {
				//     var year = dt.getFullYear();
				//     var month = dt.getMonth() + 1;
				//     var date = dt.getDate();
				//     var hour = dt.getHours();
				//     var minute = dt.getMinutes();
				//     var second = dt.getSeconds();
				//     return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
				// }
				// function Test(time) {
				//     var t= time.slice(6, 19)
					
				//     var NewDtime = new Date(parseInt(t));
				//     return formatDate(NewDtime);
				// }
				// let aa = Test("/Date(1528953453022+0800)/");
				
				uni.navigateTo({
					url:url
				})
				
				
			}
		},
		onLoad(options) {
			
			this.id = options.id
			
				this.service.entire(this, 'get', this.service.api_root.subindex.scen_list, {
					category_id: options.id
				}, function(self, res) {
					console.log(res)
					self.data = res.data.data
				})
			

		}
	}
</script>

<style scoped>
	.content {
		position: relative;
		padding-top: 210rpx;
	}

	.content>>>.return {
		position: fixed;
		z-index: 999;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #fff;
	}

	.top_class {
		position: fixed;
		top: calc(var(--status-bar-height) + 105rpx);
		left: 0;
		background: #fff;
		width: 100%;

		z-index: 999;
		display: flex;
		justify-content: space-between;
	}

	.top_class .class_list {
		display: flex;
		align-items: center;
		padding: 30rpx 20rpx;
		font-size: 32rpx;

	}

	.top_class .class_list image {
		height: 20rpx;
		width: 20rpx;
		margin-left: 10rpx;
	}

	.sort {
		overflow: hidden;
		left: 0;
		top: 0;
		width: 100%;
		position: fixed;
		z-index: 888;
		background: rgba(0, 0, 0, 0.6);
		height: 100%;
	}

	.sort_box {
		transition: 0.3s;
		background: #fff;
		position: fixed;
		top: calc(var(--status-bar-height) + 205rpx);
		z-index: 900;
		/* padding: 0 20rpx; */
		box-sizing: border-box;
		width: 100%;
		font-size: 30rpx;

	}
	.sort_box .sort_list {
		height: 100rpx;
		padding: 0 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.sort_box .sort_list image {
		height: 38rpx;
		width: 38rpx;
	}

	.hide {
		transform: translateY(-100%);
	}

	.show {
		transform: translateY(0%);
	}
	
	.box_class{
		display: flex;
	}
	.box_class .class_left{
		
	}
	.box_class .class_left view{
		height: 88rpx;
		line-height: 88rpx;
		width: 210rpx;
		text-align: center;
		font-size: 28rpx;
		color: #6F6F6F;
		background: #F1F1F1;
	}
	.box_class .class_right{
		display: flex;
		justify-content: flex-start;
		/* align-items: center; */
		align-items: flex-start;
		flex-wrap: wrap;
		height: 100%;
	}
	.box_class .class_right image{
		width: 134rpx;
		height: 124rpx;
	}
	.box_class .class_right .right_list{
		text-align: center;
		font-size: 24rpx;
		width: 33.3%;
		height: 180rpx;
	}
	.show_class_list{
		color: #000000 !important;
		background: #fff !important;
	}
	.spot_box{
		padding: 0 20rpx;
		border-bottom: 4rpx solid #F5F5F5;
	}
	.guess_spot{
		display: flex;
		align-items: center;
		height: 200rpx;
		/* margin-bottom: 42rpx; */
		padding: 0 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.guess_spot:last-child{
		margin-bottom: 0rpx;
	}
	.guess_spot .spot_left{
		position: relative;
		margin-right: 24rpx;
	}
	.guess_spot .spot_left image{
		height: 168rpx;
		width: 230rpx;
	}
	.guess_spot .spot_right{
		flex-grow: 2;
		height: 100%;
		position: relative;
	}
	.guess_spot .spot_right .spot_one{
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 5rpx;
	}
	.guess_spot .spot_right .spot_two{
		color: #999999;
		font-size: 24rpx;
	}
	.guess_spot .spot_right .spot_two text:first-child{
		font-size: 28rpx;
		color: #1D9DFF;
		font-weight: bold;
		margin-right: 16rpx;
	}
	.guess_spot .spot_right .spot_three{
		color: #999999;
		font-size: 24rpx;
	}
	.guess_spot .spot_right .spot_four{
		
		position: absolute;
		right: 10rpx;
		bottom: 10rpx;
		
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(1){
		font-size: 24rpx;
		color: #666666;
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(1) text{
		font-size: 20rpx;
		color: #EC808D;
		border: 1rpx solid #EC808D;
		padding: 6rpx 8rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(1) text:nth-of-type(2){
		color: #00D3B3;
		border: 1rpx solid #00D3B3;
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(2){
		font-size: 24rpx;
	}
	.guess_spot .spot_right .spot_four view:nth-of-type(2) text{
		color: #FF431D;
		font-size: 36rpx;
		/* font-weight: bold; */
		margin-right: 10rpx;
	}
</style>
