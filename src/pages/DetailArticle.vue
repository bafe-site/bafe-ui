<template>
  <!-- <div> -->
    <div class="kontainer">
      <div class="grid-item">
        <div class="artikel">
          <img class="gArtikel" :src="'data:image/jpeg;base64,'+ artikel.thumbnail"/>
          <div class="kontainer-inside">
            <div class="grid-item-inside" style="width: 150px; font-size: 80%; text-align: center;">
              <img class="gPenulis" src="../assets/img/logo.jpg"/>
              <span>{{ artikel.meta.author }}</span>
            </div>
            <div class="grid-item-inside">
              <span>View: {{ artikel.viewer }}</span>
              <span>Created: {{artikel.createdDate}}</span>
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
      <!-- <div class="grid-item">
        <div>
          <h2>Popular</h2>
            </div>
            <div class="flex-container" v-for="n in artikelPinggir.slice(0, 3)" :key="n.id">
              <div>
                <router-link :to="{ name: 'artikel', params: { id: n.id }}" :key="$route.path"><img class="gKontenPojok" :src="require('@/assets/img/' + n.thumbnail )"/></router-link>
                <h5>{{ n.title }}</h5>
              </div>
            </div>
        </div> -->
    <!-- </div> -->
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
      Axios
        .get(Constant.article.getId.replace(/{id}/i, this.$route.params.id))
        .then(res => {
          this.artikel = res.data.content.data
          // console.log(this.artikel)
          // console.log(this.$route.params.id)
        })
        .catch(err => {
          // console.log(Constant.article.getId.replace(/{id}/i, this.$route.params.id))
          console.log(err)
        })
      // Axios
      //   .get('http://localhost/bafe/public/api/article?orderBy=viewer&direction=desc')
      //   .then(res => {
      //     this.artikelPinggir = res.data.content.data
      //     console.log(this.artikelPinggir)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() =>{
      self.init()
    })
  }
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
        grid-template-columns: 100%;
        padding: 10px;
    }
    .kontainer-inside {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .grid-item {
      margin: 0 auto;
        width: 65%;
        font-size: 30px;
        text-align: center;
    }
    .grid-item-inside {
      width: 100%;
      margin-top: 15px;
    }
    .gKontenPojok{
        width: 400px;
        height: 300px;
    }
    .artikel{
        font-size: 18px;
        text-align: justify;
    }
    .gArtikel{
        width: 800px;
        height: 600px;
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
