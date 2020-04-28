<template>
	<view class="bg" style="position: relative;">
		<view class="advertising_wrap">
			
		</view>
		<view class="contract uni-padding-wrap">
			<template v-for="(item,i) in contract.records">
				<ContractItem :key='i' :datas='item' @popup='popup' @pushCheckContract='pushCheckContract'></ContractItem>
			</template>
		</view>
		<view class="signUI" v-if="signUI">
			<button @tap="sign">确认签订</button>
		</view>
		<uni-popup ref="popupAuth" type="center">
				<view style="height: 40vh;background-color: #fff;width:700rpx;overflow: hidden;">
					<view class=" has-mgtb-10 " style="padding-bottom: 26px ;margin: 80rpx auto 0 auto;width: 250px;">
						<input v-model="auth" type="number" maxlength="6" placeholder="短信验证码" class="is-input1 " />
						<view class="codeimg" @tap="getsmscode">{{smsbtn.text}}</view>
					</view>
					<button :loadingSign='loadingSign' @tap="confirmSign" class="confirmSign">确认</button>
				</view>
		</uni-popup>
		<Loading
		ref="loading"
		:custom="false"
		:shadeClick="true"
		:type="2">
		
		</Loading>
	</view>
</template>

<script>
import ContractItem from "@/components/contract/contract.vue";
import Loading from '@/components/xuan-loading/xuan-loading.vue'
import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"
export default {
		components:{ContractItem,Loading,uniPopup},
		data() {
			return {
				title: '合同',
				contract:{},
				searchInfo:{current:1},
				loading:false,
				loadingSign:false,
				longItem:null,
				signContract:[],
				smsbtn: {
					text: '获取验证码',
					status: false,
					codeTime: 60
				},
				auth:''
			}
		},
		onShow() {
			this.getContract(this.searchInfo)
		},
		onReachBottom() {
			if(!this.loading){
				this.searchInfo.current ++
				this.getContract(this.searchInfo)
			}
		},
	computed: {
		signUI() {
			return this.signContract.length > 0 ? true : false 
		}
	},
		methods: {
			confirmSign(){
				this.loadingSign = true
				let parmas = []
				for (let i = 0; i < this.signContract.length; i++) {
					parmas.push(this.signContract[i].id)
				}
				this.$http.post('/app/contract/signed',{ids:parmas,verificationCode:this.auth}).then(res => {
					this.loadingSign = false
					if(res.data.status == 200){
						uni.showToast({
							title:'签订成功',
							icon:'none'
						})
						this.signContract = []
					}else{
						uni.showToast({
							title:'签订失败',
							icon:'none'
						})
					}
					this.contract = {}
					this.searchInfo.current = 1
					
					this.getContract(this.searchInfo)
					this.$refs.popupAuth.close()
				}).catch(err => {
					
				})
			},
			getsmscode: function() {
				if (this.smsbtn.status == true ) {
					console.log('message：', "别着急！短信已经发送了~");
					return false;
				}
				this.$http.post('/app/contract/sendSignMobileCode').then(res => {
					this.smsbtn.status = true;
				}).catch(err => {
				
				})
				 // 这段代码其实应该加在你request请求 短信发送成功后 
				this.timerId = setInterval(() => {
						var codeTime = this.smsbtn.codeTime;
						codeTime--;
						this.smsbtn.codeTime = codeTime;
						this.smsbtn.text = codeTime + "S";
						if (codeTime < 1) {
							clearInterval(this.timerId);
							this.smsbtn.text = "重新获取";
							this.smsbtn.codeTime = 60;
							this.smsbtn.status = false;
						}
					},
					1000);
				return false;
			},
			sign(){
				this.$refs.popupAuth.open()
			},
			pushCheckContract(item){
				if(this.signContract == 0){
					this.signContract.push(item)
				}else{
					for (let i = 0; i < this.signContract.length; i++) {
						if(this.signContract[i].id == item.id){
							this.signContract.splice(i,1)
							return
						}
					}
					this.signContract.push(item)
				}
			},
			getContract(searchInfo){
				this.loading = true
				this.$refs.loading.open();
				this.$http.post('/app/contract/list',searchInfo).then(res => {
					this.loading = false
					this.$refs.loading.close();
					if(this.contract.records){
						let tempRecords = JSON.parse(JSON.stringify(this.productData.records.concat(res.data.data.records)))
						this.contract = res.data.data
						this.contract.records = tempRecords
						this.searchInfo.current = res.data.data.current
					}else{
						this.contract = res.data.data
						this.searchInfo.current = res.data.data.current
					}
				}).catch(err => {
					
				})
			}
		}
	}
</script>

<style>
	.signUI{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 120rpx;
		background-color: #fff;
		width: 100%;
	}
	button {
		margin-top: 16rpx;
		height: 88rpx;
		width: 250px;
		line-height: 88rpx;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		font-family: inherit;
		background: #f35;
		opacity: 0.8;
	}
	button.confirmSign{
		margin-top: 140rpx;
	}
	
	button:after {
		border: 2rpx solid #f2f2f2;
	}
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
	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		padding: 12rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}
	.codeimg {
		position: absolute;
		font-size: 28rpx;
		right: 16%;
		z-index: 10;
		width: 200rpx;
		text-align: center;
		color: #353535;
		margin-top: -12%;
		border-top-right-radius: 44rpx;
		border-bottom-right-radius: 44rpx;
		height: 80rpx;
		line-height: 80rpx;
	}
</style>
