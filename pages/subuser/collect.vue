<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<image src="/static/image/return.png" mode="widthFix" @click="returns()"></image>
			<text>收藏</text>
			<text>编辑</text>
		</view>
		<view class="collect_test">
			<view :class="{show:show == 0}" @click="show = 0">
				商品收藏
			</view>
			<view :class="{show:show == 1}" @click="show = 1">
				景点收藏
			</view>
		</view>
		<view class="collect_box">
			<view class="tab_list" v-for="(item,index) in data" :key='item.id'>
				<view class="tab_left">
					<label class="radio" @click="singleElection(index)"><radio value="r1" :checked="item.choice" /></label>
				</view>
				<view class="list_box">
					<view class="list_img">
						<image :src="item.images" mode="scaleToFill"></image>
					</view>
					<view class="tab_right">
						<!-- <view class="test_one">
							武汉-特色产品
						</view> -->
						<view class="test_two">
							{{item.title}}
						</view>
						<view class="test_three">
							<view class="test_left">
								￥{{item.price}}
							</view>
							
						</view>
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
				show:0,
				data:''
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.Userfavor,{
				page:1
			},function(self,res){
				console.log(res)
				self.data = res.data.data
			})
		}
	}
</script>

<style scoped>
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		font-size: 28rpx;
		color: #666666;
		font-weight: 400;
		display: inline-block;
	}
	.collect_test{
		display: flex;
		text-align: center;
		font-size: 28rpx;
		color: #333333;
		font-weight: 600;
	}
	.collect_test view{
		width: 50%;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 4rpx solid #fff;
	}
	.show{
		border-bottom-color: #1D74FF !important;
		color: #666666;
	}
	.tab_list {
		display: flex;
		align-items: center;
	}
	.tab_list .list_box{
		display: flex;
		
	}
	.tab_list .list_box image{
		height: 150rpx;
		width: 150rpx;
	}
</style>
