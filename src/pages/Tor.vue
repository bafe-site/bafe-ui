<template>
  <div id="tor">

      <div class="body__title">
        <div class="container">
          <h2>Terms and Condition</h2>
        </div>
      </div>
      <div class="body__content">
        <div class="container">
          <ol>
            <li>
              Syarat unggah artikel
              <ul>
                <li>Artikel diunggah dengan menggunakan kaidah Bahasa Indonesia yang baik dan benar.</li>
                <li>Artikel diunggah dalam format .docx.</li>
                <li>Artikel diunggah dengan minimal 750 kata.</li>
                <li>Foto yang diunggah di dalam artikel maksimal ukuran file 3MB.</li>
                <li>Foto yang diunggah memiliki berbandingan 4:3.</li>
                <li>Artikel yang diunggah tidak memuat unsur SARA.</li>
                <li>Artikel yang diunggah tidak memuat unsur Politik Praktis.</li>
              </ul>
            </li>
            <li>
              Syarat unggah video
              <ul>
                <li>Video diunggah dalam format .mp4 dengan minimal resolusi 480p.</li>
                <li>Video diunggah dengan durasi maksimal 5 menit.</li>
                <li>Video harus memiliki subtitle.</li>
                <li>Video yang diunggah tidak memuat unsur SARA.</li>
                <li> Video yang diunggah tidak memuat unsur Politik Praktis.</li>
              </ul>
            </li>
            <li>Segala bentuk artikel atau video yang dipublikasikan di situs bafe.site tidak diperkenankan untuk dipergunakan kembali di situs selain bafe.site untuk tujuan komersil.</li>
            <li>Segala isi dari konten yang dipublikasikan oleh kontributor menjadi tanggung jawab dari kontributor tersebut.</li>
            <li>Jika memakai foto ilustrasi diharapkan mencantumkan sumber.</li>
            <li>Harap membaca dengan baik <em>disclaimer</em> dan Pedoman Media Siber yang ada pada bafe.site.</li>
            <li>Jika ada sumber/tautan <em>online</em> maupun bentuk literatur lain, kontributor wajib menyertakan daftar pustaka di bagian bawah artikel.</li>
          </ol>
        </div>
      </div>
    <div class="body__action">
      <div class="container">
        <input id="agreement" type="checkbox" v-model="checked"><label for="agreement"></label>
        <span>Dengan ini saya telah menyetujui peraturan yang ada.</span>
        <button @click="upload()" class="button button--hollow button--round" :disabled="!checked">Upload</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tor',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    upload () {
      window.open('https://forms.gle/naXsXmgUE7iTcH1V9', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/scss/abstracts/variables";

  * {
    line-height: 2.5;
  }

  ol {
    margin-left: 15px;
  }

  .body__title {
    h2 {
      margin: 15px;
    }
  }

  .body__content {
    padding: 25px 0px;
    background-color: #f5f5f5;
  }

  .body__action {
    padding: 35px 0px;
    button {
      margin-top: 15px;
      width: 100%;
      border-radius: 30px;
      font-size: 16px;
    }
  }

</style>
