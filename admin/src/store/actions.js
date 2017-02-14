import * as types from './mutation-types'
import api from '../../services/api.js'


export default {
  	getAllPost({ commit }, that) {
		api.getDraftList(that).then(res=>{
			console.log(res);
			if(res.error == null){
				commit(types.RECEIVE_ALL_POSTS,res.body.Result);
			}else
			{
				console.log('get api err');
			}
		});

  	},

	focusOnPost({ commit }, index){
		commit(types.POST_FOCUS, index);
	},

	addPost({commit},Post){
		commit(types.ADD_POST,Post);
	},

	delPost({commit},index){
		commit(types.DEL_POST,index);
	},
};