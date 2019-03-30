<template>
  <div v-loading.fullscreen.lock="loading">
    <el-carousel
      :interval="4000"
      type="card"
      height="260px"
      v-show="carouselShow"
      class="carousel_box"
    >
      <el-carousel-item
        v-for="(item,index) in articleLists"
        :key="index"
      >
        <img
          :src="item.articleImgurl"
          @error="imgError(item)"
          @click="toDetail(item._id)"
        >
      </el-carousel-item>
    </el-carousel>
    <div class="content_box">
      <div style="flex:1;">
        <el-card
          class="box-card left_card"
          v-for="(c,index) in classes"
          :key="index"
        >
          <h3 class="article_classes">{{c.classesName}}</h3>
          <ul class="article_box">
            <li
              @click="toDetail(article._id)"
              v-for="(article,index) in articleLists"
              :key="index"
              v-if="article.classesId._id === c._id"
            >
              <div class="mini-article__cover">
                <img
                  itemprop="image"
                  :src="article.articleImgurl"
                  @error="imgError(article)"
                >
                <div
                  itemprop="datePublished"
                  content
                  class="mini-article__date"
                >
                  <span class="date__day">{{article.createTime | dateformat('YYYY-MM-DD')}}</span>
                  <!-- <span class="date__month">二月</span> -->
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
        </el-card>
      </div>
      <div class="right_box">
        <el-card class="box-card right_card">
          <h3 class="block__title">最新文章</h3>
          <ul class="block-list latest-post-list">
            <li
              class="latest-post-item"
              v-for="(item,index) in carouselList"
              :key="index"
            >
              <a @click="toDetail(item._id)">
                <div class="item__cover">
                  <img
                    :src="item.articleImgurl"
                    @error="imgError(item)"
                  >
                </div>
                <div class="item__info">
                  <h3 class="item__title">{{item.articleName}}</h3>
                  <span class="item__text">{{item.createTime | dateformat('YYYY-MM-DD')}}</span>
                </div>
              </a>
            </li>
          </ul>
        </el-card>
        <el-card class="box-card right_card">
          <h3 class="block__title">微信打赏</h3>
          <img
            src="../../../static/img/code.jpg"
            alt="赞赏码"
            class="wx_code"
          >
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import url from "@/api/api.config.js";
export default {
  data() {
    return {
      articleLists: [],
      carouselList: [],
      searchLists: "",
      classes: [],
      carouselShow: true,
      articleList: false,
      total: 0,
      loading: true
    };
  },
  beforeCreate() {},
  created() {
    this.getArticleList();
    this.getClasses();
  },
  methods: {
    toDetail(id) {
      console.log(id);
      this.$router.push({ name: "articledetail", params: { id: id } });
    },
    getArticleList() {
      this.$axios({
        url: url.getArticleList,
        method: "post",
        data: {}
      })
        .then(response => {
          if (response.data.code == 200 && response.data.message) {
            this.articleLists = response.data.message.data;
            this.loading = false;
            console.log(this.articleLists);
            // this.articleLists.forEach((v, k) => {
            //   this.articleLists[k].createTime = moment(v.createTime).format(
            //     "YYYY-MM-DD"
            //   );
            // });
            this.carouselList = this.articleLists.slice(0, 5);
            this.total = response.data.message.total;
          } else {
            console.log("获取数据失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getClasses() {
      this.$axios({
        url: url.getClasses,
        method: "post",
        data: {}
      })
        .then(response => {
          if (response.data.code === 200 && response.data.message) {
            this.classes = response.data.message;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.content_box {
  display: flex;
  flex-wrap: wrap;
}
.content_box a {
  cursor: pointer;
}

.wx_code {
  width: 100%;
}
.block__title {
  position: relative;
  color: #242f35;
  font-size: 16px;
  padding-left: 16px;
  margin: 0px auto 20px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
}
.block__title:before {
  content: "";
  display: block;
  position: absolute;
  width: 4px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: #409eff !important;
  background-size: 100%;
}
.item__cover {
  position: relative;
  display: block;
  width: 80px;
  height: 60px;
  overflow: hidden;
}
.item__cover > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.latest-post-item > a {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: #242f35;
}
.latest-post-item .item__info {
  display: block;
  width: calc(100% - 110px);
  padding: 8px 15px;
  line-height: 1.4;
}
.latest-post-item .item__title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.3s;
}
.latest-post-item .item__text {
  font-size: 12px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.latest-post-item + .latest-post-item {
  margin-top: 10px;
}
.article_classes {
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
  box-shadow: 0 0 10px #409eff;
}
</style>
