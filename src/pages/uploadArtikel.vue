<template>
    <div>
      <div class="kontainer">
        <div class="artikelArea">
            <div>
              <input onfocus="this.value=''" v-model="judulContent" class="judulArtikel" type="text">
            </div>
            <div class="isiArtikel">
              <vue-editor onfocus="this.value=''" v-model="content"></vue-editor>
            </div>
        </div>
          <div>
            <div>
              <h2>Author</h2>
              <input v-model="author" type="text">
            </div>
            <div class="tagArea">
              <h2>Kategori</h2>
              <select v-model="kategoriD">
                <option v-for="n in kategori" :key="n.id" v-bind:value="n.id">{{ n.categoryName }}</option>
              </select>
            <div>
              <h2>Tag</h2>
              <input type="text" v-model="tag[0]">
              <input type="text" v-model="tag[1]">
              <input type="text" v-model="tag[2]">
            </div>
          </div>
          <div class="uploadArea">
            <h2>Upload Gambar</h2>
            <input type="file" @change="processImage($event)">
            <h2>Upload Video</h2>
            <input type="file" @change="processVideo($event)">
          </div>
        </div>
      </div>
      <div class="tUploadArtikel">
            <button @click="saveContent" class="ttUploadArtikel" type="submit" value="uploadArtikel">Submit</button>
        </div>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import Axios from 'axios'
export default {
  name: 'isiArtikel',
  components: {
    VueEditor
  },
  data () {
    return {
      judulContent: 'Tulis Judul Artikelmu disini ...',
      content: '',
      kategori: [],
      kategoriD: '',
      thumbnail: '',
      video: '',
      author: '',
      tag: []
    }
  },
  methods: {
    saveContent () {
      var kategoriID = parseInt(this.kategoriD)
      var tagS = this.tag.join()
      let data = JSON.stringify({
        title: this.judulContent,
        content: this.content,
        category: kategoriID,
        thumbnail: this.thumbnail,
        video: this.video,
        author: this.author,
        tag: tagS
      })
      Axios
        .post('http://localhost/bafe/public/api/article', data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$cookie.get('token'),
            'Accept': 'application/json'
          }
        })
        .then(res => {
          console.log(data)
          console.log(typeof (kategoriD))
        })
        .catch(err => {
          console.log(data)
          console.log(err)
        })
    },
    processImage (event) {
      this.thumbnail = event.target.files[0].name
    },
    processVideo (event) {
      this.video = event.target.files[0].name
    }
  },
  mounted () {
    Axios
      .get('http://localhost/bafe/public/api/category')
      .then(res => {
        this.kategori = res.data.data
        console.log(res.data.data)
      })
  }
}

</script>
<style scoped>
  .kontainer {
    display: grid;
    grid-template-columns: 70% 20%;
  }
  .judulArtikel {
    width: 80%;
    margin: 15px 0;
    padding: 10px 5px;
  }
  .artikelArea {
    width: 80%;
    margin: 0 auto;
  }
  .tUploadArtikel {
    margin: 10px;
    text-align: center;
  }
  .ttUploadArtikel {
    font-size: 20px;
    padding: 9px 20px;
    border: 5px solid #385446;
    border-radius: 20px;
    background-color: #385446;
    color: #ffffff;
  }
  .ttUploadArtikel:hover{
    background-color: #ffffff;
    color: #385446;
  }
</style>
