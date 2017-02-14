import * as types from './mutation-types'

export default {
	[types.RECEIVE_ALL_POSTS](state,postList){
	    if(true){
	    	console.log('store更新完成！');
	      	state.PostList = postList;
	      	state.curTitle = postList[state.currentPostIndex].title;
	    	state.curContent = postList[state.currentPostIndex].content;
	    }
  	},

	[types.POST_FOCUS](state,index){
	    console.log('index更新完成！');
	    state.currentPostIndex = index;
	    state.curTitle = state.PostList[index].title;
	    state.curContent = state.PostList[index].content;
  	},

  	[types.TOKEN_CREATE](state,index){
	    console.log('token更新完成！');
	    state.token = index;
  	},

  	[types.ADD_POST](state,post){
	    console.log('POST ADD 完成！');
	    state.PostList.unshift(post);
	    state.currentPostIndex = 0;
	    state.isNewPost = true;
	    state.postSaved = false;
  	},

  	[types.DEL_POST](state,index){
	    console.log('POST DEL 完成！');
	    state.PostList.splice(state.currentPostIndex,1);
	    state.currentPostIndex = 0;
	    state.postSaved = true;
	    state.isNewPost = false;
  	},

}