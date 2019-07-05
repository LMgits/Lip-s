<template>
	<div class="bo">
		<div>
			<p class="p1">我的购物车</p>
		</div>
		<el-table :data="table" border style="width: 100%" @selection-change="selected">
			<el-table-column type="selection" width="50"></el-table-column>
			<el-table-column label="商品名称" width="680">
				<template scope="scope">
					<div style="margin-left: 50px">
						<img :src="scope.row.img" style="height: 50px;width: 50px" />
						<span style="font-size: 18px;padding-left: 200px;">{{ scope.row.name }}</span>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="单价" width="150" prop="jiage"></el-table-column>
			<el-table-column label="数量" width="200">
				<template scope="scope">
					<div>
						<el-input v-model="scope.row.shuliang" @change="handleInput(scope.row)">
							<el-button slot="prepend" @click="del(scope.row)"><i class="el-icon-minus"></i></el-button>
							<el-button slot="append" @click="add(scope.row)"><i class="el-icon-plus"></i></el-button>
						</el-input>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="小计" width="150" prop="goodTotal"></el-table-column>
			<el-table-column label="操作">
				<template scope="scope">
					<el-button type="danger" @click="handleDelete(scope.$index, scope.row, scope.row._id)">
						删除
						<i class="el-icon-delete2 el-icon--right"></i>
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<br />
		<el-button type="info" style="float: right" @click="jieshuan">{{ '去结算：' + moneyTotal }}</el-button>

	</div>
</template>

<script>
	export default {
		name: 'ShoppingCart',
		props: {
			msg: String,
			
		},

		data() {
			return {
				zongji: 0,
				table: [],
				moneyTotal: 0,
				goodid:[]
			};
		},
		methods: {
			jieshuan(){
				if(this.moneyTotal != 0){
					this.$router.push({name:'balance',params:{shu:this.goodid}})
				}
			},
			handleDelete(index, row,cid) {
				this.$confirm('确定删除该商品？', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					})
					.then(() => {
						let paramc = new URLSearchParams();
				      	var self = this;
				        paramc.append('id',cid);
				        paramc.append('shu',this.GLOBAL.hasName);
						axios.post('/gouwu',paramc).then(function (response) {
							self.table.splice(index, 1);
							self.$message({
								type: 'success',
								message: '删除成功!',
							});
				  		})
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						});
					});
			},
			handleInput: function(value) {
				if (null == value.shuliang || value.shuliang == '') {
					value.shuliang = 1;
				}
				value.goodTotal = (value.shuliang * value.jiage).toFixed(2); //保留两位小数
				//增加商品数量也需要重新计算商品总价
			},
			add: function(addGood) {
				//输入框输入值变化时会变为字符串格式返回到js
				//此处要用v-model，实现双向数据绑定
				if (typeof addGood.shuliang == 'string') {
					addGood.shuliang = parseInt(addGood.shuliang);
				}
				addGood.shuliang += 1;
				this.handleInput(addGood);
			},
			del: function(delGood) {
				if (typeof delGood.shuliang == 'string') {
					delGood.shuliang = parseInt(delGood.shuliang);
				}
				if (delGood.shuliang > 1) {
					delGood.shuliang -= 1;
				}
				this.handleInput(delGood);
			},
			//返回的参数为选中行对应的对象
			selected: function(selection) {
				this.moneyTotal = 0;
				//此处不支持forEach循环，只能用原始方法了
				for (var i = 0; i < selection.length; i++) {
					//判断返回的值是否是字符串
					if (typeof selection[i].goodTotal == 'string') {
						selection[i].goodTotal = parseInt(selection[i].goodTotal);
					}
					this.goodid[i] = selection[i]._id
					this.moneyTotal += selection[i].goodTotal;
				}
			}
		},
		created() {
			let params = new URLSearchParams();
	      	var self = this;
	        params.append('shu',this.GLOBAL.hasName)
			axios.post('/gouwu',params).then(function (response) {
				for(var i = 0;i < response.data.length;i++){
					response.data[i].img = require(`../${response.data[i].img}`)
					response.data[i].goodTotal = response.data[i].jiage * response.data[i].shuliang;
				}
				self.table = response.data;
	  		})
			this.zongji = this.table.length;
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.bo{
		margin-top: 80px;
	}
	.back {
		color: #000;
		text-decoration: none;
	}

	.head {
		margin-top: 5%;
	}

	.p1 {
		color: rgb(163, 11, 36) !important;
		margin: 3% 0% 3% 0%;
		font-size: 30PX;
	}
</style>
