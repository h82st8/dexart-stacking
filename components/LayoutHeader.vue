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
  flex-direction: column;
  width: 100%;
  height: 156px;
  z-index: 5;
  +mediaTablet() {
    padding: 50px;
    flex-direction: row;
  }
  +mediaDesktopS() {
    align-items: center;
  }
  &__logo {
    position: relative;
    top: -11px;
    left: 40px;
    width: 122px;
    +mediaTablet() {
      top: -32px;
    }
    +mediaDesktopS() {
      position: static;
      margin-left: 20px;
    }
    +mediaDesktop() {
      margin-left: 60px;
    }
  }
  &__headerMenu {
    margin-left: 5vw;
    width: 50vw;
    +mediaDesktop() {
      width: 40vw;
    }
  }
  &__buttonWallet {
    width: 200px;
    +mediaDesktop() {
      width: auto;
    }
  }
  &__buttonWalletHover {
    display: none;
  }
  &__buttonBox {
    position: relative;
    top: -20px;
    left: calc(50% - 100px);
    +mediaTabletS() {
      top: -80px;
    }
    +mediaTablet() {
      top: -20px;
      left: -70px;
    }
    +mediaDesktopS() {
      position: static;
    }
    margin-left: 3vw;
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
