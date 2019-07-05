<template>
    <div id="jiesuan">
        <span>Lip's 结算</span>

        <template>
            <ul>
                <li>
                    <h3>收货人信息</h3>
                    <el-button type="text" @click="dialogFormVisible = true">新增收货地址</el-button>
                    <el-dialog title="新增收货人信息" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="*所在地区" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off"><div></div></el-input>
                            </el-form-item>
                            <el-form-item label="活动名称" :label-width="formLabelWidth"><el-input v-model="form.name" autocomplete="off"></el-input></el-form-item>

                            <el-form-item label="活动区域" :label-width="formLabelWidth">
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer"><el-button @click="dialogFormVisible = false">保存收货信息</el-button></div>
                    </el-dialog>
                </li>
                <li class="cityhq">
                    <el-select id="shen" v-model="value" placeholder="请选择省" class="sheng" @change="top">
                        <el-option v-for="item in sheng" :key="item.area_id" :label="item.area_name" :value="item.area_id"></el-option>
                    </el-select>
                    <br />
                    <el-select id="shen" v-model="value1" placeholder="请选择市" class="shi" @change="content">
                        <el-option v-for="item in shi.city_list" :key="item.area_id" :label="item.area_name" :value="item.area_id"></el-option>
                    </el-select>
                    <el-select id="shen" v-model="value2" placeholder="请选择区" class="qu">
                        <el-option v-for="item in qu.county_list" :key="item.area_id" :label="item.area_name" :value="item.area_id"></el-option>
                    </el-select>
                </li>
                <li class="cityhq">
                    <h3>支付方式</h3>
                    <template>
                        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                            <el-radio-button label="top">货到付款</el-radio-button>
                            <el-radio-button label="right">在线支付</el-radio-button>
                        </el-radio-group>
                    </template>
                </li>
                <li>
                    <h3>送货清单</h3>
                    <div class="xq">
                        <div class="khtp">
                            <span>配送方式</span>
                            <p class="yunshufangshi">快速运输</p>
                            <!-- <img src="../../assets/img/L-pko.jpg" alt=""> -->
                            <p>
                                配送时间：
                                <em>工作日、双休日节假日均可送货</em>
                            </p>
                            <strong><em>前慈美妆专营店7天内退货，15天内换货，可享1次运费赔付到小金库</em></strong>
                        </div>
                        <div class="khxq">
                           <h4>商家：前慈美妆专营店</h4>
                           <div class="sp-info">
                                <img src="../../assets/img/spxi.jpg" alt="" />
                                <p>【JD搭配】Dior迪奥口红 女士唇膏 烈艳蓝金<br>999正红(哑光) 赠精美礼盒礼袋 <br><br> <strong>颜色：烈艳蓝金999</strong></p>
                                <strong class="jg">￥260.00</strong>
                                <strong>x1</strong>
                                <p>有货</p>

                            </div>
                            <div class="cl">
                                <p>【赠品】　补妆镜或赠品小熊玩偶.x1 <em>查看价格</em></p>
                            </div>
                            <div class="cl">
                                <p>【赠品】　奥迪礼袋.x1 <em>查看价格</em></p>
                            </div>
                            <div class="cl">
                                <p>【赠品】　礼盒.x1 <em>查看价格</em></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="spze">   
                    <p class="price-num" id="sumPayPriceId"><strong>应付总额:</strong>￥260.00</p>
                    <p class="dz">寄送至:四川泸州市龙马潭区红新街道长桥路2号泸州职业技术学院-南大门　收货人：闫河182****0743</p>

                </li>
                <li>
                    <span>提交订单</span>

                </li>
            </ul>
            
          
        </template>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data() {
        return {
            sheng: [],
            value: '',
            shi: [],
            value1: '',
            qu: [],
            value2: '',
            dialogTableVisible: false,
            dialogFormVisible: false,
            tabPosition: 'left',
            // activeName: 'second',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        };
    },
    methods: {
        top() {
            this.shi = this.sheng.filter(item => item.area_id === this.value)[0];
            this.value1 = '';
            this.value2 = '';
        },

        content() {
            this.qu = this.shi.city_list.filter(item => item.area_id === this.value1)[0];
        }
    },
    created() {
        Axios.get(`http://m.xyucd.com:7000/address-list`).then(res => {
            let { data } = res.data;
            this.sheng = data;
        });
    }
    // handleClick(tab, event) {
    //     console.log(tab, event);
    //   }
};
</script>

<style scoped>
#jiesuan {
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
ul {
    height: 50px;
    width: 70%;
    margin: 0 auto;
}
ul li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    min-height: 60px;
    border: 1px solid #ccc;
}
ul li h3 {
    text-align: left;
    display: block;
    float: left;
}
.cityhq {
    display: flex;
    flex-direction: row;
    /* justify-content:flex-start; */
}

.el-button--text:hover {
    color: #f20d0d;
}
.el-button {
    color: #f20d0d;
    float: left;
    padding: 0;
}

.el-button--text {
    float: right;
}
.el-select {
    width: 30%;
    float: left;
    margin-right: 30px;
}
.sheng {
    margin-top: 10px;
}
.shi {
    margin-top: 10px;
}
.qu {
    margin-top: 10px;
}
.el-radio-button__inner,
.el-radio-group {
    margin-top: 25px;
    /* margin-left: -815px; */
}
.xq {
    display: flex;
    flex-direction: row;
    width: 100%;
    /* height: 500px; */
    background: #f2fae3;
}
.khtp {
    width: 30%;
    height: 400px;
    /* background: fuchsia; */
}
.khxq {
    width: 70%;
    height: 400px;
    background: rgb(243, 251, 254);
}
.price-num {
    color: #e4393c;
    font-family: Verdana;
    font-weight: 700;
    font-size: 18px;
    min-width: 122px;
    _width: 122px;
    float: right;
    *float: none;
    text-align: right;
}
.khtp .yunshufangshi {
    margin-top: 10px;
    width: 50%;
    height: 40px;
    line-height: 40px;
    border: 1px solid crimson;
}
.khtp p {
    color: #999;
    margin-top: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.khtp p em {
    color: #000000;
}
.khtp strong {
    display: inline-block;
    margin-top: 30px;
    padding-left: 100px;
    background: url(../../assets/img/yf.png) no-repeat left;
}
.khxq h4{
    margin-left: 20px;
    text-align: left;
    color:#999;
}
.sp-info{
    margin-top: 20px;
    display: flex;
    text-align: left;
    margin-left: 20PX;
}
.jg{
    color:firebrick;
    margin-left: 30px;
}
.sp-info strong{
    margin-left: 30px;
}
.sp-info p{
    margin-left: 37px;
}
.cl{
    margin-top: 10px;
     margin-left: 10px;
     text-align: left;
}
.cl p{
    color: #999;
}
.cl p em{
    color: #000000;
}
.spze {
    background: #ccc;
}
.spze strong{
    margin-right: 20px;
   color: #000000;
}
.dz{
    text-align: right;
    color: #999;
}
</style>
