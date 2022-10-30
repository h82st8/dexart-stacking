<template>
  <div class="headerMenu">
    <div v-for="(item, i) in headerMenuList" :key="i" class="headerMenu__elem">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeaderMenu',
  setup() {
    const headerMenuList = [
      'DEXART Metaverse',
      'Купить токен',
      'Стейкинг',
      'Дорожная карта',
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
  }
</style>