import Vue from 'vue'
import Router from 'vue-router'
import Tor from '../pages/Tor.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import SearchResult from '../pages/SearchResult.vue'
import ArticleForm from '../pages/ArticleForm.vue'
import DetailArticle from '../pages/DetailArticle'
import admin from '../pages/AdminPage.vue'

import store from '../store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: ifNotAuthenticated
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
      component: ArticleForm,
      beforeEnter: ifAuthenticated
    }, {
      path: '/article/:id',
      name: 'article',
      component: DetailArticle
    }, {
      path: '/admin',
      name: 'admin',
      component: admin,
      beforeEnter: ifAuthenticated
    }
  ]
})
