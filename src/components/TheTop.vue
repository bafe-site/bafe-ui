<template>
  <div>
    <div id="top" v-if="isTop" @click="goToTop">
      <p>bafe</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isTop: false
    }
  },
  methods: {
    goToTop: function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    handleScroll: function () {
      this.isTop = window.scrollY > 0
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  #top {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    background-color: #000000;
    color: #ffffff;
  }
</style>
