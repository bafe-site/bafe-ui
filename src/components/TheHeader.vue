<template>
    <div class="header">
        <nav>
            <a href="/" >
                <img class="logo" src="../assets/S__17219904.jpg" alt="home"></a>
            <a class="navTop" href="/">Home</a>
            <a class="navTop" href="/about">About Us</a>
            <a class="navTop" href="/konten">Content</a>
            <div class="bCari">
                <input type="text" class="search" placeholder="Cari Disini" aria-label="Cari Disini" aria-describedby="basic-addon2">
                <div>
                    <button class="searchButton" id="basic-addon2">cari</button>
                </div>
            </div>
            <div class="bLogin">
                <input onclick="location.href='/uploadArtikel';" class="uploadButton" type="button" value="UPLOAD">
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
    a {
      color: #385446;
      text-decoration: none;
      font-size: 20px;
    }

    nav {
        text-align: center;
        display: flex;
    }

    .bCari{
        display: flex;
        width: 400px;
    }

    .navTop {
      width: 300px;
      text-decoration: none;
      text-align: center;
      margin: 40px auto;
    }

    .search {
        margin: 30px 0 34px 15px;
        padding-left: 10px;
        padding-right: 65px;
        background: #fafafa;
        border: 2px solid #385446;
        border-radius: 30px 0 0 30px;
    }

    .searchButton {
        margin-top: 30px;
        padding: 10px 20px;
        border: 2px solid #385446;
        border-radius: 0 30px 30px 0;
        background-color: #385446;
        color: #fafafa;
    }

    .searchButton:hover {
        background-color: #fafafa;
        color: #385446;
    }

    .uploadButton {
        margin-top: 28px;
        position: relative;
        padding: 9px 20px;
        border: 5px solid #385446;
        border-radius: 20px;
        background-color: #385446;
        color: #fafafa;
    }
    .logo {
        width: 100px;
        height: 100px;
        border: 0;
    }
</style>
