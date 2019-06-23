<template>
	<div class="di">
	  <div class="header">
	  	<router-link  to="/index" class="inone">Lip's</router-link>
		<div class="two" >
			<div>
				<a href="" @mouseover="show" @mouseleave="live">ysl</a>
				<a href="" @mouseover="show" @mouseleave="live">ysl</a>
				<a href="" @mouseover="show" @mouseleave="live">ysl</a>
				<a href="" @mouseover="show" @mouseleave="live">ysl</a>
			</div>
			<a href="">商城</a>
		</div>
		<el-dropdown class="el-dropdown">
			<span class="iconfont icon-daizi1"></span>
			<el-dropdown-menu slot="dropdown" class="dropdown">
			    <el-dropdown-item icon="el-icon-female">登陆</el-dropdown-item>
			    <el-dropdown-item icon="el-icon-price-tag">个人中心</el-dropdown-item>
			    <el-dropdown-item icon="el-icon-shopping-cart-full"><router-link class="sty" to="/ShoppingCart">购物车</router-link></el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	  </div>
	  <el-collapse-transition>
        <div v-show="type">
          <div class="transition-box" @mouseover="show" @mouseleave="live">
      		<div class="moban">
          		<img src="" alt="" />
          		<router-link class="mo" to="/details">dsadsadjiasdjsa</router-link>
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
	justify-content: flex-start;
	align-items: flex-end;
	padding-left:100px;
	padding-bottom: 50px;
 }
 .transition-box .moban{
 	width:150px;
 	height: 150px;
 	display: flex;
 	flex-direction: row;
 	align-items:center;
 }
 .transition-box .moban>img{
 	height:70%;
 }
 .transition-box .moban .mo{
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
    data: () => ({
      type:false
    }),
    methods:{
    show(){
      	this.type=true;
     },
     live(){
     	this.type=false;
     }
    },
  }
</script>