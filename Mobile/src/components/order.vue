<template>
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
        <ul class="xq">
            <li>
                <input type="checkbox">
                 <img src="../assets/img/dd.jpg" alt="" />
                 <p>Dior/奥迪口红烈艳蓝金金旗舰唇膏999 520 740女哑…</p>
                 <span>￥235</span>
            </li>
            <li>
                <input type="checkbox">
                <img src="../assets/img/dd1.jpg" alt="" />
                <p>Dior/奥迪口红烈艳蓝金金旗舰唇膏999 520 740女哑…</p>
                <span>￥356</span> 
            </li>
        </ul>
        <div class="jsuan">
           <mt-button type="danger">结算(0)</mt-button>
        </div>
    </div>
</template>

<script></script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.xq {  
    margin-top: 10px;
    
}
.xq li{
     display: flex;
    /* flex-direction: row; */
    width: 100%;
    height: 80px;
    margin-top: 10px;

}
.xq img {
    width: 30%;
    /* height: ; */
}
.xq input{
    margin-top: 40px;
    margin-left: 5px;
}
.xq p{
    display: inline-block;
    font-size: 12px;
    margin-top: 15px;
}
.xq span{
    display: inline-block;
    color: firebrick;
    line-height: 80px;
    margin-right: 5px;
}
.jsuan{
    width: 100%;
    background: lemonchiffon;
    position: fixed;
    bottom: 57px;
    left: 0;
    display: flex;
    justify-content:flex-end ;
    
}

</style>
