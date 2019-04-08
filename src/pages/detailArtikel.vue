<template>
    <div>
        <div class="kontainer">
            <div class="grid-item">
                <div class="artikel" v-for="n in artikel" :key="n.id" >
                    <div class="kontainer">
                        <img class="gArtikel" :src="require('../assets/' + n.thumbnail )"/>
                        <div style="width: 150px; font-size: 80%; text-align: center;">
                            <img class="gPenulis" src="../assets/logo.jpg"/>
                            <span>{{ n.meta.author }}</span>
                        </div>
                    </div>
                    <h2> {{ n.title }} </h2>
                    <div v-html="n">
                    </div>
                </div>
            </div>
            <div class="grid-item">
                <div>
                    <h2>Related</h2>
                </div>
                <div class="flex-container">
                    <div>
                        <a href="/detailArtikel"><img class="gKontenPojok" src="../assets/orang_jalan.jpg"/></a>
                        <h4>bafe.id</h4>
                    </div>
                </div>
                <div class="flex-container">
                    <div>
                        <a href="/detailArtikel"><img class="gKontenPojok" src="../assets/orang_ramai.jpg"/></a>
                        <h4>bafe.id</h4>
                    </div>
                </div>
                <div class="flex-container">
                    <div>
                        <a href="/detailArtikel"><img class="gKontenPojok" src="../assets/logo.png"/></a>
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
    const Axios = require('axios')
    Axios
      .get('http://localhost/bafe/public/api/article/3')
      .then(res => {
        this.artikel = res.data.content.data
        console.log(this.artikel)
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
</style>
