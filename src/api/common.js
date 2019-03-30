exports.install=function (Vue, options) {
  Vue.prototype.imgError = (item)=>{
    item.articleImgurl = require("../../static/img/notfound.png");
  }
};
