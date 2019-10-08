<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		
		<returns :titles='title'></returns>
		<view class="ed_top">
			<view class=""  v-for="(item,index) in data" :key='item.id' :class="{show:show == index}" @click="show = index,data_list = data[index].items">
				{{item.name}}
			</view>
		</view>
		<view class="table">
			<view class="tab_list" v-for="(item,index) in data_list" :key='item.id' @click="jump('../threeLayers/allclass?id='+item.id+'&type=edition')">
				<image :src="item.icon" mode="widthFix"></image>
				<view class="">
					{{item.name}}
				</view>
			</view>
		</view>
		
		<view class="guess">
			<view class="guess_test">
				猜你喜欢
			</view>
			<view class="guess_box">
				<view class="box_list" v-for="(item,index) in data_guess" @click="jump('./edition_details?id='+item.id)">
					<image :src="item.images" mode="aspectFill"></image>
					<view class="list_one">
						{{item.title}}
					</view>
					<view class="list_two">
						{{item.price}}版通兑换
					</view>
					<view class="list_three">
						版通{{item.original_price}}
					</view>
				</view>
				
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
				title:'版通专享',
				show:0,
				data:'',
				data_list:'',
				data_guess:''
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onShow() {
			
			this.service.entire(this,'get',this.service.api_root.subindex.Category,{},function(self,res){
				
				self.data = res.data
				self.data.length = 2
				self.data_list = self.data[0].items
			})
			this.service.entire(this,'post',this.service.api_root.subindex.Category_list,{is_home_recommended:1},function(self,res){
				
				self.data_guess = res.data.data
				
			})
		}
	}
</script>

<style scoped>
	.top{
		box-shadow: none;
	}
	.ed_top{
		display: flex;
		text-align: center;
		background: #fff;
		box-shadow:0px 14rpx 20rpx 0px #eee;
	}
	.ed_top view{
		width: 50%;
		font-size: 28rpx;
		border-bottom: 6rpx solid #fff;
		padding: 22rpx 0;
	}
	.show{
		border-bottom-color: #1D9DFF !important;
	}
	.table {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		height: 302rpx;
		padding-bottom: 40rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}
	
	.table .tab_list {
		width: 20%;
		text-align: center;
		margin-top: 30rpx;
		font-size: 24rpx;
		color: #666;
	}
	
	.table .tab_list image {
		width: 80rpx;
		height: 80rpx;
	}
	.guess{
		padding: 20rpx 20rpx;
	}	
	.guess .guess_test{
		font-size: 40rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
	.guess .guess_box{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.guess .guess_box .box_list{
		width: 49%;
		font-size: 28rpx;
		margin-bottom: 20rpx;
	}
	.guess .guess_box .box_list .list_one{
		font-weight: bold;
		clolr: #333;
		margin-bottom: 20rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
		
	.guess .guess_box .box_list .list_two{
		color: #FF431D;
		
	}
	.guess .guess_box .box_list .list_three{
		color: #999999;
		font-size: 24rpx;
		text-decoration:line-through;
	}
	.guess .guess_box image{
		width: 100%;
		height: 224rpx;
		margin-bottom: 20rpx;
	}
</style>
