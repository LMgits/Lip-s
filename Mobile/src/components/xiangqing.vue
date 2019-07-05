<template>
    <div  class="khxq">
		<!-- 头部 -->
		<div class="hello">
		    <mt-header title="Lip's">
		        <router-link to="/" slot="left">
		            <!-- <mt-button icon="back">返回</mt-button> -->
		            <!-- <mt-button @click="handleClose">关闭</mt-button> -->
		        </router-link>
		        <!-- <mt-button icon="more" slot="right"></mt-button> -->
		    </mt-header>
		</div>
		<!-- 底部 -->
		<mt-tabbar v-model="selected" class="di">
		    <mt-tab-item id="首页">
		        <img slot="icon" src="../assets/img/shouye.png" >
		        <router-link to="/index" tag='a'>首页</router-link>
		    </mt-tab-item>
		    <mt-tab-item id="订单">
		        <img slot="icon" src="../assets/img/dd.png" >
		       <router-link to="/order" tag='a'>订单</router-link> 
		    </mt-tab-item>
		    <mt-tab-item id="发现">
		        <img slot="icon" src="../assets/img/gouwu.png" >
		       <router-link to="/xiangqing" tag='a'>发现</router-link> 
		    </mt-tab-item>
		    <mt-tab-item id="我的">
		        <img slot="icon" src="../assets/img/youhuiquan.png" >
		        <router-link to="/my" tag='a'>我的</router-link> 
		    </mt-tab-item>
		</mt-tabbar>
        <div>
            <img src="../assets/img/1.jpg" alt="" />
            <img src="../assets/img/2.jpg" alt="" />
        
        </div>
        <!-- <div class="khxq"><img src="../assets/img/2.jpg" alt="" /></div> -->
    </div>
</template>

<script></script>

<style scoped>
.khxq{
   /* height: 800px; */
  
}
.di {
		position: fixed !important;
		left: 0px !important;
		bottom: 0px !important;
		width: 100% !important;
		height: 50px !important;
		z-index: 9999 !important;
	}

.khxq img {
   width: 100%;
   height: 100%;
}
.mint-tabbar{
  /*  position: fixed;
    left: 0;
    top: 100%; */
}
</style>
