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
    fetchCountry({ commit, state }, id) {
      const existingCountry = state.countries.find(country => country.id === id)
      if (existingCountry) {
        commit('SET_COUNTRY', existingCountry)
      } else {
        return EventService.getCountry(id)
          .then(response =>
            commit('SET_COUNTRY', response.data))
          .catch((error) => {
            throw (error)
          }
          )
      }
    },
  },
  modules: {

  }
})
