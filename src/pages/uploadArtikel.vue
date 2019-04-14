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
        <div class="tagArea">
          <h2>Kategori</h2>
          <select v-model="kategoriD">
            <option v-for="n in kategori" :key="n.id">{{ n.categoryName }}</option>
          </select>
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
      kategoriD: ''
    }
  },
  methods: {
    saveContent () {
      Axios
        .post('http://localhost/bafe/public/api/article', {
          title: this.judulContent,
          content: this.content,
          categoryCodes: this.kategoriD,
        })
        .then(res => {
          console.log(this.content)
        })
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
