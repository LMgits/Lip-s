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
		<div>
			<router-link to="/personal"><ul class="shangmian2">
				
				<li>
					<img src="../assets/img/touxiang.png" alt="">
					<span>
				<li class="wz1">奥特曼</li>
				<li class="wz2"><span>关注:1</span> <span>粉丝:1</span></li>
				</span>
				</li>
			</ul></router-link>
<!-- 			<ul class="shangmian3">
				<li class="wz3"><img src="../assets/img/jinbi.png" alt=""></li>
			</ul> -->
			<ul class="shangmian1">
				<li><img slot="icon" src="../assets/img/wodeyouhuijuan1.png" /><br><span>优惠卷</span></li>
				<li><img slot="icon" src="../assets/img/jifen1.png" /><br><span>积分</span></li>
				<li><img slot="icon" src="../assets/img/huiyuan1-.png" /><br><span>会员</span></li>
				<li><img slot="iconlogin" src="../assets/img/kefu1.png" /><br><span>客服</span></li>
			</ul>
			<div class="lunbo">
				<mt-swipe :auto="4000">
					<mt-swipe-item><img src="../assets/img/kouhong11.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../assets/img/kouhong22.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../assets/img/kouhong33.jpg" alt=""></mt-swipe-item>
				</mt-swipe>
			</div>
			<router-link to="/spinfo" tag='a'>
                <mt-cell title="活动中心">
                    <span>最新最热活动在这里</span>
                    <img slot="icon" src="../assets/img/tuijian.png" width="24" height="24">
                </mt-cell>
            </router-link>
			<mt-cell title="推荐码">
				<span>></span>
				<img slot="icon" src="../assets/img/jinbi.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的钱包">
				<span>></span>
				<img slot="icon" src="../assets/img/qianbao.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="会员中心">
				<span>VIP 专属</span>
				<img slot="icon" src="../assets/img/tubiao-.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="帮助与反馈">
				<span>有问题找这里</span>
				<img slot="icon" src="../assets/img/bangzhu.png" width="24" height="24">
			</mt-cell>
		</div>


	</div>

</template>

<script>
</script>

<style>
	a {
		color: #000;
		text-decoration: none;
	}

	.shangmian1 {
		width: 98%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-direction: row;
		border: 1px solid #DCDFE6;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
	}

	.lunbo {
		padding-top: 5px;
		height: 100PX;
		margin: 0 auto;
		width: 98%;
	}

	.lunbo img {
		height: 100%;
		width: 100%;
	}

	.shangmian1 li img {
		width: 25%;
		height: 50%;
	}

	.shangmian1 li {
		margin: 19px 0px;
		text-align: center;
	}

	.shangmian2 {}

	.shangmian2 img {
		width: 13%;
		margin: 4% 4%;
	}

	.shangmian2 li {
		display: flex;
		align-items: center;
	}

	.wz1 {
		font-size: 20px;
	}

	.wz2 {
		font-size: 12px;
	}

	.wz3 img {
		width: 8%;
		margin: 2% 9%;
	}

	.shangmian3 {
		width: 98%;
		margin: 0 auto;
		border: 1px solid #DCDFE6;
		box-shadow: 0 0px 0px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
	}
	.mint-header{
	    width: 100%;
		background-color: #a30b24 !important;;
	}
</style>
