import service from '../../services/api'
import * as types from './mutation-types'

module.exports = {
  createToken:function(username,password,that){

    return service.createToken(username,password,that).then(res=>{
      if(res.data.success){
        //that.$store.dispatch(types.TOKEN_CREATE, res.data.token);
        that.$store.commit(types.TOKEN_CREATE, res.data.token);
        that.$router.replace('/home');
      }
      
      return res;
    });
  },

  deleteToken:function({ dispatch }){
    dispatch(types.TOKEN_DELETE);
    //之所以这样做是因为这个actions有的时候并不是在组件内调用,而是在拿到http请求时,也就是需要被自己封装的fetch函数给调用
    //所以这个时候,this并不能拿到vm
    router.go('/login')
  }
}
