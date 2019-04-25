import Vue from 'vue'
import Router from 'vue-router'
import Tor from '../pages/Tor.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import SearchResult from '../pages/SearchResult.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/tor',
      name: 'TermsandCondition',
      component: Tor
    },
    {
      path: '/search',
      name: 'search',
      component: SearchResult
    }
  ]
})
