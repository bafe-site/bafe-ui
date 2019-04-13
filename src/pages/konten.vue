<template>
    <div>
        <div class="mengapaMenulis">
            <div class="gambarMengapaMenulis">
                <img height="200px" width="200px" src="../assets/img/S__17219904.jpg">
            </div>
            <div>
                <h2>Tingkatkan Literasi dan Kesadaran Masyarakat Lewat Citizen Journalism</h2>
                <p class="tulisanMenulis">bafe.id adalah startup yang bergerak di bidang media digital. Membawa visi "connecting insight", kami ingin mengajak seluruh masyarakat untuk berbagi wawasan dan berkolaborasi untuk menciptakan solusi yang inovatif atas masalah yang ditemui sehari - hari.</p>
            </div>
        </div>
        <div>
            <h1>Artikel</h1>
        </div>
        <div>
            <div class="artikelTrendingKontainer">
                <div class="itemArtikelTrending" v-for="n in artikelTrending" :key="n.id">
                    <a class="artikel_te" href="/DetailArtikel">
                    <img class="gambarTrending" align="left" :src="require('@/assets/img/' + n.thumbnail)"></a>
                    <div>
                        <h3>{{ n.title }}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>Video</h1>
        </div>
        <div>
            <div class="videoTrendingKontainer">
                <div class="itemVideoTrending" v-for="m in videoTrending" :key="m.id">
                    <iframe width="320" height="180" :src="m.video"></iframe>
                    <h3>{{ m.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'konten',
  data () {
    return {
      artikelTrending: [],
      videoTrending: []
    }
  },
  mounted () {
    Axios
      .get('http://localhost/bafe/public/api/article?orderBy=viewer&direction=desc')
      .then(res => {
        this.artikelTrending = res.data.content.data.slice(0, 3)
        this.videoTrending = res.data.content.data.slice(0, 3)
      })
  }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
h2 {
    text-align: center;
}
.mengapaMenulis {
    display: grid;
    grid-template-columns: auto 75%;
    width: 75%;
    margin: 100px auto;
}
.gambarMengapaMenulis {
    margin: 0 auto;
}
.tulisanMenulis {
    text-align: justify;
}
.artikelTrendingKontainer {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #fafafa;
    margin: 100px auto;
}
.itemArtikelTrending {
    display: grid;
    grid-template-columns: auto;
    border: 20px solid #ffffff;
    padding: 20px;
    font-size: 18px;
    height: 300px;
}
.gambarTrending {
    max-height: 300px;
    max-width: 400px;
}
.videoTrendingKontainer {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #fafafa;
    margin: 100px auto;
}
.itemVideoTrending {
    display: grid;
    grid-template-columns: auto;
    border: 20px solid #ffffff;
    padding: 20px;
    font-size: 18px;
    height: 300px;
}
.videoTrendingKontainer {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #fafafa;
    margin-bottom: 150px;
}
.itemVideoTrending {
    display: grid;
    grid-template-columns: auto;
    border: 20px solid #ffffff;
    padding: 20px;
    font-size: 18px;
    height: 300px;
}
</style>
