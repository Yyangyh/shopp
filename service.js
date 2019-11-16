


// const api = ''
const api ='http://wx.huanqiutongmall.com'



let api_img = 'http://wx.huanqiutongmall.com'

const api_root = {
	common:{
		Region: api+'/api/Region/index',//省市地区
		Auth: api+'/api/user/Auth',//授权
		Favor: api+'/api/goods/Favor',//用户商品收藏/取消（拼团无效）
		upload_image: api+'/api/travels/upload_image',//图片上传
		WeatchAppLogin: api+'/api/user/WeatchAppLogin',//微信app授权登陆
		jssdk_sign: api+'/api/user/jssdk_sign',//微信h5_SDK
		version: api+'/api/user/version',//版本检查
		version_wgt: api+'/static/__UNI__B01F932.wgt',//wgt热更新下载地址
	},
	reg:{
		reg: api+'/api/user/Register',//注册
		WlVerifySend: api+'/api/user/WlVerifySend',//获取注册验证码
		RegisterAgreement: api+'/api/user/RegisterAgreement',//注册协议
		ForgetPwd: api+'/api/user/ForgetPwd',//忘记密码
	},
	login:{
		login: api+'/api/user/Login',//账号密码登录
		MobileLogin: api+'/api/user/MobileLogin',//手机验证码登录
		WeatchInfo: api+'/api/user/WeatchInfo',//获取微信用户信息
		logout: api+'/api/user/logout',//获取微信用户信息
		
	},
	index:{
		banner:api+'/api/banner/index',//轮播图
		Redgroupsgoods:api+'/api/groupgoods/Redgroupsgoods',//首页推荐拼团商品
		int_category:api+'/api/creditshop/category',//积分商城分类列表
		btscale:api+'/api/index/btscale',//版通比例
		travels_list:api+'/api/travels/list',//攻略游记首页列表
		Region_lists:api+'/api/Region/lists',//获取地区字母排序
		Traveslcard_list:api+'/api/Travelscard/list',//旅游卡列表
		
	},
	user:{
		userCenter:api+'/api/User/Center',//用户中心
		UserWallet:api+'/api/User/UserWallet',//用户钱包余额
		UserBt:api+'/api/User/UserBt',//用户版通余额
	},
	subindex:{
		Detail:api+'/api/goods/Detail',//商品详情
		goods_Category:api+'/api/goods/Category',//特色分类
		SpecType:api+'/api/goods/SpecType',//商品规格
		Save:api+'/api/cart/Save',//加入购物车
		goods_list:api+'/api/seckill/goods_list',//获取限时抢购商品列表
		time_list:api+'/api/seckill/time_list',//获取限时抢购商品时间段
		grou_lists:api+'/api/groupgoods/lists',//拼团列表
		grou_Detail:api+'/api/groupgoods/Detail',//拼团商品详情
		SpecDetail:api+'/api/goods/SpecDetail',//规格信息处理结果	
		scen_Category:api+'/api/Scenicspot/Category',//景点分类
		scen_list:api+'/api/Scenicspot/ScenicspotList',//景点列表（搜索-分类）
		scen_Detail:api+'/api/Scenicspot/Detail',//景点详情
		scen_ConfirmDetail:api+'/api/Ctripspot/ConfirmDetail',//景点下单确定表单+时间数据+资源详情
		scen_Favor:api+'/api/scenicspot/Favor',//景点收藏/取消
		shop:api+'/api/merch/shop', // 店铺页面
		threeindex:{
			grou_Confirm:api+'/api/groupgoods/Confirm',//确认订单-拼团商品
			ConfirmDetail:api+'/api/groupgoods/ConfirmDetail',//拼团下订单数据确认
			my_group:api+'/api/groupgoods/GroupsGoodsTeamsDetail',//拼团详情
			my_pay:api+'/api/groupgoods/pay',//拼团支付订单
			my_teams:api+'/api/groupgoods/teams',//组团列表
			OrderDetail:api+'/api/groupgoods/OrderDetail',//拼团订单详情
			int_detail:api+'/api/creditshop/detail',//积分商品详情
			int_order:api+'/api/creditshop/ConfirmDetail',//积分商品下单数据确认
			int_Confirm:api+'/api/creditshop/Confirm',//积分商品订单确认(生成订单号)
			int_pay:api+'/api/creditshop/pay',//积分商品订单支付
			comment:api+'/api/creditshop/Comment', // 积分订单评论列表
			comments:api+'/api/creditshop/Comments' // 积分订单评论
			
		},
		Category:api+'/api/editionpass/Category',//版通商品分类
		Category_list:api+'/api/editionpass/goodsList',//版通商品商品列表（搜索-分类）
		org_category:api+'/api/Originality/Category',//文创产品品分类
		org_category_list:api+'/api/Originality/goodsList',//文创商品列表
		int_list:api+'/api/creditshop/lists',//积分商品列表
		index_searcht:api+'/api/index/search',//首页搜索
	},
	subuser:{
		Useraddress:api+'/api/Useraddress/Index',//地址列表
		add_Save:api+'/api/Useraddress/Save',//地址保存
		add_Delete:api+'/api/Useraddress/Delete',//删除地址
		add_Detail:api+'/api/Useraddress/Detail',//地址详情
		add_SetDefault:api+'/api/Useraddress/SetDefault',//默认地址设置
		order_Index:api+'/api/order/Index',//我的订单
		Delete_order:api+'/api/order/Delete',//订单删除
		grou_order:api+'/api/groupgoods/orders',//拼团订单列表
		UserAvatar:api+'/api/User/UserAvatarUpload',//更改头像
		UserIntegral:api+'/api/user/UserIntegral',//用户积分
		dis_index:api+'/api/Distribution/index',//分销首页
		Userfavor:api+'/api/user/Userfavor',//商品收藏列表
		Userspotfavor:api+'/api/user/Userspotfavor',//景点收藏列表
		UserfavorDelete:api+'/api/user/UserfavorDelete',//商品收藏列表删除
		UserspotfavorDelete:api+'/api/user/UserspotfavorDelete',//景点收藏删除
		merchUpload:api+'/api/merch/Upload',//证件图片上传
		merchSubmit:api+'/api/merch/Submit',//提交商户申请
		merchRegister:api+'/api/merch/Register',//个人申请信息获取（检查申请状态）
		message:api+'/api/user/message',//系统通知
		Answer:api+'/api/user/Answer',//反馈
		scen_orders:api+'/api/Ctripspot/orders',//景点订单列表
		getSign:api+'/api/user/getSign',//获取签到记录
		sign:api+'/api/user/sign',//签到
		CouponList:api+'/api/coupon/CouponList',//全部优惠券列表
		CouponUserList:api+'/api/coupon/CouponUserList',//用户优惠券列表
		Receive:api+'/api/coupon/Receive',//领取优惠券
		Reg_name:api+'/api/identitycard/Reg',//实名申请
		Reg_Detail:api+'/api/identitycard/Detail',//实名认证申请状态
		AftersaleLists:api+'/api/order/AftersaleLists',//退货退款申请列表
		answerList:api+'/api/user/answerList',//反馈列表
		group_AftersaleLists:api+'/api/groupgoods/AftersaleLists',//拼团退货退款申请列表
		Ctripspot_comment:api+'/api/Ctripspot/Comments', // 景点订单评论
		Ctripspot_comment_list:api+'/api/Ctripspot/Comment', // 景点评论列表
		
		threeuser:{
			UserSave:api+'/api/User/Save',//更改昵称
			Order_detail:api+'/api/order/Detail',//更改昵称
			int_orders:api+'/api/creditshop/orders',//积分订单列表
			int_OrderDetail:api+'/api/creditshop/OrderDetail',//积分订单详情
			scen_orders_Detail:api+'/api/Ctripspot/Detail',//景点订单详情
			chargebackinfo:api+'/api/Ctripspot/chargebackinfo',//景点退单检查
			dis_team:api+'/api/Distribution/team',//分销团队
			dis_profit:api+'/api/Distribution/profit',//分销佣金
			dis_order:api+'/api/Distribution/order',//分销订单
			UserBtInfo:api+'/api/User/UserBtInfo',//版通明细
			Cancel:api+'/api/order/Cancel',//商城订单取消
			Collect:api+'/api/order/Collect',//商城订单收货
			AftersaleCancel:api+'/api/order/AftersaleCancel',//商城退货申请取消
			Delivery:api+'/api/order/Delivery',//商城用户退货（申请退款退货通过后）
			cred_Cancel:api+'/api/creditshop/Cancel',//积分订单取消
			cred_Collect:api+'/api/creditshop/Collect',//积分订单收货
			cred_Delete:api+'/api/creditshop/Delete',//积分订单删除
			getCreditShopMsg:api+'/api/user/getCreditShopMsg',//积分说明
			group_Collect:api+'/api/groupgoods/Collect',//拼团订单收货
			getBtMsg:api+'/api/user/getBtMsg',//关于版通
			transferBt:api+'/api/user/transferBt',//赠送版通
			Level_lists:api+'/api/userLevel/lists',//会员等级列表
			Level_Confirm:api+'/api/userLevel/Confirm',//会员确认订单
			Level_pay:api+'/api/userLevel/pay',//支付会员等级
			group_AftersaleCancel:api+'/api/groupgoods/AftersaleCancel',//拼团订单退货取消
			group_Aftersale:api+'/api/groupgoods/Aftersale',//拼团申请售后订单详情
			
		},
		
		
	},
	threeLayers:{
		goodsList:api+'/api/goods/goodsList',//特色产品列表（搜索-分类）
		Index:api+'/api/cart/Index',//购物车列表
		Stock:api+'/api/cart/Stock',//更新购物车购买数量
		Delete:api+'/api/cart/Delete',//购物车删除商品
		buy_Index:api+'/api/buy/Index',//下订单数据确认
		Add:api+'/api/buy/Add',//订单确定（生成订单号）
		Pay:api+'/api/order/Pay',//支付订单
		scen_Confirm:api+'/api/Ctripspot/Confirm',//创建景点订单
		scen_Confirm_Detail:api+'/api/Ctripspot/Detail',//景点订单支付信息
		scen_pay:api+'/api/Ctripspot/pay',//景点订单支付
		goods_Comment:api+'/api/goods/Comments',  //商品评论
		goood_Comment_List:api+'/api/goods/Comment',
		Aftersale:api+'/api/order/Aftersale',//申请退货订单详情
		Create:api+'/api/order/Create',//提交退款退货（已收货）/仅退款（未签收）申请
		express:api+'/api/order/express',//商城订单物流信息
		VerifyCheck: api+'/api/user/VerifyCheck',//验证原手机号验证码
		VerifySend: api+'/api/user/VerifySend',//验证码发送(手机修改)
		AccountsUpdate: api+'/api/user/AccountsUpdate',//手机号修改
		LoginPwdUpdate: api+'/api/user/LoginPwdUpdate',//登录密码修改
		Originality:api+'/api/Originality/goodsList',// 店铺文创商品列表
		group_Aftersale:api+'/api/groupgoods/Aftersale',// 拼团申请售后订单详情
		group_Create:api+'/api/groupgoods/Create',// 拼团申请售后创建退货
		
	},
	// 游记攻略
	substrategy:{
		list:api+'/api/travels/person',//游记攻略----个人游记
		add_travels:api+'/api/travels/add_travels',//发表个人游记
		visit:api+'/api/travels/visit',//访客列表
		my_follow:api+'/api/travels/my_follow',//关注列表
		follow:api+'/api/travels/follow',//粉丝列表
		concern:api+'/api/travels/concern',//关注
		star:api+'/api/travels/star' ,//点赞
		comment:api+'/api/travels/comment', //评论游记
		comment_list:api+'/api/travels/comment_list' ,// 获取评论
	},
	global:{
		card_detail:api+'/api/travelscard/detail',//旅游卡详情
		card_buy:api+'/api/travelscard/buy',//获取支付方式
		card_pay:api+'/api/travelscard/pay',//支付
		mytravelscard:api+'/api/travelscard/mytravelscard',//我的卡包
		mytravelscarddetail:api+'/api/travelscard/mytravelscarddetail',//我的卡包门票
		use_ctrip:api+'/api/Travelscard/use_ctrip',//门票使用
		introdu:api+'/api/travels/person_desc', // 提交个人简介
		

	}
}
const entire = function(self,type,url,data,func){
	
	if(uni.getStorageSync('token') != '') data.token = uni.getStorageSync('token')
	uni.request({
		url:url,
		data:data,
		method:type,
		header:{'X-Requested-With':'xmlhttprequest'},
		success(res) {
			let res_list = res.data
			if(res_list.code == -400){
				if(uni.getStorageSync('token') != ''){
					uni.showToast({
						icon:'none',
						title:'登录失效，请重新登录'
					})
					setTimeout(function(){
						uni.redirectTo({
							url:'/pages/login/login'
						})
					},1500)
					return
				}
				uni.removeStorageSync('token')
				// self.$store.commit('logout')
				
				
				setTimeout(function(){
					uni.redirectTo({
						url:'/pages/login/login'
					})
				},100)
			}else{
				func(self,res_list)
			}
		}
	})
}
const load_entire = function(self,type,url,data,func){
	uni.showLoading({
	    title: '加载中',
		mask:true
	});
	let times = setTimeout(function(){
		uni.hideLoading()
		uni.showToast({
			icon:'none',
			title:'网络请求错误，请稍后再试'
		})
		return
	},10000)
	uni.request({
		url:url,
		data:data,
		method:type,
		header:{'X-Requested-With':'xmlhttprequest'},
		success(res) {
			uni.hideLoading()
			clearTimeout(times)
			let res_list = res.data
			if(res_list.code == 401){
				uni.removeStorageSync('token')
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}else{
				func(self,res_list)
			}
		}
	})
}





export default{
	api,
	api_img,
	api_root,
	entire,
	load_entire,
	
}