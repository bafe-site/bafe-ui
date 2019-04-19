<template>
    <div class="container">
      <div class="row article-form">
        <div class="article-form__container">
            <div class="form-group__container form-group__container--vertical">
              <label for="title"> Add A New Post </label>
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
            <button class="button--standar">save draft</button>
            <button class="button--standar">preview</button>
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label for="category">category</label>
            <select
              id="category"
              v-model="kategoriD"
            class="input">
              <option v-for="n in kategori" :key="n.id" v-bind:value="n.id">{{ n.categoryName }}</option>
            </select>
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label for="tags">tags</label>
            <textarea id="tags" class="input" v-model="tag"></textarea>
          </div>
          <div class="form-group_container form-groud__container--horizontal">
            <label for="author">author</label>
            <input id="author" class="input" v-model="author" type="text">
          </div>
          <div class="form-group__container form-groud__container--horizontal">
            <label>Upload Gambar</label>
            <input type="file" @change="processImage($event)">
          </div>
          <div class="form-group__container form-groud__container--horizontal">
            <label>Upload Video</label>
            <input type="file" @change="processVideo($event)">
          </div>
          <div class="form-group__container form-group__container--horizontal">
            <button @click="saveContent" class="button button--main" type="submit" value="uploadArtikel">Submit</button>
            <a class="pull-right"><i class="fa fa-trash"></i><span> delete </span></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import Axios from 'axios'
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
      tag: ''
    }
  },
  methods: {
    saveContent () {
      var kategoriID = parseInt(this.kategoriD)
      // var tagS = this.tag.join()
      let data = JSON.stringify({
        title: this.judulContent,
        content: this.content,
        category: kategoriID,
        thumbnail: this.thumbnail,
        video: this.video,
        author: this.author,
        tag: this.tag
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
