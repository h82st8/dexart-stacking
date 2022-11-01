<template>
  <vue-final-modal
    :value="buyTokensModalIsOpen"
    classes="modal-tokens-container"
    overlay-class="modal-tokens-overlay"
    content-class="modal-tokens-content"
    :click-to-close="true"
    :lock-scroll="false"
    @input="$emit('input', $event)"
  >
    <div class="modalBuyTokens">
      <div class="modalBuyTokens__yourChoice">
        <h3 class="title">
          Ваш выбор:
        </h3>
        <div class="modalBuyTokens__yourChoiceInfoBox">
          <div v-for="(item, i) in filteredPackages" :key="i" class="modalBuyTokens__flexBox">
            <div class="modalBuyTokens__yourChoiceInfoTitle">{{ `Пакет ${dividingIntoDigits(item.dxaPrice)} DXA:` }}</div>
            <div class="modalBuyTokens__yourChoiceInfo">{{ item.count }}</div>
          </div>
          <div class="modalBuyTokens__flexBox">
            <div class="modalBuyTokens__yourChoiceInfoTitle">Всего токенов:</div>
            <div class="modalBuyTokens__yourChoiceInfo">{{ `${dividingIntoDigits(packet.totalTokens)} DXA` }}</div>
          </div>
          <div class="modalBuyTokens__flexBox">
            <div class="modalBuyTokens__yourChoiceInfoTitle modalBuyTokens__bonusTitle">Бонусов:</div>
            <div class="modalBuyTokens__yourChoiceInfo modalBuyTokens__bonusInfo">{{ dividingIntoDigits(packet.bonuses) }}</div>
          </div>
        </div>
      </div>
      <div class="hr" />
      <div class="buttonContainer">
        <div class="buttonContainer__priceBox">
          <h3 class="title">Стоимость:</h3>
          <h3 class="title">{{ `$${dividingIntoDigits(packet.priceInDollar)}` }}</h3>
        </div>
        <div class="buttonContainer__itemBoxWrapper">
          <input type="email" class="buttonContainer__itemBox" placeholder="Ваш email">
        </div>
        <div class="paymentMethodPicker">
          <div :class="['buttonContainer__itemBoxWrapper', {'buttonContainer__itemBoxWrapperOpenList': showDropdown}]">
            <div :class="['buttonContainer__itemBox', 'buttonContainer__paymentMethod', {'buttonContainer__paymentMethodOpenList': showDropdown}]" @click="showDropdown = !showDropdown">
              {{ chosenMethod ? chosenMethod : 'Выберите метод оплаты' }}
              <svg-icon
                v-if="!showDropdown"
                class="buttonContainer__arrow"
                name="arrow-bottom-icon"
              />
              <svg-icon
                v-if="showDropdown"
                class="buttonContainer__arrow"
                name="arrow-top-icon"
              />
            </div>
          </div>
          <div v-if="showDropdown" class="buttonContainer__choosePaymentMethod">
            <div v-for="(item, i) in paymentMethods" :key="i" class="buttonContainer__chosenMethod" @click="changeChosenMethod(item)">{{ item }}</div>
          </div>
        </div>
        <div class="buttonContainer__accessTermsAndConditions">
          <input
            id="termAndConditionCheckbox"
            v-model="acceptTermsAndConditions"
            type="checkbox"
            name="termAndCondition"
            class="buttonContainer__checkbox"
          >
          <div style="position: relative">
            <label for="termAndConditionCheckbox" class="buttonContainer__label">
            </label>
          </div>
          <div class="buttonContainer__textBox">
            <span class='buttonContainer__text'>I have read and agree to the</span> <a href="/docs/TermsAndConditions_26.10.22.pdf" target="_blank" class="buttonContainer__link">Terms & Conditions</a>
          </div>
        </div>
        <CommonButton style="width: 300px;">Купить</CommonButton>
      </div>
    </div>
  </vue-final-modal>
</template>

<script lang="ts">
import { ref, PropType } from 'vue'
import CommonButton from './CommonButton.vue';
import { packetInterface } from '@/interfaces/packagesTypes';

