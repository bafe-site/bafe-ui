<template>
    <div>
        <div class="artikelArea">
            <div>
                <input class="judulArtikel" type="text" name="judul_artikel" value="Tulis Judul Artikel">
            </div>
            <div class="isiArtikel">
              <vue-editor v-model="content"></vue-editor>
            </div>
        </div>
        <div class="tUploadArtikel">
            <button class="ttUploadArtikel" type="submit" value="uploadArtikel">Submit</button>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  data () {
  },
  components: {
    'editor': Editor
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
    font-size: 24px;
    padding: 5px;
  }
</style>
