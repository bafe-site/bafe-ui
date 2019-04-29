import Vue from 'vue'
import Axios from 'axios'
import VueCookie from 'vue-cookie'
import path from '../constant/api'

Vue.use(Axios)

const token = VueCookie.get('token')

Axios.defaults.baseURL = 'http://localhost'
Axios.defaults.headers.post['Content-Type'] = 'application/json'
Axios.defaults.headers.post['Accept'] = 'application/json'

if (token) {
  Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

const api = {
  article: {
    filter: (params) => {
      return Axios.get(path.article, {
        params: params
      })
    },
    find: () => {},
    delete: () => {}
  },
  lookup: {
    category: {
      filter: () => {
        return Axios.get(path.lookup.category)
      }
    }
  }
}

export default api
