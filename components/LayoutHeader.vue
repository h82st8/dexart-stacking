<template>
  <div class="headerContainer">
    <svg-icon
      class="headerContainer__logo"
      name="logo-icon"
    />
    <LayoutHeaderMenu class="headerContainer__headerMenu" />
    <div class="headerContainer__buttonBox">
      <img class="headerContainer__buttonWallet" :src="require('assets/images/buttonWallet.png')" alt="wallet connection button">
      <img class="headerContainer__buttonWalletHover" :src="require('assets/images/buttonWalletHover.png')" alt="wallet connection button">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.headerContainer {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 156px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 60.11%, rgba(0, 0, 0, 0) 100%);
  z-index: 2;
  &__logo {
    width: 122px;
    margin-left: 128px;
  }
  &__headerMenu {
    margin-left: 129px;
  }
  &__buttonWalletHover {
    display: none;
  }
  &__buttonBox {
    margin-left: 105px;
    cursor: pointer;
    &:hover .headerContainer__buttonWallet{
      display: none;
    }
    &:hover .headerContainer__buttonWalletHover {
      display: block;
    }
  }
}
</style>
