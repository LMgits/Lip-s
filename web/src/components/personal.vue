<template>
	<div>
		<el-tabs type="border-card" class='one'>
			<el-tab-pane label="我的订单">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column type="expand">
						<template slot-scope="props">
							<el-form label-position="left" inline class="demo-table-expand">
								<el-form-item label="商品名称">
									<span>{{ props.row.name }}</span>
								</el-form-item>
								<el-form-item label="填写地址">
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column label="" width="100">
						<template scope="scope">
							<img :src="scope.row.img" width="40" height="40" class="head_pic" />
						</template>
					</el-table-column>
					<el-table-column label="商品名称" prop="name">
					</el-table-column>
					<el-table-column label="购买数量" prop="shuliang">
					</el-table-column>
					<el-table-column label="价格" prop="jiage">
					</el-table-column>
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="个人信息">
				<div style="margin: 20px;"></div>
				<el-form :label-position="labelPosition" label-width="80px" >
					<el-form-item label="姓名:">
						<el-input class="input" v-model="formLabelAlign[0].uen" :disabled="switc" :placeholder="formLabelAlign[0].uen"></el-input>
					</el-form-item>
					<el-form-item label="年龄:">
						<el-input class="input" v-model="formLabelAlign[0].age" :disabled="switc" :placeholder="formLabelAlign[0].age"></el-input>
					</el-form-item>
					<el-form-item label="性别:">
						<el-input class="input" v-model="formLabelAlign[0].sex" :disabled="switc" :placeholder="formLabelAlign[0].sex"></el-input>
					</el-form-item>
					<el-form-item label="电话号码:">
						<el-input class="input" v-model="formLabelAlign[0].tel" :disabled="switc" :placeholder="formLabelAlign[0].tel"></el-input>
					</el-form-item>
					<el-form-item label="收货地址:">
						<el-input class="input" v-model="formLabelAlign[0].dizhi" :disabled="switc" :placeholder="formLabelAlign[0].dizhi"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('formLabelAlign',formLabelAlign[0].name)">提交</el-button>
						<el-button @click="cancelAttr">修改信息</el-button>
					</el-form-item>
				</el-form>
			</el-tab-pane>
		</el-tabs>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				input: '',
				labelPosition: 'right',
				formLabelAlign:[],
				tableData: [],
				switc: true,
			}
		},
		methods: {
			cancelAttr() {
				if (this.switc == true) {
					this.switc = false;
				} else {
					this.switc = true;
				}
			},
			submitForm(formName,names) {
				this.switc = true;
				var self = this;
				var shuju = new URLSearchParams();
				shuju.append('usrename', names);
				shuju.append('uen',this.formLabelAlign[0].uen);
				shuju.append('age', this.formLabelAlign[0].age);
				shuju.append('sex', this.formLabelAlign[0].sex);
				shuju.append('tel', this.formLabelAlign[0].tel);
				shuju.append('dizhi', this.formLabelAlign[0].dizhi);
				shuju.append('type','false');
				axios.post('/xingxi', shuju).then((response) => {
						self.$alert('修改成功!', {
				  			confirmButtonText: '确定',
						});
					}).catch(function(error) {
						console.log('error submit!!');
						return false;
					});
			}	
		},
		created(){
			var routerParams = this.$route.params.names;
			if(this.$route.params.names == ''){
				var routerParams = this.GLOBAL.hasName;
			}
	      	let params = new URLSearchParams();
	      	var self = this;
	        params.append('usrename',routerParams)
			axios.post('/find',params).then(function (response) {
				for(var i = 0;i < response.data.length;i++){
					response.data[i].img = require(`../${response.data[i].img}`)
				}
				self.tableData = response.data;
	  		})
			params.append('type','true')
			axios.post('/xingxi',params).then(function (response) {
				self.formLabelAlign = response.data;
	  		})
		}
	}
</script>

<style>
	.one {
		/* color: rgb(163,11,36); */
		margin: 0 auto;
		margin-top: 100px;
		width: 900px;
	}

	.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
		color: rgb(163, 11, 36) !important;
	}

	.el-tabs__item:hover {
		color: rgb(163, 11, 36) !important;
	}

	.demo-table-expand {
		font-size: 0;
	}

	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}

	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}

	.el-button--danger {
		background-color: rgb(163, 11, 36) !important;
	}

	.el-table thead {
		color: rgb(163, 11, 36) !important;
	}

	.el-table__expand-icon {
		color: rgb(163, 11, 36) !important;
	}
</style>
