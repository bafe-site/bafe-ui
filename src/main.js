// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import filter from './filter/index'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

for (let formatter in filter) {
  Vue.filter(formatter, filter[formatter])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueCookie)
