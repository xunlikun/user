import Vue from 'vue'
import Vuex from 'vuex'

import user from './modlue/user.js'
import product from './modlue/product.js'
import contract from './modlue/contract.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		...user.state,
		...product.state,
		...contract.state,
		// hasLogin: uni.getStorageSync('hasLogin') ? JSON.parse(uni.getStorageSync('hasLogin')) : false,
		loginProvider: "",
		openid: null,
		maskStatus:false,
		// registerMobil:"",
		// registerPassword:"",
		// token:uni.getStorageSync('token') ? uni.getStorageSync('token') : "",
		// userInfo:uni.getStorageSync('userInfo') ? uni.getStorageSync('userInfo') : ""
	},
	getters:{
		...user.getters,
		...product.getters,
		...contract.getters,
		// getRegisterPassword(state){
		// 	return state.registerPassword
		// },
		// getRegisterMobil(state){
		// 	return state.registerMobil
		// },
		// getToken(state){
		// 	return state.token
		// },
		// getUserInfo(state){
		// 	return state.userInfo
		// },
		// getHasLogin(state){
		// 	return state.hasLogin
		// },
		getMaskStatus(state){
			return state.maskStatus
		}
	},
	mutations: {
		...user.mutations,
		...product.mutations,
		...contract.mutations,
		// setRegisterPassword(state,password){
		// 	state.registerPassword = password
		// },
		// setRegisterMobile(state,mobile){
		// 	state.registerMobil = mobile
		// },
		// setToken(state,token){
		// 	state.token = token
		// 	uni.setStorageSync('token', token);
		// },
		// setUserInfo(state,info){
		// 	state.userInfo = info
		// 	uni.setStorageSync('userInfo', info);
		// },
		// setHasLogin(state,boole){
		// 	state.hasLogin = boole
		// 	uni.setStorageSync('hasLogin', boole);
		// 	if(!boole){
		// 		state.userInfo = ''
		// 		state.token = ''
		// 	}
		// },
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setMaskStatus(state,boole){
			state.maskStatus = boole
		}
	},
	actions: {
		...user.actions,
		...product.actions,
		...contract.actions,
		// ACgetUserInfo: async function({
		// 	commit,
		// 	state
		// }){
		// 	return new Promise((resolve,reject) => {
		// 		Vue.prototype.$http.post('/app/user/getUserInfo',{} ).then(res => {
		// 							if(res.data.status == 200){
		// 								commit('setUserInfo',res.data.data)
		// 								commit('setHasLogin',true)
		// 								resolve(res)
		// 							}
		// 							}).catch(err => {
		// 								reject(err)
		// 							})
		// 	})
		// },
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	}
})

export default store