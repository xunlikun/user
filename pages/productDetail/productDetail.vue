<template>
	<view class='productDetail bg'>
		<view class="page-section swiper">
		    <view class="page-section-spacing">
		        <swiper class="swiper" style="height: 500rpx;" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		            <swiper-item v-for="(item,i) in detailData.imageList">
		                <view class="swiper-item uni-bg-white" style="height:100%;text-align: center;">
							<image :src="item.imagePath" mode="aspectFit" width='100%'></image>
						</view>
		            </swiper-item>
		        </swiper>
		    </view>
		</view>
		<view class="uni-padding-wrap">
			<view class="product-info">
				<view class="price" style="color: red;">
					<text>¥</text> <text style="font-size: 16px;font-weight: 600;">{{detailData.price}}</text>
				</view>
				<view class="title" style="max-height: 90rpx;font-weight: 600;overflow: hidden;text-overflow: ellipsis;">
					<text >{{detailData.title}}</text>
				</view>
			</view>
			<view class="chose">
				<uni-list style='display: flex;flex-direction: column;'>
					<uni-list-item @tap='changeCloseStatus(true)' title="" note="">
						<text>选择</text><text style="margin-left:16rpx;color: #aaa;">颜色分类</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i>
					</uni-list-item>
					<uni-list-item title="" note="">
						<text>领券</text><text style="margin-left:16rpx;color: #aaa;">(敬请期待)</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i>
					</uni-list-item>
				</uni-list>
			</view>
		</view>
		<view class="checkout-wrap">
			<view class="addCar" @tap='changeCloseStatus(true)'>
				<text style="font-size: 14px;">加入购物车</text>
			</view>
			<view class="checkout" @tap='changeCloseStatus(true)'>
				<text style="font-size: 14px;">立即购买</text>
			</view>
		</view>
		<uni-popup ref="popupAddCar" type="bottom">
			<view class="" style="height: 60vh;">
				<Chose @opPopup='opPopup' :type='type' :datas='detailData.variantList' @changeCloseStatus='changeCloseStatus' v-if="closeStatus"></Chose>
			</view>
		</uni-popup>
		<Loading
		ref="loading"
		:custom="false"
		:shadeClick="true"
		:type="2">
		
		</Loading>
		<uni-popup ref="popup" type="center">
				<text style="background-color: #fff;padding: 40rpx 100rpx;border-radius: 8rpx;">{{msg}}</text>
		</uni-popup>
	</view>
</template>

<script>
	import Chose from '@/components/chose/chose.vue'
	import Loading from '@/components/xuan-loading/xuan-loading.vue'
	import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"
	import {mapMutations} from 'vuex'
	export default {
		components:{Chose,Loading,uniPopup},
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 5000,
				duration: 500,
				type:"chose",
				closeStatus:false,
				detailData:{},
				msg:''
			}
		},
		onLoad(option) {
			this.getProductDetail(option)
		},
		methods: {
			opPopup(msg){
				this.msg = msg
				this.$refs.popup.open()
				setTimeout(() => {
					this.$refs.popup.close()
				},1500)
			},
			changeCloseStatus(boole){
				this.closeStatus = boole
				this.$refs.popupAddCar[boole ? "open" : "close"]()
			},
			getProductDetail(params){
				this.$refs.loading.open();
				this.$http.post('/app/product/productDetails?id='+params.id, {},{header:{"content-type":"x-www-form-urlencoded"}} ).then(res => {
					this.detailData = res.data.data
					this.$refs.loading.close();
				}).catch(err => {
					console.log(err)
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
	.chose{
		margin-top: 32rpx;
	}
</style>
