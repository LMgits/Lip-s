import Vue from 'vue'
import './plugins/axios'

import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import vheader from './components/vheader.vue'
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';

Vue.use(VueFullPage);
Vue.component('vheader',vheader)
import User from './components/user'//引用文件
Vue.prototype.GLOBAL = User;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
