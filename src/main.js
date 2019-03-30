// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import '../static/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'
import VmBackTop from 'vue-multiple-back-top'
import common from './api/common'//引用
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
Vue.use(common)//将全局函数当做插件来进行注册
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.component(VmBackTop.name, VmBackTop)
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
