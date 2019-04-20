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
          <div class="summary__content">
            <div class="content__title">
              <h3> {{ articles[active].title }} </h3>
            </div>
            <div class="content__description">
              <p> {{ articles[active].content | truncate(200) }} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel__bullet-container">
            <span
              class="carousel__bullet"
              v-for="idx in articles.length"
              :key="idx" @click="change(idx)">
              <a :class="{ 'carousel__bullet--active' : isActive(idx) }">
                <i class="far fa-circle"></i>
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
        title: '',
        content: '',
        thumbnail: ''
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
  .carousel {
    display: flex;
    justify-content: space-between;
    padding: 30px 10px 20px 10px;
    text-align: justify;
    background-color: lightgrey;
    align-items: center;

    &__bullet {
      font-size: 10px;
      margin: 0px 2px;
      color: #565656;
      cursor: pointer;

      &-container {
        text-align: center;
      }

      &--active {
        font-size: 12px;
        color: black;
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
