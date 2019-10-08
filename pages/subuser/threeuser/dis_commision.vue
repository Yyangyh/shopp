<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title: '分销佣金',
			}
		},
		methods:{}
	}
</script>

<style scoped>
	
</style>
