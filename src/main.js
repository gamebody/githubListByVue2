import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
/* eslint-disable no-new */
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
