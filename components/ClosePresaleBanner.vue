<template>
  <div :class="['closePresaleBanner', {closePresaleBanner_forEn: $i18n.locale === 'en'}]">
    <h1 class="closePresaleBanner__title">{{ $t('До конца продаж Energy Units') }}</h1>
    <div class="closePresaleBanner__timerBox">
      <div class="closePresaleBanner__flexBox">
        <div class="closePresaleBanner__count">{{ days }}</div>
        <div class="closePresaleBanner__countName">{{ $t(`${getDaysName}`) }}</div>
      </div>
      <div class="closePresaleBanner__colon">:</div>
      <div class="closePresaleBanner__flexBox">
        <div class="closePresaleBanner__count">{{ hours }}</div>
        <div class="closePresaleBanner__countName">{{ $t(`${getHoursName}`) }}</div>
      </div>
      <div class="closePresaleBanner__colon">:</div>
      <div class="closePresaleBanner__flexBox">
        <div class="closePresaleBanner__count">{{ minutes }}</div>
        <div class="closePresaleBanner__countName">{{ $t(`${getMinutesName}`) }}</div>
      </div>
      <div class="closePresaleBanner__colon">:</div>
      <div class="closePresaleBanner__flexBox">
        <div class="closePresaleBanner__count">{{ seconds }}</div>
        <div class="closePresaleBanner__countName">{{ $t(`${getSecondsName}`) }}</div>
      </div>
    </div>
    <p class="closePresaleBanner__info">{{ $t('Успейте получить статус DEX Builder и уникальные привилегии') }}</p>
    <img
      :class="['closePresaleBanner__icon', {closePresaleBanner__iconOnEn: $i18n.locale === 'en'}]"
      :src="require('assets/images/energy-for-banner-icon.png')"
    />
  </div>
</template>

<script>
import declension from '@/utils/declension';

export default {
  name: 'ClosePresaleBanner',

  props: {
    timeToDeadline: {
      type: Number,
      required: true,
    },
  },

  computed: {
    days() {
      return this.timeTemplate(Math.floor(this.timeToDeadline / (1000 * 60 * 60 * 24)))
    },

    hours() {
      return this.timeTemplate(Math.floor((this.timeToDeadline % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    },

    minutes() {
      return this.timeTemplate(Math.floor((this.timeToDeadline % (1000 * 60 * 60)) / (1000 * 60)))
    },

    seconds() {
      return this.timeTemplate(Math.floor((this.timeToDeadline % (1000 * 60)) / 1000))
    },
    getDaysName() {
      return declension('день', 'дней', 'дня', this.days);
    },
    getHoursName() {
      return declension('час', 'часов', 'часа', this.hours);
    },
    getMinutesName() {
      return declension('минута', 'минут', 'минуты', this.minutes);
    },
    getSecondsName() {
      return declension('секунда', 'секунд', 'секунды', this.seconds);
    },
  },

  methods: {
    timeTemplate(time) {
      const timeInNumbers = time;
      return Number(timeInNumbers) < 10 ? `0${timeInNumbers}` : timeInNumbers
    },
  }
}
</script>

<style lang="stylus">
.closePresaleBanner {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: linear-gradient(156deg, rgba(37, 12, 61, 0.6) 13%, rgba(24, 6, 41, 0.8) 88.07%);
  backdrop-filter: blur(8px);
  border: 1px solid #BF81FF;
  border-radius: 32px;
  padding: 10px 20px;
  max-width: 85%;
  &__title {
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    font-weight: 900;
  }
  &__timerBox {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  &__flexBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__count {
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    font-size: 28px;
  }
  &__countName {
    font-size: 12px;
  }
  &__colon {
    margin: 0 2vw;
  }
  &__info {
    text-align: center;
    color: $colorBrand;
    opacity: .8;
  }
  &__icon {
    display: none;
    height: 307px;
    position: absolute;
    top: -100px;
    right: -234px;
  }
  &__iconOnEn {
    top: -140px;
    right: -189px;
  }
  +mediaPhone() {
    padding: 20px 30px;
    &__title {
      font-size: 32px;
      max-width: 322px;
    }
    &__flexBox {
      width: 70px;
    }
    &__count {
      font-size: 48px;
    }
    &__countName {
      width: 51px;
      text-align: center;
    }
    &__info {
      max-width: 400px;
    }
  }
  +mediaDesktopM() {
    padding: 20px 60px;
    &_forEn {
      min-width: 615px;
    }
    &__title {
      font-size: 48px;
      margin-bottom: 5px;
      max-width: 469px;
    }
    &__timerBox {
      margin-bottom: 20px;
    }
    &__flexBox {
      width: 85px;
    }
    &__count {
      font-size: 64px;
    }
    &__countName {
      font-size: 20px;
      width: 90px;
    }
    &__colon {
      margin: 0 20px;
    }
    &__icon {
      display: block;
    }
    &__info {
      font-size: 20px;
      max-width: 440px;
      margin-bottom: 10px;
    }
  }
}
</style>