<template>
	<view class="bg">
		<view class="advertising_wrap">
			
		</view>
		<view class="contract uni-padding-wrap">
			<template v-for="(item,i) in 3">
				<ContractItem :key='i' :datas='item'></ContractItem>
			</template>
		</view>
	</view>
</template>

<script>
import ContractItem from "@/components/contract/contract.vue";
export default {
		components:{ContractItem},
		data() {
			return {
				title: '合同'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.advertising_wrap{
		height: 300rpx;
		background: red;
	}
</style>
