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
					<input v-model="mobile" type="number" maxlength="11" placeholder="请输入手机号" class="is-input1 " />
				</view>
				<view class=" has-mgtb-10 " style="padding-bottom: 26px ;">
					<input v-model="auth" type="number" maxlength="6" placeholder="短信验证码" class="is-input1 " />
					<view class="codeimg" @tap="getsmscode">{{smsbtn.text}}</view>
				</view>

				<view class=" loginbtn has-radius has-mgtb-20" style="padding-bottom: 26px ;">
					<navigator class=" has-radius is-center is-grey " hover-class="">
						<button :loading="login.loading" @tap="defaultHandlerLogin"> {{ login.loading ? "校验中...":"下一步"}} </button>
					</navigator>
				</view>
			</view>
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
				msg:'',
				login: {
					loading: false,
					phone:"",
					password:""
				},
				smsbtn: {
					text: '获取验证码',
					status: false,
					codeTime: 60
				},
				mobile:'',
				auth:'',
				timerId: null,
			};
		},
		methods:{
			defaultHandlerLogin:function(){
				this.login.loading = true;
				this.$http.post('/app/user/checkVerificationCode', {mobile: this.mobile, verificationCode: this.auth,type:'resetPassWord'} ).then(res => {
					this.loading = false
					if(res.data.status == 200){
						uni.navigateTo({
						    url: '/pages/ucenter/reset?mobile=' + this.mobile + '&token=' + res.data.data
						});
						this.login.loading = false;
					}else{
						this.msg = res.data.msg
						this.$refs.popup.open()
						this.login.loading = false;
					}
				}).catch(err => {
					this.login.loading = false;
				})
			},
			BindInput:function(e){
				var dataval = e.currentTarget.dataset.val;
				this.login[dataval] = e.detail.value; 
			},
			getsmscode: function() {
				if(!this.mobile){
					this.msg = '请输入手机号'
					this.$refs.popup.open()
					return
				}
				if (this.smsbtn.status == true ) {
					console.log('message：', "别着急！短信已经发送了~");
					return false;
				}
				
				this.$http.post('/app/user/sendVerificationCode', {mobile: this.mobile,type:'resetPassWord'} ).then(res => {
				
				}).catch(err => {
				
				})
				
				this.smsbtn.status = true; // 这段代码其实应该加在你request请求 短信发送成功后 
				this.timerId = setInterval(() => {
						var codeTime = this.smsbtn.codeTime;
						codeTime--;
						this.smsbtn.codeTime = codeTime;
						this.smsbtn.text = codeTime + "S";
						if (codeTime < 1) {
							clearInterval(this.timerId);
							this.smsbtn.text = "重新获取";
							this.smsbtn.codeTime = 60;
							this.smsbtn.status = false;
						}
					},
					1000);
				return false;
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
	.codeimg {
		position: absolute;
		font-size: 28rpx;
		right: 12%;
		z-index: 10;
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
</style>
