<template>
    <div class="header">
        <nav>
            <div class="NavTopBox">
                <a href="/" >
                <img class="logo" src="../assets/img/iconBafe.png" alt="home"></a>
            </div>
            <a class="NavTop" href="/Konten">Content</a>
            <a class="NavTop" href="/About">About Us</a>
            <div class="bCari">
                <input type="text" class="search" placeholder="Cari Disini" aria-label="Cari Disini" aria-describedby="basic-addon2">
                <div>
                    <button class="searchButton" id="basic-addon2">cari</button>
                </div>
            </div>
            <div class="bLogin">
                <input onclick="location.href='/TermsAndCondition';" class="uploadButton" type="button" value="UPLOAD">
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
      text-decoration: none;
      font-size: 20px;
    }

    nav {
        text-align: center;
        display: flex;
    }
    .NavTopBox {
        margin: 0 50px;
    }
    .bCari{
        display: flex;
        width: 400px;
    }
    .NavTop {
        width: 300px;
        text-decoration: none;
        float: none;
        display: inline-block;
        border: 0 solid;
        margin: 40px 0;
        font-size: 20px;
        background-color: #ffffff;
        color: #385446;
    }

    .NavTop:hover {
        background-color: #385446;
        color: #ffffff;
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
    .uploadButton:hover {
      background-color: #fafafa;
      color: #385446;
      border-color: #385446;
    }
    .logo {
        width: 300px;
        height: 100px;
    }
</style>
