<template>
	<view class='productItem'>
		<view class='img'>
			<image :src="currentData.image" mode="aspectFit"></image>
		</view>
		<view class="title">
			<text>{{currentData.title}}</text>
		</view>
		<view class="price">
			<text>{{currentData.symbol}} {{currentData.price}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['datas'],
		data() {
			return {
				currentData:{
					"title":"aswdafa",
					"price":"20.00",
					"symbol":"¥",
					"image":"https://fond-oss1.oss-us-east-1.aliyuncs.com/product/senbo/Conmoto/L18DR0384/1.jpg?x-oss-process=image/resize,w_300/format,webp/"
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.productItem{
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
	}
	.img{
		width: 100%;
		overflow: hidden;
	}
	.img > image{
		display: block;
		width: 100%;
		height: 315.2rpx;
	}
</style>
