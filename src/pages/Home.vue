<template>
  <div class="container">
    <div class="row">
      <div class="motto">
        <h1>Citizen Journalism Platform for Innovative Solution</h1>
      </div>
    </div>
    <div class="row">
      <div class="banner">
        <div class="carousel__arrow" @click="carouselBack('banner')">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="carousel__main">
          <div class="banner__upper-desc">{{ carousel.banner.dataset[carousel.banner.active].description }}</div>
          <div class="banner__title">
            <h2>{{ carousel.banner.dataset[carousel.banner.active].title }}</h2>
          </div>
          <div class="banner__bottom-desc"></div>
          <div class="banner__action">
            <button class="button--hollow">{{ carousel.banner.dataset[carousel.banner.active].action }}</button>
          </div>
        </div>
        <div class="carousel__arrow" @click="carouselNext('banner')">
          <i class="fas fa-angle-right"></i>
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
        <div class="carousel__arrow" @click="carouselBack('top')">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="carousel__main">
          <div class="carousel__item-container">
            <div class="item item__summary--horizontal">
              <div class="summary__thumbnail">
                <img src="../assets/img/orang_ramai.jpg">
              </div>
              <div class="summary__content">
                <div class="content__title">
                  <h3> {{ carousel.top.dataset[carousel.top.active].title }} </h3>
                </div>
                <div class="content__description">
                  <p> {{ carousel.top.dataset[carousel.top.active].content | truncate(200) }} </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel__bullet-container">
            <span class="carousel__bullet" v-for="idx in carousel.top.dataset.length" :key="idx" @click="carouselChangeActive('top', idx)">
              <a :class="{ 'carousel__bullet--active' : isActiveTopCarousel(idx) }"><i class="far fa-circle"></i></a>
            </span>
          </div>
        </div>
        <div class="carousel__arrow" @click="carouselNext('top')">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="grid-container">
        <div class="grid-item" v-for="n in latestContent" :key="n.id">
          <div class="item item__summary--vertical">
            <div class="summary__thumbnail">
              <img src="../assets/img/orang_ramai.jpg">
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
export default {
  name: 'Home',
  data () {
    return {
      latestContent: [],
      carousel: {
        top: {
          active: 0,
          max: 0,
          dataset: [{
            title: '',
            content: '',
            thumbnail: ''
          }]
        },
        banner: {
          active: 0,
          max: 0,
          dataset: [{
            title: '',
            description: '',
            background: '',
            action: ''
          }]
        }
      }
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      self.init()
      setInterval(() => self.changeBanner(), 5000)
    })
  },
  methods: {
    init () {
      let self = this
      axios.get('http://localhost/bafe/public/api/article?orderBy=id&direction=desc')
        .then(response => {
          self.carousel.top.dataset = response.data.content.data.splice(0, 3)
          self.carousel.top.max = 3
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

      self.carousel.banner.max = 3
      self.carousel.banner.dataset = [{
        title: 'Sahare Your Innovation',
        description: 'Bergabunglah bersama kami untuk...',
        background: '',
        action: 'Upload'
      }, {
        title: 'Sahare Your Innovation 2',
        description: '2 Bergabunglah bersama kami untuk...',
        background: '',
        action: 'Download'
      }, {
        title: 'Sahare Your Innovation 3',
        description: '3 Bergabunglah bersama kami untuk...',
        background: '',
        action: 'Download'
      }]
    },
    carouselNext (type) {
      let self = this
      if (self.carousel[type].active !== self.carousel[type].max - 1) {
        self.carousel[type].active += 1
      }
    },
    carouselBack (type) {
      let self = this
      if (self.carousel[type].active !== 0) {
        self.carousel[type].active -= 1
      }
    },
    carouselChangeActive (type, idx) {
      let self = this
      self.carousel[type].active = idx - 1
    },
    changeBanner () {
      let self = this
      if (self.carousel.banner.active !== self.carousel.banner.max - 1) {
        self.carouselNext('banner')
      } else {
        self.carousel.banner.active = 0
      }
    }
  },
  computed: {
    isActiveTopCarousel () {
      let self = this
      return (idx) => {
        return self.carousel.top.active == (idx - 1)
      }
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
    padding: 30px 10px 20px 10px;
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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      font-size: 30px;
      /*background-color: #3e705a;*/
      transition: 100ms;
    }
  }
  .carousel__main {
    width: 80%;
  }

  .carousel__bullet-container {
    text-align: center;
  }

  .carousel__bullet {
    font-size: 10px;
    margin: 0px 2px;
    color: #565656;
    cursor: pointer;

    &--active {
      font-size: 12px;
      color: black;
    }
  }

  .grid-container {
    display: grid;
    margin: 30px 0px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #385446;
    color: #fff;
    padding: 10px 20px
  }

  .grid-item {
    padding: 10px 10px;
    text-align: center;

    &:hover {
      background-color: #1c261d;
      -webkit-transition: 100ms;
    }
  }
</style>
