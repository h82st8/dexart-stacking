<template>
  <div :class="['pointsContainer', { pointsContainerInIndex: isIndexPage }]">
    <div :class="{ wrap: isStackingPage }"></div>
    <img
      v-if="isIndexPage"
      class="pointsContainer__coinBottom"
      :src="require('assets/images/coin-bottom-icon.png')"
    />
    <img
      v-if="isStackingPage"
      class="pointsContainer__coinBottomStacking"
      :src="require('assets/images/coin-bottom-stacking-icon.png')"
    />
    <div class="buyDxaContainer">
      <div class="buyDxaContainer__titleBox">
        <h1 class="buyDxaContainer__title" v-html="$t(`packetsDxaTokens`)" />
        <div class="buyDxaContainer__rateBox">
          <h1 class="buyDxaContainer__rate">1 DXA = $0,001</h1>
          <div class="buyDxaContainer__rateInfo">
            {{ $t('Выберите тип ячеек и их количество') }}
          </div>
        </div>
      </div>
      <div class="packagesBox">
        <div v-for="item in packages" :key="item.id" class="packagesBox__elem">
          <div class="packagesBox__dxaPrice">
            {{ dividingIntoDigits(item.dxaPrice) }} DXA
          </div>
          <div class="packagesBox__bonuses">
            {{
              item.bonuses !== 0
                ? `${item.priceInDollar / 10} + ${dividingIntoDigits(
                    item.bonuses
                  )} UNITS`
                : '1 UNIT'
            }}
          </div>
          <div class="packagesBox__priceInDollar">
            ${{ item.priceInDollar }}
          </div>
          <div class="packagesBox__countBox">
            <div
              :class="[
                {
                  packagesBox__plusMinus: packets[item.id] || 0,
                  inactiveMinus: !(packets[item.id] || 0)
                }
              ]"
              @click="$emit('reduceCountPackages', item.id)"
            >
              <img
                class="packagesBox__minusDefault"
                :src="require('assets/images/minus-icon.png')"
              />
              <img
                class="packagesBox__minusHover"
                :src="require('assets/images/minus-hover-icon.png')"
              />
              <img
                class="packagesBox__minusPush"
                :src="require('assets/images/minus-push-icon.png')"
              />
            </div>
            <div class="packagesBox__count">{{ packets[item.id] || 0 }}</div>
            <div
              class="packagesBox__plusMinus"
              @click="$emit('increaseCountPackages', item.id)"
            >
              <img
                class="packagesBox__plusDefault"
                :src="require('assets/images/plus-icon.png')"
              />
              <img
                class="packagesBox__plusHover"
                :src="require('assets/images/plus-hover-icon.png')"
              />
              <img
                class="packagesBox__plusPush"
                :src="require('assets/images/plus-push-icon.png')"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="yourChoice">
        <div class="yourChoice__titleBox">
          <h4 class="yourChoice__title">{{ $t('Ваш выбор') }}:</h4>
          <div class="yourChoice__line"></div>
        </div>
        <div class="yourChoice__mainBlock">
          <div class="yourChoice__stackingInfo">
            <div class="">
              <span class="yourChoice__stackingInfoTitle"
                >{{ $t('Всего ячеек') }}:</span
              >
              <span
                :class="[
                  'yourChoice__stackingInfoNoneChoice',
                  { yourChoice__stackingInfoChoice: packet.totalTokens }
                ]"
                >{{ `${dividingIntoDigits(packet.totalTokens)} DXA` }}</span
              >
            </div>
            <div class="">
              <span class="yourChoice__stackingInfoTitle"
                >{{ $t('Финальная стоимость') }}:</span
              >
              <span
                :class="[
                  'yourChoice__stackingInfoNoneChoice',
                  { yourChoice__stackingInfoChoice: packet.priceInDollar }
                ]"
                >{{ `$${dividingIntoDigits(packet.priceInDollar)}` }}</span
              >
            </div>
            <div class="">
              <span
                class="yourChoice__stackingInfoTitle yourChoice__bonusesTitle"
                >{{ $t('Бонус') }}:</span
              >
              <span
                :class="[
                  'yourChoice__stackingInfoNoneChoice',
                  'yourChoice__bonuses',
                  { yourChoice__stackingInfoChoice: packet.bonuses }
                ]"
                >{{ `+${dividingIntoDigits(packet.bonuses)} UNITS` }}</span
              >
            </div>
          </div>
          <CommonButton
            class="buyDxaContainer__button"
            :is-disabled="isDisabledBuyButton"
            @click="$emit('openBuyTokensModal')"
            >{{ $t('Купить') }}</CommonButton
          >
        </div>
      </div>

      <img
        class="buyDxaContainer__coinIcon1"
        :src="require('assets/images/coin-icon-1.png')"
      />
      <img
        class="buyDxaContainer__coinIcon2"
        :src="require('assets/images/coin-icon-2.png')"
      />
      <img
        class="buyDxaContainer__starsBg"
        :src="require('assets/images/stars-bg.png')"
      />
      <img
        class="buyDxaContainer__gradientBg"
        :src="require('assets/images/packages-gradient-bg.png')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CommonButton from './CommonButton.vue'

