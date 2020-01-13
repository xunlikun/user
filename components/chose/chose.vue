<template>
	<view class='choses'>
		<view class="calculate uni-padding-wrap" style="height: 40rpx;">
			<text @tap="close" class='close' style="float: right; color: red;">取消</text>
		</view>
		<view class="product-list uni-padding-wrap">
			<text>颜色分类:</text>
			<uni-list class='' style='display: block;margin-top: 16rpx;'>
				<uni-list-item title="" note=""><text>红色/土豪红</text></uni-list-item>
				<uni-list-item title="" note=""><text>金色色/土豪金</text></uni-list-item>
			</uni-list>
			<view class="checkout-wrap">
				<view class="addCar">
					<text style="font-size: 14px;">加入购物车</text>
				</view>
				<view class="checkout">
					<text style="font-size: 14px;">立即购买</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['type','changeCloseStatus'],
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			close(){
				this.$emit('changeCloseStatus',false)
			}
		}
	}
</script>

<style>
	.checkout-wrap{
		height: 100rpx;
		width:100%;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}
	.checkout,.addCar{
		flex-grow: 1;
		text-align: center;
		line-height: 100rpx;
		color: #fff;
	}
	.checkout{
		background: red;
	}
	.addCar{
		background: orange;
	}
	.choses{
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px solid #eee;
		width: 100%;
		height: 600rpx;
		background: #fff;
		z-index: 10;
	}
	.product-list uni-list-item{
		border: 1px solid #ccc;
		border-radius: 6rpx;height: 50rpx;
		display: inline-block;
		padding: 0 8rpx;
		margin-right: 16rpx;
	}
	.product-list uni-list-item text{
		color: #aaa;
	}
</style>
