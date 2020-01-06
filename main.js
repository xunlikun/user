import Vue from 'vue'
import App from './App'

import store from './store'
import {http} from '@/utils/index'

http.setConfig((config) => { /* config 为默认全局配置*/
    config.baseUrl = 'http://www.bbb.cn'; /* 根域名 */
    config.header = {
        a: 1,
        b: 2
    }
    return config
})

http.interceptor.request((config, cancel) => { /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
    config.header = {
        a: 1,
        ...config.header
    }
    if (!token) { /* 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行*/
        cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
    }
    return config;
})

http.interceptor.response((response) => { /* 必须return response*/
    console.log(response);
    return response;
})

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$http = http
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()