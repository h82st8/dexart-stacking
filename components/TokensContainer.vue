<template>
  <div class="tokensContainer">
    <div class="aboutStaking">
      <div class="aboutStaking__imgBox">
        <img class="aboutStaking__img" :src="require('assets/images/coins-img.png')">
        <div class="aboutStaking__gradientBg" />
      </div>
      <div class="aboutStaking__infoBox">
        <h3 class="aboutStaking__title">Стейкинг</h3>
        <div class="aboutStaking__info">После покупки пакетов токенов вам нужно активировать стейкинг.</div>
        <div class="aboutStaking__info">Это более экологичная альтернатива майнингу. Вы зарабатываете на хранение своих криптоактивов — токенов DXA.</div>
        <div class="aboutStaking__info">Доходность от этой инвестиции может составить до 24% в год. Чем дольше период стейкинга, тем выше вознаграждение, которое вы получаете.</div>
        <CommonButton class="aboutStaking__button">Стейкинг</CommonButton>
      </div>
      <img class="aboutStaking__stars" :src="require('assets/images/stars-staking-bg.png')">
    </div>
    <div class="aboutToken">
      <h3 class="aboutToken__title">О токене</h3>
      <div class="aboutToken__text">DXA — это внутренний платёжный токен, который используется для совершения сделок в метавселенной DEXART.</div>
      <div class="aboutToken__infoBox">
        <div v-for="item in [1, 2, 3, 4]" :key="item" class="aboutToken__info">
          <img :class="`aboutToken__info${item}`" :src="require(`assets/images/about-token-${item}.png`)">
        </div>
        <img :class="`aboutToken__coinIcon`" :src="require(`assets/images/coin-icon.png`)">
      </div>
      <img class="aboutToken__stars" :src="require('assets/images/stars-tokens-bg.png')">
      <div class="aboutToken__linkBox">C полной презентацией токеномики DXA можно ознакомиться <a href='#' class="link">здесь</a></div>
    </div>
  </div>
</template>

<script lang="ts">

export default ({
  name: 'TokensContainer',
  setup() {
    const aboutTokenInfo = [
      {
        id: 1,
        title: 'Как выпускается DXA?',
        text: [
          'В процессе стейкинга',
          'В игровых квестах',
          'В игровых лутбоксах',
          'В игре DEX Farm - plant&earn',
        ]
      },
      {
        id: 2,
        title: 'Как потратить DXA?',
        text: [
          'Покупки NFT-предметов в мире',
          'В прохождении daily-квестов',
          'На аренду земельных участков',
          'За размещение объектов на своем участке',
          'Кампании по лидогенерации для брендов',
          'На улучшения игровых аккаунтов',
        ]
      },
      {
        id: 3,
        title: 'Как формируется DXA? ',
        text: [
          'Выплаты по реферальной программе DEXART',
          'Выплаты в кросс-промо квестах с брендами',
          'Выплаты за прохождение daily-квестов',
          'Размещение рекламы',
          'Выплаты арендной платы',
        ]
      },
      {
        id: 4,
        title: 'Как сжигается DXA?',
        text: [
          'На комиссиях',
        ]
      },
    ]

    return {
      aboutTokenInfo,
    };
  },
});
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
