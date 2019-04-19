import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Content from '../pages/Content.vue'
import DetailArticle from '../pages/DetailArticle'

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
      path: '/article/:id',
      name: 'artikel',
      component: DetailArticle
    },
    {
      path: '/konten',
      name: 'konten',
      component: Content
    }
  ]
})
