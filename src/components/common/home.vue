<template>
  <el-container>
    <el-header>
      <el-row
        type="flex"
        class="row-bg pc_header"
        justify="center"
      >
        <el-col
          :xs="7"
          :sm="7"
          :md="7"
          :lg="7"
          :xl="7"
        >
          <a
            class="page__logo"
            href="/"
            title="Feelman"
            alt="Feelman"
          >
            <img
              src="../../../static/img/logo.png"
              alt="Feelman"
            >
          </a>
        </el-col>
        <el-col
          :xs="10"
          :sm="10"
          :md="10"
          :lg="10"
          :xl="10"
        >
          <el-menu
            :default-active="active"
            background-color="#333"
            text-color="#75797c"
            active-text-color="#fff"
            router
            mode="horizontal"
          >
            <el-menu-item index="/article">
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/auther">
              <span slot="title">关于博主</span>
            </el-menu-item>
            <el-menu-item index="/message">
              <span slot="title">留言</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col
          :xs="7"
          :sm="7"
          :md="7"
          :lg="7"
          :xl="7"
        >
          <div>
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="searchKeyword"
              @keyup.enter.native="search"
            ></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        class="row-bg wap_header"
        justify="center"
      >
        <el-col
          :xs="18"
          :sm="18"
          :md="18"
          :lg="18"
          :xl="18"
        >
          <div>
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="searchKeyword"
              @keyup.enter.native="search"
            ></el-input>
          </div>
        </el-col>
        <el-col
          :xs="6"
          :sm="6"
          :md="6"
          :lg="6"
          :xl="6"
          style="text-align:center"
        >
          <div class="h_menu"><span @click="toggleStatus"><i class="el-icon-menu"></i></span></div>
          <el-menu
            default-active="/article"
            background-color="#333"
            text-color="#75797c"
            active-text-color="#fff"
            router
            v-show="status"
          >
            <el-menu-item index="/article">
              <span
                slot="title"
                @click="toggleStatus"
              >首页</span>
            </el-menu-item>
            <el-menu-item index="/auther">
              <span
                slot="title"
                @click="toggleStatus"
              >关于博主</span>
            </el-menu-item>
            <el-menu-item index="/message">
              <span
                slot="title"
                @click="toggleStatus"
              >留言</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <div class="w-nav">
      <ul>
        <li
          v-for="(item,index) in classes"
          :key="index"
        >
          <a
            href="#"
            :title="item.classesName"
          >{{item.classesName}}</a>
        </li>
      </ul>
    </div>
    <el-main>
      <!-- <keep-alive> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
    </el-main>
    <el-footer>
      <div class="page__container footer__container">
        <p class="footer__copyright">
          <span style="color:#69747a">
            本站服务器由
            <a
              style="color:#999;"
              target="_blank"
              href="https://github.com/Feellove/vue-blog-front.git"
              title="Feellove有限公司"
            >Feellove有限公司</a> 提供。
          </span>
          <span
            id="busuanzi_container_site_pv"
            style="color: rgb(105, 116, 122); display: inline;"
          >
            本站总访问量
            <span
              style="color:#999;"
              id="busuanzi_value_site_pv"
            >13013</span> 次--
          </span>
          <span
            id="busuanzi_container_site_uv"
            style="color: rgb(105, 116, 122); display: inline;"
          >
            您是本站第
            <span
              style="color:#999;"
              id="busuanzi_value_site_uv"
            >4347</span> 个小伙伴
          </span>
        </p>
      </div>
    </el-footer>
    <music></music>
    <vm-back-top :bottom="100"></vm-back-top>
  </el-container>
</template>

<script>
import url from "@/api/api.config.js";
import music from "@/components/common/music.vue";
export default {
  components: { music },
  data() {
    return {
      searchKeyword: "",
      classes: [],
      searchLists: [],
      active: "",
      status: false
    };
  },
  created() {
    this.getClasses();
    this.getActive();
  },
  methods: {
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
    },
    toggleStatus() {
      if (this.status) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
    getActive() {
      let matched = this.$route.matched.filter(item => item.name);
      this.active = matched[0].path;
    },
    search() {
      this.$router.push({
        name: "searchContent",
        params: { keyword: this.searchKeyword }
      });
    }
  },
  watch: {
    $route() {
      this.getActive();
    }
  }
};
</script>

