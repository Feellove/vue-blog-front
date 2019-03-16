<template>
  <el-dropdown trigger="click" class="music_box">
    <span class="el-dropdown-link music_list_box"></span>
    <div class="play_tools">
      <span class="play_tools_list prev"></span>
      <span class="play_tools_list play pause"></span>
      <span class="play_tools_list next"></span>
    </div>
    <img src="../../../static/img/blog-bg.jpg" alt class="play_bg">
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
      <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.music_box {
  position: fixed;
  right: 20px;
  top: 138px;
  width: 80px;
  height: 80px;
  background: #fff;
  z-index: 999;
  border-radius: 50%;
}
.play_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 50%;
  object-fit: cover;
  -webkit-filter: blur(2px);
  filter: blur(2px);
}
.play_tools {
  position: absolute;
  top: calc(50% - 10px);
  height: 20px;
  z-index: 100;
  width: 100%;
  text-align: center;
  line-height: 20px;
  outline: none;
}
.play_tools_list {
  border-radius: 50%;
  display: inline-block;
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 0.8;
}
.music_list_box {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  outline: none;
  bottom: 0;
  left: calc(50% - 10px);
  z-index: 100;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
}
.prev {
  background: url(../../../static/img/left-circle-fill.png) no-repeat center;
}
.play {
  background: url(../../../static/img/play-circle-fill.png) no-repeat center;
}
/* .pause{
    background: url(../../../static/img/poweroff-circle-fill.png) no-repeat center;
} */
.next {
  background: url(../../../static/img/right-circle-fill.png) no-repeat center;
}
.music_list_box {
  background: url(../../../static/img/outdent.png) no-repeat center;
  background-size: contain;
}
.prev:hover,
.play:hover,
.next:hover,
.music_list_box:hover {
  opacity: 1;
}
.el-dropdown-menu{
    width: 300px;
}
</style>