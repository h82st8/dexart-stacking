import { isEmpty } from 'rambda'
import {
  FULFILLED,
  INIT,
  PENDING,
  REJECTED,
  STACKING_API_URL,
  RATES_API_BASE_URL,
} from '~/lib/constants'
import referral from '~/lib/LS/referral'

const initState = {
  packetsOfDxaTokensData: [],
  packetsOfDxaTokensState: INIT,

  country: '',
  countryState: INIT,

  ratesState: INIT,
  rate: 0,

  buyState: INIT
}

const openMerchant = (response) => {
  window.location.assign(response.data.link)
}

export const state = () => ({
  ...initState
})

export const getters = {
  packetsOfDxaTokensData(state) {
    if (
      isEmpty(state.packetsOfDxaTokensData) ||
      !state.packetsOfDxaTokensData
    ) {
      return []
    }

    return state.packetsOfDxaTokensData.map((packet) => ({
      id: packet.id,
      dxaPrice: packet.tokens,
      priceInDollar: packet.price,
      bonuses: packet.bonus,
      percent: String(packet.bonus_rate).replace('%', '')
    }))
  },
  isPaymentBlocked(state) {
    return state.country === 'US' || state.country === 'CN'
  },
  rate(state) {
    return state.rate.data;
  },
}

export const mutations = {
  SET_PACKETS_STATE(state, payload) {
    state.packetsOfDxaTokensState = payload.state

    if (payload.data) {
      state.packetsOfDxaTokensData = payload.data
    }
  },
  SET_COUNTRY(state, value) {
    state.country = value
  },

  SET_COUNTRY_STATE(state, value) {
    state.countryState = value
  },

  SET_RATES_STATE(state, payload) {
    if (payload.data) {
      state.rate = payload
    }
  },

  SET_BUY_STATE(state, value) {
    state.buyState = value
  }
}

export const actions = {
  async fetchPacketsList({ commit, state }) {
    if (state.packetsOfDxaTokensState === PENDING) {
      return
    }

    try {
      commit('SET_PACKETS_STATE', { state: PENDING })

      const response = await this.$axios.$get(
        STACKING_API_URL + '/api/packages'
      )

      if (response.data) {
        commit('SET_PACKETS_STATE', {
          state: FULFILLED,
          data: response.data
        })
      } else {
        commit('SET_PACKETS_STATE', { state: REJECTED })
      }
    } catch (e) {
      commit('SET_PACKETS_STATE', { state: REJECTED })
      console.error(e)
    }
  },

  async buyPackets({ commit, state, getters }, payload) {
    if (getters.isPaymentBlocked) {
      return
    }

    if (state.buyState === PENDING) {
      return
    }

    try {
      commit('SET_BUY_STATE', PENDING)

      const headers = {}

      if (state.country === 'RU') {
        headers['x-price-ru'] = true
      }

      const response = await this.$axios.$post(
        `${STACKING_API_URL}/api/orders`,
        { ...payload, ref: referral.get() },
        { headers }
      )

      if (response.data) {
        // hach for Google Analutics
        setTimeout(() => openMerchant(response), 3000)
      } else {
        commit('SET_BUY_STATE', REJECTED)
      }
    } catch (e) {
      commit('SET_BUY_STATE', REJECTED)
      console.error(e)
    }
  },

  async fetchCountry({ commit }) {
    try {
      commit('SET_COUNTRY_STATE', PENDING)
      const response = await this.$axios.$get('https://ipapi.co/json/')
      if (response) {
        commit('SET_COUNTRY', response.country)
        commit('SET_COUNTRY_STATE', FULFILLED)
      }
    } catch (e) {
      console.error('ipapi.co', e)
      commit('SET_COUNTRY_STATE', REJECTED)
    }
  },

  async getRates({ commit }) {
    try {
      const response = await this.$axios.post(
        `${RATES_API_BASE_URL}/index/rates/dxa/usd`,{ signature: 1 }
      )
      if (response.data) {
        commit('SET_RATES_STATE', {
          state: FULFILLED,
          data: response.data.data.rate,
        })
      } else {
        commit('SET_RATES_STATE', { state: REJECTED })
      }
    } catch (e) {
      commit('SET_RATES_STATE', { state: REJECTED })
      console.error(e)
    }
  }
}
