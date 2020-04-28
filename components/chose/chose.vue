<template>
	<view class='choses'>
		<view class="calculate uni-padding-wrap" style="height: 60rpx;line-height:60rpx;">
			<text @tap="close" class='close' style="float: right; color: red;">取消</text>
		</view>
		<view class="product-list uni-padding-wrap">
			<view class="wrap-list">
				<text>颜色分类:</text>
				<uni-list class='' style='display: block;margin-top: 16rpx;'>
					<uni-list-item title="" note="" v-for="(item,i) in currentData" :class="{inventory:item.inventory>0 ? true : false,chose:item.chose}" @tap='chose(item)'><text>{{item.color}}/{{item.productSize}}</text></uni-list-item>
				</uni-list>
			</view>
			<view class="wrap-list">
				<text>购买数量:</text>
				<view class="num" style="padding: 0 0 0 0;float:right">
					<uni-number-box :min="0" :max="999" :value="count" @change='countChange'></uni-number-box>
				</view>
			</view>
			<view class="checkout-wrap">
				<view class="addCar" @tap="addCar">
					<text style="font-size: 14px;">{{addMsg}}</text>
				</view>
				<view class="checkout" @tap="checkout">
					<text style="font-size: 14px;">立即购买</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue"
	export default {
		components:{uniNumberBox},
		props:['type','changeCloseStatus','datas','opPopup'],
		data() {
			return {
				addMsg:'加入购物车',
				userChose:[],
				currentData:[],
				count:0
			}
		},
		mounted() {
			this.currentData = JSON.parse(JSON.stringify(this.datas))
		},
		computed: {
			hasLogin() {
				return this.$store.getters.getHasLogin 
			}
		},
		methods: {
			countChange(value){
				this.count = value
			},
			close(){
				this.$emit('changeCloseStatus',false)
			},
			chose(item){
				for (let j of this.currentData) {
					j.chose = false
				}
				for (let s of this.currentData) {
					if(item.id == s.id){
						console.log('ok')
						s.chose ? s.chose = false : s.chose = true;
						let temp = JSON.parse(JSON.stringify(this.currentData))
						this.currentData = []
						this.currentData = temp
					}
				}
					
			},
			addCar(){
				if(this.hasLogin){
					this.addMsg = '正在加入'
					let params = {}
					
					for (let s of this.currentData) {
						if(s.chose){
							params.variantId = s.id
							params.count = this.count
						}
					}
					if(!params.variantId || !params.count){
						uni.showToast({
							icon:'none',
							title:'还未选择商品',
							duration:1000
						})
						this.addMsg = '加入购物车'
						return
					}
					this.$http.post('/app/cart/addToCart', params ).then(res => {
							this.count = 0
							for (let s of this.currentData) {
								if(s.chose){
									s.chose = false
								}
							}
							this.addMsg = '加入购物车'
							this.close()
							this.$emit('opPopup',res.data.msg)
					}).catch(err => {
						this.count = 0
						for (let s of this.currentData) {
							if(s.chose){
								s.chose = false
							}
						}
						this.addMsg = '加入购物车'
						this.close()
						this.$emit('opPopup',res.data.data.msg)
					})
				}else{
					this.gotoLogin()
				}
			},
			checkout(){
				if(this.hasLogin){
					console.log('checkout')
				}else{
					this.gotoLogin()
				}
			},
			gotoLogin(){
				uni.navigateTo({
					url:'/pages/ucenter/login'
				})
			}
		}
	}
</script>

<style scoped>
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
		border-top: 1px solid #eee;
		height: 60vh;
		background: #fff;
	}
	.product-list uni-list-item{
		border: 1px solid #ccc;
		border-radius: 6rpx;height: 50rpx;
		display: inline-block;
		padding: 0 16rpx;
		margin-right: 32rpx;
	}
	.inventory{
		border-color: #000000 !important;
	}
	.inventory > text {
		color: #000000 !important;
	}
	.chose {
		border-color: orange !important;
		background-color: orange;
	}
	.chose > text {
		color: #fff !important;
	}
	.product-list uni-list-item text{
		color: #aaa;
	}
	.wrap-list{
		border-bottom: 1px solid #eee;
		padding: 30rpx 0;
	}
</style>
