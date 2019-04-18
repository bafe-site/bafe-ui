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
              <option v-for="n in kategori" :key="n.id">{{ n.id }}</option>
            </select>
          </div>
          <div class="form-group__container form-group__container--vertical">
            <label for="tags">tags</label>
            <textarea id="tags" class="input"></textarea>
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
      kategoriD: ''
    }
  },
  methods: {
    saveContent () {
      Axios
        .post('http://localhost/bafe/public/api/article', {
          title: this.judulContent,
          content: this.content,
          categoryCodes: this.kategoriD
        }, {
          headers: {
            'Authorization': 'Bearer ' + this.$cookie.get('token')
          }
        })
        .then(res => {
          console.log(this.$cookie.get('token'))
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
