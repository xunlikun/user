<template>
	<view class='productItem'>
		<navigator :url="'/pages/productDetail/productDetail?id=' + datas.id">
			<view class='img'>
				<image :src="datas.mainImage" mode="aspectFit"></image>
			</view>
			<view class="title">
				<text style="font-size: 13px;color: #666;">{{datas.title}}</text>
			</view>
			<view class="price">
				<text style="color: red;font-size: 14px;">{{currentData.symbol}} {{datas.price}}</text>
			</view>
		</navigator>
		
	</view>
</template>

<script>
	export default {
		props:['datas'],
		data() {
			return {
				currentData:{
					"title":"aswdafaccccccccccccxxxxxxxxxxxxxxxaswvfgaegzewgaezrgaer",
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
		border-radius: 8rpx;
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
	view{
		line-height: normal;
	}
	.title{
		max-height: 80rpx;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.title, .price{
		padding: 4rpx 16rpx;
	}
</style>
