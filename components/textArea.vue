<template>
	
		<textarea value="" placeholder="说点什么吧" v-model="content" @input="saying"/>
	
</template>

<script>
	export default {
		props:['index'],
		data(){
			return{
				content:'',
				send:''
			}
		},
		methods:{
			saying(){ //
				// console.log('a');
				if(this.send) clearTimeout(this.send)
				this.send = setTimeout(()=>{
					this.$emit('saying',{content:this.content,index:this.index})
				},200)
			},
		}
	}
</script>

<style>
	
	textarea{
		width: 590rpx;
		height: 162rpx;
		color: #CCCCCC;
		box-sizing: border-box;
		padding:0 6rpx 6rpx 6rpx;
		font-size: 28rpx;
	}
</style>
