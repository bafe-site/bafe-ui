<template>
  <div>
    <div class="kontainer">
      <h1>Terms and Condition</h1>
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
      <input id="acceptTOR" type="checkbox" v-model="checked">
      <label for="acceptTOR">Dengan ini saya telah menyetujui peraturan yang ada.</label>
      <input v-if="checked" onclick="window.open('https://forms.gle/naXsXmgUE7iTcH1V9','_blank');" class="uploadGFormButton" type="button" value="Upload">
      <input v-if="!checked" class="uploadGFormButton" type="button" value="Upload">
    </div>
  </div>
</template>

<script>
export default {
  name: 'termsAndCondition',
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style lang="css" scoped>
.kontainer {
  width: 80%;
  margin: 0 auto;
}

.uploadGFormButton {
  display: block;
  margin: 8px auto;
  width: 150px;
  height: 70px;
  float: center;
  padding: 15px 30px;
  border: 3px solid #385446;
  border-radius: 30px;
  background-color: #385446;
  color: #fafafa;
  font-size: 16px;
}
.uploadGFormButton:hover {
  background-color: #fafafa;
  color: #385446;
}

</style>
