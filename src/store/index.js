import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

const store = new vuex.Store({
  state: {
    users: []
  },
  getters: {
    USERS(state) {
      return state.users
    }
  },
  mutations: {
    SET_USERS_TO_VUEX: (state,users) => {
      state.users = users
    }
  },
  actions: {
    GET_USERS_FROM_API({commit}) {
      return axios('http://localhost:3000/users', {
        method: 'GET'
      })
      .then ((response) => {
        commit ('SET_USERS_TO_VUEX', response.data)
      })
    }
  },
  modules: {
  }
})

export default store;
