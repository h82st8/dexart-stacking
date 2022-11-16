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
          <a :href="item.href" class="footerContainer__itemLink" target="_blank">{{
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
      <form v-if="state !== 'FULFILLED'" class="footerContainer__followForm" @submit.prevent="onSubmit($event, $i18n.locale)">
        <input v-model="email" type="email" placeholder="Email" class="footerContainer__input" required />
        <button class="footerContainer__button">{{ $t(state === 'PENDING' ? 'loading' : 'Sign Up') }}</button>
      </form>
      <div
        v-if="state === 'FULFILLED'"
        class="subscription-form__result subscription-form__result_success"
      >
        {{ $t('success') }}
      </div>
      <div
        v-if="state === 'FAILURE'"
        class="subscription-form__result subscription-form__result_fail"
      >
        {{ $t('fail') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

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
        href: '/docs/Privacy Policy_09112022.pdf'
      },
      {
        title: 'Cookies Policy',
        href: '/docs/Cookies Policy_09112022.pdf'
      },
      {
        title: 'Terms of service',
        href: '/docs/Token Sale Terms and Conditions 09112022.pdf'
      },
    ]

    const sitemap = [
      // {
      //   title: 'Main',
      //   href: ''
      // },
      {
        title: 'About DEXART Metaverse',
        href: 'https://dex.art'
      },
      {
        title: 'World backstory',
        href: 'https://dex.art/history'
      },
      {
        title: 'Land map',
        href: 'https://map.dex.art'
      }
    ]

    const email = ref<string>('')

    const state = ref<'INIT' | 'PENDING' | 'FAILURE' | 'FULFILLED'>('INIT')

    const onSubmit = async (e: any, locale: string) => {
      e.preventDefault();

      if (state.value === 'PENDING') {
        return
      }

      state.value = 'PENDING'

      try {
        const response = await fetch('https://dexart.niksher.ru', {
          method: 'POST',
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email: email.value,
            domain: 'dexart',
            lang: locale,
          }), // body data type must match "Content-Type" header
        })

        const result = await response.json()

        if (result.status) {
          state.value = 'FULFILLED'
        } else {
          state.value = 'FAILURE'
        }
      } catch (err) {
        state.value = 'FAILURE'
      }
    }

    return {
      info,
      sitemap,
      socials,
      onSubmit,
      state,
      email,
    }
  }
}
</script>

<style lang="stylus" scoped>
.footerContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 74px 20px 63px;
  background: linear-gradient(180deg, #160D1F -4.22%, #140C1B 100%);
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
  &__followForm {
    display: flex;
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
    width: 176px;
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
    height: 62px;
    background: $colorGradientForButton;
    border-radius: 0px 16px 16px 0px;
    position: relative;
    top: 0;
    left: -4px;
    padding: 0 5px;
    &:hover {
      background: $colorGradientForHoverButton;
      opacity: 1;
    }
  }
  +mediaTablet() {
    padding: 74px 50px 63px;
    &__input {
      width: 446px;
    }
  }
  +mediaDesktopM() {
    display: flex;
    padding: 84px 98px 63px;
    &__socialLinksBoxInfo,
    &__itemLink,
    &__followInfo,
    &__input {
      font-size: 18px;
    }
    &__title {
      font-size: 20px;
    }
    &__button {
      top: -1px;
    }
  }
  +mediaExtraLarge() {
    flex-wrap: nowrap;
  }
  +getMedia(1950px) {
    align-self: center;
  }
}
.subscription-form {
  &__result {
      color: #ffffff;
      opacity: 1;
      text-transform: uppercase;
      text-align: center;
      padding: 10px;
      font-size: rem(18px);
    }
    // &__result_success {
    // }
    &__result_fail {
      color: red;
    }
}
</style>
