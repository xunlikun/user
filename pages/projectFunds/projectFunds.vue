<template>
	<view class="bg">
		<view class="advertising_wrap">
			
		</view>
		<view class="uni-padding-wrap">
			<view class="funds_wrap">
				<view class='close_fonds' @click="back">
					<i class='close icon-close' style="background-image: url(../../static/images/global/close.png);"></i>
				</view>
				<view class='info'>
					<view class=""><text class="uni-h4">{{contract.contractCode}}</text></view>
					<view class=""><text class="uni-h4">{{contract.contractTitle}}</text></view>
					<view style="text-align: center;padding: 30rpx 0;">
						<text class="uni-h3">月度工程款</text>
					</view>
					<view class="" style="text-align: center;">
						<text class="uni-h4" style="margin: 0 30rpx 0 0;">{{month}}月</text>
						<text class="uni-h4">{{mount}}元</text>
					</view>
					<view style="text-align: right;"><text>2020年{{month}}月</text></view>
					<view class="" style="overflow: auto;padding: 30rpx 0;"><button :loading="loading" @tap="getMount"> {{ loading ? "收款中...":"确认"}} </button></view>
					<view class="uni-h5" style="text-align: right;"><text>如有异议请与施工方联系</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				mount:'0.00',
				month:'',
				contract:{}
			}
		},
		onLoad(op) {
			this.month = op.month
			this.getDueInInfo(op)
			this.getContractInfo(op)
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			getDueInInfo(op){
						this.$http.post('/app/invoice/getContractAmount?contractId='+op.contractId + '&month='+op.month,{},{headers:{"content-type":"x-www-form-urlencoded"}}).then(res => {
							this.mount = res.data.data.toFixed(2)
						}).catch(err => {
							
						})
					},
			getContractInfo(op){
				this.$http.post('/app/contract/getContractDetail?id='+op.contractId,{},{headers:{"content-type":"x-www-form-urlencoded"}}).then(res => {
					this.contract = res.data.data
				}).catch(err => {
					
				})
			},
			getMount(){
				this.loading = true
			this.$http.post('/app/invoice/confirmAmount?contractId='+this.contract.id,{},{headers:{"content-type":"x-www-form-urlencoded"}}).then(res => {
				uni.showToast({
					icon:'none',
					title:res.data.msg,
					duration:1000
				})
				if(res.data.status == 200){
					this.back()
				}
				this.loading = false
			}).catch(err => {
					
			})
				
			}
		}
	}
</script>

<style>
	.advertising_wrap{
		height: 300rpx;
		background: red;
	}
	.funds_wrap{
		border: 1px solid #eee;
		position: relative;
		min-height: 600rpx;
		margin: 30rpx 0;
		padding: 30rpx;
	}
	.funds_wrap .close_fonds{
		float: right;
		height: 60rpx;
		line-height: 60rpx;
	}
	.funds_wrap .info{
		margin-top: 30rpx;
	}
	.icon-close{
		height: 60rpx;
		width: 60rpx;
		display: inline-block;
		background-size: 40rpx;
		background-position: center;
		background-repeat: no-repeat;
	}
	button {
		margin-top: 20rpx;
		height: 66rpx;
		width: 33%;
		line-height: 66rpx;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #f35;
		opacity: 0.8;
		float: right;
	}
</style>
