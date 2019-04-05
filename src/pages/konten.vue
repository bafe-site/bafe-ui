<template>
    <div>
        <div class="mengapaMenulis">
            <div class="gambarMengapaMenulis">
                <img height="200px" width="200px" src="../assets/S__17219904.jpg">
            </div>
            <div>
                <h2>Tingkatkan Literasi dan Kesadaran Masyarakat Lewat Citizen Journalism</h2>
                <p class="tulisanMenulis">bafe.id adalah startup yang bergerak di bidang media digital.Membawa visi "connecting insight", kami ingin mengajak seluruh masyarakat untuk berbagi wawasan dan berkolaborasi untuk menciptakan solusi yang inovatif atas masalah yang ditemui sehari - hari.</p>
            </div>
        </div>
        <div>
            <h1>Artikel</h1>
        </div>
        <div>
            <div class="artikelTrendingKontainer">
                <div class="grid-item">
                    <a class="artikel_te" href="/detailArtikel">
                    <img class="gambarTrending" align="left" src="../assets/S__17219904.jpg"></a>
                    <div>
                        <h3>bafe.id</h3>
                    </div>
                </div>
                <div class="grid-item">
                    <a class="artikel_te" href="/detailArtikel">
                    <img class="gambarTrending" align="left" src="../assets/S__17219904.jpg">
                    </a>
                    <div>
                        <h3>bafe.id</h3>
                    </div>
                </div>
                <div class="grid-item">
                    <a class="artikel_te" href="/detailArtikel">
                    <img class="gambarTrending" align="left" src="../assets/S__17219904.jpg">
                    </a>
                    <div>
                        <h3>bafe.id</h3>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>Video</h1>
        </div>
        <div>
            <div class="artikelTrendingKontainer">
                <div class="grid-item">
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/VuJYGJlKzPk"></iframe>
                    <h3>Edwin, sosok dibalik viralnya Nurhadi-Aldo</h3>
                </div>
                <div class="grid-item">
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/6KsTjjmocKY"></iframe>
                    <h3>Stigma - Kapak Rimba vs Supersonik, Rivalitas atau Tradisi?</h3>
                </div>
                <div class="grid-item">
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/fvWuRJd__OE"></iframe>
                    <h3>Battle of Gudeg Malam, Mana yang Paling Enak?</h3>
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
h1 {
    text-align: center;
}
h2 {
    text-align: center;
}
.mengapaMenulis {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 75%;
    margin-bottom: 150px;
}
.gambarMengapaMenulis {
    margin: 0 auto;
}
.tulisanMenulis {
    text-align: justify;
}
.artikelTrendingKontainer {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #fafafa;
    margin-bottom: 150px;
}
.grid-item {
    display: grid;
    grid-template-columns: auto;
    border: 20px solid #ffffff;
    padding: 20px;
    font-size: 18px;
    height: 300px;
}
.gambarTrending {
    max-height: 200px;
    max-width: 300px;
}
</style>
