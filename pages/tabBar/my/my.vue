<template>
	<view class="bg bg_img uni-padding-wrap" style="background-image:url('/static/images/global/bg.gif')">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		<view class="" style="position: relative;z-index: 1;">
			<view class="user_card">
				<template v-if="hasLogin">
					<view class="user">
						<text class='uni-h5'>您已登录</text>
					</view>
				</template>
				<template v-else>
					<view class="user" @click="gotoLogin">
						<text class='uni-h5'>点击登录</text>
					</view>
				</template>
			</view>
		</view>
		<view class="" v-if="hasLogin">
			<view class="calculate uni-padding-wrap">
				<view class="calculate_top calculate_wrap">
					<uni-list class="calculate_top_list">
						<uni-list-item title="" note="">
							<view class="">
								<text class='icon-name'>钱包</text>
								<i style="background-image:url('/static/images/my/wallet.png')" class='top-icon'></i>
							</view>
						</uni-list-item>
						<uni-list-item title="" note="">
							<navigator url="/pages/orders/orders">
								<view class="">
									<text class='icon-name'>订单</text>
									<i style="background-image:url('/static/images/my/order.png')" class='top-icon'></i>
								</view>
							</navigator>
							
						</uni-list-item>
						<uni-list-item title="" note="">
							<view class="">
								<view class="">
									<text class='icon-name'>优惠券</text>
									<i style="background-image:url('/static/images/my/coupon.png')" class='top-icon'></i>
								</view>
							</view>
						</uni-list-item>
						<uni-list-item title="" note="">
							<view class="">
								<view class="">
									<text class='icon-name'>发票</text>
									<i style="background-image:url('/static/images/my/invoice.png')" class='top-icon'></i>
								</view>
							</view>
						</uni-list-item>
					</uni-list>
				</view>
			
				<view class="calculate_middle calculate_wrap">
					<uni-list class="calculate_middle_list">
						<uni-list-item title="" note="">
							<view class="">
								<navigator url="/pages/gr/gr"><i style="background-image:url('/static/images/my/gr.png')" class='left'></i><text>机械</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i></navigator>
							</view>
						</uni-list-item>
						<uni-list-item title="" note="">
							<view class="">
								<navigator url="/pages/person/person"><i style="background-image:url('/static/images/my/person.png')" class='left'></i><text>机手</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i></navigator>
							</view>
						</uni-list-item>
						<uni-list-item title="" note="">
							<view class="">
								<navigator url="/pages/contract/contract"><i style="background-image:url('/static/images/my/contract.png')" class='left'></i><text>合同</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i></navigator>
							</view>
						</uni-list-item>
						<uni-list-item title="" note="">
							<view class="">
								<navigator url="/pages/help/help"><i style="background-image:url('/static/images/my/help.png')" class='left'></i><text>帮助中心</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i></navigator>
							</view>
						</uni-list-item>
						<uni-list-item style='margin-bottom: 25rpx;' title="" note="">
							<view class="">
								<navigator url="/pages/address/address"><i style="background-image:url('/static/images/my/address.png')" class='left'></i><text>收货地址</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i></navigator>
							</view>
						</uni-list-item>
						<uni-list-item style='margin-bottom: 25rpx;' title="" note="">
							<view class="" @tap="loginOut">
								<navigator><i style="background-image:url('/static/images/my/login_Out.png')" class='left'></i><text>退出登录</text></navigator>
							</view>
						</uni-list-item>
					</uni-list>
				</view>
			</view>
		</view>
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
            msg:''
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
		
	},
	computed:{
		hasLogin(){
			return this.$store.getters.getHasLogin
		}
	},
    methods: {
        gotoLogin(){
			uni.navigateTo({
			    url: '/pages/ucenter/login'
			});
		},
		loginOut(){
			this.$store.commit('setHasLogin',false)
			uni.clearStorage()
			uni.navigateTo({
			    url: '/pages/ucenter/login'
			});
		}
    }
}
</script>

<style>
	.user_card{
		height: 200rpx;
		border-radius:8rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.calculate{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin-top: 190rpx;
		padding-top: 80rpx;
	}
	.calculate_wrap{
		margin-bottom:16rpx;
		border: 1px solid #eee;
	}
	.calculate_top{
		background: #fff;
		border-radius:8rpx;
	}
	.calculate_middle{
		min-height: 250rpx;
		background: #fff;
		border-radius:8rpx;
	}
	.calculate_top_list{
		display: flex;
		flex-wrap: wrap;
	}
	.calculate_middle_list{
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		padding: 0 16rpx;
	}
	.calculate_top_list > uni-list-item{
		width: 25%;
		height: 100rpx;
		text-align: center;
		margin-top: 25rpx;
		margin-bottom: 25rpx;
		position: relative;
	}
	.calculate_middle_list > uni-list-item{
		height: 60rpx;
		margin-top: 25rpx;
	}
	.calculate_top_list > uni-list-item view{
		display: inline-block;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	.calculate_middle_list > uni-list-item > view{
		background: #fff;
		height: 60rpx;
		line-height: 60rpx;
	}
	.user{
		background-color: #fff;
		border-radius: 50%;
		width: 150rpx;
		height: 150rpx;
		text-align: center;
		line-height: 150rpx;
		margin-left: 32rpx;
	}
	.left{
		float: left;
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		background-size: 32rpx;
		background-position: center;
		background-repeat: no-repeat;
	}
	.top-icon{
		display: inline-block;
		background-size: 60rpx;
		height: 70rpx !important;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
