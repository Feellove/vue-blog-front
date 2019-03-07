<template>
  <div>
    <ul class="article_box">
      <li @click="toDetail('123')">
        <img src="static/img/a_1.jpg" alt="">
        <p>如何创建一个博客</p>
        <span class="article_text">界面设计，框架选择</span>
        <span>2019-3-5</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: 'articledetail', params: { id: id }})
    }
  },
};
</script>

<style scoped>
.article_box {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.article_box > li {
  min-width: 196px;
  height: 254px;
  cursor: pointer;
  margin: 8px;
  padding: 8px;
  border-radius: 6px;
  background-color: #fff;
}
.article_box > li:hover {
  box-shadow: 0px 2px 32px 0px rgba(24, 101, 245, 0.3);
}
.article_box > li > img {
  width: 196px;
  height: 170px;
}
.article_box > li > p {
  padding: 10px 10px 0;
  font-size: 16px;
  color: #505050;
  font-weight: 600;
}
.article_box > li > span {
  padding: 10px 10px 0;
  font-size: 14px;
  color: #b2b2b2;
  font-weight: 600;
  display: block;
}
.article_box > li > span.article_text {
  color: #a0a9b4;
  font-weight: normal;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 176px;
}
</style>
