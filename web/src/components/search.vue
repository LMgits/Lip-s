<template>
    <div id="sousuo">
        <span>
            <el-input placeholder="请输入内容" v-model="input" class="searchClass">
                <div slot="prepend">
                    <div class="centerClass">
                        <el-select v-model="select" placeholder="请选择" style="width: 90px">
                            <el-option label="餐厅" value="1"></el-option>
                            <el-option label="订单" value="2"></el-option>
                            <el-option label="用户" value="3"></el-option>
                        </el-select>
                    </div>
                    <div class="centerClass"><div class="line"></div></div>
                </div>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </span>
        <div class="content">
            <ul>
                <li>
                    <img src="../assets/img/L-pkt.jpg" alt="">
                    <div class="p-price">
                    <strong class="jg" data-done="1"><em>￥</em><i>78.00</i></strong>
                    </div>
                    <div class="p-name p-name-type-2">
						<a target="_blank"  href="//item.jd.com/6291116.html" onclick="searchlog(1,6291116,1,1,'','flagsClk=1631589000')">
							<em>卡姿兰（Carslan）)</em>
							<i class="promo-words" id="J_AD_6291116">满199减100新人首页点击关注领券，叠加每满199减100</i>
						</a>
					</div>
                    <p class="jrcar">加入购物车</p>
                </li>
                <li><img src="../assets/img/L-pko.jpg" alt=""></li>

                <li><img src="../assets/img/L-pkt.jpg" alt=""></li>
                <li><img src="../assets/img/L-pko.jpg" alt=""></li>
                <li><img src="../assets/img/L-pkt.jpg" alt=""></li>
                <li><img src="../assets/img/L-pko.jpg" alt=""></li>

                
               
            </ul>
            
        </div>
    </div>
</template>

<script>
    export default {
  data () {
    return {
      input: '',
      select: ''
    };
  }
};
</script>

<style scoped>
#sousuo {
    margin-top: 80px;
}
span {
    color: #fff;
    display: block;
    height: 50px;
    width: 100%;
    background: rgb(163, 11, 36);
    line-height: 50px;
    font-size: 30px;
}

.el-input-group{
    width: 40%;
   
}
.content{
    width: 100%;
    height: 400px;
   /* background: fuchsia; */
}
.content ul{
    margin-left: 35px;
    display: flex;
    flex-direction: ;
}
.content ul li{
    margin-right: 10px;
    background: #C0C4CC;
}
.content ul li img{
    width:300px;
    /* height: 400px; */
}
.p-price {
    color: red;
}
.goods-list-v2 .gl-item .p-name {
    height: 40px;
    margin-bottom: 8px;
    overflow: hidden;
}
a {
    color: #666;
    text-decoration: none;
}
.jrcar{
    margin-top: 5px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color:#F20D0D ;
    border: 1px solid #F20D0D;
}
</style>
