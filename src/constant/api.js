const api = {
  base: '/api',
  detail_article: '/api/article/{id}',
  article: '/api/article',
  lookup: {
    category: '/api/lookup/category'
  },
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout'
  },
  header: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export default api
