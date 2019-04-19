import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import ArticleForm from '../pages/ArticleForm.vue'

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
      path: '/article/upload',
      name: 'upload',
      component: ArticleForm
    }
  ]
})
