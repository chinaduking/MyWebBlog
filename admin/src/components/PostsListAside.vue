<template>
	<div class="posts-list-aside">
		<section class="post-list-column">
			<h3 class="page-title"><i class="fui-list-columned iconfont"></i> 文章列表 <i class="iconfont fui-plus icon-add" @click="createPost"></i></h3>

			<div class="post-list">
				<ul class="title-list">
					<li class="post-list-item" v-for="(post,index) in PostList" @click="focus(index)">
						<article class="post-list-content" :class='true'>
							<!--<h4><a href="javascript:;">{{post.title}}</a></h4>
							<h6>{{post.updatedAt}}</h6> -->
							<h4><a href="javascript:;">{{post.title}}</a></h4>
							<h6>{{post.updatedAt}}</h6>
						</article>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>


<style type="text/css">
	.posts-list-aside{margin-left: 70px;border-right: 1px solid #E0E0E0;position: fixed;height: 100%;width: 300px; background-color: #FFF;}
	.post-list-column .page-title{font-size: 24px;}
	.post-list-column .iconfont{font-size: 24px; margin-left: 20px;}
	.post-list-column .icon-add{float: right; margin-right: 20px;}
	.post-list{border-top: 2px solid #9E9E9E; margin-top: 15px;}
	.post-list-content{border-bottom: 1px solid #E0E0E0;padding: 10px 10px;}
	.post-list-content h4 {font-size: 18px;font-weight: 400;padding: 5px 0;font-weight:bold;}
	.post-list-content h6 {font-size: 12px;}

</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				time: '',
			}
		},
		props: ['PostList'],

	    methods:{
	      focus(index){
	      	if(this.$store.state.postSaved){
		      	if(index !== this.$store.state.currentPostIndex){
		          this.$store.dispatch('focusOnPost',index);
		        }
	    	}else{
	    		alert('新博客还没有保存，请先保存');
	    	}
	      },

	      createPost(){
	      	if(this.$store.state.postSaved){
		      	let post = {
		      			title: '请在此处填入新的标题！',
				      	author: 'duking',
				      	time: '',
				      	url: '/posts',
				      	content: '请在此处写入符合markdown格式的博客内容！',
		      	};
		      	//var time = new Date().toLocaleString();

		    	this.$store.dispatch('addPost',post);
	    	}else{
	    		alert('新博客还没有保存，请先保存');
	    	}
	      },
	    },
	}
</script>