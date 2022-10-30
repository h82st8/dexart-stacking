<template>
  <div class="indexPage">
    <IntroContainer />
    <PackagesContainer :is-index-page="true" />
    <TokensContainer />
    <RoadmapContainer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TokensContainer from '~/components/TokensContainer.vue';
import IntroContainer from '~/components/IntroContainer.vue';
import PackagesContainer from '~/components/PackagesContainer.vue';
import RoadmapContainer from '~/components/RoadmapContainer.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { IntroContainer, PackagesContainer, TokensContainer, RoadmapContainer },
    layout: 'base',
})
</script>

<style lang="stylus" scoped>
.indexPage {
  background: $colorBackground;
  overflow: hidden;
}
</style>
