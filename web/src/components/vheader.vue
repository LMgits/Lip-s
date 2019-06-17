<template>
	<div class="di">
	  <div class="header">
	  	<a href="" class="one">Lip's</a>
		<div class="two" >
			<div @mouseleave="show">
					<a href="" @mouseover="show">ysl</a>
					<a href="" @mouseover="show">ysl</a>
					<a href="" @mouseover="show">ysl</a>
					<a href="" @mouseover="show">ysl</a>
			</div>
			<a href="">商城</a>
		</div>
		<el-dropdown class="el-dropdown">
			<span class="iconfont icon-daizi1"></span>
			<el-dropdown-menu slot="dropdown" class="dropdown">
			    <el-dropdown-item icon="el-icon-female">登陆</el-dropdown-item>
			    <el-dropdown-item icon="el-icon-price-tag">个人中心</el-dropdown-item>
			    <el-dropdown-item icon="el-icon-shopping-cart-full">购物车</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	  </div>
	  <el-collapse-transition>
        <div v-show="type">
          <div class="transition-box" @mouseover="show" @mouseleave="show">
          </div>
        </div>
    </el-collapse-transition>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.di{
	position: relative;
}
.header{
	position: fixed;
	z-index: 2;
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
.one{
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
</style>
<script>
	export default {
    data: () => ({
      type:false
    }),
    methods:{
    show(){
      	this.type=!this.type;
     },
    },
  }
</script>