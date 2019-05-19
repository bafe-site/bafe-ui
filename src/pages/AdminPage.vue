<template>
  <div id="admin-page" v-if="isAuthenticated">
    <div class="body__title">
      <div class="container">
        <h2>Daftar Artikel</h2>
      </div>
    </div>
    <div class="body__content">
      <div class="container">
        <div class="row" style="float: right">
          <router-link tag="button" :to="{name: 'upload'}"
                       class="button button--round" ><i class="fas fa-plus"></i> Artikel</router-link>
        </div>
        <div class="row">
          <div class="loading" v-if="isLoading('admin-filter-article')">
            <i class="fas fa-spinner fa-pulse"></i>
          </div>
          <table class="table" v-if="!isLoading('admin-filter-article')">
            <thead>
            <tr>
              <th>Id</th>
              <th>Judul Artikel</th>
              <th>Kategori</th>
              <th>Penulis</th>
              <th>Tanggal Dibuat</th>
              <th>Thumbnail</th>
              <th>View</th>
              <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="n in dataArtikel" :key="n.id">
              <td class="column--center">{{ n.id }}</td>
              <td>{{ n.title }}</td>
              <td>{{ n.category }}</td>
              <td>{{ n.meta.author }}</td>
              <td>{{ parseInt(n.meta.createdDate) | date('DD/MM/YYYY') }}</td>
              <td>
                <img class="col-4" v-if="n.thumbnail" :src="'data:image/jpeg;base64,'+ n.thumbnail">
                <iframe v-else-if="n.video" width="100" height="75"
                        :src="n.video"></iframe>
              </td>
              <td class="column--center">{{ n.viewer }}</td>
              <td class="column--center">
                <button @click='deleteArticle(n.id)'><i class="fas fa-trash-alt"></i></button>
                <button @click='seeArticle(n.id)'><i class="fas fa-eye"></i></button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AdminPage',
  data () {
    return {
      dataArtikel: [],
      filter: {
        orderBy: 'id',
        direction: 'desc',
        page: 1,
        size: null,
        category: ''
      }
    }
  },
  methods: {
    ...mapMutations(['startLoading', 'endLoading']),
    deleteArticle (idx) {
      Api.article.delete(idx).then(res => {
        this.filterArticle()
      }).catch(err => { console.log(err) })
    },
    seeArticle (idx) {
      let self = this
      self.$router.push({
        name: 'article',
        params: {
          id: idx
        }
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
      this.startLoading('admin-filter-article')
      Api.article.filter(params).then(res => {
        this.dataArtikel = res.data.content.data
        this.endLoading('admin-filter-article')
      }).catch(err => {
        alert(err)
        this.endLoading('admin-filter-article')
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.filterArticle()
    })
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'isLoading'])
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

.row {
  margin-top: 10px;
  margin-bottom: 15px;
}

.body__content {
  padding-top: 50px;
  padding-bottom: 50px;
}

.col-4 {
  width: 100px;
}
</style>
