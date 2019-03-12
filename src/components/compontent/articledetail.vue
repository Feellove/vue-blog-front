<template>
  <div class="a_box quill-editor editor">
    <h1 class="a_title">{{articleDetails.articleName}}</h1>
    <div class="ql-container ql-snow">
      <div class="a_content  ql-editor" v-html="articleDetails.articleContent">{{articleDetails.articleContent}}</div>
    </div>
  </div>
</template>

<script>
  import url from "@/api.config.js";
  import "quill/dist/quill.core.css";
  import "quill/dist/quill.snow.css";
  import "quill/dist/quill.bubble.css";
  import {quillEditor} from "vue-quill-editor";

  export default {
    components : {
      quillEditor
    },
    data(){
      return {
        articleDetails : '',
        id : ''
      }
    },
    created(){
      this.id = this.$route.params.id;
      if(this.id){
        this.getOneArticle(this.id)
      }else{
        this.$message.error('发生错误');
      }
    },
    methods : {
      getOneArticle(id){
        this.$axios({
          url : url.getOneArticle,
          method : "post",
          data : {_id : id}
        })
          .then(response =>{
            if(response.data.code == 200 && response.data.message){
              console.log(response.data.message);
              this.articleDetails = response.data.message;
              console.log(this.articleDetails);
            } else {
              console.log("获取数据失败");
            }
          })
          .catch(error =>{
            console.log(error);
          });
      },
    },
    computed : {},
  }
</script>

<style scoped>
  .a_box{
    box-shadow:0px 1px 15px 1px rgba(69, 65, 78, 0.08);
    background-color:#fff;
    border-radius:4px;
    height:calc(100% - 40px);
    padding:0 20px 20px;
  }
  .a_title{
    text-align:center;
    font-size:18px;
    line-height:35px;
    padding:10px 0;
    border-bottom:1px solid #ddd;
    font-weight:500;
  }
  .a_content img{
    display:inline-block;
    height:auto;
    max-width:100%;
  }
  .ql-container.ql-snow{
    border:none;
  }
</style>
