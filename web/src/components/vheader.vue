<template>
	<div class="di">
	  <div class="header">
	  	<router-link  to="/index" class="inone">Lip's</router-link>
		<div class="two" >
			<div>
				<a href="" @mouseover="showlala">圣罗兰</a>
				<a href="" @mouseover="showlala">纪梵希</a>
				<a href="" @mouseover="showlala">迪奥</a>
				<a href="" @mouseover="showlala">阿玛尼</a>
			</div>
			<router-link to="/search">商城</router-link>
		</div>
		<el-dropdown class="el-dropdown">
			<span class="iconfont icon-daizi1"></span>
			<el-dropdown-menu slot="dropdown" class="dropdown">
			    <el-dropdown-item icon="el-icon-female"><router-link class="sty" to="/login">登陆</router-link></el-dropdown-item>
			    <el-dropdown-item icon="el-icon-price-tag"><a class="sty"  href="#javascript:;" @click="link('personal')">个人中心</a></el-dropdown-item>
			    <el-dropdown-item icon="el-icon-shopping-cart-full"><a class="sty" href="#javascript:;"@click="link('ShoppingCart')">购物车</a></el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	  </div>

	  
	  <el-collapse-transition>
        <div v-show="type">
          <div class="transition-box" @mouseover="show" @mouseleave="live">
      		<div class="moban" v-for="items in goods" @mouseover="show">
          		<img :src="items.src" alt=""/>
          		<router-link class="mo" :to="'/details/'+items._id">{{items.name}}</router-link>
      		</div>
          </div>
        </div>
    </el-collapse-transition>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../assets/font/one/iconfont.css'
</style>
<style scoped lang="less">
.di{
	position: relative;
	z-index: 1000;
}
.header{
	left: 0;
	top:0;
	position: fixed;
	z-index: 1000;
	width: 100%;
	height:80px;
	display: flex;
	justify-content:space-between;
}
.header a{
	color: #000;
	display: block;
	text-decoration: none;
	display:flex;
	justify-content: space-around;
	align-items:center;
}
.header>a>img{
	height:80px;
}
.inone{
	width:15%;
	font-size: 30px;
}
.two{
	width: 45%;
	display:flex;
	justify-content: space-around;
	align-items:center;
}
.two div{
	height: 100%;
	width: 80%;
	display:flex;
	justify-content: space-around;
	align-items:center;
}
.transition-box {
   	top:0px;
	width: 100%;
	position:absolute;
	height:300px;
	background: #fff;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
 }
 .transition-box .moban{
 	width:150px;
 	height: 240px;
 }
 .transition-box .moban>img{
 	width: 100%;
 	height:70%;
 }
 .transition-box .moban .mo{
 	display: block;
 	width: 100%;
 	color: #000;
 }
.el-dropdown{
	width: 25%;
	display:flex;
	justify-content: space-around;
	align-items:center;
 }
.icon-daizi1 {
	font-size: 30px;
    cursor: pointer;
    color: #409EFF; 
}
.dropdown{
	width: 15%;
}
.sty{
	text-decoration: none;
	color: #000;
}
</style>
<script>
	export default {
    data(){
    	return{
    		type:false,
      		goods:[],
    	}
    },
    methods:{
    show(){
    	this.type=true;
    },
    showlala(even){
    	this.type=true;
      	var goodsname = even.currentTarget.text;
      	let params = new URLSearchParams();
      	var self = this;
        params.append('usrename',goodsname)
		axios.post('/product',params).then(function (response) {
			 for(var i = 0;i<response.data.length;i++){
			 	response.data[i].src = require(`../${response.data[i].src}`)
			 }
			 self.goods = response.data;
  		})
     },
     live(){
     	this.type=false;
     },
     link(dizhi){
     	if(this.GLOBAL.hasEnter){
     		if(dizhi === 'personal'){
     			this.$router.push({name:dizhi,params:{names:this.GLOBAL.hasName}})
     		}else{
     			this.$router.push({name:dizhi});
     		}
     	}else{
     		alert('请先登录！');
     	}
     }
  }
}
</script>