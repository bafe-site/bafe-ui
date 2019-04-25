<template>
    <div class="container">
      <div class="row article-form">
        <div class="article-form__container">
            <div class="form-group__container form-group__container--vertical">
              <h3> Tambahkan Pos Baru </h3>
              <input id="title"
                v-model="judulContent"
                class="input"
                type="text"
                placeholder="Tulis Judul Artikelmu Disini">
            </div>
            <div class="form-group__container form-group__container--vertical">
              <textarea id="summary"
                v-model="summaryContent"
                class="input"
                type="text"
                placeholder="Tulis Simpulan Artikelmu Disini"></textarea>
            </div>
            <div>
              <vue-editor onfocus="this.value=''" v-model="content"></vue-editor>
            </div>
        </div>
        <div class="setting-form__container">
          <!--<div class="setting-form__action">-->
            <!--<button class="button button&#45;&#45;primary">simpan draf</button>-->
            <!--<button class="button button&#45;&#45;default">lihat artikel</button>-->
          <!--</div>-->
          <div class="form-group__container form-group__container--vertical">
            <label for="category">Kategori</label>
            <select
              id="category"
              v-model="kategoriD"
              class="input">
              <option v-for="n in kategori" :key="n.id" v-bind:value="n.id">{{ n.categoryName }}</option>
            </select>
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label for="tags">Label</label>
            <textarea id="tags" class="input" v-model="tag"></textarea>
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label for="author">Penulis</label>
            <input id="author" class="input" v-model="author" type="text">
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label>Media</label>
            <select v-model="picked" class="input">
              <option value="gambar">Gambar</option>
              <option value="video">Video</option>
            </select>
              <input v-if="picked==='video'" type="text" class="input" v-model="video" placeholder="Masukan URL disini">
              <input v-else type="file" @change="processImage($event)">
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
      judulContent: '',
      content: '',
      kategori: [],
      kategoriD: '',
      thumbnail: 'empty',
      video: 'empty',
      author: '',
      tag: '',
      selectedFile: '',
      summaryContent: '',
      picked: 'gambar'
    }
  },
  methods: {
    saveContent () {
      let self = this
      // var dateNow = Date.now()
      var kategoriID = parseInt(self.kategoriD)
      var strImage = self.selectedFile.replace(/^data:image\/[a-z]+;base64,/, '')
      if (self.video !== null && self.video !== '') {
        self.video = 'emptyVideo'
      }

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
        thumbnail: strImage,
        summary: self.summaryContent
      })
      // console.log(data)
      Axios
        .post(Constant.article.post, data, {
          headers: Constant.header
        })
        .then(res => {
          console.log(data)
        })
        .catch(err => {
          if (err.response.status === 422) {
            console.log('lack of data')
            alert('Masukan belum lengkap')
          }
          // console.log(data)
          console.log(err)
        })
    },
    processImage (e) {
      let self = this
      const file = e.target.files[0]
      if (!file.type.includes('image/')) {
        alert('Please select an image file')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          self.selectedFile = event.target.result
        }
        reader.readAsDataURL(file)
      }
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
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .article-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .article-form__container {
    margin: 10px 0px;
    max-width: 800px;
  }

  .setting-form {
    &__container {
      border: 1px solid lightgrey;
      border-radius: 5px;
      margin: 10px 0px;
      padding: 15px 20px;
      width: 375px;
      box-sizing: border-box;
    }

    &__action {
      display: flex;
      justify-content: flex-end;
      & > button {
        margin-left: 15px;
      }
    }
  }

  .pull-right {
    margin-left: auto;
    color: darkred;
  }

  ::-webkit-input-placeholder {
    color: #0a0a0a;
    font-size: 13px;
  }

  ::-moz-placeholder {
    color: #0a0a0a;
    font-size: 13px;
  }

  :-ms-input-placeholder {
    color: #0a0a0a;
    font-size: 13px;
  }

  ::placeholder {
    color: #0a0a0a;
    font-size: 13px;
  }
</style>
