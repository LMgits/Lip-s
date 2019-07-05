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
							<div>请选择地址：</div>
							<el-select id="shen" v-model="value" placeholder="请选择省" class="sheng" @change="top">
								<el-option v-for="item in sheng" :key="item.area_id" :label="item.area_name" :value="item.area_id"></el-option>
							</el-select>
							<el-select id="shen" v-model="value1" placeholder="请选择市" class="shi" @change="content">
								<el-option v-for="item in shi.city_list" :key="item.area_id" :label="item.area_name" :value="item.area_id"></el-option>
							</el-select>
							<el-select id="shen" v-model="value2" placeholder="请选择区" class="qu">
								<el-option v-for="item in qu.county_list" :key="item.area_id" :label="item.area_name" :value="item.area_id"></el-option>
							</el-select>
							<div class="di">请输入您的姓名：</div>
							<input type="text" class="inp" >
							<div class="di">请输入您的电话：</div>
							<input type="text" class="inp">
						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">保存收货信息</el-button>
						</div>
					</el-dialog>
				</li>
				<li class="cityhq" style="border-top: 0px; border-bottom: 0px;">
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
							<strong><em>7天内退货，15天内换货，可享1次运费赔付到小金库</em></strong>
						</div>
						<ul class="khxq">
							<div class="khxq1" v-for="(item,index) in table" :key="item.id">
								<div class="sp-info">
									<img class="shangp" :src="item.img" alt="" />
									<p>{{item.name}}</p>
									<strong class="jg">￥{{item.jiage}}.00</strong>
									<strong>x{{item.shuliang}}</strong>

								</div>
							</div>

						</ul>
					</div>
				</li>
				<li class="spze">
					<p class="price-num" id="sumPayPriceId"><strong>应付总额:</strong>￥{{zhongjiage}}.00</p>
					<p class="dz">寄送至:{{dizhi}}　收货人：{{shouhuoren}}</p>

				</li>
				<li class="tjdd">
					<p @click="goumai(table)">提交订单</p>
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
				table: [],
				zhongjiage: '260',
				shouhuoren: '',
				dizhi: '',
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
			},
			goumai(ta){
				let paramc = new URLSearchParams();
				paramc.append('shu',this.GLOBAL.hasName);
				var self = this;
				for(var i = 0;i<ta.length;i++){
					paramc.append(`id${i}`,ta[i]._id);
				}
				axios.post("/goumai",paramc).then(function (response) {
					alert(response.data);
					self.$router.push("/index");
	  			})
			}
		},
		created() {
				let params = new URLSearchParams();
				var self = this;
	        	params.append('usrename',this.GLOBAL.hasName);
	        	axios.post("/login",params).then(function (response) {
					self.shouhuoren = response[0].uen;
					self.dizhi = response[0].dizhi;
	  			})
	        	var cc = new Array();
	        	params.append('shu',this.GLOBAL.hasName);
	        	for(var i = 0; i < this.$route.params.shu.length; i++){
	        		 params.append(`id${i}`,this.$route.params.shu[i])
				}
	        	params.append("length",this.$route.params.shu.length)
				axios.post('/cha',params).then(function (response) {
					for(var i = 0;i < response.data.length;i++){
						response.data[i].img = require(`../${response.data[i].img}`)
						response.data[i].goodTotal = response.data[i].jiage * response.data[i].shuliang;
					}
					self.table = response.data;
	  		})	
		}
	};
</script>

<style scoped>
	.inp{
		width: 99%;
		height: 30px;
	}
	.di{
		margin:10px 0;
	}
	.khxq1 {
		height: 200px;
	}

	.tjdd {
		font-size: 180%;
		width: 40%;
		line-height: 160%;
		padding-top: 1%;
		margin: 0 auto;
		color: #fff;
		background-color: rgb(163, 11, 36);
	}

	.tjdd:hover {
		font-size: 180%;
		width: 40%;
		line-height: 160%;
		padding-top: 1%;
		margin: 0 auto;
		color: #fff;
		background-color: #000000;
	}


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

	.shangp {
		height: 100%;
		width: 15%;
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
		background: #fff;
	}

	.khtp {
		width: 30%;
		/* background: fuchsia; */
	}

	.khxq {
		width: 70%;
		background: #fff;
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
		color: #000;
		height: 40px;
		margin-left: 25%;
		line-height: 300%;
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
	}

	.khxq h4 {
		margin-left: 20px;
		text-align: left;
		color: #000;
	}

	.sp-info {
		margin-top: 20px;
		display: flex;
		text-align: left;
		margin-left: 20PX;
	}

	.jg {
		color: firebrick;
		margin-left: 30px;
	}

	.sp-info strong {
		margin-left: 30px;
	}

	.sp-info p {
		margin-left: 37px;
	}

	.spze {
		background: #fff;
	}

	.spze strong {
		margin-right: 20px;
		color: #000000;
	}

	.dz {
		text-align: right;
		color: #999;
	}

	.spze {
		border: 0px solid #ccc;
	}
	.el-dialog__body{
		padding: 0;
		width: 100%;
		height: 50px;
	}
	.el-select[data-v-14992afc]{
		width: 33%;
		margin-right: 0px;
	}
</style>
