<template >
	<view class="">
		<view class="orderList">
			<template v-for="(item,i) in datas">
				<view :key='i' style="background-color: #fff;margin: 16rpx 0;padding: 0 16rpx;">
					<view class="order-title" style="line-height: 40px;display: flex;flex-direction: row;justify-content: space-between;">
						<text>{{item.createDate}}</text>
						<text>{{item.paymentStatus == 0 ? "待付款" : item.paymentStatus == 1 ? "付款失败" : "已付款"}}</text>
					</view>
					<view class="child-order" v-for="(items,s) in item.orderItemDTOList" :key='s' @tap='pay(item)'>
						<view class='img'>
							<image style="margin-right: 16px;" :src="items.imagePath" mode="aspectFit"></image>
						</view>
						<view class="info">
							<view class="info-title">
								<text>{{items.title}}</text>
							</view>
							<view class="info-price" style="display: flex;justify-content: space-between;line-height: 40px !important;">
								<view class="price">
									<text style="color: #e54d42;font-size: 14px;">￥</text><text style="color: #e54d42;font-size: 14px;">{{items.totalPrice}}</text>
								</view>
								<view class="">
									<text>数量:</text><text>{{items.count}}</text>
								</view>
							</view>
						</view>
						
					</view>
					<view class="caculate">
						<view class="" v-if="item.paymentStatus == 0">
			<!-- 				<view class="cancel">
								<text>取消订货</text>
							</view> -->
							<view class="pay-now" @tap="pay(item)">
								<text>立即付款</text>
							</view>
						</view>
						<view class="" v-if="item.paymentStatus == 1">
					<!-- 		<view class="cancel">
								<text>取消订货</text>
							</view> -->
							<view class="pay-now" @tap="pay(item)">
								<text>再次付款</text>
							</view>
						</view>
						<view class="" v-if="item.paymentStatus == 2">
			<!-- 				<view class="cancel">
								<text>取消订货</text>
							</view> -->
				<!-- 			<view class="ck-wl">
								<text>查看物流</text>
							</view> -->
						</view>
					</view>
				</view>
			</template>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:['type','datas','trigerLoading'],
		data() {
		    return {
		        
		    }
		},
		mounted() {
			console.log(this.datas)
		},
		methods: {
			pay(item) {
				this.$emit('trigerLoading',true)
				this.$http.post('/app/order/orderDetails?id='+item.id).then(res => {
					uni.setStorageSync('currentCheckOutOrder',res.data.data)
					uni.navigateTo({
						url:'/pages/checkOutPlantForm/checkOutPlantForm?from=order'
					})
					this.$emit('trigerLoading',false)
				})
			}
		},
	}
</script>

<style>
	.img > image{
		display: block;
		float: left;
		width: 140rpx;
		height: 140rpx;
	}
	.caculate{
		overflow: auto;
		height: 40px;
		line-height: 40px !important;
		border-top:1px solid #eee;
		text-align: right;
	}
	.caculate > view{
		height: 40px;
		line-height: 40px !important;
	}
	.caculate .cancel,.pay-now,.ck-wl{
		display: inline-block;
		border: 1px solid #666;
		border-radius: 8rpx;
		line-height: 20px;
		margin-left: 18px;
		padding: 0 6rpx;
	}
	.caculate .pay-now{
		border-color: #e54d42;		color: #fff;
		background-color: #e54d42;
	}
</style>
