<template>
  <div>
    <el-carousel
      :interval="4000"
      type="card"
      height="260px"
    >
      <el-carousel-item
        v-for="item in 6"
        :key="item"
      >
        <img
          src="../../../static/img/blog-bg.jpg"
          alt=""
        >
        <h3>{{item}}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="content_box">
      <el-card
        class="box-card"
        style="flex:1;margin-right: 20px;"
      >
        <h3 class="article_classes">前端</h3>
        <ul class="article_box">
          <li
            @click="toDetail(article._id)"
            v-for="(article,index) in articleLists"
            :key="index"
          >
            <div class="mini-article__cover">
              <img
                itemprop="image"
                :src="article.articleImgurl"
                alt="姑娘去远方"
              >
              <div
                itemprop="datePublished"
                content
                class="mini-article__date"
              >
                <span class="date__day">{{article.createTime}}</span>
                <!-- <span class="date__month">二月</span> -->
              </div>
            </div>
            <div class="mini-article__info">
              <h3
                itemprop="name"
                class="mini-article__title"
              >
                <a
                  target="_blank"
                  itemprop="url"
                  href="/story/goFarAway.html"
                  title="姑娘去远方"
                >{{article.articleName}}</a>
              </h3>
              <a
                target="_blank"
                itemprop="url"
                href="/story/goFarAway.html"
                title="姑娘去远方"
              >
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
                  <li class="tags__item">
                    <a
                      target="_blank"
                      href="/tags/distance/"
                    >远方</a>
                  </li>
                  <li class="tags__item">
                    <a
                      target="_blank"
                      href="/tags/life/"
                    >生活</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </el-card>
      <div style="width:280px">
        <el-card class="box-card">
          <h3 class="block__title">最新文章</h3>
          <ul class="block-list latest-post-list">
            <li class="latest-post-item">
              <a
                target="_blank"
                href="/technology/typeScript.html"
                title="TypeScript类型"
              >
                <div class="item__cover">
                  <img
                    src="https://note.youdao.com/yws/api/personal/file/WEB73c4e2c8d530fbc23f28558f99b4c075?method=download&amp;shareKey=7cb1c30b5f968b148541a9193f89211f"
                    alt="TypeScript类型"
                  >
                </div>
                <div class="item__info">
                  <h3 class="item__title">TypeScript类型</h3>
                  <span class="item__text">2019-02-28</span>
                </div>
              </a>
            </li>
            <li class="latest-post-item">
              <a
                target="_blank"
                href="/story/warm.html"
                title="愿所有人的未来都温暖"
              >
                <div class="item__cover">
                  <img
                    src="http://img.2019w.cn/trey-trimble-by-trey-trimble-synth-retrowave-synthwave-new-r.jpg"
                    alt="愿所有人的未来都温暖"
                  >
                </div>
                <div class="item__info">
                  <h3 class="item__title">愿所有人的未来都温暖</h3>
                  <span class="item__text">2019-02-13</span>
                </div>
              </a>
            </li>
            <li class="latest-post-item">
              <a
                target="_blank"
                href="/story/goFarAway.html"
                title="姑娘去远方"
              >
                <div class="item__cover">
                  <img
                    src="http://img.2019w.cn/away1.jpg"
                    alt="姑娘去远方"
                  >
                </div>
                <div class="item__info">
                  <h3 class="item__title">姑娘去远方</h3>
                  <span class="item__text">2019-02-13</span>
                </div>
              </a>
            </li>
            <li class="latest-post-item">
              <a
                target="_blank"
                href="/story/goFarAway.html"
                title="姑娘去远方"
              >
                <div class="item__cover">
                  <img
                    src="http://img.2019w.cn/away1.jpg"
                    alt="姑娘去远方"
                  >
                </div>
                <div class="item__info">
                  <h3 class="item__title">姑娘去远方</h3>
                  <span class="item__text">2019-02-13</span>
                </div>
              </a>
            </li>
          </ul>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import url from "@/api.config.js";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default {
  data() {
    return {
      articleLists: [],
      total: 0
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: "articledetail", params: { id: id } });
    },
    getArticleList() {
      this.$axios({
        url: url.getArticleList,
        method: "post",
        data: { currentPage: this.currentPage, pageSize: this.pageSize }
      })
        .then(response => {
          if (response.data.code == 200 && response.data.message) {
            this.articleLists = response.data.message.data;
            this.articleLists.forEach((v, k) => {
              this.articleLists[k].createTime = moment(v.createTime).format(
                "YYYY MM.DD"
              );
            });
            console.log(this.articleLists);
            this.total = response.data.message.total;
          } else {
            console.log("获取数据失败");
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
.item__cover {
  position: relative;
  display: block;
  width: 80px;
  height: 60px;
  overflow: hidden;
}
.item__cover > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  height: 100%;
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
  width: calc(100% - 80px);
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
.article_classes{
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
.article_box {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.article_box > li {
  width: 290px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;
  line-height: 1.4;
  border-radius: 8px;
  margin: 16px 9px 12px 0;
}
.article_box > li:hover {
  box-shadow: 0 0 26px rgba(0, 0, 0, 0.6);
}
.el-carousel__item img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}

.mini-article__cover {
  position: relative;
  overflow: hidden;
  padding: 10px 10px 0 10px;
  border-radius: 8px;
  height: 160px;
}
.mini-article__cover:hover img {
  transform: scale(1.2);
  -o-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
}
.mini-article__cover > img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.4s linear;
  -webkit-transition: transform 0.4s linear;
  -o-transition: transform 0.4s linear;
  -moz-transition: transform 0.4s linear;
  -ms-transition: transform 0.4s linear;
}
.mini-article__date {
  position: absolute;
  top: 10px;
  right: 10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  text-align: center;
  background-color: rgba(64, 84, 90, 0.7);
  line-height: 1;
  font-size: 14px
}
.mini-article__info {
  padding: 15px;
}
.min-article__desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 24px;
  height: 52px;
  color: #999;
  font-size: 12px;
  margin: 10px 0;
}
.mini-article__title {
  font-size: 16px;
  margin: 0;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mini-article__title > a {
  font-size: inherit;
  text-decoration: none;
  transition: color 0.3s;
  color: #333;
  font-weight: 600;
}
.w-Read {
  font-size: 12px;
  color: #409eff;
  margin: 12px 0;
}
.page__mini-article {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;
  line-height: 1.4;
  border-radius: 8px;
}

.page__mini-article:hover {
  box-shadow: 0 0 26px rgba(0, 0, 0, 0.6);
}

.page__mini-article:hover .mini-article__cover > a {
  transform: translate(-50%, -50%) rotateX(180deg) rotateZ(-360deg) scale(1);
  opacity: 1;
}
.sidebar__block {
  position: relative;
  display: block;
  width: 100%;
}
.min-article__tags > i {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
  color: #409eff;
}
.min-article__tags .tags__list {
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: middle;
}
.min-article__tags .tags__item {
  float: left;
}
.min-article__tags .tags__item + .tags__item::before {
  content: ", ";
}
.min-article__tags .tags__item > a {
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s;
  color: #666;
}
.min-article__tags .tags__item > a:hover {
  color: #409eff;
}
.latest-post-item .item__title:hover {
  color: #409eff;
}
</style>
