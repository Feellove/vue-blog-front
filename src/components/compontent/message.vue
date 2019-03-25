<template>
  <div class="message_box">
    <h3 class="message_title">留言板</h3>
    <div>
      <el-input
        type="textarea"
        v-model="comment_text"
        resize="none"
        :autosize="{ minRows:5}"
      ></el-input>
      <el-button
        type="primary"
        class="comment_btn"
      >提交评论</el-button>
    </div>
    <div class="article_comment_title"><span>最新评论</span></div>
    <div class="article_comment_list">
      <div class="article_comment_li">
        <div class="article_comment_user"><span class="user"><img src="http://koss-cs.j-cc.cn/swift/v1/iyong_public/iyong_2620342958146048/file/20190325/1553476134271020371.jpg"></span>2Xfvm3zzgB8<span class="date">2019-03-25 09:00:58</span>
        </div>
        <div>不好意思，你不是我想要的</div>
        <div class="article_comment_reply">
          <p class="article_comment_replyAdmin">管理员回复：</p>我知道了
        </div>
      </div>
      <div class="article_comment_li">
        <div class="article_comment_user"><span class="user"><img src="http://koss-cs.j-cc.cn/swift/v1/iyong_public/iyong_2620342958146048/file/20190325/1553476134271020371.jpg"></span>2Xfvm3zzgB8<span class="date">2019-03-25 09:00:58</span>
        </div>
        <div>没有想要的东西吗？</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment_text: ""
    };
  }
};
</script>

<style scoped>
.message_box {
  background: #fff;
  padding: 40px;
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
