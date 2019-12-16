import Vue from 'vue'
import Router from 'vue-router'
// import LoginIndex from '@/view/Login'
import admin from '@/view/admin'

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
      component: admin
    }
  ]
})
