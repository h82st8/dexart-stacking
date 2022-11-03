<template>
  <div class="tokensContainer">
    <div class="aboutStaking">
      <div class="aboutStaking__imgBox">
        <img
          class="aboutStaking__img"
          :src="require('assets/images/coins-img.png')"
        />
        <div class="aboutStaking__gradientBg" />
      </div>
      <div class="aboutStaking__infoBox">
        <h3 class="aboutStaking__title">{{ $t('Стейкинг') }}</h3>
        <div class="aboutStaking__info">{{ $t('stacking-info-1') }}</div>
        <div class="aboutStaking__info">{{ $t('stacking-info-2') }}</div>
        <div class="aboutStaking__info">{{ $t('stacking-info-3') }}</div>
        <CommonButton class="aboutStaking__button">{{
          $t('Стейкинг')
        }}</CommonButton>
      </div>
      <img
        class="aboutStaking__stars"
        :src="require('assets/images/stars-staking-bg.png')"
      />
    </div>
    <div class="aboutToken">
      <h3 class="aboutToken__title">{{ $t('О токене') }}</h3>
      <div class="aboutToken__text">
        {{
          $t(
            'DXA — это внутренний платёжный токен, который используется для совершения сделок в метавселенной DEXART.'
          )
        }}
      </div>
      <div class="aboutToken__infoBox">
        <div v-for="item in [1, 2, 3, 4]" :key="item" class="aboutToken__info">
          <img
            :class="`aboutToken__info${item}`"
            :src="require(`assets/images/about-token-${item}.png`)"
          />
        </div>
        <img
          :class="`aboutToken__coinIcon`"
          :src="require(`assets/images/coin-icon.png`)"
        />
      </div>
      <img
        class="aboutToken__stars"
        :src="require('assets/images/stars-tokens-bg.png')"
      />
      <div class="aboutToken__linkBox" v-html="$t('dxa-tokens-about')"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TokensContainer',
  setup() {
    const aboutTokenInfo = [
      {
        id: 1,
        title: 'about-token-info-title-1',
        text: [
          'about-token-info-1-content-1',
          'about-token-info-1-content-2',
          'about-token-info-1-content-3',
          'about-token-info-1-content-4'
        ]
      },

      {
        id: 2,
        title: 'about-token-info-title-2',
        text: [
          'about-token-info-2-content-1',
          'about-token-info-2-content-2',
          'about-token-info-2-content-3',
          'about-token-info-2-content-4',
          'about-token-info-2-content-5',
          'about-token-info-2-content-6'
        ]
      },
      {
        id: 3,
        title: 'about-token-info-title-3',
        text: [
          'about-token-info-3-content-1',
          'about-token-info-3-content-2',
          'about-token-info-3-content-3',
          'about-token-info-3-content-4',
          'about-token-info-3-content-5'
        ]
      },
      {
        id: 4,
        title: 'about-token-info-title-4',
        text: ['about-token-info-4-content-1']
      }
    ]

    return {
      aboutTokenInfo
    }
  }
}
</script>

<style lang="stylus" scoped>
.tokensContainer {
  background: linear-gradient(360deg, #370863 0%, #160D1D 48.22%);
}
.aboutStaking {
  display: flex;
  position: relative;
  max-width: 1443px;
  margin: auto;
  margin-top: 113px;
  padding-left: 23px;
  &__imgBox {
    position: relative;
  }
  &__img {
    display: none;
    width: 35vw;
    position: relative;
    top: 50px;
    z-index: 1;
  }
  &__gradientBg {
    position: absolute;
    width 306px;
    height 306px;
    background: #9C3CFB;
    filter: blur(200px);
    top: calc(50% - 153px);
    left: calc(50% - 153px);
  }
  &__infoBox {
    width: 80%;
    margin: auto;
    z-index: 1;
  }
  &__title {
    font-size: 34px;
    margin-bottom: 40px;
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__info {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    &:not(:first-child) {
      margin-top: 40px;
    }
  }
  &__button {
    margin-top: 60px;
  }
  &__stars {
    position: absolute;
    top: 0;
    left: -20px;
  }
  +mediaTablet() {
    &__img {
      display: block;
    }
    &__infoBox {
      position: relative;
      width: 45%;
      top: 98px;
      left: 94px;
      z-index: 1;
      margin: 0;
    }
  }
  +mediaDesktopM() {
    &__infoBox {
      width: auto;
    }
    &__title {
      font-size: 48px;
      margin-bottom: 60px;
    }
    &__info {
      font-size: 20px;
      max-width: 517px;
    }
  }
  +mediaLarge() {
    &__img {
      width: 749px;
    }
  }
}

.aboutToken {
  max-width: 1206px;
  margin: auto;
  margin-top: 132px;
  position: relative;
  &__title {
    font-size: 34px;
    margin-bottom: 30px;
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
    text-align: center;
  }
  &__text {
    max-width: 581px;
    font-family: 'Didact Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: $colorSecondTitle;
    opacity: .8;
    z-index: 1;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 0 10px;
  }
  &__infoBox {
    display: grid;
    justify-content: center;
    gap: 20px 0;
    z-index: 1;
  }
  &__info1 {
    width: 80vw;
  }
  &__info2 {
    width: 80vw;
  }
  &__info3 {
    width: 80vw;
  }
  &__info4 {
    position: relative;
    width: 40vw;
    left: calc(50% - 20vw);
  }
  &__coinIcon {
    display: none;
    width: 25vw;
    position: absolute;
    top: -30px;
    left: calc(50% - 12.5vw);
  }
  &__stars {
    position: absolute;
    top: 70px;
    left: -120px;
  }
  &__linkBox {
    margin-top: 45px;
    padding-bottom: 20px;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: $colorBrand;
  }
  +mediaTablet() {
    &__info1 {
      width: 30vw;
      position: relative;
      left: 55px;
    }
    &__info2 {
      width: 35vw;
      position: relative;
      top: -90px;
      left: 90px;
    }
    &__info3 {
      width: 40vw;
    }
    &__info4 {
      width: 25vw;
      left: 100px;
    }
    &__infoBox {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 109px;
      position: relative;
      z-index: 1;
      gap: 0;
    }
    &__coinIcon {
      display: block;
    }
  }
  +mediaDesktopM() {
    &__title {
      font-size: 48px;
    }
    &__text {
      font-size: 28px;
    }
    &__linkBox {
      font-size: 20px;
    }
  }
  +mediaDesktop() {
    &__title {
      text-align: left;
    }
    &__text {
      text-align: left;
      margin: 0;
      padding: 0;
    }
    &__info1 {
      width: 431px;
    }
    &__info2 {
      width: 539px;
      left: 65px;
    }
    &__info3 {
      width: 569px;
    }
    &__info4 {
      width: 325px;
    }
    &__coinIcon {
      width: auto;
      left: calc(50% - 174px);
    }
  }
}
.link {
  color: $colorPurple;
  &:hover {
    color: $colorFontBase;
  }
}
</style>
