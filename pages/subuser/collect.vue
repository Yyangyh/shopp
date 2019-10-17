<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<image src="/static/image/return.png" mode="widthFix" @click="returns()"></image>
			<text>收藏</text>
			<text class="show_test" v-if="show_test == true" @click="show_test = !show_test">编辑</text>
			<text class="show_test" v-else @click="show_test = !show_test">完成</text>
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
				<view class="tab_left" v-show="show_test == false">
					<label class="radio" @click="singleElection(index)"><radio value="r1" :checked="item.choice" /></label>
				</view>
				<view class="list_box" @click="jump(type,item.goods_id)">
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
								￥<text>{{item.price}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="collect_bottom" v-if="show_test == false">
			<view class="left">
				<label class="radio" @click="whole()"><radio value="r1"  :checked="whole_choice"/>全选</label>
			</view>
			<view class="right" @click="cut()">
				删除
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
				data:'',
				show_test:true,
				whole_choice:false
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
			
			singleElection(index){  //单选
				this.data[index].choice = !this.data[index].choice
				if(this.data[index].choice == true){ //全选
					for (let s of this.data) {
						if(s.choice == false) return
					}
					this.whole_choice = true
				}
				if(this.data[index].choice == false){ //非全选
					for (let s of this.data) {
						if(s.choice == false) this.whole_choice = false
					}
				}
			},
			whole(){ //全选
				this.whole_choice = !this.whole_choice
				for (let s of this.data) {
					s.choice = this.whole_choice
				}
			},
			jump(type,id){
				if(type == 3){
					uni.navigateTo({
						url:'../subindex/edition_details?id='+id
					})
				}else{
					uni.navigateTo({
						url:'../subindex/product_detailed?id='+id
					})
				}
			},
			cut(){
				let all = []
				for (let s of this.data) {
					if(s.choice == true)all.push(s.id)
				}
				this.service.entire(this,'post',this.service.api_root.subuser.UserfavorDelete,{
					id:all.join(',')
				},function(self,res){
					if(res.code == 0){
						let data = self.data
						for(let i=data.length-1;i>=0;i--){  //倒序删除
							if(data[i].choice == true){
								data.splice(i,1);
							}
						}
						
					}
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.Userfavor,{
				page:1
			},function(self,res){
				let list = res.data.data
				for (let s of list) {
					s.choice = false
				}
				self.data =list
				console.log(list)
			})
		}
	}
</script>

<style scoped>
	.content{
		padding-bottom: 120rpx;
	}
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: var(--status-bar-height);
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
	.top .show_test{
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
		margin-bottom: 20rpx;
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
		padding-left: 30rpx;
		margin-right: 30rpx;
		margin-bottom: 20rpx;
	}
	.tab_list .list_box{
		display: flex;
		width: 100%;
		height: 154rpx;
		border-radius:20rpx;
		padding: 14rpx 28rpx;
		box-shadow: 2rpx 0rpx 10rpx #eee;
	}
	.tab_list .list_box image{
		height: 150rpx;
		width: 150rpx;
		margin-right: 30rpx;
	}
	.tab_list .list_box .tab_right{
		flex-grow: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.tab_list .list_box .tab_right .test_two{
		font-size: 30rpx;
		color: #333333;
		/* font-weight: 500; */
		overflow: hidden;
		text-overflow: ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical; 
		-webkit-line-clamp:2; 
	}
	.tab_list .list_box .tab_right .test_three{
		display: flex;
		justify-content: flex-end;
		margin-right: 20rpx;
	}
	.tab_list .list_box .tab_right .test_three .test_left{
		color: #FF431D;
		font-size: 26rpx;
	}
	.tab_list .list_box .tab_right .test_three .test_left text{
		font-size: 36rpx;
		font-weight: 600;
	}
	.collect_bottom {
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 2rpx solid #ECECEC;
		font-size: 34rpx;
		color: #666666;
		padding: 0 20rpx 0 30rpx;
		box-sizing: border-box;
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.collect_bottom .right{
		height: 90rpx;
		line-height: 90rpx;
		font-size: 36rpx;
		width: 224rpx;
		color: #fff;
		background: #1D74FF;
		text-align: center;
		border-radius: 90rpx;
	}
</style>
