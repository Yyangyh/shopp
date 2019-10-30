<template>
	<!-- 我的粉丝 -->
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="top_box">
			<view @click="show = 1">
				<view class="part" :class="{active:show == 1}">我的粉丝</view>
			</view>
			<view @click="show = 2">
				<view class="part" :class="{active:show == 2}">我的关注</view>
			</view>
			<view  @click="show = 3">
				<view class="part" :class="{active:show == 3}">我的访客</view>
			</view>
		</view>
		<view class="list">
			<view class="single_list" v-for="(item,index) in data">
				<view class="list_left">
					<image :src="item.user.avatar" mode="widthFix"></image>
					<view>{{item.user.user_name_view}}</view>
				</view>
				<view class="focus" @click="concern(item.for_uid,index)" v-if="item.is_follow===false">
					关注
				</view>
				<view class="focus" @click="concern(item.for_uid,index)" v-else>
					已关注
				</view>
			</view>
			
			
			
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		components:{
			returns
		},
		data(){
			return{
				title:"个人游记",
				data:'',
				show:1
			}
		},
		methods:{
			request_data(url){
				this.service.entire(this,'post',url,{},function(self,res){
					console.log(res)
					self.data = res.data
				})
			},
			concern(id,index){
				var that = this;
				that.service.entire(that,'post',that.service.api_root.substrategy.concern,{
					for_uid:id,
					token:uni.getStorageSync('token')
				},function(self,res){
					console.log(res)
					if(res.code == 0){
						// that.is_follow = !that.is_follow
						that.data[index].is_follow = !that.data[index].is_follow
						that.data = JSON.parse(JSON.stringify(that.data))
					}
				})
			}
		},
		onLoad(e) {
			this.show = e.type
			if(e.type == 1){
				this.request_data(this.service.api_root.substrategy.follow)//粉丝列表
			}else if(e.type == 2){
				this.request_data(this.service.api_root.substrategy.my_follow)//我的关注
			}else{
				this.request_data(this.service.api_root.substrategy.visit) //我的访客
			}
		},
		watch:{
			show(news,old){
				self.data = ''
				if(news == 1){
					this.request_data(this.service.api_root.substrategy.follow)//粉丝列表
				}else if(news == 2){
					this.request_data(this.service.api_root.substrategy.my_follow)//我的关注
				}else{
					this.request_data(this.service.api_root.substrategy.visit) //我的访客
				}
			}
		}
	}
</script>

<style>
	page{
		background: #F1F1F1;
	}
	.content{
		color: #666666;
	}
	.top_box{
		width: 100%;
		height: 120rpx;
		display: flex;
		background: #FFFFFF;
		margin-bottom: 6rpx;
	}
	.top_box>view{
		width: 33.33%;
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #666666;
		box-sizing: border-box;
		padding-top: 20rpx;
	}
	.num{
		font-size: 31rpx;
		padding-bottom:4rpx;
	}
	.part{
		font-size: 34rpx;
	}
	.single_list{
		width: 100%;
		height: 144rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3rpx;
	}
	.list_left{
		height: 144rpx;
		display: flex;
		align-items: center;
		font-size: 36rpx;
	}
	.list_left image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-right: 31rpx;
	}
	.focus{
		width: 107rpx;
		height: 44rpx;
		border-radius: 20rpx;
		font-size: 24rpx;
		line-height: 44rpx;
		text-align: center;
		background: #02A7F0;
		color: #FFFFFF;
	}
	.active{
		color: #1D9DFF;
	}
	.active2{
		color: #333333;
	}
</style>
