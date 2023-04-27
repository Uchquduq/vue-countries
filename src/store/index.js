import { createStore } from 'vuex'
import EventService from '../services/EventService'

export default createStore({
  state: {
    countries: [],
    country: {}
  },
  getters: {
    countries(state) {
      state.countries
    },
    country(state) {
      state.country
    }
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries
    },
    SET_COUNTRY(state, country) {
      state.country = country
    },
  },
  actions: {
    fetchCountries({ commit }) {
      return EventService.getCountries()
        .then(response => commit('SET_COUNTRIES', response.data))
        .catch((error) => {
          throw (error)
        })
    },
    fetchCountry({ commit }, id) {
      return EventService.getCountry(id)
        .then(response =>
          commit('SET_COUNTRY', response.data))
        .catch((error) => {
          throw (error)
        }
        )
    },
  },
  modules: {

  }
})
