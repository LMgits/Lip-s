<template>
    <div>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="首页">
                <img slot="icon" src="../assets/img/shouye.png" >
                <router-link to="/index" tag='a'>首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="../assets/img/qianbao.png" >
               <router-link to="/order" tag='a'>订单</router-link> 
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/img/gouwu.png" >
               <router-link to="/xiangqing" tag='a'>发现</router-link> 
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/img/youhuiquan.png" >
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script></script>

<style scoped>
    a{
        text-decoration: none;
    }
</style>
