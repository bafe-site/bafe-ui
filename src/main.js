// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var Editor = require('@tinymce/tinymce-vue').default

new Vue({
  el: '#app',
  data: { /* Your data */ },
  components: {
    'editor': Editor // <- Important part
  },
  methods: { /* Your methods */}
})
