import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isshowleftnavtitle: true
  },
  mutations: {
    editLeftNavTitleState(state) {
      // 变更状态
      state.isshowleftnavtitle = !state.isshowleftnavtitle
    }
  }
});
 
export default store;