import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stage: 1,
    num: 0,
    openid: ''
  },
  actions: {
    GET_AWARD: ({state}) => {
      return Promise.resolve({data: {status: 'failure'}})
    }
  },
  mutations: {
    SET_STAGE: (state, stage) => {
      state.stage = stage
    },
    SET_NUM: (state, num) => {
      state.num = num
    },
    SET_OPENID: (state, openid) => {
      state.openid = openid
    }
  },
})

export default store
