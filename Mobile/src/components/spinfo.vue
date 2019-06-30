<template>
    <div>
        <div class="hello">
            <mt-header title="Lip's">
                <router-link to="/my" slot="left">
                    <mt-button icon="back">返回</mt-button>
                    <!-- <mt-button @click="handleClose">关闭</mt-button> -->
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </div>
          <ul class="xq">
            <li>
              
                 <img src="../assets/img/dd.jpg" alt="" />
                 <p>Dior/奥迪口红烈艳蓝金金旗舰唇膏999 520 740女哑…</p>
                 <span>￥235</span>
                 <p class="tj">提交订单</p>
            </li>
            <li>
                
                <img src="../assets/img/dd1.jpg" alt="" />
                <p>Dior/奥迪口红烈艳蓝金金旗舰唇膏999 520 740女哑…</p>
                <span>￥356</span> 
                <p class="tj" @click="add">提交订单</p>
            </li>
        </ul>
        
    </div>
</template>

<script>
</script>

<style scoped>
    ul li{
        display: flex;
        flex-direction: column;
         justify-content:center;
         margin-top: 10px;
         
    }
     ul li img{
         width: 100%;
         height: 200px;
     }
     ul li .tj{
         display: inline-block;
        border: 2px solid firebrick;
       color: firebrick;
       width: 100px;
       text-align: center;
     }
</style>
