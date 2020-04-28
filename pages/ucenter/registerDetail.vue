<template>
	<view class="s-page-wrapper is-100vh">
		<view class="is-33vh has-mgt-10" style="padding-bottom: 36px ;visibility: hidden;">
			<view class="is-flex is-column is-justify-center  is-align-center is-height-100" style="text-align:center">
				<image src="../../static/img/common/logo.jpg" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="registercontent">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 " style="padding-bottom: 26px ;">
					<input v-model="data.UserEntityDTO.entityName" type="number" maxlength="11" placeholder="请输入姓名" class="is-input1 " />
				</view>
				<view class=" has-mgtb-10 " style="padding-bottom: 26px ;">
					<input v-model="data.idNumber" type="number" placeholder="请输入身份证号" class="is-input1 " />
				</view>
				<view class=" registerbtn has-radius has-mgtb-20" style="padding-bottom: 26px ;">
					<button :loading='loading' @tap="defaultHandlerRegister">注册</button>
				</view>
			</view>
		</view>
		<view class="is-20vh has-mgt-80" style="margin-left:30px ;">
			<navigator url="#" class=" has-radius is-center is-grey " hover-class="">
				<text>注册即表示同意</text><text class="is-blue">《用户协议》</text>
			</navigator>
		</view>
		<uni-popup ref="popup" type="center">
				<text style="background-color: #fff;padding: 40rpx 100rpx;border-radius: 8rpx;">{{msg}}</text>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"
	export default {
		components:{uniPopup},
		data() {
			return {
				data:{
					"msg":'',
					"loading":false,
				    "idNumber":"",
				    "mobile":"",
					"password":"",
				    "UserEntityDTO":{
				        "entityName":"",
				        "entityType":"personal"
				    }
				}
			};
		},
		methods: {
			defaultHandlerRegister: function() {
				this.loading = true
				this.data.mobile = this.$store.getters.getRegisterMobil
				this.data.password = this.$store.getters.getRegisterPassword
				this.data.UserEntityDTO.UserEntityAttrDTO = []
				this.$http.post('/app/user/registerByMobile', this.data ).then(res => {
					this.loading = false
					if(res.data.status == 200){
						uni.navigateTo({
							url: '/pages/ucenter/login'
						});
					}else{
						this.msg = res.data.msg
						this.$refs.popup.open()
					}
				}).catch(err => {
					this.loading = false
				})
			}

		}
	}
</script>

<style>
	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}

	.registercontent {
		width: 85%;
		margin: 0 auto;
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

	.iconfont {
		position: absolute;
		font-size: 40rpx;
		right: 12%;
		z-index: 999;
		width: 105rpx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44rpx;
		border-bottom-right-radius: 44rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.codeimg {
		position: absolute;
		font-size: 28rpx;
		right: 12%;
		z-index: 999;
		width: 200rpx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44rpx;
		border-bottom-right-radius: 44rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.registerbtn button {
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
</style>
