<template>
  <button :class="['primaryButton', {'disabledButton': isDisabled}]" @click="click">
    <span class="primaryButton__content">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonButtonPrimary',
  props: {
    isDisabled: {
      type: Boolean,
      required: false,
    },
  },
  emits: ['click'],
  methods: {
    click(e: any) {
      if (!this.isDisabled) {
        this.$emit('click', e);
      }
    },
  },
});
</script>

<style lang="stylus" scoped>
.primaryButton {
  padding: 15px 43px;
  background: $colorGradientForButton;
  box-shadow: inset -1px 2px 8px $colorForShadow;
  border-radius: 50px;
  &__content {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: $colorBrand;
  }
  &:hover {
    opacity: 1;
    background: $colorGradientForHoverButton;
  }
  +mediaDesktopM() {
    padding: 20px 73px;
    &__content {
      font-size: 20px;
    }
  }
}
.disabledButton {
  box-shadow: none;
  background: transparent;
  border: 1px solid #E9D4FF;
  color: #E9D4FF;
  opacity: .2;
  &:hover {
    cursor: default;
    opacity: .2;
    background: transparent;
  }
}
</style>