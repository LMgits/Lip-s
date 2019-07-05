<template>
	<div>
		<!-- 头部 -->
		<div class="hello">
		    <mt-header title="Lip's">
		        <router-link to="/" slot="left">
		            <!-- <mt-button icon="back">返回</mt-button> -->
		            <!-- <mt-button @click="handleClose">关闭</mt-button> -->
		        </router-link>
		        <!-- <mt-button icon="more" slot="right"></mt-button> -->
		    </mt-header>
		</div>
		<!-- 底部 -->
		<mt-tabbar v-model="selected">
		    <mt-tab-item id="首页">
		        <img slot="icon" src="../assets/img/shouye.png" >
		        <router-link to="/index" tag='a'>首页</router-link>
		    </mt-tab-item>
		    <mt-tab-item id="订单">
		        <img slot="icon" src="../assets/img/dd.png" >
		       <router-link to="/order" tag='a'>订单</router-link> 
		    </mt-tab-item>
		    <mt-tab-item id="发现">
		        <img slot="icon" src="../assets/img/gouwu.png" >
		       <router-link to="/xiangqing" tag='a'>发现</router-link> 
		    </mt-tab-item>
		    <mt-tab-item id="我的">
		        <img slot="icon" src="../assets/img/youhuiquan.png" >
		        <router-link to="/my" tag='a'>我的</router-link> 
		    </mt-tab-item>
		</mt-tabbar>
		
		<mt-header title="个人信息">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
				<router-link to="/my">
				<mt-button @click="handleClose" style="color: #fff;">关闭</mt-button>
				</router-link>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
		<mt-field label="性别" placeholder="请输入性别" type="email" v-model="email"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
		<mt-cell title="是否显示到主页">
			<mt-switch v-model="value">开关</mt-switch>
		</mt-cell>
		<div class="btn">
			<mt-button type="primary" class="btn1">提交</mt-button>
			<mt-button type="danger" >取消</mt-button>
		</div>

		<router-link to="/login"><mt-button type="danger" size="large">注销账号</mt-button></router-link>
	</div>
	
</template>

<script>
</script>

<style>
	.mint-switch-input:checked+.mint-switch-core {
		background-color: #a30b24 !important;
		border-color: #a30b24 !important;
	}

	.mint-cell-wrapper {
		height: 60px !important;
	}

	.mint-button--large {
		margin-top: 32% !important;
	}

	.btn {
		display: flex;
		 justify-content: center;
	}
	.btn1 {
		margin-right: 20px;
	}
	
</style>
