<template>
  <div>
    <h4>找到匹配<span class="keyword_text">{{keyword}}</span>的结果共<span class="keyword_text">{{searchLength}}</span>条</h4>
    <ul class="article_box">
      <li
        @click="toDetail(article._id)"
        v-for="(article,index) in searchLists"
        :key="index"
      >
        <div class="mini-article__cover">
          <img
            itemprop="image"
            :src="article.articleImgurl"
            :alt="article.articleName"
            @error="imgError(article)"
          >
          <div
            itemprop="datePublished"
            content
            class="mini-article__date"
          >
            <span class="date__day">{{article.createTime}}</span>
          </div>
        </div>
        <div class="mini-article__info">
          <h3
            itemprop="name"
            class="mini-article__title"
          >
            <a :title="article.articleName">{{article.articleName}}</a>
          </h3>
          <a :title="article.articleDesc">
            <p
              itemprop="articleSection"
              class="min-article__desc"
            >{{article.articleDesc}}</p>
            <p class="w-Read">
              <span>阅读全文&gt;</span>
            </p>
          </a>
          <div class="min-article__tags">
            <i class="el-icon-bell"></i>
            <ul class="tags__list clearfix">
              <li
                class="tags__item"
                v-for="(tag,index) in article.tags"
                :key="index"
              >
                <a href="javascript:;">{{tag}}</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import url from "@/api/api.config.js";
export default {
  data() {
    return {
      keyword: "",
      searchLists: [],
      searchLength: 0
    };
  },
  created() {
    let k = this.$route.params.keyword;
    if (k) {
      sessionStorage.setItem("keyword", k);
    }
    this.keyword = sessionStorage.getItem("keyword");
    console.log(this.keyword);
    this.getSearchArticle(this.keyword);
  },
  methods: {
    getSearchArticle(keyword) {
      this.$axios({
        url: url.searchArticle,
        method: "post",
        data: { keyword: keyword }
      })
        .then(response => {
          if (response.data.code == 200 && response.data.message) {
            console.log(response.data.message);
            this.searchLists = response.data.message;
            this.searchLength = this.searchLists.length;
          } else {
            console.log("获取数据失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    toDetail(id) {
      this.$router.push({ name: "articledetail", params: { id: id } });
    }
  }
};
</script>

<style scoped>
.keyword_text {
  color: #409eff;
}
</style>

