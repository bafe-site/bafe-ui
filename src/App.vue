<template>
  <div id="app">
    <TheHeader v-if="['theLogin'].indexOf($route.name)" > -1></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
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
  @import "assets/style/main";
</style>
