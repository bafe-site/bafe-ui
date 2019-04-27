<template>
  <div id="admin-page" v-if="isLogin">
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
import Axios from 'axios'
import { mapGetters } from  'vuex'

export default {
  name: 'AdminPage',
  data () {
    return {
      dataArtikel: []
    }
  },
  methods: {
    deleteArticle: function (idx) {
      const deletetArtikel = 'http://localhost/bafe/public/api/article/' + idx
      Axios
        .delete(deletetArtikel, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$cookie.get('token'),
            'Accept': 'application/json'
          }
        })
        .then(res => {
          console.log('success')
        })
        .catch(err => {
          console.log('error delete article')
          console.log(err)
        })
    },
    seeArticle (idx) {
      let self = this
      self.$router.push({
        name: 'article',
        params: {
          id: idx
        }
      })
    }
  },
  mounted () {
    Axios
      .get('http://localhost/bafe/public/api/article?orderBy=id&direction=desc')
      .then(res => {
        this.dataArtikel = res.data.content.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      isLogin: 'isLogin'
    })
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
