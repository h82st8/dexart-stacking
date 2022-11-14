<template>
  <div class="headerContainer">
    <svg-icon
      class="headerContainer__logo"
      name="logo-icon"
    />
    <LayoutHeaderMenu class="headerContainer__headerMenu" />
    <div class="headerContainer__buttonBox">
      <button :class="['headerContainer__buttonWallet', {buttonDisabled: isConnectButtonDisabled}]">{{ $t('Подключить кошелек') }}</button>
      <!-- <img class="headerContainer__buttonWallet" :src="require('assets/images/buttonWallet.png')" alt="wallet connection button">
      <img class="headerContainer__buttonWalletHover" :src="require('assets/images/buttonWalletHover.png')" alt="wallet connection button"> -->
      <LangSwitch />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LayoutHeader',
  data() {
    return {
      isConnectButtonDisabled: true,
    };
  },
}
</script>

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
    top: -15px;
    left: 40px;
    width: 122px;
    +mediaTablet() {
      top: -32px;
    }
    +mediaDesktopS() {
      top: -5px;
      left: 0;
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
    width: 170px;
    +mediaDesktop() {
      width: auto;
    }
  }
  &__buttonWalletHover {
    display: none;
  }
  &__buttonBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 270px;
    position: relative;
    top: -20px;
    left: calc(50% - 145px);
    +mediaTabletS() {
      top: -80px;
      left: 160px;
    }
    +mediaTablet() {
      top: -20px;
      left: -70px;
      width: 450px;
    }
    +mediaDesktopS() {
      position: static;
      width: 350px
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
  &__buttonWallet {
    padding: 8px 12px;
    border: 1px solid #ED3FFE;
    border-radius: 32px;
    position: relative;
    font-size: 12px;
    color: $colorBrand;
    z-index: 1
    &:hover {
      opacity: 1;
      background: linear-gradient(90deg, #7C1DD3 2.02%, #912EEF 49.93%, #EE40FF 96.86%);
    }
    +mediaDesktopM() {
      font-size: 16px;
      padding: 16px 24px;
    }
  }
  +getMedia(1950px) {
    width: 1850px;
    align-self: center;
  }
}
.buttonDisabled {
  cursor: default;
  opacity: .6;
  &:hover {
    opacity: .6;
    background: none;
  }
}
</style>
