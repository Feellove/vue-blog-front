import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home'
import article from '@/components/compontent/article'
import articledetail from '@/components/compontent/articledetail'
import searchContent from '@/components/compontent/searchContent'
import info from '@/components/compontent/info'
import message from '@/components/compontent/message'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    component: home,
    redirect: 'article',
    children: [{
      path: '/article',
      name: 'article',
      component: article,
    }, {
      path: '/articledetail',
      name: 'articledetail',
      component: articledetail,
    }, {
      path: '/searchContent',
      name: 'searchContent',
      component: searchContent,
    }, {
      path: '/auther',
      name: 'info',
      component: info,
    }, {
      path: '/message',
      name: 'message',
      component: message,
    }]
  }]
})
