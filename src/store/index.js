import { createStore } from 'vuex'

export default createStore({
  state: {
    currentStep: 1
  },
  getters: {
  },
  mutations: {
    SET_CURRENT_STEP (state, step) {
      state.currentStep = step
    }
  },
  actions: {
  },
  modules: {
  }
})
