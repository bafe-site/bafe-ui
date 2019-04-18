<template>
  <div class="container">
    <div class="row">
      <div class="motto">
        <h1>Citizen Journalism Platform for Innovative Solution</h1>
      </div>
    </div>
    <div class="row">
      <the-banner
        :dataset="banner.dataset"
        :config="banner.config"></the-banner>
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
    <div class="row" ref="carousel">
      <h2>Top Content</h2>
      <the-carousel
        :dataset="carousel.top.dataset"
        :config="carousel.top.config"></the-carousel>
    </div>
    <div class="row">
      <div class="list__container list__container--horizontal">
        <div class="list__item list__item--horizontal" v-for="n in latestContent" :key="n.id">
          <div class="item item__summary--vertical">
            <div class="summary__thumbnail">
              <img v-if="n.thumbnail" :src="require('../assets/img/' + n.thumbnail)" :alt="n.thumbnail">
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
  </div>
</template>

<script>
import axios from 'axios'
import TheCarousel from '../components/TheCarousel'
import TheBanner from '../components/TheBanner'
export default {
  name: 'Home',
  components: {TheCarousel, TheBanner},
  data () {
    return {
      latestContent: [],
      carousel: {
        top: {
          config: {
            max: 0
          },
          dataset: {
            articles: [{
              title: '',
              content: '',
              thumbnail: ''
            }]
          }
        }
      },
      banner: {
        config: {},
        dataset: {
          contents: [{
            title: '',
            description: '',
            background: '',
            action: {
              text: '',
              link: ''
            },
            style: {
              align: '',
              mode: 0
            }
          }]
        }
      }
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      self.init()
    })
  },
  methods: {
    init () {
      let self = this
      axios.get('http://localhost/bafe/public/api/article?orderBy=id&direction=desc')
        .then(response => {
          self.carousel.top.dataset.articles = response.data.content.data.splice(0, 3)
        })
        .catch(error => {
          alert(error)
        })

      axios.get('http://localhost/bafe/public/api/article?orderBy=viewer&direction=desc')
        .then(response => {
          self.latestContent = response.data.content.data.splice(0, 4)
        })
        .catch(error => {
          alert(error)
        })

      self.banner.dataset.contents = [{
        title: 'Share Your Innovation',
        description: 'Bergabunglah bersama kami untuk...',
        background: 'orang_ramai.jpg',
        action: {
          text: 'Upload',
          link: ''
        },
        style: {
          align: '',
          mode: 1
        }
      }, {
        title: 'Ceritakan Kisah Anda',
        description: 'Ceritakan isu-isu yang terjadi disekitarmu, masalah seperti apa yang dicari?',
        background: 'gambar_isi.jpg',
        action: {
          text: 'Tulis Sekarang',
          link: ''
        },
        style: {
          align: '',
          mode: 0
        }
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    margin: 50px 0px;
  }
  .motto {
    text-align: center;
    color: #385446;
  }

  .container {
    padding: 0px 10vw;
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

  .list__container {
    background-color: #385446;
    color: #fff;
  }

  .list__item {
    padding: 10px 10px;
    text-align: center;

    &:hover {
      background-color: #1c261d;
      -webkit-transition: 100ms;
    }
  }
</style>
