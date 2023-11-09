<template>
  <vue-final-modal
    v-model="cookiesModalIsOpen"
    classes="modal-cookies-container"
    overlay-class="modal-cookies-overlay"
    content-class="modal-cookies-content"
    :click-to-close="false"
  >
    <div class="wrapper">
      <div class="modal__text">
        <div class="contentItem">
          {{ $t('cookies-text') }}
        </div>
      </div>
    </div>

    <the-button
      :cookiesBtn="true"
      :text="$t('Accept Cookies')"
      @click="$emit('closeCookiesModal')"
      class="modalClose"
    />

    <svg-icon class="cookiesIcon" name="cookies-icon" />
  </vue-final-modal>
</template>

<script>
export default {
  name: 'ModalCookies',

  props: {
    cookiesModalIsOpen: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
.wrapper {
  padding-bottom: 20px;
  padding-left: (72 - 16)px;

  +mediaTablet() {
    padding-right: (174 - 16)px;
    padding-bottom: 0;
  }
}

.contentItem {
  max-width: 600px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
}

.modal {
  getFontFilterCheckbox();

  &__icon {
    display: block;
    width: 20px;
    height: 24px;
  }

  &__link {
    color: $colorLink;
    text-decoration-line: underline;
  }
}

.modalTitle {
  margin-bottom: 26px;
}

.modalClose {
  cursor: pointer;

  +mediaTablet() {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

.cookiesIcon {
  position: absolute;
  z-index: 10;
  left: 16px;
  top: 16px;
  display: block;
  width: 44px;
  height: 44px;
}
</style>
