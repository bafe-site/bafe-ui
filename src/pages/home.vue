<template>
    <div id="vueApp">
        <div>
            <h1 class="headVision">Citizen Journalism Platform for Innovative Solution</h1>
        </div>
        <div class="howTo">
            <div class="howToW">
                <p>bergabunglah bersama kami untuk...</p>
                <h2>Share ur Innovation</h2>
            </div>
            <input onclick="location.href='/TermsAndCondition';" class="uploadButton" type="button" value="SUBMIT">
        </div>
        <div class="misi">
            <h1>Why Sharing?</h1>
            <img class="gambarTengah" align="left" src="../assets/img/S__17219904.jpg">
            <p class="tulisanMisi">Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
                underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant
                browsers and HTML parsers. Under the hood, Vue compiles the templates into Virtual DOM render functions.
                Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of
                components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
                </p>
        </div>
        <div>
            <h1>Konten Teratas</h1>
        </div>
        <div class="topKonten" v-for="content in topKonten" :key="content.id">
          <div class="isiTopKonten" >
            <a href="/DetailArtikel">{{ content.title }}</a>
            <p>{{ content.content | truncate }}</p>
          </div>
        </div>
        <div>
            <h1>Konten Terbaru</h1>
        </div>
        <div class="artikelLatestKontainer">
            <div class="grid-item" v-for="content in latest" :key="content.id">
                <a class="artikel_te" href="/DetailArtikel">
                <img class="gambarLatest" align="left" :src="require('@/assets/img/' + content.thumbnail)"></a>
                <div>
                    <h3>
                      {{ content.title|truncate }}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'home',
  data () {
    return {
      latest : [],
      topKonten : []
    }
  },
  mounted () {
    Axios
    .get('http://localhost/bafe/public/api/article?orderBy=id&direction=desc')
    .then(res => {
      this.latest = res.data.content.data.slice(0,3);
    })
    Axios
    .get('http://localhost/bafe/public/api/article?orderBy=viewer&direction=desc')
    .then(res => {
      this.topKonten = res.data.content.data.slice(0,1);
      console.log(this.topKonten)
    })
  },
  filters: {
    truncate: function(value) {
      if (value.length > 20) {
        value = value.substring(0,17) + '...';
      }
      return value
    }
  }
}
</script>

<style scoped>
    .headVision {
        text-align: center;
        color: #385446;
    }
    h1 {
        text-align: center;
    }
    h2 {
      text-align: center;
      color: #ffffff;
    }
    h3 {
        color: #385446;
    }
    a {
        color: #385446;
        text-decoration: none;
    }
    .howTo {
        display: grid;
        grid-template-columns: auto;
        margin: 0 auto;
        height: 450px;
        color: #fafafa;
        background-color: #385446;
        background-image: url('../assets/img/orang_ramai.jpg');
        background-position: 50% 0px;
        background-repeat: no-repeat;
    }
    .howToW {
        margin: 10px auto;
        text-align: center;
    }
    .uploadButton {
        margin: 0 auto;
        width: 150px;
        height: 70px;
        float: center;
        padding: 15px 30px;
        border: 3px solid #fafafa;
        border-radius: 30px;
        background-color: #385446;
        color: #fafafa;
        font-size: 16px;
    }
    .misi {
        margin: 0 auto;
        width: 75%;
        height: 250px;
        padding: 40px 40px;
        text-align: justify;
        border: 0px;
        color: #000000;
    }
    .tulisanMisi {
        margin: 50px;
    }
    .gambarTengah {
        height: 200px;
        width: 200px;
        padding: 15px;
    }
    .topKonten {
      width: 800px;
      height: 400px;
      margin: 0 auto;
    }
    .isiTopKonten {
      width: 800px;
      height: 250px;
    }
    .isiTopKonten::before {
      content: '';
      position: absolute;
      height: 50%;
      width: 50%;
      background-image: url("../assets/img/orang_jalan.jpg");
      background-repeat: no-repeat;
      -webkit-filter: grayscale(0) blur(0);
      filter: grayscale(0) blur(0);
      transition: .4s ease-in-out;
    }
    .isiTopKonten:hover:before {
      -webkit-filter: grayscale(100%) blur(2px);
      filter: grayscale(100%) blur(2px);
      transition: .4s ease-in-out;
    }
    .isiTopKonten > p {
      display: none;
    }
    .isiTopKonten:hover > p {
      position: relative;
      display: block;
      color: #ffffff;
      font-size: 16px;
      z-index: 999;
      width: 600px;
      height: 100%;
      margin-top: 70px;
      padding: 20px 50px;
      text-align: justify;
    }
    .isiTopKonten:hover > a {
      position: relative;
      display: block;
      color: #ffffff;
      text-align: center;
      font-weight: bold;
      font-size: 48px;
      padding-top: 10px;
      margin-top: 0;
      z-index: 999;
      width: 100%;
      height: 30px;
    }
    .sliderButton{
      margin: 0 auto;
    }
    .artikelLatestKontainer {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #fafafa;
    }
    .grid-item {
        display: grid;
        grid-template-columns: auto;
        border: 20px solid #ffffff;
        padding: 20px;
        font-size: 18px;
        height: 300px;
    }
    .gambarLatest {
        max-height: 200px;
        max-width: 300px;
    }
</style>
