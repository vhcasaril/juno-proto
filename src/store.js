import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SEARCH_DETAILS: ""
  },
  getters: {
    GET_SEARCH_DETAILS: state => state.SEARCH_DETAILS
  },
  mutations: {
    SET_SEARCH_DETAILS(state, data) {
      state.SEARCH_DETAILS = data;
    }
  },
  actions: {
    setDetailsOfSearch({ commit }, data) {
      commit("setDetailsOfSearch", data);
    }
  }
});
