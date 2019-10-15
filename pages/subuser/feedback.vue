<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='titles'></returns>
		<!-- <view class="fe_top">
			<view class="fe_test">类型</view>
			<view class="tab_box">
				<view class="tab_list">
					交通信息
				</view>
				<view class="tab_list">
					景点入口
				</view>
				<view class="tab_list">
					推荐玩法
				</view>
				<view class="tab_list">
					交通信息
				</view>
				<view class="tab_list">
					景点入口
				</view>
				<view class="tab_list">
					推荐玩法
				</view>
			</view>
		</view> -->
		<view class="log">
			<text>姓名</text>
			<input type="text" v-model="name" placeholder="输入姓名"/>
		</view>
		<view class="log">
			<text>电话</text>
			<input type="text" v-model="tel" placeholder="输入电话"/>
		</view>
		<view class="log">
			<text>标题</text>
			<input type="text" v-model="title" placeholder="输入标题"/>
		</view>
		<view class="fe_bottom">
			<view class="fe_test">
				内容
			</view>
			<view class="textarea">
				<textarea placeholder-style="color:#999999" v-model="content" placeholder="输入内容"/>
			</view>
		</view>
		<button @click="submit()">提交</button>
	</view>
</template>

<script>
	import service from '../../service.js'
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			// Answer
			return {
				titles:'反馈',
				name:'',
				tel:'',
				title:'',
				content:''
			}
		},
		methods:{
			submit(){
				this.service.entire(this,'post',this.service.api_root.subuser.Answer,{
					name:this.name,
					tel:this.tel,
					title:this.title,
					content:this.content,
				},function(self,res){
					if(res.code == 0)
					{
						uni.showToast({
							icon:'none',
							title:res.msg
						})
						setTimeout(function(){
							uni.switchTab({
								url:'/pages/index/user'
							})
						},1500)
					} else {
						uni.showToast({
							icon:'none',
							title:res.msg
						})
					}
					
				})
			}
		},
		
		onShow() {
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
	}
	.fe_top{
		margin: 0 46rpx;
		
	}
	.fe_test{
		color: #333333;
		font-size: 34rpx;
		padding: 0 6rpx;
		margin: 36rpx 0 42rpx 0;
		font-weight: bold;
	}
	.fe_top .tab_box{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.fe_top .tab_box .tab_list{
		width: 196rpx;
		height: 66rpx;
		line-height: 66rpx;
		color: #1D9DFF;
		background: #E8F5FF;
		border-radius: 33rpx;
		text-align: center;
		margin-bottom: 34rpx;
		font-size: 30rpx;
	}
	.fe_bottom{
		margin: 0 40rpx;
	}
	.textarea{
		background: #F2F2F2;
		padding: 42rpx 34rpx;
	}
	button{
		background: #1D74FF;
		color: #FFFFFF;
		height: 88rpx;
		line-height: 88rpx;
		border-radius: 44rpx;
		font-size: 34rpx;
		/* width: 84%; */
		margin:80rpx 36rpx;
	}
	.log{
		width: 100%;
		/* height: 90rpx; */
		box-sizing: border-box;
		margin: 20rpx 0;
		padding: 0 40rpx;
		/* background: #F2F2F2; */
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
	}
	.log text{
		color: #333333;
		font-size: 17px;
		padding: 0 3px;
		margin: 18px 0 21px 0;
		font-weight: bold;
		margin-bottom:20rpx;
	}
	.log input{
		width: 100%;
		height: 90rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		background: #F2F2F2;
		border-radius: 10rpx;
	}
</style>
