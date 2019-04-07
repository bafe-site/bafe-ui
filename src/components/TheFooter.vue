<template>
    <div class="footer">
      <div class="footer__info">
        <p>2019 © Bafe.site</p>
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
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
    .footer {
      align-items: center;
      background-color: #385446;
      color: white;
      display: flex;
      height: 60px;
      padding: 15px 20px;

      &__socials {
        display: flex;
        margin-left: auto;
      }

      &__icon {
        align-items: center;
        color: black;
        cursor: pointer;
        display: flex;
        font-size: 20px;
        justify-content: flex-end;
        padding: 8px;

        &--circle {
          align-items: center;
          background-color: #fff;
          border-radius: 30px;
          display: flex;
          height: 45px;
          justify-content: center;
          width: 45px;
        }

        &:hover > &--circle{
          -webkit-transition: 100ms;
          background-color: #7e9489;
          color: #fff;
        }
      }
    }
</style>
