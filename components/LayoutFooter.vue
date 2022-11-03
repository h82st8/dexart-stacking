<template>
  <div class="footerContainer">
    <div class="footerContainer__socialLinksBox">
      <div class="footerContainer__logoBox">
        <svg-icon class="footerContainer__logo" name="logo-icon" />
      </div>
      <div class="footerContainer__socialLinksBoxInfo">Dexart (c) 2022</div>
      <div class="footerContainer__socialLinks">
        <a
          v-for="(item, i) in socials"
          :key="i"
          :href="item || '#'"
          target="_blank"
          class="footerContainer__socialLinkItem"
        >
          <svg-icon
            class="footerContainer__icon"
            :name="`social-icon-${i + 1}`"
          />
          <div class="footerContainer__socialLinksWrapper"></div>
        </a>
      </div>
    </div>
    <div class="footerContainer__infoBox">
      <h4 class="footerContainer__title">{{ $t('Info') }}</h4>
      <div class="footerContainer__itemsBox">
        <div v-for="(item, i) in info" :key="i" class="footerContainer__item">
          <a
            :href="item.href"
            target="_blank"
            class="footerContainer__itemLink"
            rel="noopener"
            >{{ $t(item.title) }}</a
          >
        </div>
      </div>
    </div>
    <div class="footerContainer__sitemapBox">
      <h4 class="footerContainer__title">{{ $t('Sitemap') }}</h4>
      <div class="footerContainer__itemsBox">
        <div
          v-for="(item, i) in sitemap"
          :key="i"
          class="footerContainer__item"
        >
          <a :href="item.href" class="footerContainer__itemLink">{{
            $t(item.title)
          }}</a>
        </div>
      </div>
    </div>
    <div class="footerContainer__followBox">
      <h4 class="footerContainer__title">{{ $t('Follow DEXART') }}</h4>
      <div class="footerContainer__followInfo">
        {{ $t('Subscribe to the newsletter of the most important news') }}
      </div>
      <form class="footerContainer__followForm">
        <input type="text" placeholder="Email" class="footerContainer__input" />
        <button class="footerContainer__button">{{ $t('Sign Up') }}</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FooterContainer',
  setup() {
    const socials = [
      'https://instagram.com/dexartmetaverse',
      'https://twitter.com/dexartmetaverse',
      'https://www.youtube.com/channel/UC13PPy2YX2d6rIbjkdveP7g/',
      'https://t.me/dexartchannelru',
      'https://medium.com/@dexartmetaverse',
      'https://www.reddit.com/r/dexart/'
    ]
    const info = [
      {
        title: 'Privacy Policy',
        href: '/docs/PrivacyPolicy_26.10.22.pdf'
      },
      {
        title: 'Cookies Policy',
        href: '/docs/CookiesPolicy.pdf'
      },
      {
        title: 'Term of service',
        href: '/docs/TermsAndConditions_26.10.22.pdf'
      },
      {
        title: 'Legal information',
        href: ''
      },
      {
        title: 'Disclaimer',
        href: ''
      }
    ]

    const sitemap = [
      {
        title: 'Main',
        href: ''
      },
      {
        title: 'Avatar design tool',
        href: ''
      },
      {
        title: 'Avatar design tool',
        href: ''
      },
      {
        title: 'World backstory',
        href: ''
      },
      {
        title: 'Token',
        href: ''
      }
    ]

    return {
      info,
      sitemap,
      socials
    }
  }
}
</script>

<style lang="stylus" scoped>
.footerContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 74px 50px 63px;
  background: linear-gradient(180deg, #160D1F -4.22%, #140C1B 100%);
  &__socialLinksBox {
    margin-right: 72px;
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
  &__socialLinksWrapper {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    background: #57198A;
    opacity: .6;
    display: none;
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
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: $colorSocialBg
    &:hover .footerContainer__socialLinksWrapper {
      display: block;
    }
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
  &__icon {
    width: 25px;
    height: 25px;
  }
  &__infoBox {
    margin-top: 10px;
    margin-right: 65px;
  }
  &__sitemapBox {
    margin-top: 10px;
    margin-right: 32px;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: $colorBase;
    margin: 0;
    margin-bottom: 29px;
  }
  &__itemsBox {
    min-width: 217px;
  }
  &__item {
    margin-bottom: 24px;
  }
  &__itemLink {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: $colorBase;
    opacity: .6;
    &:hover {
      opacity: 1;
    }
  }
  &__followBox {
    margin-top: 10px;
  }
  &__followInfo {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: $colorBase;
    position: relative;
    top: -20px;
    margin-bottom: 12px;
  }
  &__input {
    width: 446px;
    height: 62px;
    padding-left: 16px;
    background: rgba(87, 25, 138, 0.5);
    border-radius: 16px 0px 0px 16px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    outline: 0;
    border: 0;
    color: $colorBase;
    &::placeholder {
      color: $colorBase;
    }
  }
  &__button {
    width: 149px;
    height: 62px;
    background: $colorGradientForButton;
    border-radius: 0px 16px 16px 0px;
    position: relative;
    top: -1px;
    left: -4px;
    &:hover {
      background: $colorGradientForHoverButton;
      opacity: 1;
    }
  }
  +mediaDesktopM() {
    display: flex;
    padding: 84px 128px 63px;
    &__socialLinksBoxInfo,
    &__itemLink,
    &__followInfo,
    &__input {
      font-size: 18px;
    }
    &__title {
      font-size: 20px;
    }
  }
}
</style>
