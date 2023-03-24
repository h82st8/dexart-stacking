<template>
  <div class="saleIsOver">
    <div class="saleIsOver__bannerBox">
      <div class="saleIsOver__bannerBoxWrap">
        <h1 class="saleIsOver__title">{{ $t('Energy Units sale is over') }}</h1>
        <p class="saleIsOver__info">{{ $t('Subscribe to our social networks and stay up-to-date with news.') }}</p>
        <div class="saleIsOver__socialLinks">
          <a
            v-for="(item, i) in socials"
            :key="i"
            :href="item || '#'"
            target="_blank"
            class="saleIsOver__socialLinkItem"
          >
            <svg-icon
              class="saleIsOver__icon"
              :name="`second-social-icon-${i + 1}`"
            />
          </a>
        </div>
        <img
          :class="['saleIsOver__batteryIcon', {closePresaleBanner__iconOnEn: $i18n.locale === 'en'}]"
          :src="require('assets/images/energy-for-banner-icon.png')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleIsOverBanner',
  data() {
    return {
      socials: [
        'https://instagram.com/dexartmetaverse',
        'https://twitter.com/dexartmetaverse',
        'https://www.youtube.com/channel/UC13PPy2YX2d6rIbjkdveP7g/',
        'https://t.me/dexartchannelru',
        'https://medium.com/@dexartmetaverse',
        'https://www.reddit.com/r/dexart/',
      ],
    };
  },
}
</script>

<style lang="stylus">
.saleIsOver {
  height: 180px;
  position: relative;
  margin: 0 auto;
  * {
    color: $colorBase;
    font-family: 'Montserrat';
    font-style: normal;
  }
  &__bannerBox {
    position: absolute;
    top: -155px;
    left: calc(50% - (90vw / 2));
    width: 90vw;
    display: inline-block;
    background: linear-gradient(103.4deg, rgba(124, 29, 211, 0.8) 0.77%, rgba(36, 12, 59, 0.8) 98.1%);
    backdrop-filter: blur(4px);
    border-radius: 40px;
    z-index: 10;
  }
  &__bannerBoxWrap {
    position: relative;
    padding: 24px 32px 31px 32px;
    width 100%
    height 100%
  }
  &__title {
    margin: 0;
    margin-bottom: 28px;
    max-width: 540px;
    font-weight: 700;
    font-size: 32px;
  }
  &__info {
    margin-bottom: 44px;
    max-width: 496px;
    font-size: 18px;
    line-height: 27px;
  }
  &__batteryIcon {
    display: none;
    position: absolute;
    top: -150px;
    right: -140px;
    width: 563px;
  }
  &__socialLinksBox {
    margin-right: 72px;
    margin-bottom: 20px;
  }
  &__logo {
    width: 125px;
    height: 50px;
    margin-bottom: 17px;
  }
  &__socialLinksBoxInfo {
    margin-top: 10px;
    margin-bottom: 28px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: $colorBase;
    opacity: .6;
  }
  &__socialLinks {
    display: flex;
    align-items: center;
  }
  &__socialLinkItem {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: $colorBase
    &:hover {
      opacity: .6;
    }
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
  &__icon {
    width 20px
    height 20px
  }
  +mediaTablet() {
    height: 260px;
    &__bannerBox {
      top: -240px;
      left: calc(50% - (70vw / 2));
      width: 70vw;
    }
    &__bannerBoxWrap {
      padding: 48px 64px 62px 64px;
    }
    &__title {
      font-size: 64px;
      line-height: 78px;
    }
    &__info {
      font-size: 22px;
      line-height: 27px;
    }
    &__socialLinkItem {
      width: 44px;
      height: 44px;
    }
  }
  +mediaDesktopM() {
    height: 230px;
    &__bannerBox {
      top: -300px;
      left: calc(50% - 500px);
      width: 1000px;
    }
    &__batteryIcon {
      display: block;
    }

    &__title {
      font-size: 80px;
      line-height: 98px;
    }
    &__info {
      font-size: 24px;
      line-height: 29px;
    }
  }
}
</style>