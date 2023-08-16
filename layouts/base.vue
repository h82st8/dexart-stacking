<template>
  <div class="cabinet">
    <LayoutHeader class="header" />
    <Nuxt />
    <LayoutFooter />
  </div>
</template>
<script>
import LayoutFooter from '~/components/LayoutFooter.vue';
import LayoutHeader from '~/components/LayoutHeader.vue';

export default {
  name: 'BaseLayout',
  components: {
    LayoutHeader,
    LayoutFooter
  },
};
</script>

<style lang="stylus" scoped>
.cabinet {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 3;
  background: $colorBackground;
}
.header {
  z-index 11;
}
</style>
