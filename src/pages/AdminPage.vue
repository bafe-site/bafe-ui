<template>
  <div id="admin-page" v-if="isAuthenticated">
    <div class="body__title">
      <div class="container">
        <h2>Daftar Artikel</h2>
      </div>
    </div>
    <div class="body__content">
      <div class="container">
        <table class="table">
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
            <td>{{ n.meta.createdDate }}</td>
            <td><img class="imageInside" :src="'data:image/jpeg;base64,'+ n.thumbnail"></td>
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
</template>

<script>
import Api from '../api'
import { mapGetters } from 'vuex'

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
      Api.article.filter(params).then(res => {
        this.dataArtikel = res.data.content.data
      }).catch(err => { console.log(err) })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.filterArticle()
    })
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

.body__content {
  padding-top: 50px;
  padding-bottom: 50px;
}

.imageInside {
  max-width: 200px;
  margin: 3px;
}
</style>
