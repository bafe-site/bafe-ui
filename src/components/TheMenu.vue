<template>
  <nav class="menu">
    <router-link class="menu__item" to="/">Home</router-link>
    <router-link class="menu__item" to="/konten">Content</router-link>
    <router-link class="menu__item" to="/about">About Us</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheMenu'
}
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    align-items: center;
    margin: 0px 10px;

    &__item {
      text-decoration: none;
      color: #385446;
      display: flex;
      padding: 10px 10px;

      &:hover {
        background-color: #7e9489;
        color: #fff;
      }

      &.router-link-exact-active {
        background-color: #385446;
        color: #fff;
      }
    }
  }
</style>
