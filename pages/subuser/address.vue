<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<image src="../../static/image/return.png" mode="widthFix" @click="returns()"></image>
			<text>收货地址</text>
			<text @click="jump('./addto')">新增</text>
		</view>
		<view class="list" v-for="(item,index) in data" :key='item.id'>
			<view class="name">
				<view class="info">
					<text>{{item.name}}</text>
					<text>{{item.tel}}</text>
				</view>
				<view class="address">
					{{item.province_name}}{{item.city_name}}{{item.county_name}}{{item.address}}
				</view>
			</view>
			<view class="operating">
				 <radio-group>
					 <label class="radio" @click="defaults(item.id,index)">
					 	 <radio :checked='1 == item.is_default'>设为默认</radio>
					 </label>
				 </radio-group>
				
				<view class="operat">
					<view class="write">
						<image src="../../static/image/threeLayers/write.png" mode="widthFix"></image>
						<text @click="jump('./addto?id='+item.id)">编写</text>
					</view>
					<view class="delete" @click="deletes(item.id,index)">
						<image src="../../static/image/threeLayers/delete.png" mode="widthFix"></image>
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				data:''
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			returns(){
				this.common.returns(this)
			},
			deletes(id,index){//删除
				uni.showModal({
					title: '确定删除此地址？',
					content: '删除地址，此操作不可恢复',
					confirmText:'删除',
					success: function (res) {
						if (res.confirm) {
							this.service.entire(this,'get',this.service.api_root.subuser.add_Delete,{
								token:uni.getStorageSync('token'),
								id:id
							},function(self,res){
								if(res.code == 0){
									self.data.splice(index,1)
								}
							})
						}
					}
				});
				
			},
			defaults(id,index){  //设为默认
				for (let s of this.data) {
					s.is_default = 0
				}
				this.service.entire(this,'get',this.service.api_root.subuser.add_SetDefault,{
					token:uni.getStorageSync('token'),
					id:id
				},function(self,res){
					if(res.code == 0){
						self.data[index].is_default = 1
					}
				})
			}
			
		},
		onShow() {
			this.service.entire(this,'get',this.service.api_root.subuser.Useraddress,{token:uni.getStorageSync('token')},function(self,res){
				console.log(res)
				self.data = res.data
			})
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 100%;
		/* padding-top: 50rpx; */
		background: #FFFFFF;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.top{
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		height: 105rpx;
		width:100%;
		padding: 0 40rpx;
		box-sizing: border-box;
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
		color: #666666;
		font-size: 28rpx;
		font-weight: 400;
		display: inline-block;
	}
	.list{
		width: 90%;
		/* height: 240rpx; */
		margin-top: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0rpx 10rpx 20rpx #eee;
	}
	.name{
		width: 90%;
		margin: 0 5%;
		padding: 32rpx 0;
		border-bottom: 2rpx solid #F4F4F4;
	}
	.info{
		width: 100%;
		font-size: 30rpx;
		color: #333333;
	}
	.info text:first-of-type{
		margin-right: 40rpx;
	}
	.address{
		width: 100%;
		/* margin-top: 10rpx; */
		font-size: 28rpx;
		color: #666666;
	}
	.operating{
		width: 90%;
		height: 80rpx;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.radio{
		color: #333333;
		font-size: 28rpx;
	}
	.operat{
		/* width: 40%;	 */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.write,.delete{
		
		color: #999999;
		font-size: 28rpx;
		margin-right: 50rpx;
		/* 
		display: flex;
		justify-content: center;
		align-items: center; */
	}
	.write image,.delete image{
		width: 36rpx;
		height: 36rpx;
		margin-right: 10rpx;
	}
</style>
