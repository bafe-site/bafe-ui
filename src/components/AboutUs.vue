<template>
  <div>
    <div class="aboutUs">
      <h1>BERITA YANG BIAS, PENUH HOAKS, DAN MENYESATKAN</h1>
      <p>Media memiliki peran yang penting dalam ekosistem digital untuk membentuk persepsi masyarakat terhadap isu yang beredar; sebuah tanggung jawab untuk menyediakan informasi yang bermanfaat untuk perkembangan masyarakat. Namun kini banyak media yang menyebarkan rasa cemas dan takut tanpa menyediakan solusi.</p>
    </div>
    <div class="kita">
      <h1>Meet Us</h1>
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
    .aboutUs {
        border: 5px solid #385446;
    }
    table {
        width: 100%;
        height: 200px;
        max-height: 400px;
        padding: 0px 8px;
        border-spacing: 10px;
    }
</style>
