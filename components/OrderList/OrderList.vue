<template >
	<view class="">
		<view>敬请期待 {{type}}</view>
		<view class="orderList">
			<template v-for="(item,i) in datas">
				<view :key='i'>{{item.time}}</view>
			</template>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:['type','datas'],
		data() {
		    return {
		        
		    }
		}
	}
</script>

<style>
</style>
