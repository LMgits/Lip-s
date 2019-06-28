<template>
    <div>
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
    text-align: center;
}
.tplist li:nth-of-type(1) {
    margin-left: 0;
}
.tplist li {
    margin-left: 20px;
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
