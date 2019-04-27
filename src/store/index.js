import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'vue-cookie'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  getters: {
    getUser: () => {
      return cookie.get('userName')
    },
    isLogin: (state) => {
      return !!cookie.get('userName')
    }
  },
  mutations: {},
  actions: {}
})
