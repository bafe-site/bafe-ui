import Vue from 'vue'
import Router from 'vue-router'
import Tor from '../pages/Tor.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import SearchResult from '../pages/SearchResult.vue'
import ArticleForm from '../pages/ArticleForm.vue'
import DetailArticle from '../pages/DetailArticle'
import admin from '../pages/AdminPage.vue'

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
      name: 'tor',
      component: Tor
    },
    {
      path: '/search',
      name: 'search',
      component: SearchResult
    },
    {
      path: '/article/upload',
      name: 'upload',
      component: ArticleForm
    }, {
      path: '/article/:id',
      name: 'artikel',
      component: DetailArticle
    }, {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
