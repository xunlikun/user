<template>
    <view class="bg">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
        <view class="advertising_wrap">
			
		</view>
		<view class="products">
			<template v-for="(item,i) in productData.records">
				<ProductItem class='product' :key='i' :datas='item'></ProductItem>
			</template>
		</view>
<!-- 		<view class="bottom-loading" v-if="loading">
			<text style="color: #666;">加载中...</text>
		</view> -->
		<Loading 
		ref="loading"
		:custom="false"
		:shadeClick="true"
		:type="2"
		@callback="callback()">
		
		</Loading>
    </view>
	
</template>
<script>
import ProductItem from "@/components/products/productItem.vue";
import Loading from '@/components/xuan-loading/xuan-loading.vue'
export default {
	components:{ProductItem,Loading},
    data() {
        return {
            productData:{},
			searchInfo:{searchInfo:""},
			loading:true
        }
    },
	onLoad() {
		this.getProductList(this.searchInfo)
	},
	onReachBottom(){
		if(!this.loading){
			this.searchInfo.current ++
			this.getProductList(this.searchInfo)
		}
		   
	},
    methods: {
		callback(){
			
		},
        getProductList(){
			this.loading = true
			this.$refs.loading.open();
			this.$http.post('/app/product/list', this.searchInfo ).then(res => {
				if(this.productData.records){
					let tempRecords = JSON.parse(JSON.stringify(this.productData.records.concat(res.data.data.records)))
					this.productData = res.data.data
					this.productData.records = tempRecords
					this.searchInfo.current = res.data.data.current
				
				}else{
					this.productData = res.data.data
					this.searchInfo.current = res.data.data.current
				}
				
				setTimeout(() => {
					this.loading = false
					this.$refs.loading.close();
				},500)
				
			}).catch(err => {
				console.log(err)
				this.loading = false
				this.$refs.loading.close();
				this.searchInfo = {searchInfo:""}
			})
		}
    }
}
</script>
<style>
	.bg{
		position: relative;
	}
	.advertising_wrap{
		height: 300rpx;
		background: red;
	}
	.products{	
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		padding-bottom: 20rpx;
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
	.bottom-loading{
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -12rpx;
		padding: 10rpx 0;
	}
</style>
