<template>
    <div class="footer">
        <div class="footerContainer">
            <div>
                <p>bafe.id adalah media publikasi masyarakat untuk berbagi wawasan dan inovasi tepat guna. Bergabung bersama kami dan jadilah agen perubahan.</p>
                <p>Copyright © All rights reserved.</p>
            </div>
            <div class="footer_a">
            <a href="https://www.instagram.com/bafe.id/" target="_blank">
                <img class="iconInstagram" src="../assets/icon_instagram.png"></a>
            </div>
            <div class="footer_b">
            <a href="https://www.youtube.com/channel/UCj_AlXuthn7krLgr3Wxw3kA" target="_blank">
                <img class="iconYoutube" src="../assets/icon_youtube.png"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
    .footer {
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 80px;
        background-color: #385446;
        color: white;
        margin-top: 1%;
    }
    .footerContainer{
        display: grid;
        grid-template-columns: auto 50px 60px;
    }
    p {
        text-align: center;
    }
    .footer_a {
        color: #fafafa;
        text-decoration: none;
        text-align: right;
        margin: auto;
    }

    .footer_b {
        color: #fafafa;
        text-decoration: none;
        text-align: right;
        margin: auto;
    }

    .iconYoutube {
        height: 50px;
        width: 50px;
    }

    .iconInstagram {
        height: 40px;
        width: 40px;
    }
</style>
