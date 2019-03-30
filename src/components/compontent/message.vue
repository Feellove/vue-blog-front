<template>
  <div class="message_box">
    <h3 class="message_title">留言板</h3>
    <div>
      <el-input
        type="textarea"
        v-model="commentContent"
        resize="none"
        :autosize="{ minRows:5}"
      ></el-input>
      <el-button
        type="primary"
        class="comment_btn"
        @click="addComment"
      >提交留言</el-button>
    </div>
    <div class="article_comment_title"><span>最新留言</span></div>
    <div
      class="article_comment_list"
    >
      <div
        class="article_comment_li"
        v-for="(comment,index) in commentLists"
        :key="index"
      >
        <div class="article_comment_user">
          <span class="user">
            <img src="http://koss-cs.j-cc.cn/swift/v1/iyong_public/iyong_2620342958146048/file/20190325/1553476134271020371.jpg"></span>
          <span class="user_name">游客{{comment._id}}</span><span class="date">{{comment.commentTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
        </div>
        <div>{{comment.commentContent}}</div>
        <div
          class="article_comment_reply"
          v-if="comment.commentreply!=''"
        >
          <p class="article_comment_replyAdmin">博主回复：</p>{{comment.commentreply}}
        </div>
      </div>
    </div>
    <div v-show="commentLists.length===0">暂时无评论</div>
  </div>
</template>

<script>
import url from "@/api/api.config.js";
export default {
  data() {
    return {
      commentContent: "",
      commentLists: []
    };
  },
  created() {
    this.getCommentLists();
  },
  methods: {
    addComment() {
      if(this.commentContent!==''){
      this.$axios({
        url: url.addMessage,
        method: "post",
        data: {
          commentContent: this.commentContent,
          commentreply: ""
        }
      })
        .then(response => {
          if (response.data.code === 200 && response.data.message) {
            this.getCommentLists();
          } else {
            this.$message({
              showClose: true,
              message: "评论失败",
              type: "error"
            });
          }
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
      }else{
        this.$message({
            showClose: true,
            message: '评论内容不能为空',
            type: "error"
          });
      }
    },
    getCommentLists() {
      this.$axios({
        url: url.getMessage,
        method: "post",
        data: {}
      })
        .then(response => {
          if (response.data.code === 200 && response.data.message) {
            this.commentLists = response.data.message;
          } else {
            this.$message({
              showClose: true,
              message: "加载失败",
              type: "error"
            });
          }
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    }
  },
  // computed: {
  //   commentTime() {
  //     console.log(this.commentLists);
  //     return (this.commentLists.commentTime = moment(
  //       this.commentLists.commentTime
  //     ).format("YYYY-MM-DD HH:mm:ss"));
  //   }
  // }
};
</script>

<style scoped>
.message_box {
  background: #fff;
  padding: 20px;
}
@media screen and (max-width: 768px) {
  .user_name{
   display: inline-block;
    width: 90px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
}
.message_title {
  font-size: 16px;
  display: inline-block;
  padding: 0 20px;
  font-weight: normal;
  color: #fff;
  margin: 0;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  background: #409eff;
  border-radius: 20px;
  -webkit-box-shadow: 0 0 10px #409eff;
  box-shadow: 0 0 10px #409eff;
  margin-bottom: 30px;
}
.comment_btn {
  margin: 20px 0;
  float: right;
}
.article_comment_title {
  border-bottom: 1px solid #ececec;
  margin: 30px 0;
  font-size: 16px;
  clear: both;
}
.article_comment_title span {
  display: inline-block;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-bottom-color: #409eff;
  line-height: 30px;
}
.article_comment_li {
  border-bottom: 1px solid #ececec;
  margin-bottom: 30px;
  padding-bottom: 10px;
  color: #555;
  font-size: 14px;
}
.article_comment_user {
  height: 38px;
  clear: both;
  line-height: 38px;
  position: relative;
  padding-left: 50px;
  margin-bottom: 20px;
}
.article_comment_user span.user {
  position: absolute;
  left: 0;
  display: block;
  width: 37px;
  height: 37px;
  border-radius: 100%;
  overflow: hidden;
}
.article_comment_user span.date {
  position: absolute;
  right: 0;
}
.article_comment_user span img {
  width: 37px;
  height: 37px;
  display: block;
  object-fit: cover;
}
.article_comment_reply {
  color: #f23259;
}
.article_comment_reply .article_comment_replyAdmin {
  margin: 15px 0 5px;
}
</style>
