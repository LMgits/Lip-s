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
									<span>{{ props.row.dizhi }}</span>
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
				<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="formLabelAlign" >
					<el-form-item label="姓名:">
						<el-input class="input" v-model="formLabelAlign.name" :disabled="switc" :placeholder="formLabelAlign.name"></el-input>
					</el-form-item>
					<el-form-item label="年龄:">
						<el-input class="input" v-model="formLabelAlign.age" :disabled="switc" :placeholder="formLabelAlign.age"></el-input>
					</el-form-item>
					<el-form-item label="性别:">
						<el-input class="input" v-model="formLabelAlign.sex" :disabled="switc" :placeholder="formLabelAlign.sex"></el-input>
					</el-form-item>
					<el-form-item label="电话号码:">
						<el-input class="input" v-model="formLabelAlign.tel" :disabled="switc" :placeholder="formLabelAlign.tel"></el-input>
					</el-form-item>
					<el-form-item label="收获地址:">
						<el-input class="input" v-model="formLabelAlign.dizhi" :disabled="switc" :placeholder="formLabelAlign.dizhi"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
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
				formLabelAlign: {
					name: '',
					age: '',
					sex: '',
					tel: '',
					dizhi: ''
				},
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
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					this.$alert('修改成功!', {
					  confirmButtonText: '确定',
					});
					if (valid) {
						var _date = new URLSearchParams();
						_date.append('name', this.formLabelAlign.name);
						_date.append('age', this.formLabelAlign.age);
						_date.append('sex', this.formLabelAlign.sex);
						_date.append('tel', this.formLabelAlign.tel);
						_date.append('dizhi', this.formLabelAlign.dizhi);
						this.switc = true;
						this.axios.post('/personal', _date).then((response) => {
							}).catch(function(error) {
						console.log(error);
						
					});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
		},
		created() {
			axios.get('/api').then((response) => {
				response.data.forEach((val, key) => {
					this.tableData.push(response.data[key])
				})
			}).catch(function(error) {
				console.log(error);
			});
			axios.get('/personal').then((response) => {
				console.log(response.data)
				this.formLabelAlign  = response.data;
			}).catch(function(error) {
				console.log(error);
			});
		},

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
