import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import DetailArtikel from '../pages/DetailArtikel.vue'
import UploadArtikel from '../pages/UploadArtikel.vue'
import TheLogin from '../pages/TheLogin.vue'
import Konten from '../pages/Konten.vue'
import TermsAndCondition from '../pages/TermsAndCondition.vue'

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
      path: '/About',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/DetailArtikel',
      name: 'detailArtikel',
      component: DetailArtikel
    },
    {
      path: '/UploadArtikel',
      name: 'uploadArtikel',
      component: UploadArtikel
    },
    {
      path: '/pintukemanaajadoraemon',
      name: 'theLogin',
      component: TheLogin
    },
    {
      path: '/Konten',
      name: 'konten',
      component: Konten
    },
    {
      path: '/TermsAndCondition',
      name: 'TAC',
      component: TermsAndCondition
    }
  ]
})
