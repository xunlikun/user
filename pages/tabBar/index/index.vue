<template>
    <view class="bg">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		<template v-if="hasLogin">
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
						<view class="gr" style="background-color: #CCCCFF;">
							<text>工程机械</text>
						</view>
						<view class="wallet" style="background-color: #EFE0DE;">
							<text>钱包</text>
						</view>
					</view>
					<view class="main-calculate-bottom">
						<view class="gr" style="background-color: #aaCCFF;">
							<text>合同</text>
						</view>
						<view class="wallet" style="background-color: #F7B969;">
							<text>发票</text>
						</view>
						<view class="wallet" style="background-color: #FCB99D;">
							<text>客服</text>
						</view>
					</view>
				</view>
				
				<view class="gr-calculate">
					<view class="title">
						<text>待收</text>
						<i class='icon-coin' style="background-image: url(../../../static/images/index/coin.png);"></i>
					</view>
					<uni-list class="contract-list">
						<template v-for="(item,i) in contract">
						<navigator :url="'/pages/projectFunds/projectFunds?contractId=' + item.contractId + '&month=' + item.month">
							<uni-list-item class="contract-item" title="" note="" :key='i'>
								<text style="max-width:300rpx;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">合同: {{item.contractTitle}},</text>
								<text>{{item.month}} 月份</text>
							</uni-list-item>
						</navigator>
						
						</template>
						
					</uni-list>
				</view>
			</view>
		</template>
		<template v-else>
			<button type="default" @tap="gotoLogin" style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;width: 300rpx;height: 60rpx;font-size: 12px;">去登陆</button>
		</template>
		<uni-popup ref="popup" type="center">
				<text style="background-color: #fff;padding: 40rpx 100rpx;border-radius: 8rpx;">{{msg}}</text>
		</uni-popup>
	</view>
</template>
<script>
import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"
export default {
	components:{uniPopup},
    data() {
        return {
			msg:'',
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 500,
			contract:[]
        }
    },
	onShow() {
		if(this.hasLogin){
			this.$store.dispatch('ACgetUserInfo').then(res => {
				if(res.data.status == 200){
					
				}else{
					
				}
			}).catch(err => {
				let that = this
				setTimeout(() => {
					uni.clearStorageSync();
					uni.navigateTo({
						url:'/pages/ucenter/login'
					})
					that.$refs.popup.close()
				},2000)
				this.msg = '获取用户信息失败，请重新登录'
				this.$refs.popup.open()
			})
		}
		this.getDueIn()
	},
	computed: {
		hasLogin() {
			return this.$store.getters.getHasLogin
		}
	},
    methods: {
		gotoLogin(){
			uni.navigateTo({
				url:'/pages/ucenter/login'
			})
		},
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
        },
		getDueIn(){
			this.$http.post('/app/invoice/confirmList').then(res => {
				this.contract = res.data.data
			}).catch(err => {
				
			})
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
		background: #aaaaff;
		margin: 8rpx;
		overflow: hidden;
		padding: 32rpx 0 0 32rpx;
	}
	.main-calculate>view>view>text{
		font-size: 16px;
		color: #fff;
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
	}
	.icon-coin{
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		background-size: 40rpx;
		background-position: center;
		background-repeat: no-repeat;
		vertical-align: sub;
		margin-left: 10rpx;
	}
</style>
