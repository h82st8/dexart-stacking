<template>
  <div class="indexPage">
    <div class="wrap"></div>
    <IntroContainer />
    <PackagesContainer
      :is-index-page="true"
      :packages="packages"
      :packet="packet"
      @openBuyTokensModal="openBuyTokensModal"
      @reduceCountPackages="reduceCountPackages"
      @increaseCountPackages="increaseCountPackages"
    />
    <TokensContainer />
    <RoadmapContainer />
    <ModalBuyTokens v-model="formData.buyTokensModalIsOpen" :packet="packet" :filtered-packages="filteredPackages" :buy-tokens-modal-is-open="formData.buyTokensModalIsOpen" />
  </div>
</template>

<script lang="ts">
import Vue, { reactive, computed } from 'vue'
import TokensContainer from '~/components/TokensContainer.vue';
import IntroContainer from '~/components/IntroContainer.vue';
import PackagesContainer from '~/components/PackagesContainer.vue';
import RoadmapContainer from '~/components/RoadmapContainer.vue';
import ModalBuyTokens from '~/components/ModalBuyTokens.vue';

export default Vue.extend({
  name: "IndexPage",
  components: { IntroContainer, PackagesContainer, TokensContainer, RoadmapContainer, ModalBuyTokens },
  layout: 'base',
  setup() {
    const formData = reactive({
      buyTokensModalIsOpen: false,
      packet1Count: 0,
      packet2Count: 0,
      packet3Count: 0,
      packet4Count: 0,
      packet5Count: 0,
    });

    const packages = computed(() => [
      {
        id: 1,
        dxaPrice: 5000,
        priceInDollar: 5,
        count: formData.packet1Count,
      },
      {
        id: 2,
        dxaPrice: 50000,
        priceInDollar: 50,
        count: formData.packet2Count,
        bonuses: 1000,
        percent: 2,
      },
      {
        id: 3,
        dxaPrice: 100000,
        priceInDollar: 100,
        count: formData.packet3Count,
        bonuses: 2500,
        percent: 2.5,
      },
      {
        id: 4,
        dxaPrice: 500000,
        priceInDollar: 500,
        count: formData.packet4Count,
        bonuses: 15000,
        percent: 3,
      },
      {
        id: 5,
        dxaPrice: 1000000,
        priceInDollar: 1000,
        count: formData.packet5Count,
        bonuses: 35000,
        percent: 3.5,
      },
    ]);

    const packet = computed(() => {
      return {
        priceInDollar: packages.value.reduce((sum, item) => sum + (item.priceInDollar * item.count), 0),
        totalTokens: packages.value.reduce((sum, item) => sum + (item.dxaPrice * item.count), 0),
        bonuses: packages.value.reduce((sum, item) => sum + ((item.bonuses || 0) * item.count), 0),
      }
    });

    const filteredPackages = computed(() => packages.value.filter((item: any) => item.count > 0));

    const reduceCountPackages = (id: number, count: number) => {
      if (id === 1 && count) formData.packet1Count--;
      if (id === 2 && count) formData.packet2Count--;
      if (id === 3 && count) formData.packet3Count--;
      if (id === 4 && count) formData.packet4Count--;
      if (id === 5 && count) formData.packet5Count--;
    }
    const increaseCountPackages = (id: number) => {
      if (id === 1) formData.packet1Count++;
      if (id === 2) formData.packet2Count++;
      if (id === 3) formData.packet3Count++;
      if (id === 4) formData.packet4Count++;
      if (id === 5) formData.packet5Count++;
    }

    const openBuyTokensModal = () => {
      formData.buyTokensModalIsOpen = true;
    }

    return {
      openBuyTokensModal,
      reduceCountPackages,
      increaseCountPackages,
      formData,
      packages,
      filteredPackages,
      packet,
    };
  },
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

::v-deep .vfm__container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}

::v-deep .modal-tokens-content {
  position: relative;
  display: inline-block;
  overflow: auto;
}
::v-deep .modal-tokens-overlay {
  backdrop-filter: blur(4px);
}
</style>
