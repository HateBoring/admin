import Vue from 'vue'
import Router from 'vue-router'
// import LoginIndex from '@/view/Login'
import admin from '@/view/admin'
import index from '@/view/admin/index'
import articleList from '@/view/admin/articleList'
import user from '@/view/admin/user'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'LoginIndex',
    //   component: LoginIndex
    // },
    {
      path: '/',
      name: 'admin',
      component: admin,
      children: [
        {
          name: 'index',
          path: '/admin/index',
          component: index
        },
        {
          name: 'articleList',
          path: '/admin/articleList',
          component: articleList
        },
        {
          name: 'user',
          path: '/admin/user',
          component: user
        }
      ]
    }
  ]
})
