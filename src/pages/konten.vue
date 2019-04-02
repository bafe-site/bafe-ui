<template>
    <div>
        <div class="mengapaMenulis">
            <div class="gambarMengapaMenulis">
                <img height="200px" width="200px" src="../assets/S__17219904.jpg">
            </div>
            <div>
                <h2>Tingkatkan Literasi dan Kesadaran Masyarakat Lewat Citizen Journalism</h2>
                <p class="tulisanMenulis">bafe.id adalah startup yang bergerak di bidang media digital.
                    Membawa visi "connecting insight", kami ingin mengajak seluruh masyarakat untuk berbagi wawasan dan 
                    berkolaborasi untuk menciptakan solusi yang inovatif atas masalah yang ditemui sehari - hari.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'konten'
}
</script>

<style scoped>
.mengapaMenulis {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 75%;
    margin: 0 auto;
}
.gambarMengapaMenulis {
    margin: 0 auto;
}
h2 {
    text-align: center;
}
.tulisanMenulis {
    text-align: justify;
}
</style>
