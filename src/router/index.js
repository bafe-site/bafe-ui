import Vue from 'vue'
import Router from 'vue-router'
import aboutUs from '../pages/aboutUs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'aboutUs',
      component: aboutUs
    }
  ]
})
