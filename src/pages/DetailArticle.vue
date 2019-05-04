<template>
    <div class="container">
        <div class="article__container">
          <img class="article__thumbnail" :src="'data:image/jpeg;base64,'+ article.thumbnail"/>
          <div class="meta__container">
            <div class="meta__category">
              <span class="label">{{ article.category }} </span>
            </div>
            <div class="author__container">
              <img class="author__profil-picture" src="../assets/img/logo.jpg"/>
              <div class="author__info">
                <div class="author__name">{{ (article.meta || {}).author }}</div>
                <div>{{ (article.meta || {}).createdDate}}</div>
              </div>
            </div>
          </div>
          <div class="article__title">
            <h2>{{ article.title }}</h2>
          </div>
          <div v-html="article.content"></div>
        </div>
        <the-top></the-top>
    </div>
</template>

<script>
import Api from '../api'
import TheTop from '../components/TheTop'
export default {
  name: 'DetailArticle',
  components: {TheTop},
  data () {
    return {
      activeId: this.$route.params.id,
      article: [{
        thumbnail: '',
        category: '',
        content: '',
        meta: {
          author: '',
          createdDate: ''
        }
      }]
    }
  },
  methods: {
    init () {
      this.$nextTick(() => {
        this.findArticle(this.activeId)
      })
    },
    findArticle (id) {
      let self = this
      Api.article.find(id).then(res => {
        self.article = res.data.content.data
        self.article.meta.createdDate = new Date(self.article.meta.createdDate * 1000).toLocaleString()
      }).catch(err => {
        console.log(err)
      })
    }
  },
  watch: {
    '$route.params.id' (id) {
      this.activeId = id
      this.findArticle(this.activeId)
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      Api.analytic.count({ 'contentId': this.$route.params.id })
      self.init()
    })
  }
}
</script>

<style lang="scss" scoped>
.article {
  &__container {
    display: block;
    max-width: 750px;
  }

  &__thumbnail {
    width: 100%;
  }
}
  .author {
    &__container {
      width: 300px;
      display: block;
      margin-top: 35px;
      vertical-align: middle;
    }

    &__name {
      font-size: 16px;
      font-weight: bold;
    }

    &__profil-picture {
      width: 50px;
      height: 50px;
      float: left;
      margin-right: 15px;
    }
  }

  .container {
    margin-top: 80px;
    margin-bottom: 80px;
  }
</style>
