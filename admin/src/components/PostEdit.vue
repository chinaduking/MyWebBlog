<template>
	<div class="post-edit-div">
		<section class="container">
			<h2 class="edit-title">后台文章管理页面</h2>
			<div class="post-edit-title">
				<p>文章标题：</p>
				<input type="text" class="form-control" :value="Post.title" v-model='Post.title'></input>
			</div>
			<div class="clearfix">
				<div class="post-tag">
					<i class="fui-tag iconfont"></i>
					<span class="post-tag-title">云标签：功能正在紧急开发中...</span>
				</div>

				<div class="post-btn">
					<button type="button" class="btn  btn-success" @click = "addPost">{{btn_value}}</button>
					<button type="button" class="btn  btn-Warning" @click = "savePost">保存草稿</button>
        			<button type="button" class="btn  btn-danger" @click = "delPost">删除文章</button>
				</div>
			</div>

			<Edit v-bind:Content="Post.content" v-on:listevent='upcontent'></Edit>

		</section>
	</div>
</template>

<style type="text/css">
	.post-edit-div{margin-left: 370px;position: fixed;height: 100%;width: 79%;}
	.edit-title{text-align: center;margin: 20px auto;}
	.post-edit-title{margin: 20px 0px;width: 100%; height: 40px;}
	.post-edit-title p{float: left;width: 10%;text-align: right;line-height: 40px;}
	.post-edit-title input{float: left;width: 80%;}
	.clearfix{margin: 20px 0px;width: 100%; height: 80px; border-top: 1px solid #E0E0E0; border-radius: 8px;border-bottom: 1px solid #E0E0E0; border-radius: 8px;}
	.clearfix .iconfont{line-height: 60px;margin-left: 20px; float: left;}
	.clearfix .post-tag-title{float: left;line-height: 80px;margin-left: 20px;font-size: 18px;color: #F4511E;}
	.clearfix .post-tag-content{float: left; padding-top: 20px;padding-left: 2px;width: 40%;}
	.clearfix .post-btn{line-height: 30px;float: left;margin-top: 20px;padding-left: 100px;}
	.clearfix .post-btn .btn{margin: 0 10px;}
</style>

<script type="text/javascript">
import Edit from './Edit.vue'
import server from '../../services/api'
	export default{
		data(){
			return{
				btn_value: '',
				title: '',
				content:'',
			}
		},

		props: ['Post'],

		watch: {
		    '$store.state.isNewPost': 'upbtnValue',
		    'Post.title': 'PostTitleChange',
		    'Post.content': 'PostContentChange',
		},


		mounted(){
			this.btn_value = '更新文章';
		},

		components:{
	      Edit,
	    },

	    methods:{
	    	delPost(){
	    		var index = this.$store.state.currentPostIndex;
	    		var delindex = this.Post.ID;
	    		var that = this;

	    		if(this.$store.state.postSaved){
	    			server.delPost(delindex,that).then(res=>{
	    				if(res.error == null){
	    					this.$store.dispatch('delPost',index);
	    				}else
	    				{
	    					alert('删除失败，请稍后重试！');
	    				}
	    			})
	    		}else{
					this.$store.dispatch('delPost',index);
				}
	    	},

	    	addPost(){
	    		var index = this.$store.state.currentPostIndex;
	    		var delindex = this.Post.ID;
	    		var that = this;

	    		if(this.$store.state.isNewPost){
	    			server.addPost(this.Post,that).then(res=>{
	    				if(res.error == null){
	    					this.$store.state.postSaved = true;
	    					this.$store.state.isNewPost = false;
	    				}else
	    				{
	    					alert('保存失败，请稍后重试！');
	    				}
	    			})
	    		}else{
	    			server.updataPost(delindex,this.Post,that).then(res=>{
	    				console.log(res);
	    				if(res.error == null){
	    					this.$store.state.postSaved = true;
	    				}else
	    				{
	    					alert('更新失败，请稍后重试！');
	    				}
	    			})
	    		}
	    	},

	    	savePost(){
	    		alert('功能正在开发中。。。。');
	    	},

	    	upbtnValue(){
				if(this.$store.state.isNewPost)
					this.btn_value = '发布文章';
				else
					this.btn_value = '更新文章';	    		
	    	},

	    	PostTitleChange(){
	    		if(this.Post.title!=this.$store.state.curTitle){
		    		//console.log('Title内容更新');
		    		if(this.$store.state.postSaved == true)
		    			this.$store.state.postSaved = false;
	    		}else if(this.Post.content==this.$store.state.curContent)
	    			this.$store.state.postSaved = true;
	    	},

	    	PostContentChange(){
	    		if(this.Post.content!=this.$store.state.curContent){
		    		//console.log('Content内容更新');
		    		if(this.$store.state.postSaved == true)
		    			this.$store.state.postSaved = false;
	    		}else if(this.Post.title==this.$store.state.curTitle)
	    			this.$store.state.postSaved = true;
	    	},

	    	upcontent(recvalue){
	    		//console.log(recvalue);
	    		this.Post.content = recvalue; 
	    	},
		}
	}
</script>