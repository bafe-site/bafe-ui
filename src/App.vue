<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

import axios from 'axios'

export default {
  name: 'App',
  components: {TheFooter, TheHeader},
  created () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('authLogout')
          this.$router.push({name: 'login'})
        }
        throw err
      })
    })
  }
}
</script>

<style lang="scss">
  @import "assets/style/scss/main";
</style>
