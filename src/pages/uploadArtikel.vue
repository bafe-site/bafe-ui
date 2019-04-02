<template>
    <div>
        <div class="ArtikelArea">
            <div class="judulArtikel">
                <textarea>judulArtikel</textarea>
            </div>
            <div class="isiArtikel">
                <editor></editor>
            </div>
        </div>
        <div>
            <button type="submit" value="uploadArtikel">Submit</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Editor from '@tinymce/tinymce-vue'

export default {
    data() {
    },
    components: {
        'editor': Editor
    }
}
</script>
<style scoped>
.isiArtikel{
    text-align: center;
    max-width: 75%;
    padding: 10px
}
</style>
