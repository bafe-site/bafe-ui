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
export default {
  name: 'App',
  components: {TheFooter, TheHeader}
}
</script>

<style lang="scss">
  @import "assets/style/scss/main";
</style>
