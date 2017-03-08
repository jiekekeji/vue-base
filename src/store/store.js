/**
 * Created by Administrator on 2017/1/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    canHbd: false,
  },
  mutations: {
    setCanHbd(state, canHbd){
      state.canHbd = canHbd;
    },
  },
  actions: {}
})


export default store;
