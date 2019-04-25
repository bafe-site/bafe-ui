<template>
    <div class="container">
        <div class="article__container">
          <img class="article__thumbnail" :src="'data:image/jpeg;base64,'+ artikel.thumbnail"/>
          <div class="meta__container">
            <div class="meta__category">
              <span class="label">{{ artikel.category }} </span>
            </div>
            <div class="author__container">
              <img class="author__profil-picture" src="../assets/img/logo.jpg"/>
              <div class="author__info">
                <div class="author__name">{{ artikel.meta.author }}</div>
                <div>{{ artikel.meta.createdDate}}</div>
              </div>
            </div>
          </div>
          <div class="article__title">
            <h2>{{ artikel.title }}</h2>
          </div>
          <div v-html="artikel.content"></div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import Constant from '../constant'
export default {
  name: 'detailArtikel',
  data () {
    return {
      artikel: [],
      artikelPinggir: []
    }
  },
  methods: {
    init () {
      let self = this
      Axios
        .get(Constant.article.getId.replace(/{id}/i, self.$route.params.id))
        .then(res => {
          self.artikel = res.data.content.data
          var d = new Date(self.artikel.meta.createdDate * 1000)
          self.artikel.meta.createdDate = d.toLocaleString()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
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
