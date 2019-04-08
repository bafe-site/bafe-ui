<template>
    <div>
        <div>
            <h1 class="headVision">Citizen Journalism Platform for Innovative Solution</h1>
        </div>
        <div class="howTo">
            <div class="howToW">
                <p>bergabunglah bersama kami untuk...</p>
                <h2>Share ur Innovation</h2>
            </div>
            <input onclick="location.href='/termsAndCondition';" class="uploadButton" type="button" value="SUBMIT">
        </div>
        <div class="misi">
            <h2 style="text-align: center;">Why Sharing?</h2>
            <img class="gambarTengah" align="left" src="../assets/S__17219904.jpg">
            <p class="tulisanMisi">Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
                underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant
                browsers and HTML parsers. Under the hood, Vue compiles the templates into Virtual DOM render functions.
                Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of
                components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
                </p>
        </div>
        <div>
            <h1>Konten Teratas</h1>
        </div>
        <div class="topKonten">
            <span>bafe.id</span>
            <img class="gambarTop" align="left" src="../assets/S__17219904.jpg">
            <p class="artikelTop">Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
                underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant
                browsers and HTML parsers. Under the hood, Vue compiles the templates into Virtual DOM render functions.
                Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of
                components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
                Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
                underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant
                browsers and HTML parsers. Under the hood, Vue compiles the templates into Virtual DOM render functions.</p>
        </div>
        <div>
            <h1>Konten Terbaru</h1>
        </div>
        <div class="artikelLatestKontainer">
            <div class="grid-item">
                <a class="artikel_te" href="/detailArtikel">
                <img class="gambarLatest" align="left" src="../assets/S__17219904.jpg"></a>
                <div>
                    <h3>bafe.id</h3>
                </div>
            </div>
            <div class="grid-item">
                <a class="artikel_te" href="/detailArtikel">
                <img class="gambarLatest" align="left" src="../assets/S__17219904.jpg">
                </a>
                <div>
                    <h3>bafe.id</h3>
                </div>
            </div>
            <div class="grid-item">
                <a class="artikel_te" href="/detailArtikel">
                <img class="gambarLatest" align="left" src="../assets/S__17219904.jpg">
                </a>
                <div>
                    <h3>bafe.id</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
    .headVision {
        text-align: center;
        color: #385446;
    }
    h1 {
        text-align: center;
    }
    h3 {
        color: #385446;
        text-align: center;
    }
    a {
        color: #385446;
        text-decoration: none;
    }
    .howTo {
        display: grid;
        grid-template-columns: auto;
        margin: 0 auto;
        height: 450px;
        color: #fafafa;
        background-color: #385446;
        background-image: url('../assets/orang_ramai.jpg');
        background-position: 50% 0px;
        background-repeat: no-repeat;
    }
    .howToW {
        margin: 10px auto;
        text-align: center;
    }
    .uploadButton {
        margin: 0 auto;
        width: 150px;
        height: 70px;
        float: center;
        padding: 15px 30px;
        border: 3px solid #fafafa;
        border-radius: 30px;
        background-color: #385446;
        color: #fafafa;
        font-size: 16px;
    }
    .misi {
        margin: 0 auto;
        width: 75%;
        height: 250px;
        padding: 20px 40px;
        text-align: justify;
        border: 0px;
        color: #000000;
    }
    .tulisanMisi {
        border: 1px;
        margin: 30px;
    }
    .gambarTengah {
        height: 200px;
        width: 200px;
        padding: 5px;
    }
    .topKonten {
        margin: 0 auto;
        width: 60%;
        max-height: 250px;
        padding: 20px 40px;
        text-align: justify;
        background-image: url("../assets/orang_jalan.jpg");
        }
    .artikelTop {
        color: #ffffff;
        padding: 5px;
    }
    .gambarTop {
        max-height: 200px;
        max-width: 300px;
        padding-right: 5px;
    }
    .artikelLatestKontainer {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #fafafa;
    }
    .grid-item {
        display: grid;
        grid-template-columns: auto;
        border: 20px solid #ffffff;
        padding: 20px;
        font-size: 18px;
        height: 300px;
    }
    .gambarLatest {
        max-height: 200px;
        max-width: 300px;
    }
</style>
