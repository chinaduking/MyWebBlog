module.exports = {

	getDraftList:function(that){

		let options = {
		    params: {
		        	
		    }
		}

		return Get('api/getposts',options,that);
	},

	createToken:function(username,password,that){	
		   
	    let options = {
		    params: {
		    	"username": username,
		    	"password": password,
		    }
		}

	    return Post('api/login',options,that);
	},

	delPost:function(index,that){
		//console.log(index);
		let options = {
		    params: {
		    	"index": index,
		    }
		}

		return Post('api/delpost',options,that);
	},

	addPost:function(article,that){
		//console.log(article);
		let options = {
		    params: {
		    	"article": article,
		    }
		}

		return Post('api/addpost',options,that);
	},

	updataPost:function(index,article,that){
		//console.log(article);
		let options = {
		    params: {
		    	"index": index,
		    	"article": article,
		    }
		}
		console.log(options);
		return Post('api/updatapost',options,that);
	},
}



//POST请求
function Post(api,options,that){
	
    let successCallback =(res) => {
    	return res;
	}
	let errorCallback = (res)=> {
		return res;
	}

	return that.$http.post(api,options).then(successCallback, errorCallback);
}

//Get
function Get(api,options,that){

    let successCallback =(res) => {
    	return res;
	}
	let errorCallback = (res)=> {
		return res;
	}

	return that.$http.get(api,options).then(successCallback, errorCallback);
}