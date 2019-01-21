import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logedin: false
  },
  mutations: {
    load (state, val) {
      state.logedin = val
    }
  },
  actions: {
  }
})
