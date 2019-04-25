<template>
  <div id="app">
    <the-header v-if="['theLogin', 'home'].indexOf($route.name) > -1"></the-header>
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
