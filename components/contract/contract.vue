<template>
	<view class='contract'>
		<view class="contract_status">
			<text>合同状态: </text><text>{{datas.isSigned ? "已签订" : "待签订"}}</text>
			<evan-checkbox v-if="!datas.isSigned" primaryColor='red' v-model="checked" style="float: right;"></evan-checkbox>
		</view>
		<view style="text-align: center;">
			<text >合同编号:</text>
			<text style="margin-left: 12rpx;">{{datas.contractCode}}</text>
		</view>
		<view style="padding: 26rpx 0;">
			<view style="display: flex;justify-content: space-around;">
				<text style="font-size: 16px;">{{datas.contractTitle}}</text>
			</view>
			<view style="display: flex;justify-content: space-around;">
				<text style="font-size: 16px;">{{datas.mechanicalName}}</text>
			</view>
		</view>
		<view style="display: flex;justify-content: flex-start;">
			<text>创建日期: {{datas.createDate}}</text>
		</view>
	</view>
</template>

<script>
	import evanCheckbox from '@/components/evan-checkbox/evan-checkbox.vue'
	export default {
		components:{evanCheckbox},
		props:['datas','popup','pushCheckContract'],
		data() {
			return {
				checked:false
			}
		},
		onLoad() {

		},
		methods: {
			
		},
		watch: {
			checked(newValue, oldValue) {
				this.$emit('pushCheckContract',this.datas)
			}
		},
	}
</script>

<style>
	.contract{
		border: 1px solid #eee;
		border-radius: 8rpx;
		margin: 30rpx 0;
		padding: 10rpx 16rpx;
		background-color: #fff;
	}
</style>
