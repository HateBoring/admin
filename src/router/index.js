import Vue from 'vue'
import Router from 'vue-router'
// import LoginIndex from '@/view/Login'
import admin from '@/view/admin'
import index from '@/view/admin/index'
import Particle from '@/view/admin/article'
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
          name: 'Particle',
          path: '/admin/article',
          component: Particle
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
