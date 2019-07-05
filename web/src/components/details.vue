<template>
	<div class="hea">
		<span>Lip's 直营店</span>
		<div class="con">
			<div class="nei">
				<img :src="gs[0].src" alt="" />
				<div class="xiang">
					<i>唇秘——女人嘴唇的秘密</i>
					<span>{{gs[0].series}}系列</span>
					<p>{{gs[0].name}}</p>
					<s>价格：${{gs[0].price}}.00</s>
  					<el-select v-model="valuet" placeholder="请选择口红颜色">
    					<el-option v-for="item in corol" :key="item.value" :label="item.label" :value="item.value" id="put"></el-option>
  					</el-select>
  					<div>
  						<el-input-number v-model="num" :min="1" :max="10" label="描述文字" id="num"></el-input-number>
    					<el-button type="primary" id="bt" @click="tijiao(gs[0].name)">加入购物车</el-button>
  					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
      return {
      	lala:'',
      	gs:[],
      	id:'',
      	num: 1,
      	valueo:'',
      	valuet:'',
        corol: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
    methods:{
    	tijiao(names){
    		if(this.GLOBAL.hasEnter){
	    		let params = new URLSearchParams();
	    		params.append('shu',this.GLOBAL.hasName);
	    		params.append('img',this.lala);
	    		params.append('name',names);
	    		params.append('jiage',this.gs[0].price);
	    		params.append('shuliang',this.num);
	    		params.append('type','false');
	    		var self = this;
	    		axios.post('/tianjia',params).then(function (response) {
					alert('添加成功!')
					self.$router.push({name:'index'});
	  			})
    		}else{
    			alert('请先登录！')
    		}
    	}
    },
    created(){
       var routerParams = this.$route.params.id
        this.id = routerParams;
      	let params = new URLSearchParams();
      	var self = this;
        params.append('usrename',this.id)
		axios.post('/xiangqing',params).then(function (response) {
			self.lala = response.data[0].src;
			response.data[0].src = require(`../${response.data[0].src}`)
			self.gs = response.data;
  		})
    },
  }
</script>

<style>
.hea{
	margin-top: 100px;
}
.hea>span{
	color:#fff;
	background: rgb(163,11,36);
	display: block;
	width: 100%;
	height: 50px;
	line-height: 50px;
	font-size: 30px;
}
.con{
	width: 100%;
}
.con .nei{
	border: 1px solid #000;
	margin: 0 auto;
	width:60%;
	height:630px;
	display: flex;
	justify-content:space-around;
	align-items: center;
}
.con .nei>img{
	width: 40%;
	height:90%;
	border: 1px solid #000;
}
.xiang{
	width: 50%;
	height: 90%;
	text-align: left;
}
.xiang>span{
	height: 10%;
	display: block;
	width: 100%;
	font-size: 30px;
}
.xiang>i{
	height: 10%;
	display: block;
	width: 100%;
	font-style: normal;
	font-size: 20px;
}
.xiang>s{
	text-decoration: none;
}
.xiang>div{
	margin-top:10%;
	display: flex;
	justify-content:space-between;
	width: 100%;
}
.el-select{
	width: 100%;
}
#num{
	width: 30%;
}
#bt{
	width:60%;
	background:  rgb(163,11,36);
}
</style>