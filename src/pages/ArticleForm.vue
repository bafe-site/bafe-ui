<template>
    <div class="container">
      <div class="row article-form">
        <div class="article-form__container">
            <div class="form-group__container form-group__container--vertical">
              <label for="title"> Tambahkan Pos Baru </label>
              <input id="title"
                onfocus="this.value=''"
                v-model="judulContent"
                class="input"
                type="text">
            </div>
            <vue-editor onfocus="this.value=''" v-model="content"></vue-editor>
        </div>
        <div class="setting-form__container">
          <div class="form-group__container">
            <button class="button--standar">simpan draf</button>
            <button class="button--standar">lihat artikel</button>
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label for="category">kategori</label>
            <select
              id="category"
              v-model="kategoriD"
              class="input">
              <option v-for="n in kategori" :key="n.id" v-bind:value="n.id">{{ n.categoryName }}</option>
            </select>
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label for="tags">label</label>
            <textarea id="tags" class="input" v-model="tag"></textarea>
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label for="author">penulis</label>
            <input id="author" class="input" v-model="author" type="text">
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label>Unggah Gambar</label>
            <input type="file" @change="processImage($event)">
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label>Unggah Video</label>
            <input type="file" @change="processVideo($event)">
          </div>
          <div class="form-group__container form-group__container--horizontal">
            <button @click="saveContent" class="button button--main" type="submit" value="uploadArtikel">Kirim</button>
            <a class="pull-right"><i class="fa fa-trash"></i><span> hapus </span></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import Axios from 'axios'
import Constant from '../constant'
export default {
  name: 'ArticleForm',
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
      tag: '',
      selectedFile: ''
    }
  },
  methods: {
    saveContent () {
      let self = this
      // var dateNow = Date.now()
      var kategoriID = parseInt(self.kategoriD)
      var strImage = self.selectedFile.replace(/^data:image\/[a-z]+;base64,/, '')
      // console.log(strImage)
      // var tagS = self.tag.join()
      let data = JSON.stringify({
        title: self.judulContent,
        content: self.content,
        category: kategoriID,
        video: self.video,
        author: self.author,
        tag: self.tag,
        // dateCreated: dateNow,
        draft: 0,
        thumbnail: strImage
      })
      Axios
        .post(Constant.article.post, data, {
          headers: Constant.header
        })
        .then(res => {
          console.log(data)
        })
        .catch(err => {
          console.log(data)
          console.log(err)
        })
    },
    processImage (e) {
      let self = this
      const file = e.target.files[0]
      // console.log(file)
      if (!file.type.includes('image/')) {
        alert('Please select an image file')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          self.selectedFile = event.target.result
          // console.log(self.selectedFile)
        }
        reader.readAsDataURL(file)
      }
    },
    processVideo (event) {
      let self = this
      self.video = event.target.files[0].name
    },
    getKategori () {
      let self = this
      Axios
        .get(Constant.lookup.category)
        .then(res => {
          self.kategori = res.data.data
          console.log(self.kategori)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      // self.init()
      self.getKategori()
    })
  }
}

</script>
<style lang="scss" scoped>
  .article-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .article-form__container {
    margin: 10px 0px;
  }

  .setting-form__container {
    border: 1px solid lightgrey;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 15px 20px;
    width: 300px;
    box-sizing: border-box;
  }

  .pull-right {
    margin-left: auto;
    color: darkred;
  }
</style>
