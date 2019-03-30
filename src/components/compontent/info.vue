<template>
  <div>
    <div class="info_box">
      <div class="info_content">
        <img src="../../../static/img/head.png">
        <div class="W-lian fadeInLeft">
          <div class="W-lian-right"></div>
          <div class="clear"></div>
          <div class="W-lian-bot"></div>
          <div class="W-lian-zhong">
            <div class="W-lian-heng">
              <p class="W-lian-p1">汪</p>
              <p class="W-lian-p2">善辉</p><span class="p2_text">一名前端开发工程师</span>
              <div class="clear"></div>
            </div>
            <div class="W-lian-nr">
              <p class="W-lian-p3">
                <em class="W-lian-e1">职场</em>
                <em class="W-lian-e2">代码</em>
                <em class="W-lian-e3">时间</em>
                <em class="W-lian-e4">未来</em>
              </p>
              <p class="W-lian-p4">
                让时间更有意义<br>
                前端即兴趣，兴趣即未来<br>
                行路有良友，便是捷径<br>
                期待有机会与您共事！
              </p>
              <div class="W-lian-bottom">
                <a
                  v-for="(item,index) in linkLists"
                  :key="index"
                  :href="item.href"
                  target="_blank"
                >
                  <el-tooltip placement="top">
                    <div slot="content"><img
                        :src="item.tipsSrc"
                        alt=""
                        v-show="item.tipsSrc"
                        style="width:140px"
                      ><span v-show="item.tipsContent">{{item.tipsContent}}</span></div>
                    <img
                      :src="item.src"
                      alt=""
                    >
                  </el-tooltip>
                </a>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_shade"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkLists: [
        {
          href: "https://github.com/Feellove",
          src: "../../../static/img/github.png",
          tipsContent: "Feelman的github"
        },
        {
          href: "https://www.zhihu.com/people/feelmanwang/activities",
          src: "../../../static/img/zhihu.png",
          tipsContent: "Feelman的知乎"
        },
        {
          href: "javascript:;",
          src: "../../../static/img/QQ.png",
          tipsSrc: "../../../static/img/qq.jpg"
        },
        {
          href: "javascript:;",
          src: "../../../static/img/weixin.png",
          tipsSrc: "../../../static/img/wx.jpg"
        }
      ]
    };
  },
  mounted() {}
};
</script>
<style scoped>
.info_box {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background-size: cover;
  background: url(../../../static/img/bg.jpg) center no-repeat;
  padding: 24px 0;
}
.info_content {
  position: relative;
  z-index: 9;
}
.info_content > img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 50px auto -33px;
  display: block;
}
.box_shade {
  width: 100%;
  height: 100%;
  background-color: rgba(86, 83, 100, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: 5;
}
.W-lian {
  width: 500px;
  height: 460px;
  margin: 0 auto 60px;
  position: relative;
}
.fadeInLeft {
  -webkit-animation: fadeInLeft 1.2s ease-in;
  animation: fadeInLeft 1.2s ease-in;
  -o-animation: fadeInLeft 1.2s ease-in;
  -moz-animation: fadeInLeft 1.2s ease-in;
  -ms-animation: fadeInLeft 1.2s ease-in;
}
.W-lian-right {
  float: right;
  border-top: 6px solid #ffd200;
  border-right: 6px solid #ffd200;
  width: 150px;
  height: 100px;
}
.clear {
  clear: both;
  overflow: hidden;
}
.W-lian-bot {
  width: 488px;
  height: 30px;
  border-bottom: 6px solid #ffd200;
  border-right: 6px solid #ffd200;
  border-left: 6px solid #ffd200;
  position: absolute;
  bottom: 0;
}
.W-lian-zhong {
  position: absolute;
  width: 400px;
  height: 400px;
  left: 50px;
  top: 30px;
}
.W-lian-heng {
  width: 364px;
  margin-left: 18px;
  height: 70px;
  border-bottom: 1px solid #ffd200;
  overflow: hidden;
}
.W-lian-p1,
.W-lian-p2 {
  color: #ffd200;
  font-size: 40px;
  font-family: "微软雅黑";
  font-weight: 800;
  line-height: 70px;
  float: left;
}
.W-lian-p2 {
  color: #fff;
  width: 160px;
  margin-left: 0;
}
.W-lian-nr {
  width: 364px;
  height: auto;
  margin: 0 auto;
  text-align: center;
}
.W-lian-p3 {
  margin-top: 10px;
  height: 50px;
  line-height: 50px;
}
.W-lian-p3 em {
  font-size: 24px;
  font-family: "微软雅黑";
  font-style: normal;
  padding: 0 15px;
}
.W-lian-e1 {
  color: #e3723c;
}
.W-lian-e2 {
  color: #84c800;
}
.W-lian-e3 {
  color: #33ccff;
}
.W-lian-e4 {
  color: #9e966e;
}
.W-lian-p4 {
  margin-top: 14px;
  font-size: 18px;
  color: #fff;
  font-family: "微软雅黑";
  line-height: 35px;
}
.W-lian-bottom {
  width: 188px;
  margin: 0 auto;
  height: auto;
  margin-top: 24px;
}
.W-lian-bottom a {
  width: 34px;
  height: 34px;
  float: left;
  background: #404040;
  text-align: center;
  line-height: 34px;
  cursor: pointer;
  margin-left: 10px;
  position: relative;
  border-radius: 50%;
}
.W-lian-bottom img {
  object-fit: cover;
  border-radius: 50%;
  outline: none;
}
.p2_text {
  font-size: 18px;
  line-height: 70px;
  color: #fff;
}

@media screen and (max-width: 980px) {
  .info_content > img {
    margin: 10px auto -33px;
  }
  .W-lian {
    width: 320px;
  }
  .W-lian-right {
    width: 84px;
  }
  .W-lian-bot {
    width: 308px;
  }
  .W-lian-zhong {
    width: 320px;
    left: 0;
  }
  .W-lian-heng {
    width: 306px;
    margin-left: 4px;
  }
  .W-lian-p2 {
    width: 84px;
  }
  .W-lian-nr {
    width: 320px;
  }
  .p2_text {
    margin-left: 10px;
  }
}
</style>

