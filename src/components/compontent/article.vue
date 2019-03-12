<template>
  <div>
    <ul class="article_box">
      <li @click="toDetail(article._id)"  v-for="(article,index) in articleLists" :key="index">
        <img src="../../../static/img/a_1.jpg" alt=""/>
        <p>{{article.articleName}}</p>
        <span class="article_text">{{article.articleClasses}}</span> <span>{{article.createTime}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import url from "@/api.config.js";
  import moment from "moment";
  import "moment/locale/zh-cn";
  moment.locale("zh-cn");
  export default {
    data(){
      return {
        articleLists:[],
        total:0
      };
    },
    created(){
      this.getArticleList();
    },
    methods : {
      toDetail(id){
        this.$router.push({name : 'articledetail', params : {id : id}})
      },
      getArticleList(){
        this.$axios({
          url : url.getArticleList,
          method : "post",
          data : {currentPage : this.currentPage, pageSize : this.pageSize}
        })
          .then(response =>{
            if(response.data.code == 200 && response.data.message){
              this.articleLists = response.data.message.data;
              this.articleLists.forEach((v, k) =>{
                this.articleLists[k].createTime = moment(v.createTime).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
              });
              console.log(this.articleLists);
              this.total = response.data.message.total;
            } else {
              console.log("获取数据失败");
            }
          })
          .catch(error =>{
            console.log(error);
          });
      },
    },
  };
</script>

<style scoped>
  .article_box{
    display:flex;
    display:-webkit-flex;
    flex-wrap:wrap;
  }
  .article_box > li{
    width: 196px;
    height:254px;
    cursor:pointer;
    margin:8px;
    padding:8px;
    border-radius:6px;
    background-color:#fff;
  }
  .article_box > li:hover{
    box-shadow:0px 2px 32px 0px rgba(24, 101, 245, 0.3);
  }
  .article_box > li > img{
    width:196px;
    height:170px;
    display:inline-block;
    object-fit: cover;
  }
  .article_box > li > img:hover{
    transform:scale(1.1);
  }
  .article_box > li > p{
    padding:10px 10px 0;
    font-size:16px;
    color:#505050;
    font-weight:600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .article_box > li > span{
    padding:10px 10px 0;
    font-size:14px;
    color:#b2b2b2;
    display:block;
  }
  .article_box > li > span.article_text{
    color:#a0a9b4;
    font-weight:normal;
    font-size:12px;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    width:176px;
  }
</style>
