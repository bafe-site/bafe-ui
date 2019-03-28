import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import aboutUs from '../pages/aboutUs.vue'
import konten from '../pages/konten.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/konten',
      name: 'konten',
      component: konten
    }
  ]
})
