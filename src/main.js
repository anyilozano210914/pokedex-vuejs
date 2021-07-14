import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Router from './routes';
import Store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/style.scss'

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
window.axios = require('axios');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router,
  store: Store
}).$mount('#app')
