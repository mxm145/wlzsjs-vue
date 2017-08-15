import Vue from 'vue'
import Vuex from 'vuex'
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
      if (state.openid != '') {
        return axios.post('/new/index.php?nova_p=QWNIMFRZbmsxZWlFd0hBa3R0SlY3T003eEQwbnBSYmRGaUVvMm9obGIyaz0@', {openid: state.openid})
      }else{
        return Promise.resolve({data: {status: 'failure'}})
      }
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
