<template>
  <div class="banner"
       :style="{ 'background-image': contents[active].background ? 'url(' + require('../assets/img/' + contents[active].background) + ')' : 'none' }">
    <div class="banner__container">
      <div class="banner__arrow" @click="back()">
        <i class="fas fa-angle-left"></i>
      </div>
      <div class="banner__main" :style="{ 'text-align': contents[active].style.align }">
        <div class="banner__upper-desc" v-if="contents[active].style.mode">{{ contents[active].description }}</div>
        <div class="banner__title">
          <h2>{{ contents[active].title }}</h2>
        </div>
        <div class="banner__bottom-desc" v-if="!contents[active].style.mode">{{ contents[active].description }}</div>
        <div class="banner__action">
          <a class="button button--hollow" :href="!contents[active].action.link">{{ contents[active].action.text }}</a>
        </div>
      </div>
      <div class="banner__arrow" @click="next()">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBanner',
  props: {
    config: {
      max: {
        type: Number,
        require: false
      }
    },
    dataset: {
      contents: {
        type: Array,
        require: true
      }
    }
  },
  data () {
    return {
      active: 0,
      max: 0,
      contents: [{
        title: '',
        description: '',
        background: '',
        action: {
          text: '',
          link: ''
        },
        style: {
          align: 'center',
          mode: 1
        }
      }]
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      self.fetchData()
      setInterval(() => self.change(), 5000)
    })
  },
  methods: {
    fetchData () {
      let self = this
      self.contents = self.dataset.contents
      self.max = self.config.max || self.dataset.contents.length
    },
    change () {
      let self = this
      if (self.active !== self.max - 1) {
        self.next()
      } else {
        self.active = 0
      }
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
  .banner {
    background-size: cover;

    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 400px;
      position: relative;
      padding: 0px 30px;
      color: #fff;
    }

    &__main {
      width: 90%;
      text-align: center;
    }

    &__arrow {
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
        transition: 100ms;
      }
    }

    &__action {
      display: flex;
      justify-content: center;
      margin: 25px 0px;
    }
  }
</style>
