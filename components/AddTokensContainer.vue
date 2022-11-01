<template>
  <div class="addTokensContainer">
    <div class="addTokensContainer__stackingBox">
      <img class="addTokensContainer__coinIcon" :src="require('assets/images/coin-stacking-icon.png')">
      <div class="addTokensContainer__titleBox">
        <h1 class="addTokensContainer__title">Стейкинг</h1>
        <div v-if="formData.isWalletAddress" class="addTokensContainer__walletAddressBox">
          <span class="addTokensContainer__walletAddress">{{ truncatedAddress }}</span>
          <svg-icon
            class="addTokensContainer__arrowBottom"
            name="arrow-bottom-icon"
          />
        </div>
      </div>
      <div v-if="formData.isWalletAddress">
        <div v-for="item in contractsToCollect" :key="item.id" class="contractsToCollect">
          <div class="contractsToCollect__gridBlock">
            <div class="contractsToCollect__flexBox">
              <div class="contractsToCollect__gridTitle">Контракт:</div>
              <div class="contractsToCollect__gridItem">{{ item.duration }}</div>
            </div>
            <div class="contractsToCollect__flexBox">
              <div class="contractsToCollect__gridTitle">Кол-во пакетов:</div>
              <div class="contractsToCollect__gridItem">{{ item.count }}</div>
            </div>
            <div class="contractsToCollect__flexBox">
              <div class="contractsToCollect__gridTitle">В стейкинге до:</div>
              <div class="contractsToCollect__gridItem">{{ item.to }}</div>
            </div>
            <div class="contractsToCollect__flexBox">
              <div class="contractsToCollect__gridTitle">Пакет:</div>
              <div class="contractsToCollect__gridItem">{{ item.price }}</div>
            </div>
          </div>
          <div class="contractsToCollect__flexBox">
            <div>
              <div class="contractsToCollect__availableTitle">Доступно к сбору:</div>
              <div class="contractsToCollect__available">{{ item.available }}</div>
            </div>
            <CommonButton class="contractsToCollect__button">Собрать</CommonButton>
          </div>
        </div>
        <div class="addTokensContainer__secondTitle">Добавить токены в стейкинг</div>
      </div>
      <div class="addTokensContainer__mainBox">
        <div class="addTokensContainer__choosePackets">
          <div v-if="!formData.isWalletAddress" class="addTokensContainer__choosePacketsNone">
            <div class="addTokensContainer__choosePacketsNoneText">
              Подключите кошелек, чтобы увидеть пакеты токенов, доступные для стейкинга
            </div>
            <CommonButton class="addTokensContainer__button">Подключить кошелек</CommonButton>
          </div>
          <div v-if="formData.isWalletAddress" class="addTokensContainer__choosePacketsBox">
            <div class="addTokensContainer__choosePacketsTitle">Выберите пакеты:</div>
            <div class="addTokensContainer__choosePacketsCheckboxBox">
              <div class="addTokensContainer__flexBox">
                <div class="addTokensContainer__packetsTitle flexBoxElem1">Пакет</div>
                <div class="addTokensContainer__packetsTitle flexBoxElem2">Кол-во</div>
                <div class="addTokensContainer__packetsTitle flexBoxElem3">Выбрать</div>
              </div>
              <div v-for="item in packets" :key="item.id" class="addTokensContainer__flexBox">
                <div class="addTokensContainer__packetsInfo1 flexBoxElem1">{{ item.price }}</div>
                <div class="addTokensContainer__packetsInfo2 flexBoxElem2">{{ item.count }}</div>
                <div class="addTokensContainer__packetsInfo3 flexBoxElem3">
                  <input
                    :id="'1' + item.id"
                    v-model="formData.packetValue"
                    :value="{id: item.id, price: item.price, count: item.count}"
                    type="radio"
                    class="addTokensContainer__packetInput"
                    name="packets"
                    :disabled="item.count === 0"
                  >
                  <div style="position: relative">
                    <label :for="'1' + item.id" :class="['addTokensContainer__packetLabel', {addTokensContainer__disableCheckbox: item.count === 0}]">
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="addTokensContainer__choosePlan">
          <h4 class="addTokensContainer__choosePlanTitle">Выберите план:</h4>
          <div class="addTokensContainer__inputsBox">
            <div v-for="item in plans" :key="item.id" class="addTokensContainer__inputBoxItem">
              <input
                :id="item.id"
                v-model="formData.radioValue"
                :value="{id: item.id, duration: item.duration, percent: item.percent}"
                type="radio"
                class="addTokensContainer__input"
                name="nodeValue"
              >
              <div>
                <label :for="item.id" class="addTokensContainer__label">
                  <svg-icon
                    class="addTokensContainer__icon"
                    :name="`stacking-plans-icon-${item.id}`"
                  />
                  <div class="addTokensContainer__duration">{{ item.duration }}</div>
                  <div class="addTokensContainer__percent">{{ item.percent }}%</div>
                  <div class="addTokensContainer__apy">APY</div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="yourChoice">
        <div class="yourChoice__titleBox">
          <h4 class="yourChoice__title">Ваш выбор:</h4>
          <div class="yourChoice__line"></div>
        </div>
        <div class="yourChoice__mainBlock">
          <div class="yourChoice__stackingInfo">
            <div class="">
              <span class="yourChoice__stackingInfoTitle">Кол-во пакетов:</span>
              <span :class="['yourChoice__stackingInfoNoneChoice', {yourChoice__stackingInfoChoice: formData.packetValue.count}]">{{ formData.packetValue.count || 'не выбран' }}</span>
            </div>
            <div class="">
              <span class="yourChoice__stackingInfoTitle">Контракт:</span>
              <span :class="['yourChoice__stackingInfoNoneChoice', {yourChoice__stackingInfoChoice: formData.radioValue.duration}]">{{ formData.radioValue.duration || 'не выбран' }}</span>
            </div>
            <div class="">
              <span class="yourChoice__stackingInfoTitle">Пакет:</span>
              <span :class="['yourChoice__stackingInfoNoneChoice', {yourChoice__stackingInfoChoice: formData.packetValue.price}]">{{ formData.packetValue.price || 'не выбран' }}</span>
            </div>
            <div class="">
              <span class="yourChoice__stackingInfoTitle">Ожидаемая доходность:</span>
              <span :class="['yourChoice__stackingInfoNoneChoice', {yourChoice__stackingInfoChoice: formData.packetValue.price}]">{{ '0' }} DXA в месяц</span>
            </div>
          </div>
          <CommonButton :is-disabled="true">Активировать</CommonButton>
        </div>
      </div>
    </div>
    <div class="wrap">
      <img class="addTokensContainer__backgroundImg" :src="require('assets/images/stacking-bg.png')" alt="background">
      <img class="addTokensContainer__fade" :src="require('assets/images/fade-stacking.png')" alt="fade">
      <img class="addTokensContainer__coinTopStacking" :src="require('assets/images/coin-top-stacking-icon.png')">
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';
import CommonButton from './CommonButton.vue';

