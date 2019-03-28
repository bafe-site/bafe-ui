<template>
    <div>
        <div class="grid-container">
            <div class="grid-item">
                <div class="artikel">
                    <div class="grid-container">
                        <img class="gArtikel" src="../assets/S__17219904.jpg"/>
                        <div style="width: 150px; font-size: 80%; text-align: center;">
                            <img class="gPenulis" src="../assets/S__17219904.jpg"/>
                            Muammar Khadafi
                        </div>
                    </div>
                    <h2>bafe.id</h2>
                    <p style="border: 10px solid #ffffff; margin: 0px 20px">Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
                        underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant
                        browsers and HTML parsers. Under the hood, Vue compiles the templates into Virtual DOM render functions.
                        Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of
                        components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
                        Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
                        underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant
                        browsers and HTML parsers. Under the hood, Vue compiles the templates into Virtual DOM render functions.
                        Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of
                        components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
                        Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the
                        underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant
                        browsers and HTML parsers. Under the hood, Vue compiles the templates into Virtual DOM render functions.
                        Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of
                        components to re-render and apply the minimal amount of DOM manipulations when the app state
                        changes.
                    </p>
                </div>
            </div>
            <div class="grid-item">
                <div>
                    <h2>Related</h2>
                </div>
                <div class="flex-container">
                    <div>
                        <img class="gKontenPojok" src="../assets/S__17219904.jpg"/>
                        <h2>bafe.id</h2>
                    </div>
                    <div>
                        <img class="gKontenPojok" src="../assets/S__17219904.jpg"/>
                        <h2>bafe.id</h2>
                    </div>
                </div>
                <div class="flex-container">
                    <div>
                        <img class="gKontenPojok" src="../assets/S__17219904.jpg"/>
                        <h2>bafe.id</h2>
                    </div>
                    <div>
                        <img class="gKontenPojok" src="../assets/S__17219904.jpg"/>
                        <h2>bafe.id</h2>
                    </div>
                </div>
                <div class="flex-container">
                    <div>
                        <img class="gKontenPojok" src="../assets/S__17219904.jpg"/>
                        <h2>bafe.id</h2>
                    </div>
                    <div>
                        <img class="gKontenPojok" src="../assets/S__17219904.jpg"/>
                        <h2>bafe.id</h2>
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
    .flex-container {
        display: flex;
        flex-wrap: nowrap;
    }

    .flex-container > div {;
        width: auto;
        margin: 10px;
        text-align: center;
        line-height: 20px;
        font-size: 30px;
    }
    .grid-container {
        display: grid;
        width: 100%;
        grid-template-columns: 75% 25%;
        padding: 10px;
    }
    .grid-item {
        width: 100%;
        font-size: 30px;
        text-align: center;
    }
    .gKontenPojok{
        width: 150px;
        height: 150px;
    }
    .artikel{
        font-size: 18px;
        text-align: justify;
    }
    .gArtikel{
        width: 300px;
        height: 300px;
    }
    .gPenulis{
        width: 150px;
        height: 150px;
        padding-bottom: 0.5em;
    }
</style>
