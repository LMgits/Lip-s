<template>
    <div class="login">
		<div id="wrapper" class="login-page" >
			<transition   mode="out-in">
				<div id="login_form" class="form">

 <transition name="aa"  mode="in-out">
				<form class="register-form" v-if="show2">
						<input type="text" placeholder="用户名" id="r_user_name" v-model="usrename">
						<input type="password" placeholder="密码" id="r_password"  v-model="usrepassword">
						<span id="create" @click="register">创建账户</span>
						<p class="message">已经有了一个账户? <a v-on:click="sort">立刻登录</a></p>
				</form>
</transition>
 <transition name="bb"   mode="in-out">
				<form class="login-form"  v-if="show1" >
						<input type="text" placeholder="用户名" id="user_name" v-model="usrename">
						<input type="password" placeholder="密码" id="password" v-model="usrepassword">
						<span id="login" @click="login">登　录</span>
						<p class="message">还没有账户?<a @click="sort">立刻创建</a></p>
						<br>
				</form>
</transition>
			</div> 
			</transition>
			</div>
    </div>
</template>
<style>
	.bb-enter,
	.bb-leave-to{
		opacity: 0;
		transform:translateY(200PX);
		position: absolute;
		top:0;
		left:0;
	}
	.bb-enter-active,
	.bb-leave-active{
		transition: all 1s ease; 
	}
	.aa-enter,
	.aa-leave-to{
		opacity: 0;
		transform:translateY(200PX);
		position: absolute;
		top:0;
		left:0;
	}
	.aa-enter-active,
	.aa-leave-active{
		transition: all 1s ease; 
	}
.login-page {
	width: 360px;
	padding: 8% 0 0;
	margin: auto;
}
.form {
	position: relative;
	z-index: 1;
	background: #FFFFFF;
	max-width: 360px;
	margin: 0 auto 100px;
	padding: 45px;
	text-align: center;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
	font-family: "Roboto", sans-serif;
	outline: 0;
	background: #f2f2f2;
	width: 100%;
	border: 0;
	margin: 0 0 15px;
	padding: 15px;
	box-sizing: border-box;
	font-size: 14px;
}
.form button {
	font-family: "Microsoft YaHei", "Roboto", sans-serif;
	text-transform: uppercase;
	outline: 0;
	background: rgb(163,11,36);
	width: 100%;
	border: 0;
	padding: 15px;
	color: #FFFFFF;
	font-size: 14px;
}
.form button:hover, .form button:active, .form button:focus {
	background: #47020d;
}
.form .message {
	margin: 15px 0 0;
	color: #b3b3b3;
	font-size: 12px;
}
.form .message a {
	color: rgb(163,11,36);
	text-decoration: none;
}
.form .register-form {
	display: block;
}
.login {
	position: absolute;
	width:100%;
	height: 100%;
	background: #76b852;
	/* background: linear-gradient(to left, #76b852, #8DC26F); */
	font-family: "Roboto", sans-serif;
	background-image: url(../assets/img/dlzc.jpg);
}
p.center {
	color: #fff;
	font-family: "Microsoft YaHei";
}
</style>
<script>
export default {
    name: "login",
    data(){
        return{
            msg: "",
            usrename: '',
            usrepassword: '',
            nameId: "",
            showID: false,
			show1: true,
			show2: false,
            array: [],
            showAll: false
        }
    },
    created(){
    	if(this.GLOBAL.hasEnter){
    		alert('您已经登录！')
    		this.$router.push({name:'personal',params:{names:this.GLOBAL.hasName}});
    	}
    },
    methods:{
		sort() {
		  this.show1 = !this.show1
		  this.show2 = !this.show2
		},
        login(){
            this.showAll = false
            this.showID = false
            var self = this;
            var params = new URLSearchParams();
            params.append('usrename',this.usrename);
			axios.post('/login',params).then(function (response) {
				if(response.data.length == 0){
					alert("账号密码错误")
				}else if(self.usrepassword != response.data[0].passw){
						alert('账号密码错误')
				}else{
					self.GLOBAL.hasEnter = true;
					self.GLOBAL.hasName = self.usrename;
					self.$router.push({name:'personal',params:{names:self.usrename}});
				}
	  		}).catch((err)=>{
                console.log(err)
            })
        },
        register(){
            this.showAll = false
            this.showID = false
            var self = this;
            var params = new URLSearchParams();
            params.append('usrename',this.usrename);
        	params.append('usrepasswrod',this.usrepassword);
			axios.post('/register',params).then(function (response) {
				alert(response.data)
	  		}).catch((err)=>{
                alert(err)
            })
       }
    }
}
</script>
