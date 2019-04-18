import Vue from 'vue'
import Router from 'vue-router'
import register from '../pages/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
