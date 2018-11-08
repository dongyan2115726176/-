// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
//异步加载
import resour from "vue-resource"
import {
  storeObj
} from './components/store/index.js'
import $ from "jquery"
Vue.use(resour)
Vue.use(Vuex)
Vue.config.productionTip = false
//配置vuex
const store = new Vuex.Store(
  storeObj
);
/* eslint-disable no-new */
Vue.prototype.bus = new Vue
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
