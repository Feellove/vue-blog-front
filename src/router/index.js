import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home'
import article from '@/components/compontent/article'
import articledetail from '@/components/compontent/articledetail'
import info from '@/components/compontent/info'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    redirect: 'article',
    children: [{
      path: '/article',
      name: 'article',
      component: article,
    },{
      path: '/articledetail',
      name: 'articledetail',
      component: articledetail,
    }]
  }, {
    path: '/auther',
    name: 'home',
    component: home,
    redirect: 'auther',
    children: [{
      path: '/auther',
      name: 'info',
      component: info,
    }]
  }]
})
