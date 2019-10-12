import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		token: uni.getStorageSync('token'),
	},
	mutations: {
		login(state, token) {

			state.hasLogin = true;
			state.token = token;
			uni.setStorage({//缓存用户登陆状态
			    key: 'token',  
			    data: token  
			}) 
		 
			// console.log(state.token);
		},
		logout(state) {
			state.hasLogin = false;
			state.token = '';
			uni.removeStorage({  
                key: 'token'  
            })
			uni.removeStorage({
			    key: 'hasLogin'  
			})
		}
	},
	actions: {
	
	}
})

export default store
