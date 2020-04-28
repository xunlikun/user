<template>
	<view class='productItem' @touchstart="toucS" @touchend="toucE" @touchmove="toucM">
		<view class="check">
			<checkbox-group>
			    <label>
			       <evan-checkbox primaryColor='red' v-model="checked"></evan-checkbox>
			    </label>
			</checkbox-group>
		</view>
		<view class='img'>
			<image :src="currentData.imagePath" mode="aspectFit"></image>
		</view>
		<view class="info">
			<text style="font-weight: 600;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{currentData.title}}</text>
			<view class="info-msg" style="color: #aaa;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
				<text>重量:常规</text>&nbsp,
				<text>颜色尺寸:{{currentData.color}}/{{currentData.productSize}}</text>
			</view>
			<view class="price_num">
				<text style="color: red;font-size: 16px;">￥{{tempCurrentData.totalPrice}}</text>
				<view class="num" style="padding: 10rpx 0 0 16rpx;">
					<uni-number-box :min="1" v-if='currentData.count' :value='currentData.count' @change='changeCount' :max="999"></uni-number-box>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue"
	import evanCheckbox from '@/components/evan-checkbox/evan-checkbox.vue'
	export default {
		components:{uniNumberBox,evanCheckbox},
		props:['datas','OpenPopup','wrapCheckOutList','checkAll','getCarList'],
		data() {
			return {
				currentData:{},
				tempCurrentData:{},
				timeOutEvent:0,
				checked:false
			}
		},
		mounted() {
			this.checked = this.checkAll
			this.currentData = JSON.parse(JSON.stringify(this.datas))
			this.tempCurrentData = JSON.parse(JSON.stringify(this.datas))
		},
		methods: {
			changeCount(value){
				this.currentData.count = value
			},
			toucS(){
				let that = this;
				   clearTimeout(this.timeOutEvent);//清除定时器
				   this.timeOutEvent = 0;
				   this.timeOutEvent = setTimeout(function(){
				        //执行长按要执行的内容，
						console.log('长按！')
						that.$emit('OpenPopup',that.tempCurrentData)
				     },600);//这里设置定时
			},
			toucE(){
				clearTimeout(this.timeOutEvent);
				      if(this.timeOutEvent!=0){
						  console.log('单机！')
				        //这里写要执行的内容（尤如onclick事件）
				     }
			},
			toucM(){
				console.log('移动后悔！')
				clearTimeout(this.timeOutEvent);//清除定时器
				     this.timeOutEvent = 0;
			}
		},
		watch: {
			// currentData(newValue, oldValue) {
			// 	console.log(newValue,oldValue)
			// },
			currentData:{
				handler(newValue, oldValue) {
					if(oldValue.id){
						this.$http.post('/app/cart/changeCount',{id:newValue.id,count:newValue.count}).then(res => {
							if(res.data.status == 200){
								let currentCount = newValue.count - this.tempCurrentData.count
								let currentPrice = currentCount * newValue.unitPrice
								this.tempCurrentData.totalPrice = newValue.totalPrice + currentPrice
								this.currentData = newValue
								
								this.$emit('getCarList')
							}else{
								this.currentData = this.tempCurrentData
							}
						}).catch(err => {
							this.currentData = this.tempCurrentData
						})
					}
					
				},
				deep:true
			},
			checked(){
				this.$emit('wrapCheckOutList',this.currentData)
			},
			checkAll(){
				this.checked = this.checkAll
			},
			datas(){
				this.currentData = JSON.parse(JSON.stringify(this.datas))
				this.tempCurrentData = JSON.parse(JSON.stringify(this.datas))
			}
		},
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
		padding: 30rpx 0;
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
