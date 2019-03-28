<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view/>
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

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #385446;
}
</style>
