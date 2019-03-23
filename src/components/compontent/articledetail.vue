<template>
  <div class="a_box quill-editor editor">
    <div class="post__info">
      <h1 class="post__title">{{articleDetails.articleName}}</h1>
      <div class="post__mark">
        <div class="mark__block">
          <i class="mark__icon el-icon-time"></i>
          <ul class="mark__list clearfix">
            <li class="mark__item"><span>{{formateTime}}</span></li>
          </ul>
          <i class="mark__icon el-icon-bell"></i>
          <ul class="mark__list clearfix">
            <li class="mark__item" v-for="tag in articleDetails.tags" :key="tag">
              <a
                href="/"
              >{{tag}}</a>
            </li>

          </ul>
          <i class="mark__icon el-icon-view"></i>
          <ul class="mark__list clearfix">
            <li
              id="busuanzi_container_page_pv"
              class="mark__item"
              style="display: inline;"
            ><span id="busuanzi_value_page_pv">60</span>次</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ql-container ql-snow">
      <div
        class="a_content  ql-editor"
        v-html="articleDetails.articleContent"
      >{{articleDetails.articleContent}}</div>
    </div>
  </div>
</template>

<script>
import url from "@/api.config.js";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      articleDetails: "",
      id: ""
    };
  },
  created() {
    let id = this.$route.params.id;
    if (id) {
      sessionStorage.setItem("articleId", id);
    }
    this.id = sessionStorage.getItem("articleId");
    this.getOneArticle(this.id);
  },
  methods: {
    getOneArticle(id) {
      this.$axios({
        url: url.getOneArticle,
        method: "post",
        data: { _id: id }
      })
        .then(response => {
          if (response.data.code == 200 && response.data.message) {
            console.log(response.data.message);
            this.articleDetails = response.data.message;
            console.log(this.articleDetails);
          } else {
            console.log("获取数据失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  computed: {
    formateTime: function() {
      return moment(this.articleDetails.createTime).format("YYYY-MM-DD");
    }
  }
};
</script>

<style scoped>
.a_box {
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
  background-color: #fff;
  border-radius: 4px;
  height: calc(100% - 40px);
  padding: 0 20px 20px;
}
.post__info {
  padding: 30px 15px 0px;
}
.post__title {
  font-size: 28px;
  color: #242f35;
  font-weight: 400;
  line-height: 1;
  margin: 10px 0;
  text-align: center;
}
.post__mark {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.mark__block {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 15px;
  line-height: 30px;
  height: 30px;
  margin: 0 auto;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.mark__block .mark__icon {
  font-size: 18px;
  margin-right: 5px;
  vertical-align: middle;
}
.mark__block .mark__item:not(:last-child)::after {
    display: inline-block;
    content: ',';
}
.mark__block .mark__list {
  list-style: none;
  margin: 0 20px 0 0;
  padding: 0;
  line-height: 25px;
}
.mark__block .mark__item {
  float: left;
  margin-right: 5px;
}
.mark__block .mark__item > a {
  font-size: inherit;
  text-decoration: none;
  transition: color 0.3s;
  color: #666;
  vertical-align: middle;
}
.a_title {
  text-align: center;
  font-size: 18px;
  line-height: 35px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-weight: 500;
}
.a_content img {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
.ql-container.ql-snow {
  border: none;
}

</style>