export default {
  name: 'PackagesContainer',
  components: { CommonButton },
  props: {
    isIndexPage: {
      type: Boolean,
      required: false
    },
    isStackingPage: {
      type: Boolean,
      required: false
    },
    packages: {
      type: Array,
      required: true
    },
    packet: {
      type: Object,
      required: true
    },
    packets: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({ isPaymentBlocked: 'isPaymentBlocked' }),
    isDisabledBuyButton() {
      return !this.packet.priceInDollar || this.isPaymentBlocked
    }
  },

  methods: {
    dividingIntoDigits(count) {
      return String(count).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap {
  position: absolute;
  background: $colorBackground;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.pointsContainerInIndex {
  z-index: 1000;
}
.pointsContainer {
  width: 100%;
  position: relative;
  overflow hidden;
  background: $colorBackgroundFade;
  &__coinBottom {
    width: 200px;
    position: absolute;
    top: 0;
    left: calc(50% + 100px);
    margin-left: -225px;
  }
  &__coinBottomStacking {
    position: absolute;
    top: 0;
    left: 36px;
  }
  +mediaDesktopM() {
    &__coinBottom {
      position: absolute;
      width: auto;
      left: 50%;
    }
  }
  +mediaDesktop() {
    height: 765px;
  }
}

.buyDxaContainer {
  max-width: 1200px;
  margin: auto;
  margin-top: 142px;
  position: relative;
  &__titleBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    margin: auto;
    margin-bottom: 50px;
    z-index: 1;
  }
  &__selectedText {
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__title {
    font-size: 24px;
    color: $colorBrand;
    text-align: center;
  }
  &__rateBox {
    text-align: center;
  }
  &__rate {
    font-size: 18px;
    color: $colorBrand;
  }
  &__rateInfo {
    font-size: 12px;
    font-weight: 300;
    color: $colorSecondTitle;
  }
  &__button {
    z-index: 2;
  }
  &__coinIcon1 {
    position: absolute;
    top: calc(100% - 15px);
    right: calc(100% + 44px);
  }
  &__coinIcon2 {
    position: absolute;
    bottom: 40px;
    left: calc(100% + 14px)
  }
  &__starsBg {
    position: absolute;
    top: -14px;
    left: -122px;
  }
  &__gradientBg {
    position: absolute;
    top: -142px;
    left: 0;
    z-index: -1;
  }
  +mediaPhone() {
    &__titleBox {
      flex-direction: row;
      justify-content: space-between;
    }
    &__title {
      text-align: left;
    }
    &__rateBox {
      text-align: right;
    }
  }
  +mediaDesktopM() {
    &__title {
      font-size: 48px;
    }
    &__rate {
      font-size: 36px;
    }
    &__rateInfo {
      font-size: 18px;
    }
  }
  +mediaDesktop() {
    &__titleBox {
      width: 100%;
    }
  }
}
.packagesBox {
  display: grid;
  grid-template-columns: repeat(auto-fill, 199px);
  justify-content: center;
  gap: 20px;
  z-index: 2;
  &__elem {
    width: 199px;
    height: 196px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $colorBgPackage;
    box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    padding: 26px 10px;
    &:not(:last-child) {
      margin-right: 20px;
    }
    z-index: 1;
  }
  &__bonuses {
    margin-top: 2px;
    opacity: .8;
  }
  &__dxaPrice {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: $colorBrand;
  }
  &__priceInDollar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background: $colorPurple;
    border-radius: 16px;
    padding: 8px;
    color: $colorViolet;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    margin-top: 16px;
  }
  &__countBox {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  &__count {
    color: $colorFontBase;
    font-weight: 700;
    font-size: 18px;
    padding: 0 14px;
  }
  &__minusHover,
  &__plusHover,
  &__minusPush,
  &__plusPush {
    display: none;
  }
  &__plusMinus {
    width: 22px;
    height: 22px;
    cursor: pointer;
    user-select: none;

    &:hover .packagesBox__minusHover,
    &:hover .packagesBox__plusHover, {
      display: block;
    }
    &:hover .packagesBox__minusDefault,
    &:hover .packagesBox__plusDefault,
    &:active .packagesBox__minusDefault,
    &:active .packagesBox__plusDefault,
    &:active .packagesBox__minusHover,
    &:active .packagesBox__plusHover {
      display: none;
    }
    &:active .packagesBox__minusPush,
    &:active .packagesBox__plusPush, {
      display: block;
    }
  }
  +mediaDesktopM() {
    &__elem {
      width: 224px;
      height: 221px;
    }
    &__dxaPrice {
      font-size: 22px;
    }
    &__count {
      font-size: 22px;
    }
    &__priceInDollar {
      font-size: 40px;
    }
    &__rateInfo {
      font-size: 18px;
    }
  }
  +mediaDesktop() {
    display: flex;
    align-items: center;
    width: auto;
    gap: 0;
  }
}

.yourChoice {
  width: 80vw;
  margin: auto;
  margin-top: 50px;
  z-index: 2;
  &__titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
    z-index: 2;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin: 0;
    color: $colorBase;
    opacity: .4;
  }
  &__line {
    height: 1px;
    opacity: 0.2;
    background: $colorBase;
    width: 88%;
  }
  &__mainBlock {
    z-index: 2;
  }
  &__stackingInfo {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 5px 32px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 20px;
  }
  &__stackingInfoTitle {
    color: $colorBase;
    opacity: .4;
  }
  &__stackingInfoNoneChoice {
    color: $colorBase;
    opacity: .4;
  }
  &__stackingInfoChoice {
    opacity: 1;
  }
  &__bonusesTitle,
  &__bonuses {
    color: $colorPurple;
  }
  +mediaTablet() {
    &__mainBlock {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__stackingInfo {
      margin-bottom: 0;
    }
  }
  +mediaDesktop() {
    width: auto;
  }
  +mediaDesktopM() {
    &__title {
      font-size: 22px;
    }
    &__stackingInfo {
      font-size: 18px;
    }
  }
}
.inactiveMinus {
  width: 22px;
  height: 22px;
  opacity: .2;
  cursor: default;
}
</style>
