<template>
  <div class="cabinet">
    <LayoutHeader />
    <Nuxt />
  </div>
</template>
<script>
import LayoutHeader from '~/components/LayoutHeader.vue';

export default {
  name: 'BaseLayout',
  components: {
    LayoutHeader
},
};
</script>

<style lang="stylus" scoped>
.cabinet {
  display: flex;
  flex-direction: column;
}
</style>
