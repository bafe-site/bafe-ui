<template>
    <div>
        <div class="artikelArea">
            <div>
              <input onfocus="this.value=''" v-model="judulContent" class="judulArtikel" type="text">
            </div>
            <div class="isiArtikel">
              <vue-editor onfocus="this.value=''" v-model="content"></vue-editor>
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
      content: ''
    }
  },
  methods: {
    saveContent () {
      Axios
        .post('http://localhost/bafe/public/api/article', {
          content: this.content
        })
        .then(res => {
          console.log(this.content)
        })
    }
  }
}

</script>
<style scoped>
  .judulArtikel {
    width: 80%;
    margin: 15px 0;
    padding: 10px 5px;
  }
  .artikelArea {
    width: 60%;
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
