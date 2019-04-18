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
        <td><button @click="deleteArticle">Delete?</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      dataArtikel: []
    }
  },
  methods: {
    deleteArticle: function () {

    }
  },
  mounted () {
    Axios
      .get('http://localhost/bafe/public/api/article?orderBy=id&direction=asc')
      .then(res => {
        this.dataArtikel = res.data.content.data
        console.log(this.dataArtikel)
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
