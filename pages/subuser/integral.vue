<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @click="returns()">
				<image src="../../static/image/return.png" mode="widthFix" ></image>
			</view>
			<text>积分明细</text>
			<text></text>
		</view>
		<view class="int_top">
			<image class="back" src="../../static/image/secondary/integral_back.png" mode="widthFix"></image>
			<view class="back_index">
				<view class="int_num">
					{{integral}}
				</view>
				<view class="int_tab">
					<view class="int_list" @click="shopp()">
						<image src="../../static/image/secondary/integral.png" mode="widthFix"></image>
						<view class="">
							积分商城
						</view>
					</view>
					<view class="int_list"  @click="jump('threeuser/int_detailed')">
						<image src="../../static/image/secondary/integral_detailed.png" mode="widthFix"></image>
						<view class="">
							积分明细
						</view>
					</view>
					<view class="int_list" @click="jump('threeuser/int_order_list')">
						<image src="../../static/image/secondary/integral_order.png" mode="widthFix"></image>
						<view class="">
							积分订单
						</view>
					</view>
					<view class="int_list" @click="jump('threeuser/int_explain')">
						<image src="../../static/image/secondary/integral_explain.png" mode="widthFix"></image>
						<view class="">
							积分说明
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="equity">
			<view class="equity_box">
				<image src="../../static/image/secondary/int_equity.png" mode="widthFix"></image>
				<text>积分兑权益</text>
			</view>
		</view>
		<view class="shopp">
			<view class="shopp_tab">
				<view class="shopp_list" v-for="(item,index) in data_list_1" :key='item.id' @click="jump('../subindex/threeindex/integral_details?id='+item.id)">
					<image :src="item.images" mode=""></image>
					<view class="list_one">
						{{item.title}}
					</view>
					<view class="list_two">
						{{item.money}}兑换
					</view>
					<view class="list_three">
						￥{{item.original_price}}
					</view>
				</view>
			</view>
		</view>
		<view class="equity">
			<view class="equity_box">
				<image src="../../static/image/secondary/int_shopp.png" mode="widthFix"></image>
				<text>积分兑商品</text>
			</view>
		</view>
		<view class="shopp">
			<view class="shopp_tab">
				<view class="shopp_list" v-for="(item,index) in data_list_2" :key='item.id' @click="jump('../subindex/threeindex/integral_details?id='+item.id)">
					<image :src="item.images" mode=""></image>
					<view class="list_one">
						{{item.title}}
					</view>
					<view class="list_two">
						{{item.money}}兑换
					</view>
					<view class="list_three">
						￥{{item.original_price}}
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
				integral:uni.getStorageSync('user').integral,
				data_list_1:'',
				data_list_2:'',
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			returns(){
				uni.switchTab({
				    url: '/pages/index/user'
				});
			},
			shopp(){
				uni.switchTab({
				    url: '/pages/index/integral'
				});
			}
		},
		
		onShow() {
			this.service.entire(this, 'get', this.service.api_root.subindex.int_list, {  //猜你喜欢
				is_home_recommended: 1
			}, function(self, res) {
				// console.log(res)
				let data = res.data.data
				for (let s of data) {
					let money = []
					if(Number(s.bt) != 0) money.push(Number(s.bt)+'版通')
					if(Number(s.credit) != 0) money.push(Number(s.credit)+'积分')
					if(Number(s.price) != 0) money.push('￥'+Number(s.price))
					s.money = money.join('+')
				}
				self.data_list_1 = data.slice(0,2)
				self.data_list_2 = data.slice(2,4)
				console.log(data)
				console.log(self.data_list_1)
				console.log(self.data_list_2)
			})
		}
	}
</script>

<style scoped>
	.top{
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		z-index: 998;
		background: #fff;
		height: 105rpx;
		padding: 0 44rpx;
		top: var(--status-bar-height);
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		width: 40rpx;
		display: inline-block;
	}
	.int_top{
		position: relative;
		color: #fff;
		width: 100%;
		height: 560rpx;
	}
	.int_top .back{
		width: 100%;
		position: absolute;
		z-index: 1;
	}
	.int_top .back_index{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 99;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.int_top .back_index .int_num{
		text-align: center;
		font-weight: bold;
		font-size: 100rpx;
		margin-top: 110rpx;
	}
	.int_top .back_index .int_tab{
		display: flex;
		margin-bottom: 60rpx;
		font-size: 24rpx;
		text-align: center;
	}
	.int_top .back_index .int_tab .int_list{
		width: 25%;
	}
	.int_top .back_index image{
		width: 62rpx;
		height: 62rpx;
	}
	.equity{
		margin-top: 40rpx;
		text-align: center;
	}
	.equity .equity_box{
		/* display: inline; */
		height: 100%;
		position: relative;
	}
	.equity .equity_box text{
		position: absolute;
		font-weight: bold;
		font-size: 40rpx;
		color: #fff;
		top: 50%;
		left: 50%;
		transform: translate(-30%,-50%);
	}
	.equity .equity_box image{
		height: 180rpx;
	}
	.shopp{
		margin-top: 40rpx;
	}
	.shopp .shopp_tab{
		display: flex;
		font-size: 28rpx;
		color: #333333;
		padding: 0 20rpx;
	}
	.shopp image{
		height: 224rpx;
		width: 348rpx;
	}
	.shopp .shopp_tab .shopp_list{
		text-align: center;
		width: 50%;
	}
	.shopp .shopp_tab .shopp_list .list_one{
		height: 76rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical; 
		-webkit-line-clamp:2; 
	}
	.shopp .shopp_tab .shopp_list .list_two{
		color: #FF431D;
		margin: 16rpx 0 10rpx 0;
	}
	.shopp .shopp_tab .shopp_list .list_three{
		color: #999999;
		font-size: 24rpx;
		text-decoration:line-through;
		font-weight: 300;
	}
	.shopp .shopp_tab .shopp_list view{
		text-align: left;
		font-weight: 600;
	}
</style>
