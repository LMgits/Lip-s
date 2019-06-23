<template>
	<div class="hea">
		<span>Lip's 直营店</span>
		<div class="con">
			<div class="nei">
				<img src="" alt="" />
				<div class="xiang">
					<i>唇秘——女人嘴唇的秘密</i>
					<span>圣罗兰系列</span>
					<s>价格：$500.00</s>
					<el-select placeholder="请选择口红颜色">
    					<el-option v-for="item in color" :key="item.value" :label="item.label" :value="item.value" id="puo"></el-option>
  					</el-select>
  					<el-select placeholder="请选择口红盖子">
    					<el-option v-for="item in box" :key="item.value" :label="item.label" :value="item.value" id="put"></el-option>
  					</el-select>
  					<div>
  						<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" id="num"></el-input-number>
    					<el-button type="primary" id="bt">加入购物车</el-button>
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
      	num: 1,
        color: [{
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
        box: [{
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
    }
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