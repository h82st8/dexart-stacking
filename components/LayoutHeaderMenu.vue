<template>
  <div class="headerMenuWrap">
    <div class="headerMenu">
      <div v-for="(item, i) in headerMenuList" :key="i" class="headerMenu__elem">
        <router-link v-if="item.title === 'Стейкинг'" :to="item.href" class="headerMenu__link">{{ $t(item.title) }}</router-link>
        <a v-else href="#" class="headerMenu__link">{{ $t(item.title) }}</a>
      </div>
    </div>
    <div class="mobileList">
      <button
        class="header__menu-toggler"
        :class="isOpenMenu && 'header__menu-toggler--expanded'"
        @click="handleButton"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div :class="['list', {list_open: isOpenMenu}]">
        <div v-for="(item, i) in headerMenuList" :key="i" class="list__elem">
          <router-link v-if="item.title === 'Стейкинг'" :to="item.href" :class="['list__link', {list__link_open: isOpenMenu}]">{{ $t(item.title) }}</router-link>
          <a v-else href="#" :class="['list__link', {list__link_open: isOpenMenu}]">{{ $t(item.title) }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'LayoutHeaderMenu',
  setup() {

    const isOpenMenu = ref<boolean>(false);

    const headerMenuList = [
      {
        title: 'DEXART Metaverse',
        href: '',
      },
      {
        title: 'Купить токен',
        href: '',
      },
      // {
      //   title: 'Стейкинг',
      //   href: '/stacking',
      // },
      {
        title: 'Дорожная карта',
        href: '',
      },
    ];

    const handleButton = () => {
      isOpenMenu.value = !isOpenMenu.value;
    };

    return {
      isOpenMenu,
      headerMenuList,
      handleButton,
    };
  },
}
</script>

<style lang="stylus" scoped>
  .headerMenu {
    display: none;
    +mediaDesktopS() {
      display: flex;
      color: $colorFontBase;
      width: 100%;
      justify-content: space-between;
      &__elem {
        font-size: 15px;
        font-weight: 300;
        +mediaLarge() {
          font-size: 18px;
        }
      }
      &__link {
        &:hover {
          color: #912EEF;
        }
        &.nuxt-link-active {
          color: $colorBrand;
        }
      }
    }
  }
  .mobileList {
    display: block;
    +mediaDesktopS() {
      display: none;
    }
  }
  .header {
    &__menu-toggler {
      padding: 12px;
      width: 56px;
      height: 44px;
      margin-left: 16px;
      position: absolute;
      right: 40px;
      top: 30px;
      display: none;
      z-index: 200;
      display: block;
      margin-left: auto;

      span {
        height: 4px;
        border-radius: 8px;
        background-color: #fff;
        display: block;
        transition: 350ms;
        margin-bottom: 4px;

        &:first-of-type {
          width: 100%;
        }

        &:nth-of-type(2) {
          width: 70%;
        }

        &:last-of-type {
          width: 50%;
          margin-bottom: 0;
        }
      }

      &--expanded {
        span {
          transition: 350ms;

          &:first-of-type {
            width: 50%;
            transform: translateZ(0) rotate(45deg) translate(11px, 0px);
          }

          &:nth-of-type(2) {
            opacity: 0;
          }

          &:last-of-type {
            transform: translateZ(0) rotate(-45deg) translate(12px, -1px);
          }
        }
      }
    }
  }
  .list {
    position: absolute;
    right: 40px;
    top: 62px;
    background: #6A1DAC;
    box-shadow: 0px 15px 24px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    z-index: -100;
    transform: translateY(-10px);
    transition: .3s;
    opacity: 0;
    &__elem {
      padding: 8px 16px;
      cursor: default;
      &:first-child {
        border-radius: 32px 32px 0 0;
        padding-top: 16px;
      }
      &:last-child {
        border-radius: 0 0 32px 32px;
        padding-bottom: 16px;
      }
      &:hover {
        background: $colorViolet;
        opacity: .8;
      }
      &:hover &__link {
        color: #912EEF;
      }
    }
    &__link {
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: none;
      cursor: none;
      &.nuxt-link-active {
        color: $colorBrand;
      }
      &_open {
        pointer-events: auto;
        cursor: pointer;
      }
    }
    &_open {
      opacity: 1;
      transform: translateY(10px);
      z-index: 100;
      transition: .3s;
    }
  }
</style>