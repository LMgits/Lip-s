import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from './components/ShoppingCart.vue'
import Search from './components/search.vue'
import Balance from './components/car/balance.vue'
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
      path: '/search',
      name: 'search',
      component: Search
    },
     {
      path: '/car/balance',
      name: 'balance',
      component: Balance
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
   
   
  ]

})
