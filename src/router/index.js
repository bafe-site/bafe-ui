import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import SearchResult from '../pages/SearchResult.vue'

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
      path: '/search',
      name: 'search',
      component: SearchResult
    }
  ]
})
