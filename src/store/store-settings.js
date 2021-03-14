import { LocalStorage } from 'quasar'

const state = {
  settings: {
    IsDarkMode: false
  }
}

const mutations = {
  setIsDarkMode( state , value) {
    state.settings.IsDarkMode = value
  }, 
  setSettings( state, settings) {
    Object.assign(state.settings, settings)
  }

}

const actions = {
  setIsDarkMode( { commit , dispatch}, value) {
    commit('setIsDarkMode', value);
    dispatch('saveSettings');


  },
  saveSettings({state}) {
    LocalStorage.set('settings', state.settings)
  },
  getSettings({commit}) {
    let settings = LocalStorage.getItem('settings')
    if(settings) {
      commit('setSettings', settings)
    }
    
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