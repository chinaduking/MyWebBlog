<template>
	<div class="login_box">
		<div class="login_err" v-show = "LoginErr">
			登录失败:{{LoginErrMsg}}
		</div>
		
		<div class="login_title">
			<h6>后台管理管理</h6>
		</div>

		<div class="login_body">
			<input type="text" class="form-control" placeholder="用户名" v-model="username">
			<input type="password" class="form-control" placeholder="密码" v-model="password" @keyup.13="login">
		</div>

		<div class="login_footer">
			<div class="login-button-Container">
	            <button class="btn btn-info btn-block" @click="login">
	              登录
	            </button>
          	</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import Token from '../../store/token'
import md5 from 'md5'

export default{
	data(){
		return{
			LoginErr: false,
			LoginErrMsg: '',
			username: '',
			password: '',
		}
	},

	methods:{
		login(){
			var that = this;
			Token.createToken(this.username,md5(this.password),that).then(res=>{
				if(!res.data.success){
          			this.LoginErrMsg = '账号或密码错误';
          			this.LoginErr = true;
          		}
			})
		}
	}
}
</script>

<style type="text/css">
.login_box{width: 400px;min-height: 220px;margin: 200px auto;background-color: #FFF;border-radius: 10px;padding: 15px 15px;border:solid 1px #84C1FF;}
.login_err{text-align: center; margin-bottom: 10px;font-size: 14px;color: red;}
.login_title{text-align: center;margin-bottom: 15px;}
.login_body{margin-bottom: 20px;}
.login_body .form-control{margin-bottom: 10px;}
</style>