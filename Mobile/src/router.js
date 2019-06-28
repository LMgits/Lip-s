import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import order from './components/order.vue'
import xiangqing from './components/xiangqing.vue'



Vue.use(Router)

export default new Router({
   mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      
    }
  ]
})
