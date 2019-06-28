<template>
    <div>
      
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
    height: 50px;
    background: lemonchiffon;
    position: fixed;
    top:570px;
    left: 0;
    display: flex;
    justify-content:flex-end ;
    
}

</style>
