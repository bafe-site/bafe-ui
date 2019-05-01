import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookie'
import Api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: Cookie.get('token') || '',
    status: ''
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
    authRequest: (state) => {
      state.status = 'loading'
    },
    authSuccess: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    authError: (state) => {
      state.status = 'error'
    },
    authLogout: (state) => {
      state.status = 'loading'
      state.token = ''
    }
  },
  actions: {
    authRequest: ({commit, dispatch}, user) => {
      return new Promise((resolve, reject) => {
        commit('authRequest')
        Api.auth.login(user)
          .then(res => {
            const token = res.data.meta.token
            const date = new Date()
            Cookie.set('token', token, { expires: date.getDate() + 30 })
            commit('authSuccess', token)
            resolve(res)
          })
          .catch(err => {
            commit('authError', err)
            Cookie.delete('token')
            reject(err)
          })
      })
    },
    authLogout: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        Api.auth.logout()
        commit('authLogout')
        Cookie.delete('token')
        resolve()
      })
    }
  }
})

export default store
