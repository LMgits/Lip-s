import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import foot from './components/foot.vue'
Vue.component('foot',foot)
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem)

=======
// import Header from './components/Header.vue'
import './plugins/mint.js'
// import dibu from './components/dibu.vue'
// 
>>>>>>> 77a52a13384826c9fc45705727bf735825ae0887
Vue.config.productionTip = false
// Vue.component('Header',Header)
// Vue.component('dibu',dibu)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
