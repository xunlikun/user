export function isPoneAvailable(pone) {
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(pone)) {
				return false;
				} else {
				return true;
				}
			}
			
export function emailCheck(value){
				var reg = new RegExp("^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$"); //正则表达式
				if(value === ""){ //输入不能为空
					return false;
				}else if(!reg.test(value)){ //正则验证不通过，格式不对
					return false;
				}else{
					return true;
				}
			}

export function passwordCheck(value){
				var reg = new RegExp("^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,16}$")
				if(value === ""){
					return false;
				}else if(!reg.test(value)){
					return false;
				}else{
					return true;
				}
			}