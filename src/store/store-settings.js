const state = {
  settings: {
    IsDarkMode: false
  }
}

const mutations = {
  setIsDarkMode( state , value) {
    state.settings.IsDarkMode = value
  }
}

const actions = {
  setIsDarkMode( { commit }, value) {
    commit('setIsDarkMode', value)
  }
}

const getters = {
  settings: state => {
    return state.settings
  }
}

export default {
  namespaced: true,
  state,
  mutations, 
  actions, 
  getters
}