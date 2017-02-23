import Home from './views/home/index.vue'
import Posts from './views/posts/posts.vue'
import Login from './views/login/login.vue'
import Tag from './views/tag/tag.vue'
import User from './views/user/user.vue'

export default {
    //路由表
    routes:[
    		{ path: '/home', component: Home },
    		{ path: '/posts', component: Posts },
    		{ path: '/login', component: Login },
    		{ path: '/tag', component: Tag },
    		{ path: '/user', component: User },
  			{ path: '/', redirect: '/home'},

    ]
};