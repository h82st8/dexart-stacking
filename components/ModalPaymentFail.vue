<template>
  <vue-final-modal
    v-model="isOpenBuyFailModal"
    classes="modal-tokens-container"
    overlay-class="modal-tokens-overlay"
    content-class="modal-tokens-content"
    :click-to-close="true"
    :lock-scroll="false"
  >
  <div class="modalFail">
    <div class="modalFail__title">{{ $t('A payment error occurred') }}</div>
    <div class="modalFail__info">{{ $t("Try again after a few minutes. If it doesn't work, please contact") }} <a href="mailto:support@dex.art" target="_blank" class="modalFail__link">support@dex.art</a></div>
    <svg-icon
      class="modalFail__close"
      name="close-icon"
      @click="isOpenBuyFailModal = false"
    />
  </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: "ModalPaymentFail",

  computed: {
    isOpenBuyFailModal: {
      get() {
        return this.$route.query.payment === 'fail';
      },
      set(value) {
        const query = value ? { payment: 'fail', state: 'fail' } : {};
        this.$router.push({
          path: this.$route.path,
          query
        });
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.modalFail {
  max-width: 500px;
  padding: 30px;
  background: #57198A;
  display: flex;
  flex-direction: column;
  box-shadow: inset -1px 2px 8px #ECE7FA;
  border-radius: 30px;
  &__title {
    width: 90%;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: $colorBrand;
    margin-bottom: 20px;
    +mediaDesktopM() {
      font-size: 22px;
    }
  }
  &__info {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: $colorSecondTitle;
    opacity: .8;
  }
  &__link {
    text-decoration: underline;
    &:hover {
      opacity: .6;
      color: $colorFontBase;
    }
  }
  &__close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
}
</style>