<style>
.el-header {
  background-color: #333;
  color: #333;
  line-height: 56px;
  font-size: 20px;
  font-weight: 600;
  height: 60px;
  padding: 0 10px;
  -webkit-box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}
.el-card__body {
  padding: 0;
}
.el-carousel__container {
  margin: 10px 0;
}
.h_menu {
  height: 60px;
}
.h_menu > span {
  cursor: pointer;
}
.h_menu > span > i {
  font-size: 28px;
  color: #fff;
  vertical-align: middle;
}
.el-carousel__item {
  border-radius: 12px;
  border: 1px solid #efefef;
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
}
.el-carousel__button {
  background-color: #409eff !important;
  height: 8px !important;
}
.w-nav {
  background: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 99;
  position: fixed;
  top: 60px;
  left: 0px;
  right: 0px;
}
.w-nav > ul {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 20px 10px;
}
.w-nav ul li {
  float: left;
  list-style: none;
  padding: 0 10px;
  position: relative;
  white-space: nowrap;
}
.w-nav ul li a {
  font-size: 14px;
  letter-spacing: 2px;
  color: #666;
  padding: 0 15px 0 5px;
}
.w-nav ul li a::after {
  position: absolute;
  right: 0;
  content: "/";
  color: #999;
  top: 2px;
}
.w-nav ul li:last-child a::after {
  content: "";
}
.el-menu {
  border: none !important;
  width: 100% !important;
}

.el-main {
  padding: 140px 0px 20px;
  margin: 0 auto;
  width: 100%;
  min-height: 895px;
}
.el-footer {
  height: auto !important;
}
.pc_header {
  display: none;
}
.wap_header {
  display: block;
}
.el-input--prefix .el-input__inner {
  border-radius: 22px;
}
.el-menu-item{
  padding:0 !important;
}
@media screen and (min-width: 980px) {
  .el-main {
    width: 970px;
  }
  .el-menu-item{
    padding:0 20px !important;
  }
  .el-header {
    padding: 0 40px;
  }
  .pc_header {
    display: block;
  }
  .wap_header {
    display: none;
  }
}
@media screen and (min-width: 1280px) {
  .el-main {
    width: 1280px;
  }
}
.page__logo > img {
  height: 50px;
}

.el-input__icon {
  font-size: 20px;
}
.el-footer {
  display: block;
  background-color: #2d383e;
  color: #fff;
  padding: 10px 0;
}
.footer__container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.page__container {
  -ms-flex: 1;
  flex: 1;
  position: relative;
  margin: 0 auto;
  padding: 8px 15px;
}
.footer__copyright {
  margin: 0;
  font-size: 12px;
  text-align: center;
}
.footer__social-network {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 24px;
  line-height: 1.2;
}
.footer__social-network .social-network__item {
  float: left;
  transition: transform 0.3s;
}
.footer__bottom a {
  font-size: inherit;
  text-decoration: none;
  transition: color 0.3s;
  color: #fff;
}
.right_card {
  margin-bottom: 20px;
  padding: 20px;
}
.left_card {
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px 0 20px 20px;
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
  cursor: pointer;
}
.carousel_box {
  display: block;
}
.right_box {
  width: 280px;
}
.article_box > li:hover {
  box-shadow: 0 0 26px rgba(0, 0, 0, 0.6);
}
@media screen and (max-width: 980px) {
  .article_box > li {
    width: 100%;
    margin-right: 0 !important;
  }
  .article_box > li:hover {
    box-shadow: none;
  }
  .right_box {
    width: 100%;
  }
  .carousel_box {
    display: none;
  }
  .el-card.is-always-shadow,
  .el-card.is-hover-shadow:focus,
  .el-card.is-hover-shadow:hover {
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    margin-right: 0 !important;
  }
  .right_card {
    padding: 20px !important;
    background-color: #fff !important;
  }
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
  font-size: 14px;
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
.w-Read:hover {
  opacity: 0.8;
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
