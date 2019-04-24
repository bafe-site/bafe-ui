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
          <div class="search__input-group">
            <input type="text" v-model="inputSearch" class="search__form-control" placeholder="Cari Disini" aria-label="Cari Disini" aria-describedby="basic-addon2">
            <button class="search__input-group-append"><i class="fas fa-search"></i></button>
          </div>
        </div>
        <div class="header__action">
          <button class="button button--round">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMenu from './TheMenu'
export default {
  name: 'Header',
  components: {TheMenu},
  data () {
    return {
      inputSearch: ''
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

  .search {
    &__input-group {
      position: relative;
      display: flex;
      height: 40px;
      border-radius: 20px;
      border: 1px solid $bafe;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        border-radius: 20px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        opacity: 0;
        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      &:hover {
        -webkit-transform: scale(1.05, 1.05);
        transform: scale(1.05, 1.05);
      }

      &:hover::after {
        opacity: 1;
      }

      &-append {
        padding: 0px 10px;
        border-radius: 0 20px 20px 0;
        color: $bafe;
        background-color: $white;
      }
    }

    &__form-control {
      width: 100px;
      background-color: $white;
      padding: 0px 20px;
      border-radius: 20px 0 0 20px;

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
