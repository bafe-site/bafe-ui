<template>
  <div id="app">
    <TheHeader :inputSearch="inputSearch" @update="onUpdate"></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
export default {
  name: 'App',
  components: {TheFooter, TheHeader},
  data () {
    return {
      inputSearch: ''
    }
  },
  methods: {
    onUpdate (value) {
      this.inputSearch = value
    }
  }
}
</script>

<style lang="scss">
  @import "assets/style/scss/main";
</style>
