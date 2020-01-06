<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		computed:{
			...mapState(['hasLogin'])
		},
		onLaunch: function() {
			console.log('App Launch',this.hasLogin)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./common/style/common.css");
	/*每个页面公共css */
	.column-justify-center{
		justify-content: center;
	}
	.column-align-items-left{
		align-items: left;
	}
	.column-align-items-center{
		align-items: center;
	}
	
</style>