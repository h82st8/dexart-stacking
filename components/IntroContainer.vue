<template>
  <div class="introContainer">
    <img class="introContainer__backgroundImg" :src="require('assets/images/tokens-bg.jpg')" alt="intro background">
    <div class="introContainer__introTitle">
      <h1 class="introContainer__firstTitle">
        Зарабатывайте <br>
        на стейкинге с DEXART <br>
        <span class="introContainer__selectedText">до 24% годовых</span>
      </h1>
      <img class="introContainer__titleFade" :src="require('assets/images/title-fade-img.png')">
      <h2 class="introContainer__secondTitle">
        Выбирайте пакеты токенов, чтобы получить максимальную выгоду, зарабатывать и поддерживать эко-систему DEXART Metaverse
      </h2>
      <img class="introContainer__secondTitleFade" :src="require('assets/images/second-title-fade-img.png')">
    </div>
    <img class="introContainer__introFade" :src="require('assets/images/intro-fade-img.png')">
    <img class="introContainer__coinTop" :src="require('assets/images/coin-top-icon.png')">
  </div>
</template>

<style lang="stylus" scoped>
.introContainer {
  width: 100%;
  height: 1080px;
  position: relative;
  overflow hidden;
  &__backgroundImg {
    position: absolute;
    min-width: 100%;
    height: 100%;
    margin: 0 auto;
    top: 0;
    left: 0;
  }
  &__introTitle {
    width: 1137px;
    position: relative;
    top: 346px;
    left: 253px;
    z-index: 1;
  }
  &__firstTitle {
    margin: 0;
    font-size: 64px;
    font-weight: 900;
    color: $colorBrand;
    z-index: 2;
  }
  &__titleFade {
    width: 100%;
    position: absolute;
    top: -97px;
    left: -143px;
    z-index: -2;
  }
  &__secondTitle {
    max-width: 707px;
    color: $colorSecondTitle;
    font-family: 'Didact Gothic';
    font-style: normal;
    font-size: 28px;
    font-weight: 400;
    opacity: 0.8;
    margin: 0;
    margin-top: 24px;
    z-index: 1;
  }
  &__secondTitleFade {
    width: 100%;
    position: absolute;
    top: -50px;
    left: -262px;
    z-index: -2;
  }
  &__selectedText {
    font-weight: 700;
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 2;
  }
  &__introFade {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &__coinTop {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -225px;
  }
}
</style>
