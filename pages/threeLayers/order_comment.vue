<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="goods">
			<view class="shop">
				<image src="../../static/image/secondary/shop.png" mode=""></image>
				<view class="shop_name">
					店铺名
				</view>
				<image src="../../static/image/arrowright.png" mode=""></image>
			</view>
			<view class="goods_detail" v-for="(item,index) in data" :key="index">
				<image :src="item.images" mode=""></image>
				<view class="detail_right">
					<view class="words">
						{{item.title}}
					</view>
					<view class="amount">
						<view class="num">
							<!-- 两条装 -->
						</view>
						<view class="count">
							x{{item.buy_number}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="comment">
				整单评价
			</view>
			<view class="star">
				<view class="left">评分</view>
				<image :src="item.src" mode="" v-for="(item,index) in imgList" :key="index" @click="choose(index)"></image>
				<view :class="[active>=0?'col':'']">
					{{amount}}
				</view>
			</view>
			<!-- 晒图 -->
			<view class="pic">
				<view class="left">
					晒图
				</view>
				<view class="pics">
				
					<view class="pic_box"  v-for="(item,index) in image_list">
						<image :src="item" mode="aspectFill" :key='index' ></image>
						<image class="close" @click="deletes(index)" src="../../static/image/secondary/close2.png" mode=""></image>
					</view>
					<image src="../../static/image/addpic.png" mode="" @click="add_image"></image>
				
				</view>
			</view>
			<!-- 评论 -->
			<view class="say">
				<view class="left">
					评论
				</view>
				<textarea value="" placeholder="说点什么吧" v-model="content" />
				</view>
		</view>
		<view class="submit" @click="submit">
			发布
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		data() {
			return {
				title: '发布评价',
				index:'',
				goodsId:[], //商品id
				id:[], // 订单id
				rating:[], // 星级
				content:'', // textarea
				image_list:[], // 上传的图片
				images:[],
				imgList:[
					{src:'../../static/image/star1.png'},
					{src:'../../static/image/star1.png'},
					{src:'../../static/image/star1.png'},
					{src:'../../static/image/star1.png'},
					{src:'../../static/image/star1.png'}
				],
				active:-1, // 评分等级文字变色
				level:['1分','2分','3分','4分','5分'],
				amount:"没有评分",
				data:[],  // 商品列
				//details:{}
			}
		},
		methods:{
			choose(index){ // 选择星级
			this.rating = []
				for (var j = 0; j<this.imgList.length;j++) {
					this.imgList[j].src = '../../static/image/star1.png'
				}
				for (var i = 0; i<=index; i++) {
					this.imgList[i].src = '../../static/image/star2.png'
					this.amount = this.level[i]
					this.active = i
				}
				this.rating.push(index+1) ;
				console.log(this.rating);
			},
			submit(){ // 提交评论
				// 评论的内容转化为数组
				var cont = []
				cont.push(this.content)
				// 
				this.service.entire(this, 'post', this.service.api_root.threeLayers.goods_Comment, {
					goods_id:this.goodsId, //商品id
					id:this.id, // 订单id
					rating:this.rating, // 星级
					content: cont, // textarea
					images:this.images, // 上传的图片
				}, function(self, res) {
					console.log(res);
					if(res.code==0){
						uni.showToast({
							title: res.msg
						});
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/threeLayers/comment_success'
							})
						},2000)
					}	
				})
			},
			add_image(){ // 上传图片
				let that = this
				uni.chooseImage({
				    count: 1, //默认9
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						uni.uploadFile({
						    url: that.service.api_root.common.upload_image,
						    filePath: res.tempFilePaths[0],
						    name: 'file',
						    formData: {
						        token: uni.getStorageSync('token')
						    },
						    success: (ref) => {
								console.log(ref)
						        if(JSON.parse(ref.data).code == 0){
									// console.log(JSON.parse(ref.data))
									 that.image_list.push(res.tempFilePaths[0])
									 that.images.push(JSON.parse(ref.data).data.file)
								}
						    }
						});
				    }
				});
			},
			deletes(index){ //删除图片
				this.image_list.splice(index,1)	
				this.images.splice(index,1)
			}
		},
		onLoad(options) {
			this.id=options.id // 订单id
			this.index = options.index
			this.service.entire(this, 'post', this.service.api_root.subuser.threeuser.Order_detail, {
				id: options.id,
				token: uni.getStorageSync('token')
			}, function(self, res) {
				console.log(res.data.items[self.index]);
				self.data.push(res.data.items[self.index]);
				self.goodsId.push(self.data[0].goods_id) ; // 获取商品id
				console.log(self.goodsId);
				
				// console.log(self.data,self.id,self.goodsId);
			})
		},
		components: {
			returns
		}
	}
</script>

<style>
	page {
		background: #F1F1F1;
	}

	.goods {
		width: 710rpx;
		/* height: 274rpx; */
		margin: 20rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 20rpx;
		border-radius: 10rpx;
	}

	.goods .shop {
		width: 100%;
		height: 34rpx;
		display: flex;
		align-items: center;
		margin-bottom: 32rpx;
	}

	.goods .shop image:first-child {
		width: 38rpx;
		height: 34rpx;
		margin-right: 14rpx;
	}

	.goods .shop image:last-child {
		width: 12rpx;
		height: 25rpx;
		margin-left: 15rpx;
	}

	.goods .shop .shop_name {
		font-size: 28rpx;
		color: #333333;
	}

	.goods .goods_detail {
		width: 670rpx;
		height: 166rpx;
		display: flex;
	}

	.goods .goods_detail image {
		width: 240rpx;
		height: 166rpx;
		margin-right: 20rpx;
	}
	.goods .detail_right{
		width: 410rpx;
		
	}
	.goods .detail_right .words {
		color: #333333;
		width: 410rpx;
		font-size: 28rpx;
		 text-overflow: -o-ellipsis-lastline;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  display: -webkit-box;
		  -webkit-line-clamp: 2;
		  line-clamp: 2;
		  -webkit-box-orient: vertical;
	}

	.goods .detail_right .amount {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		margin-top: 15rpx;
		color: #999999;
	}
	.bottom{
		font-size: 28rpx;
		margin: 0 20rpx;
		width: 710rpx;
		box-sizing: border-box;
		padding: 0 22rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
	}
	.bottom .comment{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.star{
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		color: #666666;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.left{
		width: 100rpx;
	}
	.star image{
		width: 33rpx;
		height: 33rpx;
		margin-top: 4rpx;
		margin-right: 14rpx;
	}
	.pic{
		width: 100%;
		display: flex;
		align-items: center;
		padding: 38rpx 0;
		margin-bottom: 36rpx;
		color: #666666;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.pic image{
		width: 104rpx;
		height: 104rpx;
	}
	.pic .pics {
		display: flex;
		flex-wrap: wrap;
		width:596rpx ;
	}
	.pic .pics .pic_box{
		margin-right: 10rpx;
		position: relative;
	}
	.say{
		display: flex;
		color:#666666;
	}
	
	textarea{
		width: 100%;
		height: 162rpx;
		color: #CCCCCC;
		box-sizing: border-box;
		padding:0 6rpx 6rpx 6rpx;
		font-size: 28rpx;
	}
	.submit{
		width: 710rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 40rpx;
		position: fixed;
		bottom: 20rpx;
		left: 20rpx;
		
		background: #1D74FF;
	}
	.col{
		color: #1D9DFF;
	}
	.pic .pics .close{
		height: 40rpx;
		width: 40rpx;
		position: absolute;
		top: 5rpx;
		right: 5rpx;
	}
</style>
