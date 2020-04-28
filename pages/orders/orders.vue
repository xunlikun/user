<template>
	<view class='orders bg' style="position: relative;">
		 <liuyuno-tabs :tabData="tabs" :defaultIndex="defaultIndex" @tabClick='tabClick' />
		 <OrderList :datas='datas.records' :type='defaultIndex' @trigerLoading='trigerLoading'></OrderList>
		 <Loading
		 ref="loading"
		 :custom="false"
		 :shadeClick="true"
		 :type="2">
		 
		 </Loading>
	</view>
</template>
<script>
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import OrderList from '@/components/OrderList/OrderList.vue'
	import Loading from '@/components/xuan-loading/xuan-loading.vue'
	export default {
	  components: {
		  liuyunoTabs,
		  OrderList,
		  Loading
	  },
	  data () {
		return {
			tabs:[{text:"待付款",type:'0'},{text:"付款失败",type:'1'},{text:"已付款",type:'2'}],
			defaultIndex:'0',
			datas:{},
			searchInfo:{current:1,size:10,paymentStatus:'0'},
			loading:false
		};
	  },
	  onShow() {
	  	this.getOrderList(this.searchInfo)
	  },
	  onReachBottom() {
		 if(!this.loading){
			 this.searchInfo.current ++
			 this.getOrderList(this.searchInfo)
		 }
	  },
	  methods: {
		  tabClick(index){
			  console.log(index)
			  this.defaultIndex = index
		  },
		  trigerLoading(boole){
			  this.$refs.loading[boole ? "open" : "close"]();
		  },
		  getOrderList(searchInfo){
			  this.loading = true
			  this.$refs.loading.open();
			  this.$http.post('/app/order/list',searchInfo).then(res => {
				  if(this.datas.records){
					  let tempRecords = JSON.parse(JSON.stringify(this.datas.records.concat(res.data.data.records)))
					  this.datas = res.data.data
					  this.datas.records = tempRecords
					  this.searchInfo.current = res.data.data.current
				  }else{
					  this.datas = res.data.data
					  this.searchInfo.current = res.data.data.current
				  }
				  this.$refs.loading.close();
				  this.loading = false
			  })
		  }
	  },
	  watch: {
	  	defaultIndex(newValue, oldValue) {
			this.datas = {}
			this.searchInfo.paymentStatus = newValue
			this.searchInfo.current = 1
	  		this.getOrderList(this.searchInfo)
	  	}
	  },
	};
</script>
<style>
</style>
