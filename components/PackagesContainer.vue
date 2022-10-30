<template>
  <div :class="['pointsContainer', {pointsContainerInIndex: isIndexPage}]">
    <img v-if="isIndexPage" class="pointsContainer__coinBottom" :src="require('assets/images/coin-bottom-icon.png')">
    <div class="buyDxaContainer">
      <div class="buyDxaContainer__titleBox">
        <h1 class="buyDxaContainer__title">
          Пакеты <br>
          <span class="buyDxaContainer__selectedText">DXA токенов</span>
        </h1>
        <div class="buyDxaContainer__rateBox">
          <h1 class="buyDxaContainer__rate">1 DXA = $0,001</h1>
          <div class="buyDxaContainer__rateInfo">Выберите пакеты и их количество</div>
        </div>
      </div>
      <div class="packagesBox">
        <div v-for="item in packages" :key="item.id" class="packagesBox__elem">
          <div class="packagesBox__dxaPrice">{{ dividingIntoDigits(item.dxaPrice) }} DXA</div>
          <div class="packagesBox__priceInDollar">${{ item.priceInDollar }}</div>
          <div class="packagesBox__countBox">
            <div :class="[{'packagesBox__plusMinus': item.count, inactiveMinus: !item.count}]" @click="reduceCountPackages(item.id, item.count)">
              <img class="packagesBox__minusDefault" :src="require('assets/images/minus-icon.png')">
              <img class="packagesBox__minusHover" :src="require('assets/images/minus-hover-icon.png')">
              <img class="packagesBox__minusPush" :src="require('assets/images/minus-push-icon.png')">
            </div>
            <div class="packagesBox__count">{{ item.count }}</div>
            <div class="packagesBox__plusMinus" @click="increaseCountPackages(item.id)">
              <img class="packagesBox__plusDefault" :src="require('assets/images/plus-icon.png')">
              <img class="packagesBox__plusHover" :src="require('assets/images/plus-hover-icon.png')">
              <img class="packagesBox__plusPush" :src="require('assets/images/plus-push-icon.png')">
            </div>
          </div>
        </div>
      </div>
      <CommonButton class="buyDxaContainer__button">Купить</CommonButton>

      <img class="buyDxaContainer__coinIcon1" :src="require('assets/images/coin-icon-1.png')">
      <img class="buyDxaContainer__coinIcon2" :src="require('assets/images/coin-icon-2.png')">
      <img class="buyDxaContainer__starsBg" :src="require('assets/images/stars-bg.png')">
      <img class="buyDxaContainer__gradientBg" :src="require('assets/images/packages-gradient-bg.png')">
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, computed, } from 'vue';
import CommonButton from './CommonButton.vue';

export default ({
  name: "PackagesContainer",
  components: { CommonButton },
  props: {
    isIndexPage: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    const formData = reactive({
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
      },
      {
        id: 3,
        dxaPrice: 100000,
        priceInDollar: 100,
        count: formData.packet3Count,
      },
      {
        id: 4,
        dxaPrice: 500000,
        priceInDollar: 500,
        count: formData.packet4Count,
      },
      {
        id: 5,
        dxaPrice: 1000000,
        priceInDollar: 1000,
        count: formData.packet5Count,
      },
    ]);

    const increaseCountPackages = (id: number) => {
      if (id === 1) formData.packet1Count++;
      if (id === 2) formData.packet2Count++;
      if (id === 3) formData.packet3Count++;
      if (id === 4) formData.packet4Count++;
      if (id === 5) formData.packet5Count++;
    }
    const reduceCountPackages = (id: number, count: number) => {
      if (id === 1 && count) formData.packet1Count--;
      if (id === 2 && count) formData.packet2Count--;
      if (id === 3 && count) formData.packet3Count--;
      if (id === 4 && count) formData.packet4Count--;
      if (id === 5 && count) formData.packet5Count--;
    }

    const dividingIntoDigits = (count: number | string) => String(count).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

    return {
      packages,
      dividingIntoDigits,
      formData,
      increaseCountPackages,
      reduceCountPackages,
    }
  },
})
</script>

<style lang="stylus" scoped>
.pointsContainerInIndex {
  height: 765px;
  z-index: 1000;
}
.pointsContainer {
  width: 100%;
  position: relative;
  overflow hidden;
  background: $colorBackgroundFade;
  &__coinBottom {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -225px;
  }
}

.buyDxaContainer {
  max-width: 1200px;
  margin: auto;
  margin-top: 142px;
  position: relative;
  &__titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
  }
  &__selectedText {
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__title {
    font-size: 48px;
    color: $colorBrand;
  }
  &__rateBox {
    text-align: right;
  }
  &__rate {
    font-size: 36px;
    color: $colorBrand;
  }
  &__rateInfo {
    font-size: 18px;
    font-weight: 300;
    color: $colorSecondTitle;
  }
  &__button {
    position: absolute;
    right: 0;
    top: calc(100% + 50px);
  }
  &__coinIcon1 {
    position: absolute;
    top: calc(100% + 75px);
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
    z-index: -1;
  }
  &__gradientBg {
    position: absolute;
    top: -142px;
    left: 0;
    z-index: -1;
  }
}
.packagesBox {
  display: flex;
  align-items: center;
  z-index: 2;
  &__elem {
    width: 224px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $colorBgPackage;
    box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    padding: 26px 24px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  &__dxaPrice {
    font-weight: 700;
    font-size: 22px;
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
    font-size: 40px;
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
    font-size: 22px;
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
}
.inactiveMinus {
  width: 22px;
  height: 22px;
  opacity: .2;
  cursor: default;
}
</style>
