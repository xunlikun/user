<template>
	<view class="s-page-wrapper is-100vh">
		<view class="is-33vh has-mgt-10" style="padding-bottom: 36px ;visibility: hidden;">
			<view class="is-flex is-column is-justify-center  is-align-center is-height-100" style="text-align:center">
				<image src="../../static/img/common/logo.jpg" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="content">
			<view class="has-mglr-10 ">
				<view class=" has-radius has-mgtb-10" style="padding-bottom: 26px ;">
					<input v-model="password" placeholder="输入新密码" class="is-input1"  @input="BindInput" data-val="password"/>
				</view>
				<view class=" registerbtn has-radius has-mgtb-20" style="padding-bottom: 26px ;">
					<button @tap="submite">确定</button>
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
				login: {
					loading: false,
					phone:"",
					password:""
				},
				password:'',
				mobile:'',
				msg:'',
				token:''
			};
		},
		onLoad(op) {
			this.mobile = op.mobile
			this.token = op.token
		},
		methods:{
			defaultHandlerLogin:function(){
				this.login.loading = true;
				setTimeout((e=>{
					this.login.loading = false;
				}),1500);
				console.log(JSON.stringify(this.login)); 
			},
			BindInput:function(e){
				var dataval = e.currentTarget.dataset.val;
				this.login[dataval] = e.detail.value; 
			},
			submite(){
				this.login.loading = true;
				this.$http.post('/app/user/resetUserInfo', {mobile: this.mobile, password:this.password},{headers:{'authorization':this.token}} ).then(res => {
					this.msg = res.data.msg
					this.$refs.popup.open()
					this.login.loading = false;
					if(res.data.status == 200){
						uni.navigateTo({
							url:'/pages/ucenter/login'
						})
					}
				}).catch(err => {
					
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
</style>
