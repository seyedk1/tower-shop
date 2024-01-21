import Vue from 'vue'
import Vuex from 'vuex'

// store
import sample from './sample-store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    flagState: false,
    dialogState: false,
    isMapState: false
  },
  getters: {
    get_flag(state) {
      return state.flagState
    },

    get_dialog(state) {
      return state.dialogState
    },

    get_is_map(state) {
      return state.isMapState
    },
  },
  mutations: {
    set_flag(state, flag) {
      return state.flagState = flag
    },
    set_dialog(state, dialog) {
      return state.dialogState = dialog
    },

    set_is_map(state, isMap) {
      return state.isMapState = isMap
    },
  },
  actions: {
  },
  modules: {
    sample
  }
})
