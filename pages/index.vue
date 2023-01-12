<template>
  <div class="indexPage">
    <div class="wrap"></div>
    <IntroContainer />
    <PackagesContainer
      id="indexPackagesBuy"
      :is-index-page="true"
      :packets="packets"
      :packages="packages"
      :packet="packet"
      @openBuyTokensModal="openBuyTokensModal"
      @reduceCountPackages="reduceCountPackages"
      @increaseCountPackages="increaseCountPackages"
    />
    <TokensContainer />
    <RoadmapContainer />
    <ModalBuyTokens
      v-model="buyTokensModalIsOpen"
      :packet="packet"
      :filtered-packages="filteredPackages"
      :buy-tokens-modal-is-open="buyTokensModalIsOpen"
    />
    <ModalCookies
      :cookiesModalIsOpen="cookiesModalIsOpen"
      @closeCookiesModal="closeCookiesModal"
    />
    <ModalPaymentSuccess />
    <ModalPaymentFail />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { omit } from 'rambda'
import TokensContainer from '~/components/TokensContainer.vue'
import IntroContainer from '~/components/IntroContainer.vue'
import PackagesContainer from '~/components/PackagesContainer.vue'
import RoadmapContainer from '~/components/RoadmapContainer.vue'
import ModalBuyTokens from '~/components/ModalBuyTokens.vue'
import ModalCookies from '~/components/ModalCookies.vue'
import ModalPaymentSuccess from '~/components/ModalPaymentSuccess.vue'
import ModalPaymentFail from '~/components/ModalPaymentFail.vue'

export default {
  name: 'IndexPage',
  components: {
    IntroContainer,
    PackagesContainer,
    TokensContainer,
    RoadmapContainer,
    ModalBuyTokens,
    ModalCookies,
    ModalPaymentSuccess,
    ModalPaymentFail
},
  layout: 'base',

  data() {
    return {
      buyTokensModalIsOpen: false,
      packets: {},
      cookiesModalIsOpen: false,
    }
  },

  computed: {
    ...mapGetters({ packages: 'packetsOfDxaTokensData' }),

    packetsOfDxaTokensState() {
      return this.$store.state.packetsOfDxaTokensState
    },

    packet() {
      const { packages } = this

      return {
        priceInDollar: packages.reduce(
          (sum, item) =>
            sum + item.priceInDollar * this.getCountPackage(item.id),
          0
        ),
        totalTokens: packages.reduce(
          (sum, item) => sum + item.dxaPrice * this.getCountPackage(item.id),
          0
        ),
        bonuses: packages.reduce(
          (sum, item) =>
            sum + (item.bonuses || 0) * this.getCountPackage(item.id),
          0
        )
      }
    },
    filteredPackages() {
      const includesPackages = Object.keys(this.packets).filter(
        (item) => +item > 0
      )

      return this.packages
        .filter((item) => includesPackages.includes(String(item.id)))
        .map((item) => ({
          ...item,
          count: this.packets[item.id]
        }))
    }
  },

  mounted() {
    this.$store.dispatch('fetchPacketsList')
    this.$store.dispatch('fetchCountry')
    this.$store.dispatch('getRates')
    if (!localStorage.getItem('cookiesPolicies')) {
      this.cookiesModalIsOpen = true;
    };
  },

  methods: {
    closeCookiesModal() {
      localStorage.setItem('cookiesPolicies', 'true');
      this.cookiesModalIsOpen = false;
    },
    getCountPackage(id) {
      return this.packets?.[id] || 0
    },
    reduceCountPackages(id) {
      const currentValue = this.getCountPackage(id)

      if (currentValue > 1) {
        this.packets = {
          ...this.packets,
          [id]: currentValue - 1
        }
      } else {
        this.packets = omit([String(id)], this.packets)
      }
    },

    increaseCountPackages(id) {
      const currentValue = this.getCountPackage(id)

      this.packets = {
        ...this.packets,
        [id]: currentValue + 1
      }
    },

    openBuyTokensModal() {
      this.buyTokensModalIsOpen = true
    }
  },
}
</script>

<style lang="stylus" scoped>
.indexPage {
  position: relative;
  background: $colorBackground;
  overflow: hidden;
  scroll-behavior: smooth;
}
.wrap {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 60.11%, rgba(0, 0, 0, 0) 100%);
  +mediaTablet() {
    height: 156px;
  }
}

::v-deep .vfm__container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
::v-deep .modal-tokens-container {
  align-items: start;
  padding-top: 34px
}
::v-deep .modal-tokens-payment-status {
  align-items: center;
}

::v-deep .modal-tokens-content {
  position: relative;
  display: inline-block;
  overflow: auto;
}
::v-deep .modal-tokens-overlay {
  backdrop-filter: blur(4px);
}
::v-deep .modal-cookies-content {
  position: relative;
  top: calc(50% - 100px);
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  padding: 12px 16px 24px;
  min-height: 100px;
  border-radius: 16px;
  background: $colorBase;
}
::v-deep .modal-cookies-overlay {
  // background-color: transparent !important;
  background-color: rgba(#A768D4, 0.4) !important;
}
</style>
