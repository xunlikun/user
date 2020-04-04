<template>
    <view class="bg">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
        <view class="advertising_wrap">
			
		</view>
		<view class="products">
			<template v-for="(item,i) in 25">
				<ProductItem class='product' :key='i' :datas='item'></ProductItem>
			</template>
		</view>
    </view>
	
</template>
<script>
import ProductItem from "@/components/products/productItem.vue";
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
	.advertising_wrap{
		height: 300rpx;
		background: red;
	}
	.products{	
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.product{
		min-width: 50%;
		max-width: 50%;
		flex: 1;
		box-sizing: border-box;
		/* min-height: 400rpx; */
		backaground:red;
	/* 	border: 1rpx solid #000; */
		padding: 30rpx;
	}
</style>
