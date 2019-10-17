<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		/* height: 100%;
		width: 100%; */
		padding-top: var(--status-bar-height);
		background: #fff;
	}
	.content{
		padding-top: 105rpx;
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		top: 0;
		left: 0;
		z-index: 998;
		background: #1D9DFF;
		position: fixed;
	}
</style>
