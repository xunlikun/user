import Vue from 'vue'
export default {
	state:{
		hasLogin: uni.getStorageSync('hasLogin') ? JSON.parse(uni.getStorageSync('hasLogin')) : false,
		registerMobil:"",
		registerPassword:"",
		token:uni.getStorageSync('token') ? uni.getStorageSync('token') : "",
		userInfo:uni.getStorageSync('userInfo') ? uni.getStorageSync('userInfo') : ""
	},
	getters:{
		getRegisterPassword(state){
			return state.registerPassword
		},
		getRegisterMobil(state){
			return state.registerMobil
		},
		getToken(state){
			return state.token
		},
		getUserInfo(state){
			return state.userInfo
		},
		getHasLogin(state){
			return state.hasLogin
		},
	},
	mutations:{
		setRegisterPassword(state,password){
			state.registerPassword = password
		},
		setRegisterMobile(state,mobile){
			state.registerMobil = mobile
		},
		setToken(state,token){
			state.token = token
			uni.setStorageSync('token', token);
		},
		setUserInfo(state,info){
			state.userInfo = info
			uni.setStorageSync('userInfo', info);
		},
		setHasLogin(state,boole){
			state.hasLogin = boole
			uni.setStorageSync('hasLogin', boole);
			if(!boole){
				state.userInfo = ''
				state.token = ''
			}
		},
	},
	actions:{
		ACgetUserInfo: async function({
			commit,
			state
		}){
			return new Promise((resolve,reject) => {
				Vue.prototype.$http.post('/app/user/getUserInfo',{} ).then(res => {
									if(res.data.status == 200){
										commit('setUserInfo',res.data.data)
										commit('setHasLogin',true)
										resolve(res)
									}
									}).catch(err => {
										reject(err)
									})
			})
		},
	}
}