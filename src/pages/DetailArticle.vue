<template>
  <div>
    <div class="kontainer">
      <div class="grid-item">
        <div class="artikel">
          <div class="kontainer">
            <img v-if="artikel.thumbnail" class="gArtikel" :src="require('@/assets/img/' + artikel.thumbnail)"/>
              <div style="width: 150px; font-size: 80%; text-align: center;">
                <img class="gPenulis" src="../assets/img/logo.jpg"/>
                <span v-if="artikel.meta.author">{{ artikel.meta.author }}</span>
                <span v-if="!artikel.meta.author">Rekan bafe.id</span>
              </div>
            </div>
          <h2>{{ artikel.title }}</h2>
          <div>
            <span class="kategori">Kategori: {{ artikel.category }} </span>
          </div>
          <div v-html="artikel.content">
          </div>
        </div>
      </div>
      <div class="grid-item">
        <div>
          <h2>Related</h2>
            </div>
            <div class="flex-container">
              <div>
                <router-link :to="{ path: '/article/1'}" append><img class="gKontenPojok" src="../assets/img/orang_jalan.jpg"/></router-link>
                <h4>bafe.id</h4>
              </div>
            </div>
            <div class="flex-container">
              <div>
                <router-link :to="{ path: '/article/5'}" append><img class="gKontenPojok" src="../assets/img/orang_ramai.jpg"/></router-link>
                <h4>bafe.id</h4>
              </div>
            </div>
            <div class="flex-container">
              <div>
                <router-link :to="{ path: '/article/9'}" append><img class="gKontenPojok" src="../assets/img/logo.png"/></router-link>
                <h4>bafe.id</h4>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'detailArtikel',
  data () {
    return {
      artikel: []
    }
  },
  mounted () {
    const linkToArticle = 'http://localhost/bafe/public/api/article/' + this.$route.params.id
    const Axios = require('axios')
    Axios
      .get(linkToArticle)
      .then(res => {
        this.artikel = res.data.content.data
        // console.log(this.artikel)
        // console.log(this.$route.params.id)
      })
      .catch(err => {
        console.log(err)
      })
  }
  // methods: {
  //   navigateTo: function (nav) {
  //     this.$router.push({
  //       path: `/article/${nav}`
  //     })
  //   }
  // }
}
</script>

<style scoped>
    p {
      border: 10px solid #ffffff;
      margin: 0px 20px;
      text-indent: .5in;
    }
    .flex-container {
        display: flex;
        flex-wrap: nowrap;
    }

    .flex-container > div {
        width: auto;
        margin: 10px;
        text-align: center;
        line-height: 20px;
        font-size: 30px;
    }
    .kontainer {
        display: grid;
        width: 100%;
        grid-template-columns: 75% 25%;
        padding: 10px;
    }
    .grid-item {
        width: 100%;
        font-size: 30px;
        text-align: center;
    }
    .gKontenPojok{
        max-width: 400px;
        max-height: 200px;
    }
    .artikel{
        font-size: 18px;
        text-align: justify;
    }
    .gArtikel{
        max-width: 1000px;
        max-height: 400px;
    }
    .gPenulis{
        width: 150px;
        height: 150px;
        padding-bottom: 0.5em;
    }
    .kategori {
      font-size: 16px;
      font-weight: lighter;
    }
</style>
