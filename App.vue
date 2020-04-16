<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		computed:{
			...mapState(['hasLogin'])
		},
		onLaunch: function() {
			
		},
		onShow: function() {
			
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
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	.bg{
	 	background-color:#f9f9f9;
	 	position:absolute;
	 	top:0;
	 	left:0;
	 	bottom:0;
	 	right:0;
		overflow: scroll;
	}
	text{
		font-size: 12px;
	}
	.bg_img{
		background-size: 100%;
		background-position-y: -70rpx;
	}
	.right{
		float: right;
		display: inline-block;
		width: 16px;
		height: 30px;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>