export default ({
    name: "AddTokensContainer",
    components: { CommonButton },
    setup() {
      const formData = reactive({
        radioValue: {id: '', duration: '', percent: NaN},
        packetValue: {id: '', price: '', count: NaN},
        walletAddress: '0x44010123242112414qeq28d',
        isWalletAddress: true,
      });

      const plans = [
        {
          id: '1',
          duration: '1 год',
          percent: 12,
        },
        {
          id: '2',
          duration: '3 года',
          percent: 18,
        },
        {
          id: '3',
          duration: '5 лет',
          percent: 24,
        },
      ];

      const packets = [
        {
          id: '1',
          price: '5 000 DXA',
          count: 0,
        },
        {
          id: '2',
          price: '10 000 DXA',
          count: 0,
        },
        {
          id: '3',
          price: '100 000 DXA',
          count: 2,
        },
        {
          id: '4',
          price: '500 000 DXA',
          count: 1,
        },
        {
          id: '5',
          price: '1 000 000 DXA',
          count: 0,
        },
      ];

      const contractsToCollect = [
        {
          id: '1',
          duration: '3 года',
          count: 1,
          to: '24.10.2023',
          price: '10 000 DXA',
          available: '8 000 DXA',
        },
        {
          id: '2',
          duration: '3 года',
          count: 1,
          to: '24.10.2023',
          price: '10 000 DXA',
          available: '8 000 DXA',
        },
      ];

      const truncateAddress = (text: String) => {
        return text.slice(0, 7) + '...' + text.slice(text.length - 3);
      };

      const truncatedAddress = computed(() => truncateAddress(formData.walletAddress))

      return {
        plans,
        formData,
        truncatedAddress,
        packets,
        contractsToCollect,
      }
    },
})
</script>

