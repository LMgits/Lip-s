import Vue from 'vue'
import Router from 'vue-router'

import ShoppingCart from './components/ShoppingCart.vue'
import index from './components/index.vue'
import details from './components/details.vue'
import login from './components/login.vue'
import personal from './components/personal.vue'
import search from './components/search.vue'
import balance from './components/balance.vue'


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
      path: '/details/:id',
      name: 'details',
      component: details
    },
   	{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/personal/:names',
      name: 'personal',
      component: personal
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/balance/:su',
      name: 'balance',
      component: balance
    },
  ]

})
