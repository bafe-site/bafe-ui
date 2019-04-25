<template>
  <div class="header__container">
    <div class="container">
      <div class="header">
        <div class="header__logo">
          <a href="/"><img src="../assets/img/logo-icon.png" alt="home"></a>
        </div>
        <div class="header__menu">
          <h1>Citizen Journalism Platform for Innovative Solution</h1>
          <!--<the-menu></the-menu>-->
        </div>
        <div class="header__search">
          <the-search></the-search>
        </div>
        <div class="header__action">
          <button @click="goToTorPage" class="button button--round">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMenu from './TheMenu'
import TheSearch from './TheSearch'
export default {
  name: 'Header',
  components: {TheMenu, TheSearch},
  data () {
    return {
      inputSearch: ''
    }
  },
  methods : {
    goToTorPage () {
      let self = this
      self.$router.push('/tor')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/scss/abstracts/variables";
  .header {
    display: flex;
    box-sizing: border-box;
    height: 65px;
    padding: 10px 25px;
    align-items: center;

    &__container {
      border-bottom: 1px solid $grey-2;
    }

    &__logo img {
      height: 40px;
    }

    h1 {
      color: $bafe;
      font-size: 24px;
      font-weight: 600;
    }

    &__menu {
      margin: 0px 15px;
    }

    &__search {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: 35px;
    }

    &__action {
      display: flex;
      align-items: center;
      justify-self: flex-end;
    }
  }

  /deep/.search {
    &__form-control {
      width: 100px;

      &:hover {
        width: 200px;
        -webkit-transition: width 0.6s ease-in-out;
        -moz-transition: width 0.6s ease-in-out;
        -o-transition: width 0.6s ease-in-out;
        transition: width 0.6s ease-in-out;
      }
    }
  }
</style>
