<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		data() {
			return {
				title:'个人游记',
			}
		},
		components:{
			returns
		},
		
	}
</script>

<style scoped>
	
</style>
