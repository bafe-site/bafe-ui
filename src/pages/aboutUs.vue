<template>
  <div id="about-us" class="container">
    <div id="problem" class="row">
      <div class="frame">
        <div class="frame__container">
        <h2>Masalah</h2>
        <h2 class="giant">BERITA YANG BIAS, PENUH HOAKS, DAN MENYESATKAN</h2>
        <p class="highlight">Media memiliki peran yang penting dalam ekosistem digital untuk membentuk persepsi masyarakat terhadap isu yang beredar; sebuah tanggung jawab untuk menyediakan informasi yang bermanfaat untuk perkembangan masyarakat.Namun kini banyak media yang menyebarkan rasa cemas dan takut tanpa menyediakan solusi.</p>
        </div>
      </div>
    </div>
    <div id="solution" class="row">
        <div>
          <h2>Solusi</h2>
          <ol class="highlight">
            <li>Masyarakat membagikan cerita mengenai isu di sekitarnya. <b>BAFE menjadi tempat untuk orang-orang menyebarkan kesadaran terhadap suatu isu sekaligus meningkatkan empati dan toleransi.</b> Harapannya tercipta lingkungan sosial yang saling mendukung dan berfokus pada solusi.<br></li>
            <li>Ada pula pihak yang menawarkan solusi dalam bentuk inovasi dan kampanye. <b>BAFE menjadi tempat untuk orang-orang tersebut menawarkan pemecahan masalah, namun kurang mendapatkan perhatian.</b> Ekosistem yang saling mendukung dapat menciptakan sebuah tren dalam menciptakan solusi yang inovatif.</li>
          </ol>
        </div>
    </div>
    <div id="team" class="row">
      <div>
        <h2 class="center">Meet Our Team</h2>
        <div class="grid-container">
          <div class="grid-item">
            <img src="../assets/img/Kirono_Arundati.png"/>
            <h2>Kirono Arundati</h2>
          </div>
          <div class="grid-item">
            <img src="../assets/img/Metha_Putri.png"/>
            <h2>Metha Putri</h2>
          </div>
          <div class="grid-item">
            <img src="../assets/img/Ferdinand_Kurnia.png"/>
            <h2>Ferdinand Kurnia</h2>
          </div>
          <div class="grid-item">
            <img src="../assets/img/M_Vicky_Afris.png"/>
            <h2>M. Vicky Afris</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs'
}
</script>

<style scoped lang="scss">
  @import "../assets/style/scss/abstracts/variables";
  #about-us {
    color: $bafe;
  }

  .giant {
    font-size: 48px;
  }
  .center {
    text-align: center;
    margin: 80px 0px;
  }

  .frame {
    border: 5px solid $bafe;
    padding: 10px 15px;
  }
  .grid-item {
    img {
      width: 530px;
    }
  }
  .team {
    text-align: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
