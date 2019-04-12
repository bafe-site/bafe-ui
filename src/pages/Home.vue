<template>
  <div class="container">
    <div class="row">
      <div class="motto">
        <h1>Citizen Journalism Platform for Innovative Solution</h1>
      </div>
    </div>
    <div class="row">
      <div class="banner">
        <div class="banner__upper-desc">bergabunglah bersama kami untuk...</div>
        <div class="banner__title">
          <h2>Share ur Innovation</h2>
        </div>
        <div class="banner__bottom-desc"></div>
        <div class="banner__action">
          <button class="button--hollow">Upload</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="item item__summary--horizontal">
        <div class="summary__thumbnail">
          <img align="left" src="../assets/img/S__17219904.jpg">
        </div>
        <div class="summary__content">
          <div class="set__title content__title">
            <h2>Why Sharing?</h2>
          </div>
          <div class="content__description">
            <p>Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
              underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant
              browsers and HTML parsers. Under the hood, Vue compiles the templates into Virtual DOM render functions.
              Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of
              components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
              Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
              underlying Vue instance’s data.</p>
          </div>
        </div>
      </div>
    </div>
    <h2>Top Content</h2>
    <div class="row">
      <div class="carousel">
        <div class="carousel__arrow">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="carousel__item-container" v-for="m in kontenTop" :key="m.id">
          <div class="item item__summary--horizontal">
            <div class="summary__thumbnail">
              <img class="g_t" align="left" :src="require('@/assets/img/' + m.thumbnail )">
            </div>
            <div class="summary__content">
              <div class="content__title">
                <h3> {{ m.title }} </h3>
              </div>
              <div class="content__description">
                <p> {{ m.content }} </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel__arrow">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="grid-container">
        <div class="grid-item" v-for="n in kontenTerakhir" :key="n.id">
          <div class="item item__summary--vertical">
            <div class="summary__thumbnail">
              <img class="g_t" align="left" :src="require('@/assets/img/' + n.thumbnail )">
            </div>
            <div class="summary__content">
              <div class="content__title">
                <h3> {{ n.title }} </h3>
              </div>
              <div class="content__description">
                <p> {{ n.content|truncate }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      kontenTop: [],
      kontenTerakhir: []
    }
  },
  mounted () {
    Promise.all([
      Axios.get('http://localhost/bafe/public/api/article?orderBy=id&direction=desc'),
      Axios.get('http://localhost/bafe/public/api/article?orderBy=viewer&direction=desc')
    ])
      .then(Axios.spread((kontenTerakhirRes, kontenTopRes) => {
        this.kontenTerakhir = kontenTerakhirRes.data.content.data.slice(0, 3)
        console.log(this.kontenTerakhir)
        this.kontenTop = kontenTopRes.data.content.data.slice(0, 3)
        console.log(this.kontenTop)
      }))
  },
  filters: {
    truncate: function (karakter) {
      if (karakter.length > 40) {
        karakter = karakter.substring(0, 36) + ' ...'
      }
      return karakter
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    margin: 30px 0px;
  }
  .motto {
    text-align: center;
    color: #385446;
  }

  .container {
    padding: 0px 10vw;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    position: relative;
    text-align: center;
    padding: 0px 30px;
    color: #fff;

    &__action {
      margin: 25px 0px;
    }
  }
  .banner::after {
    background-color: #26342a;
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
  }
  .banner::before {
    background-image: url('../assets/img/orang_ramai.jpg');
    background-size: cover;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.4;
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

  .upload_button_2 {
    position: relative;
    padding: 15px 20px;
    border: 5px solid #fafafa;
    border-radius: 8px;
    background-color: #385446;
    color: #fafafa;
  }
  .carousel {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    text-align: justify;
    background-color: lightgrey;
    align-items: center;
  }
  .carousel__arrow {
    text-align: center;
    width: 30px;
    height: 100%;
    padding: 0px 5px;
    font-size: 14px;

    &:hover {
      font-size: 30px;
      background-color: #3e705a;
      transition: 100ms;
    }
  }
  .carousel__item-container {
    width: 80%;
  }
  .grid-container {
    display: grid;
    margin: 30px 0px;
    grid-template-columns: auto auto auto auto;
    background-color: #385446;
    color: #fff;
  }

  .grid-item {
    padding: 10px 10px;
    margin: 10px 0px;
    font-size: 18px;
    text-align: center;

    &:hover {
      background-color: #1c261d;
      -webkit-transition: 100ms;
    }

    &:first-child {
      margin-left: 20px;
    }

    &:last-child {
      margin-right: 20px;
    }
  }
  .artikel_t {
    background-color: #385446;
    padding: 5px;
  }

  a {
    color: #fafafa;
    text-decoration: none;
  }
</style>
