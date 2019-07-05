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
					<div class="centerClass">
						<div class="line"></div>
					</div>
				</div>
				<el-button slot="append" icon="el-icon-search"></el-button>
			</el-input>
		</span>
		<div class="content">
			<ul>
				<li v-for="(item,index) in list">
					<img :src="item.src" alt="">
					<div class="p-price">
						<strong class="jg" data-done="1"><em>￥</em><i>{{item.price}}</i></strong>
					</div>
					<div class="p-name p-name-type-2">
						<a target="_blank">
							<em>{{item.name}}</em>
							<i class="promo-words" id="J_AD_6291116">{{item.series}}</i>
						</a>
					</div>
					<p class="jrcar"><router-link :to="'/details/'+item._id">加入购物车</router-link></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				input: '',
				select: '',
			};

		},
		created(){
			var self = this;
			axios.get('/product').then(function (response) {
				for(var i = 0;i < response.data.length;i++){
					response.data[i].src = require(`../${response.data[i].src}`)
				}
				self.list = response.data;
				console.log(self.list)
	  	})
		}
	};
</script>

<style scoped>
	#sousuo {
		margin-top: 80px;
	}
	ul{
		width: 100%;
		display: flex;
		justify-content:space-around;
		flex-wrap:wrap;
	}
	li{
		width: 25%;
	}
	li img{
		height: 70%;
	}
	span {
		color: #fff;
		display: block;
		height: 50px;
		width: 100%;
		background: rgb(163, 11, 36);
		line-height: 40px;
		font-size: 30px;
	}
	#J_AD_6291116{
		font-style: normal;
	}
	.el-input-group {
		width: 40%;

	}

	.content {
		width: 100%;
		height: 400px;
		/* background: fuchsia; */
	}

	.content ul {
		margin-left: 35px;
		margin-top: 10px;
		display: flex;
		flex-direction: ;
	}

	.content ul li {
		margin: 3% 3% 3% 0%;
	}

	.content ul li img {
		width: 300px;
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

	.jrcar {
		margin-top: 5px;
		width: 100%;
		height: 50px;
		line-height: 50px;
		color: #fff;
		border: 1px solid #000;
		background-color: #000000;
	}
</style>
