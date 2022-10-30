<template>
  <div class="indexPage">
    <AddTokensContainer />
    <PackagesContainer :is-stacking-page="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AddTokensContainer from '~/components/AddTokensContainer.vue';
import PackagesContainer from '~/components/PackagesContainer.vue';

export default Vue.extend({
    name: "StackingPage",
    components: { PackagesContainer, AddTokensContainer },
    layout: 'base',
})
</script>

<style lang="stylus" scoped>
.indexPage {
  overflow: hidden;
}
</style>
