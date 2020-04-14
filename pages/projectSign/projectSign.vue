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
					<view class=""><text class="uni-h4">C20126153-A1</text></view>
					<view class=""><text class="uni-h4">深圳工业园改造工程-A</text></view>
					<view style="text-align: center;padding: 30rpx 0;">
						<text class="uni-h3">待签合同</text>
					</view>
					<view class="" style="text-align: center;">
						<text class="uni-h4" style="margin: 0 30rpx 0 0;">7月</text>
						<text class="uni-h4">15000.00元</text>
					</view>
					<view style="text-align: right;"><text>2019年7月</text></view>
					<view class="" style="overflow: auto;padding: 30rpx 0;"><button :loading="loading"> {{ loading ? "签订中...":"签订"}} </button></view>
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
			}
		},
		onLoad() {

		},
		methods: {
			back(){
				uni.navigateBack()
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
		background-size: 20px;
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
