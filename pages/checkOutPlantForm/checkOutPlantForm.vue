<template>
	<view class="content">
		<view class="header">
			<view class="" style="padding: 30px 0 0 20px;">
				<text style="font-size: 18px;font-weight: 600;">{{from_.from == "order" ? "订单详情" : "创建订单成功"}}</text>
			</view>
			<view class="" style="padding: 20px 0 0 20px;display: flex;flex-direction: column;">
				<text style="font-weight: 600;">创建时间: {{data.createDate}}</text>
				<text style="font-weight: 600;">订单编号: {{data.id}}</text>
			</view>
		</view>
		<view class="body">
			<view class="body-item" v-for="(item,i) in data.orderItemDTOList">
				<view class='img'>
					<image :src="item.imagePath" mode="aspectFit"></image>
				</view>
				<view class="info">
					<view class="info-msg">
						<text>{{item.title}}</text>
						<text>数量:{{item.count}}</text>
					</view>
					<view class="price">
						<text>￥{{item.totalPrice}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="confirm contents" style="margin-top: 60px;" v-if="data.paymentStatus == 0 || data.paymentStatus == 1">
			<button @tap="confirm">{{data.paymentStatus == 0 ? "付款" : "再次付款"}}</button>
		</view>
		<uni-popup ref="popup" type="bottom">
				<view class="" style="height: 60vh;background-color: #fff;text-align: center;">
					<view class="order-header" style="line-height: 40px;border-bottom:1px solid #efe">
						<text style="font-size: 16px;">付款详情</text>
					</view>
					<view class="amount" style="line-height: 100px;">
						<text style="font-size: 18px;">￥</text><text style="font-size: 30px;font-weight: 600;">{{data.totalPrice}}</text>
					</view>
					<view class="">
						<view class="order-info" style="display: flex;flex-direction: row;color: #666;justify-content: space-between;padding: 10px 8px;border-bottom:1px solid #efe">
							<text>订单信息</text>
							<text>{{data.id}}</text>
						</view>
						<view class="pay-method" style="display: flex;flex-direction: row;color: #666;justify-content: space-between;padding: 10px 8px;border-bottom:1px solid #efe">
							<text>付款方式</text>
							<text>余额付款</text>
						</view>
					</view>
					<view class="" style="text-align: center;margin-top: 30px;">
						<button @tap="pay" :loading='loading' style="width: 85%;margin: 0 auto;">{{loading ? "付款中" : "确认付款"}}</button>
					</view>
				</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"
	export default {
		components:{uniPopup},
		data() {
			return {
				from_:{},
				loading:false,
				data:uni.getStorageSync('currentCheckOutOrder') ? uni.getStorageSync('currentCheckOutOrder') : {}
			}
		},
		onLoad(op) {
			this.from_ = op
		},
		methods: {
			confirm() {
				this.$refs.popup.open()
			},
			pay(){
				this.loading = true
				this.$http.post('/app/order/balancePayment?id='+this.data.id).then(res => {
					if(res.data.status == 200){
						uni.showToast({
							duration: 1000
						});
						uni.removeStorageSync('currentCheckOutOrder')
						setTimeout(() => {
							uni.navigateBack()
						},1000)
					}else{
						uni.showToast({
							icon:'none',
							title:res.data.msg,
							duration: 2000
						});
					}
					this.$refs.popup.close()
					this.loading = false
					
				}).catch(err => {
					this.$refs.popup.close()
					this.loading = false
					uni.removeStorageSync('currentCheckOutOrder')
				})
			}
		},
	}
</script>

<style>
	.body-item{
		padding: 16rpx 16rpx;
	}
	.header{
		background-color: orange;
		height: 150px;
	}
	.header text{
		color:#fff;
	}
	.body{
		margin: 20px 40rpx;
		border: 1px solid #eee;
	}
	.img > image{
		display: block;
		float: left;
		width: 140rpx;
		height: 140rpx;
	}
	.info{
		display: flex;
		justify-content: space-between;
	}
	.info .price{
		display: flex;
		align-items: flex-end;
	}
	.info-msg{
		display: flex;
		flex-direction: column;
	}
	.contents {
		width: 85%;
		margin: 0 auto;
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
		background: orange;
		opacity: 0.8;
	}
	
	button:after {
		border: 2rpx solid #f2f2f2;
	}
</style>
