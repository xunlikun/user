<template>
    <view class="bg bg_img">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
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
			<view class="main-calculate">
				<view class="main-calculate-top">
					<view class="gr">
						<text>工程机械</text>
					</view>
					<view class="wallet">
						<text>钱包</text>
					</view>
				</view>
				<view class="main-calculate-bottom">
					<view class="gr">
						<text>合同</text>
					</view>
					<view class="wallet">
						<text>发票</text>
					</view>
					<view class="wallet">
						<text>客服</text>
					</view>
				</view>
			</view>
			<view class="gr-calculate">
				<view class="title">
					<text>待收</text>
				</view>
				<uni-list class="contract-list">
					<template v-for="(item,i) in contract">
					<navigator url="/pages/projectFunds/projectFunds?id=1">
						<uni-list-item class="contract-item" title="" note="" :key='i'>
							<text style="max-width: 300rpx;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{item.contractTitle}}合同{{item.month}}月份</text>
							<text>状态{{item.status}}</text>
						</uni-list-item>
					</navigator>
					
					</template>
					
				</uni-list>
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
            duration: 500,
			contract:[
				{
					contractTitle:'森帛合同森帛合同森帛合同森帛合同森帛合同森帛合同森帛合同森帛合同森帛合同',
					month:'3',
					status:'施工方核算'
				},
				{
					contractTitle:'森帛',
					month:'12',
					status:'我方方核算'
				},
				{
					contractTitle:'森帛',
					month:'12',
					status:'我方方核算'
				},
				{
					contractTitle:'森帛',
					month:'12',
					status:'我方方核算'
				},
				{
					contractTitle:'森帛',
					month:'12',
					status:'我方方核算'
				}
			]
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
	.bg_img{
		/* background-image:url('/static/images/global/bg.gif') */
	}
	.main-calculate{
		display: flex;
		flex-direction: column;
		background: #fff;
		border-radius: 8rpx;
		padding: 8rpx;
		margin-top: 16rpx;
	}
	.main-calculate>view{
		display: flex;
	}
	.main-calculate>view>view{
		height: 118rpx;
		background: red;
		margin: 8rpx;
		overflow: hidden;
		padding: 32rpx 0 0 32rpx;
	}
	.main-calculate>view>view>text{
		font-size: 16px;
	}
	.main-calculate .main-calculate-top .gr{
		flex-grow: 3;
	}
	.main-calculate .main-calculate-top .wallet{
		flex-grow: 2;
	}
	.main-calculate .main-calculate-bottom > view{
		flex-grow: 1;
	}
	.gr-calculate{
		border-radius: 8rpx;
		padding: 16rpx;
		background: #fff;
		margin-top: 16rpx;
	}
	.gr-calculate .title text{
		font-size: 18px;
		color:red;
		font-weight: 600;
	}
	.contract-item{
		display: flex;
		justify-content: flex-start;
		border: 1px solid #eee;
		padding: 50rpx 16rpx;
		margin: 16rpx 0;
		display: flex;
	}
	.contract-item text{
		font-size: 16px;
		font-weight: 600;
	}
</style>
