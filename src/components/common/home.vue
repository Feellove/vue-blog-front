<template>
  <el-container class="c_box">
    <el-aside>
      <el-menu
        default-active="/article"
        background-color="#232b2d"
        text-color="#75797c"
        active-text-color="#fff"
        :router=true
      >
        <div class="auther_img"><img
            src="static/img/head.png"
            alt=""
          ><span>Feelman</span><p>make more time</p></div>
        <el-menu-item index="/article">
          <i class="el-icon-tickets"></i>
          <span slot="title">所有文章</span>
        </el-menu-item>
        <el-menu-item index="/auther">
          <i class="el-icon-info"></i>
          <span slot="title">关于博主</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-share"></i>
          <span slot="title">友情链接</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span>所有文章</span>
        <div style="float:right">
          <el-input
            placeholder="请输入内容"
            v-model="input5"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
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
.c_box {
  height: 100%;
  margin: 100px 140px;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #efefef;
  padding: 10px 28px;
  height: auto !important;
  -webkit-box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
}

.el-aside {
  color: #efefef;
  width: 200px !important;
  font-weight: 600;
  background-color: #232b2d;
}
.el-menu {
  border: none !important;
}
.el-main {
  background-color: #f2f3f8;
  height: 666px;
  overflow-y: auto;
}
.auther_img {
  width: 120px;
  height: 120px;
  padding: 60px 40px;
  margin-bottom: 140px;
  text-align: center;
  font-size: 20px;
}
.auther_img > img {
  width: 120px;
  height: 120px;
   border-radius: 50%;
}
.auther_img > span {
  line-height: 40px;
  padding: 10px;
  display: inline-block;
}
.auther_img > p{
  font-size: 16px
}
</style>
