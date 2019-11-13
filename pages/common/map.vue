<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		// props:['latitude','longitude'],
		data() {
			return {
				title: 'map',
				latitude: 39.00835,
				longitude: 117.36029,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '/static/image/index/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '/static/image/index/location.png'
				}]
			}
		},
	}
</script>

<style>
	page{
		height: 100%;
		width: 100%;
	}
	.page-section,page-section-gap{
		height: 50%;
		width: 100%;
	}
	.page-body{
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
</style>
