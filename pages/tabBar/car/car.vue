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
			checkout
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
	.checkout-wrap{
		height: 40px;
		width:100%;
		background: red;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
