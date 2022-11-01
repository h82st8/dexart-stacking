<template>
  <div class="headerContainer">
    <a href="/">
      <svg-icon
        class="headerContainer__logo"
        name="logo-icon"
      />
    </a>
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
    opacity: .6;
    // cursor: pointer;
    user-select: none;
    // &:hover .headerContainer__buttonWallet{
    //   display: none;
    // }
    // &:hover .headerContainer__buttonWalletHover {
    //   display: block;
    // }
  }
}
</style>
