


const api = ''
// const api = 'http://wx.huanqiutongmall.com'



let api_img = 'http://wx.huanqiutongmall.com'

const api_root = {
	common:{
		Region: api+'/api/Region/index',//省市地区
		Auth: api+'/api/user/Auth',//授权
		Favor: api+'/api/goods/Favor',//用户商品收藏/取消（拼团无效）
		
	},
	reg:{
		reg: api+'/api/user/Register',//注册
		WlVerifySend: api+'/api/user/WlVerifySend',//获取注册验证码
		
	},
	login:{
		login: api+'/api/user/Login',//账号密码登录
		MobileLogin: api+'/api/user/MobileLogin',//手机验证码登录
		WeatchInfo: api+'/api/user/WeatchInfo',//获取微信用户信息
		
	},
	index:{
		banner:api+'/api/banner/index',//轮播图
		Redgroupsgoods:api+'/api/groupgoods/Redgroupsgoods',//首页推荐拼团商品
		int_category:api+'/api/creditshop/category',//积分商城分类列表
		
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
		scen_list:api+'/api/Scenicspot/ScenicspotList',//景点列表
		scen_redspot:api+'/api/scenicspot/redspot',//景点猜你喜欢	
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
			
		},
		Category:api+'/api/editionpass/Category',//版通商品分类
		Category_list:api+'/api/editionpass/goodsList',//版通商品商品列表（搜索-分类）
		org_category:api+'/api/Originality/Category',//文创产品品分类
		org_category_list:api+'/api/Originality/goodsList',//文创商品列表
		int_list:api+'/api/creditshop/lists',//积分商品列表
	},
	subuser:{
		Useraddress:api+'/api/Useraddress/Index',//地址列表
		add_Save:api+'/api/Useraddress/Save',//地址保存
		add_Delete:api+'/api/Useraddress/Delete',//删除地址
		add_Detail:api+'/api/Useraddress/Detail',//地址详情
		add_SetDefault:api+'/api/Useraddress/SetDefault',//默认地址设置
		order_Index:api+'/api/order/Index',//我的订单
		grou_order:api+'/api/groupgoods/orders',//拼团订单列表
		UserAvatar:api+'/api/User/UserAvatarUpload',//更改头像
		threeuser:{
			UserSave:api+'/api/User/Save',//更改昵称
			Order_detail:api+'/api/order/Detail',//更改昵称
		},
		
		
	},
	threeLayers:{
		goodsList:api+'/api/goods/goodsList',//特色产品分类
		Index:api+'/api/cart/Index',//购物车列表
		Stock:api+'/api/cart/Stock',//更新购物车购买数量
		Delete:api+'/api/cart/Delete',//购物车删除商品
		buy_Index:api+'/api/buy/Index',//下订单数据确认
		Add:api+'/api/buy/Add',//订单确定（生成订单号）
		Pay:api+'/api/order/Pay',//支付订单
		
		
	}
}
const entire = function(self,type,url,data,func){
	uni.request({
		url:url,
		data:data,
		method:type,
		header:{'X-Requested-With':'xmlhttprequest'},
		success(res) {
			let res_list = res.data
			if(res_list.code == -400){
				uni.removeStorageSync('token')
				
				uni.reLaunch({
					url:'/pages/login/login'
				})
				uni.showToast({
					icon:'none',
					title:'登录失效，请重新登录'
				})
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