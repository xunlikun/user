<template>
	<view class="bg">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		<template v-if="hasLogin">
			<view class="products-wrap uni-padding-wrap" v-if="carList">
				<template v-for="(item,i) in carList">
					
						<ProductItem :datas='item' :key='i' @getCarList='getCarList' @OpenPopup='OpenPopup' :checkAll='checkAll' @wrapCheckOutList='wrapCheckOutList'></ProductItem>
					
				</template>
			</view>
			<view class="checkout-wrap">
				<view class="check-all">
					<checkbox-group>
					    <label>
					       <evan-checkbox primaryColor='red' v-model="checkAll">全选</evan-checkbox>
					    </label>
					</checkbox-group>
				</view>
				<view class="much">
					<text style="font-size: 14px;margin-right:16rpx;">合计: </text>
					<text style="font-size: 14px;color:red"> {{totalPrice.toFixed(2)}}</text>
				</view>
				<view class="go-check" @tap="gotoCheckOut">
					<text style="font-size: 14px;font-weight: 600;">去结算</text>
				</view>
			</view>
		</template>
		<template v-else>
			<button type="default" @tap="gotoLogin" style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;width: 300rpx;height: 60rpx;font-size: 12px;">去登陆</button>
		</template>
		<uni-popup ref="popup" type="center">
				<text @click='deleteItem' style="background-color: #fff;padding: 40rpx 100rpx;border-radius: 8rpx;color: red;">删除</text>
		</uni-popup>
		<uni-popup ref="popupAddress" type="center">
				<view class="popupAddress" style="background-color: #fff;width:400rpx;text-align: center;">
					<view class="">
						<text style="font-size: 14px;color: #000000;">提示</text>
					</view>
					<view class="" style="line-height: 90rpx;">
						<text>
							{{addressTitle}}
						</text>
					</view>
					<view class="" style="display: flex;">
						<button @tap="close">取消</button>
						<button @tap='gotoAddress'>去设置</button>
					</view>
				</view>
		</uni-popup>
		<Loading
		ref="loading"
		:custom="false"
		:shadeClick="true"
		:type="2">
		
		</Loading>
	</view>
</template>

<script>
	import ProductItem from '@/components/car/productItem.vue'
	import evanCheckbox from '@/components/evan-checkbox/evan-checkbox.vue'
	import Loading from '@/components/xuan-loading/xuan-loading.vue'
	import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"
	export default {
		components:{ProductItem,evanCheckbox,Loading,uniPopup},
	    data() {
	        return {
				carList:[],
				caculateItem:{},
				checkOutList:[],
				checkAll:false,
				addressTitle:"请添加地址"
	        }
	    },
		computed:{
			hasLogin(){
				return this.$store.getters.getHasLogin
			},
			totalPrice(){
				let totalPrice = 0
				for (let s of this.checkOutList) {
					totalPrice += (s.count * s.unitPrice)
				}
				return totalPrice
			}
		},
		onShow() {
			this.getCarList()
			this.checkOutList = []
		},
	    methods: {
			close(){
				this.$refs.popupAddress.close()
			},
			gotoAddress(){
				uni.navigateTo({
					url:'/pages/address/address'
				})
			},
			gotoCheckOut(){
				console.log(this.checkOutList)
				this.$refs.loading.open();
				this.$http.post('/app/userAddress/list').then(res => {
					if(res.data.status == 200){
						if(res.data.data.length == 0){
						 // 提示 添加地址
							this.$refs.loading.close();
							this.addressTitle = '请添加地址'
							this.$refs.popupAddress.open()
						 }else{
							 let defaultAddress = false
							 for (let s of res.data.data) {
								if(s.activate){
									defaultAddress = s
									break;
								}
							 }
							 if(defaultAddress){
								 // 创建订单
								 let cartIds = []
								 for (let s of this.checkOutList) {
								 	cartIds.push(s.id)
								 }
								 if(cartIds.length == 0){
									 uni.showToast({
									 	title:'请选择商品',
										icon:'none',
										duration:1000
									 })
									 this.$refs.loading.close();
									 return 
								 }
								 let params = {userAddressId:defaultAddress.id,cartIds:cartIds}
								 this.$http.post('/app/order/createOrder',params).then(res => {
									 this.$refs.loading.close();
									 this.checkOutList = []
									 // this.getCarList()
									 uni.setStorageSync('currentCheckOutOrder',res.data.data)
									 uni.navigateTo({
									 	url:'/pages/checkOutPlantForm/checkOutPlantForm',
									 })
								 })
							 }else{
								 this.$refs.loading.close();
								 // 提示 选择 默认地址
								 this.addressTitle = '请选择默认地址'
								 this.$refs.popupAddress.open()
							 }
						 }
					}
				})
			},
			wrapCheckOutList(item){
				if(this.checkOutList == 0){
					this.checkOutList.push(item)
				}else{
					for (let i = 0; i < this.checkOutList.length; i++) {
						if(this.checkOutList[i].id == item.id){
							this.checkOutList.splice(i,1)
							console.log(this.checkOutList)
							return
						}
					}
					this.checkOutList.push(item)
				}
				console.log(this.checkOutList)
			},
			OpenPopup(item){
				this.caculateItem = item
				this.$refs.popup.open()
			},
			deleteItem(){
				this.$refs.popup.close()
				this.$refs.loading.open();
				this.$http.post('/app/cart/remove',[this.caculateItem.id]).then(res => {
					this.$refs.loading.close();
					for (let i = 0; i < this.checkOutList.length; i++) {
						if(this.caculateItem.id == this.checkOutList[i].id){
							this.checkOutList.splice(i,1)
						}
					}
					this.getCarList()
				}).catch(err => {
					this.$refs.loading.close();
				})
			},
			gotoLogin(){
				uni.navigateTo({
					url:'/pages/ucenter/login'
				})
			},
			getCarList(){
				this.carList = null
				this.$refs.popupAddress.close()
				this.$refs.loading.open();
				this.$http.post('/app/cart/list').then(res => {
					this.carList = res.data.data
					this.$refs.loading.close();
				}).catch(err => {
					this.$refs.loading.close();
				})
			}
	    }
	}
</script>

<style>
	.popupAddress button{
		width: 50%;
		background-color: #fff;
		border-radius: 0;
		font-size: 13px;
		outline: 0;
	}
	.popupAddress text{
		font-size: 13px;
		color: #666;
	} 
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
		padding-left: 66rpx;
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
