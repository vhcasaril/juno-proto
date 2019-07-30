import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ITEM_DETAILS: "",
    SEARCH_LIST: []
  },
  getters: {
    GET_ITEM_DETAILS: state => state.ITEM_DETAILS,
    GET_SEARCH_LIST: state => state.SEARCH_LIST
  },
  mutations: {
    SET_ITEM_DETAILS(state, data) {
      state.ITEM_DETAILS = data;
    },
    SET_SEARCH_LIST(state, data) {
      state.SEARCH_LIST = data;
    }
  },
  actions: {
    setDetailsOfItem({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit("SET_ITEM_DETAILS", data);
        resolve();
      });
    },
    setListSearch({ commit }, data) {
      commit("SET_SEARCH_LIST", data);
    }
  }
});
