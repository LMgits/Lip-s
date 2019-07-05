<template>
<<<<<<< HEAD
	<div>
		<div>sacsac</div>
		<foot></foot>
	</div>
</template>

<script>
</script>

<style>
</style>
=======
    <div>
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
		<mt-tabbar v-model="selected">
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
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
        <ul class="tplist">
            <li>
                <img slot="icon" src="../assets/img/shangdian.png" />
                <br />
                <span>苏宁易购</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/beiwanglu.png" />
                <br />
                <span>聚划算</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/huahua.png" />
                <br />
                <span>天猫超市</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/shizhong.png" />
                <br />
                <span>京东</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/yule.png" />
                <br />
                <span>分类</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/youyong.png" />
                <br />
                <span>拼多多</span>
            </li>
        </ul>
        <ul class="tplist">
            <li>
                <img slot="icon" src="../assets/img/shangdian.png" />
                <br />
                <span>苏宁易购</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/beiwanglu.png" />
                <br />
                <span>聚划算</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/huahua.png" />
                <br />
                <span>天猫超市</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/shizhong.png" />
                <br />
                <span>京东</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/yule.png" />
                <br />
                <span>分类</span>
            </li>
            <li>
                <img slot="icon" src="../assets/img/youyong.png" />
                <br />
                <span>拼多多</span>
            </li>
        </ul>
        <mt-swipe :auto="4000" class="lb">
            <mt-swipe-item><img src="../assets/img/lb.jpg" alt="" /></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/lb2.jpg" alt="" /></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/lb3.jpg" alt="" /></mt-swipe-item>
        </mt-swipe>
        <div id="sever"><img src="../assets/img/server.jpg" /></div>
    </div>
</template>

<script></script>

<style scoped>
* {
    list-style: none;
    padding: 0;
    margin: 0;
}
.mint-search {
    height: 100%;
}
.tplist {
    display: flex;
    margin-top: 10px;
	justify-content: center;
}
.tplist li:nth-of-type(1) {
    margin-left: 0;
}
.tplist li {
    margin-left: 22px;
}
.tplist li img {
    width: 40px;
    height: 40px;
}
.tplist li span {
    color: #999;
    font-size: 12px;
}
.lb {
    margin-top: 10px;
   height: 150px;
}
.lb img {
    width: 100%;
    height: 150px;
}
#sever img {
    width: 100%;
    height: 201px;
}
</style>
>>>>>>> 77a52a13384826c9fc45705727bf735825ae0887
