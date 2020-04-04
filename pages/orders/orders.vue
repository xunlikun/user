<template>
	<view class='orders bg'>
		 <liuyuno-tabs :tabData="tabs" :defaultIndex="defaultIndex" @tabClick='tabClick' />
		 <OrderList :datas='datas' :type='defaultIndex'></OrderList>
	</view>
</template>
<script>
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import OrderList from '@/components/OrderList/OrderList.vue'
	export default {
	  components: {
		  liuyunoTabs,
		  OrderList
	  },
	  data () {
		return {
			tabs:[{text:"全部",type:'0'},{text:"待付款",type:'1'},{text:"待发货",type:'2'},{text:"评价",type:'3'}],
			defaultIndex:'1',
			datas:[{time:"2020.1.13"},{time:"2020.1.13"},{time:"2020.1.13"}]
		};
	  },
	  methods: {
		  tabClick(index){
			  this.defaultIndex = index
		  }
	  }
	};
</script>
<style>
</style>
