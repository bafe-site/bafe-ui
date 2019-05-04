<template>
  <div class="carousel">
    <div class="carousel__arrow" @click="back()">
      <i class="fas fa-angle-left"></i>
    </div>
    <div class="carousel__main">
      <div class="carousel__item-container">
        <div class="item item__summary--horizontal">
          <img class="summary__thumbnail"
               v-if="articles[active].thumbnail"
               :src="'data:image/jpeg;base64,'+articles[active].thumbnail"
               :alt="articles[active].thumbnail">
          <iframe v-else-if="articles[active].video" width="400"
                  :src="articles[active].video"></iframe>
          <div class="summary__content">
            <div class="summary__meta">
              <span class="label">{{ articles[active].category }}</span>
            </div>
            <div class="content__title">
              <h3> {{ articles[active].title }} </h3>
            </div>
            <div class="content__description">
              <p> {{ articles[active].summary | truncate(200) }} </p>
            </div>
            <div class="content__action">
              <router-link
                tag="button"
                class="button button--hollow button--round button--white"
                :to="{name: 'article', params: { id: articles[active].id }}">
                Selengkapnya
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel__bullet-container">
        <span
          class="carousel__bullet"
          v-for="idx in articles.length"
          :key="idx" @click="change(idx)">
          <a v-show="!isActive(idx)">
            <i class="far fa-circle"></i>
          </a>
          <a v-show="isActive(idx)">
            <i class="fas fa-circle"></i>
          </a>
        </span>
      </div>
    </div>
    <div class="carousel__arrow" @click="next()">
      <i class="fas fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCarousel',
  props: {
    config: {
      max: {
        type: Number,
        require: false
      }
    },
    dataset: {
      articles: {
        type: Array,
        require: true
      }
    }
  },
  data () {
    return {
      active: 0,
      max: 0,
      articles: [{
        id: 0,
        title: '',
        content: '',
        thumbnail: '',
        summary: ''
      }]
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      self.fetchData()
    })
  },
  computed: {
    isActive () {
      let self = this
      return (idx) => {
        return self.active === (idx - 1)
      }
    }
  },
  methods: {
    fetchData () {
      let self = this
      self.articles = self.dataset.articles
      self.max = self.config.max || self.dataset.articles.length
    },
    next () {
      let self = this
      if (self.active !== self.max - 1) {
        self.active += 1
      }
    },
    back () {
      let self = this
      if (self.active !== 0) {
        self.active -= 1
      }
    },
    change (idx) {
      let self = this
      self.active = idx - 1
    }
  },
  watch: {
    dataset: {
      handler () {
        let self = this
        self.fetchData()
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/style/scss/abstracts/variables";
  .label {
    font-size: 12px;
    color: $bafe;
    padding: 5px 10px;
    margin-top: 5px;
    background-color: $white;
  }

  .content__action {
    margin-top: 35px;
  }

  .carousel {
    display: flex;
    justify-content: space-between;
    padding: 45px 10px 20px 10px;
    box-sizing: border-box;
    max-height: 450px;
    text-align: justify;
    background-color: $bafe;
    color: $white;
    align-items: center;

    &__bullet {
      font-size: 10px;
      margin: 0px 2px;
      color: $grey-2;
      cursor: pointer;

      &-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &--active {
        font-size: 12px;
        color: $white;
      }
    }

    &__arrow {
      text-align: center;
      width: 40px;
      height: 100px;
      padding: 0px 5px;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        font-size: 30px;
        transition: 100ms;
      }
    }

    .summary {
      &__thumbnail {
        width: 50%;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        & > img {
          max-height: 250px;
        }
      }
      &__content {
        width: 50%;
        padding-left: 25px;
      }
    }

    &__main {
      width: 80%;
    }
  }

  /*Override CSS*/
  .item__summary--horizontal {
    margin-bottom: 30px;
  }
</style>