export default {
  name: "ModalBuyTokens",
  components: { CommonButton },
  props: {
    buyTokensModalIsOpen: {
      type: Boolean,
      default: false,
    },
    filteredPackages: {
      type: Array as PropType<packetInterface[]>,
      required: true,
    },
    packet: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const showDropdown = ref<boolean>(false);
    const chosenMethod = ref<string>('');
    const acceptTermsAndConditions = ref<boolean>(false);

    const paymentMethods = [
      'Банковской картой',
      'С криптокошелька',
    ]

    const changeChosenMethod = (method: string) => {
      chosenMethod.value = method;
      showDropdown.value = false;
    }

    const dividingIntoDigits = (count: number | string) => String(count).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

    return {
      showDropdown,
      chosenMethod,
      paymentMethods,
      acceptTermsAndConditions,
      changeChosenMethod,
      dividingIntoDigits,
    };
  },
}
</script>

<style lang="stylus">
.paymentMethodPicker {
  width: 300px;
  height: 63px;
  position: relative;
  margin-bottom: 11px;
  z-index: 1;
}
.hr {
  width: 300px;
  height: 1px;
  background: $colorBrand;
  opacity: .4;
  margin: 30px 0;
}
.title {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: $colorBrand;
  margin-bottom: 7px;
}
.modalBuyTokens {
  max-width: 400px;
  padding: 60px;
  background: #57198A;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset -1px 2px 8px #ECE7FA;
  border-radius: 30px;
  &__yourChoice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__yourChoiceInfoBox {
    width: 300px;
  }
  &__flexBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:first-child) {
      margin-top: 7px;
    }
  }
  &__yourChoiceInfoTitle {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: $colorSecondTitle;
    opacity: .8;
  }
  &__bonusTitle {
    color: #BF81FF;
  }
  &__yourChoiceInfo {
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    color: $colorBrand;
  }
  &__bonusInfo {
    color: #BF81FF;
  }
}
.buttonContainer {
  &__priceBox {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
  &__itemBoxWrapper {
    position: relative;
    background: transparent;
    width: 300px;
    height: 63px;
    margin-bottom: 11px;
    z-index: 10;
    &::before {
      height: 63px;
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 32px; 
      padding: 1px; 
      background: linear-gradient(96.43deg, #ED3FFE 30.37%, #7D1ED4 94.57%);
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
              mask-composite: exclude; 
    }
    &OpenList {
      position: absolute;
      height: 150px;
      &::before {
        height: 150px;
      }
    }
  }
  &__itemBox {
    position: relative;
    top: 1px;
    left: 1px;
    width: 298px;
    height: 63px;
    padding: 20px;
    border: none;
    border-radius: 32px;
    text-align: center;
    background: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: $colorBrand;
    &::placeholder {
      color: $colorBrand;
    }
    &:hover {
      background: linear-gradient(90deg, #7C1DD3 2.02%, #912EEF 49.93%, #EE40FF 96.86%);
    }
  }
  &__paymentMethod {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &OpenList {
      border-radius: 32px 32px 0 0;
      background: linear-gradient(90deg, #7C1DD3 2.02%, #912EEF 49.93%, #EE40FF 96.86%);
    }
  }
  &__arrow {
    width: 8px;
    height: 6px;
    position: relative;
    left: 9px;
  }
  &__choosePaymentMethod {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 64px;
    left: 1px;
    width: 298px
    height: 87px;
    background: #7C1DD3;
    border-radius: 0 0 32px 32px;
  }
  &__chosenMethod {
    cursor: pointer;
    user-select: none;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    &:hover {
      background: #57198A;
      color: $colorBrand;
    }
    &:nth-child(2) {
      border-radius: 0 0 32px 32px;
    }
  }
  &__accessTermsAndConditions {
    z-index: -1;
    margin-bottom: 10px;
  }
  &__label {
    position: absolute;
    left: 17px;
    top: 5px;
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
      left: 2px;
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
  &__checkbox {
    display: none;
    &:checked + div .buttonContainer__label {
      &:after {
        display: block;
        opacity: 1;
      }
    }
  }
  &__textBox {
    width: 205px;
    position: relative;
    left: calc(50% - 102.5px);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
  }
  &__text {
    color: $colorSecondTitle;
    opacity: .6;
  }
  &__link {
    text-decoration: underline;
    color: $colorSecondTitle;
    opacity: .6;
    &:hover {
      text-decoration: underline;
      color: $colorSecondTitle;
      opacity: .4;
    }
  }
}
</style>