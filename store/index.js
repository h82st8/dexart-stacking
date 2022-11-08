import { isEmpty } from 'rambda'
import {
  FULFILLED,
  INIT,
  PENDING,
  REJECTED,
  STACKING_API_URL
} from '~/lib/constants'

const initState = {
  packetsOfDxaTokensData: [],
  packetsOfDxaTokensState: INIT,

  country: '',
  countryState: INIT,

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
  }
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

  async buyPackets({ commit, state }, payload) {
    if (state.buyState === PENDING) {
      return
    }

    try {
      commit('SET_BUY_STATE', PENDING)

      const headers = {}

      if (state.country === 'Russia') {
        headers['x-price-ru'] = true
      }

      const response = await this.$axios.$post(
        `${STACKING_API_URL}/api/orders`,
        payload,
        { headers }
      )

      if (response.data) {
        openMerchant(response)
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
        commit('SET_COUNTRY', response.country_name)
        commit('SET_COUNTRY_STATE', FULFILLED)
      }
    } catch (e) {
      console.error('ipapi.co', e)
      commit('SET_COUNTRY_STATE', REJECTED)
    }
  }
}
