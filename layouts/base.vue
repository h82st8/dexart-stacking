<template>
  <div class="cabinet">
    <LayoutHeader />
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
  display: flex;
  flex-direction: column;
}
</style>
