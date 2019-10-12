import Vue from 'vue'
import App from './App'
import service from './service.js'
import common from './common.js'
import store from './store/index.js'  
Vue.prototype.$store = store  
Vue.prototype.service = service
Vue.prototype.common = common




Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
