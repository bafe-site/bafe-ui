<template>
  <div class="container">
    <div class="row">
      <div class="motto">
      </div>
    </div>
    <div class="row">
      <the-banner
        :dataset="banner.dataset"
        :config="banner.config"></the-banner>
    </div>
    <div class="row">
      <div class="item item__summary--horizontal">
        <video class="summary__thumbnail" src="../assets/img/GIF.mp4" type="video/mp4" autoplay controls></video>
        <div class="summary__content">
          <div class="set__title content__title">
            <h2>Mengapa Berbagi?</h2>
          </div>
          <div class="content__description">
            <p class="highlight">
              &emsp; Menjamurnya hoaks, ujaran kebencian, serta wacana yang tidak menyediakan solusi telah menciptakan keresahan bagi kita semua. Kata ‘independen’ sudah tidak lagi menjadi ciri khas media yang kini banyak dikemudikan oleh pihak tertentu demi memoles citra. Kerap kali kita dikejutkan dengan tereksposnya kebohongan yang dibuat oleh tokoh yang kita bela. Ada pula sebagian dari kita yang menerima perlakuan tidak adil karena stigma. Solusi yang kita telah pikirkan dan buat susah payah hanya dipandang sebelah mata dan akhirnya tidak bisa diproduksi massal karena kurang dana. Ingin membuat sebuah gerakan untuk perubahan yang bermakna malah dicap SJW dan cari perhatian saja.<br>
              &emsp; BAFE ingin menjadi tempat untuk orang berbagi karena semua orang pasti sebenarnya peduli. Yuk, ceritakan isu yang terjadi di sekitarmu, bagikan ilmumu, dan bersama-sama buat perubahan yang berarti. Partisipasimu penting untuk mewujudkan ekosistem yang saling mendukung demi berkembangnya masyarakat yang berorientasi pada solusi!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="loading" v-if="isLoading('filter-article')">
      <i class="fas fa-spinner fa-pulse"></i>
    </div>
    <div class="row" ref="carousel" v-if="!isLoading('filter-article')">
      <h2>Populer</h2>
      <the-carousel
        :dataset="carousel.top.dataset"
        :config="carousel.top.config"></the-carousel>
    </div>

    <div class="row section__content" v-if="!isLoading('filter-article')">
      <div class="category">
          <select class="input" name="Kategori" id="" v-model="filter.category">
            <option selected value>All</option>
            <option v-for="n in categories" :key="n.id" :value="n.id">{{n.categoryName}}</option>
          </select>
        </div>
      <div class="not-found__container" v-if="isShow.notFound">
        <div class="not-found__image">
          <i class="fas fa-paper-plane"></i>
        </div>
        <h2>Help Us Share Your Idea</h2>
        <p>Konten yang anda cari tidak ditemukan.</p>
      </div>
      <div class="grid-container" v-if="isShow.content">
        <div class="grid-item" v-for="n in latestContent" :key="n.id">
          <router-link
            tag="div" :to="{name: 'article', params: { id: n.id }}"
            class="item item__summary--vertical">
            <div class="summary__thumbnail">
              <img v-if="n.thumbnail" :src="'data:image/jpeg;base64,'+ n.thumbnail" :alt="n.thumbnail">
              <iframe v-else-if="n.video" width="348" height="261" :src="n.video"></iframe>
            </div>
            <div class="summary__label">
              <span v-if="n.isSponsored" class="label label--sponsor">Sponsored Content</span>
              <span class="label">{{ n.category }}</span>
            </div>
            <div class="summary__content">
              <div class="content__title">
                <h3> {{ n.title }} </h3>
              </div>
              <div class="content__description">
                <p>{{ n.summary | truncate(200) }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div style="text-align: center">
        <button v-if="isShow.button.loadMore" style="margin: 30px auto" class="button button--hollow" @click="load()">Load More</button>
      </div>
    </div>
    <the-top></the-top>
  </div>
</template>

<script>
import TheCarousel from '../components/TheCarousel'
import TheBanner from '../components/TheBanner'
import TheTop from '../components/TheTop'
import Api from '../api'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {TheCarousel, TheBanner, TheTop},
  data () {
    return {
      filter: {
        orderBy: '',
        direction: 'desc',
        page: 1,
        size: 3,
        category: ''
      },
      isShow: {
        notFound: false,
        content: true,
        button: {
          loadMore: true
        }
      },
      latestContent: [],
      categories: [],
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
    ...mapMutations(['startLoading', 'endLoading']),
    init () {
      this.getLatestArticle(3)
      this.getNewestArticle()
      this.filterCategory()
      this.banner.dataset.contents = [{
        title: 'Bagikan inovasi anda',
        description: '',
        background: 'innovation.jpg',
        action: {
          text: 'Unggah',
          link: ''
        },
        style: {
          align: '',
          mode: 1
        }
      }, {
        title: 'Bagikan cerita anda',
        description: '',
        background: 'story.jpg',
        action: {
          text: 'Tulis Sekarang',
          link: ''
        },
        style: {
          align: '',
          mode: 0
        }
      }, {
        title: 'Bagikan kampanye anda',
        description: '',
        background: 'campaign.jpg',
        action: {
          text: 'Tulis Sekarang',
          link: ''
        },
        style: {
          align: '',
          mode: 0
        }
      }]
    },
    filterCategory () {
      Api.lookup.category.filter().then(response => {
        this.categories = response.data.data
      }).catch(error => {
        console.log(error)
      })
    },
    filterArticle () {
      const params = {
        orderBy: this.filter.orderBy,
        direction: this.filter.direction,
        size: this.filter.size,
        page: this.filter.page,
        category: this.filter.category
      }
      this.startLoading('filter-article')
      return Api.article.filter(params)
    },
    getNewestArticle () {
      this.filter.orderBy = 'viewer'
      this.filterArticle().then(res => {
        this.carousel.top.dataset.articles = res.data.content.data
        this.endLoading('filter-article')
      }).catch(error => {
        console.log(error)
        this.endLoading('filter-article')
      })
    },
    getLatestArticle (size) {
      this.filter.orderBy = 'id'
      this.filter.size = size

      this.filterArticle().then(res => {
        this.latestContent = res.data.content.data
        console.log(res.data.content.meta.totalPage)
        if (res.data.content.meta.totalPage <= 1) {
          this.isShow.button.loadMore = false
        } else {
          this.isShow.button.loadMore = true
        }
        this.endLoading('filter-article')
      }).catch(err => {
        console.log(err)
        this.endLoading('filter-article')
        this.isShow.notFound = true
        this.isShow.button.loadMore = false
      })
    },
    load () {
      this.filter.size += 3
      this.getLatestArticle(this.filter.size)
    }
  },
  watch: {
    'filter.category': {
      handler () {
        this.getLatestArticle(3)
      },
      deep: true
    },
    latestContent (value) {
      if (value.length === 0) {
        this.isShow.content = false
        this.isShow.notFound = true
      } else {
        this.isShow.content = true
        this.isShow.notFound = false
      }
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/scss/abstracts/variables";
  .section {
    &__content {
      background-color: $white;
      padding: 25px;
    }
  }
  h2 {
    font-size: 40px;
  }
  .item__summary--horizontal .summary__thumbnail {
    width: 50%;
  }

  .highlight {
    text-align: justify
  }

  .category {
    width: 200px;
  }

</style>
