<template >
	<view class="mask" v-if="getMaskStatus"></view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
		    return {
		        
		    }
		},
		computed:{
			...mapGetters(['getMaskStatus'])
		}
	}
</script>

<style>
	.mask{
		position: absolute;
		top: 0;
		left: 0;
		width: 100vh;
		height: 100vh;
		background: rgba(0,0,0,.1);
		z-index: 5;
	}
</style>
