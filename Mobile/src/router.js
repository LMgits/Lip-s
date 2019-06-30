import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import order from './components/order.vue'
import xiangqing from './components/xiangqing.vue'
import personal from './components/personal.vue'
import my from './components/my.vue'
import login from './components/login.vue'
import spinfo from './components/spinfo.vue'



Vue.use(Router)

export default new Router({
   mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
      path:'/',
      name:'index',
      component: index
      
    },
    {
      path:'/index',
      name:'index',
      component: index
      
    },
     {
      path:'/order',
      name:'order',
      component: order
      
    },
     {
      path:'/xiangqing',
      name:'xiangqing',
      component: xiangqing
    },
		{
      path:'/my',
      name:'my',
      component: my
    },
		{
      path:'/personal',
      name:'personal',
      component: personal
    },
		{
		  path:'/login',
		  name:'login',
		  component: login
		},
    {
      path:'/spinfo',
      name:'spinfo',
      component: spinfo
    },
  ]
})
