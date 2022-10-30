<template>
  <button class="primaryButton" @click="click">
    <span class="primaryButton__content">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonButtonPrimary',
  emits: ['click'],
  methods: {
    click(e: any) {
      this.$emit('click', e);
    },
  },
});
</script>

<style lang="stylus" scoped>
.primaryButton {
  padding: 20px 73px;
  background: $colorGradientForButton;
  box-shadow: inset -1px 2px 8px $colorForShadow;
  border-radius: 50px;
  &__content {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: $colorBrand;
  }
  &:hover {
    opacity: 1;
    background: $colorGradientForHoverButton;
  }
}
</style>