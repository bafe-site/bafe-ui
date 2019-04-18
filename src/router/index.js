import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import aboutUs from '../pages/aboutUs.vue'
import detailArtikel from '../pages/detailArtikel.vue'
import uploadArtikel from '../pages/uploadArtikel.vue'
import theLogin from '../pages/theLogin.vue'
import Content from '../pages/Content.vue'
import termsAndCondition from '../pages/termsAndCondition.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/detailArtikel',
      name: 'detailArtikel',
      component: detailArtikel
    },
    {
      path: '/uploadArtikel',
      name: 'uploadArtikel',
      component: uploadArtikel
    },
    {
      path: '/pintukemanaajadoraemon',
      name: 'theLogin',
      component: theLogin
    },
    {
      path: '/konten',
      name: 'konten',
      component: Content
    },
    {
      path: '/termsAndCondition',
      name: 'TOR',
      component: termsAndCondition
    }
  ]
})
