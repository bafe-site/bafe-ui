<template>
  <div class="footer__container">
    <div class="container">
      <div class="footer">
        <div class="footer__info">
          <div class="footer__menu">
            <a href="/">Beranda</a>
            <span>|</span>
            <a href="/">Tentang Kami</a>
            <span>|</span>
            <a href="/">Pedoman Media Siber</a>
            <span>|</span>
            <a href="/">Terms of Service</a>
          </div>
          <img src="../assets/img/logo-horizontal.png">
          <p>Copyright © All rights reserved.</p>
        </div>
        <div class="footer__socials">
          <a class="footer__icon" href="https://www.instagram.com/bafe.id/">
            <div class="footer__icon--circle">
              <i class="fab fa-instagram"></i>
            </div>
          </a>
          <a class="footer__icon" href="https://www.youtube.com/channel/UCj_AlXuthn7krLgr3Wxw3kA">
            <div class="footer__icon--circle">
              <i class="fab fa-youtube"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/scss/abstracts/variables";
    .footer {
      align-items: center;
      color: $black;
      display: flex;
      padding: 25px 0px;

      &__menu {
        margin-bottom: 35px;

        span {
          color: $grey-2;
        }

        a {
          text-decoration: none;
          color: $bafe;

          &:hover {
            border-bottom: 1px solid $bafe;
          }
        }
      }

      &__info {
        max-width: 600px;
        img {
          height: 60px;
        }
      }

      &__container {
        background-color: #fff;
        border-top: 1px solid $grey-2;
      }

      &__socials {
        display: flex;
        align-self: flex-start;
        margin-left: auto;
      }

      &__icon {
        align-items: center;
        color: $bafe;
        cursor: pointer;
        display: flex;
        font-size: 20px;
        justify-content: flex-end;
        padding: 8px;

        &--circle {
          align-items: center;
          background-color: transparent;
          border-radius: 30px;
          display: flex;
          height: 45px;
          justify-content: center;
          width: 45px;
        }

        &:hover > &--circle{
          -webkit-transition: 0.3s;
          background-color: $bafe;
          color: $white;
        }
      }
    }
</style>
