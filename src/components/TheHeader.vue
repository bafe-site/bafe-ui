<template>
    <div class="header">
      <div class="header__logo">
        <a href="/"><img src="../assets/img/S__17219904.jpg" alt="home"></a>
      </div>
      <div class="header__menu">
        <the-menu></the-menu>
      </div>
      <div class="header__search">
        <div class="search__input-group">
          <input type="text" class="search__form-control" placeholder="Cari Disini" aria-label="Cari Disini" aria-describedby="basic-addon2">
          <button class="search__input-group-append"><i class="fas fa-search"></i></button>
        </div>
      </div>
      <div class="header__action">
        <button class="button button--round">Upload</button>
      </div>
    </div>
</template>

<script>
import TheMenu from './TheMenu'
export default {
  name: 'Header',
  components: {TheMenu}
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;

    &__logo img {
      height: 100px;
    }

    &__search {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: 20px;
    }

    &__action {
      display: flex;
      align-items: center;
      justify-self: flex-end;
      margin-right: 20px;
    }
  }

  .search {
    &__input-group {
      display: flex;
      height: 40px;

      &-append {
        padding: 0px 10px;
        border: 2px solid #385446;
        border-radius: 0 20px 20px 0;
        background-color: #385446;
        color: #fafafa;
      }
    }

    &__form-control {
      background-color: lightgrey;
      padding: 0px 15px;
      border: 2px solid #385446;
      border-radius: 20px 0 0 20px;
    }
  }
</style>
