const state = {
  isRefresh: true,
  dynamicsRoutes: []
}
const getters = {
  getRefresh (state) {
    return state.isRefresh
  },
  getRoutes (state) {
    const routes = state.dynamicsRoutes.length
      ? state.dynamicsRoutes
      : JSON.parse(sessionStorage.getItem('feifan-dynamicsroutes') || '[]')
    return routes
  }
}
const mutations = {
  NoRefresh (state, payload) {
    state.isRefresh = payload
  },
  NewRoutes (state, payload) {
    const index = state.dynamicsRoutes.findIndex(t => t.name === payload.name)
    if (index === -1) {
      state.dynamicsRoutes.push(payload)
      sessionStorage.setItem(
        'feifan-dynamicsroutes',
        JSON.stringify(state.dynamicsRoutes)
      )
    }
  }
}
const actions = {
  setNoRefresh (context, payload) {
    context.commit('NoRefresh', payload)
  },
  addNewRoutes (context, payload) {
    context.commit('NewRoutes', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
