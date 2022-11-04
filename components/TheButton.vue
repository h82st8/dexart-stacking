<template>
  <button
    @click="action"
    :class="[
      'button',
      {
        button_buyBtn: buyBtn,
        button_signInBtn: signInBtn,
        button_cookiesBtn: cookiesBtn,
        button_signinTextBtn: signInBtn && text,
      },
    ]"
    type="button"
    :disabled="disabled"
  >
    <template v-if="text">{{ text }}</template>
    <template v-else>
      <svg-icon
        v-if="iconBtn === 'oton'"
        :class="['button__icon', `button__icon_${iconBtn}`]"
        :name="`${iconBtn}-icon`"
      />
      <img
        :class="['button__icon', `button__icon_${iconBtn}`]"
        v-else
        :src="require(`@/assets/images/${iconBtn}-logo.png`)"
        alt="wallet-logo"
      />
    </template>
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  components: {},
  props: {
    text: String,
    iconBtn: String,
    buyBtn: Boolean,
    cookiesBtn: Boolean,
    signInBtn: Boolean,
    disabled: Boolean
  },
  methods: {
    action() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="stylus" scoped>
.button {
  &:disabled {
    opacity: 0.2;
    cursor: default;
  }

  &_buyBtn {
    padding: 14px 24px;
    background: #5726C9;
    border-radius: 8px;
    getFontBuyBtn();
    color: $colorBase;
    font-weight: 700;
  }

  &_cookiesBtn {
    padding: 10px 12px;
    background: $colorViolet;
    border-radius: 8px;
    getFontFilterCheckbox();
    color: $colorBase;
    font-weight: 700;
  }

  &_signInBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 74px;
    height: 44px;
    background: $colorBase;
    border-radius: 8px;

    +mediaTablet() {
      width: 84px;
    }
  }

  &_signinTextBtn {
    getFontHeaderBtn();
    font-weight: 700;
  }

  &__icon {
    display: block;

    &_oton {
      width: 56px;
      height: 26px;

      +mediaTablet() {
        width: 68px;
        height: 32px;
      }
    }

    &_near {
      width: 28px;
      height: 28px;
    }

    &_metamask {
      width: 28px;
      height: 28px;
    }
  }
}
</style>
