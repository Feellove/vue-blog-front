<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" justify="center">
          <a class="page__logo" href="/" title="2019网" alt="2019网">
            <img src="http://img2.2019w.cn/Rieko_logoW.png" alt="2019网">
          </a>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-menu
            default-active="/article"
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
            <el-menu-item index="3">
              <span slot="title">留言</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input5"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <div class="page__container footer__container">
        <p class="footer__copyright">
          <span
            style="color:#69747a"
          >©Rieko © 2018 ,2019w All Rights Reserved.2019网 - 轻阅读 , 看见好时光 苏ICP备17044739号-2</span>
          <br>
          <span style="color:#69747a">
            本站服务器由
            <a
              style="color:#999;"
              target="_blank"
              href="https://www.houzhi.net.cn/#!/main/index"
              title="南京厚知软件有限公司"
            >南京厚知软件有限公司</a> 提供。
          </span>
          <span id="busuanzi_container_site_pv" style="color: rgb(105, 116, 122); display: inline;">
            本站总访问量
            <span style="color:#999;" id="busuanzi_value_site_pv">13013</span> 次--
          </span>
          <span id="busuanzi_container_site_uv" style="color: rgb(105, 116, 122); display: inline;">
            您是本站第
            <span style="color:#999;" id="busuanzi_value_site_uv">4347</span> 个小伙伴
          </span>
        </p>
        <ul class="footer__social-network clearfix">
          <li class="social-network__item">
            <a href="https://github.com/showcc" target="_blank" title="github">
              <i class="iconfont icon-github"></i>
            </a>
          </li>

          <li class="social-network__item">
            <a href="https://weibo.com/u/3941909649" target="_blank" title="新浪微博">
              <i class="iconfont icon-weibo"></i>
            </a>
          </li>

          <li class="social-network__item">
            <a href="https://www.zhihu.com/people/showccc/activities" target="_blank" title="知乎">
              <i class="iconfont icon-zhihu"></i>
            </a>
          </li>
        </ul>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input5: ""
    };
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
  padding: 0 40px;
  -webkit-box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
}

.el-menu {
  border: none !important;
}
.el-main {
  padding: 80px 20px 20px;
}
.page__logo > img {
  height: 40px;
}
.el-input--prefix .el-input__inner {
  border-radius: 22px;
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
    padding: 0 15px;
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
    transition: transform .3s;
}
.footer__bottom a {
    font-size: inherit;
    text-decoration: none;
    transition: color .3s;
    color: #fff;
}
</style>
