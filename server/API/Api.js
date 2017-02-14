var jwt = require('jwt-simple');

var API = {

    getPosts: function getPosts(req,res) {
        req.models.post.find().exec(function(err,result) {
            res.json({Result: result, error: err});
        });
        /*
        res.json({totalPage: 17, Posts: [
            {title:"文章1", author:"duking",time:"2017-1-16",url:"/posts",content:"内容1"},
            {title:"文章2", author:"duking",time:"2017-1-16",url:"/posts",content:"内容2"},
            {title:"文章3", author:"duking",time:"2017-1-16",url:"/posts",content:"内容3"},
            {title:"文章4", author:"duking",time:"2017-1-16",url:"/posts",content:"内容4"},
            {title:"文章5", author:"duking",time:"2017-1-16",url:"/posts",content:"内容5"},
        ]
        });*/
    },

    Login: function(req,res) {
        username = req.body.params.username,
        password = req.body.params.password;
        if(username == 'wangjin' && password == '6db042d1203dd2873f2abb3a5c0bb3a9')
        {
            var token = jwt.encode({
                uid: 1,
                name: 'duking',
                exp:Math.floor(Date.now()/1000) + 24 * 60 * 60//1 hours
            },'duking');

            console.log(token);

        	res.json({
                uid: 1,
                name: 'duking',
        		success: true,
        		token: 123456789,
        	})
        }else{
           res.json({
                success: false,
                token:null,
            }) 
        }
    },

    addPost:function(req,res) {
        var  Post = {
            title:req.body.params.article.title,
            author:req.body.params.article.author,
            url:req.body.params.article.url,
            content:req.body.params.article.content,
        };

        req.models.post.create(Post).exec(function(err,result) {
                            res.json({Result: result, error: err});
        });
    },

    delPost:function(req,res) {
        var index = req.body.params.index;
        req.models.post.destroy(index).exec(function(err,result) {
            res.json({Result: result, error: err});
        });
    },

    upPost:function(req,res){
        var index = req.body.params.index;
        console.log(req.body.params);
        var  Post = {
            title:req.body.params.article.title,
            author:req.body.params.article.author,
            url:req.body.params.article.url,
            content:req.body.params.article.content,
        };
        req.models.post.update(index,Post).exec(function(err,result) {
            res.json({Result: result, error: err});
        });
    }

}

module.exports =  API;