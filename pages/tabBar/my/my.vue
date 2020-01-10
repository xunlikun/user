<template>
	<view class="bg bg_img uni-padding-wrap" style="background-image:url('/static/images/global/bg.gif')">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		<view class="" style="position: relative;z-index: 1;">
			<view class="user_card">
				<view class="user">
					<text class='uni-h5'>点击登录</text>
				</view>
			</view>
		</view>
		<view class="">
			<view class="calculate uni-padding-wrap">
				<view class="calculate_top calculate_wrap">
					<uni-list class="calculate_top_list">
						<uni-list-item title="" note="">
							<view class="">
								<text>钱包</text>
							</view>
						</uni-list-item>
						<uni-list-item title="" note="">
							<view class="">
								<text>订单</text>
							</view>
						</uni-list-item>
						<uni-list-item title="" note="">
							<view class="">
								<text>优惠券</text>
							</view>
						</uni-list-item>
						<uni-list-item title="" note="">
							<view class="">
								<text>发票</text>
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
						<uni-list-item style='margin-bottom: 25rpx;' title="" note="">
							<view class="">
								<navigator url="/pages/help/help"><i style="background-image:url('/static/images/my/help.png')" class='left'></i><text>帮助中心</text><i style="background-image:url('/static/images/global/right.png')" class='right'></i></navigator>
							</view>
						</uni-list-item>
					</uni-list>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
    data() {
        return {
            
        }
    },
    methods: {
        
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
		background: red;
		width: 25%;
		height: 100rpx;
		text-align: center;
		margin-top: 25rpx;
		margin-bottom: 25rpx;
	}
	.calculate_middle_list > uni-list-item{
		background: red;
		height: 60rpx;
		margin-top: 25rpx;
	}
	.calculate_top_list > uni-list-item > view{
		display: inline-block;
		background: #fff;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		line-height: 100rpx;
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
	.right{
		float: right;
		display: inline-block;
		width: 16px;
		height: 30px;
		background-position: center;
		background-repeat: no-repeat;
	}
	.left{
		float: left;
		display: inline-block;
		width: 40px;
		height: 30px;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
