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
          <router-link tag="button" :to="{ name: 'tor'}" class="button button--round">Upload</router-link>
          <router-link :to="{name: 'admin'}" v-if="isAuthenticated" class="button button--round button--hollow">
            <i class="fa fa-user"></i>{{ '&nbsp;' + userName}}</router-link>
          <a v-if="isAuthenticated" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMenu from './TheMenu'
import TheSearch from './TheSearch'
import store from '../store'

export default {
  name: 'Header',
  components: {TheMenu, TheSearch},
  data () {
    return {
      inputSearch: ''
    }
  },
  methods: {
    logout () {
      store.dispatch('authLogout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    userName () {
      return 'username'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/scss/abstracts/variables";

  @media screen and (max-width: 800px) {
    div.header__menu { display:none; }
  }

  .container {
    padding: 0 5px;
  }

  .header {
    display: flex;
    box-sizing: border-box;
    height: 65px;
    align-items: center;

    &__container {
      position: sticky;
      top: 0;
      z-index: 20;
      background-color: white;
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

    &__action {
      & > * {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }

    &__menu {
      margin: 0px 15px;
    }

    &__search {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: 10px;
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
