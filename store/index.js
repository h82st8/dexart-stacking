import { isEmpty } from 'rambda'
import { FULFILLED, INIT, PENDING, REJECTED } from '~/lib/constants'

const initState = {
  packetsOfDxaTokensData: [],
  packetsOfDxaTokensState: INIT,

  country: '',
  countryState: INIT
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
      dxaPrice: packet.amount,
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
  }
}

export const actions = {
  async fetchPacketsList({ commit, state }) {
    if (state.packetsOfDxaTokensState === PENDING) {
      return
    }

    // TODO: hack
    await this.$axios.$get('https://ipapi.co/json/')
    try {
      commit('SET_PACKETS_STATE', { state: PENDING })

      // const response = await this.$axios.$get('/api/packages');

      const response = {
        data: {
          data: [
            {
              id: 1,
              price: 5,
              amount: 5000,
              bonus_rate: '0.0%',
              bonus: 0
            },
            {
              id: 2,
              price: 50,
              amount: 50000,
              bonus_rate: '2.0%',
              bonus: 1000
            },
            {
              id: 3,
              price: 100,
              amount: 100000,
              bonus_rate: '2.5%',
              bonus: 2500
            },
            {
              id: 4,
              price: 500,
              amount: 500000,
              bonus_rate: '3.0%',
              bonus: 15000
            },
            {
              id: 5,
              price: 1000,
              amount: 1000000,
              bonus_rate: '3.5%',
              bonus: 35000
            }
          ]
        }
      }

      if (response.data.data) {
        commit('SET_PACKETS_STATE', {
          state: FULFILLED,
          data: response.data.data
        })
      } else {
        commit('SET_PACKETS_STATE', { state: REJECTED })
      }
    } catch (e) {
      commit('SET_PACKETS_STATE', { state: REJECTED })
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