<style lang="stylus" scoped>
.contractsToCollect {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 45px;
  border: 1px solid rgba(250, 245, 255, 0.2);
  border-radius: 52px;
  margin-bottom: 20px;
  &__gridBlock {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px 27px;
  }
  &__flexBox {
    display: flex;
    align-items: center;
  }
  &__gridTitle {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #F3E7FF;
    opacity: .6;
    margin-right: 9px;
  }
  &__gridItem {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: $colorBrand;
  }
  &__availableTitle {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: $colorPurple;
    margin-bottom: 5px;
  }
  &__available {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: $colorPurple;
  }
  &__button {
    margin-left: 20px;
  }
}
.addTokensContainer {
  width: 100%;
  position: relative;
  padding-top: 156px;
  background: transparent;
  &__stackingBox {
    position: relative;
    max-width: 1222px;
    margin: auto;
    z-index: 2;
  }
  &__coinIcon {
    position: absolute;
    left: 100%;
    top: 30px;
  }
  &__titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    color: $colorFontBase;
    z-index: 2;
  }
  &__secondTitle {
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    color: $colorBrand;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  &__walletAddressBox {
    padding: 16px 24px;
    border: 1px solid rgba(250, 245, 255, 0.2);
    border-radius: 32px;
    cursor: pointer;
    user-select: none;
    &:hover {
      background: $colorGradientForButton;
    }
  }
  &__walletAddress {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: $colorBrand;
  }
  &__arrowBottom {
    width: 8px;
    height: 6px;
  }
  &__mainBox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__choosePackets {
    border: 1px solid rgba(250, 245, 255, 0.2);
    border-radius: 52px;
  }
  &__choosePacketsNone {
    width: 100%;
    height: 100%;
    padding: 46px 28px;
    text-align: center;
  }
  &__choosePacketsNoneText {
    max-width: 290px;
    margin: auto;
    margin-bottom: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: $colorPurple;
  }
  &__button {
    padding: 20px 32px !important
  }
  &__choosePacketsBox {
    padding: 20px;
  }
  &__choosePacketsTitle {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: $colorPurple;
    text-align: center;
  }
  &__flexBox {
    display: flex;
    text-align: center;
    margin-top: 20px;
  }
  &__packetsTitle {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: $colorSecondTitle;
    opacity: 0.8;
  }
  &__packetsInfo1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: $colorBrand;
  }
  &__packetsInfo2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: $colorFontBase;
  }
  &__packetLabel {
    position: absolute;
    left: calc(50% - 11.5px);
    top: 3.5px;
    width: 23px;
    height: 23px;
    border: 2px solid #BF81FF;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    &:after {
      content: '';
      width: 15px;
      height: 15px;
      position: absolute;
      top: 2px;
      left: calc(50% - 7.5px);
      background: linear-gradient(90deg, #7C1DD3 2.02%, #912EEF 49.93%, #EE40FF 96.86%);
      border-radius: 10px;
      display: none;
    }
    &:hover {
      &:after {
        display: block;
        opacity: .4;
      }
    }
  }
  &__packetInput {
    display: none;
    &:checked + div .addTokensContainer__packetLabel {
      &:after {
        display: block;
        opacity: 1;
      }
    }
  }
  &__disableCheckbox {
    opacity: .2;
    cursor: default;
    &:hover {
      &:after {
        display: none;
      }
    }
  }
  &__choosePlan {
    padding: 20px;
    border: 1px solid rgba(250, 245, 255, 0.2);
    border-radius: 52px;
    text-align: center;
  }
  &__choosePlanTitle {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: $colorPurple;
    margin: 0;
    margin-bottom: 20px;
  }
  &__inputsBox {
    display: flex;
    align-items: center;
  }
  &__inputBoxItem {
    &:not(:last-child) {
      margin-right: 19px;
    }
  }
  &__mainBox {
    display flex;
  }
  &__label {
    width: 230px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid $colorPurple;
    border-radius: 32px;
    cursor: pointer;
    user-select: none;
    &:hover {
      background: linear-gradient(180deg, rgba(238, 64, 255, 0.2) 0%, rgba(145, 46, 239, 0.2) 50.52%, rgba(124, 29, 211, 0.2) 100%);
    }
  }
  &__input {
    display: none;
    &:checked + div .addTokensContainer__label, {
      background: linear-gradient(0deg, #7C1DD3 0%, #912EEF 50.52%, #EE40FF 100%);
      cursor: default;
    }
  }
  &__icon {
    max-width: 84px;
    height: 52px;
  }
  &__duration {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: $colorBrand;
  }
  &__percent {
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    background: linear-gradient(89.99deg, #BF81FF 1.88%, #D17558 51.37%, #F84FE7 97.86%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__backgroundImg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: -15px;
    z-index: -1;
  }
  &__fade {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  &__coinTopStacking {
    position: absolute;
    bottom: 0;
    left: 35px;
  }
}
.yourChoice {
  &__titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    margin: 0;
    color: $colorBase;
    opacity: .4;
  }
  &__line {
    height: 1px;
    opacity: 0.2;
    background: $colorBase;
    width: 88%;
  }
  &__mainBlock {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__stackingInfo {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 5px 32px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }
  &__stackingInfoTitle {
    color: $colorBase;
    opacity: .4;
  }
  &__stackingInfoNoneChoice {
    color: $colorBase;
    opacity: .4;
  }
  &__stackingInfoChoice {
    opacity: 1;
  }
}
.flexBoxElem1 {
  width: 200px;
  text-align: left;
}
.flexBoxElem2 {
  width: 90px;
}
.flexBoxElem3 {
  width: 85px;
}
</style>
