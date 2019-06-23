import Vue from 'vue'
import Router from 'vue-router'

import ShoppingCart from './components/ShoppingCart.vue'
import index from './components/index.vue'
import details from './components/details.vue'


Vue.use(Router)

export default new Router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  	{
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
   
  ]

})
