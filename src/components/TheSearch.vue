<template>
  <div class="search__input-group">
    <input type="text" v-model="keyword" class="search__form-control" placeholder="Cari Disini" @keyup.enter="search(keyword)">
    <button @click="search(keyword)" class="search__input-group-append"><i class="fas fa-search"></i></button>
  </div>
</template>

<script>

  export default {
    name: 'TheSearch',
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      search (keyword) {
        this.$router.push({ name: 'search', query: { keyword: keyword } })
        this.keyword = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/scss/abstracts/variables";

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
      width: 100%;
      background-color: $white;
      padding: 0px 20px;
      border-radius: 20px 0 0 20px;
    }
  }
</style>
