<template>
	<div id="ind">
		<full-page :options="options">
            <div class="section">
                <div class="box1 paged">
                	<div>
                		<span>Lip's</span>
                		<i>一家只专注于口红的直营平台</i>
                	</div>
                </div>
            </div>
            <div class="section">
                <div class="box2 paged">
                	<div>
          				<span>今日新品</span>
                		<div class="block">
						    <el-carousel>
						      <el-carousel-item v-for="item in newproduct">
						        <img :src="item.src" class="img"></img>
						      </el-carousel-item>
						    </el-carousel>
						</div>
                	</div>
                </div>
            </div>
            <div class="section">
                <div class="box3">
                	<span>联系我们</span>
                	<el-form ref="form" :model="form" label-width="80px" class="from">
					  	<el-form-item>
							<el-input type="textarea" v-model="form.desc" class="input"></el-input>
					  	</el-form-item>
					  	<el-form-item>
						    <el-button type="primary" >发送</el-button>
					  	</el-form-item>
					</el-form>
                </div>
            </div>
      </full-page>
	</div>
</template>

<script>
export default{
	name:'',
    data () {
        return {
            options: {
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                afterLoad: this.afterLoad,
                scrollOverflow: true,
                scrollBar: false,
                menu: '#menu',
                // navigation: true,
                // anchors: ['page1', 'page2', 'page3'],
            },
            newproduct:[
            	{src:require('../assets/img/L-pko.jpg')},
            	{src:require('../assets/img/L-pkt.jpg')},
            	{src:require('../assets/img/L-pktr.jpg')},
            	{src:require('../assets/img/L-pkf.jpg')}
            	
            ],
            form: {
	          name: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: ''
	        }
        }
    },
}
</script>

<style>
.paged{
	height: 100%;
	display:flex;
	justify-content: space-around;
	align-items: flex-end;
}
.box1{
	background:url('../assets/img/L-bg.jpg') no-repeat;
	background-size:100% 100%;
}
.box1>div{
	width:60%;
}
.box1>div>span{
	display:block;
	font-size: 70px;
}
.box1>div>i{
	font-style: normal;
	font-size: 25px;
	animation: myfirst 3s infinite linear;
}
@keyframes myfirst
{
    from {color:#E9967A;}
    to {color: #fff;}
}
.box2{
	background:url('../assets/img/L-bgt.jpg') no-repeat;
	background-size:100% 100%;
	align-items:space-between;
	flex-direction: row;
	justify-content: flex-start;
}
.box2>div{
	width:40%;
	height:500px;
}
.box2>div>span{
	font-size: 30px;
}
.box2 .block{
	width: 100%;
}
.box3{
	height: 100%;
	background:url('../assets/img/L-bgtr.jpg') no-repeat;
	background-size:100% 150%;
	align-items: center;
	flex-direction: row;
}
.box3>span{
	font-size:30px;
	color: #fff;
	display: block;
	padding-top: 100px;
}
.from{
	width: 800px;
	margin: 0 auto;
	margin-top: 400px;
}
.input>textarea{
	height: 200px;
	background: transparent;
}
.input>textarea:focus{
    border:1px solid #f99;
}
.img{
	width: 35%;
	height: 100%;
}
</style>