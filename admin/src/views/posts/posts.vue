<template>
	<div class="posts-page">
		<posts-list-aside v-bind:PostList="posts"></posts-list-aside>
		<post-edit v-bind:Post="post" v-if="this.$store.state.showEdit"></post-edit>
	</div>
</template>

<script type="text/javascript">
	import PostsListAside from '../../components/PostsListAside.vue'
	import PostEdit from '../../components/PostEdit.vue'

	export default{
		data(){
			return{
				posts:[],
				post:[],
			}
		},

		components:{
	      PostsListAside,
	      PostEdit,
    	},

    	mounted () {
    		this.fetchData();
		},

    	watch: {
		    // 如果路由有变化，会再次执行该方法
		    '$route': 'fetchData',
		    '$store.state.PostList': 'Updata',
		    '$store.state.currentPostIndex': 'getPost',
		},

    	methods: {
	    	fetchData () {
	    		var that = this;
	    		this.$store.dispatch('getAllPost',that);
	    	},

	    	Updata(){
	    		this.posts = this.$store.state.PostList;
	    		if(this.$store.state.PostList.length == 0){
	    			this.$store.state.showEdit = false;
	    			var posttemp = {
	    				title: '请在此处填入新的标题！',
				      	author: 'duking',
				      	time: '',
				      	url: '/posts',
				      	content: '请在此处写入符合markdown格式的博客内容！',
	    			}
	    			this.$store.state.curTitle = posttemp.title;
	    			this.$store.state.curContent = posttemp.content;
	    			this.post = posttemp;
	    		}
	    		else{
	    			this.post = this.$store.state.PostList[this.$store.state.currentPostIndex];
	    			this.$store.state.showEdit = true;
	    		}
	    		console.log(this.post);
	    	},

	    	getPost(){
	    		this.post = this.$store.state.PostList[this.$store.state.currentPostIndex];
	    		//console.log(this.post);
	    	}
	    }
	}
</script>