<template>
  <div>
    <div class="about_us">
      <h1>Masalah</h1>
      <h2>BERITA YANG BIAS, PENUH HOAKS, DAN MENYESATKAN</h2>
      <p>Media memiliki peran yang penting dalam ekosistem digital untuk membentuk persepsi masyarakat terhadap isu yang beredar; sebuah tanggung jawab untuk menyediakan informasi yang bermanfaat untuk perkembangan masyarakat.Namun kini banyak media yang menyebarkan rasa cemas dan takut tanpa menyediakan solusi.</p>
    </div>
    <div class="solusi">
      <h2>Solusi</h2>
      <ol>
        <li>Masyarakat membagikan cerita mengenai isu di sekitarnya. <b>BAFE menjadi tempat untuk orang-orang menyebarkan kesadaran terhadap suatu isu sekaligus meningkatkan empati dan toleransi.</b> Harapannya tercipta lingkungan sosial yang saling mendukung dan berfokus pada solusi.<br></li>
        <li>Ada pula pihak yang menawarkan solusi dalam bentuk inovasi dan kampanye. <b>BAFE menjadi tempat untuk orang-orang tersebut menawarkan pemecahan masalah, namun kurang mendapatkan perhatian.</b> Ekosistem yang saling mendukung dapat menciptakan sebuah tren dalam menciptakan solusi yang inovatif.</li>
      </ol>
    </div>
    <div class="kita">
      <h1>Meet Our Team</h1>
        <table>
          <tr>
            <td>
              <img src="../assets/Kirono_Arundati.png"/>
              <h2>Kirono Arundati</h2>
            </td>
            <td>
              <img src="../assets/Metha_Putri.png"/>
              <h2>Metha Putri</h2>
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/Ferdinand_Kurnia.png"/>
              <h2>Ferdinand Kurnia</h2>
            </td>
            <td>
              <img src="../assets/M_Vicky_Afris.png"/>
              <h2>M. Vicky Afris</h2>
            </td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs'
}
</script>

<style scoped>
  .about_us {
    border: 5px solid #385446;
    margin: 0 auto;
    width: 80%;
  }
  .solusi {
    margin: 0 auto;
    width: 80%;
  }
  table {
    width: 100%;
    height: 200px;
    max-height: 400px;
    padding: 0px 8px;
    border-spacing: 10px;
    }
</style>
