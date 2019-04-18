<template>
  <div>
    <table>
      <tr>
        <td>Id</td>
        <td>Judul Artikel</td>
        <td>Author</td>
        <td>Thumbnail</td>
        <td>Control</td>
      </tr>
      <tr v-for="n in dataArtikel" :key="n.id">
        <td>{{ n.id }}</td>
        <td>{{ n.title }}</td>
        <td>{{ n.meta.author }}</td>
        <td><img class="imageInside" :src="require('@/assets/img/' + n.thumbnail )"></td>
        <td><button @click='deleteArticle(n.id)'>Delete?</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Axios from 'axios'
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
          console.log(deletetArtikel)
        })
        .catch(err => {
          console.log('error delete article')
          console.log(err)
        })
    }
  },
  mounted () {
    Axios
      .get('http://localhost/bafe/public/api/article?orderBy=id&direction=desc')
      .then(res => {
        this.dataArtikel = res.data.content.data
        console.log(this.dataArtikel)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
}
table,td,tr {
  border: 2px solid #385446;
}
.imageInside {
  height: 100px;
  width: 200px;
  margin: 3px;
}
</style>
