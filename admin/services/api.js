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
}



//POST请求
function Post(api,options,that){
    let successCallback =(res) => {
    	console.log(res);
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
    	console.log(res);
    	return res;
	}
	let errorCallback = (res)=> {
		return res;
	}

	return that.$http.get(api,options).then(successCallback, errorCallback);
}