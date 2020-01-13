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
			<text style="font-weight: 600;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{currentData.title}}</text>
			<view class="info-msg" style="color: #aaa;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
				<text>重量{{currentData.weight}}</text>
				<text>颜色{{currentData.color}}</text>
			</view>
			<view class="price_num">
				<text style="color: red;font-size: 16px;font-weight: 600;">￥{{currentData.price}}</text>
				<view class="num" style="padding-right: 20rpx;">
					<uni-number-box :min="currentData.num" :max="999"></uni-number-box>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue"
	export default {
		components:{uniNumberBox},
		props:['datas'],
		data() {
			return {
				currentData:{
					"title":"店奥尔滨是卡把控旗",
					"price":"20.00",
					"symbol":"¥",
					"image":"https://fond-oss1.oss-us-east-1.aliyuncs.com/product/senbo/Conmoto/L18DR0384/1.jpg?x-oss-process=image/resize,w_300/format,webp/",
					"weight":"33.3kg",
					"color":"标配版",
					"num":"1"
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
		width: 140rpx;
		height: 140rpx;
	}
	.productItem{
		display: flex;
		background: #fff;
		margin: 16rpx 0;
	}
	.productItem > view {
		height: 140rpx;
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
		width: 140rpx;
		overflow: hidden;
	}
	.productItem > view.info {
		max-width: 400rpx;
		margin-left: 16rpx;
		flex-grow: 4;
		display: flex;
		flex-direction: column;
	}
	.price_num{
		display: flex;
		justify-content: space-between;
	}
</style>
