<template>
  <div class="introContainer">
    <img
      class="introContainer__backgroundImg"
      :src="require('assets/images/tokens-bg.jpg')"
      alt="intro background"
    />
    <div class="introContainer__introTitle">
      <h1 class="introContainer__firstTitle" v-html="$t(`intro-title`)"></h1>
      <img
        class="introContainer__titleFade"
        :src="require('assets/images/title-fade-img.png')"
      />
      <h2 class="introContainer__secondTitle">
        {{ $t('intro-text') }}
      </h2>
      <img
        class="introContainer__secondTitleFade"
        :src="require('assets/images/second-title-fade-img.png')"
      />
    </div>
    <ClosePresaleBanner
      v-if="timerIsShown"
      class="closePresaleBanner"
      :time-to-deadline="timeToDeadline"
    />
    <img
      class="introContainer__introFade"
      :src="require('assets/images/intro-fade-img.png')"
    />
  </div>
</template>

<script>
import ClosePresaleBanner from './ClosePresaleBanner.vue'

export default {
  name: 'IntroContainer',
  components: { ClosePresaleBanner },
  data() {
    return {
      timeToDeadline: -1
    }
  },
  computed: {
    deadline() {
      return new Date('March 24, 2023 19:00:00 GMT+01:00').getTime()
    },
    timerIsShown() {
      return !String(this.timeToDeadline).includes('-')
    }
  },
  mounted() {
    this.timeToDeadline = this.deadline - new Date().getTime()
    setInterval(() => {
      this.timeToDeadline = this.deadline - new Date().getTime()
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
.closePresaleBanner {
  position: absolute;
  bottom: 0;
  z-index: 3;
}
.introContainer {
  width: 100vw;
  height: 830px;
  position: relative;
  overflow hidden;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__backgroundImg {
    align-self: center;
    position: absolute;
    min-width: 100%;
    height: 100%;
    margin: 0 auto;
    +getMedia(1950px) {
      min-width: auto;
    }
  }
  &__introTitle {
    align-self: flex-start;
    position: relative;
    top: 346px;
    left: 20px;
    z-index: 1;
    +mediaPhone() {
      left: 53px;
    }
  }
  &__firstTitle {
    margin: 0;
    width: calc(100% - 53px);
    font-size: 32px;
    font-weight: 900;
    color: $colorBrand;
    z-index: 2;
  }
  &__titleFade {
    width: 100%;
    position: absolute;
    top: -9px;
    left: -43px;
    z-index: -2;
  }
  &__secondTitle {
    max-width: 300px;
    width: calc(100% - 53px);
    color: $colorSecondTitle;
    font-family: 'Didact Gothic';
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.8;
    margin: 0;
    margin-top: 24px;
    z-index: 1;
  }
  &__secondTitleFade {
    width: 100%;
    position: absolute;
    top: -50px;
    left: -20px;
    z-index: -2;
  }
  &__selectedText {
    font-weight: 700;
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 2;
  }
  &__introFade {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &__coinTop {
    width: 200px;
    position: absolute;
    bottom: 0;
    left: calc(50% - 132px);
  }
  +mediaTabletS() {
    &__titleFade {
      top: -100px;
      left: -80px;
    }
    &__secondTitleFade {
      top: -100px;
      left: -120px;
    }
  }
  +mediaDesktopM() {
    width: 100%;
    height: 1080px;
    padding-right: 0px;
    &__introTitle {
      width: 1137px;
      top: 446px;
      left: 253px;
    }
    &__firstTitle {
      font-size: 64px;
    }
    &__titleFade {
      top: -97px;
      left: -143px;
    }
    &__secondTitle {
      max-width: 707px;
      font-size: 28px;
    }
    &__secondTitleFade {
      display: block;
    }
    &__coinTop {
      width: auto;
      left: 50%;
    }
  }
  +getMedia(2200px) {
    align-items: center;
    &__introTitle {
      align-self: center;
      left: 0;
    }
  }
}
</style>
