<template>
	<view class="container">
		<view class='input-wrap'>
			<text>姓</text>
			<input type="text" v-model="formData.firstName">
		</view>
		<view class='input-wrap'>
			<text>名</text>
			<input type="text" v-model="formData.lastName">
		</view>
		<view class='input-wrap'>
			<text>手机号码</text>
			<input type="number" v-model="formData.telephone">
		</view>
		<view class='input-wrap' @tap="showSlectAddress">
			<text>所在地</text>
			<input type="text"  v-model="formData.tempAddress">
		</view>
		<view class='input-wrap'>
			<text>邮政编码</text>
			<input v-model="formData.postCode" type="number">
		</view>
		<view class='input-wrap'>
			<text>详细地址</text>
			<textarea v-model="formData.address" style="height: 100rpx;width: 100%;" type="text" />
		</view>
		<view class="content loginbtn has-radius has-mgtb-20" style="padding-bottom: 26px ;">
			<button :loading="loading" @tap="defaultHandlerSubmit"> {{ loading ? "修改中...":"修改"}} </button>
		</view>
		<uni-popup ref="popup" type="center">
				<text style="background-color: #fff;padding: 40rpx 100rpx;border-radius: 8rpx;">{{msg}}</text>
		</uni-popup>
		<selectAddress ref='selectAddress' @selectAddress="successSelectAddress"></selectAddress>
	</view>
</template>

<script>
	import selectAddress from '@/components/yixuan-selectAddress/yixuan-selectAddress.vue'
	import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"
	export default{
		components:{selectAddress,uniPopup},
		props:['data'],
		data() {
			return {
				msg:"",
				loading:false,
				formData:{
					firstName:'',
					lastName:'',
					tempAddress:'',
					country:'',
					province:'',
					city:'',
					area:'',
					telephone:'',
					postCode:'',
					address:''
				}
			}
		},
		onLoad(op) {
			this.$http.post('/app/userAddress/findById?id='+op.id).then(res => {
				this.formData = res.data.data
				this.formData.tempAddress = res.data.data.province + ',' + res.data.data.city
			}).catch(err => {
				
			})
		},
		methods: {
			defaultHandlerSubmit(){
				this.loading = true
				console.log(this.formData)
				this.$http.post('/app/userAddress/addAddress',this.formData).then(res => {
					this.msg = res.data.msg
					this.$refs.popup.open()
					this.loading = false
				}).catch(err => {
					this.msg = res.data.msg
					this.$refs.popup.open()
					this.loading = false
				})
			},
			showSlectAddress(){
				this.$refs.selectAddress.show()
			},
			successSelectAddress(value) {
				this.formData.tempAddress = value
				let address = value.split(',')
				this.formData.country = '中国'
				if(address.length == 2){
					this.formData.city = address[0]
					this.formData.area = address[1]
				}else{
					this.formData.province = address[0]
					this.formData.city = address[1]
					this.formData.area = address[2]
				}
				
			}
		},
	}
</script>

<style>
	.content {
		width: 85%;
		margin: 66rpx auto 0 auto;
	}
	.container {
		padding: 0 16rpx;
		/* background-color: #F2f2f2; */
	}
	.input-wrap{
		padding: 16rpx 0;
	}
	text{
		color: #666;
	}
	input,textarea{
		border-bottom: 1px solid #eee;
	}
	button {
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
