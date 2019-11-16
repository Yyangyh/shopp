<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS  
			this.service.entire(this, 'get', this.service.api_root.common.version, {}, function(self, res) {  //APP 热更新
				
				plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {   //这里用 plus.runtime.getProperty() 来获取相关信息。
				    if (widgetInfo.version != res.data.version) {
				    	uni.showModal({
				    	    title: '提示',
				    	    content: '检测到新版本，是否确定更新？',
				    	    success: function (res) {
				    	        if (res.confirm) {
				    				uni.showLoading({
				    				    title: '下载中',
										mask:true
				    				});
				    	           uni.downloadFile({
				    	           	url: self.service.api_root.common.version_wgt,
				    	           	success: (downloadResult) => {
				    	           		uni.showLoading({
				    	           		    title: '安装中',
											mask:true
				    	           		});
				    	           		if (downloadResult.statusCode === 200) {
				    	           			plus.runtime.install(downloadResult.tempFilePath, {
				    	           				force: true //强制安装
				    	           			}, function() {
				    							uni.hideLoading();
				    	           				plus.runtime.restart();
				    	           			}, function(e) {
				    							uni.hideLoading();
				    	           				console.log(e)
				    	           
				    	           			});
				    	           		}
				    	           	}
				    	           });
				    	        } else if (res.cancel) {
				    	            console.log('用户点击取消');
				    				
				    	        }
				    	    }
				    	});
				    }
				});
				
				
				
				
			})
			// #endif
		},
		onLoad: function() {



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

	.content {
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

	.top_enlarge {
		display: flex;
		align-items: center;
		height: 100%;
		width: 90rpx;
	}
</style>
