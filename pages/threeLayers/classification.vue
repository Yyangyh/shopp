<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<returns></returns>
		<view class="top_class">
			<view class="class_list">
				<text>全部分类</text>
				<image src="../../static/image/upper.png" mode="widthFix"></image>
			</view>
			<view class="class_list">
				<text>全部地区</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
			<view class="class_list">
				<text>智能排序</text>
				<image src="../../static/image/dorp.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="list_box">
			<view class="list_left">
				<view class="" v-for="(item,index) in data" :key='item.id' :class="{show:show == index}" @click="choice(index)">
					{{item.name}}
				</view>
			</view>
			<view class="list_right">
				<view class="list_commodity" @click="jump('./allclass?id='+item.id+'&pid='+item.pid)" v-for="item in data_list.items" :key='item.id'>
					<image :src="item.icon" mode="aspectFill"></image>
					<view class="">
						{{item.name}}
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/re_search.vue'
	export default{
		data() {
			return {
				show:0,
				data:'',
				data_list:''
			}
		},
		components:{
			returns
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			choice(index){
				this.show = index
				this.data_list = this.data[index]
			}
		},
		onShow() {
			this.show = 0
			this.service.entire(this,'get',this.service.api_root.subindex.goods_Category,{},function(self,res){
				console.log(res)
				self.data = res.data
				self.data_list = res.data[0]
			})
		}
	}
</script>

<style scoped>
	.content{
		
	}
	.show{
		background: #fff;
	}
	.top_class{
		display: flex;
		justify-content: space-between;
	}
	.top_class .class_list{
		display: flex;
		align-items: center;
		padding: 30rpx 20rpx;
		font-size: 32rpx;
		
	}
	.top_class .class_list image{
		height: 20rpx;
		width: 20rpx;
		margin-left: 10rpx;
	}
	.list_box{
		display: flex;
	}
	.list_box .list_left{
		width: 30%;
		font-size: 32rpx;
		color: #6F6F6F;
		text-align: center;
		background: #F1F1F1;
	}
	.list_box .list_left view{
		padding: 20rpx 0;
	}
	.list_box .list_right{
		width: 70%;
		font-size: 28rpx;
		text-align: center;
		display: flex;
		/* justify-content: space-around; */
		flex-wrap: wrap;
		align-content: flex-start;
	}
	.list_box .list_right .list_commodity{
		height: 160rpx;
		width: 33.3%;
		margin-bottom: 20rpx;
	}
	.list_box .list_right image{
		width: 120rpx;
		height: 120rpx;
	}
</style>
