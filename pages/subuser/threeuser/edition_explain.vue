<template>
	<view class="content">
		<image class="int_back" src="../../../static/image/threeLayers/int_detailed.png" mode="widthFix"></image>
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<image src="/static/image/threeLayers/return1.png" mode="widthFix" @click="returns()"></image>
			<text>关于版通</text>
			<text></text>
		</view>
		<view class="integral">
			<view class="">
				一、深圳文交所
			</view>
			<view class="">
				1、国家级、全国性、全资国有
					
			</view>
			<view class="">
				- 2009年由中央领导倡导,2010年3月国家九部委联合下文，2010年4月正式注册成立；由深圳广播电影电视集团、深圳报业集团、深圳文博会公司联合控股，由深圳广播电影电视集团主办和运营，是全资国有的国家级文化产权交易和投融资综合服务平台。
			</view>
			<view class="">
				2、文化艺术品版权区块链应用基地成立
			</view>
			<view class="">
				- 在国家信息中心信息化和产业发展部指导、指示下，深圳文化产权交易所 “数字创意创新发展中心“（文化艺术品版权区块链应用基地），于2018 年8月成立并于9月份在深圳文化产权交易所正式落地运营。
			</view>
			<view class="">
				3、大数据国家工程实验室深圳文交所区块链应用中心成立
			</view>
			<view class="">
				- 为了更好地解决文化艺术品版权溯源、鉴真、确权、确价和流通等问题，进一步落实 “区块链应用基地“的成立初衷，深圳文化产权交易所与“大数据系统计算技术国家工程实验室”共同成立了“大数据国家工程实验室深圳文交所区块链应用中心”也同步挂牌亮相。
			</view>
			<view class="">
				4、中央支持建设深圳建设中国特色社会主义先行示范区
			</view>
			
			<view class="">
				- 2019年8月18日，新华社受权发布《中共中央 国务院关于支持深圳建设中国特色社会主义先行示范区的意见》提出，支持在深圳开展数字货币研究与移动支付的创新应用;支持深圳大力发展数字文化产业和创意文化产业，加强粤港澳数字创意产业合作;推动文化和旅游融合发展。
			</view>
			<view class="">
				5、深圳文交所政策汇编
			</view>
			<view class="">
				- 内容详见《深圳文化产权交易所政策文件汇编》
			</view>
			<view class="">
				- 2010年03月（九部委发文）
			</view>
			<view class="">
				- 2010年04月（注册成立运营）
			</view>
			<view class="">
				- 2012年11月（通过部级联席会议验收）
			</view>
			<view class="">
				- 2017年04月（第一个通过整顿交易市场验收）
			</view>
			<view class="">
				- 2017年12月（获批金融服务中心）
			</view>
			<view class="">
				- 2018年01月（获拍卖经营证书）
			</view>
			<view class="">
				- 2018年09月（区块链应用基地和中心运营）
			</view>
			<view class="">
				- 2018年11月（文版通正式上线运营）
			</view>
			
		</view>
		
	</view>
</template>

<script>
	
	export default{
		
		data() {
			return {
				
			}
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
		},
	}
</script>

<style scoped>
	page{
		background: #F1F1F1;
		padding-bottom: 40rpx;
	}
	.status_bar{
		/* background: rgba(0,0,0,0); */
	}
	.content{
		padding-top: 0;
	}
	.int_back{
		position: absolute;
		z-index: 0;
		width: 100%;
	}
	.top{
		position: relative;
		height: 105rpx;
		padding: 0 44rpx;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #fff;
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		width: 40rpx;
		display: inline-block;
	}
	.integral{
		position: relative;
		margin: 0 20rpx;
		padding: 60rpx 40rpx;
		font-size: 24rpx;
		background: #fff;
		border-radius: 10rpx;
		color: #333333;
	}
	.integral view{
		margin-bottom: 24rpx;
	}
	
</style>