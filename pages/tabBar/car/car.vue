<template>
	<view class="bg bg_img">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		<view class="products-wrap uni-padding-wrap">
			<template v-for="(item,i) in 16">
				
					<ProductItem :datas='item' :key='i'></ProductItem>
				
			</template>
		</view>
		<view class="checkout-wrap">
			<view class="check-all">
				<checkbox-group>
				    <label>
				       <checkbox value="cb" checked="true" />
					   <text>全选</text>
				    </label>
				</checkbox-group>
			</view>
			<view class="much">
				<text style="font-size: 14px;font-weight: 600;margin-right:16rpx;">合计: </text>
				<text style="font-size: 14px;color:red"> 255.00</text>
			</view>
			<view class="go-check">
				<text style="font-size: 14px;font-weight: 600;">去结算</text>
			</view>
		</view>
	</view>
</template>

<script>
	import ProductItem from '@/components/car/productItem.vue'
	export default {
		components:{ProductItem},
	    data() {
	        return {
				
	        }
	    },
	    methods: {
			
	    }
	}
</script>

<style>
	.products-wrap{
		padding-bottom:120rpx;
	}
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
	.checkout-wrap > view{
		line-height: 100rpx;
		text-align: center;
	}
	.checkout-wrap .check-all{
		flex-grow: 1;
		
	}
	.checkout-wrap .much{
		flex-grow: 1;

	}
	.checkout-wrap .go-check{
		flex-grow: 2;
		background: red;
		color: #fff;
	}
</style>
