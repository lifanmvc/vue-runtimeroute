import Vue from 'vue'
import Vuex from 'vuex'

import runtimeroute from './module/runtimeroute'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    runtimeroute
  }
})
