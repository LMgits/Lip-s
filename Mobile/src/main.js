import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header.vue'
import './plugins/mint.js'
import dibu from './components/dibu.vue'

Vue.config.productionTip = false
Vue.component('Header',Header)
Vue.component('dibu',dibu)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
