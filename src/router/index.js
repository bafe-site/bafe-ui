import Vue from 'vue'
import Router from 'vue-router'
import admin from '../pages/AdminPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
