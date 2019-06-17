import Vue from 'vue'
import Router from 'vue-router'

import ShoppingCart from './components/ShoppingCart.vue'


Vue.use(Router)

export default new Router({

  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
   
  ]

})
