import Axios from 'axios'
import VueCookie from 'vue-cookie'
import path from '../constant/api'

const token = VueCookie.get('token')

Axios.defaults.baseURL = 'https://backk.bafe.space'
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
    find: (id) => {
      return Axios.get(path.detail_article.replace('{id}', id))
    },
    delete: (id) => {
      return Axios.delete(path.detail_article.replace('{id}', id))
    },
    upload: (data) => {
      return Axios.post(path.article, data, { params: {} })
    }
  },
  lookup: {
    category: {
      filter: () => {
        return Axios.get(path.lookup.category)
      }
    }
  },
  auth: {
    login: (user) => {
      return Axios.post(path.auth.login, user, {params: {}})
    },
    logout: () => {
      return Axios.get(path.auth.logout)
    }
  },
  analytic: {
    count: (body) => {
      return Axios.put(path.analytic.count, body, {params: {}})
    }
  }
}

export default api
