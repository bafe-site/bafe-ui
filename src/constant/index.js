import cookie from 'vue-cookie'
const api = {
  base: 'http://localhost/bafe/public/api/',
  article: {
    get: 'http://localhost/bafe/public/api/article',
    getId: 'http://localhost/bafe/public/api/article/{id}',
    post: 'http://localhost/bafe/public/api/article'
  },
  lookup: {
    category: 'http://localhost/bafe/public/api/category'
  },
  Authorization: 'Bearer ' + cookie.get('token'),
  header: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + cookie.get('token'),
    'Accept': 'application/json'
  }
}

export default api
