<template>
    <view>
        <view>
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
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
        </view>
		<view class="uni-padding-wrap">
			<view class="uni-flex uni-column" style="margin: 10rpx 45rpx;">
				<view class="uni-center uni-flex">
					<view class='uni-flex column-justify-center column-align-items-left uni-column uni-flex-item uni-h4'>
						<text class='uni-inline-item'>当前合同：</text>
					</view>
					<view class="uni-flex-item uni-h3">
						<text>C090927-A4</text>
					</view>
				</view>
				<view class="uni-center uni-h3"><navigator url="/pages/index/index"><text>深圳工业园改造工程-A</text></navigator></view>
			</view>
		</view>
		
    </view>
</template>
<script>
	export default {
    data() {
        return {
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 500
        }
    },
    methods: {
        changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
        }
    }
}
</script>
<style>
	
</style>
