<template>
	<view class='productDetail bg'>
		<view class="page-section swiper">
		    <view class="page-section-spacing">
		        <swiper class="swiper" style="height: 500rpx;" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		            <swiper-item>
		                <view class="swiper-item uni-bg-red" style="height:100%">A</view>
		            </swiper-item>
		            <swiper-item>
		                <view class="swiper-item uni-bg-green" style="height:100%">B</view>
		            </swiper-item>
		            <swiper-item>
		                <view class="swiper-item uni-bg-blue" style="height:100%">C</view>
		            </swiper-item>
		        </swiper>
		    </view>
		</view>
		<view class="uni-padding-wrap">
			<view class="product-info">
				<view class="price" style="color: red;">
					<text>¥</text> <text style="font-size: 16px;font-weight: 600;">10888.00</text>
				</view>
				<view class="title" style="max-height: 90rpx;font-weight: 600;overflow: hidden;text-overflow: ellipsis;">
					<text >阿卡纳尴尬开了阿卡纳尴尬开了啊鹅肝恶搞阿尔高法尔gas额阿尔嘎嘎安慰法无法阿卡纳尴尬开了啊鹅肝恶搞阿尔高法尔gas额阿尔嘎嘎安慰法无法</text>
				</view>
			</view>
			<view class="chose">
				<uni-list style='display: flex;flex-direction: column;'>
					<uni-list-item @tap='changeCloseStatus(true)' title="" note="">
						<text style="font-weight: 600;">选择</text><text style="margin-left:16rpx;color: #aaa;">颜色分类</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i>
					</uni-list-item>
					<uni-list-item title="" note="">
						<text style="font-weight: 600;">领券</text><text style="margin-left:16rpx;color: #aaa;">(敬请期待)</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i>
					</uni-list-item>
				</uni-list>
			</view>
		</view>
		<view class="checkout-wrap">
			<view class="addCar">
				<text style="font-size: 14px;">加入购物车</text>
			</view>
			<view class="checkout">
				<text style="font-size: 14px;">立即购买</text>
			</view>
		</view>
		<Chose :type='type' @changeCloseStatus='changeCloseStatus' v-if="closeStatus"></Chose>
		<Masks/>
	</view>
</template>

<script>
	import Chose from '@/components/chose/chose.vue'
	import Masks from '@/components/masks/masks.vue'
	import {mapMutations} from 'vuex'
	export default {
		components:{Chose,Masks},
		data() {
			return { background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: false,
            interval: 5000,
            duration: 500,
			type:"chose",
			closeStatus:false
			}
		},
		onLoad(option) {
			console.log(option)
			this.setMaskStatus(false)
		},
		methods: {
			...mapMutations(['setMaskStatus','setMaskStatus']),
			changeCloseStatus(boole){
				this.closeStatus = boole
				this.setMaskStatus(boole)
			}
		}
	}
</script>

<style>
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
