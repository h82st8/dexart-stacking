<template>
  <div class="indexPage">
    <div class="wrap"></div>
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
  position: relative;
  background: $colorBackground;
  overflow: hidden;
}
.wrap {
  width: 100%;
  height: 156px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 60.11%, rgba(0, 0, 0, 0) 100%);
}
</style>
