<template>
  <vue-final-modal
    v-model="isOpenBuySuccessModal"
    classes="modal-tokens-payment-status"
    overlay-class="modal-tokens-overlay"
    content-class="modal-tokens-content"
    :click-to-close="true"
    :lock-scroll="false"
    @before-open="beforeOpen()"
  >
  <div class="modalSuccess">
    <div class="modalSuccess__title">{{ $t('Вы успешно приобрели Energy Units!') }}</div>
    <div class="modalSuccess__info">{{ $t('Данные уже отображены в вашем профиле на') }} <a href="https://map.dex.art/" target="_blank" class="modalSuccess__link">{{ $t('карте мира DEXART') }}</a></div>
    <svg-icon
      class="modalSuccess__close"
      name="close-icon"
      @click="isOpenBuySuccessModal = false"
    />
  </div>
  </vue-final-modal>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: "ModalPaymentSuccess",

  computed: {
    isOpenBuySuccessModal: {
      get() {
        return this.$route.query.payment === 'success' || this.$route.query.payment === 'done' || this.$route.query.state === 'done' || this.$route.query.state === 'success';
      },
      set(value) {
        const query = value ? { payment: 'success', state: 'done' } : {};
        this.$router.push({
          path: this.$route.path,
          query
        });
      }
    }
  },
  methods: {
    beforeOpen() {
      if (Cookies.get('langBeforePurchase')) {
        this.$i18n.setLocale(Cookies.get('langBeforePurchase'));
        Cookies.remove('langBeforePurchase');
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.modalSuccess {
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
