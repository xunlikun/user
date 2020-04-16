<template>
	<view class="s-page-wrapper is-100vh">
		<view class="is-33vh has-mgt-10" style="padding-bottom: 36px ;visibility: hidden;">
			<view class="is-flex is-column is-justify-center  is-align-center is-height-100" style="text-align:center">
				<image src="../../static/img/common/logo.jpg" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="content">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 " style="padding-bottom: 26px ;">
					<input type="number" maxlength="11" v-model="login.loginName" placeholder="请输入手机号" class="is-input1 " @input="BindInput" data-val="loginName" />
				</view>
				<view class=" has-radius has-mgtb-10" style="padding-bottom: 26px ;">
					<input v-model="login.password" type="password" placeholder="请输入登录密码" class="is-input1"  @input="BindInput" data-val="password"/>
				</view>

				<view class=" loginbtn has-radius has-mgtb-20" style="padding-bottom: 26px ;">
					<button :loading="loading" @tap="defaultHandlerLogin"> {{ loading ? "登录中...":"登 录"}} </button>
				</view>
			</view>
		</view>
		<view class="is-20vh has-mgt-80 content">
			<navigator url="/pages/ucenter/forgot" class=" has-radius is-right is-grey has-mgr-20" hover-class="" style="float: right;">
				<text>忘记密码？</text><text class="is-blue">点击找回</text>
			</navigator>
			<navigator url="/pages/ucenter/register" class=" has-radius is-right is-grey has-mgr-20" hover-class="" style="float: left;">
				<text>去注册</text>
			</navigator>
		</view>
		<uni-popup ref="popup" type="center">
				<text style="background-color: #fff;padding: 40rpx 100rpx;border-radius: 8rpx;">账号或密码错误</text>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"
	export default {
		components:{uniPopup},
		data() {
			return {
				login: {
					loginName:"18557531926",
					password:"wqeqeqe"
				},
				loading: false,
			};
		},
		methods:{
			defaultHandlerLogin:function(){
				let that = this
				this.loading = true;
				this.$http.post('/app/user/login', this.login ).then(res => {
					
					if(res.data.status == 200){
						this.$store.commit('setToken',res.data.data)
						this.$store.dispatch('ACgetUserInfo').then(res => {
							uni.switchTab({
								url: '/pages/tabBar/index/index'
							});
							that.loading = false;
						})
					}else{
						this.loading = false;
						this.$refs.popup.open()
					}
					
				}).catch(err => {
					this.loading = false;
				})
			},
			BindInput:function(e){
				var dataval = e.currentTarget.dataset.val;
				this.login[dataval] = e.detail.value; 
			}
		}
	}
</script>

<style>
	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}

	.content {
		width: 85%;
		margin: 0 auto;
	}

	.loginbtn button {
		margin-top: 20rpx;
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #f35;
		opacity: 0.8;
	}

	button:after {
		border: 2rpx solid #f2f2f2;
	}

	.logoimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		padding: 12rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}
</style>
