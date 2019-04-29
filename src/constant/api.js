const api = {
  base: '/bafe/public/api',
  detail_article: '/bafe/public/api/article/{id}',
  article: '/bafe/public/api/article',
  lookup: {
    category: '/bafe/public/api/lookup/category'
  },
  auth: {
    login: '/bafe/public/api/auth/login',
    logout: '/bafe/public/api/auth/logout'
  },
  header: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export default api
