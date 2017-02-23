import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

//全局数据
const state = {
  token: null,
	PostList:[],
	currentPostIndex:0,
	curTitle:null,
	curContent:null,
  curTime:null,
  postSaved:true,
  isNewPost:false,
  showEdit:false,
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})