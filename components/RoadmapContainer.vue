<template>
  <div class="roadmapContainer">
    <img
      class="roadmapContainer__starsBg"
      :src="require('assets/images/stars-roadmap-bg.png')"
    />
    <div id="indexRoadmap" class="roadmapContainer__titleBox">
      <h3 class="roadmapContainer__titlePrimary">RoadMap</h3>
      <h3 class="roadmapContainer__titleSecond">DXA</h3>
    </div>
    <div class="roadmapContainer__arrowsBox">
      <div :class="['roadmapContainer__arrowWrapper', {roadmapContainer__arrowDisable: formData.countLeft === 0}]" @click="leftArrowClick">
        <img
          class="aboutStaking__arrow"
          :src="require('assets/images/arrow-left-icon.png')"
        />
      </div>
      <div :class="['roadmapContainer__arrowWrapper', {roadmapContainer__arrowDisable: (formData.countRight - formData.newsOnWindowCount) === 0}]" @click="rightArrowClick">
        <img
          class="aboutStaking__arrow"
          :src="require('assets/images/arrow-right-icon.png')"
        />
      </div>
    </div>
    <div class="roadmapContainer__sliderBox">
      <div class="roadmapContainer__line"></div>
      <div class="wrapper">
        <div class="roadmapContainer__itemsBox" :style="roadmapItemsBox">
          <div
            v-for="item in roadmap"
            :key="item.id"
            class="roadmapContainer__item"
          >
            <svg-icon class="roadmapContainer__icon" name="active-icon" />
            <div class="roadmapContainer__textBox">
              <div class="roadmapContainer__textBoxTitle">{{ item.title }}</div>
              <ul
                v-for="(elem, i) in item.textList"
                :key="i"
                class="roadmapContainer__textBoxList"
              >
                <li class="roadmapContainer__listItem">{{ $t(elem) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, reactive, onMounted } from 'vue'

export default {
  name: 'RoadmapContainer',
  setup() {
    const roadmap = [
      {
        id: 1,
        title: 'Q4 2022',
        textList: ['rodmap-text-1-1', 'rodmap-text-1-2']
      },
      {
        id: 2,
        title: 'Q1 2023',
        textList: [
          'rodmap-text-2-1',
          'rodmap-text-2-2',
          'rodmap-text-2-3',
          'rodmap-text-2-4',
        ]
      },
      {
        id: 3,
        title: 'Q2 2023',
        textList: ['rodmap-text-3-1', 'rodmap-text-3-2']
      },
      {
        id: 4,
        title: 'Q3 23',
        textList: [
          'rodmap-text-4-1',
          'rodmap-text-4-2',
          'rodmap-text-4-3',
        ],
      },
      {
        id: 5,
        title: '2023-2024',
        textList: [
          'rodmap-text-5-1',
        ],
      }
    ]

    const formData = reactive({
      countRight: roadmap.length,
      countLeft: 0,
      newsOnWindowCount: 1,
    })

    const roadmapItemsBox = ref<any>()

    const rightArrowClick = () => {
      if(window.matchMedia("(min-width: 1165px)").matches) {
        if (formData.countRight - 3 !== 0) {
          roadmapItemsBox.value = computed(() => {
              return {
                transform: `translate(${
                  -450 * (roadmap.length - formData.countRight)
                }px)`
              };
          })
          --formData.countRight;
          formData.countLeft++;
        }
      } else if (window.matchMedia("(min-width: 890px)").matches) {
        if (formData.countRight - 3 !== 0) {
          roadmapItemsBox.value = computed(() => {
              return {
                transform: `translate(${
                  -280 * (roadmap.length - formData.countRight)
                }px)`
              };
          })
          --formData.countRight;
          formData.countLeft++;
        }
      } else if (window.matchMedia("(min-width: 633px)").matches) {
        if (formData.countRight - 2 !== 0) {
          roadmapItemsBox.value = computed(() => {
              return {
                transform: `translate(${
                  -280 * (roadmap.length - formData.countRight)
                }px)`
              };
          })
          --formData.countRight;
          formData.countLeft++;
        }
      } else if (formData.countRight - 1 !== 0) {
        roadmapItemsBox.value = computed(() => {
          return {
            transform: `translate(${
              -280 * (roadmap.length - formData.countRight)
            }px)`
          }
        })
        --formData.countRight
        formData.countLeft++
      }
    }

    const leftArrowClick = () => {
      if (formData.countLeft !== 0) {
        roadmapItemsBox.value = computed(() => {
          if (window.matchMedia("(min-width: 1165px)").matches) {
            return {
              transform: `translate(${
                -450 * (1 + (roadmap.length - formData.countRight)) + 450
              }px)`
            };
          } else {
            return {
              transform: `translate(${
                -280 * (1 + (roadmap.length - formData.countRight)) + 280
              }px)`
            };
          }
        })
        formData.countLeft--
        formData.countRight++
      }
    }

    onMounted(() => {
      if (window.matchMedia("(min-width: 1165px)").matches) formData.newsOnWindowCount = 3;
      else if (window.matchMedia("(min-width: 633px)").matches) formData.newsOnWindowCount = 2
      else formData.newsOnWindowCount = 1
    });

    return {
      roadmap,
      roadmapItemsBox,
      rightArrowClick,
      leftArrowClick,
      formData,
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper {
  width: 280px;
  padding-top: 40px;
  padding-left: 40px;
  position: relative;
  top: -40px;
  left: -40px;
  overflow: hidden;
  +getMedia(633px) {
    width: 560px;
  }
  +mediaExtraTablet() {
    width: 840px;
  }
  +mediaDesktopM() {
    width: 1350px;
  }
}
.roadmapContainer {
  background: linear-gradient(180deg, #370863 0%, #000000 100%);
  padding: 64px 0 50px 20px;
  overflow: hidden;
  position: relative;
  &__starsBg {
    position: absolute;
    top: 53px;
    left: 0;
  }
  &__titleBox {
    margin-bottom: 32px;
    z-index: 1;
  }
  &__titlePrimary {
    font-size: 34px;
    background: linear-gradient(89.99deg, #BF81FF 1.88%, #D17558 18.37%, #F84FE7 77.86%);;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
  }
  &__titleSecond {
    font-size: 34px;
    color: $colorBrand;
    z-index: 1;
  }
  &__arrowsBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 104px;
    z-index: 100;
  }
  &__arrowWrapper {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    z-index: 1;

    +mediaTablet() {
      &:hover {
        background: $colorGradientForButton;
      }
    }
    &:active .aboutStaking__arrow,
    &:active {
      width: 42px;
      height: 42px;
      background: $colorGradientForButton;
      border-radius: 8px;
    }
  }
  &__arrowDisable {
    cursor: default;
    opacity: .6;
    +mediaTablet() {
      &:hover {
        background: transparent;
      }
    }
    &:active .aboutStaking__arrow,
    &:active {
      width: 48px;
      height: 48px;
      background: transparent;
    }
  }
  &__sliderBox {
    margin-top: 121px;
    z-index: 1;
  }
  &__line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: radial-gradient(50% 50% at 50% 50%, #EE40FF 0%, rgba(238, 64, 255, 0) 100%);
  }
  &__itemsBox {
    display: flex;
    position: relative;
    left: -253px;
    transition: transform .3s;
  }
  &__item {
    width: 280px;
    min-width: 280px;
    transform: translate(253px);
    position: relative;
    top: -46px;
  }
  &__icon {
    width 96px;
    height 96px;
    position: relative;
    left: -32px;
  }
  &__textBoxTitle {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: $colorBrand;
    margin-bottom: 16px;
  }
  &__listItem {
    position: relative;
    padding-left: 20px;
    font-size: 12px;
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: 6px;
      background: $colorFontBase;
    }
    margin-top: 5px;
  }
  +mediaPhone() {
    padding: 64px 0 50px 53px;
  }
  +mediaDesktopM() {
    &__titlePrimary,
    &__titleSecond {
      font-size: 48px;
    }
    &__textBoxTitle {
      font-size: 24px;
    }
    &__listItem {
      font-size: 16px;
    }
    &__item {
      width: 450px;
      min-width: 450px;
    }
  }
  +mediaLarge() {
    padding: 64px 0 50px 253px;
  }
}
</style>
