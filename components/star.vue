<template>
	<view class="star">
		<image :src="item.src" mode="" v-for="(item,index) in imgList" :key="index" @click="choose(index)"></image>
		<view :class="[active>=0?'col':'']">
			{{amount}}
		</view>
	</view>
</template>

<script>
	export default {
		props:['index'],
		data(){
			return{
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
			}
		},
		methods:{
			choose(index){ // 选择星级
			// this.rating = []
				for (var j = 0; j<this.imgList.length;j++) {
					this.imgList[j].src = '../../static/image/star1.png'
				}
				for (var i = 0; i<=index; i++) {
					this.imgList[i].src = '../../static/image/star2.png'
					this.amount = this.level[i]
					this.active = i
				}
				// this.rating.push(index+1) ;
				// console.log(this.rating);
				this.$emit('star',{rating:index+1,index:this.index})
			}
		}
	}
</script>

<style>
	.star{
		display: flex;
	}
	 image{
		width: 33rpx;
		height: 33rpx;
		padding-top: 4rpx;
		padding-right: 14rpx;
	}
</style>
