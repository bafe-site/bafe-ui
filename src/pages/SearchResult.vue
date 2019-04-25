<template>
  <div id="search-result" >
    <header class="body__title">
      <div class="container">
        <h2>{{ 'Hasil pencarian untuk "' + $route.query.keyword + '"'}}</h2>
      </div>
    </header>
    <div class="body__content">
      <div class="container">
        <div class="row">
          <the-search></the-search>
        </div>
        <div class="row">
          <div class="not-found__container" v-if="isNotFound">
            <div class="not-found__image">
              <i class="fas fa-paper-plane"></i>
            </div>
            <h2>Help Us Share Your Idea</h2>
            <p>Konten yang anda cari tidak ditemukan.</p>
          </div>
          <div class="grid-container" v-else>
            <div class="grid-item" v-for="n in articles" :key="n.id">
              <div class="item item__summary--vertical">
                <div class="summary__thumbnail">
                  <img v-if="n.thumbnail" :src="'data:image/jpeg;base64,'+ n.thumbnail" :alt="n.thumbnail">
                </div>
                <div class="summary__label">
                  <span class="label">{{ n.category }}</span>
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
          <!--<div style="text-align: center">-->
          <!--<button v-if="isShow.button.loadMore" style="margin: 30px auto" class="button button&#45;&#45;hollow" @click="load()">Load More</button>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Constant from '../constant'
import TheSearch from '../components/TheSearch'

export default {
  name: 'SearchResult',
  components: {TheSearch},
  data () {
    return {
      articles: []
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
          self.articles = res.data.content.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      if (this.$route.query.keyword) {
        this.search(this.$route.query.keyword)
      }
    })
  },
  computed: {
    isNotFound () {
      return this.articles.length === 0
    }
  },
  watch: {
    '$route.query.keyword' (keyword) {
      if (keyword) {
        this.search(keyword)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .row {
    margin: 15px 0px;
  }
</style>
