<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS  
			this.service.entire(this,'get',this.service.api_root.common.version,{},function(self,res){
				console.log(res)
				let current_version = plus.runtime.version
				uni.showToast({
					icon:'none',
					title:plus.runtime.version
				})
				if(current_version != res.data.version){
					console.log(self.service.api_root.common.version_wgt)
					  uni.downloadFile({  
						url: self.service.api_root.common.version_wgt,  
						success: (downloadResult) => {  
							console.log(downloadResult)
							if (downloadResult.statusCode === 200) {  
								plus.runtime.install(downloadResult.tempFilePath, {  
									force: true  
								}, function() {  
									console.log('install success...');
									setTimeout(function(){
										uni.showToast({
											icon:'none',
											title:'install success...'
										})
									},3000) 
									plus.runtime.restart();  
								}, function(e) {
									console.log(e)
									console.error('install fail...');  
									setTimeout(function(){
										uni.showToast({
											icon:'none',
											title:'install fail...'
										})
									},3000)
								});  
							}  
						}  
					});  
				}
			})
			// #endif
		},
		onLoad:function(){
			

			
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
	.mask_black {
		position: fixed;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 1);
		opacity: 0.3;
		top: 0;
		left: 0;
		z-index: 998;
	}
	.top_enlarge{
		display: flex;
		align-items: center;
		height: 100%;
		width: 90rpx;
	}
</style>
