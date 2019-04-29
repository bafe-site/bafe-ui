
const api = {
  base: 'http://localhost/bafe/public/api/',
  article: {
    get: 'http://localhost/bafe/public/api/article',
    getId: 'http://localhost/bafe/public/api/article/{id}',
    post: 'http://localhost/bafe/public/api/article'
  },
  lookup: {
    category: 'http://localhost/bafe/public/api/lookup/category'
  },
  auth: {
    logout: 'http://localhost/bafe/public/api/auth/logout'
  },
  header: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export default api
