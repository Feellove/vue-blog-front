<template>
  <div>
    <ul class="article_box">
      <li @click="toDetail(article._id)" v-for="(article,index) in articleLists" :key="index">
        <div class="mini-article__cover">
          <img itemprop="image" src="http://img.2019w.cn/away1.jpg" alt="姑娘去远方">
          <div itemprop="datePublished" content class="mini-article__date">
            <span class="date__day">13</span>
            <span class="date__month">二月</span>
          </div>
        </div>
        <div class="mini-article__info">
          <h3 itemprop="name" class="mini-article__title">
            <a
              target="_blank"
              itemprop="url"
              href="/story/goFarAway.html"
              title="姑娘去远方"
            >{{article.articleName}}</a>
          </h3>
          <a target="_blank" itemprop="url" href="/story/goFarAway.html" title="姑娘去远方">
            <p
              itemprop="articleSection"
              class="min-article__desc"
            >姑娘擦去忧伤与彷徨，你的年华山高水长，穿上舞鞋，甩着肩膀，哼着你喜欢的曲子边唱边跳，去你想去的远方</p>
            <p class="w-Read">
              <span>阅读全文&gt;</span>
            </p>
          </a>
          <div class="min-article__tags">
            <i class="iconfont icon-tab"></i>
            <ul class="tags__list clearfix">
              <li class="tags__item">
                <a target="_blank" href="/tags/distance/">远方</a>
              </li>
              <li class="tags__item">
                <a target="_blank" href="/tags/life/">生活</a>
              </li>
            </ul>
          </div>
        </div>
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
                "YYYY-MM-DD HH:mm:ss"
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
  margin-right: 9px;
  margin-top: 30px;
}
.article_box > li:hover {
  box-shadow: 0 0 26px rgba(0, 0, 0, 0.6);
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
  color: #04ac71;
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
