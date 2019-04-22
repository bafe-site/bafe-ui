<template>
  <div class="kontainer">
    <div class="kontainer__inside">
      <h1>Search Result</h1>
      <div class="search__input-group">
          <input type="text" class="search__form-control" v-model="inputSearch" placeholder="Cari Disini" aria-label="Cari Disini" aria-describedby="basic-addon2">
          <button @click="search(inputSearch)" class="search__input-group-append"><i class="fas fa-search"></i></button>
        </div>
    </div>
    <div class="grid-container">
      <div class="grid-item" v-for="n in searchGet" :key="n.id">
        <div class="item item__summary--vertical">
          <div class="summary__thumbnail">
            <img v-if="n.thumbnail" :src="'data:image/jpeg;base64,'+ n.thumbnail" :alt="n.thumbnail">
          </div>
          <div class="summary__content">
            <div class="content__title">
            <h3> {{ n.title }} </h3>
            </div>
          <div class="content__description">
            <p>{{ n.content | truncate(36) }}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Constant from '../constant'
export default {
  data () {
    return {
      searchGet: [],
      inputSearch: ''
    }
  },
  methods: {
    search (input) {
      let self = this
      Axios
        .get(Constant.article.get, {
          params: {
            keyword: input
          }
        })
        .then(res => {
          self.searchGet = res.data.content.data
          console.log(self.searchGet)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      self.search(self.inputSearch)
    })
  }
}
</script>

<style lang="scss" scoped>
  .kontainer {
    width: 80%;
    margin: 0 auto;
    &__inside {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .search {
      &__input-group {
        display: flex;
        height: 40px;
        margin: 0 auto;

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

  .summary {
    &__thumbnail {
      & > img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    &__content {
      box-sizing: border-box;
    }
  }

    .grid-container {
    display: grid;
    margin: 30px 0px;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #385446;
    color: #fff;
    padding: 10px 20px
  }

  .grid-item {
    padding: 10px 10px;
    text-align: center;

    &:hover {
      background-color: #1c261d;
      -webkit-transition: 100ms;
    }
  }
</style>
