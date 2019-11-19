# uni-app注意事项总结
## 书写注意事项
1.onLoad()传参，参数必须是data内的参数，否则APP内无效


## APP的热更新
需要使用plus.runtime.getProperty（）来获取manifest.json的版本信息
uni.downloadFile（）下载完成后，plus.runtime.install（）安装，force: true 是强制安装
	
