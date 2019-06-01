<template>
  <div>
    <div class="body__title">
      <div class="container">
        <h2>Tambahkan Pos Baru</h2>
      </div>
    </div>
    <div class="body__content">
      <div class="container">
        <div class="row article-form">
          <div class="article-form__container">
            <div class="form-group__container form-group__container--vertical">
              <label for="title">Judul Artikel</label>
              <input id="title"
                     v-model="judulContent"
                     class="input"
                     type="text"
                     placeholder="Tulis Judul Artikelmu Disini">
            </div>
            <div class="form-group__container form-group__container--vertical">
              <label for="summary">Ringkasan</label>
              <div>
                <textarea id="summary"
                          v-model="summaryContent"
                          class="input"
                          placeholder="Tulis Simpulan Artikelmu Disini"
                          :class="{ 'input--error': summaryContent.length > 255 }"></textarea>
                <span v-if="summaryContent.length > 255" class="footnote footnote--error">Tidak boleh lebih dari 255 karakter</span>
                <span v-else class="footnote pull-right">{{ summaryContent.length + ' / 255'}}</span>
              </div>
            </div>
            <div>
              <editor
                api-key="ivw8ls8qja0obk9f7f3dte4gi8ao3la5lop71c9ask9ek8u4"
                :init="{height: 320,
                        menubar: false,
                        resize: false,
                        plugins: 'advlist autolink lists link image charmap print preview anchor textcolor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'}"
                v-model="content"></editor>
              <!-- <vue-editor onfocus="this.value=''" v-model="content"></vue-editor> -->
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
                <option value selected>Pilih Kategori</option>
                <option v-for="n in kategori" :key="n.id" v-bind:value="n.id">{{ n.categoryName }}</option>
              </select>
            </div>
            <div class="form-group__container form-group__container--horizontal">
              <input type="checkbox" id="sponsor" class="input" value="true" v-model="isSponsored">
              <label for="sponsor">&nbsp; Sponsored Content </label>
            </div>
            <div class="form-group__container form-group__container--vertical">
              <label for="tags">Label</label>
              <textarea id="tags" class="input" v-model="tag" placeholder="Tambahkan label..."></textarea>
            </div>
            <div class="form-group__container form-group__container--vertical">
              <label for="author">Penulis</label>
              <input id="author" class="input" v-model="author" type="text" placeholder="Nama penulis...">
            </div>
            <div class="form-group__container form-group__container--vertical">
              <label>Media</label>
              <select v-model="picked" class="input">
                <option value="gambar">Gambar</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div class="form-group__container form-group__container--vertical">
              <input v-if="picked==='video'" type="text" class="input" v-model="video" placeholder="Masukan URL disini">
              <input v-else type="file" @change="processImage($event)">
            </div>
            <div class="setting-form__action">
              <div class="form-group__container form-group__container--horizontal">
                <button @click="saveContent" class="button button--main" type="submit" value="uploadArtikel">Kirim</button>
                <a class="pull-right red"><i class="fa fa-trash"></i><span> hapus </span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import Editor from '@tinymce/tinymce-vue'

import Api from '../api'
export default {
  name: 'ArticleForm',
  components: {
    VueEditor,
    'editor': Editor
  },
  data () {
    return {
      judulContent: '',
      content: '',
      kategori: [],
      kategoriD: '',
      thumbnail: '',
      video: '',
      author: '',
      tag: '',
      selectedFile: '',
      summaryContent: '',
      picked: 'gambar',
      isSponsored: false
    }
  },
  methods: {
    saveContent () {
      let self = this
      var kategoriID = parseInt(self.kategoriD)
      var strImage = self.selectedFile.replace(/^data:image\/[a-z]+;base64,/, '')
      let data = JSON.stringify({
        title: self.judulContent,
        content: self.content,
        category: kategoriID,
        video: self.video,
        author: self.author,
        tag: self.tag,
        draft: 0,
        thumbnail: strImage,
        summary: self.summaryContent,
        isSponsored: self.isSponsored
      })

      Api.article.upload(data)
        .then(res => {
          this.$router.push({ name: 'admin' })
        })
        .catch(err => {
          if (err.response.status === 422) {
            alert('Masukan belum lengkap')
          } else {
            alert(err)
          }
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
      Api.lookup.category.filter()
        .then(res => {
          self.kategori = res.data.data
        })
        .catch(err => {
          alert(err)
        })
    }
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
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
    box-sizing: border-box;
    margin: 10px 0px;
    width: 800px;

    background-color: #fff;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 15px 20px;
  }

  .setting-form {
    &__container {
      height: fit-content;
      background-color: #fff;
      border: 1px solid lightgrey;
      border-radius: 5px;
      margin: 10px 0px;
      padding: 15px 20px;
      width: 320px;
      box-sizing: border-box;
    }

    &__action {
      margin-top: 30px;
      & > button {
        margin-left: 15px;
      }
    }
  }

  .pull-right {
    margin-left: auto;
    text-align: right;
  }

  .red {
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
