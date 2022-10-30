<template>
  <div class="headerMenu">
    <div v-for="(item, i) in headerMenuList" :key="i" class="headerMenu__elem">
      <router-link v-if="item.title === 'Стейкинг'" :to="item.href" class="headerMenu__link">{{ item.title }}</router-link>
      <a v-else href="#" class="headerMenu__link">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeaderMenu',
  setup() {

    const headerMenuList = [
      {
        title: 'DEXART Metaverse',
        href: '',
      },
      {
        title: 'Купить токен',
        href: '',
      },
      {
        title: 'Стейкинг',
        href: '/stacking',
      },
      {
        title: 'Дорожная карта',
        href: '',
      },
    ];

    return {
      headerMenuList,
    };
  },
}
</script>

<style lang="stylus" scoped>
  .headerMenu {
    display: flex;
    color: $colorFontBase;
    &__elem {
      font-size: 18px;
      font-weight: 300;
      &:not(:last-child) {
        margin-right: 64px;
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
  .x {
    color: red;
  }
</style>