# uni-app注意事项总结
## APP的热更新
需要使用plus.runtime.getProperty（）来获取manifest.json的版本信息
uni.downloadFile（）下载完成后，plus.runtime.install（）安装，force: true 是强制安装
例：
				`plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {   //这里用 	    plus.runtime.getProperty() 来获取相关信息。
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
				});`
