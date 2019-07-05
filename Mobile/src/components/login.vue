<template>
	<div>
		<div class="lo">
			<mt-field class="srk1" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field class="srk2" label="密码" placeholder="请输入密码" v-model="password"></mt-field>
			<div class="bt">
				<mt-button type="danger" class="b1">登录</mt-button>
				<mt-button type="danger" class="b1">注册</mt-button>
			</div>


		</div>

	</div>
</template>

<script>
</script>

<style>
	.lo {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(../assets/img/bizhi.jpg);
	}

	.srk1 {
		margin-top: 60% !important;
		color: #fff !important;
		background: rgba(0, 0, 0, 0) !important;
	}

	.srk2 {
		color: #fff !important;
		background: rgba(0, 0, 0, 0) !important;
	}

	.bt {
		display: flex;
		justify-content: center;
	}

	.b1 {
		background-color: #0a0412 !important;
		margin: 10% 10%;
		width: 40%;
	}
	.mint-field-core{
		background: rgba(0, 0, 0, 0) !important;
	}
</style>
