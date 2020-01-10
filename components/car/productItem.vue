<template>
	<view class='productItem'>
		<view class="check">
			<checkbox-group>
			    <label>
			       <checkbox value="cb" checked="true" />
			    </label>
			</checkbox-group>
		</view>
		<view class='img'>
			<image :src="currentData.image" mode="aspectFit"></image>
		</view>
		<view class="info">
			<text>{{currentData.title}}</text>
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
	.img > image{
		display: block;
		float: left;
		width: 240rpx;
		height: 240rpx;
	}
	.productItem{
		display: flex;
		background: #fff;
	}
	.productItem > view {
		height: 240rpx;
	}
	.productItem > view.check {
		flex-grow: 1;
		display: flex;
		align-content: center;
		justify-content: center;
	}
	.productItem > view.check > checkbox-group {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.productItem > view.check > checkbox-group > label {
		text-align: center;
	}
	.productItem > view.img {
		width: 240rpx;
		overflow: hidden;
	}
	.productItem > view.info {
		flex-grow: 4;
	}
</style>
