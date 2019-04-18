<template>
    <div class="container">
      <div class="row">
        <div class="item item__summary--horizontal">
          <img class="summary__thumbnail"
               align="left" src="../assets/S__17219904.jpg">
          <div class="summary__content">
            <div class="set__title content__title">
              <h2>Tingkatkan Literasi dan Kesadaran Masyarakat Lewat Citizen Journalism</h2>
            </div>
            <div class="content__description">
              <p>bafe.id adalah startup yang bergerak di bidang media digital.
                Membawa visi "connecting insight", kami ingin mengajak seluruh masyarakat untuk berbagi wawasan dan berkolaborasi untuk menciptakan solusi yang inovatif atas masalah yang ditemui sehari - hari.</p>
              <button class="button button--main"> Selengkapnya </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h2>Artikel</h2>
        <div class="list__container list__container--horizontal">
          <div class="list__item--horizontal" v-for="n in 3" :key="n">
            <div class="item item__summary--vertical">
              <img class="summary__thumbnail summary__thumbnail--fix" align="left" src="../assets/gambar_isi.png"></a>
              <div class="summary__content">
                <div class="content__title">
                  <h3>Article Title yang super panjang sekali cuma buat coba apa yg akan terjadi kalau sepanjang ini titlenya</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h2>Video</h2>
        <div class="list__container list__container--horizontal">
          <div class="list__item list__item--horizontal" v-for="n in 3" :key="n">
            <div class="item item__summary--vertical">
              <div class="summary__thumbnail">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/VuJYGJlKzPk"></iframe>
              </div>
              <div class="summary__content">
                <div class="content__title">
                  <h3>Edwin, sosok dibalik viralnya Nurhadi-Aldo</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'konten'
}
</script>

<style scoped>

h2, p {
  text-align: center;
  margin-bottom: 45px;
}

/*Override CSS*/

.list__container {
  background-color: #fafafa;
}

.content__description {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.summary__thumbnail--fix{
    height: 200px;
    width: 300px;
}
</style>
