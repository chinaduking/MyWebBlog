
var API = {

    getPosts: function getPosts(req,res) {
        res.json({totalPage: 17, Posts: [
            {title:"文章1", author:"duking",time:"2017-1-16",url:"/posts",content:"内容1"},
            {title:"文章2", author:"duking",time:"2017-1-16",url:"/posts",content:"内容2"},
            {title:"文章3", author:"duking",time:"2017-1-16",url:"/posts",content:"内容3"},
            {title:"文章4", author:"duking",time:"2017-1-16",url:"/posts",content:"内容4"},
            {title:"文章5", author:"duking",time:"2017-1-16",url:"/posts",content:"内容5"},
        ]
        });
    },

    Login: function(req,res) {
        username = req.body.params.username,
        password = req.body.params.password;

        if(username == 'wangjin' && password == '6db042d1203dd2873f2abb3a5c0bb3a9')
        {
        	res.json({
        		success: true,
        		token: 123456,
        	})
        }else{
           res.json({
                success: false,
                token:null,
            }) 
        }
    }

}

module.exports =  API;