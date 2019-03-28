<template>
    <div class="header">
        <nav>
            <a href="/">
                <img class="logo" src="../assets/S__17219904.jpg" alt="home"></a>
            <a class="atas" href="/">Home</a>
            <a class="atas" href="/konten">Content</a>
            <a class="atas" href="/about">About Us</a>
            <div class="b_cari">
                <input class="search" type="text" placeholder="Cari..." required>
                <input class="search_button" type="button" value="Cari">
            </div>
            <div class="b_login">
                <input class="upload_button" type="button" value="UPLOAD">
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
    nav {
        display: flex;
    }
    .atas {
        text-decoration: none;
        float: none;
        display: inline-block;
        border: 0px solid;
        padding: 40px 80px 0px 80px;
        font-size: 20px
    }

    .search {
        margin-left: 130px;
        margin-top: 30px;
        padding: 8px 45px 8px 8px;
        background: rgba(50, 50, 50, 0.2);
        border: 2px solid #385446;
        border-radius: 30px 0px 0px 30px;
    }

    .search_button {
        position: relative;
        padding: 8px 20px;
        left: -8px;
        border: 2px solid #385446;
        border-radius: 0px 30px 30px 0px;
        background-color: #385446;
        color: #fafafa;
    }

    .search_button:hover {
        background-color: #fafafa;
        color: #385446;
    }

    .upload_button {
        margin-left: 20px;
        margin-top: 20px;
        position: relative;
        padding: 20px 20px;
        border: 5px solid #385446;
        border-radius: 8px;
        background-color: #385446;
        color: #fafafa;
    }
    .logo {
        width: 100px;
        height: 100px;
        border: 0px;
        margin-right: 100px;
    }
</style>
