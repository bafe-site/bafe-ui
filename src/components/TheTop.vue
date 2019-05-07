<template>
  <div id="top">
    <div v-if="isTop" class="top" @click="goToTop">
      <i class="fas fa-chevron-up styled"></i>
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
  .top {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    background-color: #1B2C23;
    z-index: 20;
    align-items: center;
    justify-content: center;
    display: flex;
    & > .styled {
      color: #ffffff;
      font-size: 15px;
    }
  }

</style>
